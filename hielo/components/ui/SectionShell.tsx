import { cn } from '@/lib/utils';

/** Standard section container: max-width, generous vertical rhythm. */
export function SectionShell({
  id, children, className,
}: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section
      id={id}
      className={cn(
        'relative z-10 mx-auto max-w-content',
        'px-6 py-[clamp(90px,14vh,180px)] sm:px-10 lg:px-[clamp(24px,6vw,120px)]',
        className,
      )}
    >
      {children}
    </section>
  );
}
