import React from 'react';
import { Layers, Trophy, Code2, Lightbulb, ArrowRight, BookMarked } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { useInView } from '../../hooks/useInView';
import { TiltCard } from '../3d/TiltCard';
import { EducationTimeline } from '../3d/EducationTimeline';
import './About.css';

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.15, triggerOnce: true });

  const metrics = [
    { id: 'projects',   num: '10+',  label: 'Projects Completed',          icon: Layers,    color: '#61dafb' },
    { id: 'internships', num: '4+',  label: 'Internships Completed & Active', icon: Trophy, color: '#ffd700' },
    { id: 'experience', num: '2+',   label: 'Years of Coding',              icon: Code2,     color: '#b7ff00' },
    { id: 'dedication', num: '100%', label: 'Dedication & Consistency',     icon: Lightbulb, color: '#ff9800' },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className={`about-section ${isInView ? 'is-visible' : ''}`}
      aria-label="About Me Section"
    >
      <div className="about-mockup-grid">

        {/* ── Left Column: Profile Photo + 3D Book Spines in Different Colours ── */}
        <div className="about-visual-col">
          <TiltCard maxTilt={8} scale={1.02} className="about-study-tilt">
            <div className="about-study-card">
              <div className="study-avatar-container">
                <div className="avatar-ring font-mono">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="study-avatar-img"
                  />
                  <div className="avatar-status-badge font-mono">
                    <span className="status-dot-lime" />
                    <span>Active Developer</span>
                  </div>
                </div>
              </div>

              {/* Stack of 3 Engineering Books with Vibrant Distinct Colours */}
              <div className="book-stack-container font-mono">
                <div className="book-spine book-1">
                  <span className="book-marker" />
                  <span className="book-title">Clean Code</span>
                </div>
                <div className="book-spine book-2">
                  <span className="book-marker" />
                  <span className="book-title">System Design</span>
                </div>
                <div className="book-spine book-3">
                  <span className="book-marker" />
                  <span className="book-title">The Pragmatic Programmer</span>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* ── Center Column: Narrative ── */}
        <div className="about-narrative-col">
          <div className="about-tag font-mono">
            <span>About Me</span>
            <span className="about-tag-dot" />
          </div>

          <h2 className="about-headline font-heading">
            Passionate about building{' '}
            <span className="highlight-lime">intelligent</span> &amp; impactful solutions.
          </h2>

          <p className="about-summary-text font-body">
            I'm a B.Tech CSE student at <strong>College of Engineering Bhubaneswar</strong> (under Biju Patnaik University of Technology, Rourkela) with a strong passion for AI/ML, full-stack web development, and IoT embedded systems.
          </p>

          <p className="about-sub-text font-body">
            Currently developing full-stack applications with React &amp; FastAPI, exploring LLM prompt architectures, publishing sensor network research, and engineering microcontroller telemetry.
          </p>

          <a href="#skills" className="btn-more-about font-body">
            <span>Explore Skills &amp; Stack</span>
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>

        {/* ── Right Column: 2×2 Metric Cards ── */}
        <div className="about-metrics-col">
          <div className="metrics-2x2-grid">
            {metrics.map((m) => {
              const IconComp = m.icon;
              return (
                <TiltCard key={m.id} maxTilt={10} scale={1.04} className="metric-tilt-wrap">
                  <div className="metric-card">
                    <div className="metric-icon-box" style={{ borderColor: `${m.color}33`, background: `${m.color}14` }}>
                      <IconComp size={22} style={{ color: m.color }} />
                    </div>
                    <span className="metric-value font-heading">{m.num}</span>
                    <span className="metric-label font-body">{m.label}</span>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>

      </div>

      {/* 3D Horizontal Education Timeline */}
      <EducationTimeline />

    </section>
  );
}
