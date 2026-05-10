'use client';

import { useMemo, useState } from 'react';

function slugify(input: string) {
  return input
    .toLocaleLowerCase('tr-TR')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

type SubmitStatus =
  | { type: 'idle'; message: string }
  | { type: 'loading'; message: string }
  | { type: 'success'; message: string; url?: string; github?: string }
  | { type: 'error'; message: string };

export default function BlogYazAdminPage() {
  const [adminSecret, setAdminSecret] = useState('');
  const [title, setTitle] = useState('Kahve Falında Yılan Görmek Ne Anlama Gelir?');
  const [manualSlug, setManualSlug] = useState('');
  const [description, setDescription] = useState(
    'Kahve falında yılan görmek ne anlama gelir? Aşk, iş, para ve fincanın farklı bölgelerine göre yılan sembolünün geleneksel yorumlarını keşfet.',
  );
  const [excerpt, setExcerpt] = useState(
    'Kahve falında yılan sembolü genellikle dikkat, sezgi, gizli konuşmalar ve çevresel farkındalık anlamlarıyla yorumlanır.',
  );
  const [category, setCategory] = useState('Kahve Falı Sembolleri');
  const [icon, setIcon] = useState('🐍');
  const [relatedSymbols, setRelatedSymbols] = useState('goz,yol,kalp,anahtar,kus');
  const [body, setBody] = useState(
    'Kahve falında yılan görmek, geleneksel fal yorumlarında en dikkat çekici sembollerden biridir. Yılan sembolü çoğu zaman dikkat, sezgi, gizli konuşmalar, kıskançlık, çevresel etkiler ve farkındalık anlamlarıyla ilişkilendirilir.\n\nYılan sembolü her zaman olumsuz yorumlanmaz. Fincandaki konumu, yılanın şekli, yanında görülen diğer semboller ve falın genel havası yorumu tamamen değiştirebilir.\n\nKahve falında yılan çıkması, kişinin çevresindeki insanlara, aldığı kararlara veya iç sesine biraz daha dikkat etmesi gerektiğini anlatan sembolik bir işaret olarak değerlendirilir.',
  );
  const [status, setStatus] = useState<SubmitStatus>({
    type: 'idle',
    message: 'Formu doldurup kaydettiğinde GitHub’a otomatik commit atılır.',
  });

  const slug = useMemo(() => slugify(manualSlug || title), [manualSlug, title]);
  const previewUrl = `https://kahveyorumla.com/blog/${slug}/`;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus({
      type: 'loading',
      message: 'Yazı GitHub’a gönderiliyor. Lütfen bekle...',
    });

    try {
      const response = await fetch('/api/create-blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${adminSecret}`,
        },
        body: JSON.stringify({
          adminSecret,
          title,
          slug,
          description,
          excerpt,
          category,
          icon,
          relatedSymbols,
          body,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        setStatus({
          type: 'error',
          message: result.error || 'Yazı kaydedilemedi.',
        });
        return;
      }

      setStatus({
        type: 'success',
        message:
          result.message ||
          'Yazı GitHub’a commit edildi. Cloudflare birkaç dakika içinde deploy eder.',
        url: result.url,
        github: result.github,
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'Bilinmeyen bir bağlantı hatası oluştu.',
      });
    }
  }

  return (
    <main className="container-page py-10">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-3xl border border-kahve-100 bg-white/80 p-6 shadow-soft md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-kahve-300">
            Admin
          </p>
          <h1 className="heading-serif mt-2 text-4xl text-kahve-900 md:text-5xl">
            Blog Yazısı Ekle
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-kahve-500">
            Bu panel yeni blog sayfasını otomatik oluşturur, GitHub’a commit eder ve
            Cloudflare deploy sürecini başlatır. GitHub token tarayıcıya gönderilmez;
            sadece Cloudflare environment variable içinde saklanır.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-6 lg:grid-cols-[1fr_340px]">
          <section className="space-y-5 rounded-3xl border border-kahve-100 bg-white/80 p-6 shadow-soft">
            <div>
              <label className="mb-2 block text-sm font-bold text-kahve-700">
                Admin şifresi
              </label>
              <input
                value={adminSecret}
                onChange={(event) => setAdminSecret(event.target.value)}
                type="password"
                className="w-full rounded-2xl border border-kahve-100 bg-white px-4 py-3 text-sm outline-none focus:border-kahve-300"
                placeholder="Cloudflare ADMIN_SECRET değeri"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-kahve-700">
                Başlık
              </label>
              <input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className="w-full rounded-2xl border border-kahve-100 bg-white px-4 py-3 text-sm outline-none focus:border-kahve-300"
                placeholder="Kahve Falında Yılan Görmek Ne Anlama Gelir?"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-kahve-700">
                Slug, boş bırakırsan başlıktan otomatik üretir
              </label>
              <input
                value={manualSlug}
                onChange={(event) => setManualSlug(event.target.value)}
                className="w-full rounded-2xl border border-kahve-100 bg-white px-4 py-3 text-sm outline-none focus:border-kahve-300"
                placeholder={slug}
              />
              <p className="mt-2 text-xs text-kahve-400">Oluşacak URL: {previewUrl}</p>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-kahve-700">
                Meta description
              </label>
              <textarea
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                className="min-h-24 w-full rounded-2xl border border-kahve-100 bg-white px-4 py-3 text-sm outline-none focus:border-kahve-300"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-kahve-700">
                Kısa giriş / excerpt
              </label>
              <textarea
                value={excerpt}
                onChange={(event) => setExcerpt(event.target.value)}
                className="min-h-24 w-full rounded-2xl border border-kahve-100 bg-white px-4 py-3 text-sm outline-none focus:border-kahve-300"
                required
              />
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <label className="mb-2 block text-sm font-bold text-kahve-700">
                  Kategori
                </label>
                <input
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                  className="w-full rounded-2xl border border-kahve-100 bg-white px-4 py-3 text-sm outline-none focus:border-kahve-300"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold text-kahve-700">
                  İkon
                </label>
                <input
                  value={icon}
                  onChange={(event) => setIcon(event.target.value)}
                  className="w-full rounded-2xl border border-kahve-100 bg-white px-4 py-3 text-sm outline-none focus:border-kahve-300"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold text-kahve-700">
                  Benzer semboller
                </label>
                <input
                  value={relatedSymbols}
                  onChange={(event) => setRelatedSymbols(event.target.value)}
                  className="w-full rounded-2xl border border-kahve-100 bg-white px-4 py-3 text-sm outline-none focus:border-kahve-300"
                  placeholder="goz,yol,kalp"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-kahve-700">
                Yazı içeriği
              </label>
              <textarea
                value={body}
                onChange={(event) => setBody(event.target.value)}
                className="min-h-[420px] w-full rounded-2xl border border-kahve-100 bg-white px-4 py-3 text-sm leading-7 outline-none focus:border-kahve-300"
                placeholder="Paragrafları boş satırla ayır. Her boş satır yeni paragraf olur."
                required
              />
              <p className="mt-2 text-xs text-kahve-400">
                İpucu: Her paragraf arasına bir boş satır koy. Panel bunları otomatik
                paragraf olarak yayınlar.
              </p>
            </div>

            <button
              type="submit"
              disabled={status.type === 'loading'}
              className="btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status.type === 'loading' ? 'Kaydediliyor...' : 'GitHub’a Commit Et ve Yayına Hazırla'}
            </button>
          </section>

          <aside className="space-y-5">
            <div className="rounded-3xl border border-kahve-100 bg-white/80 p-5 shadow-soft">
              <h2 className="font-bold text-kahve-900">Durum</h2>
              <p
                className={`mt-3 text-sm leading-7 ${
                  status.type === 'error'
                    ? 'text-red-700'
                    : status.type === 'success'
                      ? 'text-green-700'
                      : 'text-kahve-500'
                }`}
              >
                {status.message}
              </p>
              {status.type === 'success' && status.url ? (
  <a
    href={status.url}
    target="_blank"
    rel="noreferrer"
    className="mt-3 block text-sm font-bold text-kahve-700 underline"
  >
    Yazıyı aç
  </a>
) : null}
{status.type === 'success' && status.github ? (
  <a
    href={status.github}
    target="_blank"
    rel="noreferrer"
    className="mt-3 block text-sm font-bold text-kahve-700 underline"
  >
    GitHub dosyasını aç
  </a>
) : null}
            </div>

            <div className="rounded-3xl border border-kahve-100 bg-white/80 p-5 shadow-soft">
              <h2 className="font-bold text-kahve-900">Önizleme</h2>
              <dl className="mt-3 space-y-3 text-sm text-kahve-500">
                <div>
                  <dt className="font-bold text-kahve-700">Slug</dt>
                  <dd>{slug}</dd>
                </div>
                <div>
                  <dt className="font-bold text-kahve-700">URL</dt>
                  <dd className="break-all">{previewUrl}</dd>
                </div>
                <div>
                  <dt className="font-bold text-kahve-700">Paragraf sayısı</dt>
                  <dd>{body.split(/\n{2,}/).filter(Boolean).length}</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-3xl border border-amber-200 bg-amber-50 p-5">
              <h2 className="font-bold text-amber-900">Dikkat</h2>
              <p className="mt-3 text-sm leading-7 text-amber-800">
                Bu panel aynı slug ile ikinci kez yazı oluşturmaz. Hata alırsan farklı
                slug kullan veya GitHub’daki mevcut dosyayı elle düzenle.
              </p>
            </div>
          </aside>
        </form>
      </div>
    </main>
  );
}
