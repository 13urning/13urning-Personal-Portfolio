import React from "react";
import { Dots, InkFilter, useDrawingIds } from "./ui/Ui";
import { arc, fillPath, hatch, line, outline, oval, rectPoints, smooth } from "../lib/ink";

/* The contraption's parts, inked by hand in code: heavy silhouettes, lighter
   interior lines, hatching for shade, strokes that overshoot their corners,
   and Ben-Day dots only as fill. Every drawing shares three named layers the
   machine animates —
   .mover   the part that does the job when the marble arrives
   .whoosh  magenta comic speed lines, visible only while something moves
   .after   a mark the job leaves behind (stays until you scroll back up)
   Drawings are decorative: the stage text says everything they show. All
   path data is computed once, at module load. */

const SIL = 3.4; // silhouette
const MID = 2.3; // interior edges
const FINE = 1.5; // detail
const HATCH = 1.1; // shading

function Ink({ d, w = SIL, color = "var(--ink)", ...rest }) {
  return <path d={d} fill="none" stroke={color} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" {...rest} />;
}
function Fill({ d, fill }) {
  return <path d={d} fill={fill} stroke="none" />;
}
function Shade({ d, clip }) {
  return <Ink d={d} w={HATCH} clipPath={`url(#${clip})`} />;
}

function Drawing({ viewBox, children, className = "" }) {
  return (
    <svg className={`drawing ${className}`} viewBox={viewBox} fill="none" aria-hidden="true" focusable="false">
      {children}
    </svg>
  );
}

const rotate = (points, deg, cx, cy) => {
  const r = (deg * Math.PI) / 180;
  return points.map(([x, y]) => [
    cx + (x - cx) * Math.cos(r) - (y - cy) * Math.sin(r),
    cy + (x - cx) * Math.sin(r) + (y - cy) * Math.cos(r),
  ]);
};
const speed = (pairs, seed) => pairs.map(([a, b], i) => line(a, b, seed + i, 0.6)).join(" ");

/* --- Filing cabinet (HRIS): the top drawer slides out with a folder --- */
const CAB = (() => {
  const body = rectPoints(44, 14, 92, 124);
  const lower = [rectPoints(52, 62, 76, 32), rectPoints(52, 100, 76, 32)];
  const top = rectPoints(52, 24, 76, 32);
  const folder = [[60, 30], [60, 20], [82, 20], [86, 13], [106, 13], [110, 20], [118, 20], [118, 30]];
  return {
    body: fillPath(body),
    bodyInk: outline(body, 11, { over: 3.2 }),
    side: hatch(116, 14, 22, 124, { gap: 4.2, angle: 72, seed: 3 }),
    lower: lower.map((p, i) => ({ fill: fillPath(p), ink: outline(p, 21 + i * 5, { over: 2 }) })),
    labels: line([60, 70], [74, 70], 31) + " " + line([60, 108], [74, 108], 32),
    feet: line([55, 138], [54, 146], 41) + " " + line([125, 138], [126, 146], 42),
    ground: line([28, 147], [152, 147], 43, 0.5),
    top: fillPath(top),
    topInk: outline(top, 51, { over: 2 }),
    folder: fillPath(folder),
    folderInk: outline(folder, 61, { over: 1.5, closed: false }),
    whoosh: speed([[[26, 30], [40, 30]], [[22, 40], [38, 40]], [[26, 50], [40, 50]]], 71),
  };
})();

