---
name: Regor Carlo Esconde
description: A portfolio drawn as a self-running Rube Goldberg newspaper cartoon, in india ink and process colour on bright newsprint.
colors:
  paper: "#fbfcfc"
  paper-2: "#edf0f2"
  ink: "#121212"
  ink-2: "#33363b"
  ink-3: "#5f636a"
  rule: "#c9cfd4"
  cyan: "#00a6d6"
  cyan-tint: "#cdeef9"
  yellow: "#ffd51f"
  yellow-tint: "#fff3b8"
  magenta: "#e5007e"
  magenta-deep: "#b4005f"
  on-magenta: "#ffffff"
  on-color: "#121212"
typography:
  display:
    fontFamily: "Libre Franklin, Franklin Gothic Medium, Arial, sans-serif"
    fontSize: "clamp(2.6rem, 5.4vw, 4.6rem)"
    fontWeight: 900
    lineHeight: 0.98
    letterSpacing: "-0.03em"
  display-page:
    fontFamily: "Libre Franklin, Franklin Gothic Medium, Arial, sans-serif"
    fontSize: "clamp(3rem, 7vw, 5.5rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Libre Franklin, Franklin Gothic Medium, Arial, sans-serif"
    fontSize: "clamp(2rem, 3.6vw, 3rem)"
    fontWeight: 900
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  nameplate:
    fontFamily: "Libre Franklin, Franklin Gothic Medium, Arial, sans-serif"
    fontSize: "clamp(1.7rem, 3.2vw, 2.5rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Libre Franklin, Franklin Gothic Medium, Arial, sans-serif"
    fontSize: "1.6rem"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.02em"
  title-sm:
    fontFamily: "Libre Franklin, Franklin Gothic Medium, Arial, sans-serif"
    fontSize: "1.22rem"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.015em"
  deck:
    fontFamily: "Libre Franklin, system-ui, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Libre Franklin, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Libre Franklin, Franklin Gothic Medium, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1
  dateline:
    fontFamily: "Libre Franklin, system-ui, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 700
    letterSpacing: "0.06em"
    fontFeature: "small-caps"
  stamp:
    fontFamily: "Libre Franklin, Franklin Gothic Medium, Arial, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "0.12em"
  hand:
    fontFamily: "Kalam, Segoe Print, cursive"
    fontSize: "1.15rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.03em"
  hand-coin:
    fontFamily: "Kalam, Segoe Print, cursive"
    fontSize: "1.35rem"
    fontWeight: 700
    lineHeight: 1
rounded:
  focus: "2px"
  plate: "4px"
  coin: "50%"
  balloon: "50% / 46%"
spacing:
  xs: "8px"
  sm: "12px"
  md: "18px"
  panel: "30px"
  stage-gap: "92px"
  section: "96px"
  section-lg: "104px"
  gutter: "clamp(20px, 4vw, 40px)"
  container: "1200px"
  masthead: "52px"
components:
  plate:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.plate}"
    padding: "12px 18px"
  plate-hover:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.on-color}"
  plate-email:
    backgroundColor: "{colors.magenta}"
    textColor: "{colors.on-magenta}"
    typography: "{typography.label}"
    rounded: "{rounded.plate}"
    padding: "12px 18px"
  plate-email-hover:
    backgroundColor: "{colors.magenta-deep}"
    textColor: "{colors.on-magenta}"
  plate-sm:
    rounded: "{rounded.plate}"
    padding: "8px 12px"
  plate-lg:
    rounded: "{rounded.plate}"
    padding: "15px 24px"
  icon-plate:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.plate}"
    size: "40px"
  stamp-live:
    backgroundColor: "{colors.cyan}"
    textColor: "{colors.on-color}"
    typography: "{typography.stamp}"
    padding: "3px 8px 2px"
  stamp-shipped:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.on-color}"
    typography: "{typography.stamp}"
    padding: "3px 8px 2px"
  stage-coin:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.on-color}"
    typography: "{typography.hand-coin}"
    rounded: "{rounded.coin}"
    size: "44px"
  caption-box:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.on-color}"
    typography: "{typography.hand}"
    padding: "3px 12px"
  speech-balloon:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.hand}"
    rounded: "{rounded.balloon}"
    padding: "12px 22px"
  stage-panel:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-2}"
    padding: "{spacing.panel}"
