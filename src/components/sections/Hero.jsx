import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Code2, User } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { useInView } from '../../hooks/useInView';
import './Hero.css';

export function Hero() {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [imgError, setImgError] = useState(false);

  const techStack = [
    { name: "React", icon: "atom" },
    { name: "JavaScript", icon: "js" },
    { name: "Python", icon: "py" },
    { name: "Node.js", icon: "node" },
    { name: "MongoDB", icon: "db" },
    { name: "Git", icon: "git" }
  ];

  return (
    <section
      id="home"
      ref={ref}
      className={`hero-section ${isInView ? 'is-visible' : ''}`}
      aria-label="Hero Introduction"
    >
      <div className="hero-grid grid-12">
        {/* Left Side (7 Columns) */}
        <div className="hero-content-col">
          <div className="hero-eyebrow-wrapper">
            <span className="hero-eyebrow font-mono">
              {personalInfo.eyebrow}
            </span>
          </div>

          <h1 className="hero-main-title font-heading">
            {personalInfo.heroHeadlineLead}{' '}
            <span className="highlight-lime">{personalInfo.heroHeadlineAccent}</span>
          </h1>

          <p className="hero-description font-body">
            {personalInfo.supportingLine}
          </p>

          {/* Action Buttons */}
          <div className="hero-cta-group">
            <a href="#projects" className="btn-primary-lime font-body">
              <span>Explore My Work</span>
              <ArrowRight size={18} aria-hidden="true" />
            </a>

            <a href="#contact" className="btn-secondary-outline font-body">
              <span>Let's Connect</span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>

          {/* Tech Stack Row */}
          <div className="hero-tech-stack">
            <span className="tech-stack-label font-mono">TECH STACK</span>
            <div className="tech-chips-row">
              {techStack.map((tech) => (
                <div key={tech.name} className="tech-stack-chip font-mono">
                  <span className="chip-dot"></span>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side Visual (5 Columns) — Profile Photo & Developer Graphic */}
        <div className="hero-visual-col">
          <div className="hero-graphic-container">
            {/* Subtle Technical Radial Grid Backdrop */}
            <div className="radial-grid-background" aria-hidden="true">
              <div className="grid-circle circle-outer"></div>
              <div className="grid-circle circle-inner"></div>
              <div className="lime-glow-core"></div>
            </div>

            {/* Profile Photo Frame */}
            <div className="hero-photo-frame">
              <div className="photo-ring-glow font-mono">
                {!imgError ? (
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="hero-profile-img"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="photo-fallback-graphic">
                    <User size={54} className="text-accent" />
                    <span className="fallback-name font-heading">{personalInfo.name}</span>
                    <span className="fallback-sub font-mono">Full-Stack Developer</span>
                  </div>
                )}
              </div>

              {/* Photo Corner Label Badge */}
              <div className="photo-badge font-mono">
                <span className="status-dot-lime"></span>
                <span>{personalInfo.name}</span>
              </div>
            </div>

            {/* Floating Dark Card: Currently Building */}
            <div className="floating-building-card">
              <div className="card-top font-mono">
                <span className="building-label">
                  <span className="status-dot-lime"></span> Currently Building
                </span>
                <Code2 size={16} className="card-code-icon" />
              </div>

              <p className="card-heading font-body">
                AI-powered web experiences that solve real problems.
              </p>

              <a href="#projects" className="card-link font-mono">
                <span>View Projects</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
