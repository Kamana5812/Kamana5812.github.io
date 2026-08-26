import React from 'react';
import { Quote, Sparkles, Building2 } from 'lucide-react';
import { endorsementsList } from '../../data/endorsements';
import { useInView } from '../../hooks/useInView';
import { TiltCard } from '../3d/TiltCard';
import './Endorsements.css';

export function Endorsements() {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

  if (!endorsementsList || endorsementsList.length === 0) return null;

  return (
    <section
      id="endorsements"
      ref={ref}
      className={`endorsements-section ${isInView ? 'is-visible' : ''}`}
      aria-label="Mentorship and Team Endorsements"
    >
      <div className="section-marker-header font-mono">
        <span className="marker-label">// MENTORSHIP &amp; TEAM FEEDBACK</span>
      </div>

      <div className="endorsements-header">
        <h2 className="endorsements-title font-heading">
          Mentorship &amp; <span className="highlight-lime">Endorsements</span>
        </h2>
        <p className="endorsements-subtitle font-body">
          Feedback from technical leads and mentors across my software engineering internships.
        </p>
      </div>

      <div className="endorsements-grid">
        {endorsementsList.map((end) => (
          <TiltCard key={end.id} maxTilt={8} scale={1.02} className="endorsement-tilt-wrap">
            <div className="endorsement-card">
              <div className="end-card-top">
                <Quote size={24} className="text-accent quote-icon" />
                <span className="end-tag font-mono">{end.tag}</span>
              </div>

              <blockquote className="end-quote font-body">
                "{end.quote}"
              </blockquote>

              <div className="end-author-row">
                <div className="author-avatar-initials font-mono">
                  {end.initials}
                </div>
                <div className="author-meta">
                  <span className="author-name font-heading">{end.name}</span>
                  <span className="author-role font-mono">{end.role}</span>
                  <span className="author-company font-mono">
                    <Building2 size={12} className="text-accent" />
                    <span>{end.company}</span>
                  </span>
                </div>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
