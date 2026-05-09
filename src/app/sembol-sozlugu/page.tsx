import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';
import { SymbolCard } from '@/components/SymbolCard';
import { AdSlot } from '@/components/AdSlot';
import { Disclaimer } from '@/components/Disclaimer';
import { JsonLd } from '@/components/JsonLd';
import { symbols, getSymbolCategories } from '@/data/symbols';
import { buildMetadata, breadcrumbLd } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Kahve Falı Sembol Sözlüğü',
  description:
    'Kahve falında sık karşılaşılan sembollerin sade ve bağlamlı anlamları. Kuş, balık, ağaç, yol ve daha pek çok sembol için referans.',
  path: '/sembol-sozlugu/',
});

export default function SembolSozluguPage() {
  const kategoriler = getSymbolCategories();
  const sortedSymbols = [...symbols].sort((a, b) =>
    a.name.localeCompare(b.name, 'tr'),
  );

  return (
    <>
      <PageHeader
        eyebrow="Sözlük"
        title="Kahve Falı Sembol Sözlüğü"
        description="Sık karşılaşılan kahve falı sembollerini sade dilde, bağlam içinde topladığımız bir referans."
        breadcrumb={[
          { href: '/', label: 'Ana Sayfa' },
          { href: '/sembol-sozlugu/', label: 'Sembol Sözlüğü' },
        ]}
      />
      <JsonLd
        data={breadcrumbLd([
          { name: 'Ana Sayfa', path: '/' },
          { name: 'Sembol Sözlüğü', path: '/sembol-sozlugu/' },
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

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sortedSymbols.map((symbol) => (
            <SymbolCard key={symbol.slug} symbol={symbol} />
          ))}
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_320px]">
          <article className="card">
            <p className="heading-serif text-2xl">Sözlüğü doğru kullanmak</p>
            <p className="mt-2 text-sm text-kahve-400">
              Sembollerin anlamı bağlama göre değişir. Tek bir sembolü değil; birlikte
              göründüğü diğer sembolleri ve fincanın bölgelerini de değerlendirmek
              yorumu daha tutarlı hâle getirir.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/blog/kahve-fali-semboller-sozlugu-nasil-kullanilir/"
                className="btn-secondary"
              >
                Sözlük nasıl kullanılır?
              </Link>
              <Link href="/kahve-fali-nasil-bakilir/" className="btn-ghost">
                Nasıl bakılır?
              </Link>
            </div>
          </article>
          <aside className="space-y-4">
            <Disclaimer />
            <AdSlot label="Reklam alanı" />
          </aside>
        </div>
      </section>
    </>
  );
}