---

# Design System: Regor Carlo Esconde

## Overview

**Creative North Star: "The Self-Running Contraption"**

The site is one Rube Goldberg cartoon printed on a newspaper page. A tedious task drops in at the top, a marble rides an inked chute down the page's gutters, each shipped project is a lettered stage whose machine fires as the marble passes, and the run ends in an envelope beside the Email plate. Everything around the machine is set like a newspaper: a nameplate with date and edition, a pinned section bar, double-ruled section heads, justified news columns with datelines, and a classifieds page.

The material is bright white newsprint, india ink and four-colour process: cyan carries whole fields as Ben-Day halftone, yellow highlights, and magenta is spent only on the part in motion and the Email action. Every line is inked in code: seeded strokes that bow, wobble and overshoot their corners, weighted like a cartoonist's pen, roughened by a fixed displacement filter. Depth is overlap and knockout, never shadow. Density is a newspaper's: generous gutters, heavy black gothic heads, readable body at about 62ch.

The previous cream-and-terracotta sticker site is the confirmed anti-reference: no cream paper, no sticker cut-outs, no tilted badges.

**Key Characteristics:**
- Bright newsprint (never cream), india ink, process cyan / yellow / magenta.
- Ben-Day halftone fields and dot fills.
- Hand-inked panel frames with corner overshoot that keep their weight at any size.
- Drawings break out of their panels, cut free by a paper knockout halo.
- Libre Franklin newspaper gothic for everything typeset; Kalam caps for the cartoonist's hand.
- Double-ruled newspaper rules.
- Ink plates that press in 100ms and spring back.
- A day edition and a night edition; reduced motion shows the run already finished.

## Colors

Four-colour process on bright newsprint: ink does the drawing, cyan carries fields, yellow highlights, magenta moves.

### Primary
- **Process Cyan** (cyan): the field colour. Whole bands (hero portrait panel, inbox, services, the Art band) are cyan with a white Ben-Day dot screen; it also fills machine parts, the Live stamp, the status dot, focus rings and link underlines on hover.
- **Cyan Wash** (cyan-tint): the chute's bed and the lens glass, and the ground of cyan dot fills (the clapperboard's bars).

### Secondary
- **Process Yellow** (yellow): highlight. Plate hover, text selection, stage coins, Shipped stamps, caption boxes, the Wanted ad, linkage trip flags, the hero headline's highlighter stroke, the current-page underline.
- **Yellow Wash** (yellow-tint): the ground of yellow dot fills inside drawings.

### Tertiary
- **Process Magenta** (magenta): the Email plate everywhere it appears, and the comic speed lines that flash while a machine part moves. Nothing else.
- **Deep Magenta** (magenta-deep): Email plate hover only.

### Neutral
- **Newsprint** (paper): page ground, panel grounds, plate faces, knockout halo, linkage rod cores.
- **Second Sheet** (paper-2): scrollbar track; quiet secondary ground.
- **India Ink** (ink): every drawn line, frame, rule, heading and the colophon's reversed ground.
- **Press Grey** (ink-2): body copy.
- **Pencil Grey** (ink-3): hand-lettered section notes and the printed email address.
- **Hairline** (rule): light rule colour.
- **On-colour** (on-color): text on cyan and yellow, the same near-black in both editions. **On-magenta** (on-magenta): text on the Email plate (white by day, near-black by night).

