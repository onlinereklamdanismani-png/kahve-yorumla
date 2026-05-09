interface DisclaimerProps {
  variant?: 'soft' | 'highlight';
  text?: string;
}

const defaultText =
  'Bu içerik yalnızca kültürel ve eğlence amaçlıdır. Sağlık, hukuk veya finans gibi konularda mutlaka yetkili uzmanlara başvurunuz.';

export function Disclaimer({ variant = 'soft', text = defaultText }: DisclaimerProps) {
  const className =
    variant === 'highlight'
      ? 'border-altin-300 bg-altin-50 text-kahve-700'
      : 'border-kahve-200/60 bg-krem-100 text-kahve-400';

  return (
    <p
      role="note"
      className={`rounded-2xl border px-4 py-3 text-xs leading-relaxed ${className}`}
    >
      <span className="font-semibold uppercase tracking-[0.18em]">Eğlence amaçlıdır:</span>{' '}
      {text}
    </p>
  );
}
