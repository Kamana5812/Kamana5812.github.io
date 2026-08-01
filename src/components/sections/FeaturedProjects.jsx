import React from 'react';
import { ProjectShowcase } from './ProjectShowcase';
import { featuredProjects } from '../../data/projects';
import { useInView } from '../../hooks/useInView';
import './FeaturedProjects.css';

export function FeaturedProjects({ onSelectCaseStudy }) {
  const [ref, isInView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section
      id="projects"
      ref={ref}
      className={`featured-projects-section ${isInView ? 'is-visible' : ''}`}
      aria-label="Featured Projects"
    >
      {/* Section Marker */}
      <div className="section-marker-header font-mono">
        <span className="marker-label">// PROJECTS</span>
      </div>

      <div className="projects-header-row">
        <h2 className="projects-main-heading font-heading">
          Things I've built.
        </h2>
      </div>

      {/* Featured Project Cards Grid */}
      <div className="featured-projects-grid">
        {featuredProjects.map((project) => (
          <ProjectShowcase
            key={project.id}
            project={project}
            onSelectCaseStudy={onSelectCaseStudy}
          />
        ))}
      </div>
    </section>
  );
}
