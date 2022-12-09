import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Socials from "./components/SocialIcons/Socials";
import ProfilePic from "./components/Profile/ProfilePic";
import Services from "./components/Services/Services";
import DescriptionCards from "./components/Services/DescriptionCards";
import Portfolio from "./components/Portfolio/Portfolio";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-700">
        <div className=" min-h-screen">
          <Header setDarkMode={setDarkMode} darkMode={darkMode} />
          <Profile />
          <Socials />
          <ProfilePic />
        </div>
        <div>
          <Services />
          <DescriptionCards />
        </div>
        <div>
          <Portfolio />
        </div>
      </div>
    </div>
  );
}

export default App;