function FilingCabinet() {
  const id = useDrawingIds("ink", "dots", "body");
  return (
    <Drawing viewBox="0 0 180 152">
      <InkFilter id={id.ink} />
      <Dots id={id.dots} tone="yellow" />
      <defs>
        <clipPath id={id.body}>
          <path d={CAB.body} />
        </clipPath>
      </defs>
      <g filter={`url(#${id.ink})`}>
        <Ink d={CAB.ground} w={FINE} />
        <Fill d={CAB.body} fill="var(--paper)" />
        <Shade d={CAB.side} clip={id.body} />
        {CAB.lower.map((drawer, i) => (
          <g key={i}>
            <Fill d={drawer.fill} fill={`url(#${id.dots})`} />
            <Ink d={drawer.ink} w={MID} />
          </g>
        ))}
        <Fill d={fillPath(rectPoints(82, 73, 16, 6))} fill="var(--ink)" />
        <Fill d={fillPath(rectPoints(82, 111, 16, 6))} fill="var(--ink)" />
        <Ink d={CAB.labels} w={FINE} />
        <Ink d={CAB.bodyInk} />
        <Ink d={CAB.feet} />
        <g className="mover">
          <Fill d={CAB.folder} fill="var(--yellow)" />
          <Ink d={CAB.folderInk} w={MID} />
          <Fill d={CAB.top} fill="var(--paper)" />
          <Ink d={CAB.topInk} w={MID} />
          <Fill d={fillPath(rectPoints(82, 35, 16, 6))} fill="var(--ink)" />
        </g>
        <g className="whoosh" opacity="0">
          <Ink d={CAB.whoosh} w={3} color="var(--magenta)" />
        </g>
      </g>
    </Drawing>
  );
}

/* --- Clapperboard (Tidal Creatives): the clapper snaps shut on the next
   episode. The stick rests open about its hinge at (32, 50); firing closes
   it. --- */
const CLAP_OPEN = -24; // the stick's resting angle, in degrees
const CLAP = (() => {
  const slate = rectPoints(30, 64, 120, 70);
  const bar = rectPoints(30, 50, 120, 14);
  const stick = rectPoints(30, 36, 120, 14);
  const stripes = (top, bottom) =>
    [0, 1, 2, 3, 4, 5].map((k) => {
      const x = 36 + k * 20;
      return [[x, bottom], [x + 10, bottom], [x + 18, top], [x + 8, top]];
    });
  const open = (points) => rotate(points, CLAP_OPEN, 32, 50);
  return {
    slate: fillPath(slate),
    slateInk: outline(slate, 141, { over: 3 }),
    cells: line([30, 92], [150, 92], 142, 0.5) + " " + line([90, 92], [90, 134], 143, 0.5) + " " + line([30, 113], [150, 113], 144, 0.5),
    shade: hatch(118, 64, 32, 70, { gap: 4.2, angle: 68, seed: 145 }),
    bar: fillPath(bar),
    barInk: outline(bar, 146, { over: 2 }),
    barStripes: stripes(50, 64).map(fillPath).join(" "),
    stick: fillPath(open(stick)),
    stickInk: outline(open(stick), 147, { over: 2 }),
    stickStripes: stripes(36, 50).map((p) => fillPath(open(p))).join(" "),
    hinge: oval(32, 50, 3.4, 3.4, 148, 0.2),
    snap: speed(
      [
        [[156, 32], [168, 24]],
        [[158, 44], [174, 44]],
        [[156, 56], [168, 62]],
      ],
      149
    ),
  };
})();

function Clapperboard() {
  const id = useDrawingIds("ink", "dots", "slate", "bar", "stick");
  return (
    <Drawing viewBox="0 0 180 150">
      <InkFilter id={id.ink} />
      <Dots id={id.dots} tone="cyan" />
      <defs>
        <clipPath id={id.slate}>
          <path d={CLAP.slate} />
        </clipPath>
        <clipPath id={id.bar}>
          <path d={CLAP.bar} />
        </clipPath>
        <clipPath id={id.stick}>
          <path d={CLAP.stick} />
        </clipPath>
      </defs>
      <g filter={`url(#${id.ink})`}>
        <Fill d={CLAP.slate} fill="var(--paper)" />
        <Shade d={CLAP.shade} clip={id.slate} />
        <Ink d={CLAP.cells} w={FINE} />
        <Ink d={CLAP.slateInk} />
        <Fill d={CLAP.bar} fill={`url(#${id.dots})`} />
        <path d={CLAP.barStripes} fill="var(--ink)" clipPath={`url(#${id.bar})`} />
        <Ink d={CLAP.barInk} w={MID} />
        <g className="after" opacity="0">
          <text
            x="60"
            y="108"
            textAnchor="middle"
            fill="var(--ink)"
            fontFamily="var(--font-hand)"
            fontWeight="700"
            fontSize="15"
          >
            EP 1
          </text>
        </g>
        <g className="mover">
          <Fill d={CLAP.stick} fill={`url(#${id.dots})`} />
          <path d={CLAP.stickStripes} fill="var(--ink)" clipPath={`url(#${id.stick})`} />
          <Ink d={CLAP.stickInk} w={MID} />
        </g>
        <Fill d={CLAP.hinge} fill="var(--ink)" />
        <g className="whoosh" opacity="0">
          <Ink d={CLAP.snap} w={3} color="var(--magenta)" />
        </g>
      </g>
    </Drawing>
  );
}

