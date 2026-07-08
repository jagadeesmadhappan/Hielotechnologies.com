'use client';
import { useEffect, useRef, useState } from 'react';
import { SectionShell } from '@/components/ui/SectionShell';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { PIPELINE } from '@/lib/constants';
import { cn } from '@/lib/utils';

/**
 * Section 2 — the research pipeline. Each stage lights up as it scrolls into
 * view, and a rail fills from blue to gold to show progress through the flow.
 */
export function ResearchPhilosophy() {
  const [active, setActive] = useState<Set<number>>(new Set());
  const stageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        setActive((prev) => {
          const next = new Set(prev);
          entries.forEach((e) => {
            if (e.isIntersecting) next.add(Number((e.target as HTMLElement).dataset.i));
          });
          return next;
        });
      },
      { threshold: 0.6 },
    );
    stageRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const fill = (active.size / PIPELINE.length) * 100;

  return (
    <SectionShell id="philosophy">
      <Reveal><Eyebrow>§ 02 — Research Philosophy</Eyebrow></Reveal>
      <Reveal delay={1}>
        <h2 className="max-w-[14ch] text-[clamp(30px,4.6vw,62px)] font-extralight leading-[1.04] tracking-[-0.02em]">
          From raw ticks to<br />validated behaviour.
        </h2>
      </Reveal>
      <Reveal delay={2}>
        <p className="mt-6 max-w-[56ch] text-[clamp(16px,1.5vw,20px)] leading-[1.65] text-muted">
          A disciplined pipeline turns noisy market data into findings you could defend in a research review.
        </p>
      </Reveal>

      <div className="relative mt-16">
        <div className="absolute bottom-9 left-[31px] top-9 w-px bg-[color:var(--line)]">
          <i className="absolute left-0 top-0 w-px bg-gradient-to-b from-blue to-gold shadow-[0_0_12px_rgba(46,139,255,.5)] transition-[height] duration-[1400ms]"
             style={{ height: `${fill}%` }} />
        </div>

        {PIPELINE.map((stage, i) => {
          const on = active.has(i);
          return (
            <div key={stage.id} data-i={i}
                 ref={(el) => { stageRefs.current[i] = el; }}
                 className="relative grid grid-cols-[64px_1fr] items-start gap-6 py-6">
              <div className={cn(
                'relative z-[2] flex h-12 w-12 items-center justify-center rounded-full border bg-ink-2 font-mono text-xs tracking-[0.1em] transition-all duration-500',
                on ? 'border-blue text-paper shadow-[0_0_22px_rgba(46,139,255,.4)]' : 'border-[color:var(--line)] text-muted-2',
              )}>
                {stage.id}
              </div>
              <div>
                <h3 className="mb-1.5 text-[clamp(20px,2.2vw,28px)] font-light">{stage.title}</h3>
                <p className="max-w-[52ch] text-[15px] text-muted">{stage.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}
