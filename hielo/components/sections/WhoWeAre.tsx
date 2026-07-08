'use client';
import { useEffect, useRef } from 'react';
import { SectionShell } from '@/components/ui/SectionShell';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { WHO_POINTS } from '@/lib/constants';
import { useReducedMotion } from '@/hooks/useReducedMotion';

/** Section 1 — company identity, with a small orbital-graph canvas. */
export function WhoWeAre() {
  return (
    <SectionShell id="who">
      <Reveal><Eyebrow>§ 01 — Who We Are</Eyebrow></Reveal>
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-[90px]">
        <div>
          <Reveal delay={1}>
            <h2 className="text-[clamp(30px,4.6vw,62px)] font-extralight leading-[1.04] tracking-[-0.02em]">
              A research firm,<br />not a trading desk.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-7 max-w-[56ch] text-[clamp(16px,1.5vw,20px)] leading-[1.65] text-muted">
              HIELO builds AI systems that read market history the way a research lab reads data —
              methodically, sceptically, and at scale.{' '}
              <span className="text-paper">We are not a broker. We do not sell signals. We do not run copy-trading.</span>{' '}
              Our single output is rigorous, reproducible research into how Forex and Gold markets actually behave.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <ul className="mt-9">
              {WHO_POINTS.map((p) => (
                <li key={p.k} className="flex gap-[18px] border-b border-[color:var(--line)] py-5 last:border-none">
                  <span className="min-w-[34px] font-mono text-xs tracking-[0.1em] text-blue-soft">{p.k}</span>
                  <span>
                    <strong className="mb-1.5 block text-[17px] font-normal">{p.title}</strong>
                    <span className="text-[15px] text-muted">{p.body}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal delay={2}>
          <div className="glass relative aspect-square overflow-hidden rounded-md">
            <OrbitCanvas />
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}

/** Lightweight 2D orbital graph — decorative "constellation of findings". */
function OrbitCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext('2d')!;
    let raf = 0, W = 0, H = 0;
    const N = 70;
    const pts = Array.from({ length: N }, () => ({
      a: Math.random() * 6.28, r: 0.2 + Math.random() * 0.75,
      sp: (Math.random() - 0.5) * 0.004, z: Math.random(),
    }));
    const size = () => {
      const r = cv.getBoundingClientRect();
      cv.width = r.width * devicePixelRatio; cv.height = r.height * devicePixelRatio;
      W = cv.width; H = cv.height;
    };
    size();
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const cx = W / 2, cy = H / 2, R = Math.min(W, H) * 0.42;
      pts.forEach((p) => (p.a += p.sp));
      for (let i = 0; i < N; i++)
        for (let j = i + 1; j < N; j++) {
          const a = pts[i], b = pts[j];
          const ax = cx + Math.cos(a.a) * a.r * R, ay = cy + Math.sin(a.a) * a.r * R * 0.7;
          const bx = cx + Math.cos(b.a) * b.r * R, by = cy + Math.sin(b.a) * b.r * R * 0.7;
          const d = Math.hypot(ax - bx, ay - by);
          if (d < R * 0.5) {
            ctx.strokeStyle = `rgba(46,139,255,${0.1 * (1 - d / (R * 0.5))})`;
            ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(bx, by); ctx.stroke();
          }
        }
      pts.forEach((p) => {
        const x = cx + Math.cos(p.a) * p.r * R, y = cy + Math.sin(p.a) * p.r * R * 0.7;
        ctx.fillStyle = p.z > 0.85 ? 'rgba(217,184,114,.9)' : 'rgba(150,190,255,.85)';
        ctx.beginPath();
        ctx.arc(x, y, (p.z > 0.85 ? 2.2 : 1.4) * devicePixelRatio, 0, 6.28);
        ctx.fill();
      });
      if (!reduced) raf = requestAnimationFrame(draw);
    };
    draw();
    window.addEventListener('resize', size);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', size); };
  }, [reduced]);

  return <canvas ref={ref} className="h-full w-full" />;
}
