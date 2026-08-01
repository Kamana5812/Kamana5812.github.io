import React from 'react';
import { Award, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { certificationsList } from '../../data/certifications';
import { useInView } from '../../hooks/useInView';
import './CertificationList.css';

export function CertificationList() {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="certifications"
      ref={ref}
      className={`certifications-section ${isInView ? 'is-visible' : ''}`}
      aria-label="Certifications & Verified Credentials"
    >
      <div className="sub-section-title font-heading">
        <Award size={22} className="title-icon text-accent" />
        <span>Certifications &amp; Verified Credentials</span>
      </div>

      <div className="certifications-grid">
        {certificationsList.map((cert) => (
          <div key={cert.id} className="certification-card font-body">
            <div className="cert-card-top font-mono">
              <span className="cert-org font-mono">{cert.organization}</span>
              <span className="cert-year font-mono">{cert.year}</span>
            </div>

            <h4 className="cert-name font-heading">{cert.name}</h4>

            <div className="cert-skills-row font-mono">
              {cert.skillsCovered.map((skill) => (
                <span key={skill} className="tag-chip tag-chip--mono">
                  {skill}
                </span>
              ))}
            </div>

            <div className="cert-verify-row font-mono">
              {cert.verificationUrl && cert.verificationUrl.startsWith('http') ? (
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-verify-link"
                >
                  <span>Verify Credential</span>
                  <ArrowUpRight size={14} />
                </a>
              ) : (
                <span className="status-badge font-mono">
                  <CheckCircle2 size={12} /> Certificate Completed
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