/* --- Rubber stamp (project management): thumps DONE onto the task --- */
const STAMP = (() => {
  const envelope = rectPoints(22, 96, 136, 44);
  const sent = rotate(rectPoints(96, 104, 50, 21), -8, 121, 114);
  return {
    envelope: fillPath(envelope),
    envelopeInk: outline(envelope, 81, { over: 3 }),
    flap: line([22, 98], [90, 126], 83) + " " + line([90, 126], [158, 98], 84),
    shade: hatch(118, 96, 40, 44, { gap: 4.4, angle: 62, seed: 85 }),
    sent: fillPath(sent),
    sentInk: outline(sent, 86, { over: 1.4, wobble: 0.5 }),
    handle: oval(121, 18, 12, 12, 87, 0.5),
    handleShade: hatch(122, 6, 12, 24, { gap: 3.6, angle: 80, seed: 88 }),
    neck: fillPath(rectPoints(116, 29, 10, 22)),
    neckInk: outline(rectPoints(116, 29, 10, 22), 89, { over: 1 }),
    base: fillPath(rectPoints(100, 50, 42, 16)),
    baseInk: outline(rectPoints(100, 50, 42, 16), 90, { over: 2 }),
    rubber: fillPath(rectPoints(100, 66, 42, 6)),
    hit: speed(
      [
        [[92, 94], [80, 86]],
        [[150, 94], [162, 86]],
        [[88, 106], [72, 106]],
        [[154, 106], [170, 106]],
      ],
      91
    ),
  };
})();

function RubberStamp() {
  const id = useDrawingIds("ink", "dots", "env", "handle");
  return (
    <Drawing viewBox="0 0 180 150">
      <InkFilter id={id.ink} />
      <Dots id={id.dots} tone="yellow" />
      <defs>
        <clipPath id={id.env}>
          <path d={STAMP.envelope} />
        </clipPath>
        <clipPath id={id.handle}>
          <path d={STAMP.handle} />
        </clipPath>
      </defs>
      <g filter={`url(#${id.ink})`}>
        <Fill d={STAMP.envelope} fill="var(--paper)" />
        <Shade d={STAMP.shade} clip={id.env} />
        <Ink d={STAMP.flap} w={MID} />
        <Ink d={STAMP.envelopeInk} />
        <g className="after" opacity="0">
          <Fill d={STAMP.sent} fill="var(--paper)" />
          <Ink d={STAMP.sentInk} w={MID} />
          <text
            x="121"
            y="120"
            textAnchor="middle"
            transform="rotate(-8 121 114)"
            fill="var(--ink)"
            fontFamily="var(--font-hand)"
            fontWeight="700"
            fontSize="14"
          >
            DONE
          </text>
        </g>
        <g className="mover">
          <Fill d={STAMP.handle} fill="var(--cyan)" />
          <Shade d={STAMP.handleShade} clip={id.handle} />
          <Ink d={STAMP.handle} />
          <Fill d={STAMP.neck} fill="var(--paper)" />
          <Ink d={STAMP.neckInk} w={MID} />
          <Fill d={STAMP.base} fill={`url(#${id.dots})`} />
          <Ink d={STAMP.baseInk} />
          <Fill d={STAMP.rubber} fill="var(--ink)" />
        </g>
        <g className="whoosh" opacity="0">
          <Ink d={STAMP.hit} w={3} color="var(--magenta)" />
        </g>
      </g>
    </Drawing>
  );
}

/* --- Magnifier over index cards (reconciliation): finds the row that
   doesn't match and flags it --- */
