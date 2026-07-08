'use client';
import { useEffect, useRef } from 'react';

/** Normalised pointer position (-0.5..0.5) stored in a ref for animation loops. */
export function useMousePosition() {
  const mouse = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      mouse.current.x = e.clientX / window.innerWidth - 0.5;
      mouse.current.y = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);
  return mouse;
}
