'use client';
import { useEffect, useRef } from 'react';
import { SectionShell } from '@/components/ui/SectionShell';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { useReducedMotion } from '@/hooks/useReducedMotion';

/**
 * Section 3 — a mouse-reactive network graph. Nodes drift, link to nearby
 * neighbours, and lean toward the cursor with gold cursor-links + glow.
 * Rendered on 2D canvas for crispness and reliable performance.
 */
export function NeuralNetwork() {
  const ref = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext('2d')!;
    const DPR = Math.min(devicePixelRatio, 2);
    let W = 0, H = 0, raf = 0;
    const mouse = { x: -9999, y: -9999 };
    type Node = { x: number; y: number; vx: number; vy: number; g: boolean };
    let nodes: Node[] = [];

    const init = () => {
      const count = Math.floor((W * H) / (22000 * DPR));
      nodes = Array.from({ length: Math.max(40, Math.min(120, count)) }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
        g: Math.random() < 0.14,
      }));
    };
    const size = () => {
      const r = cv.getBoundingClientRect();
      cv.width = r.width * DPR; cv.height = r.height * DPR; W = cv.width; H = cv.height; init();
    };
    size();

    const onMove = (e: PointerEvent) => {
      const r = cv.getBoundingClientRect();
      mouse.x = (e.clientX - r.left) * DPR; mouse.y = (e.clientY - r.top) * DPR;
    };
    const onLeave = () => { mouse.x = mouse.y = -9999; };
    cv.addEventListener('pointermove', onMove);
    cv.addEventListener('pointerleave', onLeave);

    const LINK = 140 * DPR, MOUSE = 190 * DPR;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
        const dx = mouse.x - n.x, dy = mouse.y - n.y, d = Math.hypot(dx, dy);
        if (d < MOUSE) { n.x += (dx / d) * 0.4; n.y += (dy / d) * 0.4; }
      }
      for (let i = 0; i < nodes.length; i++)
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j], d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK) {
            ctx.strokeStyle = `rgba(46,139,255,${(1 - d / LINK) * 0.22})`;
            ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      for (const n of nodes) {
        const d = Math.hypot(mouse.x - n.x, mouse.y - n.y);
        if (d < MOUSE) {
          ctx.strokeStyle = `rgba(217,184,114,${(1 - d / MOUSE) * 0.5})`;
          ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(mouse.x, mouse.y); ctx.lineTo(n.x, n.y); ctx.stroke();
        }
        ctx.beginPath();
        ctx.arc(n.x, n.y, (n.g ? 2.6 : 1.6) * DPR, 0, 6.28);
        ctx.fillStyle = n.g ? 'rgba(234,214,166,.95)' : 'rgba(150,190,255,.9)';
        ctx.shadowColor = n.g ? 'rgba(217,184,114,.8)' : 'transparent';
        ctx.shadowBlur = n.g ? 8 : 0;
        ctx.fill(); ctx.shadowBlur = 0;
      }
      if (mouse.x > 0) {
        ctx.beginPath(); ctx.arc(mouse.x, mouse.y, 3 * DPR, 0, 6.28);
        ctx.fillStyle = '#2E8BFF'; ctx.shadowColor = '#2E8BFF'; ctx.shadowBlur = 16; ctx.fill(); ctx.shadowBlur = 0;
      }
      if (!reduced) raf = requestAnimationFrame(draw);
    };
    draw();

    window.addEventListener('resize', size);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', size);
      cv.removeEventListener('pointermove', onMove);
      cv.removeEventListener('pointerleave', onLeave);
    };
  }, [reduced]);

  return (
    <SectionShell id="network">
      <Reveal><Eyebrow>§ 03 — Interactive Intelligence</Eyebrow></Reveal>
      <Reveal delay={1}>
        <h2 className="max-w-[16ch] text-[clamp(30px,4.6vw,62px)] font-extralight leading-[1.04] tracking-[-0.02em]">
          The research field,<br />reacting to you.
        </h2>
      </Reveal>
      <Reveal delay={2}>
        <p className="mt-6 max-w-[56ch] text-[clamp(16px,1.5vw,20px)] leading-[1.65] text-muted">
          Our discovery engine connects thousands of market observations into a living graph. Move through it.
        </p>
      </Reveal>
      <Reveal delay={2}>
        <div className="glass relative mt-14 overflow-hidden rounded-md
                        bg-gradient-to-b from-graphite/50 to-ink/50">
          <canvas ref={ref} className="block h-[min(60vh,520px)] w-full cursor-crosshair" />
          <div className="absolute bottom-4 left-5 font-mono text-[11px] tracking-[0.1em] text-muted-2">
            move cursor · nodes respond
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
