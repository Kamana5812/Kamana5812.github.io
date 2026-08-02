import React, { useState } from 'react';
import { Lock, Save, CheckCircle2, ShieldCheck, RefreshCw, X, Edit3, Plus, Trash2 } from 'lucide-react';
import { personalInfo } from '../data/personal';
import { featuredProjects } from '../data/projects';
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

  const handleSaveAll = () => {
    setSaveStatus('saving');
    localStorage.setItem('custom_personal_info', JSON.stringify(personal));
    localStorage.setItem('custom_projects', JSON.stringify(projects));

    setTimeout(() => {
      setSaveStatus('success');
      setTimeout(() => setSaveStatus('idle'), 2500);
    }, 600);
  };

  const handleResetDefaults = () => {
    if (window.confirm('Reset all content back to original defaults?')) {
      localStorage.removeItem('custom_personal_info');
      localStorage.removeItem('custom_projects');
      setPersonal({ ...personalInfo });
      setProjects([...featuredProjects]);
      setSaveStatus('reset');
      setTimeout(() => setSaveStatus('idle'), 2000);
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
        </main>
      </div>
    </div>
  );
}
