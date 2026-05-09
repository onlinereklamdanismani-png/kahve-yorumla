# AdSense Başvuru ve Yerleşim Checklist

Bu liste, kahveyorumla.com için Google AdSense başvurusu öncesi ve sonrasında dikkat edilmesi gereken maddeleri toplar. **Bu sürümde site içinde gerçek AdSense kodu yoktur.** `AdSlot` bileşeni yalnızca politikaya uygun yerleşim için yer tutucu sağlar.

---

## 1. Başvuru öncesi içerik gereksinimleri

- [x] En az 20 özgün ve faydalı içerik mevcut (sembol + blog).
- [ ] Yayına çıkmadan önce 50+ özgün içerik hedefine ulaş (`docs/SEO_CONTENT_PLAN_50.md`).
- [x] Her içerik özgün, anahtar kelime doldurmasız ve kullanıcıya değer veriyor.
- [x] Sayfaların tamamı Türkçe ve dil tutarlı.
- [x] Lorem ipsum, eksik metin veya “yakında” başlığı bırakılmadı.

## 2. Zorunlu yasal sayfalar

- [x] [Hakkımızda](/hakkimizda/)
- [x] [İletişim](/iletisim/)
- [x] [Gizlilik Politikası](/gizlilik-politikasi/)
- [x] [KVKK Aydınlatma Metni](/kvkk/)
- [x] [Çerez Politikası](/cerez-politikasi/)
- [x] [Kullanım Koşulları](/kullanim-kosullari/)
- [x] Footer’da tüm yasal sayfalara erişim.

## 3. İçerik politikası (yapılmaması gerekenler)

- [x] Sağlık / hukuk / finans tavsiyesi yok.
- [x] Kesin gelecek vaadi içeren ifadeler yok.
- [x] Korkutucu, manipülatif veya “acil” dil kullanılmıyor.
- [x] Kullanıcıdan gereksiz kişisel veri istenmiyor.
- [x] Şiddet, müstehcenlik, yasa dışı içerik yok.
- [x] “Eğlence amaçlıdır” uyarısı sayfa altlarında ve fal aracında görünür.

## 4. Reklam yerleşim kuralları

`AdSlot` bileşeninin doğru kullanımı:

- [x] Her reklam alanı net olarak **"Reklam alanı"** veya **"Sponsorlu alan"** olarak işaretlenir.
- [x] Reklamlar **"Fal Yükle"** butonuna ve formuna yakın yerleştirilmez.
- [x] Reklamlar navigasyon, breadcrumb veya menülere yakın değildir.
- [x] Reklamlar formun "Gönder" butonuna komşu konumda değildir.
- [x] Reklamlar upload alanının (fincan fotoğrafı) hemen yanında değildir.
- [x] Reklamlar her zaman içerik bittikten ya da yan kolonda görünür.
- [x] Tek sayfada en fazla 1–2 reklam alanı kullanılmıştır (yığma yapılmadı).

### Lansman davranışı

`AdSlot` varsayılan olarak **hiçbir şey render etmez** (boş "Reklam alanı"
kutuları görünmez → temiz lansman görünümü).

- Geliştirme sırasında yerleşimleri görmek için: `.env.local` içine
  `NEXT_PUBLIC_SHOW_AD_PLACEHOLDERS=1` ekleyip dev sunucusunu yeniden başlat.
- AdSense onayı geldikten sonra `src/components/AdSlot.tsx` içindeki
  `if (!SHOW_PLACEHOLDERS) return null;` satırını kaldırıp aynı kutuya
  `<ins class="adsbygoogle" ...></ins>` blokunu yerleştir.

## 5. Teknik kontroller

- [x] `robots.txt` AdSense bot’a (`Mediapartners-Google`) erişim engellemez (varsayılanda tüm UA’lar serbest).
- [x] `sitemap.xml` mevcut ve domain’e göre üretiliyor.
- [x] Sayfalar `noindex` değil (yalnızca form sonuç sayfaları için manuel gerekirse).
- [x] HTTPS sertifikası (Cloudflare üzerinden otomatik).
- [x] Mobil uyumlu (responsive Tailwind).
- [x] Hızlı LCP (statik HTML + minimal JS).

## 6. Onay sonrası AdSense entegrasyonu

Onay aldıktan sonra yapılacaklar:

1. AdSense → "Ads.txt" yönergesini Cloudflare Pages için `public/ads.txt` olarak ekle.
2. Otomatik reklam betiğini (`adsbygoogle.js`) `src/app/layout.tsx` içinde `<head>` veya `<Script>` ile ekle.
3. `src/components/AdSlot.tsx` içine `<ins class="adsbygoogle">` bloğunu yerleştir; `data-ad-slot`'ları AdSense panelinden al.
4. Ad placement policy ihlali oluşmaması için bu listedeki kuralları korumaya devam et.
5. Çerez politikası ve gizlilik politikası sayfalarına AdSense atfını ekle.

## 7. İzlenecek dış kaynaklar

- AdSense Program Politikaları
- Google Yayıncı Politikaları
- “Better Ads Standards” yönergeleri
