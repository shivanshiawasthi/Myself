/**
 * Easing Functions for Animations
 * Standard cubic-bezier timing functions for consistent motion
 */

export const easing = {
  // Standard easing curves
  smooth: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
  smoothIn: 'cubic-bezier(0.4, 0.0, 1, 1)',
  smoothOut: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  
  // Spring-like easing
  bouncy: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  springy: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  
  // Material Design curves
  standard: 'cubic-bezier(0.4, 0.0, 0.6, 1)',
  accelerate: 'cubic-bezier(0.4, 0.0, 1, 1)',
  decelerate: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  
  // Custom curves
  softOut: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  sharpIn: 'cubic-bezier(0.7, 0, 1, 0.5)',
  sharpOut: 'cubic-bezier(0, 0.5, 0.3, 1)',
} as const;

export type EasingKey = keyof typeof easing;