const LENS = (() => {
  const back = rotate(rectPoints(20, 60, 98, 62), -6, 69, 91);
  const front = rectPoints(30, 66, 100, 62);
  const flag = [[120, 40], [143, 40], [136, 47], [143, 54], [120, 54]];
  const handle = rotate(rectPoints(91, 104.5, 30, 9), 45, 91, 109);
  return {
    back: fillPath(back),
    backInk: outline(back, 101, { over: 1.8 }),
    front: fillPath(front),
    frontInk: outline(front, 102, { over: 2.2 }),
    rows: [82, 94, 106, 118].map((y, i) => line([42, y], [42 + [56, 44, 50, 30][i], y], 103 + i)).join(" "),
    shade: hatch(30, 116, 100, 12, { gap: 4, angle: 30, seed: 107 }),
    pole: line([120, 68], [120, 40], 108),
    flag: fillPath(flag),
    flagInk: outline(flag, 109, { over: 1 }),
    glass: oval(74, 92, 24, 24, 110, 0.5),
    handle: fillPath(handle),
    shine: arc(74, 92, 17, 17, 200, 250, 111, 0.2),
    sweep: arc(74, 92, 40, 40, 160, 210, 112) + " " + arc(74, 92, 52, 52, 164, 206, 113),
  };
})();

function SearchLens() {
  const id = useDrawingIds("ink", "front");
  return (
    <Drawing viewBox="0 0 180 150">
      <InkFilter id={id.ink} />
      <defs>
        <clipPath id={id.front}>
          <path d={LENS.front} />
        </clipPath>
      </defs>
      <g filter={`url(#${id.ink})`}>
        <Fill d={LENS.back} fill="var(--paper)" />
        <Ink d={LENS.backInk} w={MID} />
        <Fill d={LENS.front} fill="var(--paper)" />
        <Shade d={LENS.shade} clip={id.front} />
        <Ink d={LENS.rows} w={FINE} />
        <Ink d={LENS.frontInk} />
        <g className="after" opacity="0">
          <Ink d={LENS.pole} w={MID} />
          <Fill d={LENS.flag} fill="var(--yellow)" />
          <Ink d={LENS.flagInk} w={FINE} />
        </g>
        <g className="mover">
          <Fill d={LENS.glass} fill="var(--cyan-tint)" />
          <Ink d={LENS.shine} w={3} color="var(--paper)" />
          <Ink d={LENS.glass} w={4.2} />
          <Fill d={LENS.handle} fill="var(--ink)" />
        </g>
        <g className="whoosh" opacity="0">
          <Ink d={LENS.sweep} w={3} color="var(--magenta)" />
        </g>
      </g>
    </Drawing>
  );
}

/* --- The envelope at the end of the run: its flap folds shut on the marble.
   .run-end marks where the chute delivers the marble. --- */
const ENV = (() => {
  const body = rectPoints(14, 46, 132, 76);
  const flap = [[14, 48], [80, 6], [146, 48]];
  return {
    body: fillPath(body),
    bodyInk: outline(body, 171, { over: 3 }),
    folds: line([14, 120], [64, 82], 172) + " " + line([146, 120], [96, 82], 173),
    shade: hatch(14, 100, 132, 22, { gap: 4.4, angle: 24, seed: 174 }),
    flap: fillPath(flap),
    flapInk: outline(flap, 175, { over: 2 }),
    whoosh: speed([[[0, 32], [12, 38]], [[160, 32], [148, 38]], [[80, -8], [80, 2]]], 176),
  };
})();

export function Envelope() {
  const id = useDrawingIds("ink", "dots", "body");
  return (
    <Drawing viewBox="0 0 160 130" className="drawing--envelope">
      <InkFilter id={id.ink} />
      <Dots id={id.dots} tone="yellow" />
      <defs>
        <clipPath id={id.body}>
          <path d={ENV.body} />
        </clipPath>
      </defs>
      <g filter={`url(#${id.ink})`}>
        <Fill d={ENV.body} fill="var(--paper)" />
        <Shade d={ENV.shade} clip={id.body} />
        <Ink d={ENV.folds} w={FINE} />
        <Ink d={ENV.bodyInk} />
        <g className="flap">
          <Fill d={ENV.flap} fill={`url(#${id.dots})`} />
          <Ink d={ENV.flapInk} />
        </g>
        <circle className="run-end" cx="80" cy="40" r="1" fill="none" />
        <g className="whoosh" opacity="0">
          <Ink d={ENV.whoosh} w={3} color="var(--magenta)" />
        </g>
      </g>
    </Drawing>
  );
}

