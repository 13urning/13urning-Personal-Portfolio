import React, { useId } from "react";
import * as m from "motion/react-m";

/* Shared parts for the newspaper-cartoon world: ink-framed "plates" for
   actions, the ink line filter every drawing passes through, and the
   rubber-stamp status mark. Styling lives in index.css; motion lives here. */

const PRESS = { duration: 0.1, ease: [0.23, 1, 0.32, 1] };
const SPRING = { type: "spring", duration: 0.35, bounce: 0.4 };

/* A pressed plate flattens like a rubber stamp hitting paper, then springs
   back. Fast in, springy out: the press must feel instant. */
const SQUASH = { whileTap: { scaleX: 1.04, scaleY: 0.9, transition: PRESS }, transition: SPRING };

/* Static lookups (not m[tag]) so the bundler can drop every other element. */
const TAGS = { a: m.a, button: m.button };

export const Plate = React.forwardRef(function Plate(
  { as = "a", tone = "plain", size = "md", className = "", children, ...rest },
  ref
) {
  const Comp = TAGS[as] || m.a;
  return (
    <Comp ref={ref} className={`plate plate--${tone} plate--${size} ${className}`} {...SQUASH} {...rest}>
      {children}
    </Comp>
  );
});

export const IconPlate = React.forwardRef(function IconPlate(
  { as = "button", label, className = "", children, ...rest },
  ref
) {
  const Comp = TAGS[as] || m.button;
  return (
    <Comp
      ref={ref}
      aria-label={label}
      title={label}
      className={`icon-plate ${className}`}
      whileTap={{ scale: 0.9, transition: PRESS }}
      transition={SPRING}
      {...rest}
    >
      {children}
    </Comp>
  );
});

/* Dip-pen ink: a little fractal displacement roughens every edge so lines
   look inked, not plotted. The noise is fixed, so each drawing is
   rasterised once on its own layer and scrolling never repaints it.
   (Re-seeding it to make the line "boil" re-rasterised every visible
   drawing eight times a second and cost scrolling its frame rate.) */
const INK_REGION = { x: "-8%", y: "-8%", width: "116%", height: "116%" };

export function InkFilter({ id, scale = 1.8, region = INK_REGION }) {
  return (
    <defs>
      <filter id={id} {...region}>
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="5" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale={scale} xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </defs>
  );
}

/* Ben-Day dots for flat SVG fills, one pattern per tone. */
export function Dots({ id, tone = "yellow", size = 7 }) {
  const ink = { yellow: "var(--yellow)", cyan: "var(--cyan)" }[tone];
  const ground = { yellow: "var(--yellow-tint)", cyan: "var(--cyan-tint)" }[tone];
  return (
    <defs>
      <pattern id={id} width={size} height={size} patternUnits="userSpaceOnUse">
        <rect width={size} height={size} fill={ground} />
        <circle cx={size / 2} cy={size / 2} r={size * 0.24} fill={ink} />
      </pattern>
    </defs>
  );
}

/* Unique, CSS-safe ids for a drawing's filter and patterns. */
export function useDrawingIds(...names) {
  const base = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  return Object.fromEntries(names.map((n) => [n, `${n}-${base}`]));
}

export function Stamp({ status }) {
  return <span className={`stamp stamp--${status.toLowerCase()}`}>{status}</span>;
}
