import Link from 'next/link';

export interface BreadcrumbItem {
  href: string;
  label: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Sayfa konumu" className="text-xs text-kahve-400">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-2">
              {isLast ? (
                <span className="text-kahve-700" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-bordo-500">
                  {item.label}
                </Link>
              )}
              {!isLast && <span aria-hidden>›</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
