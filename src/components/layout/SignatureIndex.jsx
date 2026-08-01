import React from 'react';
import './SignatureIndex.css';

export function SignatureIndex({ activeSection = 'home' }) {
  const sections = [
    { id: 'home', num: '01', label: 'Home' },
    { id: 'about', num: '02', label: 'About' },
    { id: 'projects', num: '03', label: 'Projects' },
    { id: 'skills', num: '04', label: 'Skills' },
    { id: 'journey', num: '05', label: 'Experience' },
    { id: 'certifications', num: '06', label: 'Certifications' },
    { id: 'contact', num: '07', label: 'Contact' }
  ];

  return (
    <aside className="signature-index-column" aria-label="Table of contents side index">
      <div className="signature-index-sticky">
        <div className="index-line" aria-hidden="true"></div>
        <ul className="index-list font-mono">
          {sections.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <li key={sec.id} className={`index-item ${isActive ? 'is-active' : ''}`}>
                <a
                  href={`#${sec.id}`}
                  className="index-link"
                  aria-label={`Jump to section ${sec.num} ${sec.label}`}
                  title={sec.label}
                >
                  <span className="index-num">{sec.num}</span>
                  <span className="index-tooltip">{sec.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
