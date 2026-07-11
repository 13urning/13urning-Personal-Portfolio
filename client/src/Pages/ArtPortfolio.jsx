import React, { useEffect, useState } from "react";
import { LuX } from "react-icons/lu";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { IconButton } from "../components/ui/Ui";
import useReveal from "../hooks/useReveal";

import acceptance from "../components/Assets/acceptance.jpg";
import anxiety from "../components/Assets/anxiety.png";
import apathy from "../components/Assets/Apathy.jpg";
import desire from "../components/Assets/desire.png";
import agony from "../components/Assets/AGONY COLORED.jpg";
import gaze from "../components/Assets/gaze.jpg";
import ladyInSilk from "../components/Assets/LadyInSilk.png";
import sparrowHead from "../components/Assets/SparrowHead.jpg";
import sailorxjojo from "../components/Assets/sailorxjojo.png";
import rengshiba from "../components/Assets/Rengshiba.jpg";
import try2020 from "../components/Assets/2020try.jpg";

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

function ArtFrame({ piece, index, onOpen }) {
  const rotate = index % 2 === 0 ? "-1.2deg" : "1.1deg";
  return (
    <figure
      data-reveal="up"
      data-reveal-delay={(index % 3) * 70}
      onClick={() => onOpen(piece)}
      style={{
        margin: 0,
        background: "var(--surface-raised)",
        border: "var(--stroke-bold) solid var(--border-ink)",
        boxShadow: "var(--shadow-sticker)",
        borderRadius: "var(--radius-md)",
        padding: "12px 12px 10px",
        transform: `rotate(${rotate})`,
        transition:
          "transform var(--dur) var(--ease-bounce), box-shadow var(--dur) var(--ease-out)",
        cursor: "zoom-in",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "rotate(0deg) translate(-2px,-3px)";
        e.currentTarget.style.boxShadow = "6px 7px 0 var(--border-ink)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = `rotate(${rotate})`;
        e.currentTarget.style.boxShadow = "var(--shadow-sticker)";
      }}
    >
      <img
        src={piece.src}
        alt={piece.title}
        loading="lazy"
        style={{
          display: "block",
          width: "100%",
          borderRadius: "var(--radius-sm)",
          border: "var(--stroke) solid var(--border-soft)",
        }}
      />
      <figcaption
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: 8,
          padding: "8px 4px 0",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-hand)",
            fontSize: 22,
            color: "var(--text-strong)",
            transform: "rotate(-1deg)",
            display: "inline-block",
          }}
        >
          {piece.title}
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-2xs)",
            color: "var(--text-muted)",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </figcaption>
    </figure>
  );
}

export default function ArtPortfolio() {
  useReveal();
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!active) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <div
      style={{
        background: "var(--bg-page)",
        color: "var(--text-body)",
        fontFamily: "var(--font-body)",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Header />

      <section className="rg-section" style={{ paddingTop: 56, paddingBottom: 36 }}>
        <div data-reveal="up">
          <span
            style={{
              display: "inline-block",
              fontFamily: "var(--font-hand)",
              fontSize: 30,
              lineHeight: 1,
              color: "var(--accent)",
              transform: "rotate(-2.5deg)",
            }}
          >
            the other side of my keyboard —
          </span>
          <h1 style={{ fontSize: "clamp(2.5rem, 5.5vw, 4rem)", margin: "10px 0 0" }}>Art.</h1>
          <p
            style={{
              fontSize: "var(--text-lg)",
              color: "var(--text-body)",
              lineHeight: 1.65,
              margin: "18px 0 0",
              maxWidth: "52ch",
            }}
          >
            Drawings and digital pieces I make when I'm not shipping code —
            mostly moods, portraits, and the occasional dog. Click any piece to
            see it up close.
          </p>
        </div>
      </section>

      <section className="rg-section" style={{ paddingTop: 0 }}>
        <div className="rg-masonry">
          {pieces.map((piece, i) => (
            <ArtFrame key={piece.title} piece={piece} index={i} onOpen={setActive} />
          ))}
        </div>
      </section>

      {active && (
        <div
          role="dialog"
          aria-label={active.title}
          onClick={() => setActive(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 60,
            background: "rgba(36, 31, 24, 0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
        >
          <figure
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              margin: 0,
              background: "var(--surface-raised)",
              border: "var(--stroke-bold) solid var(--border-ink)",
              boxShadow: "var(--shadow-sticker)",
              borderRadius: "var(--radius-md)",
              padding: "14px 14px 10px",
              maxWidth: "min(92vw, 860px)",
            }}
          >
            <IconButton
              variant="sticker"
              size="sm"
              round
              label="Close"
              onClick={() => setActive(null)}
              style={{ position: "absolute", top: -14, right: -14, zIndex: 2 }}
            >
              <LuX />
            </IconButton>
            <img
              src={active.src}
              alt={active.title}
              style={{
                display: "block",
                maxWidth: "100%",
                maxHeight: "76vh",
                borderRadius: "var(--radius-sm)",
                border: "var(--stroke) solid var(--border-soft)",
              }}
            />
            <figcaption
              style={{
                fontFamily: "var(--font-hand)",
                fontSize: 24,
                color: "var(--text-strong)",
                padding: "10px 4px 2px",
              }}
            >
              {active.title}
            </figcaption>
          </figure>
        </div>
      )}

      <Footer />
    </div>
  );
}
