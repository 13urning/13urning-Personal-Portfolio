import React from "react";
import clone from "../Assets/CISclone.PNG";
import cis2 from "../Assets/cis2.png";
import minecom from "../Assets/minecom.PNG";
import minecom1 from "../Assets/minecom1.PNG";
import minecom2 from "../Assets/minecom2.PNG";
import { AiFillGithub, AiOutlineLink, AiOutlineLock } from "react-icons/ai";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const featuredWorks = [
  {
    title: "Tidal Solutions HRIS",
    year: "2026",
    blurb:
      "A complete HR information system built for Tidal Solutions Corp. — employee records, onboarding, and day-to-day HR operations in one place. Designed, built, and shipped end to end with an AI-assisted development workflow, from data model to production deploy on Vercel.",
    tags: ["TypeScript", "React", "Vercel", "AI-assisted"],
    demo: "https://hris-lovable.vercel.app",
    repo: "https://github.com/13urning/hris-lovable",
  },
  {
    title: "Log Bot — Discord Logger + Claude Persona",
    year: "2026",
    blurb:
      "A Discord bot for logging cafés, restaurants, anime, shows, and movies with 1–5★ reviews and live autocomplete backed by Google Places, TMDB, and MyAnimeList. @mention it and it chats back in a custom persona — Claude running headless with per-channel short-term memory, a strict tool allowlist, and layered output guardrails.",
    tags: ["Node.js", "discord.js", "Claude", "LLM Guardrails"],
    repo: "https://github.com/regoresconde-arch/cafe-bot",
  },
  {
    title: "Discord RFP Bot",
    year: "2026",
    blurb:
      "An agentic request-for-proposal workflow bot: it takes RFP requests in Discord, works Google Workspace through its APIs, and sends the results out by email — wired together with Model Context Protocol (MCP) integrations.",
    tags: ["Node.js", "MCP", "Google APIs", "Automation"],
    private: true,
  },
];

function Tag({ children }) {
  return (
    <span className="text-xs font-medium px-3 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-200/60 dark:bg-teal-500/10 dark:text-teal-300 dark:border-teal-500/20">
      {children}
    </span>
  );
}

export default function Portfolio() {
  return (
    <div id="works" className="py-16 scroll-mt-20">
      <p className="text-sm uppercase tracking-[0.3em] text-teal-600 dark:text-teal-400 font-medium">
        Portfolio
      </p>
      <h3 className="text-3xl md:text-4xl font-bold py-2 text-gray-900 dark:text-gray-50">
        Selected Works
      </h3>
      <p className="text-md py-2 leading-8 text-gray-700 dark:text-gray-300 max-w-3xl">
        What I've been building lately — AI-powered products and agentic
        automations shipped to real users in 2026, plus earlier full-stack work.
      </p>

      <div className="grid gap-6 md:grid-cols-3 my-8">
        {featuredWorks.map((work) => (
          <div
            key={work.title}
            className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all dark:border-gray-700/60 dark:bg-gray-800/60"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-gray-400 dark:text-gray-500">
                {work.year}
              </span>
              {work.private && (
                <span className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500">
                  <AiOutlineLock /> Private client work
                </span>
              )}
            </div>
            <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
              {work.title}
            </h4>
            <p className="text-sm leading-7 text-gray-600 dark:text-gray-300 flex-1">
              {work.blurb}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {work.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            {(work.demo || work.repo) && (
              <div className="flex gap-4 mt-5 pt-4 border-t border-gray-100 dark:border-gray-700/60 text-sm font-medium">
                {work.demo && (
                  <a
                    href={work.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-teal-600 dark:text-teal-400 hover:underline"
                  >
                    <AiOutlineLink /> Live demo
                  </a>
                )}
                {work.repo && (
                  <a
                    href={work.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400"
                  >
                    <AiFillGithub /> Code
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <h4 className="text-xl font-semibold pt-6 pb-2 text-gray-900 dark:text-gray-100">
        Earlier works
      </h4>
      <div className="grid gap-6 md:grid-cols-2 my-4">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700/60 dark:bg-gray-800/60">
          <div className="rounded-xl overflow-hidden shadow mb-4">
            <Carousel
              showStatus={false}
              showThumbs={false}
              swipeable
              emulateTouch={true}
              showArrows={false}
              stopOnHover={true}
              infiniteLoop
              autoPlay
            >
              <div>
                <img src={clone} alt="Customer Intelligence System screenshot" />
              </div>
              <div>
                <img src={cis2} alt="Customer Intelligence System search view" />
              </div>
            </Carousel>
          </div>
          <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
            Customer Intelligence System
          </h4>
          <p className="text-sm leading-7 text-gray-600 dark:text-gray-300">
            A search directory used by clients to look up a customer's company,
            identify the agent handling it, and flag blacklisted or fraudulent
            companies. React frontend with a Python backend and SSO login.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <Tag>ReactJS</Tag>
            <Tag>Python</Tag>
            <Tag>CSS</Tag>
          </div>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700/60 dark:bg-gray-800/60">
          <div className="rounded-xl overflow-hidden shadow mb-4">
            <Carousel
              showStatus={false}
              showThumbs={false}
              swipeable
              emulateTouch={true}
              showArrows={false}
              stopOnHover={true}
              infiniteLoop
              autoPlay
            >
              <div>
                <img src={minecom} alt="Minimalist E-Commerce home page" />
              </div>
              <div>
                <img src={minecom1} alt="Minimalist E-Commerce product listing" />
              </div>
              <div>
                <img src={minecom2} alt="Minimalist E-Commerce product page" />
              </div>
            </Carousel>
          </div>
          <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
            Minimalist E-Commerce
          </h4>
          <p className="text-sm leading-7 text-gray-600 dark:text-gray-300">
            Responsive e-commerce templates focused on simplicity and clean
            design, making it easy for customers to find and purchase products.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <Tag>ReactJS</Tag>
            <Tag>Tailwind</Tag>
          </div>
          <div className="mt-4 text-sm font-medium">
            <a
              href="https://minimalist-e-commerce-gamma.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-teal-600 dark:text-teal-400 hover:underline w-fit"
            >
              <AiOutlineLink /> Live demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
