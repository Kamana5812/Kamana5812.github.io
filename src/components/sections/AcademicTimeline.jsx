import React, { useEffect, useRef } from 'react';
import { academicTimeline } from '../../data/education';
import { GraduationCap, MapPin, Award } from 'lucide-react';
import './AcademicTimeline.css';

export function AcademicTimeline() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="education" className="academic-timeline-section" ref={sectionRef}>
      <div className="section-header">
        <h2 className="section-title">Academic Growth</h2>
        <p className="section-subtitle">My educational journey and foundational learning.</p>
      </div>

      <div className="timeline-container">
        {academicTimeline.map((item, index) => (
          <div className="timeline-item" key={item.id}>
            <div className="timeline-dot">
              <GraduationCap size={16} />
            </div>
            
            <div className="timeline-content clay-card">
              <div className="timeline-content-header">
                <span className="timeline-duration font-mono">{item.duration}</span>
                <span className="timeline-level">{item.level}</span>
              </div>
              
              <h3 className="timeline-institution font-heading">{item.institution}</h3>
              <div className="timeline-meta">
                <span className="meta-item"><MapPin size={14} /> {item.university}</span>
                <span className="meta-item"><Award size={14} /> {item.score}</span>
              </div>
              
              <p className="timeline-specialization font-mono">{item.specialization}</p>
              <p className="timeline-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
