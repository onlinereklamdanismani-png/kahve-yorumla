import type { Metadata } from 'next';
import { LegalLayout } from '@/components/LegalLayout';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Çerez Politikası',
  description:
    'Kahve Yorumla çerez politikası: hangi çerezleri kullanıyoruz, neden ve nasıl yönetebilirsiniz.',
  path: '/cerez-politikasi/',
});

export default function CerezPage() {
  return (
    <LegalLayout
      title="Çerez Politikası"
      description="Kahve Yorumla'da çerezlerin nasıl kullanıldığına dair sade bir özet."
      path="/cerez-politikasi/"
      updatedAt="2025-09-01"
    >
      <h2>1. Çerez nedir?</h2>
      <p>
        Çerezler, ziyaret ettiğiniz web sitelerinin tarayıcınız aracılığıyla cihazınıza
        kaydettiği küçük metin dosyalarıdır. Çerezler temelde sitenin sağlıklı
        çalışmasına ve kullanıcı deneyiminin iyileştirilmesine yardımcı olur.
      </p>

      <h2>2. Kullandığımız çerez türleri</h2>
      <ul>
        <li>
          <strong>Zorunlu çerezler:</strong> Sitenin çalışması için gerekli temel
          çerezler.
        </li>
        <li>
          <strong>Performans çerezleri:</strong> Site yayına alındığında trafik ve
          performans ölçümü için kullanılabilir.
        </li>
        <li>
          <strong>Reklam çerezleri:</strong> AdSense gibi reklam sağlayıcıları
          aktifleştirildiğinde, sağlayıcının kendi politikaları çerçevesinde
          yerleştirilebilir.
        </li>
      </ul>

      <h2>3. Çerez yönetimi</h2>
      <p>
        Tarayıcı ayarlarınızdan çerezleri silebilir veya engelleyebilirsiniz. Bazı
        çerezleri devre dışı bırakmak sitenin çalışmasını etkileyebilir.
      </p>

      <h2>4. Üçüncü taraf çerezleri</h2>
      <p>
        AdSense entegrasyonu yapıldığında Google çerez politikaları geçerli olur. Bu
        konuda daha fazla bilgi için Google'ın çerez ve gizlilik politikalarını
        inceleyebilirsiniz.
      </p>

      <h2>5. Güncellemeler</h2>
      <p>
        Bu çerez politikası gerek duyulduğunda güncellenir; güncellenme tarihi sayfanın
        üst kısmında belirtilir.
      </p>
    </LegalLayout>
  );
}
