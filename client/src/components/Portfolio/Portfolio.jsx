import React from "react";
import {
  LuArrowUpRight,
  LuCoffee,
  LuExternalLink,
  LuFileText,
  LuGithub,
  LuUsers,
} from "react-icons/lu";
import { Badge, Button, Card, Tag } from "../ui/Ui";
import cisShot from "../Assets/CISclone.PNG";
import ecomShot from "../Assets/minecom.PNG";
import bubbleShot from "../Assets/bubbledemo.png";

/* Selected works — the 2026 projects (Tidal HRIS, Log Bot, RFP Bot)
   plus earlier favourites, in the design's sticker-card grid. */
const works = [
  {
    title: "Tidal Solutions HRIS",
    badge: { label: "Live", status: "good" },
    blurb:
      "A complete HR information system for Tidal Solutions Corp. — employee records, onboarding, and day-to-day HR ops. Designed, built, and shipped end to end with an AI-assisted workflow, from data model to production.",
    tags: ["TypeScript", "React", "Vercel", "AI-assisted"],
    tone: "terracotta",
    icon: <LuUsers size={44} />,
    iconBg: "var(--accent-soft)",
    iconColor: "var(--terracotta-500)",
    demo: "https://hris-lovable.vercel.app",
    repo: "https://github.com/13urning/hris-lovable",
    delay: 0,
  },
  {
    title: "Log Bot — Discord + Claude",
    badge: { label: "Shipped", status: "good" },
    blurb:
      "A Discord bot that logs cafés, restos, anime, shows, and movies with 1–5★ reviews and live autocomplete (Google Places, TMDB, MyAnimeList). @mention it and Claude replies in a custom persona — with per-channel memory, a strict tool allowlist, and output guardrails.",
    tags: ["Node.js", "discord.js", "Claude", "LLM guardrails"],
    tone: "ochre",
    icon: <LuCoffee size={44} />,
    iconBg: "var(--accent-2-soft)",
    iconColor: "var(--ochre-500)",
    repo: "https://github.com/regoresconde-arch/cafe-bot",
    delay: 90,
  },
  {
    title: "Discord RFP Bot",
    badge: { label: "Private", status: "neutral" },
    blurb:
      "An agentic request-for-proposal workflow: RFP requests come in through Discord, the bot works Google Workspace through its APIs and sends results out by email — wired together with Model Context Protocol (MCP) integrations.",
    tags: ["Node.js", "MCP", "Google APIs", "Automation"],
    tone: "olive",
    icon: <LuFileText size={44} />,
    iconBg: "var(--accent-3-soft)",
    iconColor: "var(--olive-500)",
    delay: 60,
  },
  {
    title: "Customer Intelligence System",
    badge: { label: "Shipped", status: "good" },
    blurb:
      "A search directory for client teams — CRUD, SSO login, and a fraud / blacklist lookup. React front end, Python (Flask) back end.",
    tags: ["React", "Python", "Flask"],
    tone: "terracotta",
    image: cisShot,
    delay: 150,
  },
  {
    title: "Minimalist E-Commerce",
    badge: { label: "Live", status: "good" },
    blurb:
      "A clean, responsive storefront template built for simplicity — easy to browse, easy to buy. React + Tailwind.",
    tags: ["React", "Tailwind"],
    tone: "ochre",
    image: ecomShot,
    demo: "https://minimalist-e-commerce-gamma.vercel.app",
    delay: 90,
  },
  {
    title: "Bubble.io Shop",
    badge: { label: "Shipped", status: "good" },
    blurb:
      "E-commerce layouts and back-end automations built no-code in Bubble.io for a client's DigiShop.",
    tags: ["Bubble.io", "No-code"],
    tone: "olive",
    image: bubbleShot,
    delay: 150,
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="rg-section">
      <div
        data-reveal="up"
        style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 28, flexWrap: "wrap" }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-2xs)",
            letterSpacing: "var(--tracking-caps)",
            textTransform: "uppercase",
            color: "var(--text-muted)",
          }}
        >
          Selected work
        </span>
        <span
          style={{
            fontFamily: "var(--font-hand)",
            fontSize: 27,
            color: "var(--accent)",
            transform: "rotate(-1.5deg)",
            display: "inline-block",
          }}
        >
          new AI builds &amp; old favourites
        </span>
      </div>
      <div className="rg-grid-2">
        {works.map((w) => (
          <div key={w.title} data-reveal="up" data-reveal-delay={w.delay}>
            <Card variant="sticker" interactive style={{ height: "100%" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 13, height: "100%" }}>
                <div
                  style={{
                    position: "relative",
                    height: 158,
                    borderRadius: "var(--radius-sm)",
                    overflow: "hidden",
                    border: "var(--stroke) solid var(--border-soft)",
                    background: w.iconBg || "var(--bg-sunken)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: w.iconColor,
                  }}
                >
                  {w.image ? (
                    <img
                      src={w.image}
                      alt={`${w.title} screenshot`}
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                    />
                  ) : (
                    w.icon
                  )}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 10,
                  }}
                >
                  <h3 style={{ margin: 0, fontSize: "var(--text-xl)" }}>{w.title}</h3>
                  <Badge status={w.badge.status} dot>
                    {w.badge.label}
                  </Badge>
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: "var(--text-sm)",
                    color: "var(--text-muted)",
                    lineHeight: 1.55,
                  }}
                >
                  {w.blurb}
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: 6,
                    flexWrap: "wrap",
                    alignItems: "center",
                    marginTop: "auto",
                  }}
                >
                  {w.tags.map((t) => (
                    <Tag key={t} tone={w.tone}>
                      {t}
                    </Tag>
                  ))}
                  <span style={{ flex: 1 }} />
                  {w.demo && (
                    <Button
                      as="a"
                      variant="ghost"
                      size="sm"
                      href={w.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                        Live demo <LuExternalLink />
                      </span>
                    </Button>
                  )}
                  {w.repo && (
                    <Button
                      as="a"
                      variant="ghost"
                      size="sm"
                      href={w.repo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                        <LuGithub /> Code
                      </span>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
      <div data-reveal="up" style={{ textAlign: "center", marginTop: 32 }}>
        <Button
          as="a"
          variant="ghost"
          size="md"
          href="https://github.com/13urning"
          target="_blank"
          rel="noreferrer"
        >
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            More on GitHub <LuArrowUpRight />
          </span>
        </Button>
      </div>
    </section>
  );
}
