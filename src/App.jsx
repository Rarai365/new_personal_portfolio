import "./App.css";

import SummarySection from "./components/BlogsSection";

import GoToTop from "./components/GoToTop";
import DarkMode from "./components/DarkMode";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router";
import HeroSectionPage from "./pages/HeroSectionPage";
import MyRecentWork from "./pages/MyRecentWork";
import AboutMePage from "./pages/AboutMePage";

import SkillsSection from "./components/SkillsSection";
import BlogsPage from "./pages/BlogsPage";

function App() {
  return (
    <>
      <DarkMode />

      <div className="wrapper">
        <Navbar />

        <Routes>
          <Route path="/" element={<HeroSectionPage />} />
          <Route path="/aboutme" element={<AboutMePage />} />

          <Route path="/recentworks" element={<MyRecentWork />} />
        </Routes>

        <SkillsSection />
        {/* <SummarySection /> */}

        <BlogsPage />

        <Footer />
        <GoToTop />
      </div>
    </>
  );
}

export default App;
