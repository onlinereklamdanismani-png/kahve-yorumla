export interface CoffeeSymbol {
  slug: string;
  name: string;
  shortMeaning: string;
  description: string;
  positive: string[];
  cautious: string[];
  position: {
    rim: string;
    middle: string;
    bottom: string;
  };
  related: string[];
  blogSlugs?: string[];
  category: 'Doğa' | 'Hayvan' | 'Nesne' | 'İnsan' | 'Soyut' | 'Yol & Hareket';
  updatedAt: string;
}

export const symbols: CoffeeSymbol[] = [
  {
    slug: 'kus',
    name: 'Kuş',
    shortMeaning: 'Haber, müjde, beklenen gelişme.',
    description:
      'Kuş figürü kahve falında çoğunlukla bir haberle ilişkilendirilir. Şeklin yönü, kanat açıklığı ve bulunduğu bölge haberin niteliğini değiştirebilir. Geniş kanatlı bir kuş büyük bir gelişmeye, dar kanatlı küçük bir kuş ise yakın çevreden gelecek küçük bir habere işaret olarak yorumlanır.',
    positive: [
      'Beklenen bir mesaj veya görüşme',
      'Yeni bir başlangıç hissi',
      'Uzaktan gelen bir haber',
    ],
    cautious: [
      'Henüz doğrulanmamış bir söylenti',
      'Aceleci karar vermeye dair bir hatırlatma',
    ],
    position: {
      rim: 'Yakın zamanda gelecek bir haberi simgeler.',
      middle: 'Sürmekte olan bir konuda yeni bir bilgi anlamına gelir.',
      bottom: 'Geçmişte konuşulmuş bir gelişmenin tekrar gündeme gelmesi olarak okunur.',
    },
    related: ['mektup', 'yol', 'kapi'],
    blogSlugs: ['kahve-fali-sembolleri-baslangic-rehberi'],
    category: 'Hayvan',
    updatedAt: '2025-09-01',
  },
  {
    slug: 'balik',
    name: 'Balık',
    shortMeaning: 'Bolluk, bereket ve haber akışı.',
    description:
      'Balık sembolü genellikle hareketli bir döneme, fırsatların art arda gelmesine işaret eder. Tek balık küçük ama net bir gelişme; balık sürüsü ise çoğu kez iş veya finans alanında olumlu bir hareketlilik olarak yorumlanır. Su ile birlikte çıkması yorumun daha güçlü olduğunu düşündürür.',
    positive: ['Yeni bir iş fırsatı', 'Maddi rahatlama dönemi', 'Yaratıcılığın artması'],
    cautious: ['Akışı yakalamak için sabır gerekebilir', 'Birden fazla seçenek arasında dikkatli seçim'],
    position: {
      rim: 'Yakında gelecek bir fırsata işaret eder.',
      middle: 'Mevcut işlerin canlanmasını anlatır.',
      bottom: 'Uzun vadeli, sabırla beklenen bir gelişmeyi simgeler.',
    },
    related: ['su', 'agac', 'yildiz'],
    blogSlugs: ['fincan-okuma-bolgeleri'],
    category: 'Hayvan',
    updatedAt: '2025-09-01',
  },
  {
    slug: 'yol',
    name: 'Yol',
    shortMeaning: 'Karar, yön değişikliği, yeni bir süreç.',
    description:
      'Düz, kıvrımlı veya çatallı çıkabilen yol sembolü; kişinin önündeki seçenekleri ve bu seçeneklere yaklaşımını anlatır. Düz bir yol netliği, kıvrımlı yol ise birkaç adımlı bir süreci ifade eder. Çatallı yol ise iki seçenek arasında kalmayı simgeler.',
    positive: ['Net bir yön bulma', 'Yeni bir başlangıç', 'Karar verme cesareti'],
    cautious: ['Acele karar vermemek', 'Seçeneklerin sonuçlarını tartmak'],
    position: {
      rim: 'Çok yakında alınacak bir karar.',
      middle: 'Devam eden bir sürecin yön değiştirmesi.',
      bottom: 'Geçmişte ertelenmiş bir kararın yeniden gündeme gelmesi.',
    },
    related: ['kapi', 'merdiven', 'cember'],
    blogSlugs: ['kahve-fali-nasil-bakilir-adim-adim'],
    category: 'Yol & Hareket',
    updatedAt: '2025-09-01',
  },
  {
    slug: 'kalp',
    name: 'Kalp',
    shortMeaning: 'Duygular, bağlar, ilişkiler.',
    description:
      'Kalp sembolü duygu durumunu ve kişiler arası bağları anlatır. Belirgin ve net bir kalp; güçlü, dengeli bir bağı simgelerken kırık ya da bölünmüş bir kalp şekli kişinin kendi duygularını gözden geçirmesi gerektiğini hatırlatır.',
    positive: ['Duygusal yakınlaşma', 'Affetme ve barışma', 'Kendine şefkat'],
    cautious: ['Duyguların hızla değişebilmesi', 'Beklentileri konuşarak netleştirmek'],
    position: {
      rim: 'Yeni başlayan bir duygusal süreç.',
      middle: 'Devam eden bir ilişkinin gözden geçirilmesi.',
      bottom: 'Geçmişten gelen duygusal bir konunun çözüm ihtiyacı.',
    },
    related: ['halka', 'cicek', 'mektup'],
    blogSlugs: ['kahve-fali-iliskiler-uzerine-notlar'],
    category: 'Soyut',
    updatedAt: '2025-09-01',
  },
  {
    slug: 'agac',
    name: 'Ağaç',
    shortMeaning: 'Büyüme, sağlık, kök salma.',
    description:
      'Ağaç sembolü genellikle istikrarlı bir gelişmeyi, sağlam temelleri ve uzun vadede karşılığını alacak emeği temsil eder. Yapraklı ağaç bereketli bir dönemi; yapraksız ağaç sabırla beslenmesi gereken bir konuyu hatırlatır.',
    positive: ['Sağlam ilerleme', 'Aile içi denge', 'Kendine yatırım'],
    cautious: ['Hızlı sonuç beklememek', 'Köklü değişikliklere zaman ayırmak'],
    position: {
      rim: 'Yakında temelleri atılacak bir konu.',
      middle: 'Hâlihazırda büyüyen bir süreç.',
      bottom: 'Uzun zamandır beslenen bir konunun olgunlaşması.',
    },
    related: ['cicek', 'dag', 'yildiz'],
    blogSlugs: ['kahve-fali-semboller-sozlugu-nasil-kullanilir'],
    category: 'Doğa',
    updatedAt: '2025-09-01',
  },
  {
    slug: 'cicek',
    name: 'Çiçek',
    shortMeaning: 'İyi haber, sevinç, küçük güzellikler.',
    description:
      'Çiçek sembolü hayatın küçük ama anlamlı sevinçlerine işaret eder. Açmış bir çiçek; tamamlanmış, paylaşılan bir mutluluğu, gonca ise gelişmekte olan bir başlangıcı simgeler.',
    positive: ['Tatlı bir sürpriz', 'Kişisel bakım dönemi', 'Yakın çevreden destek'],
    cautious: ['Ana yoğunlaşıp uzun vadeyi unutmamak'],
    position: {
      rim: 'Yakın bir küçük güzellik.',
      middle: 'Halihazırda yaşanan keyifli bir gelişme.',
      bottom: 'Geçmişin güzel bir hatırasının geri dönüşü.',
    },
    related: ['kalp', 'agac', 'yildiz'],
    category: 'Doğa',
    updatedAt: '2025-09-01',
  },
  {
    slug: 'yildiz',
    name: 'Yıldız',
    shortMeaning: 'Umut, hedef, ilham.',
    description:
      'Yıldız sembolü kişinin uzun vadeli hedefleri ve bu hedeflere giderken ihtiyacı olan ilhama işaret eder. Tek bir yıldız net bir hedefi, yıldız kümesi ise çoklu fırsatları temsil eder.',
    positive: ['Hedefe odaklanma', 'İlham veren bir karşılaşma', 'Tanınma ihtimali'],
    cautious: ['Yıldıza bakarken ayağın yere basması'],
    position: {
      rim: 'Yakında parlayan bir fırsat.',
      middle: 'Devam eden bir hedefe yakınlaşma.',
      bottom: 'Uzun vadeli bir hayalin temelleri.',
    },
    related: ['agac', 'gunes', 'ay'],
    category: 'Doğa',
    updatedAt: '2025-09-01',
  },
  {
    slug: 'ay',
    name: 'Ay',
    shortMeaning: 'Sezgi, döngüler, içsel bilgi.',
    description:
      'Ay sembolü iç sesin, döngülerin ve sezgilerin altını çizer. Hilal yeni bir döngünün başlangıcına; dolunay ise bir konunun zirveye ulaşmasına işaret eder.',
    positive: ['Sezgileri dinlemek', 'Yaratıcı ilham', 'Kendinle baş başa kalma ihtiyacı'],
    cautious: ['Aşırı yorum yapmamak', 'Dinlenmeye zaman ayırmak'],
    position: {
      rim: 'Sezgilerin ön plana çıktığı yakın bir dönem.',
      middle: 'Şu an yaşanan içsel bir farkındalık.',
      bottom: 'Uzun zamandır taşınan bir hissin gün yüzüne çıkması.',
    },
    related: ['yildiz', 'gunes', 'su'],
    category: 'Doğa',
    updatedAt: '2025-09-01',
  },
  {
    slug: 'gunes',
    name: 'Güneş',
    shortMeaning: 'Aydınlık, açıklık, enerji.',
    description:
      'Güneş sembolü berraklık, yeni bir aydınlanma ve enerji yenilenmesi anlamına gelir. Karanlık dönemden çıkış, gizli kalmış bir konunun açığa çıkması olarak yorumlanabilir.',
    positive: ['Yeni bir motivasyon', 'Bir konunun netleşmesi', 'Sosyal bir tanınma'],
    cautious: ['Enerjinin nereye harcanacağını seçmek'],
    position: {
      rim: 'Yakında gelecek bir aydınlanma.',
      middle: 'Şu an yaşanan netlik dönemi.',
      bottom: 'Geçmişte örtülü kalmış bir gerçeğin görünür olması.',
    },
    related: ['yildiz', 'ay', 'cember'],
    category: 'Doğa',
    updatedAt: '2025-09-01',
  },
  {
    slug: 'su',
    name: 'Su',
    shortMeaning: 'Akış, duygular, arınma.',
    description:
      'Su sembolü duygular, akış ve arınmayla ilgilidir. Berrak su bir konunun temizlenmesine; bulanık su ise henüz oturmamış duygusal bir alana işaret eder.',
    positive: ['Duygusal arınma', 'Yeni bir döneme geçiş', 'Esneklik'],
    cautious: ['Kararsızlığa kapılmamak', 'Sınırları net tutmak'],
    position: {
      rim: 'Yakında akışa girilen bir konu.',
      middle: 'Halihazırda akan bir süreç.',
      bottom: 'Uzun süredir biriken duyguların kanal bulması.',
    },
    related: ['balik', 'ay', 'koru'],
    category: 'Doğa',
    updatedAt: '2025-09-01',
  },
  {
    slug: 'kapi',
    name: 'Kapı',
    shortMeaning: 'Yeni fırsat, eşik, geçiş.',
    description:
      'Kapı sembolü hayatta açılan yeni bir bölümü, bir eşiği temsil eder. Açık kapı net bir fırsata; kapalı kapı ise henüz olgunlaşmamış bir teklife işaret eder.',
    positive: ['Yeni bir teklif', 'İş veya çevre değişikliği', 'Cesur bir adım'],
    cautious: ['Acele eşik atlamamak', 'Fırsatları araştırmak'],
    position: {
      rim: 'Yakında açılacak bir kapı.',
      middle: 'Şu an aralanmış bir fırsat.',
      bottom: 'Geçmişte kapanmış bir konunun yeniden açılması.',
    },
    related: ['yol', 'merdiven', 'anahtar'],
    category: 'Nesne',
    updatedAt: '2025-09-01',
  },
  {
    slug: 'anahtar',
    name: 'Anahtar',
    shortMeaning: 'Çözüm, açılış, sır.',
    description:
      'Anahtar sembolü, sıkışmış bir konunun çözüme kavuşmasına ya da kişinin elinde kullanmadığı bir gücü hatırlamasına işaret eder. İki anahtar; çoklu çözümleri ve seçenekleri simgeler.',
    positive: ['Önemli bir çözüm', 'Yeni bir yetkinlik', 'Anlaşma fırsatı'],
    cautious: ['Doğru kapıya doğru anahtarı çevirmek'],
    position: {
      rim: 'Yakında bulunacak bir çözüm.',
      middle: 'Hâlihazırda elde olan bir avantaj.',
      bottom: 'Uzun süredir aranan bir cevabın gelişi.',
    },
    related: ['kapi', 'yol', 'mektup'],
    category: 'Nesne',
    updatedAt: '2025-09-01',
  },
  {
    slug: 'merdiven',
    name: 'Merdiven',
    shortMeaning: 'Aşamalı ilerleme, terfi, yükseliş.',
    description:
      'Merdiven sembolü, basamak basamak ilerleyen bir konuyu anlatır. Yukarı doğru bir merdiven yükselişi; aşağı doğru olan bir merdiven ise daha temkinli bir döneme dair hatırlatma olarak yorumlanır.',
    positive: ['İş veya kariyerde ilerleme', 'Sabır karşılığı sonuç', 'Adım adım plan'],
    cautious: ['Hızlı sonuç beklememek', 'Her basamakta kendini değerlendirmek'],
    position: {
      rim: 'Yakında atılacak ilk adım.',
      middle: 'Süregelen bir ilerleme.',
      bottom: 'Uzun süredir devam eden bir tırmanış.',
    },
    related: ['kapi', 'yol', 'dag'],
    category: 'Yol & Hareket',
    updatedAt: '2025-09-01',
  },
  {
    slug: 'dag',
    name: 'Dağ',
    shortMeaning: 'Hedef, sabır, dayanıklılık.',
    description:
      'Dağ sembolü yüksek bir hedefe; bu hedefe ulaşmak için gereken sabra ve dayanıklılığa işaret eder. Tek dağ net bir hedefi, sıra dağlar ise birden fazla aşamalı yolculuğu anlatır.',
    positive: ['Uzun vadeli plan', 'Olgun bir karar', 'Engellere dayanma gücü'],
    cautious: ['Hedefin bedelini düşünmek', 'Mola vermeyi unutmamak'],
    position: {
      rim: 'Yakında belirginleşecek bir hedef.',
      middle: 'Tırmanılan bir konu.',
      bottom: 'Uzun süredir taşınan bir sorumluluk.',
    },
    related: ['merdiven', 'agac', 'yol'],
    category: 'Doğa',
    updatedAt: '2025-09-01',
  },
  {
    slug: 'mektup',
    name: 'Mektup',
    shortMeaning: 'Haber, bildirim, açıklama.',
    description:
      'Mektup sembolü beklenen bir bildirime ya da resmi bir habere işaret eder. Açık zarf, içeriği yakında öğrenilecek bir habere; kapalı zarf ise henüz vakti gelmemiş bir konuya dair hatırlatmadır.',
    positive: ['Beklenen bir cevap', 'Resmi bir gelişme', 'Açık iletişim'],
    cautious: ['Habere acele tepki vermemek'],
    position: {
      rim: 'Yakında ulaşacak bir bildirim.',
      middle: 'Şu an süren bir yazışma.',
      bottom: 'Geçmişte yarım kalmış bir cevabın tamamlanması.',
    },
    related: ['kus', 'anahtar', 'kapi'],
    category: 'Nesne',
    updatedAt: '2025-09-01',
  },
  {
    slug: 'cember',
    name: 'Çember',
    shortMeaning: 'Tamamlanma, döngü, bütünlük.',
    description:
      'Çember sembolü bir döngünün kapanmasını, bir konunun bütüne dönüşmesini anlatır. Tam çember tamamlanmış bir süreci; eksik çember ise tamamlanmak için biraz daha zaman isteyen bir konuyu simgeler.',
    positive: ['Bir konunun olumlu kapanışı', 'Anlaşma', 'İçsel denge'],
    cautious: ['Tekrar eden örüntüleri fark etmek'],
    position: {
      rim: 'Yakında kapanacak bir konu.',
      middle: 'Süregelen bir bütünlük arayışı.',
      bottom: 'Uzun süredir tamamlanmayı bekleyen bir döngü.',
    },
    related: ['gunes', 'ay', 'yol'],
    category: 'Soyut',
    updatedAt: '2025-09-01',
  },
  {
    slug: 'koru',
    name: 'Köprü',
    shortMeaning: 'Geçiş, uzlaşma, iki tarafı bağlama.',
    description:
      'Köprü sembolü birbirinden farklı iki alan ya da kişi arasında kurulacak bağı, uzlaşıyı ve geçişi anlatır. Uzun köprü zaman alacak ama anlamlı bir bağı; kısa köprü ise hızlı bir uzlaşmayı temsil eder.',
    positive: ['Uzlaşma fırsatı', 'Yeni bir ortaklık', 'Geçiş dönemi sonrası rahatlama'],
    cautious: ['İki tarafın da emek vermesi'],
    position: {
      rim: 'Yakında atılacak bir uzlaşma adımı.',
      middle: 'Hâlihazırda kurulan bir bağ.',
      bottom: 'Uzun süredir konuşulan bir uzlaşının gerçekleşmesi.',
    },
    related: ['yol', 'kapi', 'su'],
    category: 'Yol & Hareket',
    updatedAt: '2025-09-01',
  },
  {
    slug: 'halka',
    name: 'Halka',
    shortMeaning: 'Söz, sözleşme, bağ.',
    description:
      'Halka sembolü verilen bir sözü, bir sözleşmeyi ya da güçlü bir bağı temsil eder. Belirgin halka net bir taahhüdü; kırık halka ise gözden geçirilmesi gereken bir bağı simgeler.',
    positive: ['Resmi bir anlaşma', 'Güven temelli bir karar', 'Ortaklıkta netlik'],
    cautious: ['Sözün koşullarını yazılı netleştirmek'],
    position: {
      rim: 'Yakında verilecek bir söz.',
      middle: 'Hâlihazırda var olan bir bağ.',
      bottom: 'Uzun süredir devam eden bir taahhüt.',
    },
    related: ['kalp', 'mektup', 'cember'],
    category: 'Soyut',
    updatedAt: '2025-09-01',
  },
  {
    slug: 'el',
    name: 'El',
    shortMeaning: 'Yardım, destek, üretkenlik.',
    description:
      'El sembolü yardımlaşmayı, dayanışmayı ve kişinin elinin üzerindeki üretkenliğini anlatır. Açık el; cömertliği ve almaya açıklığı, yumruk hâlinde el ise bir konuda dik durmayı simgeler.',
    positive: ['Beklenmedik bir destek', 'İşbirliği', 'Yaratıcılığın artması'],
    cautious: ['Yardımı kabul etmeye açık olmak'],
    position: {
      rim: 'Yakında uzanacak bir el.',
      middle: 'Şu an alınan/verilen bir destek.',
      bottom: 'Uzun süredir devam eden bir dayanışma.',
    },
    related: ['kalp', 'anahtar', 'cicek'],
    category: 'İnsan',
    updatedAt: '2025-09-01',
  },
  {
    slug: 'goz',
    name: 'Göz',
    shortMeaning: 'Farkındalık, gözlem, koruma.',
    description:
      'Göz sembolü çoğunlukla kişinin gözlem yeteneğine, çevreden gelen ilgiye ve dikkatli olunması gereken konulara işaret eder. Belirgin göz; net bir farkındalığı, yarım göz ise henüz kapsanmamış bir alanın olduğunu anlatır.',
    positive: ['Sezgisel farkındalık', 'Gözlem yeteneği', 'Çevreden ilgi görmek'],
    cautious: ['Aşırı düşünmemek', 'Sağlıklı sınırlar'],
    position: {
      rim: 'Yakında dikkat çekecek bir konu.',
      middle: 'Şu an gözlemlenen bir durum.',
      bottom: 'Uzun süredir takip edilen bir konu.',
    },
    related: ['ay', 'gunes', 'mektup'],
    category: 'İnsan',
    updatedAt: '2025-09-01',
  },
  {
    slug: 'at',
    name: 'At',
    shortMeaning: 'Yolculuk, hız, kararlılık.',
    description:
      'At sembolü hareket, yolculuk ve kararlılıkla ilişkilidir. Koşan at hızlı bir gelişmeyi; duran at ise sabırla beklenecek bir karar anını simgeler.',
    positive: ['Yeni bir yolculuk', 'İş hayatında ivme', 'Kararlı bir adım'],
    cautious: ['Aşırı hızı dengelemek'],
    position: {
      rim: 'Yakın bir hareket.',
      middle: 'Şu an süregelen bir ivme.',
      bottom: 'Uzun süredir planlanan bir yola çıkış.',
    },
    related: ['yol', 'kapi', 'merdiven'],
    category: 'Hayvan',
    updatedAt: '2025-09-01',
  },
  {
    slug: 'koprutas',
    name: 'Taş',
    shortMeaning: 'Engel, dayanıklılık, sağlam temel.',
    description:
      'Taş sembolü bazen yolda bir engeli, bazen de sağlam bir temel atılışını temsil eder. Yolun ortasındaki taş çözülmesi gereken bir engele; köşedeki taş ise sağlam bir temel atılışına işaret eder.',
    positive: ['Sağlam karar', 'Direnç gösterme gücü', 'Temel atma'],
    cautious: ['Engelleri kabullenip plan kurmak'],
    position: {
      rim: 'Yakında karşılaşılacak bir engel ya da temel.',
      middle: 'Şu an yaşanan bir direnç.',
      bottom: 'Uzun süredir taşınan bir yük.',
    },
    related: ['dag', 'yol', 'merdiven'],
    category: 'Doğa',
    updatedAt: '2025-09-01',
  },
];

export function getSymbolBySlug(slug: string): CoffeeSymbol | undefined {
  return symbols.find((symbol) => symbol.slug === slug);
}

export function getRelatedSymbols(symbol: CoffeeSymbol): CoffeeSymbol[] {
  return symbol.related
    .map((slug) => getSymbolBySlug(slug))
    .filter((s): s is CoffeeSymbol => Boolean(s));
}

export function getSymbolCategories(): CoffeeSymbol['category'][] {
  return Array.from(new Set(symbols.map((s) => s.category)));
}
