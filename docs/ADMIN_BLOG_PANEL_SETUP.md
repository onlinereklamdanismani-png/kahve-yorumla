# Kahve Yorumla Admin Blog Panel Kurulumu

Bu paket iki dosya ekler:

- `src/app/admin/blog-yaz/page.tsx`
- `functions/api/create-blog.ts`

Panel adresi:

```txt
https://kahveyorumla.com/admin/blog-yaz
```

## 1. Dosyaları GitHub'a ekle

Zip içindeki dosyaları aynı yollarla repoya ekle ve commit et.

## 2. GitHub token oluştur

GitHub'da fine-grained personal access token oluştur.

Minimum izin:
- Repository: `onlinereklamdanismani-png/kahve-yorumla`
- Contents: Read and write

Token'ı bir yere kaydet. Bir daha görünmez.

## 3. Cloudflare environment variables

Cloudflare'da:

```txt
Workers & Pages
→ kahve-yorumla-git
→ Settings
→ Variables and Secrets
```

Şunları ekle:

```txt
ADMIN_SECRET=kendine-ozel-guclu-sifre
GITHUB_TOKEN=github_token_buraya
GITHUB_OWNER=onlinereklamdanismani-png
GITHUB_REPO=kahve-yorumla
GITHUB_BRANCH=main
```

## 4. Deploy

GitHub'a commit sonrası Cloudflare otomatik deploy eder.

## 5. Test

Paneli aç:

```txt
https://kahveyorumla.com/admin/blog-yaz
```

Formu doldur, Admin şifresi alanına `ADMIN_SECRET` değerini yaz ve kaydet.

Başarılı olursa GitHub'da şu dosya oluşur:

```txt
src/app/blog/<slug>/page.tsx
```

Cloudflare birkaç dakika içinde siteyi yeniden deploy eder.

## 6. Notlar

- Aynı slug ile ikinci kez yazı eklenmez.
- GitHub token asla tarayıcıya görünmez.
- Panel sadece yeni yazı ekler. Düzenleme/silme yoktur.
- Yazı içeriğinde her boş satır yeni paragraf olur.