export const stageDrawings = {
  cabinet: FilingCabinet,
  clapper: Clapperboard,
  stamp: RubberStamp,
  lens: SearchLens,
};

const RAMP = [
  [42, 314],
  [33, 324],
  [26, 335],
  [22, 348],
];

/* --- The top of the contraption, beside the portrait: a tray of tedious
   paperwork empties through a funnel and a pipe into a cup on a lever; the
   weight tips the lever, which flicks the marble onto the chute.
   .run-start marks where the chute begins. --- */
const HM = (() => {
  const papers = [[128, 30], [134, 20], [226, 20], [232, 30]];
  const tray = rectPoints(112, 30, 140, 30);
  const funnel = [[116, 92], [244, 92], [200, 146], [200, 172], [160, 172], [160, 146]];
  const pipe = rectPoints(166, 172, 28, 64);
  const fulcrum = [[112, 342], [130, 312], [148, 342]];
  const plank = rectPoints(30, 302, 214, 10);
  const cup = [[160, 302], [160, 278], [200, 278], [200, 302]];
  return {
    papers: fillPath(papers),
    papersInk: outline(papers, 201, { over: 1.4 }),
    paperLines: line([140, 25], [220, 25], 202, 0.4),
    tray: fillPath(tray),
    trayInk: outline(tray, 203, { over: 3.2 }),
    trayShade: hatch(212, 30, 40, 30, { gap: 4.2, angle: 68, seed: 204 }),
    funnel: fillPath(funnel),
    funnelInk: outline(funnel, 205, { over: 2.8 }),
    funnelShade: hatch(180, 92, 64, 82, { gap: 4.4, angle: 115, seed: 206 }),
    pipe: fillPath(pipe),
    pipeInk: outline(pipe, 207, { over: 2 }),
    pipeShade: hatch(182, 172, 12, 64, { gap: 3.8, angle: 75, seed: 208 }),
    rivets: [184, 200, 216].map((y, i) => oval(172, y, 1.6, 1.6, 209 + i, 0.1)).join(" "),
    gauge: oval(216, 204, 13, 13, 212, 0.4),
    gaugeLink: line([194, 204], [203, 204], 213),
    needle: line([216, 204], [222, 196], 214, 0.1),
    fulcrum: fillPath(fulcrum),
    fulcrumInk: outline(fulcrum, 215, { over: 1.5 }),
    ground: line([92, 342], [188, 342], 216, 0.6),
    groundShade: hatch(96, 343, 88, 7, { gap: 6, angle: 135, seed: 217 }),
    plank: fillPath(plank),
    plankInk: outline(plank, 218, { over: 3 }),
    cup: fillPath(cup),
    cupInk: outline(cup, 219, { over: 1.5, closed: false }),
    // A short ramp from the lever's end down to where the track begins.
    rampBed: smooth(RAMP),
    rampRails:
      smooth(RAMP.map(([x, y]) => [x - 5.5, y + 1])) + " " + smooth(RAMP.map(([x, y]) => [x + 5.5, y - 1])),
  };
})();

