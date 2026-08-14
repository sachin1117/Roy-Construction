import React, { useEffect, useState, useRef } from 'react';

export default function AnimatedCounter({ 
  value, 
  duration = 1800, 
  suffix = "", 
  prefix = "", 
  className = "",
  reducedMotion = false 
}) {
  const [count, setCount] = useState(reducedMotion ? value : 0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    if (reducedMotion) {
      setCount(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let startTime = null;
          const startValue = 0;
          const endValue = Number(value);

          function step(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            
            // Ease-out cubic formula
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.floor(startValue + (endValue - startValue) * easeOut);
            
            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(endValue);
            }
          }

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.25 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated, reducedMotion]);

  return (
    <span ref={elementRef} className={`font-mono-num ${className}`}>
      {prefix}
      {count.toLocaleString('en-IN')}
      {suffix}
    </span>
  );
}
