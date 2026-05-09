import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';
import { symbols } from '@/data/symbols';
import { blogs } from '@/data/blogs';
import { SymbolCard } from '@/components/SymbolCard';
import { BlogCard } from '@/components/BlogCard';
import { Disclaimer } from '@/components/Disclaimer';
import { AdSlot } from '@/components/AdSlot';

export const metadata: Metadata = buildMetadata({
  title: siteConfig.name,
  description: siteConfig.defaultDescription,
  path: '/',
});

export default function HomePage() {
  const featuredSymbols = symbols.slice(0, 6);
  const featuredBlogs = blogs.slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden border-b border-kahve-100/60 bg-paper">
        <div className="container-page grid gap-12 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:py-28">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-bordo-500">
              Kahve falı sözlüğü ve rehberi
            </p>
            <h1 className="heading-serif mt-5 text-4xl text-balance leading-tight sm:text-5xl lg:text-6xl">
              Fincanın dilini sade bir rehberle anla.
            </h1>
            <p className="mt-6 max-w-prose text-base leading-relaxed text-kahve-400 sm:text-lg">
              Kahve Yorumla; sembol sözlüğü, kahve falı rehberi ve özgün blog yazılarını
              bir arada sunan bağımsız bir içerik sitesidir. Kullandığımız dil sade, abartısız
              ve eğlence amaçlıdır.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/sembol-sozlugu/" className="btn-primary">
                Sembol Sözlüğüne Git
              </Link>
              <Link href="/kahve-fali-nasil-bakilir/" className="btn-secondary">
                Nasıl Bakılır?
              </Link>
            </div>
            <p className="mt-6 text-xs text-kahve-300">
              Sitedeki tüm yorumlar kültürel bir gelenek çerçevesinde, eğlence amaçlıdır.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-altin-100/60 blur-2xl" aria-hidden />
            <div className="absolute -right-6 -bottom-6 h-44 w-44 rounded-full bg-bordo-100/60 blur-2xl" aria-hidden />
            <div className="relative rounded-3xl border border-kahve-100 bg-krem-50 p-8 shadow-card">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-bordo-500 text-krem-100">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 9h12a3 3 0 0 1 0 6h-1M5 9v6a4 4 0 0 0 4 4h3a4 4 0 0 0 4-4M8 4c.5 1 .5 2 0 3M11 4c.5 1 .5 2 0 3M14 4c.5 1 .5 2 0 3"
                    />
                  </svg>
                </div>
                <div>
                  <p className="heading-serif text-lg">Bugün ne içiyoruz?</p>
                  <p className="text-xs text-kahve-300">Türk kahvesi, sade.</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                <Stat label="Sembol" value={`${symbols.length}+`} />
                <Stat label="Blog yazısı" value={`${blogs.length}+`} />
                <Stat label="Sade ton" value="Modern" />
              </div>
              <p className="mt-6 text-sm leading-relaxed text-kahve-400">
                Kahve falı bir karar aracı değildir. Bu sitede yer alan içerikler sadece
                geleneği sade bir dille tanıtmak ve sembolleri bağlam içinde anlatmak içindir.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Link href="/blog/" className="chip hover:border-bordo-200">
                  Blog
                </Link>
                <Link href="/kahve-fali-nedir/" className="chip hover:border-bordo-200">
                  Kahve falı nedir?
                </Link>
                <Link href="/hakkimizda/" className="chip hover:border-bordo-200">
                  Hakkımızda
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <SectionHeader
          eyebrow="Sözlük"
          title="Öne çıkan kahve falı sembolleri"
          description="Sık karşılaşılan sembollerin sade özetlerine göz atın. Tam liste için sözlüğe geçebilirsiniz."
          ctaLabel="Tüm sembolleri gör"
          ctaHref="/sembol-sozlugu/"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredSymbols.map((symbol) => (
            <SymbolCard key={symbol.slug} symbol={symbol} />
          ))}
        </div>
      </section>

      <section className="border-y border-kahve-100/60 bg-krem-100/60">
        <div className="container-page py-16 sm:py-20">
          <SectionHeader
            eyebrow="Blog"
            title="Sade ve özgün yazılar"
            description="Sembol notları, başlangıç rehberleri ve modern yorum yaklaşımları üzerine yazıyoruz."
            ctaLabel="Tüm yazılar"
            ctaHref="/blog/"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featuredBlogs.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-3">
          <article className="card lg:col-span-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-bordo-500">
              Yaklaşımımız
            </p>
            <h2 className="heading-serif mt-3 text-3xl">
              Sade dil, bağlamlı yorum, eğlenceli ton.
            </h2>
            <p className="mt-4 text-kahve-400">
              Kahve Yorumla, sembolleri ezberlemek yerine bağlam içinde okumayı önerir.
              Yorumlar herhangi bir kesinlik veya kehanet vaat etmez. Sağlık, hukuk veya
              finans gibi konulara girilmez. Amacımız geleneği sade, modern bir tonla
              tanıtmaktır.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/kahve-fali-nedir/" className="btn-secondary">
                Kahve falı nedir?
              </Link>
              <Link href="/hakkimizda/" className="btn-ghost">
                Hakkımızda
              </Link>
            </div>
          </article>
          <Disclaimer variant="highlight" />
        </div>
      </section>

      <div className="container-page">
        <AdSlot label="Sponsorlu alan" note="AdSense onayı sonrası bu alan reklam içerebilir." />
      </div>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-kahve-100/70 bg-krem-100/80 p-3">
      <p className="heading-serif text-2xl text-bordo-500">{value}</p>
      <p className="text-[11px] uppercase tracking-[0.18em] text-kahve-300">{label}</p>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref,
}: {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-bordo-500">
          {eyebrow}
        </p>
        <h2 className="heading-serif mt-3 text-3xl sm:text-4xl">{title}</h2>
        <p className="mt-3 text-kahve-400">{description}</p>
      </div>
      <Link
        href={ctaHref}
        className="inline-flex w-fit items-center gap-2 text-sm font-medium text-bordo-500 underline-offset-4 hover:underline"
      >
        {ctaLabel} →
      </Link>
    </div>
  );
}
