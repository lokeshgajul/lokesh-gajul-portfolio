import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useTheme } from "./hooks/useTheme";
import { PROJECTS_DATA } from "./data/profileData";

export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-bg text-text flex flex-col font-sans transition-colors duration-200">
      {/* Sticky Minimal Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero />

        <div className="section-separator" />

        {/* 2. About */}
        <About />

        <div className="section-separator" />

        {/* 3. Projects */}
        <Projects projects={PROJECTS_DATA} />

        <div className="section-separator" />

        {/* 4. Skills (clean category sections, no cards) */}
        <Skills />

        <div className="section-separator" />

        {/* 5. Experience & Education */}
        <Experience />

        <div className="section-separator" />

        {/* 6. Contact */}
        <Contact />
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
};

export default App;
