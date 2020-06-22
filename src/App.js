import React from "react";
import "./App.css";

import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectSection from "./components/ProjectsSection"
import ContactSection from "./components/ContactSection"
import NavSection from "./components/NavSection"

function App() {
  return (
    <div className="App">
      <NavSection />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}
export default App;
