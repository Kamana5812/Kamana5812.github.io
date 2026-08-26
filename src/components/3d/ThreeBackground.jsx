import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './ThreeBackground.css';

export function ThreeBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 80;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 1. Particle Constellation
    const particleCount = 180;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const baseColor = new THREE.Color(0xb7ff00); // Electric Lime
    const dimColor = new THREE.Color(0x334411);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 160;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 160;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 120;

      const mixed = Math.random() > 0.6 ? baseColor : dimColor;
      colors[i * 3] = mixed.r;
      colors[i * 3 + 1] = mixed.g;
      colors[i * 3 + 2] = mixed.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle texture / material
    const particleMaterial = new THREE.PointsMaterial({
      size: 1.8,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(geometry, particleMaterial);
    scene.add(particles);

    // 2. Floating Cyber Wireframe Polyhedra
    const polyGroup = new THREE.Group();

    const shapes = [
      new THREE.IcosahedronGeometry(7, 0),
      new THREE.OctahedronGeometry(5, 0),
      new THREE.TetrahedronGeometry(6, 0),
      new THREE.IcosahedronGeometry(4, 1)
    ];

    const polyObjects = [];

    shapes.forEach((geo, index) => {
      const wireframeMat = new THREE.MeshBasicMaterial({
        color: 0xb7ff00,
        wireframe: true,
        transparent: true,
        opacity: 0.12,
        blending: THREE.AdditiveBlending
      });

      const mesh = new THREE.Mesh(geo, wireframeMat);
      mesh.position.set(
        (index % 2 === 0 ? 1 : -1) * (35 + Math.random() * 25),
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 40
      );

      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;

      polyGroup.add(mesh);
      polyObjects.push({
        mesh,
        rotSpeedX: (Math.random() - 0.5) * 0.004,
        rotSpeedY: (Math.random() - 0.5) * 0.006,
        floatSpeed: 0.5 + Math.random() * 0.8,
        initY: mesh.position.y
      });
    });

    scene.add(polyGroup);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationId;
    const clock = new THREE.Timer();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      clock.update();
      const elapsedTime = clock.getElapsed();

      // Smooth camera interpolation toward mouse + scroll
      targetX += (mouseX * 8 - targetX) * 0.04;
      targetY += (-mouseY * 8 - targetY) * 0.04;

      camera.position.x = targetX;
      camera.position.y = targetY - (scrollY * 0.02);
      camera.lookAt(0, - (scrollY * 0.02), 0);

      // Rotate particle cloud gently
      particles.rotation.y = elapsedTime * 0.02;
      particles.rotation.x = Math.sin(elapsedTime * 0.01) * 0.1;

      // Animate floating polyhedra
      polyObjects.forEach(({ mesh, rotSpeedX, rotSpeedY, floatSpeed, initY }) => {
        mesh.rotation.x += rotSpeedX;
        mesh.rotation.y += rotSpeedY;
        mesh.position.y = initY + Math.sin(elapsedTime * floatSpeed) * 3;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      geometry.dispose();
      particleMaterial.dispose();
      shapes.forEach(s => s.dispose());
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="three-bg-container" aria-hidden="true" />;
}
