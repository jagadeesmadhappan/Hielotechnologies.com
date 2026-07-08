import { ProductShell } from '@/components/site/ProductShell';
import { DASHBOARD_MODULES } from '@/lib/site-data';

export default function DashboardPage() {
  return (
    <ProductShell
      title="User Dashboard"
      subtitle="Dashboard overview, research workspace, saved patterns, watchlists, AI reports, billing, API keys, and profile controls."
    >
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-[32px] border border-[#e3e7ef] bg-[#0d1321] p-8 text-white shadow-[0_30px_80px_rgba(13,19,33,0.16)]">
          <p className="text-xs uppercase tracking-[0.24em] text-[#8faeff]">Research workspace</p>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.05em]">Pattern Explorer</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {['Confidence 0.94', '1,204 occurrences', '61.4% OOS hit rate'].map((item) => (
              <div key={item} className="rounded-[24px] border border-white/10 bg-white/5 p-5 text-sm text-[#d1d8e6]">{item}</div>
            ))}
          </div>
        </section>

        <section className="grid gap-4">
          {['Subscription', 'Notifications', 'Security'].map((item) => (
            <article key={item} className="rounded-[28px] border border-[#e3e7ef] bg-white p-6">
              <h3 className="text-lg font-medium text-[#111111]">{item}</h3>
              <p className="mt-2 text-sm leading-7 text-[#666b78]">Workspace-level settings and operational controls for professional research teams.</p>
            </article>
          ))}
        </section>
      </div>

      <section className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {DASHBOARD_MODULES.map((item) => (
          <article key={item} className="rounded-[24px] border border-[#e3e7ef] bg-white p-5 text-sm font-medium text-[#20242e] shadow-[0_12px_24px_rgba(17,17,17,0.03)]">
            {item}
          </article>
        ))}
      </section>
    </ProductShell>
  );
}