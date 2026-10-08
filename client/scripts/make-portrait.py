"""Bake the hero portrait's hand-drawn "boil".

Reads src/components/Assets/regoravatar.png (the original illustration) and
writes src/components/Assets/portrait-boil-{240,360,480}.webp: three frames of
the portrait side by side, stepped through by a CSS transform at 8 drawings a
second (no filter, no repaint, so it costs nothing while scrolling).

Only three things move between frames, each by about a pixel, the way lines
shimmer when a drawing is traced again on every frame:
  - the outline of the hair (fading out above the neckline: shoulders and
    jacket stay still),
  - the frames of the glasses (a band that follows the rims and the bridge;
    it fades to nothing around each eye, so the eyes never move or warp),
  - the mouth, nudged a little each frame.
Everything else (eyes, eyebrows, nose, beard, jacket) is identical in every
frame. Coordinates below are in the cropped source's pixels.

  - Crop: 4:5, cut just above the drawing's torn hem (it starts at row 448), so
    the panel frame crops the bust instead of showing the ragged edge.
  - Frames: 3, warped at the source's resolution, then sized per pixel density
    (240, 360 and 480 px per frame: 1x, 1.5x and 2x of a panel no wider than
    240 CSS px).

Run from client/:  python scripts/make-portrait.py   (needs Pillow and numpy)
"""
import os

import numpy as np
from PIL import Image, ImageFilter

HERE = os.path.dirname(os.path.abspath(__file__))
ASSETS = os.path.join(HERE, "..", "src", "components", "Assets")
SRC = os.path.join(ASSETS, "regoravatar.png")
CROP = (72, 0, 427, 444)
FRAMES = 3
GRAIN = 12  # source px between noise control points

HAIR_AMP = 1.6  # px, at the very edge of the hair
HAIR_EDGE = 4  # px either side of the silhouette that may move
NECKLINE = (318, 338)  # the hair's motion fades out between these rows

GLASSES_AMP = 1.3  # px
GLASSES_BOX = (98, 197, 243, 241)  # x0, y0, x1, y1 around both lenses and the bridge
EYES = [((132, 216), (17, 12)), ((207, 212), (20, 15))]  # centre, radii: never move
EYE_CLEARANCE = 5  # px over which motion fades to nothing outside each eye

MOUTH = ((177, 279), (42, 12))  # centre, radii
MOUTH_NUDGE = [(0.0, 0.0), (0.8, -0.6), (-0.6, 0.7)]  # px, one per frame
MOUTH_WIGGLE = 0.5  # px of noise on top of the nudge


