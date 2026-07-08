import { MarketingShell } from '@/components/site/MarketingShell';
import { PageHero } from '@/components/site/PageHero';
import { Section } from '@/components/site/Section';
import { PRICING_PLANS } from '@/lib/site-data';

export default function PricingPage() {
  return (
    <MarketingShell>
      <Section>
        <PageHero
          eyebrow="Pricing"
          title="Plans for exploration, professional research, and enterprise governance."
          body="The pricing page provides free, professional, and enterprise plans with a premium SaaS structure instead of a broker-style sales pitch."
        />
      </Section>
      <Section className="grid gap-5 lg:grid-cols-3">
        {PRICING_PLANS.map((plan) => (
          <article key={plan.name} className="rounded-[34px] border border-[#e3e7ef] bg-white p-8 shadow-[0_18px_48px_rgba(17,17,17,0.05)]">
            <p className="text-sm font-medium text-[#3157d5]">{plan.name}</p>
            <p className="mt-5 text-4xl font-medium tracking-[-0.05em] text-[#111111]">{plan.price}</p>
            <p className="mt-4 text-sm leading-7 text-[#666b78]">{plan.summary}</p>
          </article>
        ))}
      </Section>
    </MarketingShell>
  );
}