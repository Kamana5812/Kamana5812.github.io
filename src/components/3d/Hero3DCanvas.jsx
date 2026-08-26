import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { User, Code2, ArrowRight } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import './Hero3DCanvas.css';

export function Hero3DCanvas() {
  const canvasMountRef = useRef(null);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const mount = canvasMountRef.current;
    if (!mount) return;

    const width = mount.clientWidth || 440;
    const height = mount.clientHeight || 440;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // 3D Core Group
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Outer Icosahedron Wireframe
    const outerGeo = new THREE.IcosahedronGeometry(9, 1);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0xb7ff00,
      wireframe: true,
      transparent: true,
      opacity: 0.28
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    coreGroup.add(outerMesh);

    // 2. Inner Glowing Core Cage
    const innerGeo = new THREE.OctahedronGeometry(6.5, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // 3. Orbital Ring 1
    const ring1Geo = new THREE.TorusGeometry(10.5, 0.08, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0xb7ff00,
      transparent: true,
      opacity: 0.5
    });
    const ring1Mesh = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1Mesh.rotation.x = Math.PI / 3;
    coreGroup.add(ring1Mesh);

    // 4. Orbital Ring 2 (Cross Axis)
    const ring2Geo = new THREE.TorusGeometry(11.2, 0.06, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x88cc00,
      transparent: true,
      opacity: 0.35
    });
    const ring2Mesh = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2Mesh.rotation.y = Math.PI / 4;
    ring2Mesh.rotation.x = -Math.PI / 6;
    coreGroup.add(ring2Mesh);

    // 5. Orbiting Satellite Nodes
    const satelliteGroup = new THREE.Group();
    const satCount = 6;
    const satGeo = new THREE.SphereGeometry(0.35, 8, 8);
    const satMat = new THREE.MeshBasicMaterial({
      color: 0xb7ff00,
      wireframe: false
    });

    const satellites = [];
    for (let i = 0; i < satCount; i++) {
      const sat = new THREE.Mesh(satGeo, satMat);
      const angle = (i / satCount) * Math.PI * 2;
      sat.position.set(Math.cos(angle) * 10.5, Math.sin(angle) * 10.5, 0);
      satelliteGroup.add(sat);
      satellites.push({ mesh: sat, angle });
    }
    satelliteGroup.rotation.x = Math.PI / 3;
    coreGroup.add(satelliteGroup);

    // Mouse Interaction
    let targetRotationX = 0;
    let targetRotationY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handlePointerMove = (e) => {
      const rect = mount.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      targetRotationY = mouseX * 0.8;
      targetRotationX = mouseY * 0.8;
    };

    const handlePointerLeave = () => {
      targetRotationX = 0;
      targetRotationY = 0;
    };

    mount.addEventListener('pointermove', handlePointerMove);
    mount.addEventListener('pointerleave', handlePointerLeave);

    // Resize Handler
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
    let animationFrameId;
    const clock = new THREE.Timer();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      clock.update();
      const time = clock.getElapsed();

      // Continuous autonomous rotation + mouse damping
      outerMesh.rotation.x += 0.003;
      outerMesh.rotation.y += 0.005;

      innerMesh.rotation.x -= 0.004;
      innerMesh.rotation.y -= 0.003;

      ring1Mesh.rotation.z += 0.008;
      ring2Mesh.rotation.z -= 0.006;
      satelliteGroup.rotation.z += 0.012;

      // Group tilt towards mouse
      coreGroup.rotation.x += (targetRotationX - coreGroup.rotation.x) * 0.06;
      coreGroup.rotation.y += (targetRotationY - coreGroup.rotation.y) * 0.06;

      // Subtle breathing scale
      const breathe = 1 + Math.sin(time * 1.5) * 0.03;
      innerMesh.scale.set(breathe, breathe, breathe);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      mount.removeEventListener('pointermove', handlePointerMove);
      mount.removeEventListener('pointerleave', handlePointerLeave);
      window.removeEventListener('resize', handleResize);

      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }

      outerGeo.dispose();
      outerMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      satGeo.dispose();
      satMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="hero-3d-visual-container">
      {/* 3D WebGL Canvas Layer */}
      <div ref={canvasMountRef} className="hero-3d-webgl-mount" aria-hidden="true" />

      {/* Holographic Center Portal Housing Profile Photo */}
      <div className="hero-3d-portal-center">
        <div className="hero-3d-photo-frame">
          <div className="photo-ring-glow font-mono">
            {!imgError ? (
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="hero-profile-img"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="photo-fallback-graphic">
                <User size={54} className="text-accent" />
                <span className="fallback-name font-heading">{personalInfo.name}</span>
                <span className="fallback-sub font-mono">Full-Stack AI/ML</span>
              </div>
            )}
            {/* Holographic Scanline Overlay */}
            <div className="hologram-scanline" aria-hidden="true" />
          </div>

          {/* Photo Corner Label Badge */}
          <div className="photo-badge font-mono">
            <span className="status-dot-lime"></span>
            <span>{personalInfo.name}</span>
          </div>
        </div>
      </div>

      {/* Floating 3D Building Card */}
      <div className="floating-building-card hero-3d-card-float">
        <div className="card-top font-mono">
          <span className="building-label">
            <span className="status-dot-lime"></span> Currently Building
          </span>
          <Code2 size={16} className="card-code-icon" />
        </div>

        <p className="card-heading font-body">
          AI &amp; IoT solutions with real-time intelligence and telemetry.
        </p>

        <a href="#projects" className="card-link font-mono">
          <span>View Projects</span>
          <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
}
