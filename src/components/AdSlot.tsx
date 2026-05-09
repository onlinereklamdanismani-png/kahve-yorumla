interface AdSlotProps {
  label?: string;
  format?: 'banner' | 'inline' | 'square';
  note?: string;
}

const dimensions = {
  banner: 'aspect-[8/1] min-h-[90px]',
  inline: 'aspect-[6/1] min-h-[120px]',
  square: 'aspect-square sm:aspect-[4/3] min-h-[200px]',
} as const;

// AdSense kodları yerleşene kadar reklam alanı UI'ları render edilmez.
// Geliştirme sırasında yerleşim doğrulamak için:
//   .env.local içine `NEXT_PUBLIC_SHOW_AD_PLACEHOLDERS=1` ekleyip yeniden başlat.
// AdSense onayı geldikten sonra burayı `<ins class="adsbygoogle">` ile
// değiştirin ve env bayrağına bakmaksızın render edin.
const SHOW_PLACEHOLDERS = process.env.NEXT_PUBLIC_SHOW_AD_PLACEHOLDERS === '1';

export function AdSlot({
  label = 'Reklam alanı',
  format = 'inline',
  note = 'AdSense onayı sonrası bu alanda reklam görüntülenebilir.',
}: AdSlotProps) {
  if (!SHOW_PLACEHOLDERS) {
    return null;
  }

  return (
    <aside
      role="complementary"
      aria-label={label}
      className={`my-10 flex w-full flex-col items-center justify-center rounded-2xl border border-dashed border-kahve-200/70 bg-krem-100/60 p-4 text-center text-sm text-kahve-400 ${dimensions[format]}`}
    >
      <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-kahve-300">
        {label}
      </span>
      <span className="mt-1 max-w-md text-xs text-kahve-400/80">{note}</span>
    </aside>
  );
}
