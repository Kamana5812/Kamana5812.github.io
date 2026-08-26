import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import './HeroWorkspace3D.css';

export function HeroWorkspace3D() {
  const mountRef = useRef(null);
  const [activeCodeTab, setActiveCodeTab] = useState('App.jsx');

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth || 540;
    const height = mount.clientHeight || 460;

    // Three.js Scene Setup for 3D Desk Elements
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(18, 16, 26);
    camera.lookAt(0, 2, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const limePointLight = new THREE.PointLight(0xb7ff00, 2.5, 50);
    limePointLight.position.set(-6, 12, 10);
    scene.add(limePointLight);

    const cyanPointLight = new THREE.PointLight(0x00e5ff, 1.2, 50);
    cyanPointLight.position.set(12, 8, -6);
    scene.add(cyanPointLight);

    // Desk Base Surface Group
    const deskGroup = new THREE.Group();
    scene.add(deskGroup);

    // 1. Holographic AI Brain Pedestal (Glowing Glass Cylinder + Hologram)
    const pedestalGeo = new THREE.CylinderGeometry(3.5, 3.8, 0.8, 32);
    const pedestalMat = new THREE.MeshStandardMaterial({
      color: 0x111111,
      metalness: 0.8,
      roughness: 0.2,
      transparent: true,
      opacity: 0.85
    });
    const pedestal = new THREE.Mesh(pedestalGeo, pedestalMat);
    pedestal.position.set(-7, 2, -4);
    deskGroup.add(pedestal);

    // AI Hologram Ring on Pedestal
    const ringGeo = new THREE.TorusGeometry(3.6, 0.08, 16, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xb7ff00,
      transparent: true,
      opacity: 0.8
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.set(-7, 2.45, -4);
    deskGroup.add(ring);

    // AI Floating Neural Mesh
    const brainGeo = new THREE.IcosahedronGeometry(2.4, 2);
    const brainMat = new THREE.MeshBasicMaterial({
      color: 0xb7ff00,
      wireframe: true,
      transparent: true,
      opacity: 0.55
    });
    const brainMesh = new THREE.Mesh(brainGeo, brainMat);
    brainMesh.position.set(-7, 6.2, -4);
    deskGroup.add(brainMesh);

    // Inner Glowing Core
    const brainCoreGeo = new THREE.SphereGeometry(1.2, 16, 16);
    const brainCoreMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.7
    });
    const brainCore = new THREE.Mesh(brainCoreGeo, brainCoreMat);
    brainCore.position.set(-7, 6.2, -4);
    deskGroup.add(brainCore);

    // 2. 3D Floating / Resting Tech Cubes (React, Node, JS, Python)
    const cubeData = [
      { color: 0x61dafb, label: 'React', pos: [-5.5, 0.8, 6.5], rot: [0.1, 0.4, 0] },
      { color: 0x68a063, label: 'Node', pos: [-2.2, 0.8, 7.2], rot: [0, 0.2, 0] },
      { color: 0xf7df1e, label: 'JS', pos: [1.2, 0.8, 7.6], rot: [0.05, -0.2, 0] },
      { color: 0x3776ab, label: 'Python', pos: [4.6, 0.8, 7.2], rot: [-0.05, 0.3, 0] }
    ];

    const cubes = [];
    const cubeGeo = new THREE.BoxGeometry(1.6, 1.6, 1.6);

    cubeData.forEach((c) => {
      const mat = new THREE.MeshStandardMaterial({
        color: 0x161616,
        metalness: 0.7,
        roughness: 0.2
      });
      const mesh = new THREE.Mesh(cubeGeo, mat);
      mesh.position.set(c.pos[0], c.pos[1], c.pos[2]);
      mesh.rotation.set(c.rot[0], c.rot[1], c.rot[2]);

      // Add glowing neon edge outline
      const edgeGeo = new THREE.EdgesGeometry(cubeGeo);
      const edgeMat = new THREE.LineBasicMaterial({ color: c.color });
      const edgeLines = new THREE.LineSegments(edgeGeo, edgeMat);
      mesh.add(edgeLines);

      deskGroup.add(mesh);
      cubes.push({ mesh, basePos: [...c.pos], baseRot: [...c.rot] });
    });

    // 3. IoT Board (ESP32)
    const boardGeo = new THREE.BoxGeometry(3.6, 0.3, 2.2);
    const boardMat = new THREE.MeshStandardMaterial({
      color: 0x1a3322,
      metalness: 0.4,
      roughness: 0.6
    });
    const boardMesh = new THREE.Mesh(boardGeo, boardMat);
    boardMesh.position.set(8.5, 0.4, 4.5);
    boardMesh.rotation.y = -Math.PI / 8;
    deskGroup.add(boardMesh);

    // IoT LED Indicator
    const ledGeo = new THREE.SphereGeometry(0.18, 8, 8);
    const ledMat = new THREE.MeshBasicMaterial({ color: 0xb7ff00 });
    const ledMesh = new THREE.Mesh(ledGeo, ledMat);
    ledMesh.position.set(9.6, 0.7, 4.2);
    deskGroup.add(ledMesh);

    // Mouse Interaction
    let targetCamX = 18;
    let targetCamY = 16;

    const handlePointerMove = (e) => {
      const rect = mount.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      targetCamX = 18 + nx * 4;
      targetCamY = 16 - ny * 3;
    };

    mount.addEventListener('pointermove', handlePointerMove);

    // Resize
    const handleResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animId;
    const clock = new THREE.Timer();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      clock.update();
      const time = clock.getElapsed();

      // Camera smooth damping
      camera.position.x += (targetCamX - camera.position.x) * 0.05;
      camera.position.y += (targetCamY - camera.position.y) * 0.05;
      camera.lookAt(0, 2, 0);

      // Rotate Brain Hologram
      brainMesh.rotation.y = time * 0.4;
      brainMesh.rotation.x = Math.sin(time * 0.3) * 0.15;
      brainCore.rotation.y = -time * 0.6;
      brainMesh.position.y = 6.2 + Math.sin(time * 1.5) * 0.25;
      brainCore.position.y = 6.2 + Math.sin(time * 1.5) * 0.25;

      // Pulse IoT LED
      ledMat.color.setHex((Math.sin(time * 8) > 0) ? 0xb7ff00 : 0x334400);

      // Gentle floating cubes
      cubes.forEach(({ mesh, basePos }, idx) => {
        mesh.position.y = basePos[1] + Math.sin(time * 2 + idx * 1.2) * 0.1;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      mount.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', handleResize);

      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }

      pedestalGeo.dispose();
      pedestalMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      brainGeo.dispose();
      brainMat.dispose();
      brainCoreGeo.dispose();
      brainCoreMat.dispose();
      cubeGeo.dispose();
      boardGeo.dispose();
      boardMat.dispose();
      ledGeo.dispose();
      ledMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="hero-workspace-3d-stage">
      {/* Three.js 3D WebGL Scene Mount */}
      <div ref={mountRef} className="workspace-webgl-mount" aria-hidden="true" />

      {/* 3D Realistic Laptop Code Editor Overlay */}
      <div className="laptop-3d-chassis">
        {/* Laptop Screen Bezel */}
        <div className="laptop-screen-bezel">
          {/* Top Camera Notch */}
          <div className="laptop-notch">
            <span className="camera-lens" />
            <span className="camera-led" />
          </div>

          {/* IDE Window Bar */}
          <div className="ide-window-bar font-mono">
            <div className="window-dots">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
            </div>

            <div className="ide-tabs">
              <button
                type="button"
                className={`ide-tab ${activeCodeTab === 'App.jsx' ? 'active' : ''}`}
                onClick={() => setActiveCodeTab('App.jsx')}
              >
                <span className="tab-icon text-accent">⚛</span>
                <span>App.jsx</span>
              </button>
              <button
                type="button"
                className={`ide-tab ${activeCodeTab === 'AI_Model.py' ? 'active' : ''}`}
                onClick={() => setActiveCodeTab('AI_Model.py')}
              >
                <span className="tab-icon">🐍</span>
                <span>AI_Model.py</span>
              </button>
            </div>

            <span className="ide-brand-badge font-mono">React 18 · AI/ML</span>
          </div>

          {/* Syntax Highlighted Code Viewer */}
          <div className="ide-code-body font-mono">
            {activeCodeTab === 'App.jsx' ? (
              <pre className="code-block">
                <code>
                  <span className="c-keyword">import</span> React, &#123; useState, useEffect &#125; <span className="c-keyword">from</span> <span className="c-string">'react'</span>;<br />
                  <br />
                  <span className="c-keyword">function</span> <span className="c-fn">App</span>() &#123;<br />
                  &nbsp;&nbsp;<span className="c-keyword">const</span> [model, setModel] = <span className="c-fn">useState</span>(<span className="c-string">'LLM-Agent'</span>);<br />
                  &nbsp;&nbsp;<span className="c-keyword">const</span> [telemetry, setTelemetry] = <span className="c-fn">useState</span>(&#123; status: <span className="c-string">'Active'</span> &#125;);<br />
                  <br />
                  &nbsp;&nbsp;<span className="c-fn">useEffect</span>(() =&gt; &#123;<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="c-fn">streamRoadmap</span>(&#123; role: <span className="c-string">'AI/ML Engineer'</span> &#125;);<br />
                  &nbsp;&nbsp;&#125;, []);<br />
                  <br />
                  &nbsp;&nbsp;<span className="c-keyword">return</span> (<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="c-tag">div</span> <span className="c-attr">className</span>=<span className="c-string">"intelligent-app"</span>&gt;<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="c-tag">h1</span>&gt;<span className="c-highlight">Building the Future with Code</span>&lt;/<span className="c-tag">h1</span>&gt;<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="c-tag">div</span>&gt;<br />
                  &nbsp;&nbsp;);<br />
                  &#125;<br />
                  <br />
                  <span className="c-keyword">export default</span> App;
                </code>
              </pre>
            ) : (
              <pre className="code-block">
                <code>
                  <span className="c-keyword">import</span> torch<br />
                  <span className="c-keyword">from</span> transformers <span className="c-keyword">import</span> AutoModelForCausalLM<br />
                  <br />
                  <span className="c-keyword">class</span> <span className="c-fn">IntelligentAgent</span>:<br />
                  &nbsp;&nbsp;<span className="c-keyword">def</span> <span className="c-fn">__init__</span>(self):<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;self.model = <span className="c-string">"Groq-LLM-Inference"</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;self.status = <span className="c-string">"Optimal"</span><br />
                  <br />
                  &nbsp;&nbsp;<span className="c-keyword">def</span> <span className="c-fn">predict_maintenance</span>(self, sensors):<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="c-comment"># Real-time IoT Regression</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="c-keyword">return</span> self.model.<span className="c-fn">stream_telemetry</span>(sensors)<br />
                </code>
              </pre>
            )}
          </div>
        </div>

        {/* Laptop Keyboard Deck Base */}
        <div className="laptop-deck-base">
          <div className="laptop-trackpad" />
        </div>
      </div>
    </div>
  );
}
