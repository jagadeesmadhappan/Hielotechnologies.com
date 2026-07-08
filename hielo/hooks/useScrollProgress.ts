'use client';
import { useEffect, useRef } from 'react';
import { clamp } from '@/lib/utils';

/**
 * Tracks whole-page scroll progress (0..1) in a ref (no re-renders),
 * ideal for driving the Three.js camera each frame.
 */
export function useScrollProgress() {
  const progress = useRef(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      progress.current = clamp(window.scrollY / Math.max(1, max), 0, 1);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return progress;
}
