import Link from 'next/link';
import { MarketingShell } from '@/components/site/MarketingShell';
import { Section } from '@/components/site/Section';

export default function LoginPage() {
  return (
    <MarketingShell>
      <Section className="grid min-h-[72vh] items-center lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
        <div>
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#3157d5]">Login</p>
          <h1 className="mt-5 text-4xl font-medium tracking-[-0.05em] text-[#111111] lg:text-6xl">Access your research workspace.</h1>
          <p className="mt-5 max-w-lg text-sm leading-7 text-[#666b78]">Email login, Google, GitHub, remembered sessions, password recovery, and future-ready 2FA live inside a restrained auth surface.</p>
        </div>
        <div className="rounded-[34px] border border-[#e3e7ef] bg-white p-8 shadow-[0_24px_70px_rgba(17,17,17,0.06)]">
          <div className="grid gap-4">
            <input className="rounded-2xl border border-[#dde2ec] px-4 py-3 outline-none" placeholder="Email" />
            <input className="rounded-2xl border border-[#dde2ec] px-4 py-3 outline-none" placeholder="Password" type="password" />
            <label className="flex items-center gap-2 text-sm text-[#666b78]"><input type="checkbox" /> Remember me</label>
            <button className="rounded-full bg-[#111111] px-5 py-3 text-sm font-medium text-white">Log in</button>
            <button className="rounded-full border border-[#dde2ec] px-5 py-3 text-sm font-medium text-[#111111]">Continue with Google</button>
            <button className="rounded-full border border-[#dde2ec] px-5 py-3 text-sm font-medium text-[#111111]">Continue with GitHub</button>
          </div>
          <div className="mt-6 flex justify-between text-sm text-[#666b78]">
            <Link href="/sign-up">Create account</Link>
            <Link href="/contact">Forgot password</Link>
          </div>
        </div>
      </Section>
    </MarketingShell>
  );
}