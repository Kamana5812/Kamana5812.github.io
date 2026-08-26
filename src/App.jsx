import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

import { Hero } from './components/sections/Hero';
import { WhatIDo } from './components/sections/WhatIDo';
import { About } from './components/sections/About';
import { FeaturedProjects } from './components/sections/FeaturedProjects';
import { AiExploration } from './components/sections/AiExploration';
import { Skills } from './components/sections/Skills';
import { GitHubStats } from './components/sections/GitHubStats';
import { Experience } from './components/sections/Experience';
import { Publications } from './components/sections/Publications';
import { Hackathons } from './components/sections/Hackathons';
import { CertificationList } from './components/sections/CertificationList';
import { Endorsements } from './components/sections/Endorsements';
import { PhilosophyStatement } from './components/sections/PhilosophyStatement';
import { Contact } from './components/sections/Contact';

import { ProjectCaseStudy } from './pages/ProjectCaseStudy';
import { AdminDashboard } from './pages/AdminDashboard';
import { ResumePage } from './components/sections/ResumePage';
import { useActiveSection } from './hooks/useActiveSection';
import { useSoundFX } from './hooks/useSoundFX';
import { ThreeBackground } from './components/3d/ThreeBackground';
import { CommandPalette } from './components/shared/CommandPalette';

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  
  const soundFX = useSoundFX();
  const activeSection = useActiveSection([
    'home',
    'what-i-do',
    'about',
    'projects',
    'skills',
    'github-stats',
    'journey',
    'publications',
    'hackathons',
    'certifications',
    'endorsements',
    'contact'
  ]);

  // Global Ctrl + K / Cmd + K listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const [isResumeOpen, setIsResumeOpen] = useState(
    window.location.hash === '#resume' || window.location.pathname === '/resume'
  );

  // Listen for hash changes so clicking any #resume link works without a reload
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === '#resume' || window.location.pathname === '/resume') {
        setIsResumeOpen(true);
      } else {
        setIsResumeOpen(false);
      }
    };

    // Check on mount
    if (window.location.search.includes('admin=true') || window.location.hash === '#admin') {
      setIsAdminOpen(true);
    }
    checkHash();

    // Listen for future hash changes (e.g. clicking a #resume link)
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);


  const handleSelectCaseStudy = (project) => {
    setSelectedCaseStudy(project);
    if (soundFX?.playOpen) soundFX.playOpen();
  };

  const handleCloseCaseStudy = () => {
    setSelectedCaseStudy(null);
    if (soundFX?.playClick) soundFX.playClick();
  };

  return (
    <div className="app-container">
      {/* Global 3D Interactive WebGL Particle & Geometry Field */}
      <ThreeBackground />

      {/* Command Palette (Ctrl + K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onSelectCaseStudy={handleSelectCaseStudy}
        soundFX={soundFX}
      />

      {isAdminOpen && (
        <AdminDashboard onClose={() => setIsAdminOpen(false)} />
      )}

      {/* Accessibility Skip Link */}
      <a href="#main-content" className="skip-link font-mono">
        Skip to main content
      </a>

      {/* Global Navbar */}
      <Navbar
        activeSection={selectedCaseStudy ? 'projects' : activeSection}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        soundEnabled={soundFX.soundEnabled}
        onToggleSound={soundFX.toggleSound}
      />

      <div className="page-wrapper">
        {/* Main Content Area */}
        <main id="main-content" className="main-content">
          {isResumeOpen ? (
            <ResumePage />
          ) : selectedCaseStudy ? (
            <ProjectCaseStudy
              project={selectedCaseStudy}
              onCloseCaseStudy={handleCloseCaseStudy}
              onSelectCaseStudy={handleSelectCaseStudy}
            />
          ) : (
            <>
              {/* Hero */}
              <Hero />

              {/* WHAT I DO — 5 PILLARS */}
              <WhatIDo />
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

              {/* JOURNEY & EXPERIENCE (Includes Internships, Hackathons & Journey Tabs) */}
              <Experience />
              <hr className="section-divider" />

              {/* RESEARCH & VERIFIED CREDENTIALS (2-Column Research + Certifications) */}
              <Publications />
              <hr className="section-divider" />

              {/* MENTORSHIP & ENDORSEMENTS */}
              <Endorsements />

              {/* Philosophy Statement Break */}
              <PhilosophyStatement />

              {/* LET'S CONNECT */}
              <Contact />
            </>
          )}
        </main>
      </div>

      {/* Footer */}
      <Footer onOpenAdmin={() => setIsAdminOpen(true)} />
    </div>
  );
}
