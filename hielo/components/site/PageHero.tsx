import { cn } from '@/lib/utils';

export function PageHero({
  eyebrow,
  title,
  body,
  className,
}: {
  eyebrow: string;
  title: string;
  body: string;
  className?: string;
}) {
  return (
    <div className={cn('max-w-4xl', className)}>
      <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#3157d5]">
        {eyebrow}
      </p>
      <h1 className="mt-6 max-w-4xl text-4xl font-medium tracking-[-0.05em] text-[#111111] sm:text-5xl lg:text-7xl">
        {title}
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f6472] sm:text-lg">
        {body}
      </p>
    </div>
  );
}