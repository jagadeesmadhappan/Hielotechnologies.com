import { MarketingShell } from '@/components/site/MarketingShell';
import { PageHero } from '@/components/site/PageHero';
import { Section } from '@/components/site/Section';
import { FEATURED_RESEARCH, WORKFLOW } from '@/lib/site-data';

export default function ResearchPage() {
  return (
    <MarketingShell>
      <Section>
        <PageHero
          eyebrow="Research"
          title="Quantitative research that can survive scrutiny."
          body="The research stack spans data engineering, market behaviour analysis, validation systems, public writeups, and downloadable outputs structured like a serious lab."
        />
      </Section>

      <Section className="grid gap-6 lg:grid-cols-2">
        {WORKFLOW.map((step) => (
          <article key={step.title} className="rounded-[30px] border border-[#e3e7ef] bg-white p-7 shadow-[0_16px_40px_rgba(17,17,17,0.04)]">
            <h2 className="text-2xl font-medium tracking-[-0.04em] text-[#111111]">{step.title}</h2>
            <p className="mt-4 text-sm leading-7 text-[#666b78]">{step.body}</p>
          </article>
        ))}
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {FEATURED_RESEARCH.map((item) => (
            <article key={item.title} className="rounded-[30px] border border-[#e3e7ef] bg-[linear-gradient(180deg,#ffffff,#f8fafc)] p-7">
              <p className="text-xs uppercase tracking-[0.22em] text-[#3157d5]">White paper preview</p>
              <h3 className="mt-4 text-2xl font-medium tracking-[-0.04em] text-[#111111]">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#666b78]">{item.body}</p>
            </article>
          ))}
        </div>
      </Section>
    </MarketingShell>
  );
}