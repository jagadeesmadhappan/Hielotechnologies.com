import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';

export function MarketingShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f6f7f9] text-[#111111]">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-8%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,_rgba(139,188,255,0.22),_transparent_68%)]" />
        <div className="absolute right-[-8%] top-[16%] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,_rgba(184,220,205,0.22),_transparent_68%)]" />
        <div className="absolute bottom-[-14%] left-[22%] h-[440px] w-[440px] rounded-full bg-[radial-gradient(circle,_rgba(232,216,188,0.2),_transparent_68%)]" />
      </div>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}