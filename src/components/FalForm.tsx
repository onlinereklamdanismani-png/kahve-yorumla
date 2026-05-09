'use client';

import Link from 'next/link';
import { useMemo, useRef, useState } from 'react';
import { Disclaimer } from './Disclaimer';

type FalTuru = 'genel' | 'iliskiler' | 'kariyer' | 'gunluk';

interface FalTuruBilgi {
  value: FalTuru;
  label: string;
  description: string;
  baslik: string;
  giris: string;
  kapanis: string;
}

const FAL_TURLERI: FalTuruBilgi[] = [
  {
    value: 'genel',
    label: 'Genel bakış',
    description: 'Fincanı bütün olarak değerlendirir.',
    baslik: 'Fincanından üç sembol',
    giris:
      'Fincanın bütününe baktığımızda öne çıkan üç sembol şu anki dönemine genel bir çerçeve çiziyor.',
    kapanis:
      'Bu üç sembolü birlikte düşünmek, bugün üzerinde durmak isteyebileceğin alanlara dair sade bir ipucu verebilir.',
  },
  {
    value: 'iliskiler',
    label: 'İlişkiler & duygular',
    description: 'Duygusal alana odaklanır.',
    baslik: 'Duygu alanına dair üç sembol',
    giris:
      'Duygusal alana odaklandığımızda fincanından üç sembol öne çıkıyor. Bunları kişisel hayatına nazikçe yerleştirmeyi unutma.',
    kapanis:
      'Yakın çevrenle açık bir sohbet, bu sembollerin işaret ettiği konuları çoğu zaman daha rahat netleştirir.',
  },
  {
    value: 'kariyer',
    label: 'İş & yön',
    description: 'Karar ve plan üzerine odaklanır.',
    baslik: 'İş ve karar alanına dair üç sembol',
    giris:
      'İş ve karar alanına bakarken fincanında üç sembol belirginleşiyor. Bu semboller acil değil; daha çok bir tempoya işaret ediyor.',
    kapanis:
      'Adımları küçük tutmak ve kararları yazıya dökmek, bu sembollerle birlikte iyi bir denge oluşturur.',
  },
  {
    value: 'gunluk',
    label: 'Günlük hafif yorum',
    description: 'Kısa, eğlenceli bir okuma.',
    baslik: 'Bugün için üç sembol',
    giris: 'Günü hafif bir tonda okuyalım. Fincanından öne çıkan üç sembol şöyle:',
    kapanis: 'Günün geri kalanına bu üç sembolü ufak bir not gibi yanına alabilirsin.',
  },
];

const SEMBOL_HAVUZU: { ad: string; slug: string; anlam: string }[] = [
  { ad: 'Yol', slug: 'yol', anlam: 'Önündeki günlerde küçük ama net bir karar gündemde olabilir.' },
  { ad: 'Kuş', slug: 'kus', anlam: 'Beklediğin bir konuda sade bir haber gelme ihtimali görünüyor.' },
  { ad: 'Ağaç', slug: 'agac', anlam: 'Uzun süredir emek verdiğin bir konuda kök salma dönemi.' },
  { ad: 'Çiçek', slug: 'cicek', anlam: 'Yakın çevrenden ufak ama tatlı bir jest gündeme gelebilir.' },
  { ad: 'Yıldız', slug: 'yildiz', anlam: 'Bir hedefe odaklanmak için sade ama belirgin bir motivasyon.' },
  { ad: 'Su', slug: 'su', anlam: 'Duygusal akışın yumuşaması, küçük bir arınma hissi.' },
  { ad: 'Çember', slug: 'cember', anlam: 'Bir döngünün sade biçimde kapanmaya doğru ilerlemesi.' },
  { ad: 'Anahtar', slug: 'anahtar', anlam: 'Elinde olan bir çözümü hatırlama vakti olabilir.' },
  { ad: 'Köprü', slug: 'koru', anlam: 'İki konu ya da kişi arasında küçük bir uzlaşma adımı.' },
  { ad: 'Ay', slug: 'ay', anlam: 'Sezgilerini dinlemek, bir konuda kendine zaman tanımak.' },
  { ad: 'Kapı', slug: 'kapi', anlam: 'Henüz aralanmış bir fırsatın yaklaştığını düşündürüyor.' },
  { ad: 'Mektup', slug: 'mektup', anlam: 'Yazılı bir bildirim ya da netleşen bir cevap yolda olabilir.' },
  { ad: 'Balık', slug: 'balik', anlam: 'Hareketli bir sürecin yavaş yavaş canlanmaya başlaması.' },
  { ad: 'Kalp', slug: 'kalp', anlam: 'Duygusal bir yakınlaşma ya da bir bağı tazeleme isteği.' },
  { ad: 'Halka', slug: 'halka', anlam: 'Bir söz veya küçük bir taahhüdün netleşme ihtiyacı.' },
  { ad: 'Dağ', slug: 'dag', anlam: 'Sabırla yaklaşılması gereken, anlamlı bir hedefin görünür olması.' },
  { ad: 'Merdiven', slug: 'merdiven', anlam: 'Adım adım ilerleyen bir konuda yeni bir basamak.' },
  { ad: 'El', slug: 'el', anlam: 'Beklenmedik küçük bir destek ya da sana uzanan bir el.' },
  { ad: 'Güneş', slug: 'gunes', anlam: 'Bir konunun aydınlanması, üzerindeki gölgenin azalması.' },
  { ad: 'Göz', slug: 'goz', anlam: 'Çevrenden gelen ilgi ya da fark edilen bir gözlem.' },
];

