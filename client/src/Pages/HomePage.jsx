import React from "react";
import Header from "../components/Header/Header";
import Profile from "../components/Profile/Profile";
import Services from "../components/Services/Services";
import Portfolio from "../components/Portfolio/Portfolio";
import WorkHistory from "../components/Experience/WorkHistory";
import Footer from "../components/Footer/Footer";
import useReveal from "../hooks/useReveal";

export default function HomePage() {
  useReveal();
  return (
    <div
      style={{
        background: "var(--bg-page)",
        color: "var(--text-body)",
        fontFamily: "var(--font-body)",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Header />
      <Profile />
      <Portfolio />
      <WorkHistory />
      <Services />
      <Footer />
    </div>
  );
}
