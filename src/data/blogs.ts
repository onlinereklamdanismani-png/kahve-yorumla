export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  updatedAt?: string;
  category:
    | 'Rehber'
    | 'Sembol Notları'
    | 'Gelenek'
    | 'Modern Yorum'
    | 'Sıkça Sorulanlar';
  readingMinutes: number;
  relatedSymbols: string[];
  relatedBlogs?: string[];
  tags: string[];
}

export const blogs: BlogPost[] = [
  {
    slug: 'kahve-fali-nasil-bakilir-adim-adim',
    title: 'Kahve Falı Nasıl Bakılır? Sade ve Adım Adım Rehber',
    description:
      'Türk kahvesinin pişirilmesinden fincanın kapatılmasına kadar kahve falının nasıl bakıldığını sade bir dille anlatıyoruz. Eğlence amaçlı bir rehberdir.',
    excerpt:
      'Kahve falının ritüeli, fincanın hazırlanışı ve okumaya başlama biçimi hakkında pratik notlar. Mistik vaatlerden uzak, sade ve işlevsel bir yaklaşım.',
    content: `## Önce niyet, sonra kahve

Kahve falı, Türk kahve geleneğinin doğal bir uzantısıdır. Bu yazıda fincanı kapatmadan önce ve sonra ne yapıldığını sade bir dille aktarıyoruz. Hatırlatmak gerekir: kahve falı bir eğlence ritüelidir, kesin bilgi ya da kehanet değildir.

## 1. Türk kahvesini doğru pişirmek

Kahvenin telvesinin sağlıklı şekilde dibe çökmesi yorumu kolaylaştırır. İdeal olarak:

- Soğuk su kullanın.
- Cezvenin ısısını yavaş yükseltin.
- Kahveyi kaynatmadan, köpük oluşmaya başladığında ateşten alın.

## 2. Fincanın kapatılması

İçildikten sonra fincan tabağa ters kapatılır. Bu sırada kişi yorumlanmasını istediği konuları zihninde tutmaya çalışır. Fincanın yaklaşık olarak soğuyana kadar (ortalama 5–10 dakika) kapalı bekletilmesi gelenektir.

## 3. Bölgeleri tanımak

Fincanın iç yüzeyi üç ana bölgeye ayrılır:

- **Kenar (rim):** yakın gelecek
- **Orta:** şu an yaşananlar
- **Dip:** uzak veya köklü konular

Bu bölgeler hakkında daha geniş bir yazı için [Fincanın Bölgeleri Üzerine Notlar](/blog/fincan-okuma-bolgeleri/) yazısına göz atabilirsiniz.

## 4. Sembolleri okumak

Telve şekillerinin neye benzediğini hızlı düşünmek faydalıdır. Aklınıza ilk gelen şekiller çoğunlukla doğru sezgilerdir. Şekilleri tek tek değil; birbirleriyle ilişkileri içinde değerlendirin.

[Sembol Sözlüğü](/sembol-sozlugu/) içinde sık karşılaşılan sembollerin anlamlarına bakabilirsiniz.

## 5. Aşırı yorumdan kaçınmak

Bir fincanda onlarca şekil görülebilir. Hepsini birden kişisel hayata uyarlamaya çalışmak yorumu yorucu hâle getirir. Üç ya da dört belirgin şekli seçmek hem yoruma derinlik katar hem de keyfini korur.

## Eğlence amaçlıdır

Bu rehberdeki bilgiler kültürel/eğlence amaçlıdır. Sağlık, hukuk veya finansla ilgili kararlar için profesyonel uzmanlara başvurmak gerekir.`,
    publishedAt: '2025-08-10',
    category: 'Rehber',
    readingMinutes: 6,
    relatedSymbols: ['yol', 'kapi', 'cember'],
    relatedBlogs: ['fincan-okuma-bolgeleri', 'kahve-fali-sembolleri-baslangic-rehberi'],
    tags: ['rehber', 'başlangıç', 'kahve falı'],
  },
  {
    slug: 'fincan-okuma-bolgeleri',
    title: 'Fincanın Bölgeleri: Kenar, Orta ve Dip Ne Anlatır?',
    description:
      'Kahve falında fincanın bölgelerinin nasıl yorumlandığını, hangi bölgenin hangi zaman dilimine işaret ettiğini sade bir dille açıklıyoruz.',
    excerpt:
      'Fincanın kenarı, ortası ve dibi farklı zaman dilimlerini ifade eder. Bu yazıda her bölgenin pratik anlamını adım adım inceliyoruz.',
    content: `## Fincan üç bölgeye ayrılır

Fincanın iç yüzeyi okumayı kolaylaştırmak için üç ana bölgeye ayrılır. Bu ayrım, ilk bakışta karmaşık görünen telve şekillerini daha düzenli bir çerçeveye yerleştirmeye yardımcı olur.

### Kenar bölgesi

Kenara yakın bölgedeki şekiller genellikle yakın geleceğe işaret eder. Yaklaşan haberler, yapılması düşünülen plan ya da yeni başlangıçlar burada okunur.

### Orta bölge

Fincanın ortasındaki şekiller, kişinin şu an yaşadıklarına dair sezgiler verir. Devam eden ilişkiler, üzerinde çalışılan konular ya da süregelen durumlar bu bölgede toplanır.

### Dip bölgesi

Dipteki şekiller daha derin ve uzun vadelidir. Geçmişten gelen meseleler, köklü kararlar ya da uzak gelecekteki olasılıklar burada yorumlanır.

## Bölgeler arası ilişki

Bir sembolün hangi bölgede olduğu kadar, başka sembollerle nasıl ilişki kurduğu da önemlidir. Örneğin kenarda bir [yol](/sembol-sozlugu/yol/) ve dipte bir [kapı](/sembol-sozlugu/kapi/) görünüyorsa; yakın zamanda alınacak küçük bir kararın uzun vadeli bir geçişe zemin hazırladığı şeklinde okunabilir.

## Pratik öneri

İlk okumalarda yalnızca bir bölgeye odaklanmak işi kolaylaştırır. Zamanla diğer bölgelere doğal olarak yer açılır.

Daha geniş bir başlangıç için [adım adım rehberi](/blog/kahve-fali-nasil-bakilir-adim-adim/) incelemenizi öneririz. Bu yazıdaki tüm yorumlar eğlence amaçlıdır.`,
    publishedAt: '2025-08-12',
    category: 'Rehber',
    readingMinutes: 5,
    relatedSymbols: ['yol', 'kapi', 'cember'],
    relatedBlogs: ['kahve-fali-nasil-bakilir-adim-adim'],
    tags: ['rehber', 'fincan', 'bölge'],
  },
  {
    slug: 'kahve-fali-sembolleri-baslangic-rehberi',
    title: 'Kahve Falı Sembollerine Yeni Başlayanlar İçin Pratik Rehber',
    description:
      'Kahve falında en sık karşılaşılan sembolleri ve bunlara nasıl yaklaşılacağını anlatan, başlangıç düzeyi bir özet rehber.',
    excerpt:
      'Kuş, balık, ağaç gibi sık çıkan sembollere nasıl bakılır? Yeni başlayanlar için sade bir özet ve referans listesi.',
    content: `## Sık görülen sembollerle başlamak

Kahve falı sembolleri sayısız olabilir; ancak ilk okumalarda az sayıda ve temel olanlara odaklanmak okumayı keyifli kılar. Bu yazıda yeni başlayanlar için en sık karşılaşılan birkaç sembolü kısaca özetliyoruz.

### Kuş

[Kuş sembolü](/sembol-sozlugu/kus/) sıklıkla bir haberi ya da müjdeyi temsil eder. Yönü ve büyüklüğü yorumun tonunu belirler.

### Balık

[Balık sembolü](/sembol-sozlugu/balik/) bolluk ve hareketlilik anlamına gelir. Sürü hâlinde ise canlanan bir döneme işarettir.

### Ağaç

[Ağaç sembolü](/sembol-sozlugu/agac/) köklü gelişmeyi simgeler. Yapraklı veya yapraksız oluşu yorumu yumuşatır ya da sabır gerektirdiğini söyler.

### Yol

[Yol sembolü](/sembol-sozlugu/yol/) bir karar ya da yön değişikliğine işaret eder. Çatallı bir yol seçenekler arasında kalmayı anlatabilir.

## Aşırı yorumdan uzak durmak

Bir sembolün anlamını ezberlemek değil; bağlam içinde değerlendirmek daha doğrudur. Aynı sembol farklı kişilerde farklı çağrışım yaratabilir.

Daha kapsamlı bir liste için [Sembol Sözlüğü](/sembol-sozlugu/) sayfamıza bakabilirsiniz. Buradaki tüm anlatımlar eğlence amaçlıdır.`,
    publishedAt: '2025-08-15',
    category: 'Sembol Notları',
    readingMinutes: 5,
    relatedSymbols: ['kus', 'balik', 'agac', 'yol'],
    relatedBlogs: ['kahve-fali-semboller-sozlugu-nasil-kullanilir'],
    tags: ['başlangıç', 'sembol', 'rehber'],
  },
  {
    slug: 'kahve-fali-semboller-sozlugu-nasil-kullanilir',
    title: 'Kahve Falı Sembol Sözlüğü Nasıl Kullanılır?',
    description:
      'Kahve Yorumla sembol sözlüğünü daha verimli kullanmak için arama, kategori, ilişkili sembol ve bağlam okuma önerileri.',
    excerpt:
      'Sembol sözlüğünü ezbere değil; bağlam, ilişkili semboller ve fincan bölgeleriyle birlikte okumak daha tutarlı yorumlar üretir.',
    content: `## Sözlük neden ezberlenmez?

Sembol sözlükleri yardımcı bir referanstır; ezberlenmek için yapılmamıştır. Çünkü bir sembol, fincanın hangi bölgesinde durduğuna, başka hangi sembollere yakın olduğuna ve bakanın o anki konusuna göre farklı renkler kazanır.

## Aramayı doğru kullanmak

[Sembol Sözlüğü](/sembol-sozlugu/) sayfasında aklınıza ilk gelen kelimeyi yazmak çoğu zaman yeterlidir. Sözlük doğrudan kelime eşleşmesi yerine kategori ve ilişki üzerinden de gezilebilir.

## İlişkili sembolleri okumak

Her sembolün altında "ilgili semboller" ve "ilgili blog yazıları" alanı bulunur. Yorum yaparken yalnız bir sembole değil, fincanda birlikte göründüğü diğer sembollere de bakmak yorumu zenginleştirir.

## Bağlam içinde değerlendirmek

[Fincan bölgeleri](/blog/fincan-okuma-bolgeleri/) bilgisi ile birlikte sembolleri okumak yorumu daha tutarlı kılar. Aynı sembol kenarda farklı, dipte farklı bir vurguya sahip olabilir.

Buradaki yorumlar eğlence amaçlıdır.`,
    publishedAt: '2025-08-18',
    category: 'Rehber',
    readingMinutes: 4,
    relatedSymbols: ['agac', 'yol', 'cember'],
    relatedBlogs: ['kahve-fali-sembolleri-baslangic-rehberi', 'fincan-okuma-bolgeleri'],
    tags: ['sözlük', 'rehber', 'kullanım'],
  },
  {
    slug: 'kahve-fali-iliskiler-uzerine-notlar',
    title: 'Kahve Falında İlişki Sembolleri Üzerine Notlar',
    description:
      'Kalp, halka, çiçek gibi ilişki çağrıştıran sembollere kahve falında nasıl yaklaşıldığına dair sade notlar. Eğlence amaçlıdır.',
    excerpt:
      'Kalp, halka ve çiçek gibi sembollerin ilişki bağlamında nasıl yorumlandığına dair pratik notlar.',
    content: `## İlişki temalı semboller

İlişki konuları, kahve falında en çok merak edilen başlıklardandır. Ancak bu konuda dikkatli olmak ve yorumun bir karar değil, bir sezgi olduğunu hatırlamak önemlidir.

### Kalp

[Kalp sembolü](/sembol-sozlugu/kalp/) duygulara, paylaşılan bağlara ve duyguların gözden geçirilmesine işaret eder. Şeklin netliği bağın gücüne dair sezgi verir.

### Halka

[Halka sembolü](/sembol-sozlugu/halka/) söz, bağ ve sözleşmeyi simgeler. İlişkide netleşmek isteyen bir karar olarak yorumlanabilir.

### Çiçek

[Çiçek sembolü](/sembol-sozlugu/cicek/) küçük güzelliklerin paylaşımı, jestler ve sıcak yaklaşımlar olarak okunabilir.

## Hatırlatma

İlişkiler, fal yorumuyla yönlendirilebilecek konular değildir. Sadece sezgisel bir ipucu olarak değerlendirmek; gerçek kararları konuşarak almak daha sağlıklıdır.

Bu yorumlar eğlence amaçlıdır; kişisel kararlar uzmanlarla görüşülerek alınmalıdır.`,
    publishedAt: '2025-08-20',
    category: 'Sembol Notları',
    readingMinutes: 4,
    relatedSymbols: ['kalp', 'halka', 'cicek'],
    tags: ['ilişki', 'sembol'],
  },
  {
    slug: 'kahve-fali-tarihi-ve-kulturel-arka-plani',
    title: 'Kahve Falının Kısa Tarihi ve Kültürel Arka Planı',
    description:
      'Kahve falının Türk kahve geleneği ile birlikte nasıl şekillendiğine dair kısa bir kültürel arka plan.',
    excerpt:
      'Kahve falı, Türk kahvesinin yaygınlaşmasıyla şekillenen bir kültürel ritüeldir. Bu yazıda geleneğin sade bir özetini bulacaksınız.',
    content: `## Kahve ve sosyal hayat

Türk kahvesi yüzyıllar boyunca yalnızca bir içecek değil; sosyal bir ritüel olmuştur. Misafirlik, sohbet ve uzun konuşmaların eşlikçisi olan kahve, bittikten sonra bile sohbete eşlik etmenin bir yolu olarak fal geleneğini doğurmuştur.

## Bir oyun ve bir kültürel iz

Kahve falı, çoğunlukla aile ve arkadaş ortamlarında, eğlence amacıyla yapılan kültürel bir ritüeldir. Yalnızca telve şekillerinin yorumlanmasından değil; aynı zamanda anlatım sırasında kurulan sohbetten beslenir.

## Modern zamanda kahve falı

Bugün kahve falı, hem geleneksel ortamlarda hem de dijital paylaşımlar üzerinden yeniden popülerleşmektedir. Modern okuma, hâlâ sembolleri ezberlemek değil; bağlam, sezgi ve sade bir anlatımı bir araya getirmek üzerine kuruludur.

[Kahve falı nedir](/kahve-fali-nedir/) sayfamızda bu tanımları daha detaylı bulabilirsiniz. Bu yazıdaki tüm bilgiler eğlence ve kültürel bilgi paylaşımı amacıyla yazılmıştır.`,
    publishedAt: '2025-08-22',
    category: 'Gelenek',
    readingMinutes: 4,
    relatedSymbols: ['cember', 'yol'],
    tags: ['kültür', 'tarih', 'gelenek'],
  },
  {
    slug: 'kahve-fali-yorumlama-hatalari',
    title: 'Kahve Falı Yorumlarken Yapılan 7 Yaygın Hata',
    description:
      'Sembolleri okurken sıkça yapılan yorumlama hatalarını ve nasıl önleneceğini sade bir dille anlatıyoruz.',
    excerpt:
      'Aşırı yorum, ezbercilik ve bağlamı atlamak gibi hataları nasıl önlersiniz? Bu yazıda kısa bir kontrol listesi bulacaksınız.',
    content: `## 1. Bağlamı atlamak

Bir sembolün tek başına anlamı, fincandaki diğer sembollerle birlikteyken farklılaşır. Bağlam göz ardı edilirse yorum zorlanır.

## 2. Aşırı yorum

Tek bir kahve fincanında onlarca şekil görülebilir. Hepsini yorumlamaya çalışmak yorumu boğar. Belirgin 3–4 sembol seçmek yeterlidir.

## 3. Sembolleri ezberlemek

Sözlükteki anlamı tek doğru gibi kullanmak hatadır. [Sembol sözlüğü](/sembol-sozlugu/) bir referanstır; bağlam okumayı şekillendirir.

## 4. Kesin yargılar kurmak

"Mutlaka olacak" cümleleri kahve falı yorumuna uymaz. Sezgi paylaşımı ile karar verme arasındaki çizgiyi korumak gerekir.

## 5. Sağlık, hukuk ve finansa girmek

Bu alanlarda yapılan yorumlar yanıltıcı olabilir. Bu konularda yetkili uzmanlara başvurmak doğru tutumdur.

## 6. Heyecan içinde anlatmak

Telve şekilleri yorumlanırken sakin bir dil korunmalıdır. Kişiyi telkin etmek yerine seçenek sunmak daha sağlıklıdır.

## 7. Eğlence olduğunu unutmak

Kahve falı sosyal ve eğlenceli bir ritüeldir. Hayatın her kararını fala bağlamak ne yorumcuyu ne de dinleyeni rahatlatır.

Yorumlar eğlence amaçlıdır; somut kararlar uzmanlarla alınmalıdır.`,
    publishedAt: '2025-08-25',
    category: 'Rehber',
    readingMinutes: 5,
    relatedSymbols: ['yol', 'cember'],
    tags: ['yorum', 'hatalar', 'rehber'],
  },
  {
    slug: 'kahve-fali-bakilirken-dikkat-edilecekler',
    title: 'Kahve Falı Bakılırken Dikkat Edilmesi Gereken 5 Şey',
    description:
      'Kahve falı bakarken hem yorumun keyfini korumak hem de karşıdaki kişiye saygıyı kaybetmemek için sade bir kontrol listesi.',
    excerpt:
      'Yorum yaparken sakin dil, doğru sınırlar ve eğlence çerçevesi nasıl korunur? Bu yazıda kısa bir liste paylaşıyoruz.',
    content: `## 1. Önce dinlemek

Fala başlamadan önce kişinin merak ettiği konuyu kısaca dinlemek; yorumu hem odaklı hem de anlamlı kılar.

## 2. Sade dil

Karmaşık ve mistik kelimelerden uzak; günlük dilde, anlaşılır şekilde anlatmak kişiyi rahatlatır.

## 3. Sınırları korumak

Sağlık, hukuk veya finans gibi alanlara girmemek; bu konuları uzmanlara bırakmak gerekir.

## 4. Kesin vaatlerden kaçınmak

"Mutlaka şu olacak" tarzında ifadeler, hem yorumcuyu hem dinleyeni zor durumda bırakır. Olasılık ve sezgi dili kullanmak daha doğrudur.

## 5. Eğlenceli atmosferi korumak

Kahve falı sosyal bir ritüeldir. Sohbeti ağırlaştırmadan; gülerek, hafif bir tonla yorumlamak ortamın doğal akışını korur.

Bu öneriler eğlence ve sosyal sohbet bağlamında geçerlidir.`,
    publishedAt: '2025-08-27',
    category: 'Rehber',
    readingMinutes: 4,
    relatedSymbols: ['kapi', 'yol'],
    tags: ['rehber', 'pratik'],
  },
  {
    slug: 'kahve-fali-kus-sembolu-detayli',
    title: 'Kahve Falında Kuş Sembolü: Detaylı Notlar',
    description:
      'Kuş sembolünün kahve falında nasıl yorumlandığına dair detaylı notlar; kanat açıklığı, yön ve bölge etkileri.',
    excerpt:
      'Kuş sembolü genellikle bir habere işaret eder; ancak yön, kanat açıklığı ve bulunduğu bölge yorumun rengini değiştirir.',
    content: `## Kuş sembolünün temel anlamı

[Kuş sembolü](/sembol-sozlugu/kus/) çoğunlukla bir haber, mesaj veya yeni bir bilgi olarak yorumlanır. Şeklin yönü ve büyüklüğü, haberin niteliğini etkiler.

## Kanat açıklığı

Geniş kanatlı kuş, daha büyük bir gelişmeye ya da uzaktan gelecek bir habere işaret edebilir. Dar kanatlı kuş ise yakın çevreden gelecek küçük bir gelişme olarak okunur.

## Bulunduğu bölge

Kenarda bir kuş yakın bir haberi; ortada bir kuş süregelen bir konuda yeni bir bilgiyi; dipte bir kuş ise eski bir konunun yeniden gündeme geleceğini düşündürür. Bu bölgelerin daha geniş bir özetini [bölgeler yazısında](/blog/fincan-okuma-bolgeleri/) bulabilirsiniz.

## Diğer sembollerle ilişki

Kuşun yanında bir [mektup](/sembol-sozlugu/mektup/) görünüyorsa, haberin resmi bir bildirim olabileceği yorumu güçlenir. [Yol](/sembol-sozlugu/yol/) ile birlikte ise yeni bir karar haberinin geleceği şeklinde sezgi yapılabilir.

Bu yorumlar eğlence amaçlıdır.`,
    publishedAt: '2025-08-29',
    category: 'Sembol Notları',
    readingMinutes: 4,
    relatedSymbols: ['kus', 'mektup', 'yol'],
    tags: ['kuş', 'sembol'],
  },
  {
    slug: 'kahve-fali-kapi-sembolu-detayli',
    title: 'Kahve Falında Kapı Sembolü: Açık ve Kapalı Yorumlar',
    description:
      'Kapı sembolünün kahve falında nasıl yorumlandığına dair detaylı bir özet; açık, kapalı ve yarı aralık kapı yorumları.',
    excerpt:
      'Açık kapı net bir fırsatı, kapalı kapı henüz olgunlaşmamış bir teklifi anlatır. Bu yazıda kapı sembolünü detaylandırıyoruz.',
    content: `## Kapı sembolünün temel anlamı

[Kapı sembolü](/sembol-sozlugu/kapi/) hayatta açılan yeni bir bölüme; bir eşiğe ya da geçişe işaret eder.

## Açık kapı

Açık kapı çoğunlukla yakında değerlendirilebilecek net bir fırsatı simgeler. Bu fırsat iş, sosyal çevre ya da şehir değişikliği gibi alanlarda olabilir.

## Kapalı kapı

Kapalı kapı henüz vakti gelmemiş bir teklifi ya da kişinin henüz hazır olmadığı bir adımı düşündürür. Bu durumda biraz daha sabretmek anlamlıdır.

## Yarı aralık kapı

Yarı aralık bir kapı; ortaya çıkmaya başlayan ama henüz netleşmemiş bir konuyu anlatır. Bu durumda kişinin gözlemlemesi ve bilgi toplaması önerilir.

## Yakın semboller

Kapının yanında bir [anahtar](/sembol-sozlugu/anahtar/) görünüyorsa, fırsatın çözümünün kişinin kendi elinde olduğu yorumu yapılabilir. [Yol](/sembol-sozlugu/yol/) ile birlikte ise yeni bir sürecin başlayacağı şeklinde okunabilir.

Bu yorumlar eğlence amaçlıdır.`,
    publishedAt: '2025-09-01',
    category: 'Sembol Notları',
    readingMinutes: 4,
    relatedSymbols: ['kapi', 'anahtar', 'yol'],
    tags: ['kapı', 'sembol'],
  },
  {
    slug: 'kahve-fali-modern-yorum-yaklasimi',
    title: 'Modern Bir Yaklaşımla Kahve Falı Yorumlama',
    description:
      'Geleneksel sembolizmi modern bir dille birleştirerek kahve falının nasıl daha sade ve faydalı yorumlanabileceğine dair notlar.',
    excerpt:
      'Modern yorum, ezbere değil; sezgi, bağlam ve sade dile dayanır. Bu yazıda yaklaşımımızı özetliyoruz.',
    content: `## Sembolleri kişinin hayatına bağlamak

Modern yorum, sembollerin kişinin hayatındaki gündemle nasıl ilişkilendiğini düşünmeyi öne çıkarır. Aynı sembol farklı kişilerde farklı çağrışım yapar; yorum bunu hesaba katmalıdır.

## Sade dil ve sezgi

Modern bir yaklaşım, ağdalı ifadelerden uzak; sade ve günlük dile yakın bir anlatımı tercih eder. Sezgi, ezberlenmiş anlamların önüne geçer.

## Sınırları belirgin tutmak

Modern yorum, sağlık, hukuk veya finans gibi konuları açıkça dışarıda tutar. Bu sayede yorum eğlence ve sezgi çerçevesinde kalır.

## Pratik bir özet

Sembolleri okumak; bir tartışmadan çok bir sohbetin parçası gibi düşünüldüğünde modern bir yorum doğal olarak ortaya çıkar. [Sembol Sözlüğü](/sembol-sozlugu/) sayfamız bu yorumların temel referansıdır.

Bu yazıdaki yaklaşım ve bilgiler eğlence amaçlıdır.`,
    publishedAt: '2025-09-03',
    category: 'Modern Yorum',
    readingMinutes: 4,
    relatedSymbols: ['cember', 'gunes', 'ay'],
    tags: ['modern', 'yorum', 'yaklaşım'],
  },
  {
    slug: 'kahve-fali-sikca-sorulanlar',
    title: 'Kahve Falı Hakkında Sıkça Sorulanlar',
    description:
      'Kahve falı hakkında en çok sorulan sorulara sade ve doğrulanabilir bilgi içeren cevaplar.',
    excerpt:
      'Fincan ne kadar bekletilir? Sembolleri ezberlemek gerekir mi? En sık sorulan sorulara kısa, net cevaplar.',
    content: `## Fincan ne kadar süre kapalı tutulmalı?

Genel olarak fincanın yeterince soğuyana kadar kapalı tutulması önerilir; bu süre ortalama 5–10 dakikadır. Telvenin oturması yorumu kolaylaştırır.

## Sembolleri ezberlemek gerekir mi?

Hayır. [Sembol sözlüğü](/sembol-sozlugu/) yardımcı bir referanstır. Yorum, sembolün anlamını ezberlemekten çok bağlam ve sezgiyle ilgilidir.

## Bir fincanda kaç sembol yorumlanmalı?

Belirgin 3–4 sembol seçmek yeterlidir. Daha fazla sembolü zorlamak yorumun keyfini azaltır.

## Kahve falının doğruluğu nedir?

Kahve falı kültürel bir ritüel ve eğlence aracıdır. Doğruluk veya kehanet değildir.

## Sağlıkla ilgili konularda fala bakılır mı?

Hayır. Sağlık, hukuk ve finans gibi konularda yetkili uzmanlara başvurulması doğru olandır.`,
    publishedAt: '2025-09-05',
    category: 'Sıkça Sorulanlar',
    readingMinutes: 3,
    relatedSymbols: ['cember', 'yol'],
    tags: ['SSS', 'rehber'],
  },
  {
    slug: 'kahve-fali-su-sembolu-detayli',
    title: 'Kahve Falında Su Sembolü: Akış ve Arınma',
    description:
      'Su sembolünün kahve falında nasıl yorumlandığına dair detaylı notlar; berrak su, bulanık su ve yön etkileri.',
    excerpt:
      'Berrak su arınmayı, bulanık su henüz oturmamış duyguları temsil eder. Bu yazıda su sembolünü detaylandırıyoruz.',
    content: `## Su sembolünün temel anlamı

[Su sembolü](/sembol-sozlugu/su/) genellikle duygular, akış ve arınma ile ilişkilendirilir.

## Berrak su

Berrak su bir konunun temizlenmesini, kişinin bir konuda netleşmesini düşündürür.

## Bulanık su

Bulanık su henüz oturmamış duygusal bir alana, biraz zaman gerektiren konulara işaret eder.

## Yön ve hareket

Akan bir su şekli, devam eden bir sürecin canlanmasını anlatabilir. [Balık sembolü](/sembol-sozlugu/balik/) ile birlikte göründüğünde bolluk ve hareketlilik yorumu güçlenir.

Bu yorumlar eğlence amaçlıdır.`,
    publishedAt: '2025-09-07',
    category: 'Sembol Notları',
    readingMinutes: 4,
    relatedSymbols: ['su', 'balik', 'ay'],
    tags: ['su', 'sembol'],
  },
  {
    slug: 'kahve-fali-cember-sembolu-detayli',
    title: 'Kahve Falında Çember Sembolü: Tamamlanma ve Döngü',
    description:
      'Çember sembolünün kahve falında nasıl yorumlandığına dair detaylı notlar; tam ve eksik çember farkları.',
    excerpt:
      'Tam çember tamamlanan bir döngüyü; eksik çember tamamlanmayı bekleyen bir konuyu temsil eder.',
    content: `## Çember sembolünün temel anlamı

[Çember sembolü](/sembol-sozlugu/cember/) bir döngünün kapanmasına, bir konunun bütüne dönüşmesine işaret eder.

## Tam çember

Tam çember, üzerinde çalışılan bir konunun olumlu sonuca ulaşmasını ya da bir bütünlük hissinin yakalanmasını düşündürür.

## Eksik çember

Eksik çember, tamamlanmayı bekleyen bir konuyu, biraz daha sabır ve emek gerektiren bir aşamayı simgeler.

## Yakın semboller

Çemberin yanında bir [güneş](/sembol-sozlugu/gunes/) görünüyorsa, kapanışın aydınlık ve net bir biçimde olacağı yorumu yapılabilir. [Yol](/sembol-sozlugu/yol/) ile birlikte göründüğünde bir kararın bütünleşmesi olarak okunabilir.

Bu yorumlar eğlence amaçlıdır.`,
    publishedAt: '2025-09-09',
    category: 'Sembol Notları',
    readingMinutes: 4,
    relatedSymbols: ['cember', 'gunes', 'yol'],
    tags: ['çember', 'sembol'],
  },
  {
    slug: 'kahve-fali-evde-bakmak-icin-pratik-ipucu',
    title: 'Evde Kahve Falı Bakmak İçin Pratik İpuçları',
    description:
      'Evde kahve falı bakmaya başlamak isteyenler için sade, pratik ve eğlenceli ipuçları.',
    excerpt:
      'Doğru fincan, sakin bir ortam ve iyi bir Türk kahvesi… Evde kahve falı için pratik öneriler.',
    content: `## Doğru fincanı seçmek

Beyaz iç yüzeyli, sade desensiz porselen fincanlar telvenin daha iyi okunmasına yardımcı olur.

## Türk kahvesinin pişimi

Soğuk su, doğru ölçü ve yavaş ısı; telve oturmasını sağlar. Detaylar için [adım adım rehbere](/blog/kahve-fali-nasil-bakilir-adim-adim/) bakabilirsiniz.

## Sakin ortam

Yorumun keyfi, sohbetin sakin bir tempoda olmasıyla ilgilidir. Yüksek sesli bir ortam yorumu zorlaştırır.

## Hafif bir tutum

Kahve falı sosyal bir ritüeldir. Hafif, eğlenceli ve karşıdaki kişiye saygılı bir tutum yorumun keyfini korur.

## Sınırlar

Sağlık, hukuk ya da finans konuları yorumun dışında bırakılır. Bu konularda uzman görüşü her zaman önceliklidir.

Bu yazıdaki tüm öneriler eğlence amaçlıdır.`,
    publishedAt: '2025-09-11',
    category: 'Rehber',
    readingMinutes: 4,
    relatedSymbols: ['kapi', 'yol'],
    tags: ['ev', 'pratik', 'rehber'],
  },
  {
    slug: 'kahve-fali-yildiz-sembolu-detayli',
    title: 'Kahve Falında Yıldız Sembolü: Umut ve Hedef',
    description:
      'Yıldız sembolünün kahve falında nasıl yorumlandığına dair detaylı notlar; tek yıldız, küme ve yön etkileri.',
    excerpt:
      'Yıldız hedefe odaklanmayı, ilhamı ve uzun vadeli umutları simgeler. Bu yazıda detaylı yorumlarıyla ele alıyoruz.',
    content: `## Yıldız sembolünün temel anlamı

[Yıldız sembolü](/sembol-sozlugu/yildiz/) hedef, umut ve ilhamı temsil eder.

## Tek yıldız

Tek yıldız net bir hedefe; çoğu zaman uzun vadeli bir hayalin parlamasına işaret eder.

## Yıldız kümesi

Birden çok yıldız çoğu zaman çoklu fırsatlara, yeni karşılaşmalara ya da tanınma ihtimallerine yorulabilir.

## Yakın semboller

Yıldızın yanında [ağaç](/sembol-sozlugu/agac/) görünüyorsa, hedefe doğru atılan adımların sağlam temellere oturduğu okuması yapılabilir. [Yol](/sembol-sozlugu/yol/) ile birlikte ise hedefe giden net bir adımı simgeler.

Bu yorumlar eğlence amaçlıdır.`,
    publishedAt: '2025-09-13',
    category: 'Sembol Notları',
    readingMinutes: 4,
    relatedSymbols: ['yildiz', 'agac', 'yol'],
    tags: ['yıldız', 'sembol'],
  },
  {
    slug: 'kahve-fali-balik-sembolu-detayli',
    title: 'Kahve Falında Balık Sembolü: Bolluk ve Hareket',
    description:
      'Balık sembolünün kahve falında nasıl yorumlandığına dair detaylı notlar; tek balık ve sürü farkları.',
    excerpt:
      'Tek balık küçük ama net bir gelişmeye, balık sürüsü canlanan bir döneme işaret eder.',
    content: `## Balık sembolünün temel anlamı

[Balık sembolü](/sembol-sozlugu/balik/) bolluk, hareketlilik ve haber akışı ile ilişkilidir.

## Tek balık

Tek balık küçük ama net bir gelişmeyi düşündürür. Yön ve büyüklük yorumu zenginleştirir.

## Balık sürüsü

Sürü çoğu zaman iş, finans veya sosyal alanda canlanan bir dönemi simgeler.

## Su ile birlikte

Yanında [su sembolü](/sembol-sozlugu/su/) görünüyorsa yorumun gücü artar; akışın daha kuvvetli olduğu yönünde sezgi yapılabilir.

Bu yorumlar eğlence amaçlıdır.`,
    publishedAt: '2025-09-15',
    category: 'Sembol Notları',
    readingMinutes: 3,
    relatedSymbols: ['balik', 'su'],
    tags: ['balık', 'sembol'],
  },
  {
    slug: 'kahve-fali-elele-iliskiler-ve-bagdas',
    title: 'Kahve Falında El Sembolü: Yardım ve Üretkenlik',
    description:
      'El sembolünün kahve falında nasıl yorumlandığına dair detaylı notlar; açık el ve yumruk hâlinde el yorumları.',
    excerpt:
      'Açık el yardımı ve cömertliği, yumruk hâlinde el dik durmayı simgeler. El sembolünü detaylandırıyoruz.',
    content: `## El sembolünün temel anlamı

[El sembolü](/sembol-sozlugu/el/) yardım, dayanışma ve üretkenliği anlatır.

## Açık el

Açık el, beklenmedik bir destek, almaya açıklık veya cömertçe verme tutumunu düşündürür.

## Yumruk hâlinde el

Yumruk hâlinde el bir konuda dik durmayı, tutumu kararlı tutmayı temsil eder.

## Yakın semboller

[Anahtar](/sembol-sozlugu/anahtar/) ile birlikte göründüğünde bir çözümün kişinin elinde olduğu yorumu yapılabilir.

Bu yorumlar eğlence amaçlıdır.`,
    publishedAt: '2025-09-17',
    category: 'Sembol Notları',
    readingMinutes: 3,
    relatedSymbols: ['el', 'anahtar'],
    tags: ['el', 'sembol'],
  },
  {
    slug: 'kahve-fali-mektup-sembolu-detayli',
    title: 'Kahve Falında Mektup Sembolü: Bildirimler ve Yazışmalar',
    description:
      'Mektup sembolünün kahve falında nasıl yorumlandığına dair detaylı notlar; açık ve kapalı mektup farkları.',
    excerpt:
      'Açık mektup yakın bir bildirimi, kapalı mektup henüz vakti gelmemiş bir haberi temsil eder.',
    content: `## Mektup sembolünün temel anlamı

[Mektup sembolü](/sembol-sozlugu/mektup/) beklenen bir bildirim, resmi haber veya net bir cevap olarak yorumlanır.

## Açık mektup

Açık mektup, içeriği yakında öğrenilecek bir habere işaret eder.

## Kapalı mektup

Kapalı mektup, henüz vakti gelmemiş bir konunun ilerleyen günlerde gündeme geleceğini düşündürür.

## Yakın semboller

Mektubun yanında [kuş](/sembol-sozlugu/kus/) görünüyorsa, haberin uzaktan ya da müjde tonunda geleceği yorumu güçlenir.

Bu yorumlar eğlence amaçlıdır.`,
    publishedAt: '2025-09-19',
    category: 'Sembol Notları',
    readingMinutes: 3,
    relatedSymbols: ['mektup', 'kus'],
    tags: ['mektup', 'sembol'],
  },
  {
    slug: 'kahve-fali-aglama-sevinme-iki-tarafli-yorumlar',
    title: 'İki Tarafa Çekilebilen Sembolleri Nasıl Yorumlamalı?',
    description:
      'Kahve falında bazı semboller hem olumlu hem temkinli okunabilir. Bu yazıda iki tarafa çekilebilen yorumların nasıl ele alındığını inceliyoruz.',
    excerpt:
      'Bazı semboller koşula göre olumlu ya da temkinli okunabilir. Bu yazıda dengeyi nasıl koruyacağınızı paylaşıyoruz.',
    content: `## Çift tarafı olan semboller

Kahve falında bazı semboller doğası gereği iki tarafa çekilebilir. Örneğin [taş sembolü](/sembol-sozlugu/koprutas/) hem bir engel hem de sağlam bir temel olarak yorumlanabilir.

## Yorumda denge

Bu durumda yorum yapan kişinin kesin bir taraf seçmesi yerine her iki olasılığı da dile getirmesi daha tutarlıdır. Karar her zaman dinleyenin kendisine aittir.

## Bağlamı göz ardı etmemek

Yan sembollerin tonu, fincanın bölgesi ve kişinin gündemi yorumu hangi tarafa eğeceğini düşündürür. Sözlüğe ek olarak [fincan bölgeleri](/blog/fincan-okuma-bolgeleri/) bilgisi yardımcı olur.

## Sade ifade

"Belki", "ihtimal var", "öyle düşünülebilir" gibi yumuşak ifadeler hem yorumcuyu rahat tutar hem de dinleyene seçim alanı bırakır.

Bu yorumlar eğlence amaçlıdır.`,
    publishedAt: '2025-09-21',
    category: 'Modern Yorum',
    readingMinutes: 4,
    relatedSymbols: ['koprutas', 'yol', 'cember'],
    tags: ['yorum', 'denge', 'modern'],
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogs.find((post) => post.slug === slug);
}

export function getRelatedBlogs(post: BlogPost): BlogPost[] {
  if (!post.relatedBlogs?.length) return [];
  return post.relatedBlogs
    .map((slug) => getBlogBySlug(slug))
    .filter((b): b is BlogPost => Boolean(b));
}

export function getBlogsBySymbolSlug(symbolSlug: string): BlogPost[] {
  return blogs.filter((post) => post.relatedSymbols.includes(symbolSlug));
}

export function getBlogCategories(): BlogPost['category'][] {
  return Array.from(new Set(blogs.map((b) => b.category)));
}
