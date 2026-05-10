import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHeader } from '@/components/PageHeader';
import { AdSlot } from '@/components/AdSlot';
import { Disclaimer } from '@/components/Disclaimer';
import { JsonLd } from '@/components/JsonLd';
import { BlogCard } from '@/components/BlogCard';
import {
  symbols,
  getSymbolBySlug,
  getRelatedSymbols,
} from '@/data/symbols';
import { getBlogsBySymbolSlug, getBlogBySlug } from '@/data/blogs';
import { buildMetadata, breadcrumbLd } from '@/lib/seo';

interface SymbolPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return symbols.map((symbol) => ({ slug: symbol.slug }));
}

export function generateMetadata({ params }: SymbolPageProps): Metadata {
  const symbol = getSymbolBySlug(params.slug);
  if (!symbol) return {};

  return buildMetadata({
    
    title: `Kahve Falında ${symbol.name} Görmek Ne Anlama Gelir?`,
description: `${symbol.name} kahve falında ne anlama gelir? ${symbol.shortMeaning} Fincanın kenarı, ortası ve dibindeki yorumlarını Kahve Yorumla'da keşfet.`,
    path: `/sembol-sozlugu/${symbol.slug}/`,
    keywords: [`${symbol.name.toLowerCase()} sembolü`, 'kahve falı sembolleri', symbol.category.toLowerCase()],
  });
}

export default function SymbolDetailPage({ params }: SymbolPageProps) {
  const symbol = getSymbolBySlug(params.slug);
  if (!symbol) notFound();

  const related = getRelatedSymbols(symbol);
  const blogPosts = [
    ...new Set([
      ...getBlogsBySymbolSlug(symbol.slug),
      ...(symbol.blogSlugs?.map((s) => getBlogBySlug(s)).filter(Boolean) ?? []),
    ]),
  ].filter((post): post is NonNullable<typeof post> => Boolean(post));

  return (
    <>
     <PageHeader
  eyebrow={`Kahve Falı Sembol Sözlüğü · ${symbol.category}`}
  title={`Kahve Falında ${symbol.name} Görmek Ne Anlama Gelir?`}
  description={`${symbol.name} sembolünün kısa anlamı: ${symbol.shortMeaning}`}
  breadcrumb={[
    { href: '/', label: 'Ana Sayfa' },
    { href: '/sembol-sozlugu/', label: 'Sembol Sözlüğü' },
    {
      href: `/sembol-sozlugu/${symbol.slug}/`,
      label: `Kahve Falında ${symbol.name} Görmek`,
    },
  ]}
/>
      <JsonLd
        data={breadcrumbLd([
          { name: 'Ana Sayfa', path: '/' },
          { name: 'Sembol Sözlüğü', path: '/sembol-sozlugu/' },
          { name: symbol.name, path: `/sembol-sozlugu/${symbol.slug}/` },
        ])}
      />

      <section className="container-page grid gap-10 py-12 lg:grid-cols-[1fr_320px]">
        <article className="prose-coffee">
          <h2>Sembolün özeti</h2>
          <p>{symbol.description}</p>

          <h2>Bölgeye göre okuma</h2>
          <ul>
            <li>
              <strong>Kenarda:</strong> {symbol.position.rim}
            </li>
            <li>
              <strong>Ortada:</strong> {symbol.position.middle}
            </li>
            <li>
              <strong>Dipte:</strong> {symbol.position.bottom}
            </li>
          </ul>

          <h2>Olumlu yorumlar</h2>
          <ul>
            {symbol.positive.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>Dikkat edilebilecek yönler</h2>
          <ul>
            {symbol.cautious.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <Disclaimer />
        </article>

        <aside className="space-y-6">
          <div className="card">
            <p className="heading-serif text-lg">İlgili semboller</p>
            <ul className="mt-3 space-y-2 text-sm">
              {related.length === 0 && (
                <li className="text-kahve-300">Henüz ilişkili sembol eklenmedi.</li>
              )}
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/sembol-sozlugu/${item.slug}/`}
                    className="text-bordo-500 hover:underline"
                  >
                    {item.name}
                  </Link>
                  <span className="ml-2 text-xs text-kahve-300">{item.shortMeaning}</span>
                </li>
              ))}
            </ul>
          </div>
          <AdSlot label="Reklam alanı" />
        </aside>
      </section>

      {blogPosts.length > 0 && (
        <section className="border-t border-kahve-100/60 bg-krem-100/60">
          <div className="container-page py-12">
            <h2 className="heading-serif text-2xl">İlgili blog yazıları</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
