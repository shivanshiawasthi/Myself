/**
 * Animation Utilities
 * Helper functions for animation effects and calculations
 */

/**
 * Calculate staggered animation delay
 * @param index - Current item index
 * @param baseDelay - Base delay in milliseconds
 * @returns Delay string for CSS animation-delay
 */
export const getStaggeredDelay = (
  index: number,
  baseDelay: number = 50
): string => {
  return `${index * baseDelay}ms`;
};

/**
 * Clamp a value between min and max
 * @param value - Value to clamp
 * @param min - Minimum value
 * @param max - Maximum value
 * @returns Clamped value
 */
export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

/**
 * Linear interpolation between two values
 * @param start - Start value
 * @param end - End value
 * @param progress - Progress from 0 to 1
 * @returns Interpolated value
 */
export const lerp = (start: number, end: number, progress: number): number => {
  return start + (end - start) * progress;
};

/**
 * Ease out quad timing function
 * @param t - Progress from 0 to 1
 * @returns Eased value
 */
export const easeOutQuad = (t: number): number => {
  return 1 - (1 - t) * (1 - t);
};

/**
 * Ease out cubic timing function
 * @param t - Progress from 0 to 1
 * @returns Eased value
 */
export const easeOutCubic = (t: number): number => {
  return 1 - Math.pow(1 - t, 3);
};

/**
 * Generate random number between min and max
 * @param min - Minimum value
 * @param max - Maximum value
 * @returns Random value
 */
export const randomBetween = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

/**
 * Calculate scroll progress as percentage
 * @param element - Element to measure
 * @returns Progress from 0 to 1
 */
export const getScrollProgress = (
  element: HTMLElement | null
): number => {
  if (!element) return 0;

  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const elementHeight = rect.height;

  const elementTop = rect.top;

  // Calculate how much of the element is visible
  const visibleStart = Math.max(0, -elementTop);
  const visibleEnd = Math.min(elementHeight, windowHeight - elementTop);
  const visibleHeight = Math.max(0, visibleEnd - visibleStart);

  return clamp(visibleHeight / elementHeight, 0, 1);
};

/**
 * Create CSS variable for dynamic animation values
 * @param name - Variable name (without --)
 * @param value - Variable value
 * @returns CSS variable string
 */
export const cssVar = (name: string, value: string | number): string => {
  return `var(--${name}, ${value})`;
};

/**
 * Set CSS custom properties on element
 * @param element - Target element
 * @param variables - Object of variable names and values
 */
export const setCSSVariables = (
  element: HTMLElement,
  variables: Record<string, string | number>
): void => {
  Object.entries(variables).forEach(([key, value]) => {
    element.style.setProperty(`--${key}`, String(value));
  });
};
