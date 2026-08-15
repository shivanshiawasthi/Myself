/**
 * useIntersectionObserver Hook
 * Triggers animations when elements enter viewport
 * Returns whether element is visible in viewport
 */

import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
): [React.RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (options.triggerOnce) {
          setHasTriggered(true);
        }
      } else {
        if (!options.triggerOnce) {
          setIsVisible(false);
        }
      }
    }, {
      threshold: options.threshold ?? 0.1,
      rootMargin: options.rootMargin ?? '0px',
      root: options.root,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
      observer.disconnect();
    };
  }, [options.triggerOnce, options.threshold, options.rootMargin, options.root]);

  const isCurrentlyVisible = options.triggerOnce ? hasTriggered || isVisible : isVisible;
  return [ref, isCurrentlyVisible];
}
