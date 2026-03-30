import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import FaqAccordion from '@/components/sections/FaqAccordion';
import FadeIn from '@/components/ui/FadeIn';
import HeroAnimator from '@/components/ui/HeroAnimator';
import SmoothAnchor from '@/components/ui/SmoothAnchor';

type Props = { params: Promise<{ locale: string }> };

const CATEGORIES = [
  {
    labelEn: 'Fire-Resistant Clothing',
    labelPl: 'Odzież ognioodporna',
    hrefEn: '/use-of-zippers/fire-protection/',
    hrefPl: '/pl/zastosowanie-zamkow/odziez-ognioodporna/',
    img: 'https://trimsandfasteners.com/wp-content/uploads/2025/04/NZIP-HEADER-9.png',
  },
  {
    labelEn: 'Military',
    labelPl: 'Wojsko',
    hrefEn: '/use-of-zippers/military/',
    hrefPl: '/pl/zastosowanie-zamkow/wojsko/',
    img: 'https://trimsandfasteners.com/wp-content/uploads/2025/04/NZIP-HEADER-8.png',
  },
  {
    labelEn: 'Cycling & Sportswear',
    labelPl: 'Kolarstwo & odzież sportowa',
    hrefEn: '/use-of-zippers/cycling-sportswear/',
    hrefPl: '/pl/zastosowanie-zamkow/odziez-sportowa/',
    img: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/zamki-dla-odziezy-sportowej.png',
  },
  {
    labelEn: 'Baby',
    labelPl: 'Odzież dziecięca',
    hrefEn: '/use-of-zippers/baby/',
    hrefPl: '/pl/zastosowanie-zamkow/dzieci/',
    img: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/Projekt-bez-nazwy-42.png',
  },
  {
    labelEn: 'Fashion',
    labelPl: 'Moda',
    hrefEn: '/use-of-zippers/fashion/',
    hrefPl: '/pl/zastosowanie-zamkow/moda/',
    img: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/Projekt-bez-nazwy-43.png',
  },
  {
    labelEn: 'Furniture',
    labelPl: 'Meble',
    hrefEn: '/use-of-zippers/furniture/',
    hrefPl: '/pl/zastosowanie-zamkow/meble/',
    img: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/Projekt-bez-nazwy-44.png',
  },
  {
    labelEn: 'Buckles & Plastic Hardware',
    labelPl: 'Zapięcia & elementy plastikowe',
    hrefEn: '/use-of-zippers/buckles-plastic-hardware/',
    hrefPl: '/pl/zastosowanie-zamkow/zapiecia-elementy-plastikowe/',
    img: 'https://trimsandfasteners.com/wp-content/uploads/2025/09/Projekt-bez-nazwy-79.png',
  },
];

const FAQ_EN = [
  {
    question: 'Why is proper zipper selection so important for product functionality?',
    answer: 'Even at the design stage, it\'s clear that zippers determine the functionality of the entire product. A properly selected fastener is not just a finishing touch – it\'s a component that contributes to quality, safety, and ease of use. That\'s why we focus on precisely matching fasteners to the specific needs of the industry, material, and working environment. Each solution we offer is designed with a specific task in mind, ensuring it works reliably where others may fail. Specialized zippers are the answer to technical challenges and the expectations of professionals, making them essential for product success.',
  },
  {
    question: 'What makes sports zippers ideal for active wear and equipment?',
    answer: 'Sports zippers are designed to keep up with movement and perform reliably in extreme conditions. They\'re used in technical jackets, softshells, outdoor clothing, backpacks, covers, and cycling and running accessories. Their key features include lightweight construction, resistance to moisture and dust, and ability to withstand dynamic stress. They ensure smooth, silent operation even during intense movement. We also offer a variety of colors to match the zipper to your design\'s aesthetic qualities, making them perfect for both functional performance and visual appeal in sportswear applications.',
  },
  {
    question: 'What safety features do zippers for children\'s clothing have?',
    answer: 'Zippers for children\'s clothing meet the highest standards of safety and comfort, tailored specifically for small users. They\'re perfect for jackets, sweatshirts, sleeping bags, and baby clothes where the zipper comes into contact with delicate skin and dynamic movement. Specialized children\'s zippers guarantee quiet, smooth, and reliable operation, which builds trust among parents and provides comfort for the youngest users. The soft materials and safe construction prevent pinching or irritation, making them ideal for everyday use in children\'s garments.',
  },
  {
    question: 'How are zippers used in the furniture industry?',
    answer: 'In the furniture industry, zippers are primarily used in upholstered furniture production – covers, seats, backrests, headrests, and modules requiring easy assembly and disassembly. Their main task is ensuring a durable but discreet connection of fabric elements without interfering with design aesthetics. We offer zippers that, thanks to their flat design, uniform colors, and precise guidance, integrate perfectly with the fabric surface. These specialized furniture zippers contribute to modern interiors by providing functional solutions that remain virtually invisible while maintaining structural integrity.',
  },
  {
    question: 'What support do you provide for selecting specialized zippers?',
    answer: 'We provide not only ready-made solutions but real support in adapting them to your design specifications. Our specialized zippers are grouped according to application, designed with specific technological challenges in mind – from flame-retardant clothing and sportswear, through children\'s and furniture industries, to unique fashion designs. We\'re familiar with various market requirements and know how to select the right raw material or tape type for specific applications. For almost two decades, we\'ve been valued by customers for flexibility, punctuality, and full commitment. We work with renowned manufacturers like YKK and offer comprehensive accessories including personalized sliders, tags, and special components for non-standard projects.',
  },
];

