import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MarketingShell } from '@/components/site/MarketingShell';
import { PageHero } from '@/components/site/PageHero';
import { Section } from '@/components/site/Section';
import { PATTERNS } from '@/lib/site-data';

export function generateStaticParams() {
  return PATTERNS.map((pattern) => ({ slug: pattern.slug }));
}

export default function PatternDetailPage({ params }: { params: { slug: string } }) {
  const pattern = PATTERNS.find((item) => item.slug === params.slug);

  if (!pattern) {
    notFound();
  }

  return (
    <MarketingShell>
      <Section>
        <PageHero
          eyebrow={`${pattern.market} pattern`}
          title={pattern.name}
          body={pattern.summary}
        />
      </Section>

      <Section className="grid gap-6 lg:grid-cols-3">
        <article className="rounded-[30px] border border-[#e3e7ef] bg-white p-7 lg:col-span-2">
          <h2 className="text-2xl font-medium tracking-[-0.04em] text-[#111111]">Research edge</h2>
          <p className="mt-4 text-sm leading-7 text-[#666b78]">{pattern.edge}</p>
          <h3 className="mt-8 text-lg font-medium text-[#111111]">Validation snapshot</h3>
          <p className="mt-3 text-sm leading-7 text-[#666b78]">{pattern.validation}</p>
        </article>
        <aside className="rounded-[30px] border border-[#e3e7ef] bg-[linear-gradient(180deg,#ffffff,#f7f9fc)] p-7">
          <p className="text-xs uppercase tracking-[0.22em] text-[#3157d5]">Related</p>
          <div className="mt-4 grid gap-3">
            {PATTERNS.filter((item) => item.slug !== pattern.slug).slice(0, 3).map((item) => (
              <Link key={item.slug} href={`/pattern-library/${item.slug}`} className="rounded-2xl border border-[#e8ebf1] bg-white px-4 py-3 text-sm text-[#20242e]">
                {item.name}
              </Link>
            ))}
          </div>
        </aside>
      </Section>
    </MarketingShell>
  );
}