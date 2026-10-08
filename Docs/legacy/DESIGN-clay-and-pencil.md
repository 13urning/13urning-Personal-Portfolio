---
name: Regor Carlo Esconde — Portfolio
description: A warm clay-and-pencil studio where an AI engineer's work is pinned up like stickers on kraft paper.
colors:
  brick-crayon: "#CE6E48"
  brick-crayon-deep: "#B2542F"
  brick-crayon-ink: "#8E4023"
  brick-crayon-light: "#DD9270"
  brick-crayon-wash: "#F6DFD3"
  pencil-box-yellow: "#CE9631"
  pencil-box-yellow-deep: "#A9791F"
  pencil-box-yellow-light: "#E0B255"
  pencil-box-yellow-wash: "#F7E9C8"
  moss-ink: "#7E854B"
  moss-ink-deep: "#5F6537"
  moss-ink-light: "#A4A971"
  moss-ink-wash: "#E7E7D0"
  kraft-paper: "#F5EEE3"
  kraft-paper-sunken: "#EFE6D8"
  kraft-paper-card: "#FBF7F1"
  sticker-white: "#FFFFFF"
  pencil-line: "#E6DAC8"
  pencil-line-strong: "#D6C6AF"
  pencil-muted: "#8C7B63"
  pencil-body: "#47402F"
  ink-outline: "#322C21"
  graphite: "#241F18"
  night-desk: "#1C180F"
  night-raised: "#3A3325"
  status-good: "#6E8B4B"
  status-good-wash: "#E7ECD8"
typography:
  display:
    fontFamily: "'Bricolage Grotesque', 'Hanken Grotesk', system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 5.5vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'Bricolage Grotesque', 'Hanken Grotesk', system-ui, sans-serif"
    fontSize: "2.875rem"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  title:
    fontFamily: "'Bricolage Grotesque', 'Hanken Grotesk', system-ui, sans-serif"
    fontSize: "1.625rem"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  body-lead:
    fontFamily: "'Hanken Grotesk', system-ui, -apple-system, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.65
  body:
    fontFamily: "'Hanken Grotesk', system-ui, -apple-system, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "'Space Mono', ui-monospace, 'SFMono-Regular', monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    letterSpacing: "0.14em"
  annotation:
    fontFamily: "'Caveat', 'Bricolage Grotesque', cursive"
    fontSize: "1.875rem"
    lineHeight: 1
rounded:
  xs: "6px"
  sm: "10px"
  md: "16px"
  lg: "24px"
  xl: "34px"
  pill: "999px"
  blob: "22px 26px 20px 28px"
spacing:
  "1": "0.25rem"
  "2": "0.5rem"
  "3": "0.75rem"
  "4": "1rem"
  "5": "1.5rem"
  "6": "2rem"
  "7": "3rem"
  "8": "4rem"
components:
  button-sticker:
    backgroundColor: "{colors.sticker-white}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.md}"
    padding: "11px 20px"
  button-primary:
    backgroundColor: "{colors.brick-crayon}"
    textColor: "{colors.kraft-paper-card}"
    rounded: "{rounded.md}"
    padding: "11px 20px"
  button-primary-hover:
    backgroundColor: "{colors.brick-crayon-deep}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.graphite}"
    rounded: "{rounded.md}"
    padding: "11px 20px"
  card-sticker:
    backgroundColor: "{colors.sticker-white}"
    rounded: "{rounded.md}"
    padding: "1.5rem"
  card-soft:
    backgroundColor: "{colors.kraft-paper-card}"
    rounded: "{rounded.md}"
    padding: "1.5rem"
  card-flat:
    backgroundColor: "{colors.kraft-paper-sunken}"
    rounded: "{rounded.md}"
    padding: "1.5rem"
  tag-brick:
    backgroundColor: "{colors.brick-crayon-wash}"
    textColor: "{colors.brick-crayon-ink}"
    rounded: "{rounded.pill}"
    padding: "4px 11px"
  tag-yellow:
    backgroundColor: "{colors.pencil-box-yellow-wash}"
    textColor: "{colors.pencil-box-yellow-deep}"
    rounded: "{rounded.pill}"
    padding: "4px 11px"
  tag-moss:
    backgroundColor: "{colors.moss-ink-wash}"
    textColor: "{colors.moss-ink-deep}"
    rounded: "{rounded.pill}"
    padding: "4px 11px"
  badge-good:
    backgroundColor: "{colors.status-good-wash}"
    textColor: "{colors.status-good}"
    rounded: "{rounded.xs}"
    padding: "3px 9px"
  art-frame:
    backgroundColor: "{colors.sticker-white}"
    rounded: "{rounded.md}"
    padding: "12px 12px 10px"
  nav-link:
    textColor: "{colors.pencil-muted}"
    rounded: "{rounded.sm}"
    padding: "8px 13px"