const FAQ_PL = [
  {
    question: 'Jakie zamki są odpowiednie do odzieży sportowej i outdoor?',
    answer: 'Do odzieży sportowej i outdoor najlepsze są lekkie zamki spiralne (nylonowe) odporne na wilgoć, pył i dynamiczne naprężenia. Sprawdzają się w kurtkach technicznych, softshellach, plecakach i akcesoriach rowerowych. Zapewniają płynne, bezszelestne działanie nawet przy intensywnym ruchu i są dostępne w wielu wariantach kolorystycznych.',
  },
  {
    question: 'Czym różnią się zamki do odzieży dziecięcej i dlaczego są bezpieczniejsze?',
    answer: 'Zamki do odzieży dziecięcej są projektowane z myślą o bezpieczeństwie i komforcie. Posiadają miękką, bezpieczną konstrukcję, która nie podrażnia delikatnej skóry, działają cicho i płynnie, a ich budowa jest dostosowana do dynamicznego ruchu dzieci. Spełniają najwyższe standardy bezpieczeństwa wymagane dla produktów dziecięcych.',
  },
  {
    question: 'Jak zamki błyskawiczne są wykorzystywane w branży meblarskiej?',
    answer: 'W meblarstwie zamki stosowane są w pokrowcach, siedziskach, oparciach, zagłówkach i modułach tapicerowanych. Ich płaska budowa, jednolita kolorystyka i precyzyjne prowadzenie pozwalają na dyskretne łączenie elementów materiałowych bez ingerencji w estetykę projektu, a jednocześnie umożliwiają łatwy montaż i demontaż.',
  },
  {
    question: 'Dlaczego zamki YKK są preferowane w branży modowej?',
    answer: 'Zamki YKK są uznawane za światowy wzór jakości i niezawodności. W branży modowej są cenione za wyjątkową precyzję wykonania, eleganckie wykończenie i trwałość. Sprawdzają się zarówno w kolekcjach haute couture, jak i w modzie codziennej oraz streetwearowej.',
  },
  {
    question: 'Jakie akcesoria i komponenty można spersonalizować do zamków?',
    answer: 'Oferujemy suwaki i przywieszki, które można spersonalizować poprzez grawer laserowy, nadruk logotypu lub przygotowanie formy. W naszej ofercie znajdują się również taśmy suwakowe i komponenty specjalne tworzone na potrzeby niestandardowych realizacji – dla tych, którzy cenią nie tylko jakość, ale i możliwość pełnego dopasowania do procesu produkcyjnego.',
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'en' ? 'Use of Zippers | TAF' : 'Zastosowanie zamków | TAF',
    description: locale === 'en'
      ? 'Zippers for fire-resistant clothing, military, cycling, fashion, furniture and more. Professional YKK zipper supplier TAF.'
      : 'Zamki do odzieży ognioodpornej, wojska, kolarstwa, mody, mebli i więcej. Profesjonalny dostawca zamków YKK TAF.',
    alternates: {
      canonical: locale === 'en'
        ? 'https://trimsandfasteners.com/use-of-zippers/'
        : 'https://trimsandfasteners.com/pl/zastosowanie-zamkow/',
      languages: {
        en: 'https://trimsandfasteners.com/use-of-zippers/',
        pl: 'https://trimsandfasteners.com/pl/zastosowanie-zamkow/',
      },
    },
  };
}

