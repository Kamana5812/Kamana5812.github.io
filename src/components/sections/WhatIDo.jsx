import React from 'react';
import { Code2, Brain, Globe, Cpu, Palette, ArrowRight } from 'lucide-react';
import { useInView } from '../../hooks/useInView';
import { TiltCard } from '../3d/TiltCard';
import './WhatIDo.css';

export function WhatIDo() {
  const [ref, isInView] = useInView({ threshold: 0.15, triggerOnce: true });

  const pillars = [
    {
      id: 'full-stack',
      icon: Code2,
      title: 'Full-Stack Development',
      desc: 'React, Node.js, FastAPI, REST APIs & Cloud Architecture'
    },
    {
      id: 'ai-ml',
      icon: Brain,
      title: 'AI/ML Solutions',
      desc: 'LLMs, Prompt Engineering, Predictive Models & Real-Time AI'
    },
    {
      id: 'web-dev',
      icon: Globe,
      title: 'Web Development',
      desc: 'Responsive, pixel-perfect, accessible & high-performance UIs'
    },
    {
      id: 'iot',
      icon: Cpu,
      title: 'IoT Systems',
      desc: 'ESP32, Raspberry Pi, Arduino telemetry & embedded sensors'
    },
    {
      id: 'ui-ux',
      icon: Palette,
      title: 'UI/UX Design',
      desc: 'Design systems, modern typography, glassmorphism & 3D'
    }
  ];

  return (
    <section
      id="what-i-do"
      ref={ref}
      className={`what-i-do-section ${isInView ? 'is-visible' : ''}`}
      aria-label="What I Do — Core Capabilities"
    >
      <div className="what-i-do-container">
        {/* Left Anchor Box */}
        <div className="what-i-do-anchor">
          <div className="anchor-header font-mono">
            <span className="anchor-dot" />
            <span>What I Do</span>
          </div>

          <p className="anchor-desc font-body">
            I build end-to-end digital solutions that are smart, scalable, and user-focused.
          </p>

          <a href="#projects" className="anchor-link font-body">
            <span>Explore All</span>
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>

        {/* 5 3D Pillar Cards */}
        <div className="pillars-grid">
          {pillars.map((item) => {
            const IconComp = item.icon;
            return (
              <TiltCard key={item.id} maxTilt={10} scale={1.03} className="pillar-tilt-wrap">
                <div className="pillar-card">
                  <div className="pillar-icon-wrapper">
                    <IconComp size={28} className="pillar-icon" />
                  </div>
                  <h3 className="pillar-title font-heading">{item.title}</h3>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
