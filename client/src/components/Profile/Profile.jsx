import React from "react";
import { LuArrowRight, LuMail } from "react-icons/lu";
import { Button, Sparkle } from "../ui/Ui";
import regor from "../Assets/regoravatar.png";

export default function Profile() {
  return (
    <section
      id="top"
      className="rg-section rg-hero-grid"
      style={{ paddingTop: 66, paddingBottom: 46 }}
    >
      <div>
        <div data-reveal="up" data-reveal-delay="0">
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
            hey, thanks for stopping by —
          </span>
        </div>
        <div data-reveal="up" data-reveal-delay="90" style={{ marginTop: 10 }}>
          <h1 className="rg-hero-title">
            I build web apps, automations &amp; AI agents that quietly do the work.
          </h1>
          <svg
            className="rg-squiggle"
            width="250"
            height="16"
            viewBox="0 0 250 16"
            fill="none"
            style={{ display: "block", marginTop: 10, overflow: "visible" }}
            aria-hidden="true"
          >
            <path
              d="M4 10 Q 26 2 48 9 T 92 8 Q 116 13 138 8 T 184 7 Q 210 12 232 8 T 246 8"
              stroke="var(--accent)"
              strokeWidth="3.6"
              strokeLinecap="round"
              strokeDasharray="340"
              strokeDashoffset="0"
              style={{ animation: "sq-draw 1s var(--ease-out) 0.55s both" }}
            />
          </svg>
        </div>
        <div data-reveal="up" data-reveal-delay="180">
          <p
            style={{
              fontSize: "var(--text-lg)",
              color: "var(--text-body)",
              lineHeight: 1.65,
              margin: "22px 0 28px",
              maxWidth: "47ch",
            }}
          >
            I'm Regor — a full-stack developer doing AI engineering at Tidal
            Solutions Corp. I integrate Claude and other LLMs into real
            products, wire up the connections between tools, and build the web
            apps and agents that keep business processes humming.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Button as="a" variant="sticker" size="lg" href="#work">
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                See my work <LuArrowRight />
              </span>
            </Button>
            <Button as="a" variant="ghost" size="lg" href="#contact">
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                <LuMail /> Say hi
              </span>
            </Button>
          </div>
        </div>
      </div>
      <div data-reveal="up" data-reveal-delay="120" style={{ position: "relative" }}>
        <div
          style={{
            position: "relative",
            borderRadius: "var(--radius-blob)",
            border: "var(--stroke-bold) solid var(--border-ink)",
            boxShadow: "var(--shadow-sticker)",
            overflow: "hidden",
            aspectRatio: "4/5",
            background: "var(--accent-soft)",
          }}
        >
          <img
            src={regor}
            alt="Regor Carlo Esconde"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <Sparkle
          className="rg-bob"
          style={{ position: "absolute", top: -16, right: -6, animation: "bob 3.6s ease-in-out infinite" }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -16,
            left: -18,
            background: "var(--surface-raised)",
            border: "var(--stroke-bold) solid var(--border-ink)",
            boxShadow: "var(--shadow-sticker-sm)",
            borderRadius: "var(--radius-sm)",
            padding: "8px 13px",
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-2xs)",
            color: "var(--text-body)",
            transform: "rotate(-3deg)",
          }}
        >
          Muntinlupa, PH · open to work
        </div>
      </div>
    </section>
  );
}
