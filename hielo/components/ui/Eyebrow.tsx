import { cn } from '@/lib/utils';

/** Research-index label, e.g. "§ 02 — Research Philosophy". */
export function Eyebrow({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return <div className={cn('eyebrow mb-6', center && 'justify-center')}>{children}</div>;
}
