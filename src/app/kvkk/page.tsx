import type { Metadata } from 'next';
import { LegalLayout } from '@/components/LegalLayout';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'KVKK Aydınlatma Metni',
  description:
    '6698 Sayılı Kişisel Verilerin Korunması Kanunu kapsamında Kahve Yorumla aydınlatma metni.',
  path: '/kvkk/',
});

export default function KvkkPage() {
  return (
    <LegalLayout
      title="KVKK Aydınlatma Metni"
      description="6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında bilgilendirme."
      path="/kvkk/"
      updatedAt="2025-09-01"
    >
      <h2>1. Veri sorumlusu</h2>
      <p>
        Bu metin; kahveyorumla.com web sitesinin işleticisi Kahve Yorumla tarafından,
        6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca veri sahiplerini
        bilgilendirmek amacıyla hazırlanmıştır.
      </p>

      <h2>2. İşlenen kişisel veriler</h2>
      <ul>
        <li>İletişim formu üzerinden iletilen ad-soyad ve e-posta bilgileri.</li>
        <li>Anonim site kullanım verileri (trafik, sayfa görüntüleme).</li>
        <li>
          AdSense entegrasyonu yapıldığında reklam ağları tarafından toplanan çerez
          tabanlı veriler.
        </li>
      </ul>

      <h2>3. İşleme amaçları</h2>
      <ul>
        <li>İletişim taleplerine yanıt verme.</li>
        <li>Site performansının ve kullanıcı deneyiminin iyileştirilmesi.</li>
        <li>Yasal yükümlülüklerin yerine getirilmesi.</li>
      </ul>

      <h2>4. Hukuki sebepler</h2>
      <p>
        Verileriniz, KVKK m.5/2(c) sözleşmenin kurulması veya ifası, m.5/2(f) meşru
        menfaat ve açık rıza temellerinden uygun olanı kapsamında işlenmektedir.
      </p>

      <h2>5. Aktarım</h2>
      <p>
        Veriler; barındırma (Cloudflare Pages vb.) ve gerektiğinde reklam sağlayıcıları
        (örn. Google AdSense) ile sınırlı şekilde paylaşılabilir. Yurt dışı aktarımları
        ilgili sağlayıcının politikaları çerçevesinde gerçekleşir.
      </p>

      <h2>6. Haklarınız</h2>
      <p>
        KVKK m.11 kapsamında işlenen verilerinizle ilgili bilgi alma, düzeltme, silme,
        işlemeye itiraz etme gibi haklara sahipsiniz. Başvurularınızı
        iletisim@kahveyorumla.com adresine iletebilirsiniz.
      </p>

      <h2>7. İletişim</h2>
      <p>
        Bu metne ilişkin soru ve görüşleriniz için iletisim@kahveyorumla.com adresine
        yazabilirsiniz.
      </p>
    </LegalLayout>
  );
}
