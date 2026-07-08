'use client';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { BRAND } from '@/lib/constants';

/**
 * Cinematic loading overlay. Fills a progress bar, animates the wordmark in
 * letter-by-letter, then fades out and releases body scroll. Purely visual —
 * it does not block asset loading (assets stream in behind it).
 */
export function Loader() {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const iv = setInterval(() => {
      setPct((p) => {
        const next = Math.min(100, p + Math.random() * 16 + 6);
        if (next >= 100) {
          clearInterval(iv);
          setTimeout(() => { setDone(true); document.body.style.overflow = ''; }, 520);
        }
        return next;
      });
    }, 140);
    return () => { clearInterval(iv); document.body.style.overflow = ''; };
  }, []);

  return (
    <div
      className={cn(
        'fixed inset-0 z-[200] flex flex-col items-center justify-center gap-8 bg-ink transition-[opacity,visibility] duration-[1100ms]',
        done && 'pointer-events-none invisible opacity-0',
      )}
    >
      <div className="pl-[0.42em] text-[clamp(22px,4vw,34px)] font-extralight tracking-[0.42em] text-paper">
        {BRAND.name.split('').map((c, i) => (
          <span key={i} className="inline-block"
                style={{ animation: `hieloLetterUp .7s cubic-bezier(.16,1,.3,1) ${i * 0.08}s both` }}>
            {c}
          </span>
        ))}
      </div>
      <div className="font-mono text-[11px] uppercase tracking-[0.35em] text-muted-2">
        Quantitative Research Partner
      </div>
      <div className="relative h-px w-[min(220px,42vw)] overflow-hidden bg-[color:var(--line)]">
        <i
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue to-gold shadow-[0_0_18px_rgba(46,139,255,.55)]"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="font-mono text-[10px] tracking-[0.3em] text-muted-2">
        {Math.floor(pct)}% — initialising research field
      </div>

      <style>{`@keyframes hieloLetterUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}`}</style>
    </div>
  );
}
