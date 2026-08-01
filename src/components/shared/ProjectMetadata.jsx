import React from 'react';
import './ProjectMetadata.css';

export function ProjectMetadata({ year, category, role, status, className = '' }) {
  return (
    <div className={`project-metadata font-mono ${className}`}>
      {year && <span className="meta-item meta-year">{year}</span>}
      {category && (
        <>
          <span className="meta-separator" aria-hidden="true">•</span>
          <span className="meta-item meta-category">{category}</span>
        </>
      )}
      {role && (
        <>
          <span className="meta-separator" aria-hidden="true">•</span>
          <span className="meta-item meta-role">{role}</span>
        </>
      )}
      {status && (
        <>
          <span className="meta-separator" aria-hidden="true">•</span>
          <span className={`meta-status ${status.toLowerCase().replace(/\s+/g, '-')}`}>
            {status}
          </span>
        </>
      )}
    </div>
  );
}
