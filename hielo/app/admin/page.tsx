import { ProductShell } from '@/components/site/ProductShell';
import { ADMIN_MODULES } from '@/lib/site-data';

export default function AdminPage() {
  return (
    <ProductShell
      title="Admin Panel"
      subtitle="Users, roles, permissions, research content, analytics, support tickets, feature flags, system settings, and audit logs in one moderated control surface."
    >
      <section className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
        <article className="rounded-[32px] border border-[#e3e7ef] bg-white p-7 shadow-[0_18px_44px_rgba(17,17,17,0.04)]">
          <p className="text-xs uppercase tracking-[0.22em] text-[#3157d5]">Operations</p>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.05em] text-[#111111]">Control and governance.</h2>
          <p className="mt-4 text-sm leading-7 text-[#666b78]">This surface is structured for internal operators, not end users, with clarity around moderation, permissions, and platform health.</p>
        </article>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {ADMIN_MODULES.map((item) => (
            <article key={item} className="rounded-[26px] border border-[#e3e7ef] bg-white p-5 text-sm font-medium text-[#20242e] shadow-[0_12px_24px_rgba(17,17,17,0.03)]">
              {item}
            </article>
          ))}
        </div>
      </section>
    </ProductShell>
  );
}