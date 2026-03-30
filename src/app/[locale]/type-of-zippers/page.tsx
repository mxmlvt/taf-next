import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import FaqAccordion from '@/components/sections/FaqAccordion';
import FadeIn from '@/components/ui/FadeIn';
import HeroAnimator from '@/components/ui/HeroAnimator';
import SmoothAnchor from '@/components/ui/SmoothAnchor';

type Props = { params: Promise<{ locale: string }> };

const TYPES = [
  {
    labelEn: 'Plastic Zippers',
    labelPl: 'Zamki plastikowe',
    hrefEn: '/type-of-zippers/plastic-zippers/',
    hrefPl: '/pl/type-of-zippers/plastic-zippers/',
    img: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/plastikowyzielony-1.jpg',
  },
  {
    labelEn: 'Nylon Zippers',
    labelPl: 'Zamki nylonowe',
    hrefEn: '/type-of-zippers/nylon-zippers/',
    hrefPl: '/pl/type-of-zippers/nylon-zippers/',
    img: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/nylonzippers6.jpg',
  },
  {
    labelEn: 'Metal Zippers',
    labelPl: 'Zamki metalowe',
    hrefEn: '/type-of-zippers/metal-zippers/',
    hrefPl: '/pl/type-of-zippers/metal-zippers/',
    img: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/metalslider34-scaled.jpg',
  },
];

const FAQ_EN = [
  {
    question: 'What are the main differences between plastic, nylon, and metal zippers?',
    answer: 'Plastic zippers feature injection-molded teeth arranged in rigid rows, ideal for flat surfaces but less flexible on curves. Nylon (spiral) zippers have a spirally twisted polyamide chain that adapts well to curved surfaces and movement, making them the most versatile option. Metal zippers offer maximum durability with brass teeth in Y-shaped profiles, providing exceptional strength and a distinctive aesthetic. Each type serves different functional and design needs.',
  },
  {
    question: 'Which type of zipper is best for curved surfaces and flexible materials?',
    answer: 'Spiral (nylon) zippers are the best choice for curved surfaces and flexible materials. Their spirally twisted polyamide chain is sewn or woven directly into the carrier tape, allowing them to fit well on curves without causing wrinkles or puckering. They offer quiet operation, low weight, and high comfort of use, making them ideal wherever flexibility and adaptability to movement are important. They\'re available in standard, reversible, invisible, and two-way versions.',
  },
  {
    question: 'What makes metal zippers more durable than other types?',
    answer: 'Metal zippers are exceptionally durable due to their metal teeth, usually made of brass with a Y-shaped profile or mounted individually as European, Swiss, or polished teeth. This construction ensures exceptional precision of fit and high resistance to mechanical stress and long-term use. While less flexible than plastic or nylon options, metal zippers make up for this with their strength, locking power, and resistance to intensive use. They\'re perfect for leather jackets, jeans, bags, and shoes where maximum durability is required.',
  },
  {
    question: 'Why are plastic zippers popular for children\'s clothing and outdoor gear?',
    answer: 'Plastic zippers are popular for children\'s clothing because their soft plastic structure is safe and pleasant to the touch. For outdoor gear and harsh environmental conditions, they offer a unique advantage: their regularly shaped teeth don\'t trap dirt, making them easy to clean. They\'re ideal for flat surfaces and provide stable fastening. Additional features like UV resistance, glow-in-the-dark versions, and matt or glossy finishes make them both practical and aesthetic for various applications.',
  },
  {
    question: 'How do you choose the right zipper type for a specific project?',
    answer: 'Choosing the right zipper depends on your project\'s functional, aesthetic, and technological requirements. Consider: the surface type (flat vs. curved), usage intensity, environmental conditions, desired flexibility, and design aesthetic. Plastic zippers work best for flat surfaces and harsh conditions; nylon zippers excel in flexibility and curved applications; metal zippers provide maximum durability and distinctive style. Working with trusted suppliers like YKK ensures you get premium products that meet your brand\'s technical and aesthetic needs.',
  },
];

