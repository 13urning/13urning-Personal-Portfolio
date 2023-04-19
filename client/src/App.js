import "./App.css";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ArtPortfolio from "./Pages/ArtPortfolio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route exact path="/art" element={<ArtPortfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
