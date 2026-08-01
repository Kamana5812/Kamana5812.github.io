import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { useInView } from '../../hooks/useInView';
import './Contact.css';

export function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`contact-section ${isInView ? 'is-visible' : ''}`}
      aria-label="Contact Section"
    >
      {/* Section Marker */}
      <div className="section-marker-header font-mono">
        <span className="marker-label">// LET'S CONNECT</span>
      </div>

      <div className="contact-main-wrapper">
        <h2 className="contact-heading font-heading">
          Have an idea?<br />
          Let's build <span className="highlight-lime">something great.</span>
        </h2>

        <p className="contact-description font-body">
          I'm always open to discussing interesting projects, collaborations, internships and opportunities to build meaningful digital experiences.
        </p>

        {/* Action Button & Direct Channels matching Reference Image */}
        <div className="contact-actions-row">
          <a href={`mailto:${personalInfo.email}`} className="btn-primary-lime font-body">
            <span>Say Hello 👋</span>
          </a>

          <div className="contact-social-row font-mono">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-direct-link"
            >
              <Github size={18} />
              <span>GitHub</span>
              <ArrowUpRight size={14} className="arrow-subtle" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-direct-link"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
              <ArrowUpRight size={14} className="arrow-subtle" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="social-direct-link"
            >
              <Mail size={18} />
              <span>Email</span>
              <ArrowUpRight size={14} className="arrow-subtle" />
            </a>
          </div>
        </div>

        {/* Direct Form Box */}
        <div className="contact-form-frame">
          <div className="form-frame-top font-mono">
            <span>DIRECT INQUIRY FORM</span>
            <span className="honest-placeholder">Backend Config Pending</span>
          </div>

          {formStatus === 'success' ? (
            <div className="form-success-box font-body" role="alert" aria-live="polite">
              <CheckCircle2 size={24} className="success-icon" />
              <div>
                <h4 className="font-heading">Message Recorded</h4>
                <p>
                  Thank you! Your message was recorded locally. (Form service parameters can be connected once live email settings are provided).
                </p>
                <button
                  type="button"
                  className="reset-btn font-mono"
                  onClick={() => setFormStatus('idle')}
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label font-mono">
                    YOUR NAME <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    className={`form-input font-body ${errors.name ? 'has-error' : ''}`}
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={handleChange}
                    aria-invalid={errors.name ? 'true' : 'false'}
                  />
                  {errors.name && (
                    <span className="error-msg font-mono" role="alert">
                      <AlertCircle size={14} /> {errors.name}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label font-mono">
                    EMAIL ADDRESS <span className="req">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    className={`form-input font-body ${errors.email ? 'has-error' : ''}`}
                    placeholder="alex@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={errors.email ? 'true' : 'false'}
                  />
                  {errors.email && (
                    <span className="error-msg font-mono" role="alert">
                      <AlertCircle size={14} /> {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label font-mono">
                  MESSAGE <span className="req">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="4"
                  className={`form-textarea font-body ${errors.message ? 'has-error' : ''}`}
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  aria-invalid={errors.message ? 'true' : 'false'}
                ></textarea>
                {errors.message && (
                  <span className="error-msg font-mono" role="alert">
                    <AlertCircle size={14} /> {errors.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="btn-form-submit font-body"
              >
                <Send size={16} />
                <span>{formStatus === 'submitting' ? 'Sending Message...' : 'Send Inquiry'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
