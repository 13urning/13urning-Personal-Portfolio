import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { LuExternalLink, LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import Hero from "./Hero";
import { Envelope, InkArrow, Leader, PanelFrame, stageDrawings } from "./Drawings";
import { Plate, Stamp } from "./ui/Ui";
import { person, projects } from "../content";
import { gsap, useGSAP } from "../lib/gsap";
import { fillPath, line, outline, oval, rng, smooth } from "../lib/ink";

/* The contraption: the hero's lever flicks a marble onto a chute that runs
   down the page's gutters, past every project (each one a lettered stage
   that does its job as the marble passes), into an envelope beside the
   Email button. The chute is drawn from the live layout; the marble rides
   a fixed reading line of the viewport, so it is always beside what you
   are reading. */

const LETTERS = "ABCDEFGHIJ";
const COUNT_WORDS = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
const READING_LINE = 0.55; // fraction of the viewport the marble rides at
const NARROW = 760; // below this the chute hugs the left edge

/* The x of the chute's run beside a stage (in the run's coordinates), and
   whether it runs down the stage's right side. The chute and the linkages
   both read this, so they can never drift apart. */
function gutter(stage, box) {
  const narrow = box.width < NARROW;
  const gap = narrow ? 15 : 44;
  const s = stage.getBoundingClientRect();
  const right = !narrow && stage.dataset.chute === "right";
  return {
    x: (right ? s.right + gap : s.left - gap) - box.left,
    right,
    top: s.top - box.top,
    bottom: s.bottom - box.top,
  };
}

/* Where the chute bends: from the lever's lip, down each stage's gutter
   (alternating sides on wide screens), across the gap between stages, and
   into the envelope's mouth. Every point is lower than the last, so the
   marble's height on the page maps to exactly one place on the chute. */
function chutePoints(run) {
  const box = run.getBoundingClientRect();
  const at = (el) => {
    const r = el.getBoundingClientRect();
    return {
      l: r.left - box.left,
      r: r.right - box.left,
      t: r.top - box.top,
      b: r.bottom - box.top,
      cx: (r.left + r.right) / 2 - box.left,
      cy: (r.top + r.bottom) / 2 - box.top,
    };
  };
  const start = at(run.querySelector(".run-start"));
  const points = [{ x: start.cx, y: start.cy }];
  run.querySelectorAll(".stage").forEach((el) => {
    const g = gutter(el, box);
    points.push({ x: g.x, y: g.top - 12 }, { x: g.x, y: g.bottom + 12 });
  });
  const end = at(run.querySelector(".run-end"));
  points.push({ x: end.cx, y: end.cy });
  return points;
}

/* Straight runs joined by tight bends: each corner is cut back by at most
   BEND px along both of its runs and rounded, so long runs stay straight.
   The centreline is kept as our own polyline (each bend sampled finely) with
   running lengths, so every lookup is plain arithmetic. Asking the SVG path
   instead (getPointAtLength) re-walks the whole path on every call, and it
   cost seconds of main thread on first load. */
const BEND = 26;
const BEND_STEPS = 12;
function centreline(points) {
  const toward = (from, to, dist) => {
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const len = Math.hypot(dx, dy) || 1;
    const k = Math.min(dist, len / 2) / len;
    return { x: from.x + dx * k, y: from.y + dy * k };
  };
  const xs = [points[0].x];
  const ys = [points[0].y];
  // Heights never go back up, even if a layout ever brings two points out
  // of order: the marble's height-to-length lookup depends on it.
  const push = (x, y) => {
    xs.push(x);
    ys.push(Math.max(ys[ys.length - 1], y));
  };
  let d = `M${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length - 1; i += 1) {
    const a = toward(points[i], points[i - 1], BEND);
    const c = points[i];
    const b = toward(points[i], points[i + 1], BEND);
    d += ` L${a.x} ${a.y} Q${c.x} ${c.y} ${b.x} ${b.y}`;
    push(a.x, a.y);
    for (let s = 1; s <= BEND_STEPS; s += 1) {
      const t = s / BEND_STEPS;
      const u = 1 - t;
      push(u * u * a.x + 2 * u * t * c.x + t * t * b.x, u * u * a.y + 2 * u * t * c.y + t * t * b.y);
    }
  }
  const last = points[points.length - 1];
  d += ` L${last.x} ${last.y}`;
  push(last.x, last.y);
  const lens = [0];
  for (let i = 1; i < xs.length; i += 1) lens.push(lens[i - 1] + Math.hypot(xs[i] - xs[i - 1], ys[i] - ys[i - 1]));
  return { d, xs, ys, lens, total: lens[lens.length - 1] };
}

/* Index of the last sample at or below `value` in an ascending array. */
function below(arr, value) {
  let lo = 0;
  let hi = arr.length - 1;
  while (hi - lo > 1) {
    const mid = (lo + hi) >> 1;
    if (arr[mid] <= value) lo = mid;
    else hi = mid;
  }
  return lo;
}

/* A point on the centreline at length `l`, with the unit normal there. */
function pointAt(geo, l) {
  const len = Math.max(0, Math.min(geo.total, l));
  const i = below(geo.lens, len);
  const j = Math.min(i + 1, geo.xs.length - 1);
  const seg = geo.lens[j] - geo.lens[i] || 1;
  const t = (len - geo.lens[i]) / seg;
  const dx = geo.xs[j] - geo.xs[i];
  const dy = geo.ys[j] - geo.ys[i];
  const n = Math.hypot(dx, dy) || 1;
  return {
    x: geo.xs[i] + dx * t,
    y: geo.ys[i] + dy * t,
    nx: -dy / n,
    ny: dx / n,
  };
}

/* The length along the centreline at page height `y` (the chute only ever
   descends, so heights map one-to-one to lengths). */
function lengthAtY(geo, y) {
  if (y <= geo.ys[0]) return 0;
  if (y >= geo.ys[geo.ys.length - 1]) return geo.total;
  const i = below(geo.ys, y);
  const j = Math.min(i + 1, geo.ys.length - 1);
  const t = (y - geo.ys[i]) / (geo.ys[j] - geo.ys[i] || 1);
  return geo.lens[i] + t * (geo.lens[j] - geo.lens[i]);
}

/* The track itself, inked by hand along the centreline: two rails that
   wander a little either side of it, and a cross-tie every so often. The
   marble still rides the exact centreline underneath. */
const RAIL = 7; // half the track's width
function trackPaths(geo) {
  const { total } = geo;
  const rand = rng(77);
  const normal = (l) => {
    const q = pointAt(geo, l);
    return { p: q, nx: q.nx, ny: q.ny };
  };
  const left = [];
  const right = [];
  for (let l = 0; l <= total; l += 10) {
    const { p, nx, ny } = normal(l);
    const wl = RAIL + (rand() - 0.5) * 1.1;
    const wr = RAIL + (rand() - 0.5) * 1.1;
    left.push([p.x + nx * wl, p.y + ny * wl]);
    right.push([p.x - nx * wr, p.y - ny * wr]);
  }
  let ties = "";
  for (let l = 20; l < total; l += 38) {
    const { p, nx, ny } = normal(l);
    const w = RAIL + 2.5;
    ties += ` M${(p.x + nx * w).toFixed(1)} ${(p.y + ny * w).toFixed(1)}L${(p.x - nx * w).toFixed(1)} ${(p.y - ny * w).toFixed(1)}`;
  }
  return { rails: `${smooth(left)} ${smooth(right)}`, ties: ties.trim() };
}

/* The Rube Goldberg linkage beside each stage: a trip lever pinned to the
   track's inner rail holds a flag up in the marble's path, and a push rod
   runs from its hub to the machine's moving part. When the marble knocks
   the flag down, the rod tugs and the machine goes. Each linkage is drawn
   in its own frame (hub at 0,0, the machine toward -x), mirrored to suit
   the side its track runs on, so the kick is the same rotation everywhere.
   Measured from each moving part's resting box, so it never jumps when a
   stage fires. */
const HUB = RAIL + 6; // hub's distance from the track's centreline
const TIP = [2 * RAIL + 3, -15]; // the flag's mast, out across the bed
const ring = (cx, r, seed) => oval(cx, 0, r, r, seed, 0.25, 12);
function linkageParts(i) {
  const seed = 401 + i * 7;
  const top = [TIP[0], TIP[1] - 16];
  const flag = [top, [top[0] - 15, top[1] + 5], [top[0], top[1] + 10]];
  return {
    arm: `${line([0, 0], TIP, seed, 0.3)} ${line(TIP, top, seed + 1, 0.2)}`,
    flag: fillPath(flag),
    flagInk: outline(flag, seed + 2, { over: 1, wobble: 0.3 }),
    hubRing: ring(0, 6.5, seed + 3),
    hubPin: ring(0, 1.9, seed + 4),
  };
}
const LINK_PARTS = projects.map((_, i) => linkageParts(i));

/* The kick: the marble knocks the flag down, the rod tugs toward the track,
   and the lever springs back. Rotation is written straight onto the arm,
   so it always turns about its hub at the frame's 0,0. */
function addKick(tl, link) {
  const arm = link.querySelector(".link-arm");
  const p = { r: 0 };
  const turn = () => arm.setAttribute("transform", `rotate(${p.r.toFixed(2)})`);
  tl.to(p, { r: 40, duration: 0.12, ease: "power2.out", onUpdate: turn }, 0)
    .to(p, { r: 0, duration: 0.55, ease: "back.out(3)", onUpdate: turn }, 0.12)
    .to(link.querySelector(".link-rod"), { x: 4, duration: 0.12, ease: "power2.out" }, 0)
    .to(link.querySelector(".link-rod"), { x: 0, duration: 0.3, ease: "power2.inOut" }, 0.12);
}

/* Each moving part's box in its drawing's own units, read once while the
   part is at rest: a part caught mid-animation (or shrunk by its timeline's
   start state) would otherwise move its linkage on the next resize. */
const RESTING = new WeakMap();
function restingBox(mover) {
  if (!RESTING.has(mover)) RESTING.set(mover, mover.getBBox());
  return RESTING.get(mover);
}

function linkages(run) {
  const box = run.getBoundingClientRect();
  return [...run.querySelectorAll(".stage")].map((stage, i) => {
    const mover = stage.querySelector(".stage-drawing .mover");
    const svg = mover && mover.ownerSVGElement;
    const ctm = svg && svg.getScreenCTM();
    if (!ctm) return null; // not rendered: draw no linkage rather than fail
    const { x: gx, right } = gutter(stage, box);
    const dir = right ? -1 : 1; // from the track toward the machine
    const bb = restingBox(mover);
    const near = ctm.a * (right ? bb.x + bb.width : bb.x) + ctm.e - box.left;
    const y = ctm.d * (bb.y + bb.height / 2) + ctm.f - box.top;
    const hub = gx + dir * HUB;
    // Pinned a little inside the part's box, so curved parts are still met.
    const reach = Math.max(18, (near - hub) * dir + 8);
    return {
      transform: `translate(${hub.toFixed(1)} ${y.toFixed(1)}) scale(${-dir} 1)`,
      rod: line([-6, 0], [-reach + 5, 0], 451 + i * 5, 0.4),
      farRing: ring(-reach, 5.5, 461 + i * 5),
      farPin: ring(-reach, 1.7, 471 + i * 5),
    };
  });
}

/* Keep hyphenated words whole ("E-Commerce" never splits at the hyphen). */
function Title({ text }) {
  return text.split(" ").map((word, i) => (
    <React.Fragment key={i}>
      {i > 0 && " "}
      {word.includes("-") ? <span className="nowrap">{word}</span> : word}
    </React.Fragment>
  ));
}

/* What each drawing does when the marble reaches it. Every firing also
   flashes that drawing's magenta speed lines while the part moves. */
const FIRES = {
  cabinet: (d, tl) => tl.to(d.mover, { x: 26, duration: 0.35, ease: "back.out(2)" }, 0),
  // The clapper snaps shut about its hinge, kicks back a hair, and settles.
  clapper: (d, tl) =>
    tl
      .to(d.mover, { rotate: 24, svgOrigin: "32 50", duration: 0.14, ease: "power3.in" }, 0)
      .set(d.after, { opacity: 1 }, 0.14)
      .to(d.mover, { rotate: 19, svgOrigin: "32 50", duration: 0.08, ease: "power1.out" }, 0.14)
      .to(d.mover, { rotate: 24, svgOrigin: "32 50", duration: 0.12, ease: "power2.in" }, 0.22),
  stamp: (d, tl) =>
    tl
      .to(d.mover, { y: 24, duration: 0.14, ease: "power2.in" }, 0)
      .set(d.after, { opacity: 1 }, 0.14)
      .to(d.mover, { y: 0, duration: 0.4, ease: "back.out(2)" }, 0.2),
  lens: (d, tl) =>
    tl.to(d.mover, { x: 40, duration: 0.5, ease: "power3.out" }, 0).to(d.after, { opacity: 1, duration: 0.15 }, 0.35),
  envelope: (d, tl) =>
    tl.to(
      d.root.querySelector(".flap"),
      {
        scaleY: -1,
        transformOrigin: "50% 100%",
        duration: 0.35,
        ease: "power2.inOut",
      },
      0.1,
    ),
};

function Stage({ project, letter, side, seed }) {
  const Drawing = stageDrawings[project.machine];
  return (
    <article className="stage" data-chute={side} aria-labelledby={`stage-${project.id}`}>
      <PanelFrame seed={seed} />
      <span className="stage-letter" aria-hidden="true">
        {letter}
      </span>
      <p className="stage-job">
        <Leader />
        <span aria-hidden="true">({letter}) </span>
        {project.job}
      </p>
      <div className="stage-drawing" data-fire={project.machine}>
        <Drawing />
      </div>
      <div className="stage-body">
        <header className="stage-head">
          <h3 id={`stage-${project.id}`}>
            <Title text={project.title} />
          </h3>
          <Stamp status={project.status} />
        </header>
        <p className="stage-blurb">{project.blurb}</p>
        {project.shot && (
          <figure className="stage-shot">
            <img
              src={project.shot.src}
              width={project.shot.width}
              height={project.shot.height}
              alt={project.shot.alt}
              loading="lazy"
              decoding="async"
            />
          </figure>
        )}
        <p className="stage-parts">
          <span className="stage-parts-label">Parts</span>{" "}
          {/* Each part stays on one line ("Cloud Run" never splits). */}
          {project.parts.map((part, i) => (
            <React.Fragment key={part}>
              {i > 0 && " · "}
              <span className="nowrap">{part}</span>
            </React.Fragment>
          ))}
        </p>
        {(project.demo || project.repo) && (
          <div className="stage-links">
            {project.demo && (
              <Plate href={project.demo} target="_blank" rel="noreferrer" size="sm">
                Visit the site <LuExternalLink aria-hidden="true" />
              </Plate>
            )}
            {project.repo && (
              <Plate href={project.repo} target="_blank" rel="noreferrer" size="sm">
                <LuGithub aria-hidden="true" /> Read the code
              </Plate>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Run() {
  const runRef = useRef(null);
  const geoRef = useRef(null); // the chute's centreline, shared with the marble
  const [launched, setLaunched] = useState(false);
  const lastSide = projects.length % 2 ? "right" : "left";

  // If the hero's sequence never runs (reduced motion, a failed script),
  // the marble still shows up.
  useEffect(() => {
    const t = setTimeout(() => setLaunched(true), 2200);
    return () => clearTimeout(t);
  }, []);

  // Lay the chute through the gutters, and re-lay it whenever the layout
  // changes (fonts arriving, images loading, a resize).
  useLayoutEffect(() => {
    const run = runRef.current;
    const layers = run.querySelectorAll(".run-layer");
    const draw = () => {
      const { width, height } = run.getBoundingClientRect();
      const geo = centreline(chutePoints(run));
      geoRef.current = geo;
      layers.forEach((svg) => svg.setAttribute("viewBox", `0 0 ${width} ${height}`));
      run.querySelectorAll(".chute-line").forEach((path) => path.setAttribute("d", geo.d));
      const { rails, ties } = trackPaths(geo);
      run.querySelector(".chute-rails").setAttribute("d", rails);
      run.querySelector(".chute-ties").setAttribute("d", ties);
      const groups = run.querySelectorAll(".link");
      linkages(run).forEach((k, i) => {
        const g = groups[i];
        if (!g) return;
        if (!k) {
          g.setAttribute("visibility", "hidden");
          return;
        }
        g.removeAttribute("visibility");
        g.setAttribute("transform", k.transform);
        g.querySelectorAll(".link-rod-ink, .link-rod-core").forEach((p) => p.setAttribute("d", k.rod));
        g.querySelector(".link-ring--far").setAttribute("d", k.farRing);
        g.querySelector(".link-pin--far").setAttribute("d", k.farPin);
      });
      run.dispatchEvent(new Event("chute"));
    };
    draw();
    if (typeof ResizeObserver === "undefined") return undefined;
    // Layout can change several times in one frame (fonts, images); re-lay
    // the chute at most once per frame.
    let frame = 0;
    const ro = new ResizeObserver(() => {
      if (!frame) {
        frame = requestAnimationFrame(() => {
          frame = 0;
          draw();
        });
      }
    });
    ro.observe(run);
    return () => {
      ro.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  useGSAP(
    () => {
      const run = runRef.current;
      const marble = run.querySelector(".marble");
      // The marble is its own small layer, moved by transform only, so its
      // travel never repaints the page under it.
      const park = (len) => {
        const p = pointAt(geoRef.current, len);
        marble.style.transform = `translate3d(${p.x.toFixed(1)}px, ${p.y.toFixed(1)}px, 0)`;
      };

      // The run shown complete: the marble rests in the envelope, every
      // stage's result is showing and the flap is shut. Used for reduced
      // motion, and if the scroll engine can't load.
      const finish = () => {
        park(geoRef.current.total);
        gsap.set(run.querySelectorAll("[data-fire] .after"), { opacity: 1 });
        gsap.set(run.querySelectorAll(".inbox-envelope .flap"), {
          scaleY: -1,
          transformOrigin: "50% 100%",
        });
      };

      // Reduced motion: nothing travels or fires.
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        const rest = () => park(geoRef.current.total);
        finish();
        setLaunched(true);
        run.addEventListener("chute", rest);
        return () => run.removeEventListener("chute", rest);
      }

      let live = true;
      let trigger = null;
      let onChute = null;
      const stages = [...run.querySelectorAll(".stage")];
      const links = run.querySelectorAll(".link");
      const fires = [...run.querySelectorAll("[data-fire]")].map((root) => {
        const d = {
          root,
          mover: root.querySelector(".mover"),
          whoosh: root.querySelector(".whoosh"),
          after: root.querySelector(".after"),
        };
        const tl = gsap.timeline({ paused: true });
        FIRES[root.dataset.fire](d, tl);
        const link = links[stages.indexOf(root.closest(".stage"))];
        if (link) addKick(tl, link);
        if (d.whoosh) {
          tl.fromTo(d.whoosh, { opacity: 0 }, { opacity: 1, duration: 0.06 }, 0).to(
            d.whoosh,
            { opacity: 0, duration: 0.22 },
            0.32,
          );
        }
        return { root, tl, at: 0, fired: false };
      });

      // Until the scroll engine arrives the marble waits at the top of the
      // chute (never at the run's corner).
      park(0);
      let proxy = null;

      // ScrollTrigger only matters once you scroll, so it loads after
      // first paint instead of riding in the main bundle.
      import("../lib/scroll")
        .then(({ ScrollTrigger }) => {
          if (!live) return;
          let runTop = 0;
          const measure = () => {
            const box = run.getBoundingClientRect();
            runTop = box.top + window.scrollY;
            fires.forEach((f) => {
              const r = f.root.getBoundingClientRect();
              f.at = lengthAtY(geoRef.current, r.top - box.top + r.height / 2);
            });
          };

          proxy = { len: 0 };
          // Half a pixel of give: the tween's value is rounded, so the last
          // stage (whose mark sits at the very end) must not need an exact hit.
          const place = () => {
            park(proxy.len);
            fires.forEach((f) => {
              if (!f.fired && proxy.len >= f.at - 0.5) {
                f.fired = true;
                f.tl.play();
              } else if (f.fired && proxy.len < f.at - 0.5) {
                f.fired = false;
                f.tl.reverse();
              }
            });
          };
          const glide = gsap.quickTo(proxy, "len", {
            duration: 0.6,
            ease: "power3.out",
            onUpdate: place,
          });
          const target = () => lengthAtY(geoRef.current, window.scrollY + window.innerHeight * READING_LINE - runTop);
          const jump = () => {
            measure();
            proxy.len = target();
            glide(proxy.len, proxy.len);
            place();
          };

          jump();
          trigger = ScrollTrigger.create({
            trigger: run,
            start: "top bottom",
            end: "bottom top",
            onUpdate: () => glide(target()),
            onRefresh: jump,
          });
          onChute = jump;
          run.addEventListener("chute", onChute);
        })
        .catch(() => {
          // Offline, or a stale chunk after a redeploy: show the run finished.
          if (live) finish();
        });

      return () => {
        live = false;
        if (proxy) gsap.killTweensOf(proxy);
        if (trigger) trigger.kill();
        if (onChute) run.removeEventListener("chute", onChute);
        fires.forEach((f) => f.tl.kill());
      };
    },
    { scope: runRef },
  );

  return (
    <div className={launched ? "run is-launched" : "run"} ref={runRef}>
      <svg className="run-layer run-layer--chute" aria-hidden="true" focusable="false">
        {/* Knockout: a thin paper halo around each machine's ink, so a
            machine breaking out of its panel cuts the panel's border and the
            track behind it, the way a comic breakout does. */}
        <defs>
          <filter id="knockout" x="-10%" y="-10%" width="120%" height="120%">
            <feMorphology in="SourceAlpha" operator="dilate" radius="4" result="grown" />
            <feFlood style={{ floodColor: "var(--paper)" }} result="paper" />
            <feComposite in="paper" in2="grown" operator="in" result="halo" />
            <feMerge>
              <feMergeNode in="halo" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path className="chute-line chute-bed" />
        <path className="chute-line chute-core" />
        <path className="chute-ties" />
        <path className="chute-rails" />
      </svg>

      <Hero onLaunch={() => setLaunched(true)} />

      <section className="machine wrap" id="work" aria-labelledby="work-title">
        <header className="machine-head">
          <h2 id="work-title">{COUNT_WORDS[projects.length] || projects.length} things I've built and shipped</h2>
          <p className="machine-note">
            follow the marble <InkArrow />
          </p>
        </header>
        <div className="stages">
          {projects.map((project, i) => (
            <Stage
              key={project.id}
              project={project}
              letter={LETTERS[i]}
              side={i % 2 ? "left" : "right"}
              seed={i + 1}
            />
          ))}
        </div>
      </section>

      <section className="inbox" id="contact" aria-labelledby="inbox-title">
        <div className="wrap">
          <div className="inbox-panel" data-chute={lastSide}>
            <PanelFrame seed={9} weight={4.5} />
            <div className="inbox-envelope" data-fire="envelope">
              <Envelope />
            </div>
            <span className="stage-letter" aria-hidden="true">
              {LETTERS[projects.length]}
            </span>
            <h2 id="inbox-title">…and it lands in your inbox.</h2>
            <p className="inbox-copy">
              Got a tedious process to automate, a product to ship, or a role to fill? Send it over. {person.replyTime}
            </p>
            <div className="inbox-actions">
              <Plate href={`mailto:${person.email}`} tone="email" size="lg">
                <LuMail aria-hidden="true" /> Email Regor
              </Plate>
              <Plate href={person.links.linkedin} target="_blank" rel="noreferrer">
                <LuLinkedin aria-hidden="true" /> LinkedIn
              </Plate>
              <Plate href={person.links.github} target="_blank" rel="noreferrer">
                <LuGithub aria-hidden="true" /> GitHub
              </Plate>
            </div>
            <p className="inbox-address">{person.email}</p>
          </div>
        </div>
      </section>

      <svg className="run-layer run-layer--links" aria-hidden="true" focusable="false">
        {projects.map((project, i) => {
          const part = LINK_PARTS[i];
          return (
            <g className="link" key={project.id}>
              <g className="link-rod">
                <path className="link-rod-ink" />
                <path className="link-rod-core" />
                <path className="link-ring link-ring--far" />
                <path className="link-pin link-pin--far" />
              </g>
              <g className="link-arm">
                <path className="link-arm-ink" d={part.arm} />
                <path className="link-flag" d={part.flag} />
                <path className="link-flag-ink" d={part.flagInk} />
              </g>
              <path className="link-ring" d={part.hubRing} />
              <path className="link-pin" d={part.hubPin} />
            </g>
          );
        })}
      </svg>

      <div className="marble" style={{ opacity: launched ? 1 : 0 }} aria-hidden="true">
        <svg viewBox="-12 -12 24 24" focusable="false">
          <circle r="11" fill="var(--ink)" />
          <circle cx="-3.5" cy="-3.5" r="3.2" fill="var(--paper)" />
        </svg>
      </div>
    </div>
  );
}
