import React from "react";
import Socials from "../SocialIcons/Socials";

export default function Footer() {
  return (
    <footer id="contact" className="py-16 text-center scroll-mt-20">
      <p className="text-sm uppercase tracking-[0.3em] text-teal-600 dark:text-teal-400 font-medium">
        Contact
      </p>
      <h3 className="text-3xl md:text-4xl font-bold py-2 text-gray-900 dark:text-gray-50">
        Let's build something
      </h3>
      <p className="text-md py-2 leading-8 text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
        Open to full-stack and AI engineering work, collaborations, and
        interesting problems.
      </p>
      <a
        href="mailto:esconderegor@gmail.com"
        className="inline-block bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-3 rounded-md font-medium shadow-lg shadow-teal-500/20 hover:opacity-90 transition-opacity my-4"
      >
        esconderegor@gmail.com
      </a>
      <Socials />
      <p className="text-xs text-gray-400 dark:text-gray-500 pt-8">
        © {new Date().getFullYear()} Regor Carlo Esconde · developedbyregor
      </p>
    </footer>
  );
}
