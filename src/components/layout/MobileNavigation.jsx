import React, { useEffect } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { SocialLinks } from '../shared/SocialLinks';
import { personalInfo } from '../../data/personal';
import './MobileNavigation.css';

export function MobileNavigation({ isOpen, onClose, navItems = [], activeSection = 'home', resumeUrl }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="mobile-navigation"
      className="mobile-nav-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
    >
      <div className="mobile-nav-content">
        <div className="mobile-nav-header font-mono">
          <span className="mobile-nav-eyebrow">NAVIGATION</span>
        </div>

        <nav className="mobile-nav-list-container">
          <ul className="mobile-nav-list">
            {navItems.map((item, index) => {
              const numStr = String(index + 1).padStart(2, '0');
              const isActive = activeSection === item.id;
              
              return (
                <li key={item.id} className="mobile-nav-item">
                  <a
                    href={`#${item.id}`}
                    className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                    onClick={onClose}
                  >
                    <span className="mobile-nav-num font-mono">{numStr}</span>
                    <span className="mobile-nav-label font-heading">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mobile-nav-footer">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-resume-btn font-mono"
          >
            <span>Download Resume (PDF)</span>
            <ArrowDown size={16} />
          </a>

          <div className="mobile-socials-wrapper">
            <SocialLinks links={personalInfo.socials} showLabels={false} />
          </div>
        </div>
      </div>
    </div>
  );
}
