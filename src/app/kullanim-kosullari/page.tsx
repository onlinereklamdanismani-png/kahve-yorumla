import type { Metadata } from 'next';
import { LegalLayout } from '@/components/LegalLayout';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Kullanım Koşulları',
  description:
    'Kahve Yorumla kullanım koşulları: site içeriklerinin nasıl kullanılabileceği ve sorumluluk sınırları.',
  path: '/kullanim-kosullari/',
});

export default function KullanimKosullariPage() {
  return (
    <LegalLayout
      title="Kullanım Koşulları"
      description="Kahve Yorumla'yı kullanırken geçerli olan temel koşullar."
      path="/kullanim-kosullari/"
      updatedAt="2025-09-01"
    >
      <h2>1. Genel</h2>
      <p>
        Bu sayfa kahveyorumla.com sitesini ziyaret eden ve kullanan herkes için
        geçerlidir. Siteyi kullanmaya devam ettiğiniz sürece bu koşulları kabul etmiş
        sayılırsınız.
      </p>

      <h2>2. İçeriklerin amacı</h2>
      <p>
        Site, kahve falı sembollerini ve geleneğini sade bir dille tanıtmak için
        hazırlanmıştır. İçerikler eğlence amaçlıdır; sağlık, hukuk veya finans
        konularında profesyonel tavsiye yerine geçmez.
      </p>

      <h2>3. Telif hakları</h2>
      <p>
        Sitede yer alan yazıların ve görsellerin tüm hakları Kahve Yorumla'ya aittir.
        Kaynak gösterilmek kaydıyla kişisel ve eğitsel amaçla alıntı yapılabilir; ticari
        amaçlı kullanım için yazılı izin gerekir.
      </p>

      <h2>4. Sorumluluğun sınırlandırılması</h2>
      <p>
        İçeriklerin doğruluğu ve güncelliği için makul çaba gösterilir; ancak hiçbir
        içerik kesin bilgi olarak sunulmaz. Site içeriklerine dayanılarak alınan
        kararlardan doğacak sonuçlardan Kahve Yorumla sorumlu tutulamaz.
      </p>

      <h2>5. Üçüncü taraf bağlantıları</h2>
      <p>
        Site, üçüncü taraf web sitelerine bağlantı içerebilir. Bu sitelerin içeriği ve
        gizlilik uygulamaları kendi sahiplerinin sorumluluğundadır.
      </p>

      <h2>6. Değişiklikler</h2>
      <p>
        Bu kullanım koşulları gerekli görüldüğünde güncellenebilir; güncellenme tarihi
        sayfanın üst kısmında belirtilir.
      </p>
    </LegalLayout>
  );
}
