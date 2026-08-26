import React from 'react';
import { Trophy, Award, Calendar, ExternalLink } from 'lucide-react';
import { hackathonsList } from '../../data/hackathons';
import { useInView } from '../../hooks/useInView';
import { TiltCard } from '../3d/TiltCard';
import './Hackathons.css';

export function Hackathons() {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

  if (!hackathonsList || hackathonsList.length === 0) return null;

  return (
    <section
      id="hackathons"
      ref={ref}
      className={`hackathons-section ${isInView ? 'is-visible' : ''}`}
      aria-label="Hackathons and Technical Honors"
    >
      <div className="section-marker-header font-mono">
        <span className="marker-label">// HACKATHONS &amp; TECH ACHIEVEMENTS</span>
      </div>

      <div className="hackathons-header">
        <h2 className="hackathons-title font-heading">
          Competitions &amp; <span className="highlight-lime">Honors</span>
        </h2>
        <p className="hackathons-subtitle font-body">
          Building and shipping solutions under pressure across national AI project showcases and technical sprint challenges.
        </p>
      </div>

      <div className="hackathons-grid">
        {hackathonsList.map((hack) => (
          <TiltCard key={hack.id} maxTilt={8} scale={1.02} className="hackathon-tilt-wrap">
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
    </section>
  );
}
