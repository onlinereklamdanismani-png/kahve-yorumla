import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container-page py-24 text-center">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-bordo-500">
        404
      </p>
      <h1 className="heading-serif mt-4 text-4xl">Aradığın sayfayı bulamadık</h1>
      <p className="mt-4 text-kahve-400">
        Bağlantı taşınmış veya yanlış yazılmış olabilir. Aşağıdaki bölümlerden devam
        edebilirsin.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-primary">
          Ana sayfa
        </Link>
        <Link href="/sembol-sozlugu/" className="btn-secondary">
          Sembol sözlüğü
        </Link>
        <Link href="/blog/" className="btn-ghost">
          Blog
        </Link>
      </div>
    </section>
  );
}
