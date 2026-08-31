import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import './Footer.css';

export function Footer({ onOpenAdmin }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-container font-mono">
        <div className="footer-left">
          <span>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</span>
        </div>

        <div className="footer-center">
          <span>Designed &amp; Built by {personalInfo.brandLogo}</span>
        </div>

        <div className="footer-right">
          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp size={14} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
