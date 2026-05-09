import { Breadcrumb, type BreadcrumbItem } from './Breadcrumb';

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumb?: BreadcrumbItem[];
}

export function PageHeader({ eyebrow, title, description, breadcrumb }: PageHeaderProps) {
  return (
    <header className="border-b border-kahve-100/60 bg-paper">
      <div className="container-page py-12 sm:py-16">
        {breadcrumb && <Breadcrumb items={breadcrumb} />}
        {eyebrow && (
          <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-bordo-500">
            {eyebrow}
          </p>
        )}
        <h1 className="heading-serif mt-3 text-4xl text-balance sm:text-5xl">{title}</h1>
        {description && (
          <p className="mt-4 max-w-prose text-base text-kahve-400 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
