import { cn } from '@/lib/utils';

export function Section({
  className,
  children,
  id,
}: {
  className?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        'mx-auto w-full max-w-[1280px] px-6 py-20 sm:px-10 lg:px-14 lg:py-28',
        className,
      )}
    >
      {children}
    </section>
  );
}