export function HeroMachine() {
  const id = useDrawingIds("ink", "dotsY", "dotsC", "tray", "funnel", "pipe", "ground");
  return (
    <Drawing viewBox="0 0 260 380" className="drawing--hero">
      <InkFilter id={id.ink} />
      <Dots id={id.dotsY} tone="yellow" />
      <Dots id={id.dotsC} tone="cyan" />
      <defs>
        <clipPath id={id.tray}>
          <path d={HM.tray} />
        </clipPath>
        <clipPath id={id.funnel}>
          <path d={HM.funnel} />
        </clipPath>
        <clipPath id={id.pipe}>
          <path d={HM.pipe} />
        </clipPath>
        <clipPath id={id.ground}>
          <rect x="92" y="342" width="96" height="10" />
        </clipPath>
      </defs>
      <g filter={`url(#${id.ink})`}>
        <Fill d={HM.papers} fill="var(--paper)" />
        <Ink d={HM.paperLines} w={FINE} />
        <Ink d={HM.papersInk} w={MID} />
        {[150, 176, 162].map((x, i) => (
          <g className="hm-paper" opacity="0" key={x}>
            <Fill d={fillPath(rectPoints(x, 34 + (i % 2) * 2, 26, 20))} fill={i === 1 ? "var(--yellow)" : "var(--paper)"} />
            <Ink d={outline(rectPoints(x, 34 + (i % 2) * 2, 26, 20), 230 + i, { over: 1 })} w={FINE} />
          </g>
        ))}
        <Fill d={HM.tray} fill={`url(#${id.dotsC})`} />
        <Shade d={HM.trayShade} clip={id.tray} />
        <Ink d={HM.trayInk} />

        <Fill d={HM.funnel} fill={`url(#${id.dotsY})`} />
        <Shade d={HM.funnelShade} clip={id.funnel} />
        <Ink d={HM.funnelInk} />

        <Fill d={HM.pipe} fill="var(--paper)" />
        <Shade d={HM.pipeShade} clip={id.pipe} />
        <Fill d={HM.rivets} fill="var(--ink)" />
        <Ink d={HM.pipeInk} w={MID} />
        <Ink d={HM.gaugeLink} w={MID} />
        <Fill d={HM.gauge} fill="var(--paper)" />
        <Ink d={HM.gauge} w={MID} />
        <Ink d={HM.needle} w={FINE} />

        <g className="hm-paper-out" opacity="0">
          <Fill d={fillPath(rectPoints(170, 232, 20, 14))} fill="var(--yellow)" />
          <Ink d={outline(rectPoints(170, 232, 20, 14), 240, { over: 0.8 })} w={FINE} />
        </g>

        <Ink d={HM.rampBed} w={11} color="var(--cyan-tint)" />
        <Ink d={HM.rampRails} w={2.6} />
        <Ink d={HM.ground} w={MID} />
        <Shade d={HM.groundShade} clip={id.ground} />
        <Fill d={HM.fulcrum} fill="var(--ink)" />
        <Ink d={HM.fulcrumInk} w={MID} />
        <g className="hm-lever">
          <Fill d={HM.plank} fill="var(--paper)" />
          <Ink d={HM.plankInk} />
          <Fill d={HM.cup} fill="var(--paper)" />
          <Ink d={HM.cupInk} w={MID} />
        </g>
        <g className="hm-marble">
          <circle cx="46" cy="293" r="8" fill="var(--ink)" />
          <circle cx="43.5" cy="290.5" r="2.4" fill="var(--paper)" />
        </g>
        <circle className="run-start" cx="22" cy="348" r="1" fill="none" />
      </g>
    </Drawing>
  );
}

/* A comic-panel frame: four inked strokes that overshoot at the corners,
   stretched over its panel (the stroke keeps its weight at any size). */
const FRAME_CACHE = new Map();
function framePath(seed) {
  if (!FRAME_CACHE.has(seed)) {
    FRAME_CACHE.set(seed, outline(rectPoints(1, 1, 98, 98), seed * 31 + 5, { over: 1.1, wobble: 0.3 }));
  }
  return FRAME_CACHE.get(seed);
}

export function PanelFrame({ seed = 1, weight = 4 }) {
  return (
    <svg className="panel-frame" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <path
        d={framePath(seed)}
        fill="none"
        stroke="var(--ink)"
        strokeWidth={weight}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/* A drawn arrow, for notes that point somewhere. */
const ARROW = line([3, 12], [46, 10], 301, 0.6) + " " + line([46, 10], [37, 3], 302, 0.3) + " " + line([46, 10], [38, 17], 303, 0.3);
export function InkArrow({ className = "" }) {
  return (
    <svg className={`ink-arrow ${className}`} viewBox="0 0 50 20" aria-hidden="true" focusable="false">
      <path d={ARROW} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

/* A leader line from a margin caption to its stage, ending in a dot. */
const LEADER = smooth([
  [2, 6],
  [20, 9],
  [38, 14],
  [54, 16],
]);
export function Leader({ className = "" }) {
  return (
    <svg className={`leader ${className}`} viewBox="0 0 60 22" aria-hidden="true" focusable="false">
      <path d={LEADER} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="56" cy="16" r="3" fill="currentColor" />
    </svg>
  );
}
