'use client';
import { useEffect, useRef, useState } from 'react';
import { SectionShell } from '@/components/ui/SectionShell';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';

/**
 * Section 4 — a stylised, non-functional preview of the internal research
 * environment. All figures are synthetic; implementation details are omitted
 * on purpose. Contains: Pattern Explorer chart, metrics, session heatmap,
 * and an ORB/volume-by-session bar chart.
 */
export function DashboardPreview() {
  return (
    <SectionShell id="dashboard">
      <Reveal><Eyebrow>§ 04 — Platform Preview</Eyebrow></Reveal>
      <Reveal delay={1}>
        <h2 className="max-w-[16ch] text-[clamp(30px,4.6vw,62px)] font-extralight leading-[1.04] tracking-[-0.02em]">
          Where research<br />becomes explorable.
        </h2>
      </Reveal>
      <Reveal delay={2}>
        <p className="mt-6 max-w-[56ch] text-[clamp(16px,1.5vw,20px)] leading-[1.65] text-muted">
          A first look at the internal research environment. Illustrative data — implementation details intentionally omitted.
        </p>
      </Reveal>

      <Reveal delay={2}>
        <div className="mt-14 overflow-hidden rounded-[10px] border border-[color:var(--glass-brd)]
                        bg-gradient-to-b from-graphite/60 to-ink/70 shadow-[0_30px_90px_rgba(0,0,0,.55)] backdrop-blur-xl">
          {/* window chrome */}
          <div className="flex items-center gap-2.5 border-b border-[color:var(--line)] bg-white/[.02] px-[18px] py-3.5">
            <div className="flex gap-1.5">
              {[0, 1, 2].map((i) => <i key={i} className="h-[9px] w-[9px] rounded-full border border-[color:var(--line-2)] bg-graphite-2" />)}
            </div>
            <div className="font-mono text-xs tracking-[0.12em] text-muted">HQRP · Pattern Explorer</div>
            <div className="ml-auto rounded-full border border-gold/30 px-2.5 py-1 font-mono text-[10px] tracking-[0.2em] text-gold-soft">PREVIEW</div>
          </div>

          <div className="grid grid-cols-1 gap-px bg-[color:var(--line)] lg:grid-cols-[1.4fr_1fr]">
            {/* LEFT: chart */}
            <div className="bg-ink-2 p-[22px]">
              <PanelHead t="Pattern Explorer — XAU/USD" v={<Confidence />} />
              <PatternChart />
              <Legend items={[['#2E8BFF', 'Discovered behaviour'], ['#D9B872', 'VWAP band'], ['#545E70', 'Price']]} />
            </div>

            {/* RIGHT: metrics + heatmap + sessions */}
            <div className="flex flex-col gap-5 bg-ink-2 p-[22px]">
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded bg-[color:var(--line)]">
                <Metric value="+2.31" unit="R" label="Avg. expectancy" positive />
                <Metric value="61.4" unit="%" label="Hit rate (OOS)" />
                <Metric value="1,204" label="Occurrences" />
                <Metric value="0.94" label="Confidence score" />
              </div>
              <div>
                <PanelHead t="Session heatmap" v="London · NY · Asia" />
                <Heatmap />
                <Legend items={[['#0E141B', 'low'], ['#2E8BFF', 'elevated'], ['#D9B872', 'peak']]} />
              </div>
              <div>
                <PanelHead t="ORB / Volume by session" v="relative" />
                <SessionBars />
              </div>
            </div>
          </div>

          <div className="border-t border-[color:var(--line)] bg-black/20 px-[18px] py-3.5 font-mono text-[10px] tracking-[0.1em] text-muted-2">
            Illustrative preview · figures are synthetic · not investment advice · HIELO does not sell signals or execute trades.
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}

/* ---------- small building blocks ---------- */

function PanelHead({ t, v }: { t: string; v: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-baseline justify-between">
      <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{t}</span>
      <span className="font-mono text-xs text-blue-soft">{v}</span>
    </div>
  );
}

function Metric({ value, unit, label, positive }: { value: string; unit?: string; label: string; positive?: boolean }) {
  return (
    <div className="bg-ink-2 p-[18px]">
      <div className="text-[clamp(22px,2.4vw,30px)] font-extralight tracking-[-0.02em]">
        {value}
        {unit && <em className={`ml-1.5 not-italic text-[13px] ${positive ? 'text-[#6FE0A8]' : 'text-gold-soft'}`}>{unit}</em>}
      </div>
      <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">{label}</div>
    </div>
  );
}

function Legend({ items }: { items: [string, string][] }) {
  return (
    <div className="mt-3.5 flex gap-4 font-mono text-[10px] tracking-[0.1em] text-muted">
      {items.map(([c, l]) => (
        <span key={l} className="flex items-center gap-1.5">
          <b className="inline-block h-2.5 w-2.5 rounded-sm" style={{ background: c }} />{l}
        </span>
      ))}
    </div>
  );
}

/** Animated confidence readout. */
function Confidence() {
  const [c, setC] = useState(0.94);
  useEffect(() => {
    const iv = setInterval(() => setC((v) => Math.min(0.99, Math.max(0.88, v + (Math.random() - 0.5) * 0.02))), 1600);
    return () => clearInterval(iv);
  }, []);
  return <>confidence {c.toFixed(2)}</>;
}

/** Synthetic price + discovered-behaviour line chart. */
function PatternChart() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext('2d')!;
    const series = (n: number, vol: number, seed: number) => {
      let v = 0.5; const a: number[] = [];
      for (let i = 0; i < n; i++) {
        v += Math.sin(i * 0.3 + seed) * 0.02 + (Math.random() - 0.5) * vol;
        v = Math.max(0.1, Math.min(0.9, v)); a.push(v);
      }
      return a;
    };
    const price = series(80, 0.05, 1), pattern = series(80, 0.02, 3);
    const line = (a: number[], color: string, fill: string | null, w = 1.5) => {
      const W = cv.width, H = cv.height;
      ctx.lineWidth = w * devicePixelRatio; ctx.strokeStyle = color; ctx.beginPath();
      a.forEach((v, i) => {
        const x = (i / (a.length - 1)) * W, y = H - v * H * 0.9 - H * 0.05;
        i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
      });
      ctx.stroke();
      if (fill) {
        ctx.lineTo(W, H); ctx.lineTo(0, H); ctx.closePath();
        const g = ctx.createLinearGradient(0, 0, 0, H);
        g.addColorStop(0, fill); g.addColorStop(1, 'transparent'); ctx.fillStyle = g; ctx.fill();
      }
    };
    const draw = () => {
      const W = cv.width, H = cv.height; ctx.clearRect(0, 0, W, H);
      ctx.strokeStyle = 'rgba(255,255,255,.05)'; ctx.lineWidth = 1;
      for (let i = 1; i < 5; i++) { const y = (H / 5) * i; ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
      ctx.fillStyle = 'rgba(217,184,114,.06)'; ctx.fillRect(0, H * 0.32, W, H * 0.28);
      line(price, 'rgba(124,135,154,.7)', null, 1.3);
      line(pattern, 'rgba(46,139,255,.95)', 'rgba(46,139,255,.14)', 1.8);
    };
    const size = () => { const r = cv.getBoundingClientRect(); cv.width = r.width * devicePixelRatio; cv.height = 220 * devicePixelRatio; draw(); };
    const ro = new ResizeObserver(size); ro.observe(cv); size();
    return () => ro.disconnect();
  }, []);
  return <canvas ref={ref} className="w-full" height={220} />;
}

