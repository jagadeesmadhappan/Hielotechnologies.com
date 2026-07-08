'use client';
import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';

/** Glassmorphism card with cursor-follow glow and subtle 3D tilt. */
export function GlassCard({
  children, className,
}: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;
    el.style.setProperty('--mx', `${x}px`);
    el.style.setProperty('--my', `${y}px`);
    if (!reduced) {
      const rx = ((y / r.height) - 0.5) * -6;
      const ry = ((x / r.width) - 0.5) * 6;
      el.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    }
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={() => { if (ref.current) ref.current.style.transform = ''; }}
      className={cn(
        'glass group relative overflow-hidden rounded-md transition-[transform,border-color,box-shadow] duration-500',
        'hover:border-[color:var(--line-2)] hover:shadow-[0_20px_60px_rgba(0,0,0,.5)]',
        className,
      )}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <span
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(120px 120px at var(--mx,50%) var(--my,0%), rgba(46,139,255,.14), transparent 70%)',
        }}
      />
      {children}
    </div>
  );
}
