import React from 'react';
import { Sparkles } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { useInView } from '../../hooks/useInView';
import './PhilosophyStatement.css';

export function PhilosophyStatement() {
  const [ref, isInView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      ref={ref}
      className={`philosophy-section ${isInView ? 'is-visible' : ''}`}
      aria-label="Brand Philosophy & Mission"
    >
      <div className="philosophy-content">
        <div className="philosophy-motto-pill font-mono">
          <Sparkles size={14} className="text-accent" />
          <span>{personalInfo.brandMotto}</span>
        </div>

        <h2 className="philosophy-main-statement font-heading">
          Turning ideas into <span className="highlight-lime">intelligent solutions.</span>
        </h2>

        <p className="philosophy-sub-statement font-body">
          {personalInfo.missionTagline}
        </p>
      </div>
    </section>
  );
}
