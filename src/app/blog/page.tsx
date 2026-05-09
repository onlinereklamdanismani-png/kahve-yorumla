import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { BlogCard } from '@/components/BlogCard';
import { AdSlot } from '@/components/AdSlot';
import { JsonLd } from '@/components/JsonLd';
import { blogs, getBlogCategories } from '@/data/blogs';
import { buildMetadata, breadcrumbLd } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Kahve Falı Blog',
  description:
    'Kahve falı sembolleri, başlangıç rehberleri ve modern yorum yaklaşımları üzerine sade ve özgün yazılar.',
  path: '/blog/',
});

export default function BlogIndexPage() {
  const sortedPosts = [...blogs].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
  const kategoriler = getBlogCategories();

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Kahve falı üzerine sade yazılar"
        description="Sembol notları, başlangıç rehberleri ve modern yaklaşım üzerine özgün içerikler."
        breadcrumb={[
          { href: '/', label: 'Ana Sayfa' },
          { href: '/blog/', label: 'Blog' },
        ]}
      />
      <JsonLd
        data={breadcrumbLd([
          { name: 'Ana Sayfa', path: '/' },
          { name: 'Blog', path: '/blog/' },
        ])}
      />
      <section className="container-page py-12">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-kahve-300">
            Kategoriler:
          </span>
          {kategoriler.map((kategori) => (
            <span key={kategori} className="chip">
              {kategori}
            </span>
          ))}
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sortedPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        <AdSlot label="Reklam alanı" />
      </section>
    </>
  );
}
