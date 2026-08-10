'use client';

import { useEffect, useRef, useState } from 'react';

interface StatCounterProps {
  value: string;
  className?: string;
}

export default function StatCounter({ value, className }: StatCounterProps) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : '';
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || target === null) return undefined;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const reducedMotionFrame = window.requestAnimationFrame(() => setCount(target));
      return () => window.cancelAnimationFrame(reducedMotionFrame);
    }

    let frameId: number;
    let started = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;
        const duration = 1400;
        const startTime = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - (1 - progress) ** 3;
          setCount(Math.round(target * eased));
          if (progress < 1) frameId = window.requestAnimationFrame(tick);
        };

        frameId = window.requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [target]);

  if (target === null) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  );
}
