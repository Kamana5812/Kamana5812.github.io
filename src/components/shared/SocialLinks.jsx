import React from 'react';
import { Github, Linkedin, Mail, FileText, ArrowUpRight } from 'lucide-react';
import './SocialLinks.css';

const ICON_MAP = {
  Github: Github,
  Linkedin: Linkedin,
  Mail: Mail,
  FileText: FileText
};

export function SocialLinks({ links = [], showLabels = true, className = '' }) {
  return (
    <div className={`social-links-container ${className}`}>
      {links.map((link) => {
        const IconComponent = ICON_MAP[link.icon] || Mail;
        const isMail = link.url.startsWith('mailto:');
        
        return (
          <a
            key={link.label}
            href={link.url}
            className="social-link"
            target={isMail ? undefined : '_blank'}
            rel={isMail ? undefined : 'noopener noreferrer'}
            aria-label={link.label}
          >
            <IconComponent size={18} className="social-icon" aria-hidden="true" />
            {showLabels && <span className="social-label">{link.label}</span>}
            {!isMail && showLabels && (
              <ArrowUpRight size={14} className="social-arrow" aria-hidden="true" />
            )}
          </a>
        );
      })}
    </div>
  );
}
