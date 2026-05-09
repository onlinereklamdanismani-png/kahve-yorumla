import type { Metadata } from 'next';
import { LegalLayout } from '@/components/LegalLayout';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Gizlilik Politikası',
  description:
    'Kahve Yorumla gizlilik politikası: kişisel veri toplama, kullanım amaçları, çerezler ve haklarınız hakkında özet bilgi.',
  path: '/gizlilik-politikasi/',
});

export default function GizlilikPage() {
  return (
    <LegalLayout
      title="Gizlilik Politikası"
      description="Kahve Yorumla'da kişisel verilerin nasıl ele alındığına dair sade bir özet."
      path="/gizlilik-politikasi/"
      updatedAt="2025-09-01"
    >
      <h2>1. Veri sorumlusu</h2>
      <p>
        Bu gizlilik politikası, kahveyorumla.com alan adı üzerinden yayın yapan Kahve
        Yorumla için geçerlidir. İletişim için iletisim@kahveyorumla.com adresini
        kullanabilirsiniz.
      </p>

      <h2>2. Topladığımız veriler</h2>
      <ul>
        <li>
          <strong>İletişim verisi:</strong> İletişim formundan e-posta uygulamanız
          aracılığıyla bize ileteceğiniz ad ve e-posta bilgileri.
        </li>
        <li>
          <strong>Kullanım verisi:</strong> Site yayına alındığında ölçüm ve performans
          için kullanılabilecek anonim trafik verileri (örneğin sayfa görüntüleme
          sayıları).
        </li>
        <li>
          <strong>Reklam verisi:</strong> Site ilerleyen dönemde Google AdSense vb. reklam
          ağlarıyla çalışırsa, bu sağlayıcılar kendi politikaları çerçevesinde çerez
          tabanlı veri toplayabilir.
        </li>
      </ul>

      <h2>3. Verileri kullanım amacımız</h2>
      <ul>
        <li>İletişim taleplerinize yanıt vermek.</li>
        <li>Site performansını ve içerik kalitesini iyileştirmek.</li>
        <li>Yasal yükümlülükleri yerine getirmek.</li>
      </ul>

      <h2>4. Veri saklama süresi</h2>
      <p>
        İletişim e-postaları yalnızca yanıt vermek için gerekli süre boyunca tutulur.
        Anonim trafik verileri, hizmet sağlayıcının politikalarında belirtilen süreler
        boyunca saklanır.
      </p>

      <h2>5. Üçüncü taraflar</h2>
      <p>
        Site, Cloudflare Pages gibi statik barındırma sağlayıcıları üzerinde yayınlanır.
        Yayın sürecinde sağlayıcının teknik kayıtları (IP, tarayıcı bilgisi vb.)
        oluşturulabilir. AdSense entegrasyonu yapıldığında ise Google'ın gizlilik
        politikası uygulanır.
      </p>

      <h2>6. Haklarınız</h2>
      <p>
        Kişisel verilerinize erişme, düzeltme veya silme talebinde bulunma hakkına
        sahipsiniz. Talepleriniz için iletisim@kahveyorumla.com adresine
        başvurabilirsiniz.
      </p>

      <h2>7. Politika güncellemeleri</h2>
      <p>
        Bu politika gerekli görüldüğünde güncellenebilir. Güncelleme tarihi sayfanın
        üst kısmında belirtilir.
      </p>
    </LegalLayout>
  );
}