---

# Design System: Regor Carlo Esconde — Portfolio

## Overview

**Creative North Star: "The Clay & Pencil Studio"**

The site is a maker's studio rendered in warm, earthy materials: kraft paper underfoot, graphite pencil lines, fired-clay accents, and finished work pinned up as thick-bordered stickers. It should feel like being welcomed into someone's workspace, warm and unhurried, while everything on the walls quietly proves the person ships. The hand-made layer (pencil-grain doodles, margin notes in handwriting, pieces set slightly askew) carries the warmth; the clean grotesque type, steady grid and consistent sticker system carry the confidence. The two never trade places: handwriting annotates, it never headlines.

Density is relaxed. Sections breathe inside a 1200px container, one idea per section, and colour is spent sparingly against a large field of paper so that the crayon accents read as deliberate marks rather than decoration. Depth is physical, not atmospheric: things are either flat paper or a sticker stuck on top of it, and the hard ink shadow says which.

The system is light-first with a full dark variant ("night studio"): the paper turns to graphite, the ink outline turns to paper, and every crayon steps one shade lighter so it keeps its voice on the dark ground.

**Key Characteristics:**
- Warm clay neutrals end to end; no cool greys and no pure black.
- Three crayon accents (brick, yellow, moss) that rotate across siblings, with brick as the lead voice.
- Thick ink-outlined stickers with hard offset shadows for anything touchable or showcased.
- Hand-drawn SVG doodles with a pencil-grain filter (sparkles, squiggle underlines).
- Short lowercase Caveat margin notes, tilted 1–2.5°, sitting above Bricolage headings.
- Springy, tactile touch feedback; slow, calm ambient motion.

## Colors

A warm, low-chroma earth palette: one paper-and-graphite neutral family carrying three crayon accents.