function pickSymbols(seed: string, count: number) {
  let acc = 0;
  for (let i = 0; i < seed.length; i += 1) {
    acc = (acc * 31 + seed.charCodeAt(i)) % 1_000_000_007;
  }
  const indices = new Set<number>();
  let cursor = acc || 1;
  while (indices.size < count) {
    cursor = (cursor * 1103515245 + 12345) % 2147483648;
    indices.add(cursor % SEMBOL_HAVUZU.length);
  }
  return Array.from(indices).map((i) => SEMBOL_HAVUZU[i]);
}

interface YorumSonuc {
  ad: string;
  tur: FalTuruBilgi;
  semboller: { ad: string; slug: string; anlam: string }[];
  uretildi: string;
}

export function FalForm() {
  const [ad, setAd] = useState('');
  const [tur, setTur] = useState<FalTuru>('genel');
  const [dosyaAdi, setDosyaAdi] = useState<string | null>(null);
  const [izinler, setIzinler] = useState({ kvkk: false, eglence: false });
  const [hata, setHata] = useState<string | null>(null);
  const [sonuc, setSonuc] = useState<YorumSonuc | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);

  const turBilgisi = useMemo(
    () => FAL_TURLERI.find((t) => t.value === tur) ?? FAL_TURLERI[0],
    [tur],
  );

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHata(null);

    if (ad.trim().length < 2) {
      setHata('Lütfen en az 2 karakterlik bir ad girin.');
      return;
    }
    if (!dosyaAdi) {
      setHata('Lütfen fincan fotoğrafınızı seçin.');
      return;
    }
    if (!izinler.kvkk || !izinler.eglence) {
      setHata('Devam etmek için iki kutuyu da işaretleyin.');
      return;
    }

    const seed = `${ad.trim()}|${tur}|${dosyaAdi}|${new Date().toDateString()}`;
    const semboller = pickSymbols(seed, 3);

    setSonuc({
      ad: ad.trim(),
      tur: turBilgisi,
      semboller,
      uretildi: new Date().toLocaleString('tr-TR'),
    });
  };

  const reset = () => {
    setSonuc(null);
    setAd('');
    setDosyaAdi(null);
    setIzinler({ kvkk: false, eglence: false });
    if (fileRef.current) fileRef.current.value = '';
  };

  if (sonuc) {
    return <YorumKarti sonuc={sonuc} onReset={reset} />;
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <form onSubmit={submit} noValidate className="card space-y-6">
        <div>
          <label htmlFor="ad" className="block text-sm font-medium text-kahve-700">
            İsmin
          </label>
          <p className="mt-1 text-xs text-kahve-300">
            Yorum içinde sana hitap için kullanılır; hiçbir yere gönderilmez.
          </p>
          <input
            id="ad"
            name="ad"
            type="text"
            autoComplete="given-name"
            value={ad}
            onChange={(event) => setAd(event.target.value)}
            className="mt-2 w-full rounded-xl border border-kahve-100 bg-krem-100 px-4 py-3 text-sm focus:border-bordo-300 focus:outline-none"
            placeholder="Örn. Ayşe"
            required
            minLength={2}
            maxLength={40}
          />
        </div>

        <fieldset>
          <legend className="text-sm font-medium text-kahve-700">Fal türü</legend>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {FAL_TURLERI.map((option) => {
              const checked = option.value === tur;
              return (
                <label
                  key={option.value}
                  className={`cursor-pointer rounded-xl border p-3 text-sm transition ${
                    checked
                      ? 'border-bordo-300 bg-bordo-50/40 text-kahve-700'
                      : 'border-kahve-100 bg-krem-100 text-kahve-400 hover:border-altin-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="tur"
                    value={option.value}
                    className="sr-only"
                    checked={checked}
                    onChange={() => setTur(option.value)}
                  />
                  <span className="block font-medium text-kahve-700">{option.label}</span>
                  <span className="mt-1 block text-xs text-kahve-300">
                    {option.description}
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <div>
          <label htmlFor="fincan" className="block text-sm font-medium text-kahve-700">
            Fincan fotoğrafı
          </label>
          <p className="mt-1 text-xs text-kahve-300">
            Fotoğrafın cihazından çıkmaz. Hiçbir sunucuya yüklenmez ya da paylaşılmaz.
          </p>
          <div className="mt-2 rounded-xl border border-dashed border-kahve-200 bg-krem-100 p-4 text-sm">
            <input
              id="fincan"
              ref={fileRef}
              type="file"
              accept="image/*"
              onChange={(event) =>
                setDosyaAdi(event.target.files?.[0]?.name ?? null)
              }
              className="block w-full text-sm text-kahve-700 file:mr-3 file:rounded-full file:border-0 file:bg-kahve-700 file:px-4 file:py-2 file:text-xs file:font-medium file:text-krem-100 hover:file:bg-bordo-500"
            />
            {dosyaAdi && (
              <p className="mt-2 text-xs text-kahve-400">Seçilen dosya: {dosyaAdi}</p>
            )}
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={izinler.eglence}
              onChange={(event) =>
                setIzinler((prev) => ({ ...prev, eglence: event.target.checked }))
              }
              className="mt-1 h-4 w-4 rounded border-kahve-200 text-bordo-500"
            />
            <span className="text-kahve-700">
              Yorumun yalnızca eğlence amaçlı olduğunu ve sağlık, hukuk veya finans
              kararlarında kullanılmayacağını kabul ediyorum.
            </span>
          </label>
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={izinler.kvkk}
              onChange={(event) =>
                setIzinler((prev) => ({ ...prev, kvkk: event.target.checked }))
              }
              className="mt-1 h-4 w-4 rounded border-kahve-200 text-bordo-500"
            />
            <span className="text-kahve-700">
              <a href="/kvkk/" className="text-bordo-500 underline-offset-4 hover:underline">
                KVKK Aydınlatma Metni
              </a>{' '}
              ve{' '}
              <a href="/gizlilik-politikasi/" className="text-bordo-500 underline-offset-4 hover:underline">
                Gizlilik Politikası
              </a>
              'nı okudum.
            </span>
          </label>
        </div>

        {hata && (
          <div role="alert" className="rounded-xl border border-bordo-200 bg-bordo-50/40 px-4 py-3 text-sm text-bordo-500">
            {hata}
          </div>
        )}

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-kahve-300">
            Form çevrimdışı çalışır; veri sunucuya gönderilmez.
          </p>
          <button type="submit" className="btn-primary">
            Kahve yorumumu hazırla
          </button>
        </div>
      </form>

      <aside className="space-y-6">
        <div className="card">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-bordo-500">
            Nasıl çalışır?
          </p>
          <h2 className="heading-serif mt-2 text-2xl">Sembol sözlüğümüze dayanır</h2>
          <ol className="mt-4 space-y-3 text-sm text-kahve-400">
            <li>
              <span className="font-medium text-kahve-700">1.</span> Adını ve fal türünü
              gir.
            </li>
            <li>
              <span className="font-medium text-kahve-700">2.</span> Fincan fotoğrafını
              seç; cihazından çıkmaz.
            </li>
            <li>
              <span className="font-medium text-kahve-700">3.</span> Yorumun anında
              hazırlanır; sembolleri sözlükten daha detaylı inceleyebilirsin.
            </li>
          </ol>
        </div>
        <Disclaimer />
      </aside>
    </div>
  );
}

function YorumKarti({
  sonuc,
  onReset,
}: {
  sonuc: YorumSonuc;
  onReset: () => void;
}) {
  return (
    <article className="space-y-6">
      <div className="card">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-bordo-500">
          Yorumun hazır
        </p>
        <h2 className="heading-serif mt-2 text-3xl">
          Merhaba {sonuc.ad}, {sonuc.tur.baslik.toLowerCase()}
        </h2>
        <p className="mt-2 text-sm text-kahve-300">
          Tür: {sonuc.tur.label} • Hazırlandı: {sonuc.uretildi}
        </p>

        <p className="mt-6 text-sm leading-relaxed text-kahve-700">{sonuc.tur.giris}</p>

        <ul className="mt-6 space-y-4">
          {sonuc.semboller.map((sembol) => (
            <li
              key={sembol.slug}
              className="rounded-2xl border border-kahve-100/80 bg-krem-100 p-5"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="heading-serif text-xl text-kahve-700">{sembol.ad}</p>
                <Link
                  href={`/sembol-sozlugu/${sembol.slug}/`}
                  className="text-xs font-medium text-bordo-500 underline-offset-4 hover:underline"
                >
                  Sembol detayı →
                </Link>
              </div>
              <p className="mt-2 text-sm text-kahve-400">{sembol.anlam}</p>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-sm leading-relaxed text-kahve-700">{sonuc.tur.kapanis}</p>
      </div>

      <Disclaimer
        variant="highlight"
        text="Yorumlar sembol sözlüğümüzdeki anlamlardan derlenir; bağlayıcı değildir. Sağlık, hukuk veya finans kararlarınız için lütfen yetkili uzmanlara danışın."
      />

      <div className="flex flex-wrap gap-3">
        <button onClick={onReset} type="button" className="btn-primary">
          Yeniden hazırla
        </button>
        <Link href="/sembol-sozlugu/" className="btn-secondary">
          Sembol sözlüğüne git
        </Link>
        <Link href="/blog/" className="btn-ghost">
          Blog yazılarına bak
        </Link>
      </div>
    </article>
  );
}
