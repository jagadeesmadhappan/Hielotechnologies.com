import { SectionShell } from '@/components/ui/SectionShell';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { VISION } from '@/lib/constants';

/** Section 6 — mission statement, centred and quiet. */
export function FutureVision() {
  return (
    <SectionShell id="vision" className="text-center">
      <div className="mx-auto max-w-[880px]">
        <Reveal><Eyebrow center>§ 06 — Future Vision</Eyebrow></Reveal>
        <Reveal delay={1}>
          <h2 className="mb-7 text-[clamp(30px,4.6vw,62px)] font-extralight leading-[1.04] tracking-[-0.02em]">
            {VISION.headlineTop}<br />{VISION.headlineBottom}
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mx-auto max-w-[56ch] text-[clamp(16px,1.5vw,20px)] leading-[1.65] text-muted">
            {VISION.body}
          </p>
        </Reveal>
        <Reveal delay={3}>
          <div className="mt-14 flex flex-wrap justify-center gap-5 sm:gap-9 lg:gap-[54px]">
            {VISION.pillars.map((p) => (
              <div key={p}
                   className="py-3 font-mono text-xs uppercase tracking-[0.2em] text-muted
                              before:mr-3 before:align-middle before:text-[8px] before:text-gold before:content-['◆']">
                {p}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
