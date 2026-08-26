import React from 'react';
import { X, Award, ExternalLink, Download, CheckCircle2, ShieldCheck, FileText, Image as ImageIcon } from 'lucide-react';
import './CertificateModal.css';

export function CertificateModal({ cert, onClose }) {
  if (!cert) return null;

  const isPdf = cert.documentUrl && cert.documentUrl.toLowerCase().endsWith('.pdf');
  const isImage = cert.documentUrl && (
    cert.documentUrl.toLowerCase().endsWith('.png') ||
    cert.documentUrl.toLowerCase().endsWith('.jpg') ||
    cert.documentUrl.toLowerCase().endsWith('.jpeg') ||
    cert.documentUrl.toLowerCase().endsWith('.webp')
  );

  return (
    <div className="cert-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="cert-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="cert-modal-header">
          <div className="cert-modal-badge font-mono">
            <ShieldCheck size={16} className="text-accent" />
            <span>Verified Academic Credential</span>
          </div>

          <button
            type="button"
            className="cert-modal-close"
            onClick={onClose}
            aria-label="Close certificate modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="cert-modal-body">
          {/* Certificate Document Display */}
          <div className="cert-document-stage">
            {cert.documentUrl ? (
              isPdf ? (
                <iframe
                  src={cert.documentUrl}
                  title={cert.name}
                  className="cert-iframe-preview"
                />
              ) : isImage ? (
                <img
                  src={cert.documentUrl}
                  alt={cert.name}
                  className="cert-image-preview"
                />
              ) : (
                <iframe
                  src={cert.documentUrl}
                  title={cert.name}
                  className="cert-iframe-preview"
                />
              )
            ) : (
              /* Verified Digital Certificate Seal Graphic */
              <div className="cert-digital-certificate">
                <div className="cert-seal-outer">
                  <div className="cert-seal-inner">
                    <Award size={48} className="text-accent" />
                  </div>
                </div>

                <div className="cert-seal-text">
                  <span className="seal-org font-heading">{cert.organization}</span>
                  <h3 className="seal-course font-heading">{cert.name}</h3>
                  <span className="seal-recipient font-mono">Awarded to: <strong>Kamana Agrawal</strong></span>
                  <span className="seal-issuer font-mono">{cert.issuer} · {cert.year}</span>
                </div>

                <div className="cert-seal-footer font-mono">
                  <span className="seal-verified-chip">
                    <CheckCircle2 size={13} />
                    <span>Verified Authenticity</span>
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Credential Details Column */}
          <div className="cert-details-column">
            <div className="cert-details-top">
              <span className="cert-issuer-label font-mono">{cert.issuer}</span>
              <h3 className="cert-title font-heading">{cert.name}</h3>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginTop: '4px' }}>
                <span className="cert-year-tag font-mono">Issued: {cert.year}</span>
                {cert.credentialId && (
                  <span className="cert-year-tag font-mono" style={{ color: 'var(--accent)' }}>
                    ID: {cert.credentialId}
                  </span>
                )}
              </div>
            </div>

            <div className="cert-skills-block">
              <span className="block-label font-mono">VERIFIED COMPETENCIES</span>
              <div className="cert-skills-tags font-mono">
                {cert.skillsCovered.map((skill) => (
                  <span key={skill} className="tag-chip tag-chip--mono">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="cert-actions-row font-mono">
              {cert.documentUrl && (
                <a
                  href={cert.documentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cert-download"
                >
                  <Download size={14} />
                  <span>Download File</span>
                </a>
              )}

              {cert.verificationUrl && (
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cert-external"
                >
                  <span>Open Verification Link</span>
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