### Night edition
`[data-theme="dark"]` reprints the same tokens in reverse: paper #121417, paper-2 #1a1e22, ink #f1f2ee, ink-2 #cbcfd4, ink-3 #9aa0a8, rule #343a41, cyan #29b6e4, cyan-tint #12384a, yellow #ffd84a, yellow-tint #3a3312, magenta #ff3d9a, magenta-deep #ff70b4, on-magenta #121212. Components only ever reference tokens, so every frame, knockout, coin and plate flips with the edition; on-color stays dark on cyan and yellow in both.

### Named Rules
**The Magenta Is Motion Rule.** Magenta marks the Email action and the speed lines of a part in motion. It never fills a field, a heading, a stamp or a decorative shape.

**The Newsprint Rule.** Paper is bright cool white (paper token), never cream, beige or warm off-white.

**The Ben-Day Rule.** Colour fields are flat process colour with a dot screen (white 1.2px dots on a 7px grid over cyan); colour fills inside drawings are dot patterns (process dot at 24% radius on its wash) or flat process colour. No gradients, no tints by opacity.

## Typography

**Display Font:** Libre Franklin (with Franklin Gothic Medium, Arial)
**Body Font:** Libre Franklin (with system-ui)
**Hand Font:** Kalam (with Segoe Print, cursive)

**Character:** A heavy American newspaper gothic does all the typesetting, from 900-weight heads to small-caps datelines; Kalam is the cartoonist's own hand, lettered in caps beside the drawings.

### Hierarchy
- **Display** (900, clamp(2.6rem, 5.4vw, 4.6rem), 0.98): the hero claim, max 13ch.
- **Display Page** (900, clamp(3rem, 7vw, 5.5rem), 0.9): a page title on a cyan band (Art).
- **Nameplate** (900, clamp(1.7rem, 3.2vw, 2.5rem), 1): the paper's name in the masthead and colophon.
- **Headline** (900, clamp(2rem, 3.6vw, 3rem), 1.04, -0.025em): section heads.
- **Title** (800, 1.6rem): stage (project) titles; **Title Small** (800, 1.22rem): news-column items.
- **Deck** (400, 1.2rem, 1.55, max 44ch): the line under the hero head.
- **Body** (400, 1.0625rem, 1.6, max about 62ch): running copy, in Press Grey; headings in India Ink.
- **Label** (700, 1rem, 1): plate text.
- **Dateline** (700 to 800, small caps, 0.82rem, 0.04 to 0.06em): edition line and job datelines.
- **Stamp** (800, 0.72rem, 0.12em, uppercase): status tags.
- **Hand** (Kalam 700, 1.15rem, 0.03em, uppercase): margin notes, stage captions, speech balloon, caption boxes; **Hand Coin** (Kalam 700, 1.35rem) for stage letters.

### Named Rules
**The Two Hands Rule.** Franklin sets everything typeset; Kalam is reserved for what the cartoonist letters by hand: margin notes, stage captions with leader lines, the speech balloon, caption boxes, stage coins and the "Parts" run-in. Kalam never sets a heading, body copy, a plate or navigation.

**The Beside, Not Above Rule.** A hand note sits on the heading's baseline, after it, or under it as a caption with an arrow or leader. It is never a small label stacked above a heading.

## Layout

A single 1200px column with a fluid gutter (clamp(20px, 4vw, 40px)), set like a broadsheet. The masthead is a nameplate (date | name | place and edition) over a sticky 52px section bar; anchors scroll with the bar's height plus 16px of padding.

The home page is one continuous run: hero, stages and inbox share a track. Stages are paper panels (about 76% wide, max 880px, 30px padding) alternating left and right with 92px between them, so the chute can run down the open gutter on the far side, bend across, and run down the next. Each stage is a two-column grid (body plus a 210px drawing column, mirrored on the left-hand stages), with the stage's job lettered out in the margin beyond the track. Section bands use 96 to 112px vertical padding. Experience runs as three justified newspaper columns with a 1.5px column rule; Services is a ruled classifieds sheet in two columns with a hairline gutter rule; Art is a three-column masonry of panels.

