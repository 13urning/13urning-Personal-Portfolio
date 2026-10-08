# Acceptance criteria — portfolio redesign ("The Self-Running Contraption")

Branch: `hand-drawn-motion` (exploration; not for merge until reviewed)
Product truth: `client/PRODUCT.md` · Direction contract: `client/.impeccable/surfaces/src-pages-homepage-jsx.md`
Scope: Home (`/`) and Art (`/art`). Out of scope: the legacy `server/`, hosting changes.

## Functional

| ID | Criterion | How it's checked |
|---|---|---|
| F1 | Home's first viewport states what Regor builds, names him, his role and status, and offers Email (primary) and Download CV, all visible and clickable from the first frame. | Screenshot at 1440 and 390; click both |
| F2 | The hero machine runs once on load (≤ 1.5 s): paperwork drops, the lever tips, the marble is flicked onto the chute. | Live check |
| F3 | One chute, drawn from the live layout, runs from the hero lever past every project stage (A–F) to the envelope at the inbox; it never crosses text. | Screenshots at 1440 and 390 |
| F4 | The marble rides the viewport's reading line; each stage's drawing does its job when the marble passes and reverses on scroll-up; the envelope closes when the run ends. | Live check: marble vs. reading line, drawing transforms |
| F5 | Every content fact from the old site is present: six projects (with demos, repos, screenshots), four roles plus education, three services, CV, email, GitHub, LinkedIn, Twitter, eleven artworks. | Source review of `content.js` and the Art page |
| F6 | Hiring managers reach Experience and the CV; clients reach Services and Email, each without passing through the other's material. | Navigation and section order |
| F7 | Art keeps its own page in the same world; a panel opens into a lightbox by flying from its place; Escape closes instantly; focus moves to Close and back. | Live check |
| F8 | The light/dark toggle works; the night edition keeps every text readable. | Screenshot in dark mode |

## Non-functional

| ID | Criterion | How it's checked |
|---|---|---|
| N1 | Reduced motion: no machine run, no travel, no firing, no ink boil, no smooth scroll; the marble rests in the envelope; content and actions unaffected. | `prefers-reduced-motion: reduce` emulation |
| N2 | A failed or missed animation never hides content: drawings are decorative, entrance triggers use scroll/rect checks with timed fallbacks, and the marble shows up even if the hero sequence never runs. | Code review |
| N3 | Homepage first-load JavaScript stays within ~80 kB gzipped over `main`; ScrollTrigger and the Art page (with Motion's layout features) load separately. | `npm run build` output vs. `main` |
| N4 | No console errors on either page; the production build compiles with no lint warnings. | Console + build |
| N5 | No horizontal overflow at 390 px; hover effects never trigger on touch. | 390-wide capture; code review |
| N6 | Text contrast ≥ 4.5:1 for body text in both themes; text on yellow or cyan is always dark. | Token review |
| N7 | Impeccable detector clean on changed files, and the independent finish review returns `ship` (or its fixes are applied and verified). | `impeccable detect`; finish reviewer verdict |
