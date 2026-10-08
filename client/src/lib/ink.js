/* Hand-inked SVG paths. A cartoonist's line is never a plotter's: it bows a
   little, wobbles along its length, and overshoots where two strokes meet.
   Everything here is seeded, so a drawing comes out the same on every render
   and never jumps on resize. */

export function rng(seed) {
  let s = seed >>> 0 || 1;
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

const r1 = (n) => Math.round(n * 10) / 10;

/* Catmull-Rom spline through the points, written as cubic Béziers. */
export function smooth(points, closed = false) {
  const n = points.length;
  if (n < 2) return "";
  const at = (i) => (closed ? points[(i + n) % n] : points[Math.max(0, Math.min(n - 1, i))]);
  let d = `M${r1(points[0][0])} ${r1(points[0][1])}`;
  const segments = closed ? n : n - 1;
  for (let i = 0; i < segments; i += 1) {
    const p0 = at(i - 1);
    const p1 = at(i);
    const p2 = at(i + 1);
    const p3 = at(i + 2);
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C${r1(c1x)} ${r1(c1y)} ${r1(c2x)} ${r1(c2y)} ${r1(p2[0])} ${r1(p2[1])}`;
  }
  return closed ? `${d}Z` : d;
}

/* One pen stroke from a to b: a slight bow plus a small wobble. */
export function line(a, b, seed = 1, wobble = 0.8) {
  const rand = rng(seed);
  const dx = b[0] - a[0];
  const dy = b[1] - a[1];
  const len = Math.hypot(dx, dy) || 1;
  const nx = -dy / len;
  const ny = dx / len;
  const steps = Math.max(2, Math.round(len / 16));
  const bow = (rand() - 0.5) * wobble * 2.4;
  const points = [];
  for (let i = 0; i <= steps; i += 1) {
    const t = i / steps;
    const jitter = i > 0 && i < steps ? (rand() - 0.5) * wobble : 0;
    const off = Math.sin(Math.PI * t) * bow + jitter;
    points.push([a[0] + dx * t + nx * off, a[1] + dy * t + ny * off]);
  }
  return smooth(points);
}

/* An outline drawn as separate strokes that overshoot each corner, the way a
   quick ink sketch does. `closed` joins the last point back to the first. */
export function outline(points, seed = 1, { over = 2.5, wobble = 0.8, closed = true } = {}) {
  const rand = rng(seed + 7);
  const n = points.length;
  const count = closed ? n : n - 1;
  const strokes = [];
  for (let i = 0; i < count; i += 1) {
    const a = points[i];
    const b = points[(i + 1) % n];
    const len = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
    const ux = (b[0] - a[0]) / len;
    const uy = (b[1] - a[1]) / len;
    const o1 = over * (0.3 + rand());
    const o2 = over * (0.3 + rand());
    strokes.push(line([a[0] - ux * o1, a[1] - uy * o1], [b[0] + ux * o2, b[1] + uy * o2], seed + i * 13, wobble));
  }
  return strokes.join(" ");
}

export const rectPoints = (x, y, w, h) => [
  [x, y],
  [x + w, y],
  [x + w, y + h],
  [x, y + h],
];

/* A filled shape's body: straight edges, drawn under the ink outline. */
export const fillPath = (points) => `M${points.map((p) => `${r1(p[0])} ${r1(p[1])}`).join(" L")}Z`;

/* A closed, slightly lumpy ellipse (domes, wheels, lenses, bubbles). */
export function oval(cx, cy, rx, ry, seed = 1, wobble = 0.8, n = 16) {
  const rand = rng(seed);
  const points = [];
  for (let i = 0; i < n; i += 1) {
    const a = (i / n) * Math.PI * 2;
    const k = 1 + ((rand() - 0.5) * wobble * 2) / Math.max(rx, ry);
    points.push([cx + Math.cos(a) * rx * k, cy + Math.sin(a) * ry * k]);
  }
  return smooth(points, true);
}

/* An open arc of an ellipse, from angle a0 to a1 (degrees, 0 = right). */
export function arc(cx, cy, rx, ry, a0, a1, seed = 1, wobble = 0.7) {
  const rand = rng(seed);
  const n = Math.max(4, Math.round(Math.abs(a1 - a0) / 18));
  const points = [];
  for (let i = 0; i <= n; i += 1) {
    const a = ((a0 + ((a1 - a0) * i) / n) * Math.PI) / 180;
    const k = 1 + ((rand() - 0.5) * wobble * 2) / Math.max(rx, ry);
    points.push([cx + Math.cos(a) * rx * k, cy + Math.sin(a) * ry * k]);
  }
  return smooth(points);
}

/* Trim a segment to a box (Liang–Barsky); null when it misses entirely. */
function clipToBox(x0, y0, x1, y1, xmin, ymin, xmax, ymax) {
  let t0 = 0;
  let t1 = 1;
  const dx = x1 - x0;
  const dy = y1 - y0;
  const p = [-dx, dx, -dy, dy];
  const q = [x0 - xmin, xmax - x0, y0 - ymin, ymax - y0];
  for (let i = 0; i < 4; i += 1) {
    if (p[i] === 0) {
      if (q[i] < 0) return null;
    } else {
      const r = q[i] / p[i];
      if (p[i] < 0) {
        if (r > t1) return null;
        if (r > t0) t0 = r;
      } else {
        if (r < t0) return null;
        if (r < t1) t1 = r;
      }
    }
  }
  return [x0 + t0 * dx, y0 + t0 * dy, x0 + t1 * dx, y0 + t1 * dy];
}

/* Parallel hatching strokes confined to a box, so shade lands only where
   it is drawn. Clip it to the shape as well, for shading at an edge. */
export function hatch(x, y, w, h, { gap = 5, angle = 45, seed = 1 } = {}) {
  const rand = rng(seed);
  const rad = (angle * Math.PI) / 180;
  const dx = Math.cos(rad);
  const dy = Math.sin(rad);
  const reach = Math.hypot(w, h);
  const cx = x + w / 2;
  const cy = y + h / 2;
  let d = "";
  for (let s = -reach / 2; s <= reach / 2; s += gap) {
    const ox = cx - dy * s;
    const oy = cy + dx * s;
    const seg = clipToBox(ox - dx * reach, oy - dy * reach, ox + dx * reach, oy + dy * reach, x, y, x + w, y + h);
    if (!seg) continue;
    const j = (rand() - 0.5) * 1.6;
    d += ` M${r1(seg[0])} ${r1(seg[1])}L${r1(seg[2] + j)} ${r1(seg[3] - j * 0.5)}`;
  }
  return d.trim();
}
