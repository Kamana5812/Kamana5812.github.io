import React from 'react';
import { currentlyExploring } from '../../data/skills';
import { Compass } from 'lucide-react';
import './CurrentlyExploring.css';

export function CurrentlyExploring() {
  return (
    <div className="currently-exploring-block">
      <div className="exploring-header font-mono">
        <Compass size={16} className="exploring-icon" />
        <span>CURRENTLY EXPLORING &amp; LEARNING IN PUBLIC</span>
      </div>

      <ul className="exploring-list">
        {currentlyExploring.map((item) => (
          <li key={item.topic} className="exploring-item">
            <span className="tag-chip tag-chip--exploring font-mono">
              {item.topic}
            </span>
            <span className="exploring-status font-mono">{item.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
