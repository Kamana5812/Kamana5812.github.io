import React, { useState } from 'react';
import { BookOpen, Users, Calendar, FileText, ArrowUpRight, Bookmark, Award, CheckCircle2, Eye } from 'lucide-react';
import { publicationsList } from '../../data/publications';
import { certificationsList } from '../../data/certifications';
import { useInView } from '../../hooks/useInView';
import { TiltCard } from '../3d/TiltCard';
import { CertificateModal } from '../shared/CertificateModal';
import './Publications.css';

export function Publications() {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [selectedCert, setSelectedCert] = useState(null);

  const certs = React.useMemo(() => {
    const saved = localStorage.getItem('custom_certifications');
    return saved ? JSON.parse(saved) : certificationsList;
  }, []);

  return (
    <>
      <section
        id="publications"
        ref={ref}
        className={`publications-section ${isInView ? 'is-visible' : ''}`}
        aria-label="Research and Verified Credentials"
      >
        {/* Section Marker */}
        <div className="section-marker-header font-mono">
          <span className="marker-label">// RESEARCH &amp; VERIFIED CREDENTIALS</span>
        </div>

        <div className="publications-grid-layout">
          {/* Left Column: Published Research Paper */}
          <div className="research-paper-col">
            <div className="sub-header-row">
              <h2 className="publications-title font-heading">
                Published <span className="highlight-lime">Research</span>
              </h2>
            </div>

            <div className="publications-list">
              {publicationsList.map((pub) => (
                <TiltCard key={pub.id} maxTilt={6} scale={1.015}>
                  <article className="publication-card">
                    <div className="pub-card-header">
                      <span className="pub-type-badge font-mono">
                        <BookOpen size={13} />
                        <span>{pub.type}</span>
                      </span>
                      <span className="pub-date font-mono">
                        <Calendar size={12} />
                        <span>{pub.month} {pub.year}</span>
                      </span>
                    </div>

                    <h3 className="pub-title font-heading">{pub.title}</h3>

                    <div className="pub-authors font-body">
                      <Users size={13} className="pub-authors-icon" />
                      <span>
                        {pub.authors.map((author, i) => (
                          <span key={author}>
                            <span className={author === "Kamana Agrawal" ? "author-highlight" : ""}>
                              {author}
                            </span>
                            {i < pub.authors.length - 1 && ", "}
                          </span>
                        ))}
                      </span>
                    </div>

                    <div className="pub-journal font-mono">
                      <Bookmark size={13} />
                      <span>{pub.journal} — {pub.volume}</span>
                    </div>

                    <p className="pub-abstract font-body">{pub.abstract}</p>

                    <div className="pub-topics-row font-mono">
                      {pub.topics.map((topic) => (
                        <span key={topic} className="tag-chip tag-chip--mono">
                          {topic}
                        </span>
                      ))}
                    </div>

                    <div className="pub-links-row font-mono">
                      {pub.journalUrl && (
                        <a
                          href={pub.journalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pub-link"
                        >
                          <BookOpen size={13} />
                          <span>Journal</span>
                          <ArrowUpRight size={12} />
                        </a>
                      )}
                      {pub.researchGateUrl && (
                        <a
                          href={pub.researchGateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pub-link"
                        >
                          <FileText size={13} />
                          <span>ResearchGate</span>
                          <ArrowUpRight size={12} />
                        </a>
                      )}
                    </div>
                  </article>
                </TiltCard>
              ))}
            </div>
          </div>

          {/* Right Column: Verified Credentials List */}
          <div className="credentials-col" id="certifications">
            <div className="sub-header-row">
              <h2 className="publications-title font-heading">
                <Award size={20} className="text-accent" />
                <span>Verified <span className="highlight-lime">Certifications</span></span>
              </h2>
            </div>

            <div className="compact-certs-list">
              {certs.map((cert) => (
                <div key={cert.id} className="compact-cert-card font-body">
                  <div className="cert-top font-mono">
                    <span className="cert-org">{cert.organization}</span>
                    <span className="cert-year">{cert.year}</span>
                  </div>

                  <h4 className="cert-name font-heading">{cert.name}</h4>

                  <div className="cert-bottom font-mono">
                    <button
                      type="button"
                      onClick={() => setSelectedCert(cert)}
                      className="btn-open-cert font-mono"
                    >
                      <Eye size={12} />
                      <span>View Certificate &amp; Credential</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Certificate Lightbox Modal */}
      {selectedCert && (
        <CertificateModal
          cert={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </>
  );
}