const FAQ_PL = [
  {
    question: 'Jakie są główne różnice między zamkami kostkowymi, spiralnymi i metalowymi?',
    answer: 'Zamki kostkowe mają zęby formowane wtryskowo z tworzywa sztucznego, ułożone w dwa sztywne rzędy. Zamki spiralne (nylonowe) posiadają elastyczny, spiralnie skręcony łańcuch z poliamidowych ząbków, który doskonale układa się na zakrzywionych powierzchniach. Zamki metalowe mają indywidualnie montowane zęby z mosiądzu, zapewniające wyjątkową wytrzymałość i wyrazisty design.',
  },
  {
    question: 'Który rodzaj zamka najlepiej sprawdza się na zakrzywionych powierzchniach?',
    answer: 'Zamki spiralne (nylonowe) najlepiej sprawdzają się na zakrzywionych powierzchniach i elastycznych materiałach. Ich spiralna budowa pozwala naturalnie dopasować się do łuków i krzywizn bez powodowania marszczeń, czego nie zapewniają sztywniejsze modele kostkowe ani metalowe.',
  },
  {
    question: 'Co sprawia, że zamki metalowe są bardziej wytrzymałe od innych typów?',
    answer: 'Zamki metalowe posiadają indywidualnie montowane zęby z mosiądzu lub innych metali o profilu typu Y lub europejskim. Taka konstrukcja zapewnia wyjątkową precyzję spasowania, dużą odporność na obciążenia mechaniczne i długotrwałą trwałość nawet przy intensywnym użytkowaniu.',
  },
  {
    question: 'Dlaczego zamki kostkowe są popularne w odzieży dziecięcej i outdoorze?',
    answer: 'Zamki kostkowe mają bezpieczną, miękką strukturę plastiku, która nie podrażnia skóry — idealne dla odzieży dziecięcej. Regularnie ukształtowane zęby łatwo się czyszczą i nie zatrzymują brudu, co jest dużą zaletą w trudnych warunkach środowiskowych. Dostępne są również wersje odporne na UV i świecące w ciemności.',
  },
  {
    question: 'Jak wybrać odpowiedni rodzaj zamka do konkretnego projektu?',
    answer: 'Należy wziąć pod uwagę elastyczność materiału, środowisko użytkowania, wymagania estetyczne i przewidywane obciążenia. Do elastycznych lub zakrzywionych powierzchni wybierz zamek spiralny, do ciężkich zastosowań — metalowy, a do łatwego czyszczenia i odzieży dziecięcej — kostkowy. Zespół TAF chętnie pomoże dobrać optymalne rozwiązanie.',
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'en'
      ? 'Types of Zippers: Complete Guide | Plastic, Nylon & Metal | TAF'
      : 'Rodzaje Zamków Błyskawicznych | Plastikowe Nylonowe Metalowe',
    description: locale === 'en'
      ? 'Comprehensive guide to zipper types: plastic molded, nylon coil, and metal zippers. Learn differences, applications, and how to choose the right zipper for your project.'
      : 'Kompletny przewodnik po rodzajach zamków: plastikowe kostkowe, nylonowe spiralne i metalowe. Poznaj różnice, zastosowania i wybierz odpowiedni zamek do projektu.',
    alternates: {
      canonical: locale === 'en'
        ? 'https://trimsandfasteners.com/type-of-zippers/'
        : 'https://trimsandfasteners.com/pl/rodzaje-zamkow/',
      languages: {
        en: 'https://trimsandfasteners.com/type-of-zippers/',
        pl: 'https://trimsandfasteners.com/pl/rodzaje-zamkow/',
      },
    },
  };
}

