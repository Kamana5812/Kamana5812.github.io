import React from 'react';
import { Github, Star, GitFork, ArrowUpRight, Code, GitCommit, Sparkles } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { useInView } from '../../hooks/useInView';
import { TiltCard } from '../3d/TiltCard';
import './GitHubStats.css';

export function GitHubStats() {
  const [ref, isInView] = useInView({ threshold: 0.15, triggerOnce: true });

  const topLanguages = [
    { name: 'Python', percentage: 38, color: '#3776AB' },
    { name: 'JavaScript & React', percentage: 32, color: '#F7DF1E' },
    { name: 'C / C++', percentage: 18, color: '#00599C' },
    { name: 'HTML & CSS', percentage: 12, color: '#E34F26' }
  ];

  const pinnedRepos = [
    {
      name: 'skopos',
      desc: 'Full-stack AI career & learning roadmap streamer with FastAPI & Groq LLMs.',
      lang: 'Python / FastAPI',
      stars: '★ Active',
      url: 'https://github.com/Kamana5812/skopos'
    },
    {
      name: 'optivolt-ai',
      desc: 'IoT solar predictive maintenance system on ESP32 with local regression ML.',
      lang: 'C++ / IoT',
      stars: '★ Active',
      url: 'https://github.com/Kamana5812/optivolt-ai'
    },
    {
      name: 'kamana-portfolio',
      desc: '3D editorial personal portfolio built with React 18, Three.js & Vite.',
      lang: 'JavaScript / 3D',
      stars: '★ Active',
      url: 'https://github.com/Kamana5812/kamana-portfolio'
    }
  ];

  return (
    <section
      id="github-stats"
      ref={ref}
      className={`github-stats-section ${isInView ? 'is-visible' : ''}`}
      aria-label="GitHub Activity & Open Source"
    >
      <div className="section-marker-header font-mono">
        <span className="marker-label">// GITHUB &amp; OPEN SOURCE METRICS</span>
      </div>

      <div className="github-stats-card">
        {/* Card Header */}
        <div className="github-header-row">
          <div className="github-user-info">
            <div className="github-avatar-box">
              <Github size={24} className="text-accent" />
            </div>
            <div>
              <h3 className="github-username font-heading">@Kamana5812</h3>
              <span className="github-subtitle font-mono">Full-Stack &amp; AI Engineer · Continuous Shipper</span>
            </div>
          </div>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-github-profile font-mono"
          >
            <span>Visit GitHub</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="github-content-grid">
          {/* Left: Languages Breakdown */}
          <div className="languages-breakdown-col font-mono">
            <span className="col-label">TOP REPOSITORY LANGUAGES</span>

            <div className="lang-bar-track">
              {topLanguages.map((l) => (
                <div
                  key={l.name}
                  className="lang-bar-segment"
                  style={{ width: `${l.percentage}%`, backgroundColor: l.color }}
                  title={`${l.name}: ${l.percentage}%`}
                />
              ))}
            </div>

            <div className="lang-legend-grid font-mono">
              {topLanguages.map((l) => (
                <div key={l.name} className="lang-legend-item">
                  <span className="lang-dot" style={{ backgroundColor: l.color }} />
                  <span className="lang-name">{l.name}</span>
                  <span className="lang-pct">{l.percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Pinned Repositories Grid */}
          <div className="pinned-repos-col">
            <span className="col-label font-mono">HIGHLIGHTED REPOSITORIES</span>

            <div className="pinned-repos-list">
              {pinnedRepos.map((repo) => (
                <TiltCard key={repo.name} maxTilt={6} scale={1.02} className="repo-tilt-wrap">
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="repo-card-link"
                  >
                    <div className="repo-top">
                      <div className="repo-name font-heading">
                        <Code size={14} className="text-accent" />
                        <span>{repo.name}</span>
                      </div>
                      <span className="repo-stars font-mono">{repo.stars}</span>
                    </div>

                    <p className="repo-desc font-body">{repo.desc}</p>

                    <span className="repo-lang-tag font-mono">{repo.lang}</span>
                  </a>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
