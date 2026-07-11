import React from "react";
import { Avatar, Card } from "../ui/Ui";
import regor from "../Assets/regoravatar.png";

const jobs = [
  {
    period: "2026 — now",
    current: true,
    title: "Full Stack Dev · AI Engineering · Tidal Solutions Corp.",
    detail:
      "Where I grew into AI engineering. I ship LLM-powered products end to end: the company HRIS (TypeScript/React on Vercel, built AI-assisted), Claude integrations with persona design and per-channel memory, layered guardrails (tool allowlists + output scrubbing), MCP servers connecting agents to Google Workspace and email, and agentic automations like an RFP intake bot.",
  },
  {
    period: "2024 — 26",
    title: "Fullstack Dev / Platform Delivery · Globe Telecom",
    detail:
      "Salesforce admin + dev (Flows, Apex, LWC), JIRA & Ironclad integrations, AWS automations, internal React apps.",
  },
  {
    period: "2021 — 24",
    title: "Jr Full Stack Developer · Asticom",
    detail:
      "React front ends, Python APIs, REST integrations, Pardot pages, and process automation.",
  },
  {
    period: "2020",
    title: "Web Developer Intern · Cortex",
    detail: "First React components and a taste of IoT systems.",
  },
];

export default function WorkHistory() {
  return (
    <section id="about" className="rg-section">
      <div className="rg-about-grid">
        <div data-reveal="left">
          <span
            style={{
              display: "inline-block",
              fontFamily: "var(--font-hand)",
              fontSize: 25,
              color: "var(--accent)",
              transform: "rotate(-2deg)",
            }}
          >
            a little about me
          </span>
          <h2 style={{ fontSize: "var(--text-3xl)", margin: "4px 0 14px" }}>
            Regor Carlo Esconde
          </h2>
          <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 16 }}>
            <Avatar name="Regor Carlo Esconde" src={regor} size="lg" sticker />
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-2xs)",
                color: "var(--text-muted)",
                lineHeight: 1.6,
              }}
            >
              AI engineer · full-stack dev
              <br />
              Muntinlupa City, PH
            </div>
          </div>
          <p style={{ fontSize: "var(--text-md)", color: "var(--text-body)", lineHeight: 1.7, margin: 0 }}>
            These days I do AI engineering at Tidal Solutions Corp. — integrating
            Claude into internal tools, designing how agents behave (personas,
            prompts, memory), and building the guardrails that keep LLM output
            predictable in production. Before that I configured Salesforce —
            Flows, permissions, Apex and LWC — and wired it to tools like JIRA
            and Ironclad through REST APIs and webhooks. I still love turning
            tedious, repetitive work into something that just runs on its own;
            now the automations can think a little, too.
          </p>
        </div>
        <div data-reveal="right">
          <Card variant="soft">
            <h3 style={{ margin: "0 0 18px", fontSize: "var(--text-xl)" }}>Where I've worked</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {jobs.map((job) => (
                <div key={job.period} style={{ display: "flex", gap: 14 }}>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "var(--text-2xs)",
                      color: "var(--accent)",
                      fontWeight: 700,
                      width: 74,
                      flexShrink: 0,
                      lineHeight: 1.5,
                    }}
                  >
                    {job.period}
                  </span>
                  <div>
                    <div
                      style={{
                        fontWeight: 700,
                        color: "var(--text-strong)",
                        fontSize: "var(--text-sm)",
                      }}
                    >
                      {job.title}
                    </div>
                    <div
                      style={{
                        fontSize: "var(--text-sm)",
                        color: "var(--text-muted)",
                        lineHeight: 1.5,
                        marginTop: 2,
                      }}
                    >
                      {job.detail}
                    </div>
                  </div>
                </div>
              ))}
              <div
                style={{
                  display: "flex",
                  gap: 14,
                  borderTop: "var(--stroke) dashed var(--border-soft)",
                  paddingTop: 16,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-2xs)",
                    color: "var(--text-muted)",
                    fontWeight: 700,
                    width: 74,
                    flexShrink: 0,
                    lineHeight: 1.5,
                  }}
                >
                  2016 — 21
                </span>
                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      color: "var(--text-strong)",
                      fontSize: "var(--text-sm)",
                    }}
                  >
                    B.S. Information Technology
                  </div>
                  <div
                    style={{
                      fontSize: "var(--text-sm)",
                      color: "var(--text-muted)",
                      lineHeight: 1.5,
                      marginTop: 2,
                    }}
                  >
                    De La Salle University – Dasmariñas
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
