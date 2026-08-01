import React, { useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, Github, CheckCircle2, Lightbulb, AlertTriangle, Cpu } from 'lucide-react';
import { featuredProjects } from '../data/projects';
import './ProjectCaseStudy.css';

export function ProjectCaseStudy({ project, onCloseCaseStudy, onSelectCaseStudy }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project.id]);

  if (!project) return null;

  const currentIndex = featuredProjects.findIndex((p) => p.id === project.id);
  const prevProject = featuredProjects[(currentIndex - 1 + featuredProjects.length) % featuredProjects.length];
  const nextProject = featuredProjects[(currentIndex + 1) % featuredProjects.length];

  return (
    <article className="case-study-page" aria-label={`Project Case Study: ${project.title}`}>
      <div className="case-study-container">
        {/* Navigation Top Bar */}
        <div className="case-study-top-nav font-mono">
          <button type="button" className="back-btn" onClick={onCloseCaseStudy}>
            <ArrowLeft size={16} />
            <span>Back to All Projects</span>
          </button>
          
          <span className="case-study-breadcrumbs">
            Projects / <span className="current-crumb">{project.slug}</span>
          </span>
        </div>

        {/* Case Study Header */}
        <header className="case-study-header">
          <div className="case-study-tags-top">
            <span className="status-badge">{project.status}</span>
            <span className="tag-chip tag-chip--mono">{project.category}</span>
            <span className="tag-chip tag-chip--mono">{project.year}</span>
          </div>

          <h1 className="case-study-title font-heading">{project.title}</h1>
          <p className="case-study-tagline font-body">{project.tagline}</p>

          <div className="case-study-actions">
            {project.liveDemo && project.liveDemo.startsWith('http') ? (
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn-primary-lime">
                <span>Visit Live App</span>
                <ArrowUpRight size={18} />
              </a>
            ) : (
              <span className="honest-placeholder font-mono">Live Demo [Pending]</span>
            )}

            {project.github && project.github.startsWith('http') ? (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary-outline">
                <Github size={18} />
                <span>View Repository</span>
                <ArrowUpRight size={16} />
              </a>
            ) : (
              <span className="honest-placeholder font-mono">Repository [Private]</span>
            )}
          </div>
        </header>

        {/* Case Study Hero Visual Graphic */}
        <div className="case-study-hero-visual font-mono">
          <div className="visual-banner">
            <Cpu size={32} className="text-accent" />
            <span>CASE STUDY ARCHITECTURE — {project.title.toUpperCase()}</span>
          </div>
        </div>

        {/* Narrative Reading Body */}
        <div className="case-study-body font-body">
          <section className="case-study-block">
            <span className="block-eyebrow font-mono">01 // PROBLEM &amp; CONTEXT</span>
            <h2 className="block-heading font-heading">The Challenge</h2>
            <div className="problem-box">
              <AlertTriangle size={20} className="box-icon danger-icon" />
              <p>{project.problem}</p>
            </div>
          </section>

          <section className="case-study-block">
            <span className="block-eyebrow font-mono">02 // ARCHITECTURAL SOLUTION</span>
            <h2 className="block-heading font-heading">The Solution</h2>
            <p className="block-paragraph">{project.solution}</p>
          </section>

          <section className="case-study-block">
            <span className="block-eyebrow font-mono">03 // FUNCTIONAL BREAKDOWN</span>
            <h2 className="block-heading font-heading">Key Features</h2>
            <ul className="features-list">
              {project.keyFeatures.map((feature, idx) => (
                <li key={idx} className="feature-item">
                  <CheckCircle2 size={18} className="feature-icon" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="case-study-block">
            <span className="block-eyebrow font-mono">04 // ROLE &amp; IMPLEMENTATION</span>
            <h2 className="block-heading font-heading">What I Engineered</h2>
            <p className="block-paragraph">{project.contribution}</p>
          </section>

          <section className="case-study-block reflection-block">
            <span className="block-eyebrow font-mono">05 // TECHNICAL RETROSPECTIVE</span>
            <h2 className="block-heading font-heading">What I Learned</h2>
            <div className="learning-card">
              <Lightbulb size={24} className="learning-icon" />
              <p className="learning-text">{project.learnings}</p>
            </div>
          </section>
        </div>

        {/* Case Study Bottom Navigation */}
        <nav className="case-study-footer-nav font-mono">
          <button
            type="button"
            className="prev-next-btn"
            onClick={() => onSelectCaseStudy(prevProject)}
          >
            <span className="btn-label">PREVIOUS PROJECT</span>
            <span className="btn-title font-heading">← {prevProject.title}</span>
          </button>

          <button
            type="button"
            className="prev-next-btn text-right"
            onClick={() => onSelectCaseStudy(nextProject)}
          >
            <span className="btn-label">NEXT PROJECT</span>
            <span className="btn-title font-heading">{nextProject.title} →</span>
          </button>
        </nav>
      </div>
    </article>
  );
}
