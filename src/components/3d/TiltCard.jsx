import React from 'react';
import { useTilt3D } from '../../hooks/useTilt3D';
import './TiltCard.css';

export function TiltCard({
  children,
  className = '',
  maxTilt = 10,
  scale = 1.02,
  glare = true,
  ...props
}) {
  const { ref, style, glareStyle, bind } = useTilt3D({ maxTilt, scale, glare });

  return (
    <div
      ref={ref}
      className={`tilt-card-3d ${className}`}
      style={style}
      {...bind}
      {...props}
    >
      {glare && (
        <div className="tilt-card-glare" style={glareStyle} aria-hidden="true" />
      )}
      <div className="tilt-card-inner">
        {children}
      </div>
    </div>
  );
}
