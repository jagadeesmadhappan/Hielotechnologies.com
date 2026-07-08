'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { BRAND, MAIN_NAV } from '@/lib/site-data';

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div
        className={cn(
          'mx-auto flex max-w-[1380px] items-center justify-between rounded-[28px] border border-[#e5e8ee]/80 px-4 py-3 transition-all duration-500 sm:px-5',
          scrolled
            ? 'bg-white/88 shadow-[0_20px_60px_rgba(17,17,17,0.08)] backdrop-blur-xl'
            : 'bg-white/72 backdrop-blur-md',
        )}
      >
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#3157d5,#6fa7ff)] text-sm font-semibold text-white shadow-[0_10px_30px_rgba(49,87,213,0.28)]">
            H
          </span>
          <div>
            <div className="text-sm font-semibold tracking-[0.22em] text-[#111111]">
              {BRAND.name}
            </div>
            <div className="text-[10px] uppercase tracking-[0.28em] text-[#7b8190]">
              {BRAND.product}
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex">
          {MAIN_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[#5e6472] transition-colors hover:text-[#111111]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            aria-label="Toggle navigation"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d8deeb] bg-white text-sm text-[#111111] xl:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? 'x' : 'Menu'}
          </button>
          <Link
            href="/login"
            className="hidden rounded-full px-4 py-2 text-sm text-[#4f5563] transition-colors hover:text-[#111111] sm:inline-flex"
          >
            Log in
          </Link>
          <Link
            href="/contact"
            className="inline-flex rounded-full border border-[#d8deeb] bg-white px-4 py-2 text-sm font-medium text-[#111111] shadow-[0_8px_24px_rgba(17,17,17,0.06)] transition-transform hover:-translate-y-0.5"
          >
            Talk to research
          </Link>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-3 max-w-[1380px] rounded-[28px] border border-[#e5e8ee] bg-white/94 p-4 shadow-[0_24px_56px_rgba(17,17,17,0.08)] backdrop-blur-xl xl:hidden">
          <nav className="grid gap-2">
            {MAIN_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-3 py-3 text-sm text-[#4f5563] transition-colors hover:bg-[#f5f7fb] hover:text-[#111111]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}