import React, { useState, useEffect } from 'react';
import { Terminal, Play, RotateCcw, Cpu, Zap, Activity, Layers, Server, CheckCircle2, ShieldCheck } from 'lucide-react';
import './AiSystemArchitecture.css';

export function AiSystemArchitecture() {
  const [activeTab, setActiveTab] = useState('llm-stream');
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamedTokens, setStreamedTokens] = useState('');
  const [streamSpeed, setStreamSpeed] = useState('128 tok/s');
  const [latency, setLatency] = useState('42 ms');

  // Simulated live IoT telemetry states
  const [telemetryValues, setTelemetryValues] = useState({
    temp: 31.4,
    humidity: 58,
    light: 840,
    dust: 0.04,
    score: 94,
    status: 'Optimal'
  });

  const fullPromptResponse = `> Initializing Skopos AI Pipeline...
[FastAPI] Contract validated via Pydantic schema.
[Groq LLM Engine] Swappable client connected: llama-3.3-70b-versatile
[SSE Stream] Broadcasting roadmap payload to client...

1. Foundation Tier (Months 1-2):
   • Deep-dive Data Structures & Algorithms in C / Python
   • Master Async REST APIs & layered backend architecture

2. Intelligent Systems Tier (Months 3-4):
   • LLM Application Development & Structured Prompt Contracts
   • Microcontroller telemetry (ESP32) & local inference modeling

3. Cloud Deployment Tier (Months 5-6):
   • Multi-stage Docker containerization & AWS EC2 deployment
   • Automated testing suite (Pytest) & CI/CD pipeline

[Status] Stream complete · 25/25 automated unit tests passed.`;

  const handleStartStream = () => {
    if (isStreaming) return;
    setIsStreaming(true);
    setStreamedTokens('');
    
    let currentIdx = 0;
    const chars = fullPromptResponse.split('');
    
    const interval = setInterval(() => {
      if (currentIdx < chars.length) {
        setStreamedTokens((prev) => prev + chars[currentIdx]);
        currentIdx++;
      } else {
        clearInterval(interval);
        setIsStreaming(false);
      }
    }, 12);
  };

  const handleResetStream = () => {
    setIsStreaming(false);
    setStreamedTokens('');
  };

  // Live IoT telemetry jitter simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetryValues({
        temp: +(30 + Math.random() * 3).toFixed(1),
        humidity: Math.floor(55 + Math.random() * 8),
        light: Math.floor(820 + Math.random() * 50),
        dust: +(0.03 + Math.random() * 0.02).toFixed(2),
        score: Math.floor(92 + Math.random() * 6),
        status: 'Optimal'
      });
    }, 2400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ai-system-command-center">
      {/* Top Bar / Mode Switcher */}
      <div className="command-header-bar font-mono">
        <div className="command-title-group">
          <span className="live-status-pulse" />
          <span className="command-title">AI &amp; Intelligent Systems Lab</span>
        </div>

        <div className="command-tab-buttons">
          <button
            type="button"
            className={`cmd-tab-btn ${activeTab === 'llm-stream' ? 'active' : ''}`}
            onClick={() => setActiveTab('llm-stream')}
          >
            <Zap size={14} />
            <span>LLM Stream Engine</span>
          </button>
          <button
            type="button"
            className={`cmd-tab-btn ${activeTab === 'iot-telemetry' ? 'active' : ''}`}
            onClick={() => setActiveTab('iot-telemetry')}
          >
            <Cpu size={14} />
            <span>IoT Telemetry Hub</span>
          </button>
          <button
            type="button"
            className={`cmd-tab-btn ${activeTab === 'architecture' ? 'active' : ''}`}
            onClick={() => setActiveTab('architecture')}
          >
            <Layers size={14} />
            <span>System Pipeline</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Stage Body */}
      <div className="command-stage-body">
        {/* Tab 1: LLM Stream Engine */}
        {activeTab === 'llm-stream' && (
          <div className="llm-stream-stage">
            <div className="stage-controls-bar font-mono">
              <div className="metrics-group">
                <span className="metric-chip">
                  <Activity size={12} className="text-accent" />
                  <span>Speed: <strong>{streamSpeed}</strong></span>
                </span>
                <span className="metric-chip">
                  <Zap size={12} className="text-accent" />
                  <span>Latency: <strong>{latency}</strong></span>
                </span>
                <span className="metric-chip">
                  <ShieldCheck size={12} className="text-accent" />
                  <span>Provider: <strong>Groq API</strong></span>
                </span>
              </div>

              <div className="action-buttons-group">
                <button
                  type="button"
                  onClick={handleStartStream}
                  disabled={isStreaming}
                  className="btn-trigger-stream font-mono"
                >
                  <Play size={13} />
                  <span>{isStreaming ? 'Streaming...' : 'Run Inference Stream'}</span>
                </button>
                {streamedTokens && (
                  <button
                    type="button"
                    onClick={handleResetStream}
                    className="btn-reset-stream font-mono"
                    title="Reset terminal"
                  >
                    <RotateCcw size={13} />
                  </button>
                )}
              </div>
            </div>

            <div className="terminal-screen font-mono">
              <div className="terminal-header">
                <span className="terminal-dot dot-red" />
                <span className="terminal-dot dot-yellow" />
                <span className="terminal-dot dot-green" />
                <span className="terminal-name">skopos-fastapi-sse-streamer</span>
              </div>

              <div className="terminal-output">
                {streamedTokens ? (
                  <pre className="stream-pre">{streamedTokens}<span className="cursor-blink">_</span></pre>
                ) : (
                  <div className="terminal-idle-state">
                    <p className="idle-prompt font-mono">
                      $ click <strong>"Run Inference Stream"</strong> to simulate real-time Server-Sent Events roadmap generation...
                    </p>
                    <div className="idle-tags font-mono">
                      <span>• Pydantic Schema Validation</span>
                      <span>• Swappable AI Engine</span>
                      <span>• SSE Real-Time Protocol</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: IoT Telemetry Hub */}
        {activeTab === 'iot-telemetry' && (
          <div className="iot-telemetry-stage">
            <div className="iot-grid-dashboard">
              {/* Telemetry Gauge 1 */}
              <div className="iot-metric-box">
                <div className="iot-box-header font-mono">
                  <span>Temperature</span>
                  <span className="status-dot-lime" />
                </div>
                <div className="iot-big-number font-heading">
                  {telemetryValues.temp}<span className="unit">°C</span>
                </div>
                <div className="iot-bar-track">
                  <div className="iot-bar-fill" style={{ width: `${(telemetryValues.temp / 50) * 100}%` }} />
                </div>
              </div>

              {/* Telemetry Gauge 2 */}
              <div className="iot-metric-box">
                <div className="iot-box-header font-mono">
                  <span>Humidity</span>
                  <span className="status-dot-lime" />
                </div>
                <div className="iot-big-number font-heading">
                  {telemetryValues.humidity}<span className="unit">%</span>
                </div>
                <div className="iot-bar-track">
                  <div className="iot-bar-fill" style={{ width: `${telemetryValues.humidity}%` }} />
                </div>
              </div>

              {/* Telemetry Gauge 3 */}
              <div className="iot-metric-box">
                <div className="iot-box-header font-mono">
                  <span>Light Intensity</span>
                  <span className="status-dot-lime" />
                </div>
                <div className="iot-big-number font-heading">
                  {telemetryValues.light}<span className="unit"> Lux</span>
                </div>
                <div className="iot-bar-track">
                  <div className="iot-bar-fill" style={{ width: `${(telemetryValues.light / 1000) * 100}%` }} />
                </div>
              </div>

              {/* Telemetry Gauge 4: Model Prediction Score */}
              <div className="iot-metric-box box-highlight">
                <div className="iot-box-header font-mono">
                  <span>Predictive Score</span>
                  <CheckCircle2 size={14} className="text-accent" />
                </div>
                <div className="iot-big-number font-heading text-accent">
                  {telemetryValues.score}<span className="unit">/100</span>
                </div>
                <div className="iot-classification font-mono">
                  Operating Status: <strong>{telemetryValues.status}</strong>
                </div>
              </div>
            </div>

            <div className="iot-bottom-note font-mono">
              <span className="text-accent">● ESP32 Hardware Telemetry</span> — Running on-device regression inference without cloud latency.
            </div>
          </div>
        )}

        {/* Tab 3: System Pipeline Flow */}
        {activeTab === 'architecture' && (
          <div className="pipeline-stage">
            <div className="pipeline-steps-row">
              <div className="pipe-step">
                <div className="pipe-num font-mono">01</div>
                <h4 className="pipe-title font-heading">Intake &amp; Validation</h4>
                <p className="pipe-desc font-body">Pydantic validation ensuring typed structured inputs.</p>
              </div>

              <div className="pipe-connector font-mono">→</div>

              <div className="pipe-step">
                <div className="pipe-num font-mono">02</div>
                <h4 className="pipe-title font-heading">AI Client Contract</h4>
                <p className="pipe-desc font-body">Swappable Groq / Claude client abstraction layer.</p>
              </div>

              <div className="pipe-connector font-mono">→</div>

              <div className="pipe-step">
                <div className="pipe-num font-mono">03</div>
                <h4 className="pipe-title font-heading">SSE Live Streaming</h4>
                <p className="pipe-desc font-body">Server-Sent Events broadcasting tokens chunk-by-chunk.</p>
              </div>

              <div className="pipe-connector font-mono">→</div>

              <div className="pipe-step">
                <div className="pipe-num font-mono">04</div>
                <h4 className="pipe-title font-heading">Docker &amp; AWS Deploy</h4>
                <p className="pipe-desc font-body">Containerized microservice hosted on AWS EC2.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
