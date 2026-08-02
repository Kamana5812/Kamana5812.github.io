import React from 'react';
import { Briefcase, Building2, Calendar, MapPin } from 'lucide-react';
import { experienceTimeline, journeyTimeline } from '../../data/experience';
import { useInView } from '../../hooks/useInView';
import './Experience.css';

export function Experience() {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

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
      aria-label="Experience and Journey Section"
    >
      {/* Section Marker */}
      <div className="section-marker-header font-mono">
        <span className="marker-label">// EXPERIENCE &amp; JOURNEY</span>
      </div>

      <h2 className="journey-main-heading font-heading">
        Practical experience.<br />
        <span className="highlight-lime">Continuous growth.</span>
      </h2>

      {/* Internship Work Experience Cards */}
      <div className="experience-work-container">
        <h3 className="sub-section-title font-heading">
          <Briefcase size={22} className="title-icon" />
          <span>Work Experience &amp; Internships</span>
        </h3>

        <div className="work-cards-grid">
          {expList.map((item) => (
            <div key={item.id} className="work-experience-card">
              <div className="work-card-header font-mono">
                <span className="work-type-badge">{item.type}</span>
                <span className="work-duration">
                  <Calendar size={13} /> {item.duration}
                </span>
              </div>

              <h4 className="work-role-title font-heading">{item.title}</h4>

              <div className="work-company-meta font-mono">
                <span className="company-name">
                  <Building2 size={14} /> {item.organization}
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
          ))}
        </div>
      </div>

      {/* Timeline Journey Section */}
      <div className="journey-timeline-container font-mono">
        <h3 className="sub-section-title font-heading">
          <span>Learning &amp; Growth Timeline</span>
        </h3>

        <ol className="journey-timeline-list">
          {jList.map((item) => (
            <li key={item.id} className="journey-item-card">
              <div className="journey-card-header">
                <span className="journey-period font-mono">{item.period}</span>
                <span className="journey-tag-chip font-mono">{item.tag}</span>
              </div>

              <h4 className="journey-item-title font-heading">{item.title}</h4>
              <p className="journey-item-summary font-body">{item.summary}</p>

              <div className="journey-tech-chips">
                {item.technologies.map((tech) => (
                  <span key={tech} className="tag-chip tag-chip--mono">
                    {tech}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
