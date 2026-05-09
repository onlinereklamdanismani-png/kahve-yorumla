import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';
import { AdSlot } from '@/components/AdSlot';
import { Disclaimer } from '@/components/Disclaimer';
import { JsonLd } from '@/components/JsonLd';
import { buildMetadata, breadcrumbLd } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Kahve Falı Nasıl Bakılır?',
  description:
    'Kahve falı için adım adım rehber: doğru pişim, fincanın kapatılması, bölgelerin tanınması ve sembollerin sade biçimde okunması.',
  path: '/kahve-fali-nasil-bakilir/',
});

const ADIMLAR = [
  {
    no: '01',
    baslik: 'Türk kahvesini doğru pişir',
    metin:
      'Soğuk su, doğru ölçü ve düşük ısı; telvenin sağlıklı oturmasını sağlar. Köpük oluşmaya başladığında ateşten al.',
  },
  {
    no: '02',
    baslik: 'Yavaş yavaş iç ve niyet et',
    metin:
      'Kahveyi sakin bir tempoda iç. Yorumlanmasını istediğin konuları zihninde tutmaya çalış.',
  },
  {
    no: '03',
    baslik: 'Fincanı tabağa ters kapat',
    metin:
      'Fincanı tabağa kapatıp 5–10 dakika bekle. Telvenin oturması yorumu kolaylaştırır.',
  },
  {
    no: '04',
    baslik: 'Bölgeleri tanı',
    metin:
      'Kenar yakın gelecek, orta hâlihazırda yaşananlar, dip ise uzun vadeli konuları temsil eder.',
  },
  {
    no: '05',
    baslik: 'Sembolleri seç',
    metin:
      'Tüm şekilleri yorumlamaya çalışma. Belirgin 3–4 sembolü seç ve birbirleriyle ilişki içinde değerlendir.',
  },
  {
    no: '06',
    baslik: 'Sade bir dille anlat',
    metin:
      'Yorumu mistik kelimelerle değil; sade ve seçenek bırakan bir dille paylaş. Kesin vaatlerden kaçın.',
  },
];

export default function NasilBakilirPage() {
  return (
    <>
      <PageHeader
        eyebrow="Rehber"
        title="Kahve Falı Nasıl Bakılır?"
        description="Adım adım, sade ve eğlenceli bir yaklaşım. Tüm yorumlar eğlence amaçlıdır."
        breadcrumb={[
          { href: '/', label: 'Ana Sayfa' },
          { href: '/kahve-fali-nasil-bakilir/', label: 'Nasıl Bakılır?' },
        ]}
      />
      <JsonLd
        data={breadcrumbLd([
          { name: 'Ana Sayfa', path: '/' },
          { name: 'Nasıl Bakılır?', path: '/kahve-fali-nasil-bakilir/' },
        ])}
      />
      <section className="container-page py-12">
        <ol className="grid gap-5 md:grid-cols-2">
          {ADIMLAR.map((adim) => (
            <li key={adim.no} className="card">
              <p className="heading-serif text-3xl text-bordo-500">{adim.no}</p>
              <h2 className="heading-serif mt-2 text-xl">{adim.baslik}</h2>
              <p className="mt-2 text-sm text-kahve-400">{adim.metin}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_320px]">
          <article className="prose-coffee">
            <h2>Yorumlarken neye dikkat etmeli?</h2>
            <p>
              Kahve falı, iyi niyetli bir sohbetin parçasıdır. Bu nedenle yorumun tonu
              karşıdaki kişiye saygılı, sakin ve seçim alanı bırakan bir tarzda
              olmalıdır. Korkutucu ya da kesinlik vaat eden ifadelerden uzak durmak
              gerekir.
            </p>
            <h2>Daha fazla okuma</h2>
            <ul>
              <li>
                <Link href="/blog/kahve-fali-nasil-bakilir-adim-adim/">
                  Sade ve adım adım bir rehber
                </Link>
              </li>
              <li>
                <Link href="/blog/fincan-okuma-bolgeleri/">
                  Fincanın bölgeleri üzerine notlar
                </Link>
              </li>
              <li>
                <Link href="/blog/kahve-fali-yorumlama-hatalari/">
                  Yorumlarken yapılan yaygın hatalar
                </Link>
              </li>
            </ul>

            <Disclaimer />
          </article>
          <aside className="space-y-4">
            <div className="card">
              <p className="heading-serif text-lg">Sözlük yardımı</p>
              <p className="mt-2 text-sm text-kahve-400">
                Sembollerin sade anlamlarına bakmak için sözlüğümüzü kullan.
              </p>
              <Link href="/sembol-sozlugu/" className="btn-secondary mt-4 inline-flex">
                Sembol sözlüğüne git
              </Link>
            </div>
            <AdSlot label="Reklam alanı" />
          </aside>
        </div>
      </section>
    </>
  );
}