def noise(h, w, seed):
    """A smooth random field with unit spread: coarse noise, upscaled bicubically."""
    rng = np.random.default_rng(seed)
    coarse = rng.standard_normal((h // GRAIN + 3, w // GRAIN + 3)).astype(np.float32)
    field = np.asarray(Image.fromarray(coarse, "F").resize((w + 3 * GRAIN, h + 3 * GRAIN), Image.BICUBIC))
    field = field[GRAIN : GRAIN + h, GRAIN : GRAIN + w]
    return field / (field.std() or 1)


def warp(rgba, dx, dy):
    """Resample the image at (x + dx, y + dy), bilinear, with premultiplied alpha."""
    h, w = rgba.shape[:2]
    a = rgba[..., 3:4] / 255
    pre = np.concatenate([rgba[..., :3] * a, a * 255], axis=2)
    ys, xs = np.mgrid[0:h, 0:w].astype(np.float32)
    x = np.clip(xs + dx, 0, w - 1.001)
    y = np.clip(ys + dy, 0, h - 1.001)
    x0, y0 = np.floor(x).astype(int), np.floor(y).astype(int)
    fx, fy = (x - x0)[..., None], (y - y0)[..., None]
    out = (
        pre[y0, x0] * (1 - fx) * (1 - fy)
        + pre[y0, x0 + 1] * fx * (1 - fy)
        + pre[y0 + 1, x0] * (1 - fx) * fy
        + pre[y0 + 1, x0 + 1] * fx * fy
    )
    alpha = out[..., 3:4] / 255
    rgb = np.where(alpha > 0, out[..., :3] / np.maximum(alpha, 1e-6), 0)
    return np.concatenate([rgb, out[..., 3:4]], axis=2).clip(0, 255).astype(np.uint8)


def soft(mask, radius):
    """A 0..1 mask blurred so it fades over about `radius` px."""
    img = Image.fromarray((mask * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(radius))
    return np.asarray(img, dtype=np.float32) / 255


def ellipse(h, w, centre, radii):
    ys, xs = np.mgrid[0:h, 0:w].astype(np.float32)
    return (((xs - centre[0]) / radii[0]) ** 2 + ((ys - centre[1]) / radii[1]) ** 2) <= 1


def masks(src):
    """How far each pixel may move: hair outline, glasses frames, mouth."""
    h, w = src.shape[:2]
    alpha = src[..., 3]
    lum = (0.299 * src[..., 0] + 0.587 * src[..., 1] + 0.114 * src[..., 2]) / 255

    # Hair: a band either side of the silhouette, above the neckline only.
    a = Image.fromarray(alpha.astype(np.uint8))
    k = 2 * HAIR_EDGE + 1
    band = np.asarray(a.filter(ImageFilter.MaxFilter(k)), dtype=np.float32) - np.asarray(a.filter(ImageFilter.MinFilter(k)), dtype=np.float32)
    band = soft(band.clip(0, 255) / 255, HAIR_EDGE / 2)
    band /= band.max() or 1
    rows = np.arange(h, dtype=np.float32)[:, None]
    above_neck = np.clip((NECKLINE[1] - rows) / (NECKLINE[1] - NECKLINE[0]), 0, 1)
    hair = band * above_neck

    # Glasses: the rims' dark strokes inside the glasses' box, widened a little.
    eyes = np.zeros((h, w), bool)
    for centre, radii in EYES:
        eyes |= ellipse(h, w, centre, radii)
    x0, y0, x1, y1 = GLASSES_BOX
    box = np.zeros((h, w), bool)
    box[y0:y1, x0:x1] = True
    strokes = (lum < 0.32) & (alpha > 200) & box & ~eyes
    rims = soft(np.asarray(Image.fromarray((strokes * 255).astype(np.uint8)).filter(ImageFilter.MaxFilter(5)), dtype=np.float32) / 255, 1.5)
    rims = np.clip(rims * 1.6, 0, 1) * box  # stays inside the box: the eyebrows sit just above it
    # Never near an eye: full stop inside it, fading out over EYE_CLEARANCE px.
    still = np.clip(soft(np.asarray(Image.fromarray((eyes * 255).astype(np.uint8)).filter(ImageFilter.MaxFilter(2 * EYE_CLEARANCE + 1)), dtype=np.float32) / 255, EYE_CLEARANCE / 2) * 1.5, 0, 1)
    still = np.maximum(still, eyes)
    glasses = rims * (1 - still)

    mouth = soft(ellipse(h, w, *MOUTH).astype(np.float32), 3)
    return hair, glasses, mouth


def frames():
    src = np.asarray(Image.open(SRC).convert("RGBA").crop(CROP), dtype=np.float32)
    h, w = src.shape[:2]
    hair, glasses, mouth = masks(src)
    out = []
    for i in range(FRAMES):
        nx, ny = noise(h, w, 11 + i), noise(h, w, 101 + i)
        mx, my = MOUTH_NUDGE[i]
        dx = nx * (hair * HAIR_AMP + glasses * GLASSES_AMP + mouth * MOUTH_WIGGLE) + mouth * mx
        dy = ny * (hair * HAIR_AMP + glasses * GLASSES_AMP + mouth * MOUTH_WIGGLE) + mouth * my
        out.append(Image.fromarray(warp(src, dx, dy), "RGBA"))
    return out


if __name__ == "__main__":
    drawn = frames()
    for fw in (240, 360, 480):
        fh = round(fw * 5 / 4)
        strip = Image.new("RGBA", (fw * FRAMES, fh), (0, 0, 0, 0))
        for i, frame in enumerate(drawn):
            strip.paste(frame.resize((fw, fh), Image.LANCZOS), (i * fw, 0))
        out = os.path.join(ASSETS, f"portrait-boil-{fw}.webp")
        strip.save(out, "WEBP", quality=80, method=6)
        print(f"{os.path.basename(out)}  {strip.size}  {os.path.getsize(out) // 1024} KB")
