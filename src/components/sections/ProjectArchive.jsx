import React, { useState } from 'react';
import { ArrowUpRight, Search, ChevronDown, ChevronUp } from 'lucide-react';
import { archiveProjects } from '../../data/archive';
import { useInView } from '../../hooks/useInView';
import './ProjectArchive.css';

export function ProjectArchive() {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [searchQuery, setSearchQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const filteredProjects = archiveProjects.filter((item) => {
    const q = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.tags.some((t) => t.toLowerCase().includes(q))
    );
  });

  const displayedProjects = isExpanded ? filteredProjects : filteredProjects.slice(0, 5);

  return (
    <section
      id="archive"
      ref={ref}
      className={`project-archive-section ${isInView ? 'is-visible' : ''}`}
      aria-label="Secondary Projects Archive"
    >
      <div className="archive-header-row font-mono">
        <div>
          <span className="eyebrow-label">OTHER WORK &amp; EXPERIMENTS</span>
          <h3 className="archive-title font-heading">More Projects</h3>
        </div>

        {/* Search Bar */}
        <div className="archive-search-box font-mono">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            className="search-input font-mono"
            placeholder="Search experiments..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Filter archive projects"
          />
        </div>
      </div>

      {/* Index List */}
      <div className="archive-table" role="table" aria-label="Archive Projects List">
        <div className="archive-table-header font-mono" role="row">
          <span role="columnheader" className="col-year">YEAR</span>
          <span role="columnheader" className="col-title">PROJECT</span>
          <span role="columnheader" className="col-desc">DESCRIPTION</span>
          <span role="columnheader" className="col-tags">BUILT WITH</span>
          <span role="columnheader" className="col-link">LINK</span>
        </div>

        <div className="archive-table-body" role="rowgroup">
          {displayedProjects.length > 0 ? (
            displayedProjects.map((item) => (
              <a
                key={item.id}
                href={item.url.startsWith('http') ? item.url : '#'}
                target={item.url.startsWith('http') ? '_blank' : undefined}
                rel={item.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="archive-row"
                role="row"
              >
                <span role="cell" className="col-year font-mono">{item.year}</span>
                <span role="cell" className="col-title font-heading">{item.title}</span>
                <span role="cell" className="col-desc font-body">{item.description}</span>
                <span role="cell" className="col-tags font-mono">
                  {item.tags.join(' • ')}
                </span>
                <span role="cell" className="col-link font-mono">
                  {item.url.startsWith('http') ? (
                    <ArrowUpRight size={16} className="link-icon" />
                  ) : (
                    <span className="honest-placeholder">Pending</span>
                  )}
                </span>
              </a>
            ))
          ) : (
            <div className="archive-empty-state font-mono">
              No matching experiments found for "{searchQuery}".
            </div>
          )}
        </div>
      </div>

      {/* Toggle Button */}
      {filteredProjects.length > 5 && (
        <div className="archive-toggle-wrapper">
          <button
            type="button"
            className="archive-toggle-btn font-mono"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <span>{isExpanded ? 'Show Fewer Projects' : `View All ${filteredProjects.length} Archive Projects`}</span>
            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
      )}
    </section>
  );
}
