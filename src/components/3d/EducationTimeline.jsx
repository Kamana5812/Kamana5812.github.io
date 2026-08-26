import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, GraduationCap, Radio, Rocket, FileText, Briefcase, Award } from 'lucide-react';
import { useInView } from '../../hooks/useInView';
import './EducationTimeline.css';

const milestones = [
  {
    id: 'etl-1',
    year: '2024',
    month: 'Sept',
    badge: 'Foundation',
    label: 'B.Tech CSE Begins',
    subtitle: 'College of Engineering Bhubaneswar',
    detail: 'BPUT, Rourkela · Batch of 2028',
    tags: ['Data Structures', 'C/C++', 'OOP Logic'],
    icon: GraduationCap,
    color: '#b7ff00',
    above: true,
  },
  {
    id: 'etl-2',
    year: '2025',
    month: 'Mid',
    badge: 'Certification',
    label: 'IoT Specialization',
    subtitle: 'UC Irvine · Coursera',
    detail: '5 Specialized Certifications',
    tags: ['Arduino', 'Raspberry Pi', 'ESP32'],
    icon: Radio,
    color: '#61dafb',
    above: false,
  },
  {
    id: 'etl-3',
    year: '2025',
    month: 'Late',
    badge: 'Innovation',
    label: 'Full-Stack & AI Projects',
    subtitle: 'Skopos & OptiVolt AI',
    detail: 'FastAPI, React & Embedded IoT',
    tags: ['FastAPI', 'React', 'AWS EC2'],
    icon: Rocket,
    color: '#ff9800',
    above: true,
  },
  {
    id: 'etl-4',
    year: '2026',
    month: 'Jan',
    badge: 'Research',
    label: 'Research Published',
    subtitle: 'Peer-Reviewed Journal',
    detail: 'Sensor Network Telemetry & Analytics',
    tags: ['IoT', 'Data Logging', 'Paper'],
    icon: FileText,
    color: '#c084fc',
    above: false,
  },
  {
    id: 'etl-5',
    year: '2026',
    month: 'Jun',
    badge: 'Experience',
    label: '4 Industry Internships',
    subtitle: 'SuuSri AI · Dipvision · Urban Grih · IBM',
    detail: 'Gen AI, Cloud & Full-Stack Engineering',
    tags: ['Gen AI', 'LLMs', 'React', 'Cloud'],
    icon: Briefcase,
    color: '#ffd700',
    above: true,
  },
  {
    id: 'etl-6',
    year: '2028',
    month: 'Aug',
    badge: 'Milestone',
    label: 'Expected Graduation',
    subtitle: 'B.Tech — Computer Science',
    detail: 'College of Engineering Bhubaneswar',
    tags: ['Batch of 2028', 'Engineer'],
    icon: Award,
    color: '#b7ff00',
    above: false,
    isFuture: true,
  },
];

export function EducationTimeline() {
  const [ref, isInView] = useInView({ threshold: 0.15, triggerOnce: true });
  const [activeNode, setActiveNode] = useState(null);
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={ref}
      className={`etl-container ${isInView ? 'is-in-view' : ''}`}
      aria-label="Education and Journey Timeline"
    >
      {/* ── Header Row with Label & Scroll Navigation ── */}
      <div className="etl-header-row">
        <div className="etl-title-group">
          <div className="etl-pill font-mono">
            <span className="etl-pill-dot" />
            <span>Academic &amp; Growth Timeline</span>
          </div>
          <p className="etl-subtitle font-body">
            From B.Tech CSE foundation to specialized IoT, published research, 4 internships &amp; graduation.
          </p>
        </div>

        {/* Scroll Controls */}
        <div className="etl-nav-controls font-mono">
          <span className="etl-hint-text">Scroll or drag</span>
          <button
            onClick={() => handleScroll('left')}
            className="etl-nav-btn"
            aria-label="Scroll left"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => handleScroll('right')}
            className="etl-nav-btn"
            aria-label="Scroll right"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* ── Scrollable Track Stage ── */}
      <div className="etl-scroll-stage" ref={scrollContainerRef}>
        <div className="etl-track-canvas">

          {/* Glowing Center Laser Rail */}
          <div className="etl-laser-rail">
            <div className="etl-laser-glow" />
            <div className="etl-laser-fill" style={{ width: isInView ? '100%' : '0%' }} />
          </div>

          {/* Milestones Grid */}
          <div className="etl-nodes-row">
            {milestones.map((m, idx) => {
              const IconComponent = m.icon;
              const isActive = activeNode === m.id;

              return (
                <div
                  key={m.id}
                  className={`etl-station ${m.above ? 'etl-pos-above' : 'etl-pos-below'} ${isActive ? 'is-active' : ''} ${m.isFuture ? 'is-future' : ''}`}
                  style={{ '--node-color': m.color, '--station-delay': `${idx * 80}ms` }}
                  onMouseEnter={() => setActiveNode(m.id)}
                  onMouseLeave={() => setActiveNode(null)}
                >
                  {/* Card Bubble Element */}
                  <div className={`etl-card-bubble ${m.above ? 'etl-card-pos-top' : 'etl-card-pos-bottom'}`}>
                    <div className="etl-card-topbar">
                      <div className="etl-icon-badge" style={{ color: m.color, borderColor: `${m.color}40`, background: `${m.color}15` }}>
                        <IconComponent size={14} />
                      </div>
                      <span className="etl-date-badge font-mono" style={{ color: m.color, borderColor: `${m.color}35` }}>
                        {m.month} {m.year}
                      </span>
                    </div>

                    <h4 className="etl-card-heading font-heading">{m.label}</h4>
                    <p className="etl-card-org font-body">{m.subtitle}</p>
                    <p className="etl-card-detail font-mono">{m.detail}</p>

                    {/* Skill Tags */}
                    {m.tags && (
                      <div className="etl-tags-row">
                        {m.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="etl-tag-chip font-mono">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Laser Connector Stem */}
                  <div className={`etl-laser-stem ${m.above ? 'etl-stem-pos-top' : 'etl-stem-pos-bottom'}`} />

                  {/* Central Node Dot on Rail */}
                  <div className="etl-node-anchor">
                    <div className="etl-node-core" />
                    <div className="etl-node-ring" />
                    <div className="etl-node-pulse" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>{/* etl-track-canvas */}
      </div>{/* etl-scroll-stage */}
    </div>
  );
}
