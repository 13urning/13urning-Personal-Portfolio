import React from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import resume from "../Assets/CVdocx.pdf";
import { useLocation } from "react-router-dom";

export default function Header({ setDarkMode, darkMode }) {
  const location = useLocation();
  return (
    <nav className="sticky top-0 z-50 py-4 mb-5 flex items-center justify-between bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-100 dark:border-gray-800">
      <h1 className="text-xl font-burtons text-gray-800 dark:text-gray-100">
        developedbyregor
      </h1>
      <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
        <li>
          <a href="/#works" className="hover:text-teal-500 transition-colors">
            Works
          </a>
        </li>
        <li>
          <a
            href="/#experience"
            className="hover:text-teal-500 transition-colors"
          >
            Experience
          </a>
        </li>
        <li>
          <a href="/#skills" className="hover:text-teal-500 transition-colors">
            Skills
          </a>
        </li>
        <li>
          <a href="/#contact" className="hover:text-teal-500 transition-colors">
            Contact
          </a>
        </li>
      </ul>
      <ul className="flex items-center">
        {setDarkMode && (
          <li className="cursor-pointer text-2xl text-gray-700 dark:text-gray-300">
            {darkMode ? (
              <BsFillSunFill onClick={() => setDarkMode(false)} />
            ) : (
              <BsFillMoonStarsFill onClick={() => setDarkMode(true)} />
            )}
          </li>
        )}
        <li>
          <a
            href={resume}
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-5 md:ml-8"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </li>
        <li>
          {location.pathname === "/" ? (
            <a
              href="/art"
              className="border border-teal-500 text-teal-600 dark:text-teal-400 px-4 py-2 rounded-md ml-2 md:ml-3 hover:bg-teal-500 hover:text-white transition-colors"
            >
              Art
            </a>
          ) : (
            <a
              href="/"
              className="border border-teal-500 text-teal-600 dark:text-teal-400 px-4 py-2 rounded-md ml-2 md:ml-3 hover:bg-teal-500 hover:text-white transition-colors"
            >
              Profile
            </a>
          )}
        </li>
      </ul>
    </nav>
  );
}
