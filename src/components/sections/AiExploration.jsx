import React from 'react';
import { Sparkles, Brain, Cpu, Bot, Network, Code, Terminal } from 'lucide-react';
import { aiExplorationAreas } from '../../data/skills';
import { useInView } from '../../hooks/useInView';
import './AiExploration.css';

export function AiExploration() {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const icons = [Sparkles, Brain, Cpu, Bot, Network, Code, Terminal];

  const topicsList = React.useMemo(() => {
    const saved = localStorage.getItem('custom_ai_exploration');
    return saved ? JSON.parse(saved) : aiExplorationAreas;
  }, []);

  return (
    <section
      id="ai-exploration"
      ref={ref}
      className={`ai-exploration-section ${isInView ? 'is-visible' : ''}`}
      aria-label="AI Exploration Section"
    >
      <div className="section-marker-header font-mono">
        <span className="marker-label">// AI EXPLORATION</span>
      </div>

      <div className="ai-header-wrapper">
        <h2 className="ai-heading font-heading">
          Exploring what's next.
        </h2>

        <p className="ai-description font-body">
          I'm currently expanding my development journey into Artificial Intelligence—learning how intelligent systems can enhance traditional software and create more useful digital experiences.
        </p>
      </div>

      <div className="ai-areas-grid">
        {topicsList.map((area, idx) => {
          const IconComp = icons[idx % icons.length];
          return (
            <div key={area.topic} className="ai-area-card">
              <div className="area-card-top font-mono">
                <IconComp size={18} className="area-icon" />
                <span className="area-status-chip">{area.status}</span>
              </div>
              <span className="area-topic font-heading">{area.topic}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
