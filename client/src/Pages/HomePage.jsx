import React from "react";
import Masthead from "../components/Masthead";
import Run from "../components/Run";
import Experience from "../components/Experience";
import Services from "../components/Services";
import Colophon from "../components/Colophon";

export default function HomePage() {
  return (
    <div className="page">
      <Masthead />
      <main>
        <Run />
        <Experience />
        <Services />
      </main>
      <Colophon />
    </div>
  );
}
