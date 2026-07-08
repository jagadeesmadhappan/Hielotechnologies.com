import { MarketingShell } from '@/components/site/MarketingShell';
import { PageHero } from '@/components/site/PageHero';
import { Section } from '@/components/site/Section';

const principles = [
  'Evidence over intuition',
  'Transparency over mystique',
  'Repeatability over prediction',
  'Product quality that respects institutional buyers',
];

export default function AboutPage() {
  return (
    <MarketingShell>
      <Section>
        <PageHero
          eyebrow="About"
          title="A quantitative research company with product discipline."
          body="HIELO TECHNOLOGIE exists to build AI-powered research systems that discover statistically repeatable market behaviour and present it with the clarity serious teams expect."
        />
      </Section>

      <Section className="grid gap-6 lg:grid-cols-3">
        {[
          ['Vision', 'Turn quantitative finance into a living, self-correcting body of evidence.'],
          ['Mission', 'Build AI systems that discover, validate, and operationalize repeatable market behaviour.'],
          ['Values', 'Precision, trust, restraint, rigorous iteration, and product quality without noise.'],
        ].map(([title, body]) => (
          <article key={title} className="rounded-[30px] border border-[#e3e7ef] bg-white p-7 shadow-[0_18px_48px_rgba(17,17,17,0.05)]">
            <h2 className="text-2xl font-medium tracking-[-0.04em] text-[#111111]">{title}</h2>
            <p className="mt-4 text-sm leading-7 text-[#666b78]">{body}</p>
          </article>
        ))}
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-[11px] uppercase tracking-[0.32em] text-[#3157d5]">Research principles</p>
            <h2 className="mt-5 text-4xl font-medium tracking-[-0.05em] text-[#111111]">How HIELO thinks.</h2>
          </div>
          <div className="grid gap-4">
            {principles.map((item, index) => (
              <div key={item} className="rounded-[28px] border border-[#e3e7ef] bg-white/84 p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-[#8a92a2]">0{index + 1}</p>
                <p className="mt-3 text-lg text-[#111111]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </MarketingShell>
  );
}