'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { siteConfig } from '@/lib/site';

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href.replace(/\/$/, ''));
  };

  return (
    <header className="sticky top-0 z-40 border-b border-kahve-100/70 bg-krem-100/85 backdrop-blur supports-[backdrop-filter]:bg-krem-100/70">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-kahve-700 transition hover:text-bordo-500"
          aria-label="Kahve Yorumla ana sayfa"
        >
          <span aria-hidden className="grid h-9 w-9 place-items-center rounded-full bg-bordo-500 text-krem-100">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 9h12a3 3 0 0 1 0 6h-1M5 9v6a4 4 0 0 0 4 4h3a4 4 0 0 0 4-4M8 4c.5 1 .5 2 0 3M11 4c.5 1 .5 2 0 3M14 4c.5 1 .5 2 0 3"
              />
            </svg>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="heading-serif text-lg">{siteConfig.name}</span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-kahve-300">
              kahveyorumla.com
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Ana navigasyon">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3 py-2 text-sm transition ${
                isActive(item.href)
                  ? 'bg-krem-200 text-bordo-500'
                  : 'text-kahve-700 hover:bg-krem-200/60'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/fal-yukle/" className="hidden btn-primary sm:inline-flex">
            Fal Yükle
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full p-2 text-kahve-700 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Menüyü aç"
            onClick={() => setOpen((value) => !value)}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          className="border-t border-kahve-100/70 bg-krem-100 lg:hidden"
          aria-label="Mobil navigasyon"
        >
          <div className="container-page flex flex-col gap-1 py-3">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-2 text-sm ${
                  isActive(item.href)
                    ? 'bg-krem-200 text-bordo-500'
                    : 'text-kahve-700 hover:bg-krem-200/60'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/fal-yukle/" className="btn-primary mt-2">
              Fal Yükle
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
