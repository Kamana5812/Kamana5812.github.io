import React from 'react';
import { personalInfo } from '../../data/personal';
import { experienceTimeline } from '../../data/experience';
import { certificationsList } from '../../data/certifications';
import { publicationsList } from '../../data/publications';
import { skillCategories } from '../../data/skills';
import { featuredProjects } from '../../data/projects';
import './ResumePage.css';

export function ResumePage() {

  const handlePrint = () => window.print();

  const handleBack = () => {
    window.history.pushState('', '', '/');
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  };

  const resumeProjects = featuredProjects.slice(0, 3);

  // Collapse skills into FAANG-style grouped lines
  const skillLines = [
    {
      label: 'Languages',
      value: 'C, C++, Python, JavaScript (ES6+), HTML5, CSS3'
    },
    {
      label: 'Frameworks & Libraries',
      value: 'React.js, FastAPI, Node.js, Express.js, Streamlit'
    },
    {
      label: 'Tools & Platforms',
      value: 'Git, GitHub, Docker, AWS EC2, Vite, Vercel, MongoDB, REST APIs'
    },
    {
      label: 'Hardware & IoT',
      value: 'ESP32, Raspberry Pi, Arduino (C Framework), Sensor Interfacing (DHT11, LDR, GP2Y1010AU0F)'
    },
    {
      label: 'AI & ML',
      value: 'Prompt Engineering, LLM Integration (Groq API), Machine Learning Fundamentals, Server-Sent Events'
    },
  ];

  return (
    <>
      {/* ── Toolbar (hidden on print) ── */}
      <div className="rp-toolbar no-print">
        <div className="rp-toolbar-inner">
          <span className="rp-toolbar-label">
            ⚡ LIVE RESUME — auto-synced from portfolio data
          </span>
          <div className="rp-toolbar-actions">
            <button onClick={handlePrint} className="rp-btn-print">
              🖨 &nbsp;Print / Save as PDF
            </button>
            <button onClick={handleBack} className="rp-btn-back">
              ← Back to Portfolio
            </button>
          </div>
        </div>
      </div>

      {/* ── LaTeX-style Paper ── */}
      <div className="rp-page">

        {/* ───────────── HEADER ───────────── */}
        <div className="rp-header">
          <h1 className="rp-name">{personalInfo.name}</h1>
          <div className="rp-contact-row">
            <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
            <span className="rp-sep">|</span>
            <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            <span className="rp-sep">|</span>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
              linkedin.com/in/kamana-agrawal-510146281
            </a>
            <span className="rp-sep">|</span>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
              github.com/Kamana5812
            </a>
          </div>
        </div>

        {/* ───────────── EDUCATION ───────────── */}
        <div className="rp-section">
          <div className="rp-section-heading">Education</div>
          <div className="rp-entry">
            <div className="rp-entry-row">
              <span className="rp-bold">{personalInfo.college}</span>
              <span className="rp-date">{personalInfo.location}</span>
            </div>
            <div className="rp-entry-row">
              <span className="rp-italic">
                {personalInfo.degree}
                {personalInfo.cgpa ? ` — CGPA: ${personalInfo.cgpa}` : ''}
              </span>
              <span className="rp-date">{personalInfo.duration}</span>
            </div>
            <div className="rp-entry-row" style={{ marginTop: '1pt' }}>
              <span className="rp-small-muted">
                Affiliated to {personalInfo.university}
              </span>
            </div>
            <ul className="rp-bullets">
              <li>
                <strong>Relevant Coursework:</strong> Data Structures &amp; Algorithms,
                Object-Oriented Programming (C/C++), Operating Systems, Database Management Systems,
                Computer Networks, Internet of Things (IoT), Web Development.
              </li>
            </ul>
          </div>
        </div>

        {/* ───────────── EXPERIENCE ───────────── */}
        <div className="rp-section">
          <div className="rp-section-heading">Experience</div>
          {experienceTimeline.map(exp => (
            <div className="rp-entry" key={exp.id}>
              <div className="rp-entry-row">
                <span className="rp-bold">{exp.organization}</span>
                <span className="rp-date">{exp.duration}</span>
              </div>
              <div className="rp-entry-row">
                <span className="rp-italic">{exp.title}</span>
                <span className="rp-date">{exp.location}</span>
              </div>
              <ul className="rp-bullets">
                {exp.responsibilities.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ───────────── PROJECTS ───────────── */}
        <div className="rp-section">
          <div className="rp-section-heading">Projects</div>
          {resumeProjects.map(proj => (
            <div className="rp-entry" key={proj.id}>
              <div className="rp-entry-row">
                <span>
                  <span className="rp-bold">{proj.title}</span>
                  {(proj.github && proj.github !== '#') || (proj.liveDemo && proj.liveDemo !== '#') ? (
                    <span className="rp-proj-links">
                      {proj.github && proj.github !== '#' && (
                        <a href={proj.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                      )}
                      {proj.liveDemo && proj.liveDemo !== '#' && (
                        <>
                          {proj.github && proj.github !== '#' && <span className="rp-sep">|</span>}
                          <a href={proj.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                        </>
                      )}
                    </span>
                  ) : null}
                </span>
                <span className="rp-date">{proj.year}</span>
              </div>
              <div className="rp-entry-row">
                <span className="rp-italic">{proj.technologies?.join(', ')}</span>
              </div>
              <ul className="rp-bullets">
                {(proj.keyFeatures || []).slice(0, 4).map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
                {(!proj.keyFeatures || proj.keyFeatures.length === 0) && proj.tagline && (
                  <li>{proj.tagline}</li>
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* ───────────── TECHNICAL SKILLS ───────────── */}
        <div className="rp-section">
          <div className="rp-section-heading">Technical Skills</div>
          <div className="rp-entry">
            <ul className="rp-skills-list">
              {skillLines.map(s => (
                <li key={s.label}>
                  <strong>{s.label}:</strong> {s.value}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ───────────── RESEARCH ───────────── */}
        {publicationsList.length > 0 && (
          <div className="rp-section">
            <div className="rp-section-heading">Research &amp; Publications</div>
            {publicationsList.map(pub => (
              <div className="rp-entry" key={pub.id}>
                <div className="rp-entry-row">
                  <span className="rp-bold">{pub.title}</span>
                  <span className="rp-date">{pub.month} {pub.year}</span>
                </div>
                <div className="rp-entry-row">
                  <span className="rp-italic">{pub.journal}</span>
                </div>
                <ul className="rp-bullets">
                  <li>Authors: {pub.authors.join(', ')}</li>
                  {pub.doi && <li>DOI: <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">{pub.doi}</a></li>}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* ───────────── CERTIFICATIONS ───────────── */}
        <div className="rp-section">
          <div className="rp-section-heading">Certifications &amp; Achievements</div>
          <div className="rp-entry">
            <ul className="rp-bullets">
              {certificationsList.map(cert => (
                <li key={cert.id}>
                  <strong>{cert.name}</strong> — {cert.issuer} ({cert.year})
                  {cert.credentialId && <span className="rp-cred"> · ID: {cert.credentialId}</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>{/* end rp-page */}
    </>
  );
}
