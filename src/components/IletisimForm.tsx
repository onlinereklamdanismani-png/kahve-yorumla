'use client';

import { useState } from 'react';
import { siteConfig } from '@/lib/site';

export function IletisimForm() {
  const [ad, setAd] = useState('');
  const [eposta, setEposta] = useState('');
  const [konu, setKonu] = useState('');
  const [mesaj, setMesaj] = useState('');
  const [izin, setIzin] = useState(false);
  const [hata, setHata] = useState<string | null>(null);

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHata(null);

    if (ad.trim().length < 2) {
      setHata('Lütfen adınızı girin.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(eposta)) {
      setHata('Lütfen geçerli bir e-posta adresi girin.');
      return;
    }
    if (mesaj.trim().length < 10) {
      setHata('Mesajınız en az 10 karakter olmalıdır.');
      return;
    }
    if (!izin) {
      setHata('Devam etmek için aydınlatma metnini onaylayın.');
      return;
    }

    const subject = encodeURIComponent(konu || `${siteConfig.name} — iletişim`);
    const body = encodeURIComponent(`Ad: ${ad}\nE-posta: ${eposta}\n\n${mesaj}`);
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={submit} noValidate className="card space-y-5">
      <p className="text-xs text-kahve-300">
        Form henüz bir sunucuya gönderim yapmaz. Gönder dediğinde varsayılan e-posta
        uygulamanız açılır ve mesajınızı bize iletmek üzere bir taslak hazırlar.
      </p>

      <div>
        <label htmlFor="ad" className="block text-sm font-medium text-kahve-700">
          Adınız
        </label>
        <input
          id="ad"
          name="ad"
          type="text"
          autoComplete="name"
          value={ad}
          onChange={(event) => setAd(event.target.value)}
          required
          minLength={2}
          maxLength={60}
          className="mt-2 w-full rounded-xl border border-kahve-100 bg-krem-100 px-4 py-3 text-sm focus:border-bordo-300 focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="eposta" className="block text-sm font-medium text-kahve-700">
          E-posta adresiniz
        </label>
        <input
          id="eposta"
          name="eposta"
          type="email"
          autoComplete="email"
          value={eposta}
          onChange={(event) => setEposta(event.target.value)}
          required
          className="mt-2 w-full rounded-xl border border-kahve-100 bg-krem-100 px-4 py-3 text-sm focus:border-bordo-300 focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="konu" className="block text-sm font-medium text-kahve-700">
          Konu
        </label>
        <input
          id="konu"
          name="konu"
          type="text"
          value={konu}
          onChange={(event) => setKonu(event.target.value)}
          maxLength={120}
          className="mt-2 w-full rounded-xl border border-kahve-100 bg-krem-100 px-4 py-3 text-sm focus:border-bordo-300 focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="mesaj" className="block text-sm font-medium text-kahve-700">
          Mesajınız
        </label>
        <textarea
          id="mesaj"
          name="mesaj"
          value={mesaj}
          onChange={(event) => setMesaj(event.target.value)}
          required
          minLength={10}
          maxLength={2000}
          rows={5}
          className="mt-2 w-full rounded-xl border border-kahve-100 bg-krem-100 px-4 py-3 text-sm focus:border-bordo-300 focus:outline-none"
        />
      </div>

      <label className="flex items-start gap-3 text-sm">
        <input
          type="checkbox"
          checked={izin}
          onChange={(event) => setIzin(event.target.checked)}
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
          'nı okudum, mesajımın e-posta yoluyla iletilmesini onaylıyorum.
        </span>
      </label>

      {hata && (
        <div role="alert" className="rounded-xl border border-bordo-200 bg-bordo-50/40 px-4 py-3 text-sm text-bordo-500">
          {hata}
        </div>
      )}

      <button type="submit" className="btn-primary w-full sm:w-auto">
        E-posta uygulamamla gönder
      </button>
    </form>
  );
}
