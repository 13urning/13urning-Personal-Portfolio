import React, { useEffect, useState } from "react";
import { LuGithub, LuMoon, LuSun } from "react-icons/lu";
import { useLocation } from "react-router-dom";
import { Button, IconButton } from "../ui/Ui";
import resume from "../Assets/RegorEscondeCV.pdf";

export default function Header() {
  const location = useLocation();
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute("data-theme") || "light"
  );
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "13px 34px",
        background: "color-mix(in srgb, var(--bg-page) 82%, transparent)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: "var(--stroke) solid var(--border-soft)",
      }}
    >
      <a
        href="/#top"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 11,
          textDecoration: "none",
        }}
      >
        <span
          style={{
            width: 40,
            height: 40,
            borderRadius: "var(--radius-blob)",
            background: "var(--accent)",
            color: "var(--text-on-accent)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-hand)",
            fontSize: 27,
            fontWeight: 700,
            border: "var(--stroke-bold) solid var(--border-ink)",
            boxShadow: "var(--shadow-sticker-sm)",
          }}
        >
          R
        </span>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: 19,
            letterSpacing: "-0.02em",
            color: "var(--text-strong)",
          }}
        >
          Regor<span style={{ color: "var(--accent)" }}>.</span>
        </span>
      </a>
      <nav style={{ display: "flex", alignItems: "center", gap: 4 }}>
        <span className="rg-nav-links" style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <a className="rg-nav-link" href="/#work">
            Work
          </a>
          <a className="rg-nav-link" href="/#about">
            About
          </a>
          <a className="rg-nav-link" href="/#services">
            Services
          </a>
          {location.pathname === "/" ? (
            <a className="rg-nav-link" href="/art">
              Art
            </a>
          ) : (
            <a className="rg-nav-link" href="/">
              Profile
            </a>
          )}
          <a className="rg-nav-link" href={resume} target="_blank" rel="noreferrer">
            Resume
          </a>
          <span style={{ width: 1, height: 22, background: "var(--border-soft)", margin: "0 8px" }} />
        </span>
        <IconButton
          variant="ghost"
          size="sm"
          label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          style={{ width: 38, height: 38 }}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <LuSun /> : <LuMoon />}
        </IconButton>
        <IconButton
          as="a"
          variant="ghost"
          size="sm"
          label="GitHub"
          href="https://github.com/13urning"
          target="_blank"
          rel="noreferrer"
          style={{ width: 38, height: 38, marginLeft: 4 }}
        >
          <LuGithub />
        </IconButton>
        <Button as="a" variant="sticker" size="sm" href="/#contact" style={{ marginLeft: 8, height: 40 }}>
          Contact
        </Button>
      </nav>
    </header>
  );
}
