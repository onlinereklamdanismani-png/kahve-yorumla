import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';
import { Disclaimer } from '@/components/Disclaimer';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Hakkımızda',
  description:
    'Kahve Yorumla; sade dil, modern yaklaşım ve özgün içerikle kahve falı geleneğini tanıtmayı hedefleyen bağımsız bir içerik sitesidir.',
  path: '/hakkimizda/',
});

export default function HakkimizdaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kurumsal"
        title="Hakkımızda"
        description={`${siteConfig.name}; sade dil ve modern yaklaşımla kahve falı geleneğini tanıtmayı hedefler.`}
        breadcrumb={[
          { href: '/', label: 'Ana Sayfa' },
          { href: '/hakkimizda/', label: 'Hakkımızda' },
        ]}
      />
      <section className="container-page grid gap-10 py-12 lg:grid-cols-[1fr_320px]">
        <article className="prose-coffee">
          <h2>Niyetimiz</h2>
          <p>
            Kahve Yorumla, kahve falını sade ve modern bir tonla anlatmak için kurulmuş
            bağımsız bir içerik sitesidir. Sembolleri ezberlemek yerine bağlam içinde
            okumayı; karar verme aracı olarak değil sosyal bir ritüel olarak ele almayı
            tercih ederiz.
          </p>
          <h2>Editöryal çizgimiz</h2>
          <ul>
            <li>Sağlık, hukuk ve finans gibi konulara girmeyiz.</li>
            <li>Kesinlik vaat eden ve korkutucu ifadeler kullanmayız.</li>
            <li>Her sembolü bağlam içinde değerlendiririz.</li>
            <li>İçeriklerimizi düzenli olarak güncelleyip iyileştiririz.</li>
          </ul>
          <h2>İçerik politikamız</h2>
          <p>
            Tüm yazılarımız bizim tarafımızdan, sade bir dille üretilir. Ezberlenmiş genel
            geçer cümleler yerine kahve falı geleneğini gerçek bir okuyucu deneyimine
            uygun şekilde anlatmaya çalışırız.
          </p>
          <h2>Reklam yaklaşımı</h2>
          <p>
            Site, ileride gösterilebilecek reklamlar için ayrı ve "Reklam alanı" olarak
            işaretlenmiş bölgelere sahiptir. Reklamlar; butonlara, formlara veya
            navigasyona yanıltıcı şekilde yakın yerleştirilmez.
          </p>
          <h2>Sorumluluk reddi</h2>
          <p>
            Kahve Yorumla'daki tüm yorumlar eğlence amaçlıdır. Sağlık, hukuk veya finans
            gibi konularda yetkili uzmanlara başvurulmalıdır.
          </p>
          <Disclaimer />
        </article>
        <aside className="space-y-4">
          <div className="card">
            <p className="heading-serif text-lg">İletişim</p>
            <p className="mt-2 text-sm text-kahve-400">
              Geri bildirim, içerik önerisi veya hata bildirimi için bize ulaşabilirsiniz.
            </p>
            <Link href="/iletisim/" className="btn-secondary mt-4 inline-flex">
              İletişim sayfasına git
            </Link>
          </div>
        </aside>
      </section>
    </>
  );
}
