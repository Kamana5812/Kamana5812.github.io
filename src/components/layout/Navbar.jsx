import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Volume2, VolumeX, Sun, Moon } from 'lucide-react';
import { MobileNavigation } from './MobileNavigation';
import { personalInfo } from '../../data/personal';
import './Navbar.css';

export function Navbar({ activeSection = 'home', onOpenCommandPalette, soundEnabled = true, onToggleSound, theme, onToggleTheme }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Primary desktop nav items
  const desktopNavItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'journey', label: 'Experience' },
    { id: 'publications', label: 'Research' },
    { id: 'contact', label: 'Contact' }
  ];

  // Full nav items for Mobile drawer
  const allNavItems = [
    { id: 'home', label: 'Home' },
    { id: 'what-i-do', label: 'Overview' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'journey', label: 'Experience' },
    { id: 'publications', label: 'Research' },
    { id: 'hackathons', label: 'Honors' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'endorsements', label: 'Endorsements' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const elem = document.getElementById(id);
    if (elem) {
      const headerOffset = 80;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <>
      <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo Mark: KA Monogram + Kamana Agrawal */}
          <a
            href="#home"
            className="navbar-brand font-heading"
            aria-label="Kamana Agrawal Home"
            onClick={(e) => handleNavClick(e, 'home')}
          >
            <span className="brand-monogram font-mono">KA</span>
            <span className="brand-text">Kamana Agrawal</span>
          </a>

          {/* Desktop Navigation Center */}
          <nav className="navbar-nav" aria-label="Main Navigation">
            <ul className="nav-list">
              {desktopNavItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id} className="nav-item">
                    <a
                      href={`#${item.id}`}
                      className={`nav-link font-body ${isActive ? 'active' : ''}`}
                      aria-current={isActive ? 'true' : undefined}
                      onClick={(e) => handleNavClick(e, item.id)}
                    >
                      {isActive && <span className="nav-active-dot" aria-hidden="true" />}
                      <span>{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Action: Search Pill + Sound Toggle + Let's Connect */}
          <div className="navbar-actions">
            {/* Quick Search / Command Palette Pill */}
            <button
              type="button"
              className="navbar-search-btn font-mono"
              onClick={onOpenCommandPalette}
              title="Open Command Palette (Ctrl + K)"
            >
              <Search size={14} className="search-icon" />
              <span className="search-text">Search</span>
              <kbd className="cmd-kbd">⌘K</kbd>
            </button>

            {/* Theme Toggle */}
            {onToggleTheme && (
              <button
                type="button"
                className="navbar-theme-btn"
                onClick={onToggleTheme}
                title={theme === 'light' ? "Switch to Dark Mode" : "Switch to Light Mode"}
                aria-label={theme === 'light' ? "Switch to Dark Mode" : "Switch to Light Mode"}
              >
                {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
              </button>
            )}

            {/* Sound FX Toggle */}
            {onToggleSound && (
              <button
                type="button"
                className={`navbar-sound-btn ${soundEnabled ? 'sound-active' : ''}`}
                onClick={onToggleSound}
                title={soundEnabled ? "Mute cyber sounds" : "Enable cyber sounds"}
                aria-label={soundEnabled ? "Mute audio" : "Enable audio"}
              >
                {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
              </button>
            )}

            <a
              href="#contact"
              className="navbar-connect-btn font-body"
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              <span>Let's Connect</span>
              <span className="btn-arrow-icon" aria-hidden="true">↗</span>
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
        navItems={allNavItems}
        activeSection={activeSection}
        resumeUrl={personalInfo.resumeUrl}
        onNavClick={handleNavClick}
      />
    </>
  );
}
