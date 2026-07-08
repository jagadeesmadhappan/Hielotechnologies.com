import { MarketingShell } from '@/components/site/MarketingShell';
import { Section } from '@/components/site/Section';

export default function SignUpPage() {
  return (
    <MarketingShell>
      <Section className="grid min-h-[72vh] items-center lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
        <div>
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#3157d5]">Sign up</p>
          <h1 className="mt-5 text-4xl font-medium tracking-[-0.05em] text-[#111111] lg:text-6xl">Create a premium research account.</h1>
          <p className="mt-5 max-w-lg text-sm leading-7 text-[#666b78]">This flow supports email verification, future billing setup, workspace creation, and enterprise-friendly onboarding cues.</p>
        </div>
        <div className="rounded-[34px] border border-[#e3e7ef] bg-white p-8 shadow-[0_24px_70px_rgba(17,17,17,0.06)]">
          <div className="grid gap-4 sm:grid-cols-2">
            <input className="rounded-2xl border border-[#dde2ec] px-4 py-3 outline-none" placeholder="First name" />
            <input className="rounded-2xl border border-[#dde2ec] px-4 py-3 outline-none" placeholder="Last name" />
            <input className="rounded-2xl border border-[#dde2ec] px-4 py-3 outline-none sm:col-span-2" placeholder="Work email" />
            <input className="rounded-2xl border border-[#dde2ec] px-4 py-3 outline-none sm:col-span-2" placeholder="Password" type="password" />
          </div>
          <button className="mt-5 rounded-full bg-[#3157d5] px-6 py-3 text-sm font-medium text-white">Create account</button>
        </div>
      </Section>
    </MarketingShell>
  );
}