export default async function UseOfZippersPage({ params }: Props) {
  const { locale } = await params;
  const isEn = locale === 'en';

  return (
    <div>
      {/* Dark hero */}
      <div className="subpage-hero relative bg-[#111111] text-white min-h-[90vh] flex items-center overflow-hidden">
        <Image
          src="https://trimsandfasteners.com/wp-content/uploads/2025/04/NZIP-HEADER-9.png"
          alt=""
          fill
          className="object-cover opacity-40"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="hero-animate text-xs text-white/40 font-[Jost] mb-4 flex items-center justify-center gap-2">
            <Link href={isEn ? '/' : '/pl/'} className="hover:text-white transition-colors">
              {isEn ? 'Home' : 'Start'}
            </Link>
            <span>›</span>
            <span className="text-white/70">{isEn ? 'Use of Zippers' : 'Zastosowanie zamków'}</span>
          </nav>
          <h1 className="hero-animate font-[Jost] text-4xl sm:text-6xl font-light mb-3 max-w-3xl mx-auto text-white">
            {isEn ? 'Use of Zippers' : 'Zastosowanie zamków'}
          </h1>
          <p className="hero-animate font-[Jost] text-white/60 mb-8 max-w-xl mx-auto text-lg leading-relaxed">
            {isEn ? 'Precision for every industry' : 'Precyzja dla każdej branży'}
          </p>
          <SmoothAnchor
            href="#categories"
            className="hero-animate inline-block bg-white text-black font-[Jost] font-normal text-sm px-8 py-3 hover:bg-gray-100 transition-colors"
          >
            {isEn ? 'Explore our products' : 'Odkryj produkty'}
          </SmoothAnchor>
        </div>
        <SmoothAnchor href="#categories" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5">
          <div className="w-5 h-8 rounded-full border-2 border-white/50 flex justify-center pt-1.5">
            <div className="w-0.5 h-2 bg-white/70 rounded-full animate-scroll-dot" />
          </div>
        </SmoothAnchor>
        <HeroAnimator />
      </div>
      {/* ── Section 1: intro (one unified white section) ── */}
      <section id="categories" className="py-16 bg-white" style={{ scrollMarginTop: '80px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="font-[Jost] text-gray-500 text-base leading-relaxed mb-10">
              {isEn
                ? 'Even at the design stage, it is clear that zippers determine the functionality of the entire product. At our store, we believe that a properly selected fastener is not just a finishing touch – it is a component that contributes to quality, safety and ease of use. That is why we focus on what is most important: precisely matching fasteners to the specific needs of the industry, material and working environment. Each solution we offer is designed with a specific task in mind, ensuring that it works reliably where others may fail. Specialised zippers are the answer to technical challenges and the expectations of professionals.'
                : 'Już na etapie projektu wiadomo, że zamki błyskawiczne decydują o funkcjonalności całego produktu. W naszym sklepie wierzymy, że odpowiednio dobrany zamek nie jest wyłącznie elementem wykończeniowym – jest komponentem współtworzącym jakość, bezpieczeństwo i wygodę użytkowania. Właśnie dlatego skupiamy się na tym, co najważniejsze: precyzyjnym dopasowaniu zamków do konkretnych potrzeb branży, materiału i środowiska pracy. Każde rozwiązanie, które oferujemy, powstaje z myślą o konkretnym zadaniu, jakie ma spełniać – dzięki czemu działa niezawodnie tam, gdzie inne mogą nie dać rady. Specjalistyczne zamki błyskawiczne stanowią odpowiedź na wyzwania techniczne i oczekiwania profesjonalistów.'}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {CATEGORIES.map((cat, i) => (
              <FadeIn key={cat.hrefEn} delay={i * 0.08} className="relative overflow-hidden aspect-[4/3]">
                <Link
                  href={isEn ? cat.hrefEn : cat.hrefPl}
                  className="absolute inset-0 group block"
                >
                  <Image
                    src={cat.img}
                    alt={isEn ? cat.labelEn : cat.labelPl}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h2 className="font-[Jost] text-white text-sm font-normal leading-tight">
                      {isEn ? cat.labelEn : cat.labelPl}
                    </h2>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Sports section */}
      <section className="py-16 bg-[#f5f3ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <h2 className="font-[Jost] text-2xl sm:text-3xl font-light text-[#111] mb-5">
                {isEn ? 'Sports locks – designed to keep up with movement' : 'Zamki sportowe – zaprojektowane, by nadążać za ruchem'}
              </h2>
              <p className="font-[Jost] text-gray-500 text-base leading-relaxed mb-6">
                {isEn
                  ? 'In sportswear and equipment, zippers are responsible for both comfort and reliability in extreme conditions. They are used in technical jackets, softshells, outdoor clothing, backpacks, covers, and cycling and running accessories. Thanks to their light weight, resistance to moisture, dust and dynamic stress, they ensure smooth, silent operation even during intense movement. We also offer a variety of colours to match the zipper to the design in terms of aesthetic qualities.'
                  : 'W odzieży i wyposażeniu sportowym zamki błyskawiczne odpowiadają zarówno za komfort użytkowania, jak i niezawodność w ekstremalnych warunkach. Sprawdzają się one w kurtkach technicznych, softshellach, odzieży outdoorowej, plecakach, pokrowcach czy akcesoriach rowerowych i biegowych. Dzięki swojej lekkości, odporności na wilgoć, pył oraz dynamiczne naprężenia zapewniają płynne, bezszelestne działanie nawet przy intensywnym ruchu. Oferujemy też różne warianty kolorystyczne, które pozwalają dopasować zamek do projektu pod względem walorów estetycznych.'}
              </p>
              <Link
                href={isEn ? '/use-of-zippers/cycling-sportswear/' : '/pl/use-of-zippers/cycling-sportswear/'}
                className="inline-block bg-[#111] text-white font-[Jost] text-sm px-7 py-3 hover:bg-gray-800 transition-colors"
              >
                {isEn ? 'See sports zippers' : 'Zobacz zamki sportowe'}
              </Link>
            </FadeIn>
            <FadeIn direction="left" delay={0.1} className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://trimsandfasteners.com/wp-content/uploads/2025/06/nylonzippers6-1024x1024.jpg"
                alt={isEn ? 'Zippers for Cycling & Sportswear' : 'Zamki dla odzieży sportowej'}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Baby section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right" delay={0.1} className="order-2 lg:order-1 relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://trimsandfasteners.com/wp-content/uploads/2025/06/zamekswiecacywciemnosci-1-e1751275851765-782x1024.jpg"
                alt={isEn ? "Zippers for Children's Clothing" : 'Zamki do odzieży dziecięcej'}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </FadeIn>
            <FadeIn direction="left" className="order-1 lg:order-2">
              <h2 className="font-[Jost] text-2xl sm:text-3xl font-light text-[#111] mb-5">
                {isEn ? "Locks for children's clothing, tailored to small users" : 'Dopasowane do małych użytkowników zamki do odzieży dziecięcej'}
              </h2>
              <p className="font-[Jost] text-gray-500 text-base leading-relaxed mb-6">
                {isEn
                  ? "In children's clothing, the zippers from our range meet the highest standards of safety and comfort. They are perfect for jackets, sweatshirts, sleeping bags and baby clothes, wherever the zip comes into contact with delicate skin and dynamic movement. Specialised zips for children's clothing guarantee quiet, smooth and reliable operation, which builds trust among parents and comfort for the youngest."
                  : 'W ubraniach dla najmłodszych zamki błyskawiczne z naszego asortymentu spełniają najwyższe standardy bezpieczeństwa i komfortu. Sprawdzą się w kurtkach, bluzach, śpiworkach czy ubrankach dla niemowląt, wszędzie tam, gdzie zamek ma kontakt z delikatną skórą i dynamicznym ruchem. Specjalistyczne zamki błyskawiczne do odzieży dziecięcej to gwarancja cichego, lekkiego i niezawodnego działania, które buduje zaufanie rodziców i komfort najmłodszych.'}
              </p>
              <Link
                href={isEn ? '/use-of-zippers/baby/' : '/pl/use-of-zippers/baby/'}
                className="inline-block bg-[#111] text-white font-[Jost] text-sm px-7 py-3 hover:bg-gray-800 transition-colors"
              >
                {isEn ? "See children's zippers" : 'Zobacz zamki dziecięce'}
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Fashion section */}
      <section className="py-16 bg-[#f5f3ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <h2 className="font-[Jost] text-2xl sm:text-3xl font-light text-[#111] mb-5">
                {isEn ? 'Locks for the fashion industry – a detail that builds a collection' : 'Zamki dla branży modowej – detal budujący kolekcję'}
              </h2>
              <p className="font-[Jost] text-gray-500 text-base leading-relaxed mb-6">
                {isEn
                  ? "In the world of fashion, details can determine the character of an entire collection, which is why the specialised zippers offered in our store are designed for designers who do not accept compromises. We work with renowned manufacturers such as YKK, supplying zippers that are valued in the fashion industry for their precision, elegant finish and reliability. These elements are perfect for haute couture collections as well as everyday and streetwear fashion."
                  : 'W świecie mody detal potrafi przesądzić o charakterze całej kolekcji, dlatego specjalistyczne zamki błyskawiczne oferowane w naszym sklepie stanowią propozycję stworzoną z myślą o projektantach, którzy nie akceptują kompromisów. Współpracujemy z renomowanymi producentami, takimi jak YKK, dostarczając zamki cenione w branży fashion za precyzję wykonania, eleganckie wykończenie i niezawodność. Te elementy świetnie sprawdzają się zarówno w kolekcjach haute couture, jak i w modzie codziennej czy streetwearowej.'}
              </p>
              <Link
                href={isEn ? '/use-of-zippers/fashion/' : '/pl/use-of-zippers/fashion/'}
                className="inline-block bg-[#111] text-white font-[Jost] text-sm px-7 py-3 hover:bg-gray-800 transition-colors"
              >
                {isEn ? 'See fashion zippers' : 'Zobacz zamki dla mody'}
              </Link>
            </FadeIn>
            <FadeIn direction="left" delay={0.1} className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://trimsandfasteners.com/wp-content/uploads/2025/06/metaloweakcesoriadlamody-scaled-e1751275748542-870x1024.png"
                alt={isEn ? 'Zippers for Fashion' : 'Zamki dla branży modowej'}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Furniture section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right" delay={0.1} className="order-2 lg:order-1 relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://trimsandfasteners.com/wp-content/uploads/2025/06/i7-1024x1024.png"
                alt={isEn ? 'Zippers for Furniture' : 'Zamki do mebli'}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </FadeIn>
            <FadeIn direction="left" className="order-1 lg:order-2">
              <h2 className="font-[Jost] text-2xl sm:text-3xl font-light text-[#111] mb-5">
                {isEn ? 'Locks for the furniture industry that contribute to modern interiors' : 'Zamki dla branży meblarskiej, które współtworzą nowoczesne wnętrza'}
              </h2>
              <p className="font-[Jost] text-gray-500 text-base leading-relaxed mb-6">
                {isEn
                  ? 'In the furniture industry, zippers are primarily used in the production of upholstered furniture – covers, seats, backrests, headrests and modules that require easy assembly and disassembly. Their main task is to ensure a durable but discreet connection of fabric elements without interfering with the aesthetics of the design. Our store offers zippers that, thanks to their flat design, uniform colours and precise guidance, integrate perfectly with the fabric surface.'
                  : 'W branży meblarskiej zamki błyskawiczne wykorzystywane są przede wszystkim w produkcji mebli tapicerowanych – pokrowców, siedzisk, oparć, zagłówków oraz modułów wymagających łatwego montażu i demontażu. Ich głównym zadaniem jest zapewnienie trwałego, ale dyskretnego łączenia elementów materiałowych, bez ingerencji w estetykę projektu. W naszym sklepie oferujemy zamki, które dzięki płaskiej budowie, jednolitej kolorystyce i precyzyjnemu prowadzeniu doskonale integrują się z powierzchnią tkaniny.'}
              </p>
              <Link
                href={isEn ? '/use-of-zippers/furniture/' : '/pl/use-of-zippers/furniture/'}
                className="inline-block bg-[#111] text-white font-[Jost] text-sm px-7 py-3 hover:bg-gray-800 transition-colors"
              >
                {isEn ? 'See furniture zippers' : 'Zobacz zamki meblowe'}
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Accessories + Specialized zippers — one dark section */}
      <section className="py-16 bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-[Jost] text-2xl sm:text-3xl font-light text-white mb-5">
              {isEn ? 'Accessories and fastening components for a successful design' : 'Akcesoria i komponenty zapinające projekt na sukces'}
            </h2>
            <p className="font-[Jost] text-white/70 text-base leading-relaxed mb-10">
              {isEn
                ? 'A comprehensive approach to design requires both solid locks and accessories that complement the whole. That is why we offer sliders and tags that can be personalised to give the product a unique character and brand identity. Our offer also includes slider tapes and special components, created for non-standard projects. These solutions are for those who value not only quality, but also the possibility of full adaptation to the production process.'
                : 'Kompleksowe podejście do projektowania wymaga zarówno solidnych zamków, jak i akcesoriów dopełniających całość. Dlatego oferujemy suwaki i przywieszki, które można spersonalizować, nadając produktowi unikalny charakter i zgodność z identyfikacją marki. W naszej ofercie znajdują się również taśmy suwakowe i komponenty specjalne, tworzone na potrzeby niestandardowych realizacji. To rozwiązania dla ceniących nie tylko jakość, ale i możliwość pełnego dopasowania do procesu produkcyjnego.'}
            </p>

            <h2 className="font-[Jost] text-2xl sm:text-3xl font-light text-white mb-5">
              {isEn ? 'Specialised zippers – start working with professionals' : 'Specjalistyczne zamki błyskawiczne – zacznij współpracę z profesjonalistami'}
            </h2>
            <p className="font-[Jost] text-white/70 text-base leading-relaxed mb-4">
              {isEn
                ? 'In business, what counts is both the idea and the quality of workmanship, as well as the certainty that every element will work exactly as it should. That is why our store offers specialised zippers grouped according to their application. They are designed with specific technological challenges in mind – from flame-retardant clothing and sportswear, through the children\'s and furniture industries, to unique fashion designs. We are familiar with the various market requirements and know how to select the right raw material or tape type for a specific application.'
                : 'W biznesie liczy się zarówno pomysł, jak i jakość wykonania oraz pewność, że każdy element zadziała dokładnie tak, jak powinien. Dlatego w naszym sklepie oferujemy specjalistyczne zamki błyskawiczne pogrupowane wg zastosowania. Powstają one z myślą o konkretnych wyzwaniach technologicznych – od odzieży trudnopalnej i ubrań sportowych, przez branżę dziecięcą i meblarską, aż po wyjątkowe projekty modowe. Znamy różne wymagania rynków i wiemy, w jaki sposób dobrać surowiec czy typ taśmy do zamka o konkretnym zastosowaniu.'}
            </p>
            <p className="font-[Jost] text-white/70 text-base leading-relaxed mb-8">
              {isEn
                ? 'We provide not only ready-made solutions, but also real support in adapting them to your design specifications. For almost two decades, we have been valued by our customers for our flexibility, punctuality and full commitment. Zippers are our speciality – start a solid partnership with us and see what we can create together.'
                : 'Dostarczamy nie tylko gotowe rozwiązania, ale też realne wsparcie w dopasowaniu ich do założeń projektowych. Od niespełna dwóch dekad jesteśmy cenieni przez klientów za elastyczność, terminowość i pełne zaangażowanie. Zamki błyskawiczne to nasza specjalność – zacznij z nami solidne partnerstwo i zobacz, co możemy stworzyć razem.'}
            </p>
            <Link
              href={isEn ? '/contact/' : '/pl/contact/'}
              className="inline-block bg-white text-black font-[Jost] text-sm px-8 py-3 hover:bg-gray-100 transition-colors"
            >
              {isEn ? 'Contact us' : 'Skontaktuj się'}
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <FaqAccordion items={isEn ? FAQ_EN : FAQ_PL} locale={locale} />

    </div>
  );
}
