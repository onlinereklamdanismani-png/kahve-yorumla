import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { IletisimForm } from '@/components/IletisimForm';
import { Disclaimer } from '@/components/Disclaimer';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'İletişim',
  description:
    'Kahve Yorumla ekibine ulaşın. Geri bildirim, içerik önerisi ve hata bildirimleri için iletişim sayfası.',
  path: '/iletisim/',
});

export default function IletisimPage() {
  return (
    <>
      <PageHeader
        eyebrow="Bizimle iletişime geçin"
        title="İletişim"
        description="Geri bildirim, hata bildirimi veya iş birliği önerisi için sade bir form."
        breadcrumb={[
          { href: '/', label: 'Ana Sayfa' },
          { href: '/iletisim/', label: 'İletişim' },
        ]}
      />
      <section className="container-page grid gap-10 py-12 lg:grid-cols-[1fr_320px]">
        <IletisimForm />
        <aside className="space-y-4">
          <div className="card">
            <p className="heading-serif text-lg">Doğrudan e-posta</p>
            <p className="mt-2 text-sm text-kahve-400">
              Doğrudan e-posta atmak isterseniz aşağıdaki adresi kullanabilirsiniz.
            </p>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="btn-secondary mt-4 inline-flex"
            >
              {siteConfig.contact.email}
            </a>
          </div>
          <Disclaimer />
        </aside>
      </section>
    </>
  );
}
