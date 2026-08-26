import React from 'react';
import { Sparkles, Brain, Cpu, Bot, Network, Code, Terminal } from 'lucide-react';
import { aiExplorationAreas } from '../../data/skills';
import { useInView } from '../../hooks/useInView';
import { TiltCard } from '../3d/TiltCard';
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
          Exploring what's next in <span className="highlight-lime">AI &amp; Intelligent Systems</span>.
        </h2>

        <p className="ai-description font-body">
          I'm actively expanding my engineering journey into Artificial Intelligence &amp; Machine Learning—building real-time LLM applications, prompt workflows, and on-device intelligent telemetry.
        </p>
      </div>

      {/* 3D Topic Cards Grid */}
      <div className="ai-areas-grid">
        {topicsList.map((area, idx) => {
          const IconComp = icons[idx % icons.length];
          return (
            <TiltCard key={area.topic} maxTilt={8} scale={1.03}>
              <div className="ai-area-card">
                <div className="area-card-top font-mono">
                  <IconComp size={18} className="area-icon" />
                  <span className="area-status-chip">{area.status}</span>
                </div>
                <span className="area-topic font-heading">{area.topic}</span>
              </div>
            </TiltCard>
          );
        })}
      </div>
    </section>
  );
}
