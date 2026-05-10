# Kahve Yorumla

Kahveyorumla.com için Next.js + TypeScript + Tailwind CSS tabanlı, **Cloudflare Pages’e statik export** olarak deploy edilmek üzere hazırlanmış içerik sitesi.

> **Konsept:** Kahve falı sembol sözlüğü, sade rehberler, özgün blog yazıları ve eğlence amaçlı bir demo fal aracı.

> **Politika:** Site hiçbir kesin vaat içermez; sağlık, hukuk veya finans tavsiyesi vermez. Tüm içerikler eğlence amaçlıdır.

## Özellikler

- **Statik export** — `output: 'export'` ile tamamen statik HTML üretir.
- **API route yok / server-only özellik yok** — Cloudflare Pages free planına %100 uyumlu.
- **Modern tasarım** — krem, kahve, bordo, altın renk paleti; serif + sans tipografi.
- **SEO** — title/description, Open Graph, Twitter Card, JSON-LD (Organization, WebSite, BreadcrumbList, Article), `sitemap.xml`, `robots.txt`.
- **20+ sembol & 20+ blog** verisi (`src/data/symbols.ts`, `src/data/blogs.ts`).
- **AdSense uyumlu** placeholder bileşeni (`AdSlot`); reklam alanları net şekilde "Reklam alanı" olarak işaretlenir, butonlardan ve formlardan uzak tutulur.
- **Erişilebilirlik** — “İçeriğe atla” linki, `aria-*` etiketleri, klavye odakları.
- **Güvenlik header'ları** — `public/_headers` Cloudflare Pages için.
- **Demo fal aracı** — yerel JS, fotoğraf cihazdan ayrılmaz, hiçbir API'ye gönderim yok.

## Sayfalar

| Yol | Sayfa |
|---|---|
| `/` | Ana sayfa |
| `/fal-yukle/` | Fal yükle (demo aracı) |
| `/sembol-sozlugu/` | Sembol sözlüğü |
| `/sembol-sozlugu/[slug]/` | Sembol detayı (statik üretim) |
| `/blog/` | Blog liste |
| `/blog/[slug]/` | Blog detayı (statik üretim) |
| `/kahve-fali-nedir/` | Kahve falı nedir? |
| `/kahve-fali-nasil-bakilir/` | Kahve falı nasıl bakılır? |
| `/hakkimizda/` | Hakkımızda |
| `/iletisim/` | İletişim |
| `/gizlilik-politikasi/` | Gizlilik politikası |
| `/kvkk/` | KVKK aydınlatma metni |
| `/cerez-politikasi/` | Çerez politikası |
| `/kullanim-kosullari/` | Kullanım koşulları |

## Gereksinimler

- Node.js **>= 18.18** (Cloudflare Pages varsayılan: 18 veya 20)
- npm 9+

## Kurulum & geliştirme

```bash
npm install         # bağımlılıklar
npm run dev         # http://localhost:3000
npm run lint        # ESLint kontrolü
npm run typecheck   # tsc --noEmit
npm run build       # statik export → ./out
```

`npm run build` sonrasında deploy edilecek statik dosyalar `out/` klasöründe oluşur.

## Cloudflare Pages’e deploy

İki yöntem vardır.

### Yöntem 1 — Cloudflare Pages Git entegrasyonu

1. Reposunu GitHub/GitLab’e yükle.
2. Cloudflare Pages → **Create project** → repo seç.
3. Build ayarları:
   - **Framework preset:** `Next.js (Static HTML Export)` veya `None`.
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Node version:** `20`
4. **Environment variables**: gerekmez.
5. Deploy et. Cloudflare otomatik olarak `public/_headers` ve `public/_redirects` dosyalarını uygular.
6. Domain bağlama:
   - Custom domain → `kahveyorumla.com` ekle.
   - DNS’i Cloudflare'a delege ettiysen otomatik çalışır.
   - SSL: Universal SSL otomatik etkin.

### Yöntem 2 — Wrangler CLI ile manuel

```bash
npm install -g wrangler
npm run build
wrangler pages deploy out --project-name=kahveyorumla
```

## Güvenlik

- `public/_headers` dosyası Cloudflare Pages için temel güvenlik header'larını içerir
  (`Strict-Transport-Security`, `Content-Security-Policy`, `Referrer-Policy`,
  `Permissions-Policy`, `X-Content-Type-Options`, `X-Frame-Options`).
- Tüm dış linkler `target="_blank"` kullanıldığında `rel="noopener noreferrer"` ile
  yazılır (Markdown render'ında otomatik eklenir).
- Form gönderimleri sahte API çağrısı yapmaz; iletişim formu yalnızca varsayılan
  e-posta uygulamasını açar.
- Hızlı kontrol için:

  ```bash
  npm run security:check   # bash scripts/security-check.sh
  ```

- npm güvenlik denetimi:

  ```bash
  npm audit --omit=dev --audit-level=high
  ```

## SEO

- Tüm sayfalarda `title`, `description`, canonical URL, Open Graph ve Twitter Card metadata.
- `src/app/sitemap.ts` ve `src/app/robots.ts` build sırasında `sitemap.xml` ve `robots.txt` üretir.
- Sembol ve blog sayfaları `generateStaticParams` ile statik üretilir.
- Sembol detaylarında ilgili semboller ve ilgili blog yazıları arasında çift yönlü iç linkleme.
- Anahtar kelime doldurma yapılmamıştır; tüm içerikler doğal Türkçe anlatım üzerine kuruludur.

## Reklam (AdSense) yaklaşımı

- Gerçek AdSense kodu **eklenmemiştir**.
- `AdSlot` bileşeni **varsayılan olarak hiçbir şey render etmez** — site temiz lanse edilebilir.
- Geliştirme sırasında reklam yerleşimlerini görmek için `.env.local` içine
  `NEXT_PUBLIC_SHOW_AD_PLACEHOLDERS=1` ekleyin (`.env.local.example` dosyasına bakın).
- AdSense onayı geldikten sonra `src/components/AdSlot.tsx` içine `<ins class="adsbygoogle">`
  bloğu yerleştirilir; aynı kutu artık her zaman görünür.
- Reklamlar; navigasyon, CTA butonları (özellikle `Fal Yükle`), upload alanı ve
  form girişlerinin yakınına yerleştirilmez. Detay için
  [docs/ADSENSE_CHECKLIST.md](docs/ADSENSE_CHECKLIST.md) dosyasına bakın.

## İçerik üretim planı

50+ özgün içerik hedefi için yol haritası:
[docs/SEO_CONTENT_PLAN_50.md](docs/SEO_CONTENT_PLAN_50.md).

## Klasör yapısı

```
src/
  app/
    blog/
    fal-yukle/
    sembol-sozlugu/
    ...
    layout.tsx
    page.tsx
    sitemap.ts
    robots.ts
  components/   # Header, Footer, AdSlot, FalForm, vs.
  data/         # symbols.ts, blogs.ts
  lib/          # site config, seo helpers, markdown render
public/
  favicon.svg, logo.svg, og-default.svg
  _headers, _redirects, site.webmanifest
docs/
  SEO_CONTENT_PLAN_50.md
  ADSENSE_CHECKLIST.md
  SECURITY.md
scripts/
  security-check.sh
reference/
  kahve-yorumla-landing.html
```

## Lisans

Tüm hakları Kahve Yorumla'ya aittir. Kişisel ve eğitim amaçlı alıntı için kaynak gösterilmesi yeterlidir; ticari kullanım için yazılı izin gereklidir.
SEO güncellemesi yapıldı.
