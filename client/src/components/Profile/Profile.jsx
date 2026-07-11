import React from "react";

export default function Profile() {
  return (
    <div className="text-center pt-16 pb-6">
      <p className="text-sm uppercase tracking-[0.3em] text-teal-600 dark:text-teal-400 font-medium">
        Full Stack Developer · AI Engineer
      </p>
      <h2 className="text-4xl py-4 font-bold leading-tight text-gray-900 dark:text-gray-50 md:text-6xl">
        Regor Carlo{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500">
          Esconde
        </span>
      </h2>
      <p className="text-md py-4 leading-8 text-gray-700 md:text-lg max-w-2xl mx-auto dark:text-gray-300">
        I build web apps, automations, and AI-powered tools. Five years across
        full-stack development and Salesforce platform delivery — and today I
        do AI engineering at Tidal Solutions Corp., shipping LLM-powered
        products end to end: agent pipelines, MCP integrations, and the
        guardrails that keep them predictable in production.
      </p>
      <div className="flex justify-center gap-4 pt-4">
        <a
          href="#works"
          className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-3 rounded-md font-medium shadow-lg shadow-teal-500/20 hover:opacity-90 transition-opacity"
        >
          Selected Works
        </a>
        <a
          href="#experience"
          className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 px-6 py-3 rounded-md font-medium hover:border-teal-500 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
        >
          Work History
        </a>
      </div>
    </div>
  );
}
