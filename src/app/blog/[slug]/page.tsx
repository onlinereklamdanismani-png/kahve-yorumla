import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHeader } from '@/components/PageHeader';
import { AdSlot } from '@/components/AdSlot';
import { Disclaimer } from '@/components/Disclaimer';
import { JsonLd } from '@/components/JsonLd';
import {
  blogs,
  getBlogBySlug,
  getRelatedBlogs,
} from '@/data/blogs';
import { getSymbolBySlug } from '@/data/symbols';
import { buildMetadata, articleLd, breadcrumbLd } from '@/lib/seo';
import { markdownToHtml } from '@/lib/markdown';

interface BlogPageProps {
  params: { slug: string };
}

const dateFormatter = new Intl.DateTimeFormat('tr-TR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

export function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogPageProps): Metadata {
  const post = getBlogBySlug(params.slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}/`,
    type: 'article',
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
    keywords: post.tags,
  });
}

export default function BlogDetailPage({ params }: BlogPageProps) {
  const post = getBlogBySlug(params.slug);
  if (!post) notFound();

  const related = getRelatedBlogs(post);
  const linkedSymbols = post.relatedSymbols
    .map((slug) => getSymbolBySlug(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const html = markdownToHtml(post.content);

  return (
    <>
      <PageHeader
        eyebrow={post.category}
        title={post.title}
        description={post.description}
        breadcrumb={[
          { href: '/', label: 'Ana Sayfa' },
          { href: '/blog/', label: 'Blog' },
          { href: `/blog/${post.slug}/`, label: post.title },
        ]}
      />
      <JsonLd
        data={[
          breadcrumbLd([
            { name: 'Ana Sayfa', path: '/' },
            { name: 'Blog', path: '/blog/' },
            { name: post.title, path: `/blog/${post.slug}/` },
          ]),
          articleLd({
            title: post.title,
            description: post.description,
            path: `/blog/${post.slug}/`,
            publishedAt: post.publishedAt,
            updatedAt: post.updatedAt,
          }),
        ]}
      />

      <section className="container-page grid gap-10 py-12 lg:grid-cols-[1fr_320px]">
        <article>
          <p className="text-xs text-kahve-300">
            <time dateTime={post.publishedAt}>
              {dateFormatter.format(new Date(post.publishedAt))}
            </time>
            {' • '}
            {post.readingMinutes} dk okuma
          </p>
          <div
            className="prose-coffee mt-6"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="chip">
                #{tag}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <Disclaimer />
          </div>
        </article>

        <aside className="space-y-6">
          <div className="card">
            <p className="heading-serif text-lg">Bu yazıdaki semboller</p>
            <ul className="mt-3 space-y-2 text-sm">
              {linkedSymbols.length === 0 && (
                <li className="text-kahve-300">Bağlantılı sembol bulunmuyor.</li>
              )}
              {linkedSymbols.map((symbol) => (
                <li key={symbol.slug}>
                  <Link
                    href={`/sembol-sozlugu/${symbol.slug}/`}
                    className="text-bordo-500 hover:underline"
                  >
                    {symbol.name}
                  </Link>
                  <span className="ml-2 text-xs text-kahve-300">
                    {symbol.shortMeaning}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          {related.length > 0 && (
            <div className="card">
              <p className="heading-serif text-lg">İlgili yazılar</p>
              <ul className="mt-3 space-y-2 text-sm">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/blog/${item.slug}/`}
                      className="text-bordo-500 hover:underline"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <AdSlot label="Reklam alanı" />
        </aside>
      </section>
    </>
  );
}
