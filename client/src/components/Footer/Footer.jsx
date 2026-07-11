import React from "react";
import { LuGithub, LuLinkedin, LuMail, LuTwitter } from "react-icons/lu";
import { Button, IconButton, Sparkle } from "../ui/Ui";

export default function Footer() {
  return (
    <>
      <section id="contact" style={{ padding: "56px 34px 44px" }}>
        <div
          data-reveal="up"
          style={{ maxWidth: "var(--container-md)", margin: "0 auto", position: "relative" }}
        >
          <Sparkle
            className="rg-bob2"
            fill="var(--accent-3)"
            size={40}
            style={{
              position: "absolute",
              top: -22,
              left: 20,
              animation: "bob2 4s ease-in-out infinite",
              zIndex: 2,
            }}
          />
          <div
            style={{
              background: "var(--accent-soft)",
              border: "var(--stroke-bold) solid var(--border-ink)",
              boxShadow: "var(--shadow-sticker)",
              borderRadius: "var(--radius-lg)",
              padding: "48px 40px",
              textAlign: "center",
            }}
          >
            <span
              style={{
                display: "inline-block",
                fontFamily: "var(--font-hand)",
                fontSize: 30,
                color: "var(--accent)",
                transform: "rotate(-2deg)",
              }}
            >
              want to make something together?
            </span>
            <h2 style={{ fontSize: "var(--text-3xl)", margin: "6px 0 10px" }}>Let's talk.</h2>
            <p
              style={{
                fontSize: "var(--text-lg)",
                color: "var(--text-body)",
                lineHeight: 1.6,
                margin: "0 auto 26px",
                maxWidth: "44ch",
              }}
            >
              I'm open to projects and roles. Send a note and I'll get back to
              you — usually within a day.
            </p>
            <div
              style={{
                display: "flex",
                gap: 12,
                justifyContent: "center",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <Button as="a" variant="sticker" size="lg" href="mailto:esconderegor@gmail.com">
                <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <LuMail /> esconderegor@gmail.com
                </span>
              </Button>
              <IconButton
                as="a"
                variant="sticker"
                size="lg"
                round
                label="GitHub"
                href="https://github.com/13urning"
                target="_blank"
                rel="noreferrer"
              >
                <LuGithub />
              </IconButton>
              <IconButton
                as="a"
                variant="sticker"
                size="lg"
                round
                label="LinkedIn"
                href="https://www.linkedin.com/in/regor-carlo-esconde-55570a195/"
                target="_blank"
                rel="noreferrer"
              >
                <LuLinkedin />
              </IconButton>
              <IconButton
                as="a"
                variant="sticker"
                size="lg"
                round
                label="Twitter"
                href="https://twitter.com/jaregor"
                target="_blank"
                rel="noreferrer"
              >
                <LuTwitter />
              </IconButton>
            </div>
          </div>
        </div>
      </section>
      <footer style={{ borderTop: "var(--stroke) solid var(--border-soft)", marginTop: 20 }}>
        <div
          style={{
            maxWidth: "var(--container-lg)",
            margin: "0 auto",
            padding: "26px 34px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-2xs)",
              color: "var(--text-muted)",
            }}
          >
            © {new Date().getFullYear()} Regor Carlo Esconde
          </span>
          <span
            style={{
              fontFamily: "var(--font-hand)",
              fontSize: 20,
              color: "var(--accent)",
              transform: "rotate(-1.5deg)",
              display: "inline-block",
            }}
          >
            built with care — and a few doodles
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-2xs)",
              color: "var(--text-muted)",
            }}
          >
            github.com/13urning
          </span>
        </div>
      </footer>
    </>
  );
}
