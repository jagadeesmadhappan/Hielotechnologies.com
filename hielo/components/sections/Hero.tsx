'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { fadeUp } from '@/animations/variants';
import { HERO, HERO_STATS } from '@/lib/constants';

/** Full-height opening statement over the live 3D field. */
export function Hero() {
  return (
    <section
      id="hero"
      className="relative z-10 mx-auto flex min-h-screen max-w-content flex-col justify-center px-6 pt-32 sm:px-10 lg:px-[clamp(24px,6vw,120px)]"
    >
      <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}
        className="mb-7 flex items-center gap-3.5 font-mono text-xs uppercase tracking-[0.3em] text-gold-soft
                   before:h-px before:w-[30px] before:bg-gold before:content-['']">
        {HERO.tag}
      </motion.div>

      <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}
        className="max-w-[16ch] text-[clamp(38px,6.4vw,88px)] font-extralight leading-[1.04] tracking-[-0.02em]">
        {HERO.headlineTop}
        <br />
        <span className="text-gold-soft">{HERO.headlineBottom}</span>
      </motion.h1>

      <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2}
        className="mt-8 max-w-[50ch] text-[clamp(16px,1.6vw,21px)] text-muted">
        {HERO.sub}
      </motion.p>

      <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3}
        className="mt-12 flex flex-wrap gap-4">
        <Button href="#philosophy" variant="primary">{HERO.primaryCta}</Button>
        <Button href="#philosophy" variant="ghost">{HERO.secondaryCta}</Button>
      </motion.div>

      <motion.div variants={fadeUp} initial="hidden" animate="show" custom={4}
        className="mt-[70px] flex flex-wrap gap-8 border-t border-[color:var(--line)] pt-9 sm:gap-12 lg:gap-[72px]">
        {HERO_STATS.map((s) => (
          <div key={s.label}>
            <div className="text-[clamp(26px,3vw,40px)] font-extralight tracking-[-0.02em]">
              <em className="not-italic text-gold-soft">{s.emphasis}</em>{s.value}
            </div>
            <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{s.label}</div>
          </div>
        ))}
      </motion.div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-2">
        Scroll
        <span className="relative h-11 w-px overflow-hidden bg-gradient-to-b from-muted-2 to-transparent">
          <span className="absolute left-0 top-0 h-3.5 w-px bg-blue"
                style={{ animation: 'hieloRail 2.2s cubic-bezier(.22,.61,.36,1) infinite' }} />
        </span>
      </div>
      <style>{`@keyframes hieloRail{0%{transform:translateY(-14px)}100%{transform:translateY(44px)}}`}</style>
    </section>
  );
}
