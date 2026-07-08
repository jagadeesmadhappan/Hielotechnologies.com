import Link from 'next/link';
import { MarketingShell } from '@/components/site/MarketingShell';
import { PageHero } from '@/components/site/PageHero';
import { ResearchSpotlight } from '@/components/site/ResearchSpotlight';
import { Section } from '@/components/site/Section';
import {
  FEATURED_RESEARCH,
  HOME_METRICS,
  HOME_PILLARS,
  PATTERNS,
  TESTIMONIALS,
  WORKFLOW,
} from '@/lib/site-data';

export default function Home() {
  return (
    <MarketingShell>
      <Section className="pb-12 pt-14 sm:pt-16 lg:pb-20 lg:pt-20">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <div className="inline-flex rounded-full border border-[#dde3ef] bg-white/80 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-[#3157d5] shadow-[0_12px_34px_rgba(17,17,17,0.04)]">
              HIELO Quantitative Research Partner
            </div>
            <PageHero
              eyebrow="Premium AI research platform"
              title="Discover market intelligence through AI."
              body="HIELO TECHNOLOGIE builds quantitative research systems that identify statistically repeatable market behaviour across Forex, Gold, indices, and session structure."
              className="mt-8"
            />
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/research"
                className="inline-flex rounded-full bg-[linear-gradient(135deg,#3157d5,#5f8dff)] px-6 py-3 text-sm font-medium text-white shadow-[0_20px_50px_rgba(49,87,213,0.26)] transition-transform hover:-translate-y-0.5"
              >
                Explore research
              </Link>
              <Link
                href="/pattern-library"
                className="inline-flex rounded-full border border-[#d8deeb] bg-white px-6 py-3 text-sm font-medium text-[#111111] shadow-[0_10px_24px_rgba(17,17,17,0.05)]"
              >
                Browse pattern library
              </Link>
            </div>
          </div>

          <div className="rounded-[36px] border border-white/70 bg-white/72 p-4 shadow-[0_30px_80px_rgba(17,17,17,0.06)] backdrop-blur-xl sm:p-5">
            <div className="rounded-[28px] border border-[#e4e8f0] bg-[linear-gradient(180deg,#ffffff,#f7f9fc)] p-6">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.22em] text-[#7b8190]">
                <span>Research Overview</span>
                <span>HQRP Preview</span>
              </div>
              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {HOME_METRICS.map((metric) => (
                  <div key={metric.label} className="rounded-[26px] border border-[#e7ebf2] bg-white p-5 shadow-[0_10px_30px_rgba(17,17,17,0.04)]">
                    <p className="text-3xl font-medium tracking-[-0.05em] text-[#111111]">{metric.value}</p>
                    <p className="mt-2 text-sm font-medium text-[#1f2430]">{metric.label}</p>
                    <p className="mt-2 text-sm leading-6 text-[#6a7180]">{metric.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="pt-8 lg:pt-12">
        <div className="grid gap-6 lg:grid-cols-3">
          {HOME_PILLARS.map((pillar) => (
            <article key={pillar.title} className="rounded-[32px] border border-white/70 bg-white/80 p-8 shadow-[0_24px_70px_rgba(17,17,17,0.05)] backdrop-blur-xl">
              <div className="h-2 w-20 rounded-full bg-[linear-gradient(90deg,#3157d5,#8bc5ff)]" />
              <h2 className="mt-8 text-2xl font-medium tracking-[-0.04em] text-[#111111]">{pillar.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[#656b79]">{pillar.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-[11px] uppercase tracking-[0.32em] text-[#3157d5]">Research philosophy</p>
            <h2 className="mt-6 max-w-lg text-4xl font-medium tracking-[-0.05em] text-[#111111] lg:text-5xl">
              Built like an institutional research practice, not a marketing funnel.
            </h2>
          </div>
          <div className="grid gap-4">
            {WORKFLOW.map((step, index) => (
              <div key={step.title} className="rounded-[28px] border border-[#e2e7ef] bg-white/86 p-6 shadow-[0_18px_44px_rgba(17,17,17,0.04)]">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#eef3ff] text-sm font-semibold text-[#3157d5]">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-lg font-medium text-[#111111]">{step.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[#666b78]">{step.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <ResearchSpotlight />
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div>
            <p className="text-[11px] uppercase tracking-[0.32em] text-[#3157d5]">Featured research</p>
            <h2 className="mt-5 max-w-md text-4xl font-medium tracking-[-0.05em] text-[#111111] lg:text-5xl">
              Public-facing research snapshots, designed with restraint.
            </h2>
          </div>
          <div className="grid gap-5">
            {FEATURED_RESEARCH.map((item) => (
              <article key={item.title} className="rounded-[30px] border border-[#e4e8f0] bg-white p-7 shadow-[0_18px_48px_rgba(17,17,17,0.05)]">
                <h3 className="text-2xl font-medium tracking-[-0.04em] text-[#111111]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#666b78]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-[40px] border border-[#e4e8f0] bg-[linear-gradient(135deg,#ffffff,#eef4ff_65%,#f8f4ea)] p-8 shadow-[0_24px_80px_rgba(17,17,17,0.06)] sm:p-10 lg:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-[11px] uppercase tracking-[0.32em] text-[#3157d5]">Pattern library</p>
              <h2 className="mt-5 max-w-lg text-4xl font-medium tracking-[-0.05em] text-[#111111] lg:text-5xl">
                A library of repeatable behaviour, not a feed of opinions.
              </h2>
            </div>
            <div className="grid gap-4">
              {PATTERNS.slice(0, 3).map((pattern) => (
                <Link
                  key={pattern.slug}
                  href={`/pattern-library/${pattern.slug}`}
                  className="rounded-[28px] border border-white/70 bg-white/84 p-5 shadow-[0_14px_34px_rgba(17,17,17,0.05)] transition-transform hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-[#111111]">{pattern.name}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.22em] text-[#7b8190]">{pattern.market}</p>
                    </div>
                    <span className="rounded-full bg-[#eff4ff] px-3 py-1 text-xs font-medium text-[#3157d5]">View detail</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[#666b78]">{pattern.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {TESTIMONIALS.map((item) => (
            <article key={item.person} className="rounded-[32px] border border-white/70 bg-white/82 p-8 shadow-[0_20px_56px_rgba(17,17,17,0.05)]">
              <p className="text-lg leading-8 text-[#20242e]">“{item.quote}”</p>
              <div className="mt-8 text-sm text-[#666b78]">
                <p className="font-medium text-[#111111]">{item.person}</p>
                <p>{item.company}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="pt-4">
        <div className="rounded-[40px] bg-[#111827] px-8 py-10 text-white shadow-[0_40px_100px_rgba(17,24,39,0.24)] sm:px-10 lg:px-14 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-[11px] uppercase tracking-[0.32em] text-[#9eb5ff]">Next step</p>
              <h2 className="mt-5 max-w-xl text-4xl font-medium tracking-[-0.05em] lg:text-5xl">
                Explore the full platform architecture locally.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#b5bfd2]">
                Browse the research pages, platform views, dashboard concepts, and documentation routes to review the complete experience.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/technology" className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-[#111827]">Platform architecture</Link>
              <Link href="/sign-up" className="inline-flex rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white">Create workspace</Link>
            </div>
          </div>
        </div>
      </Section>
    </MarketingShell>
  );
}
