import React, { useRef } from "react";
import { LuDownload, LuMail } from "react-icons/lu";
import { HeroMachine, InkArrow, PanelFrame } from "./Drawings";
import { Plate } from "./ui/Ui";
import { person } from "../content";
// The portrait "boils" like hand-drawn animation: three slightly different
// tracings of it sit side by side in one image (baked by
// scripts/make-portrait.py), and CSS steps the strip through them. Only the
// strip moves, so nothing repaints. One file per pixel density; the panel is
// never wider than 240 CSS px, so the strip is never wider than 720.
import boil240 from "./Assets/portrait-boil-240.webp";
import boil360 from "./Assets/portrait-boil-360.webp";
import boil480 from "./Assets/portrait-boil-480.webp";
import { gsap, MOTION_OK, useGSAP } from "../lib/gsap";

/* First viewport: the claim and the two doors on the left, the inventor and
   the top of the contraption on the right. Text and buttons are on screen
   and clickable from the first frame; only the machine moves. */
export default function Hero({ onLaunch }) {
  const ref = useRef(null);

  // The machine starts itself once, in about 1.4s: the tedious paperwork
  // drops through the funnel and the pipe into the lever's cup, its weight
  // tips the lever, and the lever flicks the marble onto the chute (where
  // Run takes it over).
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        MOTION_OK,
        () => {
          gsap
            .timeline({ defaults: { ease: "power2.out" } })
            .fromTo(
              ".hero-balloon",
              { scale: 0.85, opacity: 0, transformOrigin: "12% 100%" },
              { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(2)" },
              0.15
            )
            .fromTo(
              ".hm-paper",
              { opacity: 1, y: 0, rotate: 0, transformOrigin: "50% 50%" },
              { y: 70, rotate: (i) => [-14, 10, -6][i], duration: 0.4, ease: "power2.in", stagger: 0.12 },
              0.1
            )
            .to(".hm-paper", { opacity: 0, duration: 0.1, stagger: 0.12 }, 0.45)
            .fromTo(".hm-paper-out", { opacity: 1, y: 0 }, { y: 50, duration: 0.25, ease: "power2.in" }, 0.55)
            .to(".hm-lever", { rotate: 10, svgOrigin: "130 312", duration: 0.22, ease: "back.out(3)" }, 0.8)
            .to(".hm-marble", { x: -8, y: -26, duration: 0.22, ease: "power2.out" }, 0.84)
            .to(".hm-marble", { x: -24, y: 55, duration: 0.3, ease: "power2.in" }, 1.06)
            .set(".hm-marble", { opacity: 0 }, 1.36)
            .call(() => onLaunch && onLaunch(), null, 1.36)
            .to(".hm-lever", { rotate: 0, svgOrigin: "130 312", duration: 0.5, ease: "power2.inOut" }, 1.22)
            .to(".hm-paper-out", { opacity: 0, duration: 0.3 }, 1.3);
        },
        ref
      );
      return () => mm.revert();
    },
    { scope: ref }
  );

  return (
    <section className="hero wrap" id="top" ref={ref}>
      <div className="hero-copy">
        <h1 className="hero-title">
          I build AI agents and automations that do the <mark>tedious work</mark>.
        </h1>
        <p className="hero-deck">
          <strong>{person.name}</strong>, full-stack developer doing AI engineering at Tidal Solutions
          Corp. End to end, on whatever stack the problem lives in.
        </p>
        <p className="hero-status">
          <span className="status-dot" aria-hidden="true" />
          {person.status} · {person.location}
        </p>
        <div className="hero-actions">
          <Plate href={`mailto:${person.email}`} tone="email" size="lg">
            <LuMail aria-hidden="true" /> Email Regor
          </Plate>
          <Plate href={person.cv} download="Regor-Esconde-CV.pdf" size="lg">
            <LuDownload aria-hidden="true" /> Download CV
          </Plate>
        </div>
      </div>
      <div className="hero-art">
        <figure className="portrait-panel">
          <img
            className="portrait-boil"
            src={boil480}
            srcSet={`${boil240} 720w, ${boil360} 1080w, ${boil480} 1440w`}
            sizes="720px"
            width="1440"
            height="600"
            alt="Illustrated self-portrait of Regor Carlo Esconde"
          />
          <PanelFrame seed={21} weight={4.5} />
        </figure>
        <p className="hero-balloon">hey, thanks for stopping by!</p>
        <p className="hero-label" aria-hidden="true">
          the tedious stuff <InkArrow />
        </p>
        <HeroMachine />
      </div>
    </section>
  );
}
