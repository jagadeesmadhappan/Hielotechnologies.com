'use client';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { NAV_LINKS } from '@/lib/constants';

/** Fixed nav that gains a glass backdrop after the first scroll. */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <nav
      className={cn(
        'fixed inset-x-0 top-0 z-[60] flex items-center justify-between border-b border-transparent px-6 py-5 transition-all duration-500 sm:px-10 lg:px-[clamp(24px,6vw,120px)]',
        scrolled && 'border-[color:var(--line)] bg-ink/55 backdrop-blur-xl',
      )}
    >
      <a href="#" className="flex items-center gap-3 text-[15px] tracking-brand font-light">
        <span className="relative h-[7px] w-[7px] rounded-full bg-blue shadow-[0_0_12px_#2E8BFF]">
          <span className="absolute -inset-1 animate-pulse rounded-full border border-blue/40" />
        </span>
        H<b className="font-normal">IELO</b>
      </a>

      <div className="hidden gap-8 font-mono text-xs tracking-[0.12em] text-muted md:flex">
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href}
             className="relative transition-colors hover:text-paper
                        after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-blue
                        after:transition-all hover:after:w-full">
            {l.label}
          </a>
        ))}
      </div>

      <a href="#philosophy"
         className="rounded-[2px] border border-[color:var(--line-2)] px-4 py-2 font-mono text-xs tracking-[0.1em] text-paper transition-all duration-500 hover:border-blue hover:bg-blue/[.06] hover:shadow-[0_0_20px_rgba(46,139,255,.25)]">
        Our Methodology
      </a>
    </nav>
  );
}
