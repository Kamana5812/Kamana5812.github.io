import React, { useState } from 'react';
import { Briefcase, Trophy, Compass, Building2, Calendar, MapPin, Award } from 'lucide-react';
import { experienceTimeline, journeyTimeline } from '../../data/experience';
import { hackathonsList } from '../../data/hackathons';
import { useInView } from '../../hooks/useInView';
import { TiltCard } from '../3d/TiltCard';
import './Experience.css';

export function Experience() {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [activeTab, setActiveTab] = useState('internships');

  const expList = React.useMemo(() => {
    const saved = localStorage.getItem('custom_experience');
    return saved ? JSON.parse(saved) : experienceTimeline;
  }, []);

  const jList = React.useMemo(() => {
    const saved = localStorage.getItem('custom_journey');
    return saved ? JSON.parse(saved) : journeyTimeline;
  }, []);

  return (
    <section
      id="journey"
      ref={ref}
      className={`journey-section ${isInView ? 'is-visible' : ''}`}
      aria-label="Experience, Hackathons and Journey Section"
    >
      {/* Section Marker */}
      <div className="section-marker-header font-mono">
        <span className="marker-label">// EXPERIENCE &amp; ACHIEVEMENTS</span>
      </div>

      <div className="experience-header-row">
        <div>
          <h2 className="journey-main-heading font-heading">
            Practical experience. <span className="highlight-lime">Continuous growth.</span>
          </h2>
        </div>

        {/* Tab Switcher */}
        <div className="exp-tabs-pill-bar font-mono">
          <button
            type="button"
            className={`exp-tab-btn ${activeTab === 'internships' ? 'active' : ''}`}
            onClick={() => setActiveTab('internships')}
          >
            <Briefcase size={14} />
            <span>Internships ({expList.length})</span>
          </button>

          <button
            type="button"
            className={`exp-tab-btn ${activeTab === 'hackathons' ? 'active' : ''}`}
            onClick={() => setActiveTab('hackathons')}
          >
            <Trophy size={14} />
            <span>Hackathons ({hackathonsList.length})</span>
          </button>

          <button
            type="button"
            className={`exp-tab-btn ${activeTab === 'journey' ? 'active' : ''}`}
            onClick={() => setActiveTab('journey')}
          >
            <Compass size={14} />
            <span>Growth Timeline ({jList.length})</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Internships */}
      {activeTab === 'internships' && (
        <div className="work-cards-grid">
          {expList.map((item) => (
            <TiltCard key={item.id} maxTilt={6} scale={1.015} className="work-tilt-wrap">
              <div className="work-experience-card">
                <div className="work-card-header font-mono">
                  <span className="work-type-badge">{item.type}</span>
                  <span className="work-duration">
                    <Calendar size={13} /> {item.duration}
                  </span>
                </div>

                <h4 className="work-role-title font-heading">{item.title}</h4>

                <div className="work-company-meta font-mono">
                  <span className="company-name">
                    <Building2 size={14} className="text-accent" /> {item.organization}
                  </span>
                  <span className="company-loc">
                    <MapPin size={13} /> {item.location}
                  </span>
                </div>

                <p className="work-summary font-body">{item.summary}</p>

                <ul className="work-bullets-list font-body">
                  {item.responsibilities.map((resp, idx) => (
                    <li key={idx}>• {resp}</li>
                  ))}
                </ul>

                <div className="work-tech-chips font-mono">
                  {item.technologies.map((tech) => (
                    <span key={tech} className="tag-chip tag-chip--mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      )}

      {/* Tab 2: Hackathons & Honors */}
      {activeTab === 'hackathons' && (
        <div className="hackathons-grid">
          {hackathonsList.map((hack) => (
            <TiltCard key={hack.id} maxTilt={6} scale={1.015} className="work-tilt-wrap">
              <article className="hackathon-card">
                <div className="hack-card-top font-mono">
                  <div className="hack-award-pill">
                    <Trophy size={14} className="text-accent" />
                    <span>{hack.award}</span>
                  </div>
                  <span className="hack-year font-mono">{hack.year}</span>
                </div>

                <h3 className="hack-title font-heading">{hack.title}</h3>
                <span className="hack-organizer font-mono">{hack.organizer}</span>

                <p className="hack-desc font-body">{hack.description}</p>

                <div className="hack-tags-row font-mono">
                  {hack.tags.map((tag) => (
                    <span key={tag} className="tag-chip tag-chip--mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </TiltCard>
          ))}
        </div>
      )}

      {/* Tab 3: Learning Journey */}
      {activeTab === 'journey' && (
        <div className="journey-grid-compact font-mono">
          {jList.map((item) => (
            <div key={item.id} className="journey-compact-card">
              <div className="journey-card-header">
                <span className="journey-period font-mono">{item.period}</span>
                <span className="journey-tag-chip font-mono">{item.tag}</span>
              </div>

              <h4 className="journey-item-title font-heading">{item.title}</h4>
              <p className="journey-item-summary font-body">{item.summary}</p>

              <div className="journey-tech-chips font-mono">
                {item.technologies.map((tech) => (
                  <span key={tech} className="tag-chip tag-chip--mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
