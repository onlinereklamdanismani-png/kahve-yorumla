import Link from 'next/link';
import { siteConfig } from '@/lib/site';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-kahve-100/70 bg-krem-100">
      <div className="container-page py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="heading-serif text-2xl">{siteConfig.name}</p>
            <p className="mt-3 max-w-md text-sm text-kahve-400">
              {siteConfig.brand.short} Sitedeki tüm yorumlar eğlence amaçlıdır;
              sağlık, hukuk veya finans gibi konularda uzman görüşü esas alınmalıdır.
            </p>
            <p className="mt-4 text-xs text-kahve-300">
              kahveyorumla.com — bağımsız içerik sitesi.
            </p>
          </div>

          <FooterColumn title="İçerik" links={siteConfig.footerLinks.icerik} />
          <FooterColumn title="Kurumsal" links={siteConfig.footerLinks.kurumsal} />
        </div>

        <div className="mt-10 grid gap-6 border-t border-kahve-100/60 pt-6 md:grid-cols-2 md:items-center">
          <p className="text-xs text-kahve-400">
            © {year} {siteConfig.name}. Tüm hakları saklıdır.
          </p>
          <ul className="flex flex-wrap gap-x-4 gap-y-2 md:justify-end">
            {siteConfig.footerLinks.yasal.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs text-kahve-400 underline-offset-4 hover:text-bordo-500 hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: ReadonlyArray<{ href: string; label: string }>;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-kahve-300">
        {title}
      </p>
      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-kahve-700 hover:text-bordo-500"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
