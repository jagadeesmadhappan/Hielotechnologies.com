import Link from 'next/link';
import { BRAND } from '@/lib/site-data';

export function ProductShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f3f5f8] text-[#111111]">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        <aside className="border-b border-[#e4e8ef] bg-white px-6 py-8 lg:border-b-0 lg:border-r">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#3157d5,#6fa7ff)] text-sm font-semibold text-white">H</span>
            <div>
              <div className="text-sm font-semibold tracking-[0.22em]">{BRAND.name}</div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-[#8790a1]">{title}</div>
            </div>
          </Link>

          <div className="mt-10 grid gap-2 text-sm text-[#67707e]">
            <Link href="/dashboard" className="rounded-2xl px-4 py-3 transition-colors hover:bg-[#f3f6fb] hover:text-[#111111]">User Dashboard</Link>
            <Link href="/admin" className="rounded-2xl px-4 py-3 transition-colors hover:bg-[#f3f6fb] hover:text-[#111111]">Admin Panel</Link>
            <Link href="/documentation" className="rounded-2xl px-4 py-3 transition-colors hover:bg-[#f3f6fb] hover:text-[#111111]">Documentation</Link>
            <Link href="/contact" className="rounded-2xl px-4 py-3 transition-colors hover:bg-[#f3f6fb] hover:text-[#111111]">Support</Link>
          </div>
        </aside>

        <div>
          <header className="border-b border-[#e4e8ef] bg-white/86 px-6 py-6 backdrop-blur-xl sm:px-8 lg:px-10">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#3157d5]">HQRP Workspace</p>
            <h1 className="mt-3 text-3xl font-medium tracking-[-0.05em] text-[#111111]">{title}</h1>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-[#67707e]">{subtitle}</p>
          </header>
          <main className="px-6 py-8 sm:px-8 lg:px-10">{children}</main>
        </div>
      </div>
    </div>
  );
}