### Primary
- **Brick Crayon** (#CE6E48): the lead voice. Handwritten annotations, the logo blob, the hero squiggle underline, period labels in the work history, and primary accents. Deepens to **Brick Crayon Deep** (#B2542F) for hover and icon strokes on wash backgrounds; **Brick Crayon Ink** (#8E4023) is its text colour on tags; **Brick Crayon Wash** (#F6DFD3) fills soft panels such as the contact card, hero photo backing and tag fills. In dark mode the accent becomes **Brick Crayon Light** (#DD9270).

### Secondary
- **Pencil-Box Yellow** (#CE9631): the second crayon. Sparkle doodles, ochre-toned tags and icon wells, avatar initials. **Pencil-Box Yellow Deep** (#A9791F) for text on its wash; **Pencil-Box Yellow Wash** (#F7E9C8) for fills; **Pencil-Box Yellow Light** (#E0B255) in dark mode.

### Tertiary
- **Moss Ink** (#7E854B): the cool-earth counterpoint. Moss-toned tags and icon wells, the footer sparkle. **Moss Ink Deep** (#5F6537) for text on its wash; **Moss Ink Wash** (#E7E7D0) for fills; **Moss Ink Light** (#A4A971) in dark mode.

### Neutral
- **Kraft Paper** (#F5EEE3): the page. Everything sits on it.
- **Kraft Paper Sunken** (#EFE6D8): recessed panels, flat cards, hover fills.
- **Kraft Paper Card** (#FBF7F1): soft card surfaces and text on brick buttons.
- **Sticker White** (#FFFFFF): the face of every sticker (sticker cards, art frames, sticker buttons, notes).
- **Pencil Line** (#E6DAC8) and **Pencil Line Strong** (#D6C6AF): hairline borders, dividers, ghost-button outlines.
- **Pencil Muted** (#8C7B63): secondary text, metadata, idle nav links.
- **Pencil Body** (#47402F): running text.
- **Ink Outline** (#322C21): sticker borders and the hard offset shadow.
- **Graphite** (#241F18): headings and strong text; the page colour in dark mode, where **Night Desk** (#1C180F) is the sunken surface and **Night Raised** (#3A3325) the raised one.
- **Status Good** (#6E8B4B on #E7ECD8): "Live" and "Shipped" badges only.

### Named Rules
**The Three Crayons Rule.** Sibling cards cycle brick → yellow → moss, in that order, through their tags and icon wells. Two neighbours never share a crayon.

**The Warm Ink Rule.** Every dark mark (text, outlines, shadows) is a warm clay brown. Pure black (#000) and neutral grey never appear; shadows are tinted `rgba(64, 45, 24, …)`.

## Typography

**Display Font:** Bricolage Grotesque (with Hanken Grotesk, system-ui)
**Body Font:** Hanken Grotesk (with system-ui, -apple-system)
**Label/Mono Font:** Space Mono (with ui-monospace)
**Annotation Font:** Caveat (handwriting)

**Character:** A characterful grotesque for headings (tight, slightly quirky at large optical sizes) over a friendly, highly readable grotesque body. Space Mono supplies the workbench labels; Caveat is the pencil in the margin.

### Hierarchy
- **Display** (700, clamp(2.5rem, 5.5vw, 4rem), 1.02): the hero statement only, max 15ch.
- **Headline** (700, 2.875rem, 1.05): section-defining headings such as the name in About and "Let's talk."
- **Title** (700, 1.625rem, 1.05): card and project titles; "What I do" uses the 2.125rem step.
- **Body Lead** (400, 1.25rem, 1.65): hero and section intros, max 47–52ch.
- **Body** (400, 1.0625rem, 1.5): running text; card copy steps down to 0.9375rem at 1.55 in Pencil Muted.
- **Label** (400, 0.6875rem, 0.14em, uppercase): section eyebrows ("SELECTED WORK"), dates, locations, counters, badges.
- **Annotation** (Caveat, 20–30px, line-height 1): margin notes only.

### Named Rules
**The Margin Note Rule.** Caveat is used only for short lowercase notes (roughly six words or fewer), tilted −1° to −2.5°, usually ending in an em dash, placed directly above or beside a Bricolage heading. It is never a heading, a button label or body copy.

**The Workbench Label Rule.** Anything that is metadata (dates, places, counts, status) is set in Space Mono at label size. Prose is never set in mono.

## Layout

A centred 1200px container (`75rem`) with 34px side gutters; sections are padded 52px top and bottom, dropping to 40px × 20px at 900px and below. The homepage alternates asymmetric two-column splits (hero 1.05fr / 0.9fr with a 52px gap; about 1fr / 1fr with a 40px gap) with card grids (two columns at 26px gaps for work, three at 22px for services). The Art page is a three-column masonry (26px gaps) that drops to two columns at 1000px and one at 620px.

Breakpoints: 1000px (masonry → 2), 900px (splits and 3-up grids stack), 760px (2-up grids stack, nav links hide), 620px (masonry → 1). The header is sticky, 82% Kraft Paper with a 10px backdrop blur and a 1.5px Pencil Line bottom border. Spacing follows a 4px-based scale (0.25rem to 4rem), but component internals use hand-tuned values (13px, 22px, 26px) that should be kept as written.

## Elevation & Depth

Depth is physical and binary: a surface is either paper (flat, or at most a soft ambient shadow) or a sticker stuck on top of it (thick ink outline plus a hard, unblurred offset shadow). There is no atmospheric glow or blur-based floating.

### Shadow Vocabulary
- **Sticker** (`box-shadow: 4px 4px 0 var(--border-ink)`): sticker cards, art frames, hero photo frame, contact card.
- **Sticker Small** (`box-shadow: 3px 3px 0 var(--border-ink)`): sticker buttons, icon buttons, small notes, logo blob.
- **Sticker Lifted** (`box-shadow: 6px 7px 0 var(--border-ink)`): the hover state of an interactive sticker.
- **Soft** (`box-shadow: 0 2px 6px rgba(64, 45, 24, 0.08)`): soft paper cards and primary buttons at rest.
- **Soft Lifted** (`box-shadow: 0 16px 40px rgba(64, 45, 24, 0.14)`): hover state of an interactive soft card.

### Named Rules
**The Sticker Lift Rule.** A hard ink offset means "stuck on and touchable." On hover a sticker lifts (cards −2px, −3px; buttons −1px, −1px) and its shadow grows by the same amount; on press it sinks 2px into its shadow while the shadow shrinks to match, so the shadow's outer edge never moves. Blurred shadows are never put on a sticker, and ink offsets are never put on plain paper.

## Shapes

Soft rectangles with friendly corners: 10px for small controls, 16px for cards, buttons and frames, 24px for the large contact panel, pills for tags. Marks that stand for a person or a category (the logo, the hero portrait frame, service icon wells) use the **hand-cut blob** radius (22px 26px 20px 28px), so they read as cut out by hand rather than machined. Strokes come in three weights: 1px hairline, 1.5px for quiet outlines, 2.5px ink for stickers.

Things that are pinned rather than placed sit slightly off-axis: art frames alternate −1.2° / +1.1°, the location note sits at −3°, margin notes at −1° to −2.5°. Hand-drawn doodles (sparkles, squiggle underlines) are SVG paths with round caps and joins, passed through a pencil-grain filter (fractal-noise displacement plus speckled alpha) so their edges look drawn.

### Named Rules
**The Askew Rule.** Only pinned things tilt: stickers, notes, frames and annotations, by no more than 3°. Layout containers, text blocks and controls are always square to the grid.

## Components

### Buttons
Tactile and springy: they behave like stickers you can press.
- **Shape:** gently rounded (10px at small size, 16px at medium and large).
- **Sticker (default for primary actions on the page):** Sticker White face, Graphite label, 2.5px Ink Outline, Sticker Small shadow; 600 weight Hanken at 0.9375–1.25rem.
- **Primary:** Brick Crayon fill with Kraft Paper Card label and a Soft shadow; deepens to Brick Crayon Deep on hover. Defined in the component kit; the pages currently use Sticker and Ghost.
- **Ghost:** transparent with a 1.5px Pencil Line Strong outline and Graphite label, for secondary actions ("Say hi", "Code", "Live demo").
- **Press:** sticker buttons sink 2px into their shadow in 100ms (strong ease-out) and spring back on release (spring, 0.3s, bounce 0.35); buttons without an ink shadow squish to 97% instead. Hover lifts are mouse-only (confirmed: springy touch feel).
- **Focus:** 2.5px Brick Crayon Light ring at a 2px offset with a 6px radius.

### Icon Buttons
Square (10px radius) or round, 32/40/48px, in ghost, solid brick or sticker variants; same press behaviour as buttons. Round sticker icon buttons carry the social links and the lightbox close control.

### Cards / Containers
- **Sticker card:** Sticker White, 16px radius, 2.5px Ink Outline, Sticker shadow, 1.5rem padding. Used for projects and services. Interactive ones lift on hover per the Sticker Lift Rule.
- **Soft card:** Kraft Paper Card with a 1.5px Pencil Line border and Soft shadow, for quieter panels such as the work-history list.
- **Flat card:** Kraft Paper Sunken with a Pencil Line border and no shadow.
- **Image wells** inside cards: 158px tall, 10px radius, 1.5px Pencil Line border, crayon wash background with a 44px line icon when there is no screenshot.

### Chips (Tags and Badges)
- **Tags:** pill, 4px × 11px, 0.8125rem Hanken 500, crayon wash fill, 1.5px crayon-light border, deep crayon text; the tone follows the Three Crayons Rule.
- **Badges:** 6px radius, uppercase Space Mono label size with 0.04em tracking, status-wash fill, optional 6px status dot. Used for "Live", "Shipped", "Private".

### Navigation
Sticky translucent header: the brick blob logo ("R" in Caveat, 2.5px ink outline, Sticker Small shadow) and the wordmark "Regor." with a brick full stop; text links in Pencil Muted Hanken 500 at 0.9375rem that turn Graphite on hover; a hairline divider, then ghost icon buttons (theme, GitHub) and a sticker "Contact" button. Below 760px the text links hide and only the icon buttons and Contact remain.

### Art Frame (signature)
A polaroid-like sticker: Sticker White face with 12px padding (10px at the bottom), 16px radius, 2.5px Ink Outline and Sticker shadow, the artwork inset with a 10px radius and 1.5px Pencil Line border, and a caption row with the title in Caveat 22px (tilted −1°) and a Space Mono index ("01"). Frames alternate −1.2° / +1.1°, pin up onto the wall as they scroll into view (dropping from a raised shadow to the stuck-on one), and on hover lift and lean toward the pointer by at most 3°. Clicking (or Enter/Space) opens the **lightbox**: the frame itself flies from its place on the wall into a warm-ink scrim (`rgba(36, 31, 24, 0.85)`) at up to 860px wide, with a round sticker close button breaking the top-right corner; it flies back on close, while Escape closes instantly.

### Sticker Note (signature)
A small Sticker White label with a 2.5px ink outline, Sticker Small shadow, 10px radius and Space Mono text, stuck on the edge of the hero portrait at −3° ("Muntinlupa, PH · open to work").

### Doodles (signature)
Pencil-grain SVG marks: the four-point **Sparkle** (Pencil-Box Yellow or Moss Ink fill, 2.2px ink stroke) that bobs gently beside key moments, the **squiggle underline** (3.6px Brick Crayon stroke) that draws itself under the hero statement on load, and the wobbling **pencil rail** of the career timeline, which draws down the job list as you scroll. While on screen, every doodle "boils": its grain is re-seeded about eight times a second so the pencil line shimmers like hand-drawn animation (off under reduced motion).

## Do's and Don'ts

### Do:
- **Do** keep every dark mark warm: Ink Outline (#322C21) and Graphite (#241F18), shadows tinted `rgba(64, 45, 24, …)`.
- **Do** give anything clickable or showcased the full sticker treatment: 2.5px Ink Outline plus a hard offset shadow (4px 4px 0, or 3px 3px 0 for small parts).
- **Do** rotate crayon tones across siblings brick → yellow → moss.
- **Do** pair every Caveat margin note with a real Bricolage heading or Hanken statement that carries the meaning on its own.
- **Do** run hand-drawn SVG marks through the pencil-grain filter so they never look plotter-clean.

### Don't:
- **Don't** use pure black, cool greys or blue-tinted neutrals anywhere.
- **Don't** put blurred drop shadows on stickers, or hard ink offsets on plain paper surfaces.
- **Don't** use Caveat for headings, buttons, long sentences or anything a visitor must read to act.
- **Don't** tilt layout containers, text blocks or controls; only pinned things are askew, and never past 3°.
- **Don't** introduce a fourth accent hue; new needs are met with washes and deeps of the three crayons.
