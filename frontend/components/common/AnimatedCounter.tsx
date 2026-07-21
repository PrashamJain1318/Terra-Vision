'use client';

import React, { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedCounterProps {
  value: string; // e.g. "10000" or "50+"
  label: string;
}

export const AnimatedCounter = ({ value, label }: AnimatedCounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  // Extract number from value (e.g. "10,000+" -> 10000)
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10) || 0;
  const suffix = value.replace(/[0-9,]/g, ''); // Extract "+" or suffix
  
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = numericValue;
    const duration = 2000; // 2 seconds animation
    const startTime = performance.now();

    const animate = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function outQuad
      const easedProgress = progress * (2 - progress);
      const current = Math.floor(easedProgress * end);
      
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, numericValue]);

  // Format count back to match value format (e.g. adding commas)
  const formattedCount = count.toLocaleString() + suffix;

  return (
    <div ref={ref} className="space-y-2 p-6 rounded-2xl glass text-center">
      <div className="text-4xl sm:text-5xl font-black text-primary tracking-tight">
        {formattedCount}
      </div>
      <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-widest font-medium">
        {label}
      </div>
    </div>
  );
};

export default AnimatedCounter;
