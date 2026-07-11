import React from "react";

const roles = [
  {
    company: "Tidal Solutions Corp.",
    role: "Full Stack Developer · AI Engineering",
    period: "2026 — Present",
    current: true,
    summary:
      "The role where I grew into AI engineering: the job stopped being just building screens and APIs, and became designing how AI systems behave in production.",
    points: [
      "Shipped the company HRIS end to end — TypeScript/React on Vercel — using an AI-assisted development workflow, from data model to deployed product.",
      "Integrate Anthropic Claude into internal tools: headless agent pipelines, system-prompt and persona design, and per-channel conversation memory.",
      "Engineer LLM guardrails in layers — strict tool allowlists, prompt-level rules, and code-level output scrubbing — so model behavior stays predictable for real users.",
      "Build with Model Context Protocol (MCP) to connect AI agents to Google Workspace, email, and internal APIs.",
      "Automate business workflows agentically — like an RFP intake bot that turns Discord requests into documents and outbound email.",
    ],
  },
  {
    company: "Globe Telecom",
    role: "Fullstack Developer / Platform Delivery Expert",
    period: "2024 — 2026",
    points: [
      "Administered Salesforce environments — users, roles, profiles, permission sets, and security controls.",
      "Automated business processes with Salesforce Flows, Process Builder, and validation rules; customized features with Apex and Lightning Web Components.",
      "Built frontend interfaces for internal web apps and form advertisements with ReactJS, HTML, and CSS.",
      "Integrated Salesforce and Ironclad (CLM) with JIRA using REST APIs and webhooks, and designed JIRA automation rules.",
      "Developed AWS-based API integrations for backend automation and data synchronization.",
    ],
  },
  {
    company: "Asticom Technology Inc.",
    role: "Junior Full Stack Developer",
    period: "2021 — 2024",
    points: [
      "Developed web applications with ReactJS frontends and Python backend APIs with authentication and integrations.",
      "Reduced server load and costs by optimizing search functionality and backend performance.",
      "Created landing pages and forms in Pardot and automated processes with Python scripts.",
    ],
  },
  {
    company: "Cortex Technologies Corporation",
    role: "Web Developer Intern",
    period: "2020",
    points: [
      "Developed ReactJS components for web applications and gained experience with IoT-related systems.",
    ],
  },
];

export default function WorkHistory() {
  return (
    <div id="experience" className="py-16 scroll-mt-20">
      <p className="text-sm uppercase tracking-[0.3em] text-teal-600 dark:text-teal-400 font-medium">
        Experience
      </p>
      <h3 className="text-3xl md:text-4xl font-bold py-2 text-gray-900 dark:text-gray-50">
        Work History
      </h3>
      <div className="mt-8 relative border-l-2 border-teal-500/30 dark:border-teal-400/20 ml-3">
        {roles.map((job) => (
          <div key={job.company} className="relative pl-8 pb-12 last:pb-0">
            <span
              className={`absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 ${
                job.current
                  ? "bg-teal-500 border-teal-500 shadow-lg shadow-teal-500/40"
                  : "bg-white dark:bg-gray-900 border-teal-500/50"
              }`}
            />
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {job.company}
              </h4>
              <span
                className={`text-sm font-medium ${
                  job.current
                    ? "text-teal-600 dark:text-teal-400"
                    : "text-gray-500 dark:text-gray-400"
                }`}
              >
                {job.period}
              </span>
            </div>
            <p className="text-md font-medium text-gray-600 dark:text-gray-300 mt-1">
              {job.role}
            </p>
            {job.summary && (
              <p className="text-sm leading-7 text-gray-600 dark:text-gray-300 mt-3 max-w-3xl italic">
                {job.summary}
              </p>
            )}
            <ul className="mt-3 space-y-2 max-w-3xl">
              {job.points.map((point) => (
                <li
                  key={point}
                  className="text-sm leading-7 text-gray-600 dark:text-gray-300 flex gap-3"
                >
                  <span className="text-teal-500 mt-0.5">▹</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
