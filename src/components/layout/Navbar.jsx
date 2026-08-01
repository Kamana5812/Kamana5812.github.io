import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowDown } from 'lucide-react';
import { MobileNavigation } from './MobileNavigation';
import { personalInfo } from '../../data/personal';
import './Navbar.css';

export function Navbar({ activeSection = 'home' }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'journey', label: 'Experience' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo Mark: Kamana. */}
          <a href="#home" className="navbar-brand font-heading" aria-label="Kamana Agrawal Home">
            <span className="brand-text">Kamana</span>
            <span className="brand-dot">.</span>
          </a>

          {/* Desktop Navigation Center */}
          <nav className="navbar-nav" aria-label="Main Navigation">
            <ul className="nav-list">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id} className="nav-item">
                    <a
                      href={`#${item.id}`}
                      className={`nav-link font-body ${isActive ? 'active' : ''}`}
                      aria-current={isActive ? 'true' : undefined}
                    >
                      {isActive && <span className="nav-active-dot" aria-hidden="true" />}
                      <span>{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Action: Resume Pill */}
          <div className="navbar-actions">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-pill-btn font-mono"
            >
              <span>Resume</span>
              <ArrowDown size={14} className="resume-icon" aria-hidden="true" />
            </a>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              type="button"
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
        activeSection={activeSection}
        resumeUrl={personalInfo.resumeUrl}
      />
    </>
  );
}
