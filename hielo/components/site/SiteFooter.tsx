import Link from 'next/link';
import { BRAND, MAIN_NAV } from '@/lib/site-data';
import { Section } from './Section';

export function SiteFooter() {
  return (
    <footer className="border-t border-[#e6e8ef] bg-white">
      <Section className="pb-10 pt-16 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr_.8fr]">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#3157d5]">{BRAND.company}</p>
            <h2 className="mt-5 max-w-md text-3xl font-medium tracking-[-0.05em] text-[#111111]">
              Premium AI research infrastructure for teams that care about evidence.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-[#666b78]">
              {BRAND.tagline} HQRP brings quantitative research, pattern discovery, documentation,
              and governance into one refined platform.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-[#111111]">Navigation</p>
            <div className="mt-4 grid gap-3 text-sm text-[#666b78]">
              {MAIN_NAV.slice(0, 8).map((item) => (
                <Link key={item.href} href={item.href} className="transition-colors hover:text-[#111111]">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-[#111111]">Company</p>
            <div className="mt-4 grid gap-3 text-sm text-[#666b78]">
              <Link href="/pricing" className="transition-colors hover:text-[#111111]">Pricing</Link>
              <Link href="/careers" className="transition-colors hover:text-[#111111]">Careers</Link>
              <Link href="/documentation" className="transition-colors hover:text-[#111111]">Documentation</Link>
              <Link href="/contact" className="transition-colors hover:text-[#111111]">Contact</Link>
              <a href={`mailto:${BRAND.email}`} className="transition-colors hover:text-[#111111]">{BRAND.email}</a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-[#e6e8ef] pt-6 text-xs uppercase tracking-[0.18em] text-[#8b92a0] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 HIELO Technologie</p>
          <div className="flex gap-5">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/blog">Research Notes</Link>
          </div>
        </div>
      </Section>
    </footer>
  );
}