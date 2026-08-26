import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './Neural3DCanvas.css';

export function Neural3DCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth || 400;
    const height = mount.clientHeight || 320;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.z = 28;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Neural Cluster Group
    const cluster = new THREE.Group();
    scene.add(cluster);

    // Nodes (Neurons)
    const nodeCount = 26;
    const nodes = [];
    const nodeGeo = new THREE.SphereGeometry(0.4, 12, 12);
    const nodeMat = new THREE.MeshBasicMaterial({
      color: 0xb7ff00,
      wireframe: false
    });
    const coreNodeMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: false
    });

    for (let i = 0; i < nodeCount; i++) {
      const isCore = i % 5 === 0;
      const mesh = new THREE.Mesh(nodeGeo, isCore ? coreNodeMat : nodeMat);

      // Distribute inside a sphere
      const radius = 8 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      mesh.position.x = radius * Math.sin(phi) * Math.cos(theta);
      mesh.position.y = radius * Math.sin(phi) * Math.sin(theta);
      mesh.position.z = radius * Math.cos(phi);

      cluster.add(mesh);
      nodes.push(mesh);
    }

    // Connections (Synapses)
    const lineMat = new THREE.LineBasicMaterial({
      color: 0xb7ff00,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending
    });

    const linePositions = [];
    const maxDist = 9.5;

    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = nodes[i].position.distanceTo(nodes[j].position);
        if (dist < maxDist) {
          linePositions.push(
            nodes[i].position.x, nodes[i].position.y, nodes[i].position.z,
            nodes[j].position.x, nodes[j].position.y, nodes[j].position.z
          );
        }
      }
    }

    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    cluster.add(lines);

    // Mouse Interaction
    let targetRotX = 0;
    let targetRotY = 0;

    const handlePointerMove = (e) => {
      const rect = mount.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      targetRotY = x * 1.2;
      targetRotX = y * 1.2;
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

    // Animation
    let animId;
    const clock = new THREE.Timer();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      clock.update();
      const time = clock.getElapsed();

      // Continuous rotation
      cluster.rotation.y += 0.005;
      cluster.rotation.x += 0.002;

      // Mouse damping
      cluster.rotation.x += (targetRotX - cluster.rotation.x) * 0.05;
      cluster.rotation.y += (targetRotY - cluster.rotation.y) * 0.05;

      // Pulse nodes
      nodes.forEach((node, idx) => {
        const s = 1 + Math.sin(time * 3 + idx) * 0.25;
        node.scale.set(s, s, s);
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

      nodeGeo.dispose();
      nodeMat.dispose();
      coreNodeMat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="neural-3d-wrapper">
      <div ref={mountRef} className="neural-3d-mount" aria-label="3D Interactive Neural Network" />
      <span className="neural-3d-caption font-mono">
        <span className="status-dot-lime"></span> 3D Neural Topology Visualizer
      </span>
    </div>
  );
}
