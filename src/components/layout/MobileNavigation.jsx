import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import './MobileNavigation.css';

export function MobileNavigation({ isOpen, onClose, navItems = [], activeSection = 'home', resumeUrl }) {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    const handleClickOutside = (e) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        if (!e.target.closest('.mobile-menu-toggle')) {
          onClose();
        }
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      id="mobile-navigation"
      className="mobile-nav-dropdown"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
    >
      <div className="mobile-nav-card">
        <nav className="mobile-nav-list-container">
          <ul className="mobile-nav-list">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              
              return (
                <li key={item.id} className="mobile-nav-item">
                  <a
                    href={`#${item.id}`}
                    className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                    onClick={onClose}
                  >
                    <span className="mobile-nav-label font-body">{item.label}</span>
                    {isActive && <span className="mobile-active-dot" aria-hidden="true" />}
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
            <span>Resume (PDF)</span>
            <ArrowDown size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
