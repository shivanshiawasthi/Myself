/**
 * BokehBackground Component
 * Creates animated bokeh light particles with parallax effect
 * Performance-optimized with CSS animations and GPU acceleration
 */

import React from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import './bokehBackground.css';

interface BokehParticle {
  id: number;
  size: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
  color: string;
  opacity: number;
}

const generateBokehParticles = (count: number): BokehParticle[] => {
  const colors = [
    'rgba(79, 70, 229, 0.2)', // Soft blue
    'rgba(192, 132, 252, 0.2)', // Warm purple
    'rgba(249, 115, 22, 0.15)', // Coral pink
    'rgba(6, 182, 212, 0.2)', // Cyan accent
    'rgba(99, 102, 241, 0.2)', // Indigo
  ];

  return Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 52 + 8, // 8px to 60px
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: Math.random() * 6 + 2, // 2s to 8s
    delay: Math.random() * 2,
    color: colors[Math.floor(Math.random() * colors.length)],
    opacity: Math.random() * 0.25 + 0.15, // 0.15 to 0.4
  }));
};

export function BokehBackground(): React.ReactNode {
  const prefersReduced = useReducedMotion();

  // Generate particles once on component mount
  const particles = generateBokehParticles(20);

  // Don't render animated bokeh if user prefers reduced motion
  if (prefersReduced) {
    return (
      <div
        className="bokeh-background bokeh-background--static"
        aria-hidden="true"
      />
    );
  }

  return (
    <div className="bokeh-background" aria-hidden="true">
      <div className="bokeh-container">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="bokeh-particle"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              animation: `bokehFloat ${particle.duration}s infinite ease-in-out`,
              animationDelay: `${particle.delay}s`,
              opacity: particle.opacity,
            }}
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  );
}
