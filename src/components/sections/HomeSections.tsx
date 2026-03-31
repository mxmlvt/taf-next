import Link from 'next/link';
import Image from 'next/image';
import type { Locale } from '@/lib/types';
import FadeIn from '@/components/ui/FadeIn';

interface HomeSectionsProps {
  locale: Locale;
}

const BLOG_POSTS_EN = [
  { slug: 'zippers-for-bags-and-backpacks', title: 'Zippers for Bags and Backpacks', excerpt: 'Choosing the right zipper for bags and backpacks is crucial for their functionality and durability, given their frequent use and potential loads.', date: '2025-07-02', img: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/nylonzippers8-1024x1024.jpg' },
  { slug: 'where-to-buy-zippers-wholesale', title: 'Where to buy zippers wholesale?', excerpt: 'We at Trims and fasteners understand that buying zippers wholesale requires a precise understanding of your needs and a trustworthy partner.', date: '2025-06-27', img: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/ykkmetal-scaled.jpg' },
  { slug: 'coil-zippers-characteristics-and-subtypes', title: 'Coil Zippers: Characteristics and Subtypes', excerpt: 'Coil zippers, widely used for their flexibility and versatility, have specific features and subtypes that affect their application.', date: '2025-06-27', img: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/nylonzippers6.jpg' },
  { slug: 'zippers-comparison-metal-plastic-and-nylon', title: 'Zippers Comparison: Metal, Plastic, and Nylon', excerpt: 'The zipper\'s mechanism is a relatively simple concept, yet it\'s a complex component because its performance depends on the material it\'s made from.', date: '2025-06-20', img: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/metalslider34-scaled.jpg' },
  { slug: 'how-to-fix-zipper-problems', title: 'How to Fix Zipper Problems?', excerpt: 'There\'s nothing more frustrating than a zipper that stops working at the worst possible moment. Whether it\'s on a jacket, backpack, or a case.', date: '2025-05-23', img: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/plastikowyzielony-1.jpg' },
  { slug: 'how-to-recognize-a-high-quality-zipper', title: 'How to recognize a high-quality zipper?', excerpt: 'A zipper is one of those components that can either make a product feel amazing or completely ruin the experience. While most of us don\'t think about zippers every day, they are often the first thing that determines quality.', date: '2025-05-14', img: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/nylonzippers6.jpg' },
];

const BLOG_POSTS_PL = [
  { slug: 'zamki-blyskawiczne-do-toreb-i-plecakow', title: 'Zamki błyskawiczne do toreb i plecaków', excerpt: 'Wybór odpowiedniego zamka do toreb i plecaków jest kluczowy dla ich funkcjonalności i trwałości, biorąc pod uwagę częste użytkowanie.', date: '2025-07-02', img: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/nylonzippers8-1024x1024.jpg' },
  { slug: 'gdzie-kupic-zamki-blyskawiczne-hurtem', title: 'Gdzie Kupić Zamki Błyskawiczne Hurtem?', excerpt: 'W TAF rozumiemy, że zakup hurtowy zamków błyskawicznych wymaga precyzyjnego określenia potrzeb i zaufanego partnera.', date: '2025-06-27', img: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/ykkmetal-scaled.jpg' },
  { slug: 'zamki-spiralne-charakterystyka-i-podtypy', title: 'Zamki Spiralne: Charakterystyka i Podtypy', excerpt: 'Zamki spiralne, powszechnie stosowane ze względu na ich elastyczność i wszechstronność, posiadają specyficzne cechy i podtypy wpływające na zastosowanie.', date: '2025-06-27', img: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/nylonzippers6.jpg' },
  { slug: 'porownanie-zamkow-blyskawicznych-metalowe-plastikowe-i-nylonowe', title: 'Porównanie Zamków Błyskawicznych: Metalowe, Plastikowe i Nylonowe', excerpt: 'Z założenia dosyć prosty mechanizm zamka błyskawicznego jest komponentem złożonym, zależnym od materiału z którego został wykonany.', date: '2025-06-20', img: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/metalslider34-scaled.jpg' },
  { slug: 'jak-rozwiazac-problemy-z-zamkiem-blyskawicznym', title: 'Jak rozwiązać problemy z zamkiem błyskawicznym?', excerpt: 'Nie ma nic bardziej irytującego niż zamek błyskawiczny, który odmawia współpracy w najmniej odpowiednim momencie.', date: '2025-05-23', img: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/plastikowyzielony-1.jpg' },
  { slug: 'zamek-wysokiej-jakosci', title: 'Jak poznać zamek błyskawiczny wysokiej jakości?', excerpt: 'Zamek błyskawiczny to jeden z tych elementów, które albo zachwycają, albo całkowicie psują wrażenie z użytkowania produktu. Poznaj cechy zamka premium.', date: '2025-05-14', img: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/nylonzippers6.jpg' },
];

export default function HomeSections({ locale }: HomeSectionsProps) {
  const base = locale === 'en' ? '' : '/pl';
  const isEn = locale === 'en';

  const recentPosts = isEn ? BLOG_POSTS_EN : BLOG_POSTS_PL;

  const typeCategories = [
    {
      label: isEn ? 'Plastic Zippers' : 'Zamki plastikowe',
      img: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/plastikowyzielony-1.jpg',
      href: isEn ? `${base}/type-of-zippers/plastic-zippers/` : '/pl/type-of-zippers/plastic-zippers/',
    },
    {
      label: isEn ? 'Nylon Zippers' : 'Zamki nylonowe',
      img: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/nylonzippers6.jpg',
      href: isEn ? `${base}/type-of-zippers/nylon-zippers/` : '/pl/type-of-zippers/nylon-zippers/',
    },
    {
      label: isEn ? 'Metal Zippers' : 'Zamki metalowe',
      img: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/metalslider34-scaled.jpg',
      href: isEn ? `${base}/type-of-zippers/metal-zippers/` : '/pl/type-of-zippers/metal-zippers/',
    },
  ];

  const usageCategories = [
    { slug: 'fire-protection', label: isEn ? 'Fire-Resistant Clothing' : 'Odzież ognioodporna', img: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/04/NZIP-HEADER-9.png', href: `${base}/use-of-zippers/fire-protection/` },
    { slug: 'military', label: isEn ? 'Military' : 'Wojsko', img: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/04/NZIP-HEADER-8.png', href: `${base}/use-of-zippers/military/` },
    { slug: 'cycling-sportswear', label: isEn ? 'Cycling & Sportswear' : 'Kolarstwo & odzież sportowa', img: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/zamki-dla-odziezy-sportowej.png', href: `${base}/use-of-zippers/cycling-sportswear/` },
    { slug: 'baby', label: isEn ? 'Baby' : 'Dzieci', img: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/Projekt-bez-nazwy-42.png', href: `${base}/use-of-zippers/baby/` },
    { slug: 'fashion', label: isEn ? 'Fashion' : 'Moda', img: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/Projekt-bez-nazwy-43.png', href: `${base}/use-of-zippers/fashion/` },
    { slug: 'buckles-plastic-hardware', label: isEn ? 'Buckles & Plastic Hardware' : 'Zapięcia & elementy plastikowe', img: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/09/Projekt-bez-nazwy-79.png', href: `${base}/use-of-zippers/buckles-plastic-hardware/` },
  ];

  return (
    <>
      {/* ── Section 1: Company intro ── */}
      <section id="homepage-content" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
          <h2 className="font-[Jost] text-3xl sm:text-4xl font-light mb-8 text-[#111]">
            {isEn ? 'Trims and Fasteners' : 'Trims and Fasteners'}
          </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
          <div className="space-y-5">
            <p className="font-[Jost] text-gray-500 text-base leading-relaxed">
              {isEn
                ? 'For years, we have been supporting customers in the production of clothing and accessories by providing reliable zippers. As a distributor of zippers, we offer solutions tailored to the needs of the clothing, technical, furniture and outdoor markets. Our range mainly includes products from the renowned YKK company, which is why we are confident in the quality of the products offered by trimsandfasteners.com.'
                : 'Od lat wspieramy klientów w produkcji odzieży i akcesoriów, dostarczając niezawodne zamki błyskawiczne, jak również taśmy zamkowe i suwaki. Jako dystrybutor zamków błyskawicznych oferujemy rozwiązania dopasowane do potrzeb rynków odzieżowego, technicznego, meblowego oraz outdoorowego. W naszym asortymencie posiadamy głównie produkty renomowanej firmy YKK.'}
            </p>
            <p className="font-[Jost] text-gray-500 text-base leading-relaxed">
              {isEn
                ? 'We make easy every trim and fastener order procedure, save time and money for companies. Use our knowledge and streamline your developments. Having big experience in supplying large scale projects and customer development. Always helpful, always listening. Appreciate business relationship with our customers as a key value.'
                : 'Upraszczamy każdy proces zamawiania, oszczędzamy czas i pieniądze firm. Wykorzystaj naszą wiedzę i usprawnij swoje projekty. Posiadamy duże doświadczenie w realizacji dużych projektów i we współpracy z klientami. Zawsze pomocni, zawsze słuchamy. Relacje biznesowe z klientami traktujemy jako kluczową wartość.'}
            </p>
          </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Section 2: Type of Zippers ── */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
          <h2 className="font-[Jost] text-3xl sm:text-4xl font-light text-center text-white mb-8">
            {isEn ? 'Types of zippers' : 'Rodzaje zamków'}
          </h2>
          </FadeIn>

          {/* Intro text + bullets ABOVE the grid */}
          <FadeIn delay={0.1}>
          <div className="space-y-4 mb-12">
            <p className="font-[Jost] text-gray-400 text-base leading-relaxed">
              {isEn
                ? 'Every project requires precise and proven components. That is why our range of zippers includes products that combine quality with functionality. A zipper may be a small detail, but there is no room for compromise in a good design. At TAF, we offer clothing and accessory manufacturers the following zippers:'
                : 'Każdy projekt wymaga precyzyjnych i sprawdzonych komponentów. Dlatego nasza oferta suwaków obejmuje produkty, które łączą jakość z funkcjonalnością. Zamek może być małym detalem, ale w dobrej konstrukcji nie ma miejsca na kompromisy. Producentom odzieży i akcesoriów oferujemy w TAF:'}
            </p>
            <ul className="space-y-2 font-[Jost] text-base">
              <li className="flex gap-2 text-gray-400"><span className="flex-shrink-0">—</span>{isEn ? 'Spiral – lightweight, flexible, ideal for sportswear and children\'s clothing, and industrial applications.' : 'Spiralne – lekkie, elastyczne, idealne do odzieży sportowej i dziecięcej, plecaków, obuwia.'}</li>
              <li className="flex gap-2 text-gray-400"><span className="flex-shrink-0">—</span>{isEn ? 'Plastic – durable and versatile, suitable for jackets and accessories, but also for heavy duty applications.' : 'Kostkowe – trwałe i uniwersalne, sprawdzające się w kurtkach, bluzach, odzieży dziecięcej.'}</li>
              <li className="flex gap-2 text-gray-400"><span className="flex-shrink-0">—</span>{isEn ? 'Metal – solid, with an elegant appearance, used in premium fashion. Traditional type of zipper.' : 'Metalowe – solidne, o eleganckim wyglądzie, stosowane m.in. w modzie premium.'}</li>
            </ul>
            <p className="font-[Jost] text-gray-400 text-base leading-relaxed">
              {isEn
                ? 'In addition, we offer complementary components such as sliders and pullers – also available in customised versions with the customer\'s logo. We also supply zipper tapes and special elements, designed for unusual orders and individual customer needs. We supply also raw components for zipper make.'
                : 'Dodatkowo oferujemy komponenty uzupełniające, takie jak suwaki i przywieszki – dostępne także w wersjach personalizowanych z logo klienta. Poza tym dostarczamy również taśmy suwakowe i elementy specjalne, projektowane z myślą o nietypowych zamówieniach i indywidualnych potrzebach klientów.'}
            </p>
          </div>

          </FadeIn>

          {/* Grid */}
          <FadeIn delay={0.15}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {typeCategories.map(cat => (
              <Link key={cat.label} href={cat.href} className="group relative overflow-hidden aspect-[4/3] block">
                <Image src={cat.img} alt={cat.label} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-[Jost] text-white text-lg font-light">{cat.label}</h3>
                </div>
              </Link>
            ))}
          </div>
          </FadeIn>

          {/* Text below grid */}
          <FadeIn delay={0.1}>
          <div className="space-y-4">
            <p className="font-[Jost] text-gray-400 text-base leading-relaxed">
              {isEn
                ? 'We offer a wide range of colours, customized options and technical support for each product group. Our specialists will advise you on how to choose the right type of zipper for your specific application. We work mainly on large scale projects, however also supply small local businesses.'
                : 'Dla każdej grupy produktowej zapewniamy różnorodność kolorystyczną, opcje personalizacji oraz wsparcie techniczne. Nasi specjaliści doradzą, jak dobrać odpowiedni typ zamka do konkretnego zastosowania. Obsługujemy zarówno duże marki, jak i lokalnych producentów.'}
            </p>
            <p className="font-[Jost] text-gray-400 text-base leading-relaxed">
              {isEn
                ? 'With a down-to-earth approach, we take care of customers in an exceptional way, making the whole purchase process as easy as possible. Just tell us your demand and we\'ll give the best option for you, let\'s talk!'
                : 'Z praktycznym podejściem dbamy o klientów wyjątkowo, upraszczając cały proces zakupu. Po prostu powiedz nam, czego potrzebujesz — znajdziemy najlepsze rozwiązanie!'}
            </p>
          </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Section 3: Use of Zippers ── */}
      <section className="py-20 bg-[#f5f3ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
          <h2 className="font-[Jost] text-3xl sm:text-4xl font-light text-center mb-8 text-[#111]">
            {isEn ? 'Use of zip fasteners' : 'Zastosowanie zamków'}
          </h2>
          </FadeIn>

          {/* Full text ABOVE grid */}
          <FadeIn delay={0.1}>
          <div className="space-y-4 mb-12">
            <p className="font-[Jost] text-gray-500 text-base leading-relaxed">
              {isEn
                ? 'The solutions offered by our company are used by customers from various market sectors who value quality and reliability.'
                : 'Rozwiązania naszej firmy są używane przez klientów z różnych sektorów rynku, ceniących jakość i niezawodność.'}
            </p>
            <p className="font-[Jost] text-gray-500 text-base leading-relaxed">
              {isEn
                ? 'As an experienced distributor of zipper fasteners, we supply components that meet these requirements 100%. Thanks to TAF, zippers are supplied to manufacturers of everyday, technical and sports clothing, tailors and fashion designers, companies in the upholstery, furniture and outdoor industries, as well as companies sewing backpacks, bags, footwear and other accessories, and military tenders for army uniforms and PPE, tactical gear.'
                : 'Jako doświadczony dystrybutor zamków błyskawicznych dostarczamy komponenty spełniające te wymagania w 100%. Zamki TAF trafiają do producentów odzieży codziennej, technicznej i sportowej, krawców, projektantów mody, firm tapicerskich, meblarskich i outdoorowych, a także firm szyących plecaki, torby, obuwie i inne akcesoria oraz na przetargi wojskowe.'}
            </p>
            <p className="font-[Jost] text-gray-500 text-base leading-relaxed">
              {isEn
                ? 'We mainly offer YKK zippers, which are also used in specialised military clothing, where reliability and resistance to intensive use are of key importance. What makes us different from many other distributing companies is a high quality technical knowledge and big market experience in zipper fasteners.'
                : 'Oferujemy głównie zamki YKK, stosowane również w specjalistycznej odzieży wojskowej, gdzie niezawodność i odporność na intensywne użytkowanie są kluczowe. Wyróżniamy się wysoką wiedzą techniczną i dużym doświadczeniem rynkowym.'}
            </p>
            <p className="font-[Jost] text-gray-500 text-base leading-relaxed">
              {isEn
                ? 'Thanks to our wide and flexible range, we are able to meet the needs of a diverse customer base. We fulfil orders requiring high repeatability as well as niche projects requiring an individual approach.'
                : 'Dzięki szerokiej i elastycznej ofercie jesteśmy w stanie zaspokoić potrzeby różnorodnych klientów. Realizujemy zarówno zamówienia wymagające wysokiej powtarzalności, jak i niszowe projekty wymagające indywidualnego podejścia.'}
            </p>
          </div>
          </FadeIn>

          {/* Grid */}
          <FadeIn delay={0.15}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
            {usageCategories.map(cat => (
              <Link key={cat.slug} href={cat.href} className="group relative overflow-hidden aspect-[4/3] block">
                <Image src={cat.img} alt={cat.label} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="font-[Jost] text-white text-sm font-normal leading-tight">{cat.label}</h3>
                </div>
              </Link>
            ))}
          </div>

          {/* Centered See more button */}
          <div className="text-center mb-10">
            <Link
              href={isEn ? '/use-of-zippers/' : '/pl/use-of-zippers/'}
              className="inline-block font-[Jost] text-sm text-[#111] border border-[#111] px-6 py-2.5 hover:bg-[#111] hover:text-white transition-colors"
            >
              {isEn ? 'See more' : 'Zobacz więcej'}
            </Link>
          </div>
          </FadeIn>

          {/* YKK paragraph below */}
          <FadeIn delay={0.1}>
          <div>
            <p className="font-[Jost] text-gray-500 text-base leading-relaxed">
              {isEn
                ? 'In our business, we focus on quality at every stage of cooperation. That is why we work exclusively with proven component manufacturers from whom we demand equally reliable solutions. One of the most respected and globally recognised brands we work with is the Japanese company YKK – a benchmark for reliability and precision. Use our knowledge and save your time and money.'
                : 'W naszej działalności skupiamy się na jakości na każdym etapie współpracy. Dlatego pracujemy wyłącznie ze sprawdzonymi producentami komponentów. Jedną z najbardziej szanowanych marek, z którymi współpracujemy, jest japońska firma YKK – wzorzec niezawodności i precyzji. Skorzystaj z naszej wiedzy i zaoszczędź czas i pieniądze.'}
            </p>
          </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Section 4: Combining Innovation ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-[Jost] text-3xl sm:text-4xl font-light mb-6 leading-snug text-[#111]">
                {isEn
                  ? 'Combining Innovation, Passion, and Technological Expertise — Join Us'
                  : 'Łącząc innowację, pasję i wiedzę technologiczną — Dołącz do nas'}
              </h2>
              <div className="space-y-4 font-[Jost] text-gray-500 text-base leading-relaxed">
                <p>
                  {isEn
                    ? 'If you are looking for a partner who will provide you with not only a product, but also support and advice, Trims and Fasteners is the right place for you. Our team will help you choose the perfect solutions for your collection or product line. We offer a comprehensive approach – from technical advice and customisation to efficient logistics.'
                    : 'Jeśli szukasz partnera, który zapewni Ci nie tylko produkt, ale także wsparcie i doradztwo, Trims and Fasteners to właściwe miejsce. Nasz zespół pomoże Ci wybrać idealne rozwiązania dla Twojej kolekcji lub linii produktów.'}
                </p>
                <p>
                  {isEn
                    ? 'Together with our customers, we look for the best solutions that will not only meet their expectations but also allow them to stay ahead of the competition. Trust the experience and quality we build every day.'
                    : 'Wspólnie z klientami szukamy najlepszych rozwiązań, które nie tylko spełniają oczekiwania, ale pozwalają wyprzedzać konkurencję. Zaufaj doświadczeniu i jakości, którą budujemy każdego dnia.'}
                </p>
                <p>
                  {isEn
                    ? 'TAF is quality that translates into customer satisfaction and long-term business relationships. Take a look at our full range and see what we can offer you. Our offer is the result of years of experience and close cooperation with customers from various industries. Regardless of the size of your order, we always deliver solutions you can rely on.'
                    : 'TAF to jakość przekładająca się na satysfakcję klientów i długoterminowe relacje biznesowe. Nasza oferta jest wynikiem lat doświadczeń i bliskiej współpracy z klientami z różnych branż. Niezależnie od wielkości zamówienia, zawsze dostarczamy rozwiązania, na których możesz polegać.'}
                </p>
              </div>
              <Link
                href={isEn ? '/contact/' : '/pl/contact/'}
                className="inline-block mt-8 bg-[#111111] text-white font-[Jost] font-normal text-sm px-8 py-3 hover:bg-black transition-colors"
              >
                {isEn ? 'Contact' : 'Kontakt'}
              </Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/ykkmetal-scaled.jpg"
                alt={isEn ? 'TAF - Trims and Fasteners' : 'TAF - Zamki i dodatki'}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Section 5: Blog (6 posts) ── */}
      {recentPosts.length > 0 && (
        <section className="py-20 bg-[#f5f3ef]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
            <h2 className="font-[Jost] text-3xl sm:text-4xl font-light text-center mb-12 text-[#111]">
              Blog
            </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {recentPosts.map(post => {
                const postHref = isEn ? `/blog/${post.slug}/` : `/pl/blog/${post.slug}/`;
                return (
                  <article key={post.slug} className="bg-white overflow-hidden hover:shadow-md transition-shadow">
                    <Link href={postHref} className="block relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={post.img}
                        alt={post.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </Link>
                    <div className="p-5">
                      <h3 className="font-[Jost] text-base font-normal text-[#111] mb-2 leading-snug">
                        <Link href={postHref} className="hover:text-gray-600 transition-colors">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="font-[Jost] text-sm text-gray-500 line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <Link
                          href={postHref}
                          className="font-[Jost] text-sm font-normal text-[#111] underline underline-offset-2 hover:text-gray-500 transition-colors"
                        >
                          {isEn ? 'Read more >' : 'Czytaj więcej >'}
                        </Link>
                        <time className="font-[Jost] text-xs text-gray-400">{post.date}</time>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
            </FadeIn>
            <div className="text-center mt-10">
              <Link
                href={isEn ? '/blog/' : '/pl/blog/'}
                className="inline-block font-[Jost] text-sm text-[#111] border border-[#111] px-8 py-3 hover:bg-[#111] hover:text-white transition-colors"
              >
                {isEn ? 'See more' : 'Zobacz więcej'}
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
