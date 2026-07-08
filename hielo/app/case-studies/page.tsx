import { MarketingShell } from '@/components/site/MarketingShell';
import { PageHero } from '@/components/site/PageHero';
import { Section } from '@/components/site/Section';

const stories = [
  'Research team centralizing pattern review and annotation workflows.',
  'Portfolio group using validated market behaviour to prioritize exploration.',
  'Institutional partner deploying public research summaries for investor communications.',
];

export default function CaseStudiesPage() {
  return (
    <MarketingShell>
      <Section>
        <PageHero
          eyebrow="Case Studies"
          title="Applied research stories, framed without hype."
          body="Representative narratives show how teams use HQRP for research operations, governance, and discoverability instead of predictive theatre."
        />
      </Section>
      <Section className="grid gap-5 lg:grid-cols-3">
        {stories.map((story, index) => (
          <article key={story} className="rounded-[30px] border border-[#e3e7ef] bg-white p-7">
            <p className="text-xs uppercase tracking-[0.22em] text-[#3157d5]">Case {index + 1}</p>
            <p className="mt-4 text-sm leading-7 text-[#20242e]">{story}</p>
          </article>
        ))}
      </Section>
    </MarketingShell>
  );
}