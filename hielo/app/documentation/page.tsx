import { MarketingShell } from '@/components/site/MarketingShell';
import { PageHero } from '@/components/site/PageHero';
import { Section } from '@/components/site/Section';
import { DOC_SECTIONS } from '@/lib/site-data';

export default function DocumentationPage() {
  return (
    <MarketingShell>
      <Section>
        <PageHero
          eyebrow="Documentation"
          title="A documentation surface that feels like part of the product."
          body="Platform overview, getting started, API documentation, methodology, FAQs, and release notes are organized as a premium docs experience."
        />
      </Section>
      <Section className="grid gap-4 lg:grid-cols-3">
        {DOC_SECTIONS.map((item) => (
          <article key={item} className="rounded-[28px] border border-[#e3e7ef] bg-white p-6">
            <p className="text-lg font-medium text-[#111111]">{item}</p>
          </article>
        ))}
      </Section>
    </MarketingShell>
  );
}