Responsive: at 1100px the margin captions move under their drawings and the news columns drop to two; at 1000px Art goes to two columns; at 900px the hero stacks; at 760px the chute hugs the left edge, every stage stacks (drawing, caption, body), stage gap drops to 64px, the news and classifieds go single-column and the section bar hides the Email label behind its envelope; at 620px Art goes single-column; at 400px the edition toggle keeps only its sun or moon.

## Elevation & Depth

There are no shadows. Depth is the comic page's: overlap, a fixed stacking order, and knockout. The chute runs at the bottom, paper panels sit over it, the inked frame over the panel, the drawings, body copy and linkages over the frame, and the marble on top. Where a drawing breaks out of its panel, a 4px paper halo (dilated alpha flooded with the paper token) cuts the frame and track behind it, so the drawing reads as in front without any shadow. The colophon is printed in reverse (paper on ink). The art lightbox is the one veil: an 86% near-black scrim.

### Named Rules
**The Flat Print Rule.** Nothing casts a shadow. Separation comes from ink frames, overlap order, the knockout halo and reversed grounds.

**The Breakout Rule.** A drawing that crosses its panel's edge or the track carries the paper knockout halo; it never sits over an ink line with the line showing through.

## Shapes

Shapes are drawn, not boxed. Panels have no CSS border: an SVG frame of four separate seeded strokes overshoots each corner, stretched to the panel with non-scaling stroke so it keeps its weight (3 to 5 units, heavier for hero and featured panels) at any size. Drawings use four named pen weights: silhouette 3.4, interior 2.3, detail 1.5, hatching 1.1, with round caps and joins, shading by clipped parallel hatching. Speed lines are 3.

Typeset UI is square-edged ink: plates take a barely-softened 4px corner, stamps and caption boxes are square, stage coins and the status dot are circles, the speech balloon is an ellipse with an inked tail. Newspaper rules are double: section heads open with a 6px double rule over a 1.5px rule, the section bar with a 5px double rule over a 3px rule, stamps carry a 4px double border.

### Named Rules
**The Pen Weight Rule.** Every drawn line uses one of the four weights (3.4 / 2.3 / 1.5 / 1.1); frames keep their weight under scaling. No uniform plotter line.

**The Double Rule Rule.** Newspaper structure (section heads, the section bar, status stamps) is ruled with a double line over a single line; plates and panels are not.

## Components

### Buttons (Plates)
Ink-framed plates that press like a rubber stamp.
- **Shape:** 3px ink border, gently squared corner (4px); small plates use a 2px border.
- **Default:** paper face, ink text, Franklin 700, 12px 18px (small 8px 12px, large 15px 24px), Lucide line icon at 1.1em.
- **Email:** magenta face, on-magenta text. The only magenta plate, used in the hero, the section bar, the inbox and the Wanted ad.
- **Hover (fine pointers only):** default plates turn yellow; Email deepens to magenta-deep; 160ms ease-out colour change.
- **Press:** squash to scaleX 1.04 / scaleY 0.9 in 100ms (ease-out cubic-bezier(0.23, 1, 0.32, 1)), spring release (0.35s, bounce 0.4). Icon plates press to 0.9.
- **Focus:** 3px cyan outline, 3px offset.

### Stamps (status)
- **Style:** square tag, 4px double ink border, Franklin 800 caps at 0.12em. Live is cyan, Shipped is yellow, Private is paper. Never tilted.

### Stage panels
- **Corner Style:** hand-inked frame (Shapes), paper ground, 30px padding.
- **Content:** title with stamp, blurb, optional screenshot in a 2px ink border (max 200px tall), Kalam "Parts" run-in with the stack, small plates for demo and code.
- **Stage coin:** a 44px yellow circle with a 3px ink border and a Kalam capital, overlapping the frame's top corner on the track side; the inbox continues the lettering.
- **Margin caption:** "(A) files the HR paperwork" in Kalam caps, 152px wide, with a drawn leader line back to the machine.

