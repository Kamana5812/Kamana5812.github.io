import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook using IntersectionObserver for scroll-reveal animations.
 * @param {Object} options - IntersectionObserver configuration options
 * @returns {[React.RefObject, boolean]} Ref to attach and boolean visible status
 */
export function useInView(options = { threshold: 0.15, triggerOnce: true }) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // Respect reduced motion settings
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (options.triggerOnce && ref.current) {
          observer.unobserve(ref.current);
        }
      } else if (!options.triggerOnce) {
        setIsInView(false);
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options.threshold, options.triggerOnce]);

  return [ref, isInView];
}
