import React from 'react';
import { useInView } from '../../hooks/useInView';
import './PhilosophyStatement.css';

export function PhilosophyStatement() {
  const [ref, isInView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      ref={ref}
      className={`philosophy-section ${isInView ? 'is-visible' : ''}`}
      aria-label="Philosophy Statement"
    >
      <div className="philosophy-content font-heading">
        <p className="statement-line-1">
          I don't want to just write code.
        </p>
        <p className="statement-line-2">
          I want to build <span className="highlight-lime">things worth using.</span>
        </p>
      </div>
    </section>
  );
}
