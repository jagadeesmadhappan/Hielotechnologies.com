import Link from 'next/link';
import { MarketingShell } from '@/components/site/MarketingShell';
import { PageHero } from '@/components/site/PageHero';
import { Section } from '@/components/site/Section';
import { PATTERNS } from '@/lib/site-data';

export default function PatternLibraryPage() {
  return (
    <MarketingShell>
      <Section>
        <PageHero
          eyebrow="Pattern Library"
          title="A structured library of market behaviour."
          body="Browse pattern families spanning Forex, Gold, indices, sessions, VWAP, ORB, volume, liquidity, fair value gap, breakout, and mean-reversion research."
        />
      </Section>

      <Section className="grid gap-5 lg:grid-cols-2">
        {PATTERNS.map((pattern) => (
          <Link key={pattern.slug} href={`/pattern-library/${pattern.slug}`} className="rounded-[32px] border border-[#e3e7ef] bg-white p-7 shadow-[0_18px_48px_rgba(17,17,17,0.04)] transition-transform hover:-translate-y-0.5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#8b92a0]">{pattern.market}</p>
                <h2 className="mt-3 text-2xl font-medium tracking-[-0.04em] text-[#111111]">{pattern.name}</h2>
              </div>
              <span className="rounded-full bg-[#eff4ff] px-3 py-1 text-xs font-medium text-[#3157d5]">Detail</span>
            </div>
            <p className="mt-4 text-sm leading-7 text-[#666b78]">{pattern.summary}</p>
            <p className="mt-4 text-sm font-medium text-[#20242e]">{pattern.validation}</p>
          </Link>
        ))}
      </Section>
    </MarketingShell>
  );
}