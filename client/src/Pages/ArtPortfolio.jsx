import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { LuX } from "react-icons/lu";
import { AnimatePresence, LazyMotion, domMax, useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
import Masthead from "../components/Masthead";
import Colophon from "../components/Colophon";
import { PanelFrame } from "../components/Drawings";
import { IconPlate } from "../components/ui/Ui";
import useSeen from "../hooks/useSeen";

import acceptance from "../components/Assets/art/acceptance.webp";
import anxiety from "../components/Assets/art/anxiety.webp";
import apathy from "../components/Assets/art/apathy.webp";
import desire from "../components/Assets/art/desire.webp";
import agony from "../components/Assets/art/agony-colored.webp";
import gaze from "../components/Assets/art/gaze.webp";
import ladyInSilk from "../components/Assets/art/ladyinsilk.webp";
import sparrowHead from "../components/Assets/art/sparrowhead.webp";
import sailorxjojo from "../components/Assets/art/sailorxjojo.webp";
import rengshiba from "../components/Assets/art/rengshiba.webp";
import try2020 from "../components/Assets/art/2020try.webp";

const pieces = [
  { src: acceptance, title: "Acceptance" },
  { src: anxiety, title: "Anxiety" },
  { src: apathy, title: "Apathy" },
  { src: desire, title: "Desire" },
  { src: agony, title: "Agony, colored" },
  { src: gaze, title: "Gaze" },
  { src: ladyInSilk, title: "Lady in Silk" },
  { src: sparrowHead, title: "Sparrow Head" },
  { src: sailorxjojo, title: "Sailor × JoJo" },
  { src: rengshiba, title: "Rengshiba" },
  { src: try2020, title: "2020, an attempt" },
];

const EASE_OUT = [0.23, 1, 0.32, 1];
const SPRING = { type: "spring", duration: 0.35, bounce: 0.3 };
const DROP_IN = { type: "spring", duration: 0.45, bounce: 0.25 };
// The panel flies from its place on the page into the lightbox and back.
// Escape skips the flight: keyboard actions should feel instant.
const FLY_OPEN = { type: "spring", duration: 0.45, bounce: 0.15 };
const FLY_BACK = { type: "spring", duration: 0.3, bounce: 0 };
const NO_FLIGHT = { duration: 0 };

/* One piece as a comic panel: ink frame, the art, a caption strip. It drops
   onto the page the first time it scrolls into view. */
function Panel({ piece, index, onOpen, flightBack }) {
  const dropRef = useRef(null);
  const imgRef = useRef(null);
  const reduce = useReducedMotion();
  // Lazy images have no height until they load, so every panel would look
  // "in view" at first. Only start watching once this panel's art is in.
  const [sized, setSized] = useState(false);
  useLayoutEffect(() => {
    if (imgRef.current && imgRef.current.complete) setSized(true);
  }, []);
  const seen = useSeen(dropRef, 0.88, sized);
  const stagger = (index % 3) * 0.06;
  const open = (e) => onOpen(piece, e.currentTarget);

  return (
    <m.div
      ref={dropRef}
      className="art-drop"
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: -14, scale: 1.03 }}
      animate={seen ? { opacity: 1, y: 0, scale: 1 } : undefined}
      transition={{ default: { ...DROP_IN, delay: stagger }, opacity: { duration: 0.2, delay: stagger } }}
    >
      <m.figure
        layoutId={`art-${piece.title}`}
        className="art-panel"
        role="button"
        tabIndex={0}
        aria-label={`Open ${piece.title}`}
        onClick={open}
        // Like a native button: Enter opens on keydown, Space on keyup (so
        // the keyup can't land on the lightbox's Close button and shut it).
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            open(e);
          } else if (e.key === " ") {
            e.preventDefault();
          }
        }}
        onKeyUp={(e) => {
          if (e.key === " ") open(e);
        }}
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.98, transition: { duration: 0.1, ease: EASE_OUT } }}
        transition={{ ...SPRING, layout: flightBack }}
      >
        <img
          ref={imgRef}
          src={piece.src}
          alt={piece.title}
          loading="lazy"
          onLoad={() => setSized(true)}
          onError={() => setSized(true)}
        />
        <PanelFrame seed={50 + index} weight={4} />
        <figcaption className="caption-box">{piece.title}</figcaption>
      </m.figure>
    </m.div>
  );
}

