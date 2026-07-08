import { MarketingShell } from '@/components/site/MarketingShell';
import { PageHero } from '@/components/site/PageHero';
import { Section } from '@/components/site/Section';

const labAreas = [
  'Machine learning systems for pattern discovery',
  'Feature engineering for session, VWAP, liquidity, and volatility context',
  'Model training pipelines with reproducible experiment tracking',
  'Future experiments around probabilistic ranking and adaptive clustering',
];

export default function AILabPage() {
  return (
    <MarketingShell>
      <Section>
        <PageHero
          eyebrow="AI Lab"
          title="Experimental systems with a production research mindset."
          body="The AI Lab page frames machine learning, data engineering, feature engineering, model training, and future experiments as a coherent research program."
        />
      </Section>
      <Section className="grid gap-5 lg:grid-cols-2">
        {labAreas.map((item) => (
          <article key={item} className="rounded-[30px] border border-[#e3e7ef] bg-white p-7">
            <p className="text-sm leading-7 text-[#20242e]">{item}</p>
          </article>
        ))}
      </Section>
    </MarketingShell>
  );
}