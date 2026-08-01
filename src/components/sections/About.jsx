import React from 'react';
import { Rocket, Code2, Brain, ArrowRight } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { useInView } from '../../hooks/useInView';
import './About.css';

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section
      id="about"
      ref={ref}
      className={`about-section ${isInView ? 'is-visible' : ''}`}
      aria-label="About Me Section"
    >
      {/* Section Marker */}
      <div className="section-marker-header font-mono">
        <span className="marker-label">// ABOUT ME</span>
      </div>

      <div className="about-grid grid-12">
        {/* Left Column — Text Narrative */}
        <div className="about-text-col">
          <h2 className="about-heading font-heading">
            Developer by practice.<br />
            <span className="highlight-lime">AI Engineer in the making.</span>
          </h2>

          <div className="about-body-narrative font-body">
            <p>{personalInfo.aboutBody1}</p>
            <p>{personalInfo.aboutBody2}</p>
            <p>{personalInfo.aboutBody3}</p>
            <p>{personalInfo.aboutBody4}</p>
          </div>

          <a href="#projects" className="btn-about-link font-body">
            <span>Know More About Me</span>
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Right Column — 3 Capability / Stat Cards */}
        <div className="about-cards-col">
          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <Rocket size={24} className="stat-icon" />
            </div>
            <span className="stat-value font-heading">02+</span>
            <span className="stat-label font-body">Internships Completed</span>
          </div>

          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <Code2 size={24} className="stat-icon" />
            </div>
            <span className="stat-title font-heading">Full Stack</span>
            <span className="stat-label font-body">Development</span>
          </div>

          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <Brain size={24} className="stat-icon" />
            </div>
            <span className="stat-title font-heading">IoT &amp; AI</span>
            <span className="stat-label font-body">Hardware &amp; Software</span>
          </div>
        </div>
      </div>
    </section>
  );
}
