/**
 * useScrollSpy Hook
 * Tracks which section is currently in viewport
 * Updates active navigation item accordingly
 */

import { useEffect, useState } from 'react';

export function useScrollSpy(sectionIds: string[]): string | null {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection: string | null = null;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (!element) continue;

        const { top } = element.getBoundingClientRect();

        // If section is in upper half of viewport, mark as active
        if (top <= window.innerHeight / 2) {
          currentSection = id;
        }
      }

      setActiveSection(currentSection);
    };

    // Use throttled scroll listener for better performance
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll(); // Call once on mount

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [sectionIds]);

  return activeSection;
}