export default async function TypeOfZippersPage({ params }: Props) {
  const { locale } = await params;
  const isEn = locale === 'en';

  return (
    <div>
      {/* Dark hero */}
      <div className="subpage-hero relative bg-[#111111] text-white min-h-[90vh] flex items-center overflow-hidden">
        <Image
          src="https://trimsandfasteners.com/wp-content/uploads/2025/06/nylonzippers6.jpg"
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
            <span className="text-white/70">{isEn ? 'Type of Zippers' : 'Rodzaje zamków'}</span>
          </nav>
          <h1 className="hero-animate font-[Jost] text-4xl sm:text-6xl font-light mb-3 max-w-3xl mx-auto text-white">
            {isEn ? 'Type of Zippers' : 'Rodzaje zamków'}
          </h1>
          <p className="hero-animate font-[Jost] text-white/60 mb-8 max-w-xl mx-auto text-lg leading-relaxed">
            {isEn ? 'Quality in every detail' : 'Jakość w każdym detalu'}
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
                ? 'Every project, regardless of the industry, has different functional, aesthetic and technological requirements. That is why it is so important to consider aspects that directly affect the quality and durability of the finished product at the design stage. One of these aspects is the type of zip fastener and the selection of the most suitable one. Although these elements are often treated as details, they actually play an important functional role. At first glance, they may seem similar to many people, but they differ in their construction, mechanism of operation and purpose. It is these differences that mean that the choice of the right model should never be left to chance.'
                : 'Każdy projekt, niezależnie od branży stawia inne wymagania funkcjonalne, estetyczne i technologiczne. Dlatego tak istotne jest, by już na etapie planowania konstrukcji uwzględnić aspekty, które w bezpośredni sposób wpływają na jakość i trwałość gotowego produktu. Jednym z nich są rodzaje zamków błyskawicznych i wybór najodpowiedniejszego z nich. Choć elementy te często traktowane są jako detal, to w rzeczywistości odgrywają istotną rolę użytkową. Dla wielu osób na pierwszy rzut oka wydają się do siebie podobne, lecz różnią się budową, mechanizmem działania i przeznaczeniem. To właśnie te różnice sprawiają, że wybór odpowiedniego modelu nigdy nie powinien być przypadkowy.'}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {TYPES.map((t, i) => (
              <FadeIn key={t.hrefEn} delay={i * 0.12} className="relative overflow-hidden aspect-[4/3]">
                <Link
                  href={isEn ? t.hrefEn : t.hrefPl}
                  className="absolute inset-0 group block"
                >
                  <Image
                    src={t.img}
                    alt={isEn ? t.labelEn : t.labelPl}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h2 className="font-[Jost] text-white text-lg font-light">
                      {isEn ? t.labelEn : t.labelPl}
                    </h2>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <p className="font-[Jost] text-gray-500 text-base leading-relaxed">
              {isEn
                ? 'A properly selected fastener ensures comfort in everyday use and contributes to the durability and reliability of the product, especially in cases of intensive use. Knowledge of the characteristics of different types of fasteners facilitates informed design decisions, regardless of whether they concern clothing, accessories or technical components.'
                : 'Właściwie dobrany zamek zapewnia wygodę codziennego użytkowania oraz wpływa na trwałość i niezawodność produktu – szczególnie w przypadku intensywnej eksploatacji. Znajomość cech charakterystycznych, jakie posiadają różne rodzaje zamków, ułatwia świadome podejmowanie decyzji projektowych, bez względu na to czy dotyczą one odzieży, akcesoriów, czy elementów technicznych.'}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Plastic zippers section */}
      <section className="py-16 bg-[#f5f3ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <h2 className="font-[Jost] text-2xl sm:text-3xl font-light text-[#111] mb-5">
                {isEn ? 'Plastic zippers – discover the perfect combination of form and lightness' : 'Zamki kostkowe (plastikowe) – poznaj precyzyjne połączenie formy i lekkości'}
              </h2>
              <p className="font-[Jost] text-gray-500 text-base leading-relaxed mb-4">
                {isEn
                  ? 'The most distinctive feature of snap locks is the structure of their teeth, which are injection-moulded from plastic and arranged in two even, rigid rows resembling snap fasteners. This type of lock provides a clear, stable fastening, ideal for flat surfaces. Due to its smaller flexibility, it performs less well on curves and wavy shapes, could cause the material to puckering.'
                  : 'Najbardziej wyróżniającą cechą zamków kostkowych jest budowa zębów, formowanych wtryskowo z tworzywa sztucznego i ułożonych w dwa równe, sztywne rzędy przypominające kostki. Ten typ zamka zapewnia wyraźne, stabilne zapięcie, doskonale sprawdzające się na płaskich powierzchniach. Z uwagi na brak elastyczności, gorzej radzi sobie na łukach i falistych formach, powodując marszczenie materiału.'}
              </p>
              <p className="font-[Jost] text-gray-500 text-base leading-relaxed mb-6">
                {isEn
                  ? 'A unique advantage is its ease of cleaning – the teeth are regularly shaped and do not trap dirt, making them an ideal choice for harsh environmental conditions. The safe, soft plastic structure makes this zip popular for children\'s clothing. Additional visual options, such as a matt or glossy finish, glow-in-the-dark versions and UV resistance, make plastic zip fasteners a practical and aesthetic choice for many applications.'
                  : 'Wyjątkową zaletą jest łatwość czyszczenia – zęby mają regularny kształt i nie zatrzymują brudu, co czyni je idealnym wyborem tam, gdzie występują trudne warunki środowiskowe. Bezpieczna, miękka struktura plastiku sprawia, że zamek ten jest chętnie stosowany w odzieży dziecięcej. Dodatkowe możliwości wizualne – jak matowe lub błyszczące wykończenie, wersje świecące w ciemności czy odporne na promieniowanie UV sprawiają, że zamki kostkowe (plastikowe) są praktycznym i estetycznym wyborem do wielu zastosowań. Podobnie jak zamki żyłkowe — zamki kostkowe występują w wielu odmianach, funkcjach, rozmiarach, wariantach wykończenia.'}
              </p>
              <Link
                href={isEn ? '/type-of-zippers/plastic-zippers/' : '/pl/type-of-zippers/plastic-zippers/'}
                className="inline-block bg-[#111] text-white font-[Jost] text-sm px-7 py-3 hover:bg-gray-800 transition-colors"
              >
                {isEn ? 'See plastic zippers' : 'Zobacz zamki kostkowe'}
              </Link>
            </FadeIn>
            <FadeIn direction="left" delay={0.1} className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://trimsandfasteners.com/wp-content/uploads/2025/06/plastikowyzielony-1.jpg"
                alt={isEn ? 'Plastic Zippers' : 'Zamki plastikowe'}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Nylon zippers section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right" delay={0.1} className="order-2 lg:order-1 relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://trimsandfasteners.com/wp-content/uploads/2025/06/nylonzippers6.jpg"
                alt={isEn ? 'Nylon Zippers' : 'Zamki nylonowe'}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </FadeIn>
            <FadeIn direction="left" className="order-1 lg:order-2">
              <h2 className="font-[Jost] text-2xl sm:text-3xl font-light text-[#111] mb-5">
                {isEn ? 'Flexibility that follows every movement, i.e. spiral (nylon) zippers' : 'Elastyczność, która podąża za każdym ruchem, czyli zamki spiralne (nylonowe)'}
              </h2>
              <p className="font-[Jost] text-gray-500 text-base leading-relaxed mb-4">
                {isEn
                  ? 'The most versatile and commonly used group of zippers, also known as coil zippers. Their main distinguishing feature is a spirally twisted chain of polyamide teeth, which is sewn or woven directly into the carrier tape. It is this method of assembly that makes spiral zippers fit well even on curved surfaces and do not cause wrinkles, unlike the more rigid block versions.'
                  : 'Najbardziej uniwersalna i najczęściej stosowana grupa zamków błyskawicznych, nazywanych również żyłkowymi. Ich głównym wyróżnikiem jest spiralnie skręcony łańcuch z poliamidowych ząbków, który jest przyszywany lub wpleciony bezpośrednio w taśmę nośną. To właśnie ten sposób montażu sprawia, że zamki spiralne dobrze układają się nawet na zakrzywionych powierzchniach i nie powodują marszczeń, w przeciwieństwie do sztywniejszych wersji kostkowych.'}
              </p>
              <p className="font-[Jost] text-gray-500 text-base leading-relaxed mb-6">
                {isEn
                  ? 'Other characteristics include quiet operation, low weight and high comfort of use – both in standard and reversible versions, where the teeth remain hidden. They are also available as invisible fasteners for lightweight fabrics or as two-way versions, whose precise workmanship allows for easy opening from both sides. Although they are more sensitive to dirt than cube models, their lightness and adaptability to movement make spiral (nylon) zippers a solid choice wherever flexibility, aesthetics and comfort are important.'
                  : 'Do cech charakterystycznych należy również cicha praca, niska masa i duży komfort użytkowania – zarówno w wersjach standardowych, jak i rewersyjnych, gdzie ząbki pozostają ukryte. Występują też jako niewidoczne zamki do lekkich tkanin lub jako wersje dwukierunkowe, których precyzyjne wykonanie pozwala na łatwe otwieranie z obu stron. Choć są bardziej wrażliwe na zabrudzenia niż modele kostkowe, ich lekkość i dopasowanie do ruchu sprawiają, że zamki spiralne (nylonowe) są solidnym wyborem wszędzie tam, gdzie liczy się elastyczność, estetyka i komfort.'}
              </p>
              <Link
                href={isEn ? '/type-of-zippers/nylon-zippers/' : '/pl/type-of-zippers/nylon-zippers/'}
                className="inline-block bg-[#111] text-white font-[Jost] text-sm px-7 py-3 hover:bg-gray-800 transition-colors"
              >
                {isEn ? 'See nylon zippers' : 'Zobacz zamki spiralne'}
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Metal zippers section */}
      <section className="py-16 bg-[#f5f3ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <h2 className="font-[Jost] text-2xl sm:text-3xl font-light text-[#111] mb-5">
                {isEn ? 'Metal zippers – elegance and durability encapsulated in detail' : 'Zamki metalowe, czyli elegancja i wytrzymałość zamknięte w detalu'}
              </h2>
              <p className="font-[Jost] text-gray-500 text-base leading-relaxed mb-4">
                {isEn
                  ? 'A classic solution that remains popular. Locks of this type are valued for their durability, locking strength and distinctive design. Their most characteristic feature is their metal teeth, usually made of brass with a Y-shaped profile or mounted individually as so-called European, Swiss or polished teeth, or one-by-one teeth. Such solutions ensure exceptional precision of fit and high resistance to mechanical stress.'
                  : 'Klasyczne rozwiązanie, które wciąż jest popularne. Zamki tego typu są cenione za swoją trwałość, siłę zamknięcia i wyrazisty design. Ich najbardziej charakterystycznym elementem są metalowe zęby – najczęściej wykonane z mosiądzu o profilu typu Y lub montowane pojedynczo jako tzw. zęby europejskie, szwajcarskie lub polskie. Takie rozwiązania zapewniają wyjątkową precyzję spasowania oraz dużą odporność na obciążenia mechaniczne.'}
              </p>
              <p className="font-[Jost] text-gray-500 text-base leading-relaxed mb-6">
                {isEn
                  ? 'Metal teeth in shades of silver, gold or gunmetal go well with accessories such as rivets, snaps and buckles, providing both a functional fastening and a stylish element of the overall design. They are used in leather jackets, jeans, bags and shoes – wherever a strong closure and visual effect are important. Metal zippers are less flexible than other popular solutions on the market, but they make up for this with their strength and resistance to long-term use. They are the choice for those who expect maximum durability in every detail.'
                  : 'Metalowe ząbki w odcieniach srebra, złota czy grafitu doskonale komponują się z akcesoriami takimi jak nity, napy i klamry, stanowiąc zarówno funkcjonalne zapięcie, jak i stylowy element całego projektu. Znajdują zastosowanie w skórzanych kurtkach, jeansach, torbach i butach – wszędzie tam, gdzie liczy się mocne domknięcie oraz efekt wizualny. Zamki metalowe są mniej elastyczne od innych popularnych rozwiązań na rynku, ale z powodzeniem nadrabiają to siłą i odpornością na długotrwałe użytkowanie. To wybór dla oczekujących maksimum trwałości w detalu.'}
              </p>
              <Link
                href={isEn ? '/type-of-zippers/metal-zippers/' : '/pl/type-of-zippers/metal-zippers/'}
                className="inline-block bg-[#111] text-white font-[Jost] text-sm px-7 py-3 hover:bg-gray-800 transition-colors"
              >
                {isEn ? 'See metal zippers' : 'Zobacz zamki metalowe'}
              </Link>
            </FadeIn>
            <FadeIn direction="left" delay={0.1} className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://trimsandfasteners.com/wp-content/uploads/2025/06/metalslider34-scaled.jpg"
                alt={isEn ? 'Metal Zippers' : 'Zamki metalowe'}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-[Jost] text-2xl sm:text-3xl font-light text-white mb-5">
              {isEn
                ? 'Tailored zippers for your product – discover how we can support your brand'
                : 'Niezawodne zamki błyskawiczne dla Twojego produktu – sprawdź, jak możemy wspierać Twoją markę'}
            </h2>
            <p className="font-[Jost] text-white/70 text-base leading-relaxed mb-4">
              {isEn
                ? 'Every project has its own rules. Different working environments, different usage dynamics, different expectations for details. That is why we offer different types of zippers that meet the real needs of many market sectors. Whether you are creating a sports collection, clothing for the services industry or product lines for the interior design industry, we will provide your business with a zipper that meets your brand\'s technical, aesthetic and logistical needs.'
                : 'Każdy projekt rządzi się własnymi prawami. Inne środowisko pracy, inna dynamika użytkowania, inne oczekiwania wobec detalu. Dlatego właśnie oferujemy różne rodzaje zamków błyskawicznych, które odpowiadają na realne potrzeby wielu sektorów rynku. Niezależnie od tego, czy tworzysz kolekcję sportową, odzież dla służb, czy linie produktowe dla branży wnętrzarskiej – zapewnimy dla Twojego biznesu zamek odpowiadający potrzebom marki pod względem technicznym, estetycznym i logistycznym.'}
            </p>
            <p className="font-[Jost] text-white/70 text-base leading-relaxed mb-8">
              {isEn
                ? 'We work exclusively with trusted suppliers, primarily the Japanese brand YKK, recognised as a global benchmark for quality and reliability. If you are looking for a partner who understands the pace of the market, precision of workmanship and the importance of detail, we are ready to help. Tell us what you are working on and we will take care of the details.'
                : 'Współpracujemy wyłącznie ze sprawdzonymi dostawcami, przede wszystkim z japońską marką YKK, uznawaną za światowy wzór jakości i niezawodności. Jeśli szukasz partnera rozumiejącego tempo rynku, precyzję wykonania i wagę detalu – jesteśmy gotowi. Opowiedz, nad czym pracujesz – my zadbamy o szczegóły.'}
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
