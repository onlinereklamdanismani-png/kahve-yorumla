import Link from 'next/link';
import { PageHeader } from './PageHeader';
import { Disclaimer } from './Disclaimer';

interface LegalLayoutProps {
  title: string;
  description: string;
  path: string;
  updatedAt: string;
  children: React.ReactNode;
}

const dateFormatter = new Intl.DateTimeFormat('tr-TR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

export function LegalLayout({ title, description, path, updatedAt, children }: LegalLayoutProps) {
  return (
    <>
      <PageHeader
        eyebrow="Yasal"
        title={title}
        description={description}
        breadcrumb={[
          { href: '/', label: 'Ana Sayfa' },
          { href: path, label: title },
        ]}
      />
      <section className="container-page grid gap-10 py-12 lg:grid-cols-[1fr_300px]">
        <article className="prose-coffee">
          <p className="text-xs text-kahve-300">
            Son güncelleme: {dateFormatter.format(new Date(updatedAt))}
          </p>
          {children}
          <Disclaimer />
        </article>
        <aside className="space-y-4">
          <div className="card">
            <p className="heading-serif text-lg">Diğer yasal sayfalar</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/gizlilik-politikasi/" className="text-bordo-500 hover:underline">
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link href="/kvkk/" className="text-bordo-500 hover:underline">
                  KVKK Aydınlatma Metni
                </Link>
              </li>
              <li>
                <Link href="/cerez-politikasi/" className="text-bordo-500 hover:underline">
                  Çerez Politikası
                </Link>
              </li>
              <li>
                <Link href="/kullanim-kosullari/" className="text-bordo-500 hover:underline">
                  Kullanım Koşulları
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}
