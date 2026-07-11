import React from "react";

const skillGroups = [
  {
    title: "AI Engineering",
    blurb:
      "Integrating LLMs into real products — and keeping them predictable once users get involved.",
    skills: [
      "Claude / LLM Integration",
      "Agentic Workflows",
      "Model Context Protocol (MCP)",
      "Prompt & Persona Engineering",
      "Guardrails & Output Scrubbing",
      "AI-assisted Development",
    ],
  },
  {
    title: "Full-Stack Web",
    blurb:
      "Building responsive web applications, backend APIs, and data-driven systems.",
    skills: [
      "ReactJS",
      "Node.js & Express",
      "TypeScript / JavaScript",
      "Python & Flask",
      "Tailwind CSS",
      "MySQL",
      "REST APIs & Webhooks",
    ],
  },
  {
    title: "Platform & CRM",
    blurb:
      "Salesforce delivery and the integrations that connect it to everything else.",
    skills: [
      "Salesforce Admin & Flows",
      "Apex & LWC",
      "Pardot",
      "JIRA Automation",
      "Ironclad (CLM)",
      "AWS API Scripting",
    ],
  },
];

export default function Services() {
  return (
    <div id="skills" className="py-16 scroll-mt-20">
      <p className="text-sm uppercase tracking-[0.3em] text-teal-600 dark:text-teal-400 font-medium">
        Skills
      </p>
      <h3 className="text-3xl md:text-4xl font-bold py-2 text-gray-900 dark:text-gray-50">
        What I do
      </h3>
      <p className="text-md py-2 leading-8 text-gray-700 dark:text-gray-300 max-w-3xl">
        Since the beginning of my journey as a developer I've built automations
        and web apps that cut costs and sped up business processes — for Globe
        Telecom, and now for Tidal Solutions Corp., where AI engineering is at
        the center of my work.
      </p>
      <div className="grid gap-6 md:grid-cols-3 my-8">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700/60 dark:bg-gray-800/60"
          >
            <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
              {group.title}
            </h4>
            <p className="text-sm leading-7 text-gray-600 dark:text-gray-300 mb-4">
              {group.blurb}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200 dark:bg-gray-700/60 dark:text-gray-200 dark:border-gray-600/60"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
