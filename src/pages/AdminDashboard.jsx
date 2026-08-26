import React, { useState } from 'react';
import { Lock, Save, CheckCircle2, ShieldCheck, RefreshCw, X, Edit3, Plus, Trash2, Award, Wrench, Briefcase, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/personal';
import { featuredProjects } from '../data/projects';
import { skillCategories, aiExplorationAreas } from '../data/skills';
import { certificationsList } from '../data/certifications';
import { experienceTimeline } from '../data/experience';
import './AdminDashboard.css';

export function AdminDashboard({ onClose }) {
  const [pin, setPin] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem('portfolio_admin_auth') === 'true'
  );
  const [authError, setAuthError] = useState('');

  const [activeTab, setActiveTab] = useState('personal');

  // Editable States
  const [personal, setPersonal] = useState(() => {
    const saved = localStorage.getItem('custom_personal_info');
    return saved ? JSON.parse(saved) : { ...personalInfo };
  });

  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem('custom_projects');
    return saved ? JSON.parse(saved) : [...featuredProjects];
  });

  const [skills, setSkills] = useState(() => {
    const saved = localStorage.getItem('custom_skills');
    return saved ? JSON.parse(saved) : [...skillCategories];
  });

  const [certs, setCerts] = useState(() => {
    const saved = localStorage.getItem('custom_certifications');
    return saved ? JSON.parse(saved) : [...certificationsList];
  });

  const [experiences, setExperiences] = useState(() => {
    const saved = localStorage.getItem('custom_experience');
    return saved ? JSON.parse(saved) : [...experienceTimeline];
  });

  const [aiTopics, setAiTopics] = useState(() => {
    const saved = localStorage.getItem('custom_ai_exploration');
    return saved ? JSON.parse(saved) : [...aiExplorationAreas];
  });

  const [saveStatus, setSaveStatus] = useState('idle');

  const handleLogin = (e) => {
    e.preventDefault();
    if (pin === '8330' || pin === '1234') {
      setIsAuthenticated(true);
      sessionStorage.setItem('portfolio_admin_auth', 'true');
      setAuthError('');
    } else {
      setAuthError('Invalid Admin Passcode. Please try again.');
    }
  };

  const handleSavePersonal = (e) => {
    const { name, value } = e.target;
    setPersonal((prev) => ({ ...prev, [name]: value }));
  };

  const handleProjectChange = (index, field, value) => {
    const updated = [...projects];
    updated[index] = { ...updated[index], [field]: value };
    setProjects(updated);
  };

  const handleSkillChange = (index, field, value) => {
    const updated = [...skills];
    if (field === 'skills') {
      updated[index].skills = value.split(',').map((s) => s.trim());
    } else {
      updated[index][field] = value;
    }
    setSkills(updated);
  };

  const handleCertChange = (index, field, value) => {
    const updated = [...certs];
    if (field === 'skillsCovered') {
      updated[index].skillsCovered = value.split(',').map((s) => s.trim());
    } else {
      updated[index][field] = value;
    }
    setCerts(updated);
  };

  const handleExpChange = (index, field, value) => {
    const updated = [...experiences];
    if (field === 'technologies' || field === 'responsibilities') {
      updated[index][field] = value.split(',').map((s) => s.trim());
    } else {
      updated[index][field] = value;
    }
    setExperiences(updated);
  };

  const handleAiTopicChange = (index, field, value) => {
    const updated = [...aiTopics];
    updated[index][field] = value;
    setAiTopics(updated);
  };

  const handleAddCert = () => {
    const newCert = {
      id: `cert-${Date.now()}`,
      name: 'New Certification Title',
      organization: 'Issuer / Organization',
      year: new Date().getFullYear(),
      verificationUrl: '',
      skillsCovered: ['Skill 1', 'Skill 2']
    };
    setCerts([...certs, newCert]);
  };

  const handleDeleteCert = (index) => {
    if (window.confirm('Delete this certification card?')) {
      setCerts(certs.filter((_, i) => i !== index));
    }
  };

  const handleSaveAll = () => {
    setSaveStatus('saving');
    localStorage.setItem('custom_personal_info', JSON.stringify(personal));
    localStorage.setItem('custom_projects', JSON.stringify(projects));
    localStorage.setItem('custom_skills', JSON.stringify(skills));
    localStorage.setItem('custom_certifications', JSON.stringify(certs));
    localStorage.setItem('custom_experience', JSON.stringify(experiences));
    localStorage.setItem('custom_ai_exploration', JSON.stringify(aiTopics));

    setTimeout(() => {
      setSaveStatus('success');
      setTimeout(() => {
        setSaveStatus('idle');
        window.location.reload();
      }, 1000);
    }, 600);
  };

  const handleResetDefaults = () => {
    if (window.confirm('Reset all content back to original defaults?')) {
      localStorage.removeItem('custom_personal_info');
      localStorage.removeItem('custom_projects');
      localStorage.removeItem('custom_skills');
      localStorage.removeItem('custom_certifications');
      localStorage.removeItem('custom_experience');
      localStorage.removeItem('custom_ai_exploration');
      setPersonal({ ...personalInfo });
      setProjects([...featuredProjects]);
      setSkills([...skillCategories]);
      setCerts([...certificationsList]);
      setExperiences([...experienceTimeline]);
      setAiTopics([...aiExplorationAreas]);
      setSaveStatus('reset');
      setTimeout(() => {
        setSaveStatus('idle');
        window.location.reload();
      }, 1000);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="admin-login-overlay font-body">
        <div className="admin-login-card">
          <button className="admin-close-btn" onClick={onClose} aria-label="Close Admin">
            <X size={20} />
          </button>

          <div className="admin-icon-wrapper">
            <ShieldCheck size={32} className="admin-icon-lime" />
          </div>

          <h3 className="font-heading admin-login-title">Content Manager Login</h3>
          <p className="admin-login-desc font-mono">
            Enter your secret Admin PIN to manage portfolio content live on your site.
          </p>

          <form onSubmit={handleLogin} className="admin-login-form">
            <div className="form-group">
              <label htmlFor="admin-pin" className="form-label font-mono">
                ADMIN PASSCODE <span className="req">*</span>
              </label>
              <input
                type="password"
                id="admin-pin"
                className="form-input font-mono"
                placeholder="Enter PIN (Default: 8330)"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                autoFocus
              />
              {authError && <span className="error-msg font-mono">{authError}</span>}
            </div>

            <button type="submit" className="btn-admin-primary font-mono">
              <Lock size={16} />
              <span>Unlock Admin Panel</span>
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard-container font-body">
      {/* Top Admin Header */}
      <header className="admin-topbar font-mono">
        <div className="admin-brand">
          <ShieldCheck size={20} className="admin-icon-lime" />
          <span>PORTFOLIO CONTENT MANAGER</span>
          <span className="admin-badge">LIVE CMS ACTIVE</span>
        </div>

        <div className="admin-top-actions">
          <button className="btn-admin-secondary" onClick={handleResetDefaults}>
            <RefreshCw size={14} />
            <span>Reset Defaults</span>
          </button>

          <button className="btn-admin-primary" onClick={handleSaveAll} disabled={saveStatus === 'saving'}>
            {saveStatus === 'saving' ? (
              <RefreshCw size={14} className="spin" />
            ) : saveStatus === 'success' ? (
              <CheckCircle2 size={14} />
            ) : (
              <Save size={14} />
            )}
            <span>{saveStatus === 'saving' ? 'Publishing...' : saveStatus === 'success' ? 'Published!' : 'Publish Changes'}</span>
          </button>

          <button className="admin-close-btn" onClick={onClose} aria-label="Exit Admin">
            <X size={20} />
          </button>
        </div>
      </header>

      {/* Main Admin Sidebar & Content Area */}
      <div className="admin-main-body">
        {/* Left Navigation Tabs */}
        <aside className="admin-sidebar font-mono">
          <button
            className={`admin-tab-btn ${activeTab === 'personal' ? 'active' : ''}`}
            onClick={() => setActiveTab('personal')}
          >
            <Edit3 size={16} />
            <span>Personal Bio & Info</span>
          </button>

          <button
            className={`admin-tab-btn ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            <Edit3 size={16} />
            <span>Featured Projects</span>
          </button>

          <button
            className={`admin-tab-btn ${activeTab === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            <Wrench size={16} />
            <span>Skills & Tools</span>
          </button>

          <button
            className={`admin-tab-btn ${activeTab === 'certifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('certifications')}
          >
            <Award size={16} />
            <span>Certifications</span>
          </button>

          <button
            className={`admin-tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            <Briefcase size={16} />
            <span>Work Experience</span>
          </button>

          <button
            className={`admin-tab-btn ${activeTab === 'ai' ? 'active' : ''}`}
            onClick={() => setActiveTab('ai')}
          >
            <Sparkles size={16} />
            <span>AI Focus Areas</span>
          </button>
        </aside>

        {/* Right Editor Form Panel */}
        <main className="admin-editor-panel">
          {activeTab === 'personal' && (
            <div className="admin-section-box">
              <h3 className="font-heading admin-section-title">Edit Personal Details</h3>

              <div className="admin-form-grid">
                <div className="form-group">
                  <label className="form-label font-mono">FULL NAME</label>
                  <input
                    type="text"
                    name="name"
                    value={personal.name || ''}
                    onChange={handleSavePersonal}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label font-mono">PRIMARY TITLE</label>
                  <input
                    type="text"
                    name="primaryTitle"
                    value={personal.primaryTitle || ''}
                    onChange={handleSavePersonal}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label font-mono">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    name="email"
                    value={personal.email || ''}
                    onChange={handleSavePersonal}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label font-mono">EDUCATION STATUS</label>
                  <input
                    type="text"
                    name="educationStatus"
                    value={personal.educationStatus || ''}
                    onChange={handleSavePersonal}
                    className="form-input"
                  />
                </div>

                <div className="form-group full-width">
                  <label className="form-label font-mono">SUPPORTING HERO LINE</label>
                  <textarea
                    rows="3"
                    name="supportingLine"
                    value={personal.supportingLine || ''}
                    onChange={handleSavePersonal}
                    className="form-textarea"
                  ></textarea>
                </div>

                <div className="form-group full-width">
                  <label className="form-label font-mono">ABOUT ME LEAD HEADLINE</label>
                  <input
                    type="text"
                    name="aboutLead"
                    value={personal.aboutLead || ''}
                    onChange={handleSavePersonal}
                    className="form-input"
                  />
                </div>

                <div className="form-group full-width">
                  <label className="form-label font-mono">ABOUT ME PARAGRAPH 1</label>
                  <textarea
                    rows="3"
                    name="aboutBody1"
                    value={personal.aboutBody1 || ''}
                    onChange={handleSavePersonal}
                    className="form-textarea"
                  ></textarea>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="admin-section-box">
              <h3 className="font-heading admin-section-title">Edit Featured Projects</h3>

              {projects.map((proj, idx) => (
                <div key={proj.id || idx} className="admin-project-card">
                  <h4 className="font-heading project-card-title">
                    Project #{idx + 1}: {proj.title}
                  </h4>

                  <div className="admin-form-grid">
                    <div className="form-group">
                      <label className="form-label font-mono">PROJECT TITLE</label>
                      <input
                        type="text"
                        value={proj.title || ''}
                        onChange={(e) => handleProjectChange(idx, 'title', e.target.value)}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label font-mono">CATEGORY / TYPE</label>
                      <input
                        type="text"
                        value={proj.category || ''}
                        onChange={(e) => handleProjectChange(idx, 'category', e.target.value)}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group full-width">
                      <label className="form-label font-mono">TAGLINE</label>
                      <input
                        type="text"
                        value={proj.tagline || ''}
                        onChange={(e) => handleProjectChange(idx, 'tagline', e.target.value)}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group full-width">
                      <label className="form-label font-mono">DESCRIPTION</label>
                      <textarea
                        rows="3"
                        value={proj.description || ''}
                        onChange={(e) => handleProjectChange(idx, 'description', e.target.value)}
                        className="form-textarea"
                      ></textarea>
                    </div>

                    <div className="form-group">
                      <label className="form-label font-mono">GITHUB URL</label>
                      <input
                        type="text"
                        value={proj.github || ''}
                        onChange={(e) => handleProjectChange(idx, 'github', e.target.value)}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label font-mono">LIVE DEMO URL</label>
                      <input
                        type="text"
                        value={proj.liveDemo || ''}
                        onChange={(e) => handleProjectChange(idx, 'liveDemo', e.target.value)}
                        className="form-input"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="admin-section-box">
              <h3 className="font-heading admin-section-title">Edit Skills & Tools</h3>

              {skills.map((cat, idx) => (
                <div key={cat.category || idx} className="admin-project-card">
                  <h4 className="font-heading project-card-title">
                    Category: {cat.category}
                  </h4>

                  <div className="admin-form-grid">
                    <div className="form-group">
                      <label className="form-label font-mono">CATEGORY NAME</label>
                      <input
                        type="text"
                        value={cat.category || ''}
                        onChange={(e) => handleSkillChange(idx, 'category', e.target.value)}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group full-width">
                      <label className="form-label font-mono">SKILLS LIST (COMMA SEPARATED)</label>
                      <input
                        type="text"
                        value={Array.isArray(cat.skills) ? cat.skills.join(', ') : ''}
                        onChange={(e) => handleSkillChange(idx, 'skills', e.target.value)}
                        className="form-input"
                        placeholder="React.js, JavaScript, HTML5, CSS3"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'certifications' && (
            <div className="admin-section-box">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 className="font-heading admin-section-title" style={{ marginBottom: 0 }}>Edit Certifications</h3>
                <button className="btn-admin-primary font-mono" onClick={handleAddCert}>
                  <Plus size={14} /> <span>Add Certificate</span>
                </button>
              </div>

              {certs.map((cert, idx) => (
                <div key={cert.id || idx} className="admin-project-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h4 className="font-heading project-card-title" style={{ margin: 0 }}>
                      Certificate #{idx + 1}: {cert.name}
                    </h4>
                    <button
                      className="btn-admin-secondary"
                      onClick={() => handleDeleteCert(idx)}
                      style={{ color: '#ff6b6b', borderColor: '#ff6b6b' }}
                    >
                      <Trash2 size={14} /> <span>Delete</span>
                    </button>
                  </div>

                  <div className="admin-form-grid">
                    <div className="form-group full-width">
                      <label className="form-label font-mono">CERTIFICATION NAME</label>
                      <input
                        type="text"
                        value={cert.name || ''}
                        onChange={(e) => handleCertChange(idx, 'name', e.target.value)}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label font-mono">ISSUER / ORGANIZATION</label>
                      <input
                        type="text"
                        value={cert.organization || ''}
                        onChange={(e) => handleCertChange(idx, 'organization', e.target.value)}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label font-mono">YEAR</label>
                      <input
                        type="number"
                        value={cert.year || ''}
                        onChange={(e) => handleCertChange(idx, 'year', e.target.value)}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group full-width">
                      <label className="form-label font-mono">VERIFICATION URL</label>
                      <input
                        type="text"
                        value={cert.verificationUrl || ''}
                        onChange={(e) => handleCertChange(idx, 'verificationUrl', e.target.value)}
                        className="form-input"
                        placeholder="https://coursera.org/verify/..."
                      />
                    </div>

                    <div className="form-group full-width">
                      <label className="form-label font-mono">DOCUMENT / PDF / IMAGE URL</label>
                      <input
                        type="text"
                        value={cert.documentUrl || ''}
                        onChange={(e) => handleCertChange(idx, 'documentUrl', e.target.value)}
                        className="form-input"
                        placeholder="e.g. /certificates/coursera.pdf or image link"
                      />
                    </div>

                    <div className="form-group full-width">
                      <label className="form-label font-mono">SKILLS COVERED (COMMA SEPARATED)</label>
                      <input
                        type="text"
                        value={Array.isArray(cert.skillsCovered) ? cert.skillsCovered.join(', ') : ''}
                        onChange={(e) => handleCertChange(idx, 'skillsCovered', e.target.value)}
                        className="form-input"
                        placeholder="Python, Linux, Hardware"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="admin-section-box">
              <h3 className="font-heading admin-section-title">Edit Work Experience & Internships</h3>

              {experiences.map((exp, idx) => (
                <div key={exp.id || idx} className="admin-project-card">
                  <h4 className="font-heading project-card-title">
                    Role #{idx + 1}: {exp.title} ({exp.organization})
                  </h4>

                  <div className="admin-form-grid">
                    <div className="form-group">
                      <label className="form-label font-mono">ROLE TITLE</label>
                      <input
                        type="text"
                        value={exp.title || ''}
                        onChange={(e) => handleExpChange(idx, 'title', e.target.value)}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label font-mono">COMPANY / ORGANIZATION</label>
                      <input
                        type="text"
                        value={exp.organization || ''}
                        onChange={(e) => handleExpChange(idx, 'organization', e.target.value)}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label font-mono">DURATION</label>
                      <input
                        type="text"
                        value={exp.duration || ''}
                        onChange={(e) => handleExpChange(idx, 'duration', e.target.value)}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label font-mono">LOCATION</label>
                      <input
                        type="text"
                        value={exp.location || ''}
                        onChange={(e) => handleExpChange(idx, 'location', e.target.value)}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group full-width">
                      <label className="form-label font-mono">SUMMARY</label>
                      <textarea
                        rows="2"
                        value={exp.summary || ''}
                        onChange={(e) => handleExpChange(idx, 'summary', e.target.value)}
                        className="form-textarea"
                      ></textarea>
                    </div>

                    <div className="form-group full-width">
                      <label className="form-label font-mono">TECHNOLOGIES (COMMA SEPARATED)</label>
                      <input
                        type="text"
                        value={Array.isArray(exp.technologies) ? exp.technologies.join(', ') : ''}
                        onChange={(e) => handleExpChange(idx, 'technologies', e.target.value)}
                        className="form-input"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'ai' && (
            <div className="admin-section-box">
              <h3 className="font-heading admin-section-title">Edit AI Exploration Focus Areas</h3>

              {aiTopics.map((topic, idx) => (
                <div key={topic.topic || idx} className="admin-project-card">
                  <h4 className="font-heading project-card-title">
                    Topic #{idx + 1}: {topic.topic}
                  </h4>

                  <div className="admin-form-grid">
                    <div className="form-group full-width">
                      <label className="form-label font-mono">TOPIC NAME</label>
                      <input
                        type="text"
                        value={topic.topic || ''}
                        onChange={(e) => handleAiTopicChange(idx, 'topic', e.target.value)}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group full-width">
                      <label className="form-label font-mono">STATUS BADGE</label>
                      <input
                        type="text"
                        value={topic.status || ''}
                        onChange={(e) => handleAiTopicChange(idx, 'status', e.target.value)}
                        className="form-input"
                        placeholder="Certified, Active, Exploring, In Progress"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
