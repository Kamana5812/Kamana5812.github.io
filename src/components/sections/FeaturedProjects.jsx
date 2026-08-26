import React, { useState } from 'react';
import { ProjectShowcase } from './ProjectShowcase';
import { featuredProjects } from '../../data/projects';
import { useInView } from '../../hooks/useInView';
import './FeaturedProjects.css';

export function FeaturedProjects({ onSelectCaseStudy }) {
  const [ref, isInView] = useInView({ threshold: 0.05, triggerOnce: true });
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filterTabs = ['All', 'AI & LLMs', 'IoT & Embedded', 'Full-Stack'];

  const filteredProjects = featuredProjects.filter((project) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'AI & LLMs') return project.technologies.some(t => t.includes('Groq') || t.includes('AI') || t.includes('LLM') || t.includes('Regression'));
    if (selectedFilter === 'IoT & Embedded') return project.technologies.some(t => t.includes('ESP32') || t.includes('IoT') || t.includes('C/C++'));
    if (selectedFilter === 'Full-Stack') return project.technologies.some(t => t.includes('FastAPI') || t.includes('Docker') || t.includes('AWS') || t.includes('React'));
    return true;
  });

  return (
    <section
      id="projects"
      ref={ref}
      className={`featured-projects-section ${isInView ? 'is-visible' : ''}`}
      aria-label="Featured Projects"
    >
      {/* Section Marker */}
      <div className="section-marker-header font-mono">
        <span className="marker-label">// FEATURED PROJECTS</span>
      </div>

      <div className="projects-header-row">
        <h2 className="projects-main-heading font-heading">
          Featured <span className="highlight-lime">Systems &amp; Apps</span>
        </h2>

        {/* Filter Pills */}
        <div className="projects-filter-bar font-mono">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              className={`project-filter-pill ${selectedFilter === tab ? 'active' : ''}`}
              onClick={() => setSelectedFilter(tab)}
            >
              <span>{tab}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Featured Project Cards Grid */}
      <div className="featured-projects-grid">
        {filteredProjects.map((project) => (
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
