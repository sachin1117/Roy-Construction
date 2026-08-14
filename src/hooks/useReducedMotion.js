import { useState, useEffect } from 'react';

export function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false;
    const stored = localStorage.getItem('roy_reduced_motion');
    if (stored !== null) return stored === 'true';
    return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
  });

  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }
    localStorage.setItem('roy_reduced_motion', String(reducedMotion));
  }, [reducedMotion]);

  const toggleReducedMotion = () => {
    setReducedMotion((prev) => !prev);
  };

  return { reducedMotion, toggleReducedMotion };
}
