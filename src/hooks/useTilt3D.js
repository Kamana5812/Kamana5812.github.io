import { useState, useRef, useCallback } from 'react';

/**
 * useTilt3D - Hook for high-performance 3D perspective tilt & cursor tracking
 * @param {Object} options
 * @param {number} options.maxTilt - Maximum tilt angle in degrees (default: 12)
 * @param {number} options.scale - Scale on hover (default: 1.02)
 * @param {number} options.speed - Transition speed in ms (default: 400)
 * @param {boolean} options.glare - Enable specular sheen glare (default: true)
 */
export function useTilt3D({
  maxTilt = 12,
  scale = 1.02,
  speed = 400,
  glare = true
} = {}) {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({});
  const [glareStyle, setGlareStyle] = useState({});
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const width = rect.width;
    const height = rect.height;

    // Calculate normalized coordinates (-1 to 1)
    const normX = (x / width) * 2 - 1;
    const normY = (y / height) * 2 - 1;

    const tiltX = -(normY * maxTilt).toFixed(2);
    const tiltY = (normX * maxTilt).toFixed(2);

    setStyle({
      transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(${scale}, ${scale}, ${scale})`,
      transition: `transform 80ms ease-out`
    });

    if (glare) {
      const glareX = (x / width) * 100;
      const glareY = (y / height) * 100;
      setGlareStyle({
        opacity: 0.18,
        background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(183, 255, 0, 0.45) 0%, rgba(255, 255, 255, 0.1) 30%, transparent 70%)`
      });
    }
  }, [maxTilt, scale, glare]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setStyle({
      transform: `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: `transform ${speed}ms cubic-bezier(0.16, 1, 0.3, 1)`
    });
    if (glare) {
      setGlareStyle({
        opacity: 0,
        transition: `opacity ${speed}ms ease-out`
      });
    }
  }, [speed, glare]);

  return {
    ref: cardRef,
    style,
    glareStyle,
    isHovered,
    bind: {
      onMouseMove: handleMouseMove,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave
    }
  };
}
