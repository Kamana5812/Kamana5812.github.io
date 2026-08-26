import React, { useState, useEffect, useRef } from 'react';
import { Search, Compass, FileText, Mail, Github, Linkedin, ArrowRight, X, Sparkles, BookOpen, Layers, Award, Terminal, Check } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { featuredProjects } from '../../data/projects';
import './CommandPalette.css';

export function CommandPalette({ isOpen, onClose, onSelectCaseStudy, soundFX }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const inputRef = useRef(null);

  const navigationItems = [
    { id: 'nav-home', label: 'Go to Home / Hero', href: '#home', category: 'Navigation', icon: Compass },
    { id: 'nav-what-i-do', label: 'Go to What I Do', href: '#what-i-do', category: 'Navigation', icon: Layers },
    { id: 'nav-about', label: 'Go to About Me', href: '#about', category: 'Navigation', icon: Sparkles },
    { id: 'nav-projects', label: 'Go to Featured Projects', href: '#projects', category: 'Navigation', icon: Layers },
    { id: 'nav-skills', label: 'Go to Technical Skills', href: '#skills', category: 'Navigation', icon: Terminal },
    { id: 'nav-experience', label: 'Go to Experience & Internships', href: '#journey', category: 'Navigation', icon: Award },
    { id: 'nav-research', label: 'Go to Research & Publications', href: '#publications', category: 'Navigation', icon: BookOpen },
    { id: 'nav-hackathons', label: 'Go to Hackathons & Leadership', href: '#hackathons', category: 'Navigation', icon: Award },
    { id: 'nav-certifications', label: 'Go to Certifications', href: '#certifications', category: 'Navigation', icon: Award },
    { id: 'nav-endorsements', label: 'Go to Mentorship Endorsements', href: '#endorsements', category: 'Navigation', icon: Sparkles },
    { id: 'nav-contact', label: 'Go to Contact Section', href: '#contact', category: 'Navigation', icon: Mail }
  ];

  const actionItems = [
    {
      id: 'act-copy-email',
      label: 'Copy Email Address (kamanaagrawal833@gmail.com)',
      category: 'Actions',
      icon: Mail,
      action: () => {
        navigator.clipboard.writeText(personalInfo.email);
        setCopiedEmail(true);
        if (soundFX?.playSuccess) soundFX.playSuccess();
        setTimeout(() => setCopiedEmail(false), 2000);
      }
    },
    {
      id: 'act-resume',
      label: 'View Live Resume (Auto-Synced)',
      category: 'Actions',
      icon: FileText,
      action: () => {
        window.location.hash = 'resume';
        window.location.reload();
      }
    },
    {
      id: 'act-github',
      label: 'Open GitHub Profile (@Kamana5812)',
      category: 'Actions',
      icon: Github,
      action: () => {
        window.open(personalInfo.github, '_blank');
      }
    },
    {
      id: 'act-linkedin',
      label: 'Open LinkedIn Profile',
      category: 'Actions',
      icon: Linkedin,
      action: () => {
        window.open(personalInfo.linkedin, '_blank');
      }
    }
  ];

  const projectItems = featuredProjects.map((p) => ({
    id: `proj-${p.id}`,
    label: `Case Study: ${p.title}`,
    category: 'Projects',
    icon: Compass,
    action: () => {
      if (onSelectCaseStudy) onSelectCaseStudy(p);
    }
  }));

  const allItems = [...actionItems, ...projectItems, ...navigationItems];

  const filteredItems = allItems.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  // Auto-focus input when opened
  useEffect(() => {
    if (isOpen) {
      if (soundFX?.playOpen) soundFX.playOpen();
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
      setQuery('');
    }
  }, [isOpen, soundFX]);

  // Keyboard navigation inside modal
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
        if (soundFX?.playTick) soundFX.playTick();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
        if (soundFX?.playTick) soundFX.playTick();
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const selected = filteredItems[selectedIndex];
        if (selected) {
          executeItem(selected);
        }
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, onClose, soundFX]);

  const executeItem = (item) => {
    if (soundFX?.playClick) soundFX.playClick();
    if (item.action) {
      item.action();
      if (item.id !== 'act-copy-email') {
        onClose();
      }
    } else if (item.href) {
      onClose();
      window.location.hash = item.href;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="cmd-palette-backdrop" onClick={onClose} aria-modal="true" role="dialog">
      <div className="cmd-palette-modal" onClick={(e) => e.stopPropagation()}>
        {/* Search Input Bar */}
        <div className="cmd-input-wrapper">
          <Search size={18} className="cmd-search-icon text-accent" />
          <input
            ref={inputRef}
            type="text"
            className="cmd-search-input font-body"
            placeholder="Type a command, project, or section... (e.g. 'Skopos', 'Resume')"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
          />
          <button type="button" onClick={onClose} className="cmd-close-btn" aria-label="Close command palette">
            <X size={16} />
          </button>
        </div>

        {/* Results List */}
        <div className="cmd-results-list font-body">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, idx) => {
              const IconComp = item.icon;
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  className={`cmd-item-row ${isSelected ? 'selected' : ''}`}
                  onClick={() => executeItem(item)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                >
                  <div className="cmd-item-left">
                    <span className="cmd-item-icon-box">
                      <IconComp size={16} className="text-accent" />
                    </span>
                    <span className="cmd-item-label">{item.label}</span>
                  </div>

                  <div className="cmd-item-right font-mono">
                    {item.id === 'act-copy-email' && copiedEmail ? (
                      <span className="cmd-copied-badge font-mono">
                        <Check size={12} /> Copied!
                      </span>
                    ) : (
                      <span className="cmd-category-tag font-mono">{item.category}</span>
                    )}
                    <ArrowRight size={14} className="cmd-arrow-icon" />
                  </div>
                </div>
              );
            })
          ) : (
            <div className="cmd-empty-state font-mono">
              <p>No matching commands found for "{query}"</p>
            </div>
          )}
        </div>

        {/* Footer Shortcut Helper */}
        <div className="cmd-footer font-mono">
          <div className="cmd-keys-hint">
            <span><kbd>↑</kbd> <kbd>↓</kbd> Navigate</span>
            <span><kbd>↵</kbd> Select</span>
            <span><kbd>esc</kbd> Close</span>
          </div>
          <span className="cmd-badge font-mono">Kamana. Command OS</span>
        </div>
      </div>
    </div>
  );
}