export default function ArtPortfolio() {
  const [active, setActive] = useState(null);
  const [closedBy, setClosedBy] = useState(null); // "pointer" | "key"
  const opener = useRef(null);
  const closeButton = useRef(null);

  const openPiece = (piece, el) => {
    opener.current = el;
    setClosedBy(null);
    setActive(piece);
  };
  const close = (how) => {
    setClosedBy(how);
    setActive(null);
  };

  useEffect(() => {
    if (!active) return undefined;
    closeButton.current?.focus({ preventScroll: true });
    // Everything behind the dialog goes inert, so Tab stays inside it.
    const page = closeButton.current?.closest(".page");
    const behind = page ? [...page.children].filter((el) => !el.classList.contains("lightbox")) : [];
    behind.forEach((el) => {
      el.inert = true;
    });
    const onKey = (e) => {
      if (e.key === "Escape") {
        setClosedBy("key");
        setActive(null);
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      behind.forEach((el) => {
        el.inert = false;
      });
    };
  }, [active]);

  return (
    // The shared-element lightbox needs Motion's layout features; they load
    // with this page only, never on the homepage.
    <LazyMotion features={domMax}>
      <div className="page">
        <Masthead />
        <main>
          <header className="art-band">
            <div className="art-head wrap">
              <div className="section-head">
                <h1 className="art-title">Art.</h1>
                <p className="section-note">the other side of my keyboard</p>
              </div>
              <p className="art-intro">
                Drawings and digital pieces I make when I'm not shipping code: mostly moods,
                portraits, and the occasional dog. Click any piece to see it up close.
              </p>
            </div>
          </header>
          <div className="art wrap">
            <div className="art-grid">
              {pieces.map((piece, i) => (
                <Panel
                  key={piece.title}
                  piece={piece}
                  index={i}
                  onOpen={openPiece}
                  flightBack={closedBy === "key" ? NO_FLIGHT : FLY_BACK}
                />
              ))}
            </div>
          </div>
        </main>

        <AnimatePresence
          custom={closedBy}
          onExitComplete={() => opener.current?.focus({ preventScroll: true })}
        >
          {active && (
            <div
              key="lightbox"
              className="lightbox"
              role="dialog"
              aria-modal="true"
              aria-label={active.title}
              onClick={() => close("pointer")}
            >
              {/* The scrim fades on its own layer so the panel itself stays
                  fully opaque while it flies. */}
              <m.div
                className="lightbox-scrim"
                aria-hidden="true"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.2, ease: EASE_OUT } }}
                exit="gone"
                variants={{
                  gone: (how) => ({ opacity: 0, transition: { duration: how === "key" ? 0.15 : 0.2 } }),
                }}
              />
              <m.figure
                layoutId={`art-${active.title}`}
                className="art-panel art-panel--open"
                onClick={(e) => e.stopPropagation()}
                transition={{ layout: FLY_OPEN }}
              >
                <IconPlate
                  ref={closeButton}
                  label="Close"
                  className="lightbox-close"
                  // detail is 0 for a keyboard click: close without the flight.
                  onClick={(e) => close(e.detail === 0 ? "key" : "pointer")}
                >
                  <LuX />
                </IconPlate>
                <img src={active.src} alt={active.title} />
                <PanelFrame seed={70} weight={5} />
                <figcaption className="caption-box">{active.title}</figcaption>
              </m.figure>
            </div>
          )}
        </AnimatePresence>

        <Colophon />
      </div>
    </LazyMotion>
  );
}
