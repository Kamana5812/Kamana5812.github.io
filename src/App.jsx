import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { FeaturedProjects } from './components/sections/FeaturedProjects';
import { AiExploration } from './components/sections/AiExploration';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { CertificationList } from './components/sections/CertificationList';
import { PhilosophyStatement } from './components/sections/PhilosophyStatement';
import { Contact } from './components/sections/Contact';

import { ProjectCaseStudy } from './pages/ProjectCaseStudy';
import { useActiveSection } from './hooks/useActiveSection';

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const activeSection = useActiveSection(['home', 'about', 'projects', 'skills', 'journey', 'certifications', 'contact']);

  const handleSelectCaseStudy = (project) => {
    setSelectedCaseStudy(project);
  };

  const handleCloseCaseStudy = () => {
    setSelectedCaseStudy(null);
  };

  return (
    <div className="app-container">
      {/* Accessibility Skip Link */}
      <a href="#main-content" className="skip-link font-mono">
        Skip to main content
      </a>

      {/* Global Navbar */}
      <Navbar activeSection={selectedCaseStudy ? 'projects' : activeSection} />

      <div className="page-wrapper">
        {/* Main Content Area */}
        <main id="main-content" className="main-content">
          {selectedCaseStudy ? (
            <ProjectCaseStudy
              project={selectedCaseStudy}
              onCloseCaseStudy={handleCloseCaseStudy}
              onSelectCaseStudy={handleSelectCaseStudy}
            />
          ) : (
            <>
              {/* Hero */}
              <Hero />
              <hr className="section-divider" />

              {/* ABOUT ME */}
              <About />
              <hr className="section-divider" />

              {/* PROJECTS */}
              <FeaturedProjects onSelectCaseStudy={handleSelectCaseStudy} />
              <hr className="section-divider" />

              {/* AI EXPLORATION */}
              <AiExploration />
              <hr className="section-divider" />

              {/* SKILLS */}
              <Skills />
              <hr className="section-divider" />

              {/* JOURNEY & EXPERIENCE */}
              <Experience />

              {/* CERTIFICATIONS */}
              <CertificationList />

              {/* Philosophy Statement Break */}
              <PhilosophyStatement />

              {/* LET'S CONNECT */}
              <Contact />
            </>
          )}
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
