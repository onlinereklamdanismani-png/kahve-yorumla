export const siteConfig = {
  name: 'Kahve Yorumla',
  domain: 'kahveyorumla.com',
  url: 'https://kahveyorumla.com',
  locale: 'tr_TR',
  defaultTitle: 'Sanal Kahve Falı | Ücretsiz Kahve Falı Yorumla - Kahve Yorumla',
  defaultDescription:
    'Fincan fotoğrafını yükle, ücretsiz sanal kahve falı yorumunu al. Kahve Yorumla ile aşk, para, kariyer ve genel kahve falını eğlenceli şekilde keşfet.',
  brand: {
    tagline: 'Fincanın dilinden anlamak için sade bir rehber.',
    short: 'Kahve falı sembollerini ve geleneğini sade bir dille anlatıyoruz.',
  },
  contact: {
    email: 'iletisim@kahveyorumla.com',
  },
  social: {
    twitter: '',
    instagram: '',
  },
  analytics: {
    gaMeasurementId: 'G-XRT036JRTY',
  },
  legal: {
    company: 'Kahve Yorumla',
    establishedYear: 2025,
  },
  navigation: [
    { href: '/', label: 'Ana Sayfa' },
    { href: '/fal-yukle/', label: 'Fal Yükle' },
    { href: '/sembol-sozlugu/', label: 'Sembol Sözlüğü' },
    { href: '/blog/', label: 'Blog' },
    { href: '/kahve-fali-nedir/', label: 'Kahve Falı Nedir?' },
    { href: '/kahve-fali-nasil-bakilir/', label: 'Nasıl Bakılır?' },
  ],
  footerLinks: {
    kurumsal: [
      { href: '/hakkimizda/', label: 'Hakkımızda' },
      { href: '/iletisim/', label: 'İletişim' },
    ],
    yasal: [
      { href: '/gizlilik-politikasi/', label: 'Gizlilik Politikası' },
      { href: '/kvkk/', label: 'KVKK Aydınlatma Metni' },
      { href: '/cerez-politikasi/', label: 'Çerez Politikası' },
      { href: '/kullanim-kosullari/', label: 'Kullanım Koşulları' },
    ],
    icerik: [
      { href: '/sembol-sozlugu/', label: 'Sembol Sözlüğü' },
      { href: '/blog/', label: 'Blog' },
      { href: '/kahve-fali-nedir/', label: 'Kahve Falı Nedir?' },
      { href: '/kahve-fali-nasil-bakilir/', label: 'Nasıl Bakılır?' },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
