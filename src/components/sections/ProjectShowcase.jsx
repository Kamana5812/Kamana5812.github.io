import React from 'react';
import { ArrowUpRight, Cpu, Compass } from 'lucide-react';
import { TiltCard } from '../3d/TiltCard';
import './ProjectShowcase.css';

export function ProjectShowcase({ project, onSelectCaseStudy }) {
  const {
    id,
    title,
    tagline,
    description,
    category,
    technologies
  } = project;

  // Custom visual graphic thumbnail generator matching project categories
  const renderThumbnail = () => {
    if (id === 'optivolt-ai') {
      return (
        <div className="card-media-graphic media-graphic--optivolt font-heading">
          <Cpu size={36} className="media-icon" />
          <span className="graphic-title">OptiVolt AI</span>
          <span className="graphic-sub font-mono">SOLAR TELEMETRY &amp; PREDICTIVE MAINTENANCE</span>
        </div>
      );
    }

    return (
      <div className="card-media-graphic media-graphic--skopos font-heading">
        <Compass size={36} className="media-icon" />
        <span className="graphic-title">Skopos</span>
        <span className="graphic-sub font-mono">AI CAREER &amp; LEARNING ADVISOR</span>
      </div>
    );
  };

  return (
    <TiltCard maxTilt={6} scale={1.015} className="project-card-tilt-wrap">
      <article
        id={`project-${id}`}
        className="dark-project-card"
        aria-labelledby={`project-title-${id}`}
      >
        <div className="card-media-wrapper" onClick={() => onSelectCaseStudy(project)}>
          {renderThumbnail()}
        </div>

        <div className="card-info-content">
          <div className="card-title-row">
            <h3 id={`project-title-${id}`} className="project-card-title font-heading">
              <button type="button" onClick={() => onSelectCaseStudy(project)} className="title-link-btn">
                {title}
              </button>
            </h3>

            <button
              type="button"
              onClick={() => onSelectCaseStudy(project)}
              className="arrow-link-btn"
              aria-label={`View ${title} details`}
            >
              <ArrowUpRight size={20} />
            </button>
          </div>

          <p className="card-desc font-body">
            {tagline || description}
          </p>

          <div className="card-tags-row">
            {technologies.map((tech) => (
              <span key={tech} className="tag-chip tag-chip--mono">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </article>
    </TiltCard>
  );
}
