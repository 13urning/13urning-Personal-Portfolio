import React from "react";
import { person } from "../content";

/* The back page: every way to reach Regor, printed in reverse on ink. */
export default function Colophon() {
  return (
    <footer className="colophon">
      <div className="colophon-inner wrap">
        <p className="colophon-name">{person.name}</p>
        <nav className="colophon-links" aria-label="Elsewhere">
          <a href={`mailto:${person.email}`}>{person.email}</a>
          <a href={person.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={person.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={person.links.twitter} target="_blank" rel="noreferrer">
            Twitter
          </a>
          <a href="/art">Art</a>
          <a href={person.cv} download="Regor-Esconde-CV.pdf">
            CV
          </a>
        </nav>
        <p className="colophon-small">© {new Date().getFullYear()} · drawn and wired by hand</p>
      </div>
    </footer>
  );
}
