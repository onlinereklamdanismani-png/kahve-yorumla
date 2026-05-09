# Güvenlik Notları

## HTTP Güvenlik Header'ları

`public/_headers` Cloudflare Pages tarafından otomatik uygulanır.

| Header | Değer | Amaç |
|---|---|---|
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` | HSTS — yalnızca HTTPS bağlantı zorunluluğu. |
| `Content-Security-Policy` | İçerik güvenlik politikası (aşağıda) | XSS ve veri sızıntılarına karşı katman. |
| `X-Content-Type-Options` | `nosniff` | MIME tip sniff engeli. |
| `X-Frame-Options` | `SAMEORIGIN` | Clickjacking koruması. |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Referrer sızıntısını sınırlar. |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=(), payment=(), usb=()` | Hassas API’lerin tarayıcı erişimini kapatır. |
| `X-XSS-Protection` | `1; mode=block` | Eski tarayıcılar için ek katman. |

### Content-Security-Policy

```
default-src 'self';
img-src 'self' data: https:;
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
font-src 'self' https://fonts.gstatic.com data:;
script-src 'self' 'unsafe-inline';
connect-src 'self';
frame-ancestors 'self';
base-uri 'self';
form-action 'self' mailto:
```

> **Not:** AdSense entegre edildiğinde `script-src` ve `frame-src` içine
> `https://*.google.com https://*.googlesyndication.com https://*.doubleclick.net`
> eklenmesi gerekir; iletişim formu mailto açtığı için `form-action` `mailto:` izinli.

## Form güvenliği

- Tüm formlar yalnızca tarayıcıda çalışır; sahte API çağrısı yapılmaz.
- İletişim formu yalnızca varsayılan e-posta uygulamasını açar (mailto).
- Fal yükle formu cihaz dışına veri göndermez.
- Tüm girişler maksimum uzunluk ve format kontrolüne tabidir.

## Bağımlılık güvenliği

```bash
npm audit --omit=dev --audit-level=high
npm outdated
```

CI içinde de aynı komutu çalıştırmak önerilir.

### Statik export & Next.js CVE notu

`npm audit`, Next.js 14.x için bazı yüksek seviyeli CVE'ler bildirebilir
(Image Optimizer `remotePatterns`, RSC HTTP istek işleme, rewrites HTTP smuggling,
`next/image` disk cache, Server Components DoS). Bu CVE'lerin **tamamı** Node.js
sunucusu üzerinde çalışan Next.js dağıtımlarını ilgilendirir.

Kahve Yorumla **`output: 'export'`** ile tamamen statik HTML üretip Cloudflare
Pages CDN'inden yayınlandığı için:

- Çalışan Node.js sunucusu yoktur.
- `next/image` runtime optimizasyonu yoktur (`unoptimized: true`).
- API route'ları, rewrites veya middleware yoktur.
- React Server Components runtime'ı production'da çalışmaz.

Bu nedenle yukarıdaki CVE'ler üretim ortamımızda exploit edilebilir değildir.
Yine de Next.js'in bir sonraki LTS hattına geçildiğinde paket güncellenmelidir.

## Üçüncü taraf kaynaklar

- Google Fonts (Cormorant Garamond, Inter) — `style-src` ve `font-src` içinde izinli.
- Diğer hiçbir üçüncü taraf script yüklenmez.

## İzlenmesi önerilen kontroller

1. `npm run lint` — statik analiz
2. `npm run typecheck` — tip güvenliği
3. `npm run security:check` — header ve link kontrolü
4. `npm audit` — bağımlılık güvenliği
5. Mozilla Observatory ya da SecurityHeaders.com taraması (deploy sonrası)
