import React, { useState } from "react";
import Header from "../components/Header/Header";
import Profile from "../components/Profile/Profile";
import Socials from "../components/SocialIcons/Socials";
import ProfilePic from "../components/Profile/ProfilePic";
import Services from "../components/Services/Services";
import Portfolio from "../components/Portfolio/Portfolio";
import WorkHistory from "../components/Experience/WorkHistory";
import Footer from "../components/Footer/Footer";

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 transition-colors">
        <div className="min-h-screen">
          <Header setDarkMode={setDarkMode} darkMode={darkMode} />
          <Profile />
          <Socials />
          <ProfilePic />
        </div>
        <Portfolio />
        <WorkHistory />
        <Services />
        <Footer />
      </div>
    </div>
  );
}
