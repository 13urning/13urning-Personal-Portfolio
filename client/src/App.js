import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LazyMotion, MotionConfig } from "motion/react";
import HomePage from "./Pages/HomePage";

// The Art page (and the Motion layout features its lightbox needs) loads
// only when someone visits /art, keeping the homepage bundle lean.
const ArtPortfolio = lazy(() => import("./Pages/ArtPortfolio"));

// Motion's animation features load after first paint, in their own chunk.
const loadMotionFeatures = () => import("./lib/motionFeatures").then((mod) => mod.default);

function App() {
  return (
    // strict: only the lightweight `m` components are allowed, never `motion`.
    // reducedMotion="user": transform and layout animations become instant
    // for visitors who ask for reduced motion; opacity and colour still fade.
    <LazyMotion features={loadMotionFeatures} strict>
      <MotionConfig reducedMotion="user">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              exact
              path="/art"
              element={
                <Suspense fallback={null}>
                  <ArtPortfolio />
                </Suspense>
              }
            />
          </Routes>
        </BrowserRouter>
      </MotionConfig>
    </LazyMotion>
  );
}

export default App;
