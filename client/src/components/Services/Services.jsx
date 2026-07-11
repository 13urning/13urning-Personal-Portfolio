import React from "react";
import { LuCode2, LuSparkles, LuWorkflow } from "react-icons/lu";
import { Card, Tag } from "../ui/Ui";

const services = [
  {
    title: "AI engineering",
    icon: <LuSparkles />,
    iconBg: "var(--accent-soft)",
    iconColor: "var(--terracotta-500)",
    tone: "terracotta",
    tags: ["Claude & LLM integration", "Agentic workflows", "MCP", "Prompts & guardrails"],
    delay: 0,
  },
  {
    title: "Full-stack web",
    icon: <LuCode2 />,
    iconBg: "var(--accent-2-soft)",
    iconColor: "var(--ochre-500)",
    tone: "ochre",
    tags: ["React & Node", "TypeScript", "Python", "REST APIs", "MySQL"],
    delay: 90,
  },
  {
    title: "Salesforce & integrations",
    icon: <LuWorkflow />,
    iconBg: "var(--accent-3-soft)",
    iconColor: "var(--olive-500)",
    tone: "olive",
    tags: ["Admin & Flows", "Apex & LWC", "JIRA automation", "Ironclad (CLM)", "AWS scripting"],
    delay: 180,
  },
];

export default function Services() {
  return (
    <section id="services" className="rg-section">
      <div data-reveal="up" style={{ marginBottom: 28 }}>
        <span
          style={{
            display: "inline-block",
            fontFamily: "var(--font-hand)",
            fontSize: 27,
            color: "var(--accent)",
            transform: "rotate(-1.5deg)",
          }}
        >
          here's what I can do —
        </span>
        <h2 style={{ fontSize: "var(--text-2xl)", margin: "4px 0 0" }}>What I do</h2>
      </div>
      <div className="rg-grid-3">
        {services.map((s) => (
          <div key={s.title} data-reveal="up" data-reveal-delay={s.delay}>
            <Card variant="sticker" style={{ height: "100%" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <span
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "var(--radius-blob)",
                    background: s.iconBg,
                    border: "var(--stroke-bold) solid var(--border-ink)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: s.iconColor,
                  }}
                >
                  {s.icon}
                </span>
                <h3 style={{ margin: 0, fontSize: "var(--text-lg)" }}>{s.title}</h3>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {s.tags.map((t) => (
                    <Tag key={t} tone={s.tone}>
                      {t}
                    </Tag>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
