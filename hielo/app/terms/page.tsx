import { MarketingShell } from '@/components/site/MarketingShell';
import { PageHero } from '@/components/site/PageHero';
import { Section } from '@/components/site/Section';

const terms = [
  'HQRP is a research platform and does not provide investment advice or trade execution services.',
  'Access rights depend on subscription tier, organizational permissions, and account status.',
  'Users are responsible for account security, credential control, and lawful platform usage.',
  'Published metrics may include illustrative examples and should be interpreted as research context only.',
];

export default function TermsPage() {
  return (
    <MarketingShell>
      <Section>
        <PageHero
          eyebrow="Terms"
          title="Product usage terms with clear boundaries."
          body="These terms summarize platform scope, account obligations, and usage boundaries for HIELO and HQRP services."
        />
      </Section>

      <Section className="grid gap-4">
        {terms.map((term, index) => (
          <article key={term} className="rounded-[28px] border border-[#e3e7ef] bg-white p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-[#8a92a2]">Clause {index + 1}</p>
            <p className="mt-3 text-sm leading-7 text-[#20242e]">{term}</p>
          </article>
        ))}
      </Section>
    </MarketingShell>
  );
}