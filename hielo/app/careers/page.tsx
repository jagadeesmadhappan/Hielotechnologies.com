import { MarketingShell } from '@/components/site/MarketingShell';
import { PageHero } from '@/components/site/PageHero';
import { Section } from '@/components/site/Section';
import { JOB_OPENINGS } from '@/lib/site-data';

export default function CareersPage() {
  return (
    <MarketingShell>
      <Section>
        <PageHero
          eyebrow="Careers"
          title="Join a company building research systems with taste and rigor."
          body="The careers page covers open positions, culture, benefits, and process without collapsing into generic startup clichés."
        />
      </Section>
      <Section className="grid gap-4">
        {JOB_OPENINGS.map((job) => (
          <article key={job} className="flex flex-col gap-4 rounded-[30px] border border-[#e3e7ef] bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-medium tracking-[-0.04em] text-[#111111]">{job}</h2>
              <p className="mt-2 text-sm text-[#666b78]">Research-first environment · Hybrid collaboration · Premium product standards</p>
            </div>
            <button className="rounded-full border border-[#d8deeb] px-5 py-2 text-sm font-medium text-[#111111]">Apply</button>
          </article>
        ))}
      </Section>
    </MarketingShell>
  );
}