### Navigation
- **Section bar:** sticky, paper ground, double rule above and 3px ink rule below. Franklin 700 links in Press Grey; hover goes ink with a cyan underline; current page is ink with a 4px yellow underline. The small Email plate sits at the right end. At phone width the strip tightens and fades out at its end if it still overflows.
- **Edition toggle:** "Day edition" / "Night edition" with a sun or moon that cross-fades through a 2px blur in 200ms.

### Linkages and the chute (signature)
The machine's parts are drawn as parts, not annotations. The chute is two wandering inked rails with cross-ties over a 13px cyan-wash bed, built from the live layout. Each stage is driven by a linkage: an inked push rod (9 ink with a 3.8 paper core) with pin-jointed rings, an arm and a yellow trip flag in the marble's path. When the marble passes, the flag kicks (0.12s out, back.out spring back) and the stage's machine does its job, flashing magenta speed lines.

### Comic devices
- **Speech balloon:** paper ellipse, 3px ink border and skewed tail, Kalam.
- **Caption box:** yellow, 2.5px ink border, Kalam caps, breaking the panel's lower-left corner.
- **Ink arrow and leader:** drawn strokes in currentColor that point notes at what they describe.

### Motion
The ink filter is fixed, never animated: each drawing sits on its own compositing layer (will-change: transform), is rasterised once, and only moves when the page scrolls. Re-seeding it to make the line boil re-rasterised every visible drawing eight times a second and cost scrolling its frame rate, so the boil is retired on the drawings. The portrait alone boils, and only in three places: the hair's outline (above the neckline), the frames of the glasses (never within a few pixels of the eyes) and the mouth; the eyes, eyebrows, nose, shoulders and jacket stay identical, so nothing warps: three tracings baked side by side into one image (scripts/make-portrait.py) and stepped through by a CSS transform, 375ms per cycle on steps(3), which runs on the compositor and repaints nothing; it holds still under reduced motion. The marble is its own small layer moved by transform alone. The marble rides a reading line at 55% of the viewport, eased with a 0.6s glide. The hero machine starts itself once in about 1.4s. Art panels drop in on a spring (0.45s, bounce 0.25) and fly to a shared-element lightbox (0.45s, bounce 0.15; back 0.3s, no bounce; instant when closed by keyboard).

### Named Rules
**The Finished Run Rule.** Under reduced motion the run is shown complete: the marble rests in the envelope, nothing fires or travels, every stage's result is showing, and art panels only fade.

**The Instant Press Rule.** Presses land in 100ms; only the release springs. Hover is colour only, never movement, on plates.

## Do's and Don'ts

### Do:
- **Do** keep paper bright cool white (paper token) and print the night edition by swapping tokens under `[data-theme="dark"]`, never by hard-coding colours in components.
- **Do** spend magenta only on the Email plate and on speed lines of a part in motion.
- **Do** carry whole fields in cyan with the white Ben-Day screen (1.2px dots, 7px grid), and fill drawings with dot patterns or flat process colour.
- **Do** frame panels with the seeded overshooting ink frame at non-scaling stroke (weight 3 to 5), and give any breakout drawing the 4px paper knockout halo.
- **Do** ink drawings at the four pen weights (3.4 / 2.3 / 1.5 / 1.1) with round caps and joins, through the fixed ink filter.
- **Do** rule newspaper structure with a double rule over a single rule.
- **Do** letter notes, captions, balloons and stage coins in Kalam caps, beside or under what they annotate, with an arrow or leader when they point.
- **Do** press plates in 100ms and release on a spring; show the run finished under reduced motion.

### Don't:
- **Don't** use drop shadows, glows or offset shadows anywhere; depth is overlap, knockout and reversal.
- **Don't** use cream, beige or warm paper, sticker cut-outs or tilted badges (the retired sticker site).
- **Don't** use magenta for fields, headings, stamps or decoration.
- **Don't** set headings, body, plates or navigation in Kalam, or stack a Kalam label above a heading.
- **Don't** draw with a uniform plotter line or CSS borders where a panel frame belongs.
- **Don't** use gradients or opacity tints for colour fields.
