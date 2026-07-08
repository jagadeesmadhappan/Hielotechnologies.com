'use client';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'ghost';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: 'a';
  href?: string;
  variant?: Variant;
  children: React.ReactNode;
}

/**
 * Brand button with a click-ripple micro-interaction.
 * Renders as <a> when `href` is provided, otherwise <button>.
 */
export function Button({
  variant = 'primary', className, children, href, ...rest
}: ButtonProps) {
  const ref = useRef<HTMLElement>(null);

  const ripple = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const span = document.createElement('span');
    const size = Math.max(r.width, r.height) * 2;
    Object.assign(span.style, {
      position: 'absolute', borderRadius: '50%',
      width: `${size}px`, height: `${size}px`,
      left: `${e.clientX - r.left}px`, top: `${e.clientY - r.top}px`,
      transform: 'translate(-50%,-50%) scale(0)',
      background: 'rgba(255,255,255,.35)', pointerEvents: 'none',
      transition: 'transform .6s ease-out, opacity .6s ease-out',
    });
    el.appendChild(span);
    requestAnimationFrame(() => {
      span.style.transform = 'translate(-50%,-50%) scale(1)';
      span.style.opacity = '0';
    });
    setTimeout(() => span.remove(), 620);
  };

  const base =
    'group relative inline-flex items-center gap-2.5 overflow-hidden rounded-[2px] px-7 py-[15px] font-mono text-[13px] tracking-[0.08em] transition-transform duration-300 active:scale-[.98] border border-transparent';
  const styles: Record<Variant, string> = {
    primary:
      'bg-gradient-to-br from-blue to-[#1E6FE0] text-white shadow-[0_8px_40px_rgba(46,139,255,.25)] hover:shadow-[0_10px_50px_rgba(46,139,255,.45)]',
    ghost:
      'text-paper border-[color:var(--line-2)] hover:border-gold hover:bg-gold/5 hover:shadow-[0_0_26px_rgba(217,184,114,.14)]',
  };

  const content = (
    <>
      {children}
      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
    </>
  );

  if (href) {
    return (
      <a ref={ref as React.RefObject<HTMLAnchorElement>} href={href}
         onClick={ripple} className={cn(base, styles[variant], className)}>
        {content}
      </a>
    );
  }
  return (
    <button ref={ref as React.RefObject<HTMLButtonElement>} onClick={ripple}
            className={cn(base, styles[variant], className)} {...rest}>
      {content}
    </button>
  );
}
