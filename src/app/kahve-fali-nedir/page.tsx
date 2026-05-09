import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';
import { AdSlot } from '@/components/AdSlot';
import { Disclaimer } from '@/components/Disclaimer';
import { JsonLd } from '@/components/JsonLd';
import { buildMetadata, breadcrumbLd } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Kahve Falı Nedir?',
  description:
    'Kahve falının kültürel arka planı, geleneksel ritüeli ve modern yaklaşımı üzerine sade bir özet. Eğlence amaçlıdır.',
  path: '/kahve-fali-nedir/',
});

export default function KahveFaliNedirPage() {
  return (
    <>
      <PageHeader
        eyebrow="Rehber"
        title="Kahve Falı Nedir?"
        description="Türk kahvesi geleneğinin doğal bir uzantısı olan kahve falının ne olduğuna ve ne olmadığına dair sade bir özet."
        breadcrumb={[
          { href: '/', label: 'Ana Sayfa' },
          { href: '/kahve-fali-nedir/', label: 'Kahve Falı Nedir?' },
        ]}
      />
      <JsonLd
        data={breadcrumbLd([
          { name: 'Ana Sayfa', path: '/' },
          { name: 'Kahve Falı Nedir?', path: '/kahve-fali-nedir/' },
        ])}
      />
      <section className="container-page grid gap-10 py-12 lg:grid-cols-[1fr_320px]">
        <article className="prose-coffee">
          <h2>Kısaca tanım</h2>
          <p>
            Kahve falı; içildikten sonra fincanın ters kapatılarak telvenin oluşturduğu
            şekillerin yorumlanmasına dayanan kültürel bir ritüeldir. Türk kahvesinin
            yaygınlaşmasıyla birlikte sosyal hayatın bir parçası hâline gelmiştir.
          </p>
          <p>
            Kahve Yorumla'daki tüm anlatımlar bu geleneği sade ve modern bir dille
            tanıtmak içindir. Fal; kesin bir bilgi, sağlık tavsiyesi ya da kehanet
            değildir.
          </p>

          <h2>Geleneksel arka plan</h2>
          <p>
            Kahve falı, çoğunlukla aile ve arkadaş ortamlarında, sohbete eşlik eden hafif
            bir ritüel olarak yapılır. Yorumlayan kişi sembolleri sıralı bir şekilde
            kişiye anlatır; ortamın atmosferi de yorumun bir parçasıdır.
          </p>

          <h2>Modern yaklaşım</h2>
          <p>
            Modern bir bakış, sembolleri ezberlenecek anlamlar olarak değil; bağlam içinde
            okunan sezgiler olarak ele alır. Bu sayede yorum hem keyfini korur hem de
            yanlış telkinlerden uzak kalır.
          </p>
          <p>
            Daha fazla detay için{' '}
            <Link href="/blog/kahve-fali-modern-yorum-yaklasimi/">
              Modern Bir Yaklaşımla Kahve Falı Yorumlama
            </Link>{' '}
            yazımıza bakabilirsiniz.
          </p>

          <h2>Ne değildir?</h2>
          <ul>
            <li>Bir karar verme aracı değildir.</li>
            <li>Sağlık, hukuk veya finans tavsiyesi değildir.</li>
            <li>Kesinlik ya da kehanet vaat etmez.</li>
            <li>Kişisel ilişkilerde tek başına yönlendirici değildir.</li>
          </ul>

          <h2>Bizim çizgimiz</h2>
          <p>
            Kahve Yorumla, geleneği sade bir dille tanıtır. Anlatımlarımızda korkutucu,
            heyecan tetikleyici ya da kesin vaatler içeren ifadelerden kaçınırız. Buradaki
            tüm yorumlar eğlence amaçlıdır.
          </p>

          <Disclaimer />
        </article>

        <aside className="space-y-4">
          <div className="card">
            <p className="heading-serif text-lg">Devam okuma</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/kahve-fali-nasil-bakilir/" className="text-bordo-500 hover:underline">
                  Kahve falı nasıl bakılır?
                </Link>
              </li>
              <li>
                <Link href="/sembol-sozlugu/" className="text-bordo-500 hover:underline">
                  Sembol sözlüğü
                </Link>
              </li>
              <li>
                <Link href="/blog/" className="text-bordo-500 hover:underline">
                  Blog yazıları
                </Link>
              </li>
            </ul>
          </div>
          <AdSlot label="Reklam alanı" />
        </aside>
      </section>
    </>
  );
}
