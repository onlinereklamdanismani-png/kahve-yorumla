export const siteConfig = {
  name: 'Kahve Yorumla',
  domain: 'kahveyorumla.com',
  url: 'https://kahveyorumla.com',
  locale: 'tr_TR',
  defaultTitle: 'Kahve Yorumla — Kahve Falı Sembol Sözlüğü ve Rehberi',
  defaultDescription:
    'Kahve Yorumla; kahve falı sembollerinin anlamları, fal okuma rehberi ve özgün blog yazıları sunan bağımsız bir içerik sitesidir. Eğlence amaçlıdır.',
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
