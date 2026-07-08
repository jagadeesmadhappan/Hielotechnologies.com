import { SectionShell } from '@/components/ui/SectionShell';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { GlassCard } from '@/components/ui/GlassCard';
import { TECH } from '@/lib/constants';

/** Section 5 — technology capability cards with hover glow + tilt. */
export function Technology() {
  return (
    <SectionShell id="tech">
      <Reveal><Eyebrow>§ 05 — Technology</Eyebrow></Reveal>
      <Reveal delay={1}>
        <h2 className="max-w-[15ch] text-[clamp(30px,4.6vw,62px)] font-extralight leading-[1.04] tracking-[-0.02em]">
          Built like a lab,<br />not a product demo.
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {TECH.map((t, i) => (
          <Reveal key={t.id} delay={i % 4}>
            <GlassCard className="flex min-h-[170px] flex-col p-[22px] pt-[26px]">
              <div className="font-mono text-[11px] tracking-[0.14em] text-muted-2">/{t.id}</div>
              <div className="mb-auto mt-[18px] text-[28px] leading-none text-blue-soft">{t.glyph}</div>
              <h3 className="mt-auto text-[18px] font-normal">{t.label}</h3>
              <p className="mt-2 text-[13px] leading-[1.55] text-muted">{t.blurb}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
