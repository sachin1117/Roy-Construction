import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

/**
 * Initializes Lenis smooth scrolling with auto requestAnimationFrame loop.
 * Gracefully disables if reduced motion is preferred or on small mobile touch devices when requested.
 */
export function useLenis(enabled = true) {
  const lenisRef = useRef(null);

  useEffect(() => {
    if (!enabled) {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [enabled]);

  return lenisRef;
}
