import { MarketingShell } from '@/components/site/MarketingShell';
import { PageHero } from '@/components/site/PageHero';
import { Section } from '@/components/site/Section';
import { BLOG_POSTS } from '@/lib/site-data';

export default function BlogPage() {
  return (
    <MarketingShell>
      <Section>
        <PageHero
          eyebrow="Blog"
          title="Research, AI, engineering, and company notes in one journal."
          body="The editorial layer supports categories, search intent, author identity, and product announcements while keeping the tone clean and professional."
        />
      </Section>
      <Section className="grid gap-5 lg:grid-cols-2">
        {BLOG_POSTS.map((post) => (
          <article key={post.title} className="rounded-[30px] border border-[#e3e7ef] bg-white p-7 shadow-[0_16px_40px_rgba(17,17,17,0.04)]">
            <p className="text-xs uppercase tracking-[0.22em] text-[#3157d5]">{post.category}</p>
            <h2 className="mt-4 text-2xl font-medium tracking-[-0.04em] text-[#111111]">{post.title}</h2>
            <p className="mt-4 text-sm text-[#666b78]">{post.author} · {post.date}</p>
          </article>
        ))}
      </Section>
    </MarketingShell>
  );
}