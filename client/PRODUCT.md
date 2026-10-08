# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, weighted about equally:

- **Hiring managers and recruiters** deciding whether to bring Regor on for a full-time AI engineering or full-stack role. Their job: judge fit and seniority from real work, then get the CV or start a conversation.
- **Clients commissioning freelance work** (businesses or founders) who need an app, an automation or an AI agent built. Their job: see that Regor has built this kind of thing before and can be trusted to ship it, then make contact.

## Product Purpose

The personal portfolio of Regor Carlo Esconde, a full-stack developer doing AI engineering at Tidal Solutions Corp. It exists to turn a visit into contact (email, LinkedIn, GitHub) or a CV download by showing shipped work, work history and services. Success: either audience understands within seconds what Regor builds, finds proof in real projects, and knows how to reach him. Status shown on the site: open to work, based in Muntinlupa, PH.

## Positioning

What a neighbouring developer portfolio could not truthfully copy:

- **Ships AI products end to end:** Claude/LLM integrations with persona design and per-channel memory, agents, MCP servers and layered guardrails, taken from data model to production (e.g. the Tidal Solutions HRIS, Log Bot, the Discord RFP bot).
- **Makes tedious work run itself:** automations and agents that take over repetitive business processes.
- **Range across stacks:** React, Node, Python/Flask, TypeScript, Salesforce (Flows, Apex, LWC), AWS, MySQL, no-code (Bubble.io).

## Operating Context

Visitors evaluate projects through live demos and code repositories, read the work history, download the CV (PDF), and reach out by email, LinkedIn, GitHub or Twitter. The site also hosts Regor's personal artwork as a secondary page.

## Capabilities and Constraints

- Existing Create React App (React 18, react-router) client in `client/`, deployed on Vercel from the GitHub `main` branch. A legacy `server/` folder exists and is out of scope.
- Two surfaces today: Home (`/`) and Art (`/art`). URLs and page structure may change in the redesign.
- Existing light/dark theme toggle.
- Motion tooling chosen by the user: GSAP (scroll and SVG) and Motion (interaction and state), with Emil Kowalski's design-engineering principles for timing and restraint.
- All content facts must be preserved (projects, work history, education, services, CV, contact links, art pieces); wording may be rewritten.
- Undecided: whether Art stays a separate page.

## Brand Commitments

- Name: Regor Carlo Esconde; short form "Regor".
- The illustrated self-portrait (`src/components/Assets/regoravatar.png`) stays the face of the site.
- Hand-drawn, cartoonish style (the user's binding direction for the redesign).

## Evidence on Hand

- Six projects with blurbs and tags, three with screenshots (`CISclone.PNG`, `minecom.PNG`, `bubbledemo.png`), live demos for the HRIS and the e-commerce template, repos for the HRIS and Log Bot; the RFP bot is private.
- Work history: Tidal Solutions Corp. (2026–now), Globe Telecom (2024–26), Asticom (2021–24), Cortex internship (2020); B.S. Information Technology, De La Salle University – Dasmariñas (2016–21).
- Services: AI engineering; full-stack web; Salesforce & integrations.
- CV: `src/components/Assets/RegorEscondeCV.pdf`.
- Eleven artworks in `src/components/Assets/`.
- Absent, and not to be fabricated: testimonials, client names or logos, metrics, pricing.

## Product Principles

1. **Proof over claims.** Every capability points at a real project, demo, repo or role.
2. **Two front doors.** A hiring manager and a client each find their path (role fit, or "what can you build for me") without wading through the other's.
3. **Character never costs a click.** The hand-drawn personality never slows reaching the work, the CV or contact.
4. **Plain status.** Availability and location are stated, not implied.
