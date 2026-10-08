import React, { useEffect, useRef, useState } from "react";
import { LuMail, LuMoon, LuSun } from "react-icons/lu";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { Plate } from "./ui/Ui";
import { person } from "../content";

const PRESS = { duration: 0.1, ease: [0.23, 1, 0.32, 1] };

/* The paper's nameplate: today's date, the name, and the edition (the
   light/dark toggle, as the day or night edition), above a ruled section
   bar that stays pinned while you read. */
export default function Masthead() {
  const { pathname } = useLocation();
  const home = pathname === "/";
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute("data-theme") || "light"
  );
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  const night = theme === "dark";

  // On the narrowest phones the section links can still run past the bar;
  // their end then fades out, so it reads as a strip that scrolls on.
  const linksRef = useRef(null);
  const [clipped, setClipped] = useState(false);
  useEffect(() => {
    const el = linksRef.current;
    const check = () => setClipped(el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
    check();
    el.addEventListener("scroll", check, { passive: true });
    const ro = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(check);
    if (ro) ro.observe(el);
    return () => {
      el.removeEventListener("scroll", check);
      if (ro) ro.disconnect();
    };
  }, []);

  const section = (hash) => (home ? hash : `/${hash}`);
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <header className="nameplate">
        <div className="nameplate-inner wrap">
          <p className="edition-line edition-date">{today}</p>
          <a className="nameplate-name" href={home ? "#top" : "/"}>
            {person.name}
          </a>
          <div className="edition-line edition-right">
            <span className="edition-place">{person.location}</span>
            <m.button
              type="button"
              className="edition-toggle"
              aria-label={night ? "Night edition, switch to the day edition" : "Day edition, switch to the night edition"}
              onClick={() => setTheme(night ? "light" : "dark")}
              whileTap={{ scale: 0.94, transition: PRESS }}
            >
              {/* The icon cross-fades through a soft blur, so the swap reads
                  as one symbol changing rather than two overlapping. */}
              <span className="swap" aria-hidden="true">
                <AnimatePresence initial={false}>
                  <m.span
                    key={theme}
                    initial={{ opacity: 0, scale: 0.8, filter: "blur(2px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.8, filter: "blur(2px)" }}
                    transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                  >
                    {night ? <LuMoon /> : <LuSun />}
                  </m.span>
                </AnimatePresence>
              </span>
              <span className="edition-label">{night ? "Night edition" : "Day edition"}</span>
            </m.button>
          </div>
        </div>
      </header>
      <nav className="sectionbar" aria-label="Main">
        <div className="sectionbar-inner wrap">
          <div className={clipped ? "sectionbar-links is-clipped" : "sectionbar-links"} ref={linksRef}>
            <a href={section("#work")}>Work</a>
            <a href={section("#experience")}>Experience</a>
            <a href={section("#services")}>Services</a>
            <a href="/art" aria-current={pathname === "/art" ? "page" : undefined}>
              Art
            </a>
            <a href={person.cv} download="Regor-Esconde-CV.pdf">
              CV
            </a>
          </div>
          <Plate href={`mailto:${person.email}`} tone="email" size="sm">
            <LuMail aria-hidden="true" /> <span className="plate-label">Email</span>
          </Plate>
        </div>
      </nav>
    </>
  );
}