/** Synthetic session heatmap grid. */
function Heatmap() {
  const cells = Array.from({ length: 48 }, () => Math.random());
  return (
    <div className="grid grid-cols-12 gap-[3px]">
      {cells.map((v, i) => (
        <i key={i} className="aspect-square rounded-sm transition-transform duration-300 hover:scale-125"
           style={{
             background: v > 0.82 ? `rgba(217,184,114,${0.5 + v * 0.5})`
               : v > 0.5 ? `rgba(46,139,255,${v * 0.7})`
               : `rgba(46,139,255,${v * 0.25})`,
           }} />
      ))}
    </div>
  );
}

/** ORB / volume-by-session bars, animate up on view. */
function SessionBars() {
  const data = [35, 58, 90, 72, 64, 42];
  const [shown, setShown] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver((e) => e[0].isIntersecting && setShown(true), { threshold: 0.4 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <>
      <div ref={ref} className="flex h-[120px] items-end gap-2">
        {data.map((v, i) => (
          <div key={i}
               className={`flex-1 rounded-t-sm transition-[height] duration-1000 ${i % 2 ? 'bg-gradient-to-b from-gold to-gold/15' : 'bg-gradient-to-b from-blue to-blue/15'}`}
               style={{ height: shown ? `${v}%` : '0%', transitionDelay: `${i * 90}ms` }} />
        ))}
      </div>
      <div className="mt-2 flex gap-2 font-mono text-[9px] tracking-[0.08em] text-muted-2">
        {['00', '04', '08', '12', '16', '20'].map((h) => <span key={h} className="flex-1 text-center">{h}</span>)}
      </div>
    </>
  );
}
