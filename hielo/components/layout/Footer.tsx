import { BRAND } from '@/lib/constants';

/** Minimal footer: brand, navigation, contact, socials, copyright. */
export function Footer() {
  return (
    <footer className="relative z-10 mx-auto mt-16 max-w-content border-t border-[color:var(--line)] px-6 pb-10 pt-[70px] sm:px-10 lg:px-[clamp(24px,6vw,120px)]">
      <div className="mb-14 flex flex-wrap justify-between gap-10">
        <div>
          <div className="mb-4 flex items-center gap-3 text-xl tracking-brand font-light">
            <span className="h-[7px] w-[7px] rounded-full bg-blue shadow-[0_0_12px_#2E8BFF]" />
            H<b className="font-normal">IELO</b>
          </div>
          <p className="max-w-[34ch] text-sm text-muted">
            {BRAND.full} — discovering patterns before the market does.
          </p>
        </div>

        <div className="flex flex-wrap gap-10 lg:gap-[90px]">
          <FooterCol title="Research" links={[['Methodology', '#philosophy'], ['Intelligence', '#network'], ['Platform', '#dashboard']]} />
          <FooterCol title="Company" links={[['Who We Are', '#who'], ['Vision', '#vision'], ['Careers', '#']]} />
          <FooterCol title="Contact" links={[[BRAND.email, `mailto:${BRAND.email}`], ['Press', '#']]} />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[color:var(--line)] pt-7 font-mono text-[11px] tracking-[0.1em] text-muted-2">
        <span>© {new Date().getFullYear()} HIELO Technologie · Quantitative Research Partner</span>
        <div className="flex gap-5">
          {['LinkedIn', 'GitHub', 'Research Notes'].map((s) => (
            <a key={s} href="#" className="transition-colors hover:text-blue-soft">{s}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="mb-4 font-mono text-[11px] font-normal uppercase tracking-[0.2em] text-muted-2">{title}</h4>
      {links.map(([label, href]) => (
        <a key={label} href={href} className="block py-1.5 text-sm text-muted transition-colors hover:text-paper">{label}</a>
      ))}
    </div>
  );
}
