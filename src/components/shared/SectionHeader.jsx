import React from 'react';
import './SectionHeader.css';

export function SectionHeader({ number, eyebrow, title, subtitle, className = '' }) {
  return (
    <header className={`section-header ${className}`}>
      <div className="section-header-top">
        {number && <span className="section-number-display font-display">{number}</span>}
        <div className="section-header-meta">
          {eyebrow && <span className="eyebrow-label">{eyebrow}</span>}
          {title && <h2 className="section-title font-display">{title}</h2>}
        </div>
      </div>
      {subtitle && <p className="section-subtitle font-body">{subtitle}</p>}
      <div className="section-header-rule" aria-hidden="true"></div>
    </header>
  );
}
