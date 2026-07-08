import { MarketingShell } from '@/components/site/MarketingShell';
import { PageHero } from '@/components/site/PageHero';
import { Section } from '@/components/site/Section';
import { BRAND } from '@/lib/site-data';

export default function ContactPage() {
  return (
    <MarketingShell>
      <Section>
        <PageHero
          eyebrow="Contact"
          title="Talk to research, sales, or collaboration teams."
          body="The contact page supports research collaboration, sales inquiries, support, and general company outreach with a premium, balanced layout."
        />
      </Section>
      <Section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[30px] border border-[#e3e7ef] bg-white p-7">
          <h2 className="text-2xl font-medium tracking-[-0.04em] text-[#111111]">Channels</h2>
          <div className="mt-5 grid gap-4 text-sm text-[#666b78]">
            <p>Research collaboration</p>
            <p>Sales inquiry</p>
            <p>Support</p>
            <p>Office locations</p>
            <p>{BRAND.email}</p>
          </div>
        </div>
        <div className="rounded-[30px] border border-[#e3e7ef] bg-white p-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <input className="rounded-2xl border border-[#dde2ec] px-4 py-3 outline-none" placeholder="Name" />
            <input className="rounded-2xl border border-[#dde2ec] px-4 py-3 outline-none" placeholder="Email" />
            <input className="rounded-2xl border border-[#dde2ec] px-4 py-3 outline-none sm:col-span-2" placeholder="Subject" />
            <textarea className="min-h-[180px] rounded-2xl border border-[#dde2ec] px-4 py-3 outline-none sm:col-span-2" placeholder="Tell us about your inquiry" />
          </div>
          <button className="mt-5 rounded-full bg-[#111111] px-6 py-3 text-sm font-medium text-white">Send inquiry</button>
        </div>
      </Section>
    </MarketingShell>
  );
}