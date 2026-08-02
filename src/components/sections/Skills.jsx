import React from 'react';
import { Layout, Server, Database, Brain, Wrench, PenTool } from 'lucide-react';
import { skillCategories } from '../../data/skills';
import { useInView } from '../../hooks/useInView';
import './Skills.css';

const ICON_MAP = {
  Layout: Layout,
  Server: Server,
  Database: Database,
  Brain: Brain,
  Wrench: Wrench,
  Figma: PenTool
};

export function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const categories = React.useMemo(() => {
    const saved = localStorage.getItem('custom_skills');
    return saved ? JSON.parse(saved) : skillCategories;
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
      className={`skills-section ${isInView ? 'is-visible' : ''}`}
      aria-label="Technical Capabilities"
    >
      {/* Section Marker */}
      <div className="section-marker-header font-mono">
        <span className="marker-label">// SKILLS</span>
      </div>

      <h2 className="skills-main-heading font-heading">
        What I work with.
      </h2>

      {/* 6 Capability Columns Grid */}
      <div className="skills-capability-grid">
        {categories.map((cat) => {
          const IconComponent = ICON_MAP[cat.icon] || Layout;
          return (
            <div key={cat.category} className="capability-column">
              <div className="capability-header font-heading">
                <IconComponent size={20} className="cat-icon" />
                <h3 className="cat-title">{cat.category}</h3>
              </div>

              <ul className="skill-items-list font-body">
                {cat.skills.map((skill) => (
                  <li key={skill} className="skill-item-row">
                    <span className="item-bullet font-mono">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
