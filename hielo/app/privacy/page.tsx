import { MarketingShell } from '@/components/site/MarketingShell';
import { PageHero } from '@/components/site/PageHero';
import { Section } from '@/components/site/Section';

const blocks = [
  {
    title: 'Data handling',
    body: 'We collect only the data required to operate HQRP features, maintain account security, and improve product performance in a controlled manner.',
  },
  {
    title: 'Research content',
    body: 'Workspace data, saved patterns, and annotations are treated as protected product content with role-aware access and auditability.',
  },
  {
    title: 'Compliance posture',
    body: 'We maintain clear internal policies for retention, access controls, and incident response aligned with enterprise expectations.',
  },
];

export default function PrivacyPage() {
  return (
    <MarketingShell>
      <Section>
        <PageHero
          eyebrow="Privacy"
          title="A straightforward privacy posture for a research platform."
          body="This page provides a high-level view of data handling, account security, and operational controls used across HIELO products."
        />
      </Section>

      <Section className="grid gap-5 lg:grid-cols-3">
        {blocks.map((block) => (
          <article key={block.title} className="rounded-[30px] border border-[#e3e7ef] bg-white p-7">
            <h2 className="text-2xl font-medium tracking-[-0.04em] text-[#111111]">{block.title}</h2>
            <p className="mt-4 text-sm leading-7 text-[#666b78]">{block.body}</p>
          </article>
        ))}
      </Section>
    </MarketingShell>
  );
}