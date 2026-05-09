import Link from 'next/link';
import type { CoffeeSymbol } from '@/data/symbols';

export function SymbolCard({ symbol }: { symbol: CoffeeSymbol }) {
  return (
    <Link
      href={`/sembol-sozlugu/${symbol.slug}/`}
      className="group block rounded-2xl border border-kahve-100/70 bg-krem-50 p-5 transition hover:-translate-y-[1px] hover:border-altin-300 hover:shadow-card"
    >
      <div className="flex items-center justify-between">
        <p className="heading-serif text-xl text-kahve-700 group-hover:text-bordo-500">
          {symbol.name}
        </p>
        <span className="chip">{symbol.category}</span>
      </div>
      <p className="mt-3 line-clamp-3 text-sm text-kahve-400">{symbol.shortMeaning}</p>
      <p className="mt-4 text-xs font-medium text-bordo-500 underline-offset-4 group-hover:underline">
        Sembolü incele →
      </p>
    </Link>
  );
}
