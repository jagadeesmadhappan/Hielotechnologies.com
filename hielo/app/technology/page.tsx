import { MarketingShell } from '@/components/site/MarketingShell';
import { PageHero } from '@/components/site/PageHero';
import { Section } from '@/components/site/Section';

const architecture = [
  ['Data Collection', 'Structured ingestion, normalization, and historical integrity controls.'],
  ['Research Engine', 'Feature generation, discovery pipelines, validation layers, and orchestration.'],
  ['Cloud Infrastructure', 'Scalable compute, storage tiers, and observability for research workflows.'],
  ['Security', 'Role-aware access, audit logs, and enterprise control surfaces.'],
  ['API', 'Programmatic access to patterns, reports, workspace assets, and governance objects.'],
  ['Performance', 'Lightweight frontend delivery with selective visual depth and tight interaction budgets.'],
];

export default function TechnologyPage() {
  return (
    <MarketingShell>
      <Section>
        <PageHero
          eyebrow="Technology"
          title="Architecture that looks premium because it is structured properly."
          body="This page covers architecture, AI pipeline, research engine, cloud infrastructure, security, API, and performance in a layout that feels like serious software."
        />
      </Section>
      <Section className="grid gap-5 lg:grid-cols-3">
        {architecture.map(([title, body]) => (
          <article key={title} className="rounded-[30px] border border-[#e3e7ef] bg-white p-7 shadow-[0_16px_40px_rgba(17,17,17,0.04)]">
            <h2 className="text-xl font-medium tracking-[-0.04em] text-[#111111]">{title}</h2>
            <p className="mt-3 text-sm leading-7 text-[#666b78]">{body}</p>
          </article>
        ))}
      </Section>
    </MarketingShell>
  );
}