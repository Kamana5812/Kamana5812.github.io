import React from 'react';
import { ArrowUpRight, ArrowDown, GraduationCap, MapPin, Target, Sparkles } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { useInView } from '../../hooks/useInView';
import { HeroWorkspace3D } from '../3d/HeroWorkspace3D';
import './Hero.css';

export function Hero() {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="home"
      ref={ref}
      className={`hero-section ${isInView ? 'is-visible' : ''}`}
      aria-label="Hero Introduction"
    >
      <div className="hero-grid grid-12">
        {/* Left Column (7 Columns) */}
        <div className="hero-content-col">
          {/* Greeting Pill */}
          <div className="hero-greeting-pill font-mono">
            <span className="greeting-status-dot" aria-hidden="true" />
            <span>Hey, I'm</span>
          </div>

          {/* Main Title */}
          <h1 className="hero-main-title font-heading">
            Kamana <span className="highlight-lime">Agrawal</span>
          </h1>

          {/* Subtitle / Focus */}
          <p className="hero-focus-subtitle font-heading">
            AI/ML Enthusiast <span className="subtitle-divider">|</span> Full-Stack Developer
          </p>

          {/* Descriptive Lines */}
          <div className="hero-description-block font-body">
            <p>Building AI, Web &amp; IoT solutions for a smarter tomorrow.</p>
            <p>Turning ideas into intelligent solutions.</p>
          </div>

          {/* 3 Metadata Badge Cards */}
          <div className="hero-meta-badges-row font-mono">
            <div className="meta-badge-card">
              <GraduationCap size={18} className="meta-icon text-accent" />
              <div className="meta-info">
                <span className="meta-title font-heading">B.Tech CSE Student</span>
                <span className="meta-sub">College of Engineering Bhubaneswar</span>
              </div>
            </div>

            <div className="meta-badge-card">
              <MapPin size={18} className="meta-icon text-accent" />
              <div className="meta-info">
                <span className="meta-title font-heading">Bhubaneswar, Odisha</span>
                <span className="meta-sub">India</span>
              </div>
            </div>

            <div className="meta-badge-card">
              <Target size={18} className="meta-icon text-accent" />
              <div className="meta-info">
                <span className="meta-title font-heading">Aspiring</span>
                <span className="meta-sub">AI/ML Engineer</span>
              </div>
            </div>
          </div>

          {/* CTA Action Buttons */}
          <div className="hero-cta-group">
            <a href="#projects" className="btn-hero-primary font-body">
              <span>View My Work</span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-secondary font-body"
            >
              <span>Download Resume</span>
              <ArrowDown size={16} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Right Side Visual (5 Columns) — 3D Workspace Stage */}
        <div className="hero-visual-col">
          <HeroWorkspace3D />
        </div>
      </div>
    </section>
  );
}
