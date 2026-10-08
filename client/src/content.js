/* Every fact the site states lives here, so the drawings and layout can
   change without anyone retyping a project, a date or a link. */
import waveHrisShot from "./components/Assets/projects/wave-hris.webp";
import tidalCreativesShot from "./components/Assets/projects/tidal-creatives.webp";
import tidalPmShot from "./components/Assets/projects/tidal-project-management.webp";
import reconciliationShot from "./components/Assets/projects/reconciliation-tool.webp";
import resume from "./components/Assets/RegorEscondeCV.pdf";

export const person = {
  name: "Regor Carlo Esconde",
  short: "Regor",
  role: "Full-stack developer doing AI engineering at Tidal Solutions Corp.",
  status: "Open to roles and projects",
  location: "Muntinlupa, PH",
  email: "esconderegor@gmail.com",
  // Carried over from the previous site's contact section ("Send a note and
  // I'll get back to you — usually within a day.").
  replyTime: "I usually reply within a day.",
  cv: resume,
  links: {
    github: "https://github.com/13urning",
    linkedin: "https://www.linkedin.com/in/regor-carlo-esconde-55570a195/",
    twitter: "https://twitter.com/jaregor",
  },
};

/* The machine's stages, in the order the marble reaches them. `machine`
   names the drawing that does this stage's job. Screenshots carry their
   pixel size so the page reserves their space before they load. Internal
   tools get no links: their apps and repos aren't public. */
export const projects = [
  {
    id: "wave-hris",
    title: "Wave HRIS",
    status: "Internal",
    machine: "cabinet",
    job: "Files the HR paperwork",
    blurb:
      "An HR system in production for a Philippine workforce: daily time records with web and NFC clock-in, leave and overtime approvals, performance evaluations and an org chart.",
    parts: ["TanStack Start", "React", "Tailwind", "Firebase Auth", "PostgreSQL", "Cloud Run"],
    shot: {
      src: waveHrisShot,
      width: 1200,
      height: 840,
      alt: "Wave HRIS employee dashboard: today's attendance with a Clock Out button, upcoming holidays and the leave summary",
    },
  },
  {
    id: "tidal-creatives",
    title: "Tidal Creatives",
    status: "Live",
    machine: "clapper",
    job: "Rolls the next episode",
    blurb:
      "A streaming portal for short-form drama: a browsable catalogue, a vertical shorts feed, free, member and paid tiers with Xendit checkout, an admin console for uploads and analytics, and a Flutter companion app.",
    parts: ["Next.js", "React", "TypeScript", "Supabase", "Bunny Stream", "Xendit", "Flutter"],
    shot: {
      src: tidalCreativesShot,
      width: 1200,
      height: 750,
      alt: "Tidal Creatives browse page: a featured series with its Play, Trailer and Episodes buttons",
    },
    demo: "https://www.tidalcreatives.com",
  },
  {
    id: "tidal-pm",
    title: "Tidal Project Management",
    status: "Internal",
    machine: "stamp",
    job: "Stamps the task done",
    blurb:
      "Tidal's project-delivery workspace, built on the Rapid Planning Method: initiatives broken down to tasks, sprints and kanban boards, a daily planner, dashboards, change requests, a wiki and whiteboards, synced with Google Calendar.",
    parts: ["React", "TypeScript", "Vite", "Supabase Realtime", "TipTap", "Excalidraw", "Cloud Run"],
    shot: {
      src: tidalPmShot,
      width: 1036,
      height: 932,
      alt: "A sprint board grouped by epic, with cards across Backlog, To Do, In Progress and In Review",
    },
  },
  {
    id: "reconciliation",
    title: "Reconciliation Tool",
    status: "Internal",
    machine: "lens",
    job: "Finds the row that doesn't match",
    blurb:
      "Checks every row of a provider's Excel workbook against the claims database and labels it (paid, liquidated, double payment, no record found), then hands back a worked sheet and a running tracker.",
    parts: ["Python", "Flask", "pandas", "RapidFuzz", "SQL Server", "openpyxl"],
    shot: {
      src: reconciliationShot,
      width: 1200,
      height: 758,
      alt: "The reconcile screen: a workbook drop zone, billing options and the most recent runs",
    },
  },
];

export const about =
  "These days I do AI engineering at Tidal Solutions Corp.: integrating Claude into internal tools, designing how agents behave (personas, prompts, memory), and building the guardrails that keep LLM output predictable in production. Before that I configured Salesforce (Flows, permissions, Apex and LWC) and wired it to tools like JIRA and Ironclad through REST APIs and webhooks. I still love turning tedious, repetitive work into something that just runs on its own; now the automations can think a little, too.";

export const jobs = [
  {
    period: "2026 — now",
    title: "Full Stack Dev · AI Engineering",
    org: "Tidal Solutions Corp.",
    detail:
      "Where I grew into AI engineering. I ship LLM-powered products end to end: Wave HRIS (TypeScript/React, in production on Cloud Run), Claude integrations with persona design and per-channel memory, layered guardrails (tool allowlists + output scrubbing), MCP servers connecting agents to Google Workspace and email, and agentic automations like an RFP intake bot.",
  },
  {
    period: "2024 — 26",
    title: "Fullstack Dev / Platform Delivery",
    org: "Globe Telecom",
    detail:
      "Salesforce admin + dev (Flows, Apex, LWC), JIRA & Ironclad integrations, AWS automations, internal React apps.",
  },
  {
    period: "2021 — 24",
    title: "Jr Full Stack Developer",
    org: "Asticom",
    detail: "React front ends, Python APIs, REST integrations, Pardot pages, and process automation.",
  },
  {
    period: "2020",
    title: "Web Developer Intern",
    org: "Cortex",
    detail: "First React components and a taste of IoT systems.",
  },
];

export const education = {
  period: "2016 — 21",
  title: "B.S. Information Technology",
  org: "De La Salle University – Dasmariñas",
};

export const services = [
  {
    title: "AI engineering",
    parts: ["Claude & LLM integration", "Agentic workflows", "MCP", "Prompts & guardrails"],
  },
  {
    title: "Full-stack web",
    parts: ["React & Node", "TypeScript", "Python", "REST APIs", "MySQL"],
  },
  {
    title: "Salesforce & integrations",
    parts: ["Admin & Flows", "Apex & LWC", "JIRA automation", "Ironclad (CLM)", "AWS scripting"],
  },
];
