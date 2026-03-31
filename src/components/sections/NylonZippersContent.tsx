import Image from 'next/image';
import Link from 'next/link';
import ImageCarousel from '@/components/ui/ImageCarousel';
import FaqAccordion from '@/components/sections/FaqAccordion';
import FadeIn from '@/components/ui/FadeIn';

const WP = 'https://trimsandfasteners.com/wp-content/uploads/';

interface Props {
  locale: string;
  position: 'above' | 'below';
}

const FAQ_EN = [
  {
    question: 'What are coil (nylon) zippers and why are they so versatile?',
    answer: 'Coil zippers, also known as nylon zippers, are the most common and versatile type of fastener thanks to their flexibility and strength. Their unique construction features zipper elements that are either sewn or woven directly into the tape, creating the strongest connection between tape and element in the world of zippers. This makes them incredibly durable and suitable for countless everyday applications including sportswear, cycling apparel, personal protective equipment (PPE), backpacks, footwear, and the yachting industry.',
  },
  {
    question: "What's the difference between standard and reverse coil zippers?",
    answer: "Standard coil zippers are commonly used across the apparel industry, from footwear to furniture and car seats, primarily in outdoor and sports applications. Reverse coil zippers are the same type of zipper, but the slider operates on the tape side, which keeps the zipper elements hidden from view. This creates a cleaner, more aesthetic appearance and is often preferred for applications where the zipper should be less visible or integrated seamlessly into the design.",
  },
  {
    question: 'Why are high-quality two-way nylon zippers important?',
    answer: "Two-way opening coil zippers are quite challenging for most manufacturers worldwide to design for easy and convenient use. Many zippers on the market present issues with basic user comfort, making them difficult to engage and close. We supply only the highest quality two-way zippers that ensure users don't have to struggle. This is crucial for end-consumer satisfaction, as a properly functioning two-way zipper should be effortless to use, which is why we always provide two-way zippers in our nylon series that are easy to engage and close.",
  },
  {
    question: 'What are the advantages of woven-in S-tape zippers compared to standard sewn coil zippers?',
    answer: 'Woven-in S-tape zippers represent an advanced construction where tooth elements are integrally woven into the tape\'s structure rather than just sewn on. This eliminates the potential weak point associated with thread degradation or tooth separation, radically increasing durability. In standard sewn coil zippers, the teeth are sewn onto the tape with polyester thread, which can degrade from UV exposure and may allow teeth to separate from the tape. The woven-in construction provides superior reliability and longevity, especially in demanding applications.',
  },
  {
    question: 'Are nylon zippers suitable for military and water-resistant applications?',
    answer: 'Absolutely! We supply all types of nylon zippers for military applications, featuring reduced Near-Infrared (NIR) signature, which means the zipper has a similar light reflection percentage as the base fabric. We produce these in various colors and can prepare special colors upon request. For water resistance, we offer water-resistant nylon zippers that provide splash protection and are popular in sportswear and outdoor apparel. These are available in N3, N4, N5, N7, N8, and N10 sizes, with options for glossy or matte film finishes in clear or solid-color versions.',
  },
];

const FAQ_PL = [
  {
    question: 'Czym są zamki spiralne (nylonowe) i dlaczego są tak wszechstronne?',
    answer: 'Zamki spiralne, znane również jako nylonowe, to najczęstszy i najbardziej wszechstronny typ zamków dzięki elastyczności i wytrzymałości. Ich unikalna budowa polega na elementach wszytych lub wplecionych bezpośrednio w taśmę, co tworzy najsilniejsze połączenie między taśmą a elementem zamka. Są stosowane w odzieży sportowej, kolarskiej, środkach ochrony osobistej, plecakach, obuwiu i branży jachtowej.',
  },
  {
    question: 'Jaka jest różnica między zamkiem standardowym a odwróconym?',
    answer: 'Zamki standardowe są powszechnie stosowane w przemyśle odzieżowym – od obuwia po meble i siedzenia samochodowe. Zamki odwrócone to ten sam typ, ale suwak działa po stronie taśmy, dzięki czemu elementy zamka pozostają ukryte. Tworzy to czystszy, bardziej estetyczny wygląd i jest preferowane tam, gdzie zamek powinien być mniej widoczny.',
  },
  {
    question: 'Dlaczego wysokiej jakości zamki dwukierunkowe są ważne?',
    answer: 'Zamki nylonowe dwukierunkowe są trudne do zaprojektowania dla wygodnego użytkowania. Wiele zamków na rynku sprawia problemy z podstawowym komfortem. Dostarczamy wyłącznie najwyższej jakości zamki dwukierunkowe, w których użytkownik nie musi walczyć z zamkiem. Zawsze zapewniamy zamki dwukierunkowe w naszej serii nylonowej, które są łatwe do zapinania i zamykania.',
  },
  {
    question: 'Jakie są zalety zamków S-Tape w porównaniu ze standardowymi szytymi?',
    answer: 'Zamki S-Tape z tkaną taśmą reprezentują zaawansowaną konstrukcję, w której elementy ząbkowe są integralnie wplecione w strukturę taśmy. Eliminuje to słaby punkt związany z degradacją nici lub oddzielaniem się ząbków, radykalnie zwiększając trwałość. W standardowych zamkach spiralnych ząbki są przyszywane nicią poliestrową, która może degradować pod wpływem UV.',
  },
  {
    question: 'Czy zamki nylonowe nadają się do zastosowań wojskowych i wodoodpornych?',
    answer: 'Zdecydowanie tak! Dostarczamy zamki nylonowe do zastosowań wojskowych ze zmniejszoną sygnaturą bliskiej podczerwieni (NIR). Produkujemy je w różnych kolorach i możemy przygotować kolory specjalne na życzenie. Oferujemy również wodoodporne zamki nylonowe popularne w odzieży sportowej i outdoorowej, dostępne w rozmiarach N3, N4, N5, N7, N8 i N10.',
  },
];

export default function NylonZippersContent({ locale, position }: Props) {
  const isEn = locale === 'en';

  if (position === 'above') {
    return (
      <>
        {/* ── Characteristics ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              <FadeIn direction="right">
                <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111]">
                  {isEn ? 'Characteristics of Coil Zippers' : 'Charakterystyka zamków spiralnych'}
                </h2>
                <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed">
                  <p>
                    {isEn
                      ? 'Coil zippers, also known as nylon zippers, are the most common and versatile type of fastener. They work across so many everyday applications thanks to their flexibility and strength. These are the most durable zippers due to their construction, where the zipper elements are either sewn or woven directly into the tape. This results in the strongest connection between the tape and the element in the world of zippers. Below, we\'ll outline the basic types of coil zippers.'
                      : 'Zamki spiralne, znane również jako nylonowe, to najczęściej spotykany i najbardziej wszechstronny typ zamków. Działają w tak wielu codziennych zastosowaniach dzięki elastyczności i wytrzymałości. Są to najtrwalsze zamki ze względu na budowę, w której elementy zamka są szyte lub wplecione bezpośrednio w taśmę.'}
                  </p>
                  <p>
                    {isEn
                      ? 'They are most frequently used in sportswear, cycling apparel, personal protective equipment (PPE), and backpacks. They also serve as essential functional zippers in footwear.'
                      : 'Najczęściej stosowane w odzieży sportowej, kolarskiej, środkach ochrony osobistej (PPE) i plecakach. Pełnią również ważną funkcję w obuwiu.'}
                  </p>
                  <p>
                    {isEn
                      ? 'Additionally, coil zippers are widely utilized in the yachting industry.'
                      : 'Zamki spiralne są również szeroko stosowane w branży jachtowej.'}
                  </p>
                </div>
              </FadeIn>
              <FadeIn direction="left" delay={0.1} className="relative overflow-hidden group">
                <Image
                  src={`${WP}2025/06/nylonzippers16-scaled.jpg`}
                  alt={isEn ? 'Nylon coil zippers' : 'Zamki spiralne nylonowe'}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── Standard + Reverse comparison ── */}
        <section className="py-16 bg-[#f5f3ef]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              {/* Standard */}
              <div className="flex flex-col">
                <h3 className="font-[Jost] text-xl font-light mb-3 text-[#111]">
                  {isEn ? 'Standard' : 'Standardowy'}
                </h3>
                <p className="font-[Jost] text-gray-500 text-sm leading-relaxed mb-5">
                  {isEn
                    ? 'Commonly used across the apparel industry, from footwear to furniture and car seats, these zippers are primarily utilized in outdoor and sports applications.'
                    : 'Powszechnie stosowane w przemyśle odzieżowym, od obuwia po meble i siedzenia samochodowe. Głównie używane w odzieży outdoor i sportowej.'}
                </p>
                <div className="relative overflow-hidden group aspect-[4/3]">
                  <Image
                    src={`${WP}2025/06/standardowa-spirala-nylonowa-min-1024x681.png`}
                    alt={isEn ? 'Standard nylon coil zipper' : 'Standardowy zamek spiralny'}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
              </div>
              {/* Reverse */}
              <div className="flex flex-col">
                <h3 className="font-[Jost] text-xl font-light mb-3 text-[#111]">
                  {isEn ? 'Reverse' : 'Odwrócony'}
                </h3>
                <p className="font-[Jost] text-gray-500 text-sm leading-relaxed mb-5">
                  {isEn
                    ? 'This is the same type of zipper (coil zipper), but the slider operates on the tape side, which keeps the zipper elements hidden.'
                    : 'Ten sam typ zamka, ale suwak działa po stronie taśmy, dzięki czemu elementy zamka pozostają ukryte.'}
                </p>
                <div className="relative overflow-hidden group aspect-[4/3]">
                  <Image
                    src={`${WP}2025/10/2800134-1024x1024.jpg`}
                    alt={isEn ? 'Reverse nylon zipper' : 'Zamek spiralny odwrócony'}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>

            {/* Disadvantages */}
            <div className="border-t border-gray-300 pt-8 space-y-3 font-[Jost] text-gray-500 text-sm leading-relaxed">
              <p className="font-medium text-[#111]">
                {isEn ? 'Disadvantages:' : 'Wady:'}
              </p>
              <p>
                {isEn
                  ? 'Coil (nylon) zippers are vulnerable to contaminants that can get between the elements. This can lead to thread damage due to friction from abrasive particles like sand. Contaminants such as hair, leaves, or mud can also cause the zipper to jam, ultimately resulting in its failure.'
                  : 'Zamki spiralne (nylonowe) są podatne na zanieczyszczenia, które mogą dostać się między elementy. Może to prowadzić do uszkodzenia nici na skutek tarcia od ściernych cząstek jak piasek. Zanieczyszczenia takie jak włosy, liście czy błoto mogą również spowodować zacięcie zamka.'}
              </p>
              <p>
                {isEn
                  ? 'The best options for dirt protection are water-resistant zippers and plastic teeth, which are very easy to clean of any remaining contaminants.'
                  : 'Najlepsze opcje ochrony przed brudem to zamki wodoodporne i plastikowe zęby, które są bardzo łatwe do czyszczenia z pozostałości zanieczyszczeń.'}
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }

  // position === 'below'
  return (
    <>
      {/* ── Two-Way Separating ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <FadeIn direction="right">
              <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111]">
                {isEn ? 'Two Way Separating Zippers' : 'Zamki dwusuwakowe rozdzielne'}
              </h2>
              <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed">
                <p>
                  {isEn
                    ? 'Two-way opening coil (nylon) zippers are quite challenging for most manufacturers worldwide to design for easy and convenient use. We supply only the highest quality two-way zippers, ensuring the user doesn\'t have to struggle to close them.'
                    : 'Zamki nylonowe z dwukierunkowym otwarciem są dość trudne do zaprojektowania. Dostarczamy tylko najwyższej jakości zamki dwukierunkowe, w których użytkownik nie musi walczyć z zamkiem, aby go zamknąć.'}
                </p>
                <p>
                  {isEn
                    ? 'This is crucial, as many zippers on the market present issues with this basic element of user comfort for the end-consumer. We always provide two-way zippers in our nylon series that are easy to engage and close.'
                    : 'Jest to kluczowe, gdyż wiele zamków dostępnych na rynku sprawia problemy z tym podstawowym elementem komfortu użytkownika. Zawsze zapewniamy zamki dwukierunkowe w naszej serii nylonowej, które są łatwe do zapinania i zamykania.'}
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.1} className="relative overflow-hidden group">
              <Image
                src={`${WP}2025/06/nylonzippers4-1024x1024.jpg`}
                alt={isEn ? 'Two-way separating nylon zipper' : 'Zamek nylonowy dwusuwakowy rozdzielny'}
                width={600}
                height={600}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Military / PPE ── */}
      <section className="py-32 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <FadeIn direction="right" className="relative overflow-hidden group">
              <Image
                src={`${WP}2025/06/nylonzippers5-1024x576.png`}
                alt={isEn ? 'Military nylon zippers' : 'Zamki nylonowe militarne'}
                width={700}
                height={400}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </FadeIn>
            <FadeIn direction="left" delay={0.1}>
              <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-white">
                {isEn ? 'Nylon Zippers for Military and Personal Protective Equipment (PPE)' : 'Zamki nylonowe dla wojska i PPE'}
              </h2>
              <div className="space-y-4 font-[Jost] text-sm leading-relaxed">
                <p className="text-gray-400">
                  {isEn
                    ? 'We supply all types of zippers used in military applications. Our daily routine involves quickly handling samples, preparing custom colors, and developing products based on client suggestions.'
                    : 'Dostarczamy wszystkie typy zamków błyskawicznych używanych w zastosowaniach wojskowych. Na co dzień szybko obsługujemy próbki, przygotowujemy niestandardowe kolory i rozwijamy produkty według sugestii klientów.'}
                </p>
                <p className="text-gray-400">
                  {isEn
                    ? 'Zippers for military use must feature a reduced Near-Infrared (NIR) signature. This means the zipper or other finishes have a similar light reflection percentage as the base fabric. We produce zippers with a reduced NIR signature in various colors and can also prepare special colors upon client request.'
                    : 'Zamki do zastosowań wojskowych muszą mieć zmniejszoną sygnaturę bliskiej podczerwieni (NIR). Oznacza to, że zamek lub inne wykończenia mają podobny procent odbicia światła jak bazowa tkanina. Produkujemy zamki ze zmniejszoną sygnaturą NIR w różnych kolorach i możemy przygotować specjalne kolory na życzenie klienta.'}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Sportswear / Cycling ── */}
      <section className="py-24 bg-[#f5f3ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-stretch">
            <div className="flex flex-col">
              <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111]">
                {isEn ? 'Nylon Zippers for Sportswear & Cycling Apparel' : 'Zamki nylonowe do odzieży sportowej i kolarskiej'}
              </h2>
              <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed mb-6">
                <p>
                  {isEn
                    ? 'We have extensive experience supplying various types of zippers for cycling apparel manufacturers. We know this industry inside and out, and we can offer both innovative solutions and the best deals on standard zippers!'
                    : 'Mamy długie doświadczenie w dostarczaniu różnego rodzaju zamków błyskawicznych dla producentów odzieży kolarskiej. Doskonale znamy tę branżę i możemy zaoferować zarówno innowacyjne rozwiązania, jak i najlepsze oferty na standardowe zamki.'}
                </p>
              </div>
              <div className="relative overflow-hidden group h-[320px]">
                <Image
                  src={`${WP}2025/06/sport-garment-zipper--1024x576.jpeg`}
                  alt={isEn ? 'Sportswear zipper application' : 'Zamek w odzieży sportowej'}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <ImageCarousel
              images={[
                { src: `${WP}2025/06/nylon2.jpg`, alt: isEn ? 'Nylon zipper sportswear' : 'Zamek nylonowy odzież sportowa', width: 800, height: 600 },
                { src: `${WP}2025/06/nylonsportswear.jpg`, alt: isEn ? 'Nylon zipper cycling' : 'Zamek nylonowy kolarstwo', width: 800, height: 600 },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ── Concealed Coil ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div className="relative overflow-hidden group">
              <Image
                src={`${WP}2025/06/nylonzippers10-1024x1024.jpg`}
                alt={isEn ? 'Concealed coil zipper' : 'Zamek spiralny kryty'}
                width={600}
                height={600}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111]">
                {isEn ? 'Concealed Coil Zippers' : 'Zamki spiralne kryte'}
              </h2>
              <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed">
                <p>
                  {isEn
                    ? 'Concealed nylon zippers are a broad category of nylon zippers used in many different fields—from apparel and outdoor clothing to the automotive and furniture industries. They are categorized based on their intended application and strength.'
                    : 'Zamki nylonowe kryte to szeroka kategoria zamków nylonowych stosowana w wielu różnych dziedzinach — od konfekcji i odzieży outdoorowej po przemysł motoryzacyjny i meblarski. Kategoryzowane są według przeznaczenia i wytrzymałości.'}
                </p>
                <p>
                  {isEn
                    ? 'The main differences between the various types are the kind of tape and the size of the teeth. Lightweight CHC-26 concealed zippers, which use a lace-style tape, create a mesh-like zipper that is ideal for very lightweight garments. However, we recommend using lace tape exclusively for applications requiring minimal load. In all other cases, a woven tape is a better solution, as it provides nearly the same flexibility, and its strength is significantly greater compared to lace tape.'
                    : 'Główne różnice to rodzaj taśmy i rozmiar ząbków. Lekkie zamki kryte CHC-26 z taśmą koronkową tworzą zamek siatkowy idealny do bardzo lekkich ubrań. Zalecamy taśmę koronkową wyłącznie do aplikacji wymagających minimalnego obciążenia. W pozostałych przypadkach taśma tkana jest lepszym rozwiązaniem.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Knitted Tape ── */}
      <section className="py-16 bg-[#f5f3ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111]">
                {isEn ? 'Concealed Coil Zippers with Knitted Tape' : 'Zamki spiralne kryte z taśmą dzianą'}
              </h2>
              <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed">
                <p>
                  {isEn
                    ? 'Concealed zippers on knitted tape are characterized by exceptional flexibility, which allows them to "work" together with the fabric. Thanks to its knitted structure, this tape is more stretchable and softer to the touch, which makes it ideal for sewing into materials with an elastane blend, as well as in thin and flowing knits.'
                    : 'Zamki kryte na taśmie dzianinowej charakteryzują się wyjątkową elastycznością, pozwalając im "pracować" razem z tkaniną. Dzięki dzianinowej strukturze taśma jest bardziej rozciągliwa i miększa w dotyku, idealna do materiałów z elastanem oraz cienkich i płynnych dzianin.'}
                </p>
                <p>
                  {isEn
                    ? 'Lace tape is suitable for lightweight fabrics where no lateral forces act on the zipper, mainly in the case of lightweight dresses. This means that its delicate construction works best in looser styles or in places where the zipper is not subjected to significant lateral stress. Sewing it into a fitted dress made of thin material could risk damaging it.'
                    : 'Taśma koronkowa jest odpowiednia do lekkich tkanin, gdzie na zamek nie działają siły boczne, głównie w przypadku lekkich sukienek. Jej delikatna budowa sprawdza się najlepiej w luźniejszych fasonach lub miejscach, gdzie zamek nie jest narażony na duże naprężenia boczne.'}
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden group">
              <Image
                src={`${WP}2025/06/nylonzippers11-1024x1024.jpg`}
                alt={isEn ? 'Concealed zipper with knitted tape' : 'Zamek kryty z taśmą dzianą'}
                width={600}
                height={600}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Upholstery / Technical ── */}
      <section className="py-16 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div className="relative overflow-hidden group">
              <Image
                src={`${WP}2025/07/zamek5cc.png`}
                alt={isEn ? 'Upholstery concealed zipper' : 'Zamek kryty tapicerski'}
                width={700}
                height={500}
                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-white">
                {isEn ? 'Upholstery / Technical Concealed Zippers' : 'Zamki kryte tapicerskie / techniczne'}
              </h2>
              <div className="space-y-4 font-[Jost] text-sm leading-relaxed">
                <p className="text-gray-400">
                  {isEn
                    ? 'A replacement for a plastic profile to close the upholstery of a car seat or sofa in an aesthetic way. It resembles a sewn seam and is a quick, time-saving solution. We provide all the necessary equipment, as well as process coordination and staff training at the client\'s facility.'
                    : 'Zastępstwo dla plastikowego profilu do estetycznego zamknięcia poszycia fotela lub sofy. Przypomina szew szyty i jest szybkim, oszczędzającym czas rozwiązaniem. Dostarczamy niezbędne urządzenia oraz koordynację procesu i szkolenie personelu.'}
                </p>
                <ul className="space-y-3 mt-2">
                  {(isEn ? [
                    '5 CC – A heavy-duty, most durable type of zipper used in extreme applications. It requires high closing forces and is best for straight applications as the zipper is somewhat stiff.',
                    '45 ECH – A flexible invisible zipper, excellent for furniture and curvilinear applications thanks to its flexibility and ability to conform to shapes. The woven elements ensure excellent strength and durability.',
                  ] : [
                    '5 CC – Najtrwalszy typ zamka do ekstremalnych zastosowań. Wymaga dużych sił zamykania i najlepiej sprawdza się w prostych aplikacjach ze względu na sztywność.',
                    '45 ECH – Elastyczny niewidoczny zamek, doskonały do mebli i aplikacji krzywoliniowych dzięki elastyczności i dopasowaniu do kształtów. Tkane elementy zapewniają doskonałą wytrzymałość.',
                  ]).map((item, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <span className="text-gray-600 flex-shrink-0">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Water-Resistant ── */}
      <section className="py-16 bg-[#f5f3ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-stretch">
            <div className="flex flex-col">
              <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111]">
                {isEn ? 'Water-Resistant Nylon Zippers' : 'Wodoodporne zamki nylonowe'}
              </h2>
              <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed mb-6">
                <p>
                  {isEn
                    ? 'These zippers are popular due to their attractive appearance and splash protection. They provide a basic level of water resistance and are commonly used in various types of sportswear and outdoor apparel.'
                    : 'Zamki te są popularne ze względu na atrakcyjny wygląd i ochronę przed zachlapaniem. Zapewniają podstawowy poziom wodoodporności i są powszechnie stosowane w odzieży sportowej i outdoorowej.'}
                </p>
                <p>
                  {isEn
                    ? "The zipper's appearance largely depends on the type of film used—ranging from fully glossy to matte. The film is laminated onto the zipper in clear, as well as solid-color, versions. This is crucial for military and generally dark colors, as the lamination process with clear film alters the final color to be darker. Using a solid-color film always yields a consistent result."
                    : 'Wygląd zamka zależy od rodzaju zastosowanej folii — od w pełni błyszczącej do matowej. Folia jest laminowana na zamku w wersji przezroczystej i pełnokolorowej. Jest to ważne dla kolorów wojskowych i ciemnych, gdyż laminowanie przezroczystą folią zmienia finalny kolor na ciemniejszy.'}
                </p>
                <p className="font-medium text-gray-600">
                  {isEn ? 'Types available: N3, N4, N5, N7, N8, N10' : 'Dostępne rozmiary: N3, N4, N5, N7, N8, N10'}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-auto">
                {[
                  { src: `${WP}2025/06/wodoodporny2-1024x987.jpg`, alt: 'Water resistant zipper 1' },
                  { src: `${WP}2025/06/wodoodporny3-1024x1024.jpg`, alt: 'Water resistant zipper 2' },
                ].map((img, i) => (
                  <div key={i} className="overflow-hidden group aspect-square">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="25vw"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden group min-h-[300px]">
              <Image
                src={`${WP}2025/06/wodoodpornyzamek-1-1024x576.png`}
                alt={isEn ? 'Water resistant zipper closeup' : 'Zamek wodoodporny z bliska'}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Woven S-Tape vs Standard ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[70%] mx-auto">
            <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-4 text-[#111] text-center">
              {isEn ? 'Woven-in S-Tape Zippers vs. Standard Sewn Coil Zippers' : 'Spirala tkana S-Tape vs. standardowa szyta'}
            </h2>
            <p className="font-[Jost] text-gray-500 text-sm leading-relaxed mb-8 text-center">
              {isEn
                ? "The evolution of coil zippers reflects the industry's continuous drive to enhance durability and reliability. Key differences in construction significantly impact their performance characteristics."
                : 'Ewolucja zamków spiralnych odzwierciedla ciągłe dążenie branży do poprawy trwałości i niezawodności. Kluczowe różnice w budowie znacząco wpływają na charakterystykę wydajności.'}
            </p>
            <div className="overflow-hidden group mb-8">
              <Image
                src={`${WP}2025/06/porownanie-spirali-S80-WOVENIN-I-standardowej-80S-sewon-type-1024x718.jpeg`}
                alt={isEn ? 'Woven vs standard coil zipper comparison' : 'Porównanie spirali tkanej i standardowej'}
                width={1024}
                height={718}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="70vw"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-[Jost] text-lg font-medium mb-3 text-[#111]">
                  {isEn ? 'Standard Sewn Coil Zipper' : 'Standardowa spirala szyta'}
                </h3>
                <p className="font-[Jost] text-gray-500 text-sm leading-relaxed">
                  {isEn
                    ? 'In a standard sewn coil zipper, the teeth, formed into a coil from nylon or polyester filament, are sewn onto the side tape with polyester thread. The threads can degrade from UV exposure, and the teeth might separate from the tape, creating a potential weak point.'
                    : 'W standardowym zamku spiralnym szytym, ząbki uformowane w spiralę z filamentu nylonowego lub poliestrowego, są przyszywane do taśmy bocznej nicią poliestrową. Nici mogą degradować pod wpływem UV, a ząbki mogą oddzielać się od taśmy.'}
                </p>
              </div>
              <div>
                <h3 className="font-[Jost] text-lg font-medium mb-3 text-[#111]">
                  {isEn ? 'Woven-in S-Tape Zipper' : 'Spirala tkana S-Tape'}
                </h3>
                <p className="font-[Jost] text-gray-500 text-sm leading-relaxed">
                  {isEn
                    ? "In this advanced construction, the tooth elements are integrally woven into the tape's structure, rather than just sewn on. This eliminates the potential weak point associated with thread degradation or tooth separation, radically increasing durability."
                    : 'W tej zaawansowanej konstrukcji elementy ząbkowe są integralnie wplecione w strukturę taśmy, a nie tylko przyszyte. Eliminuje to słaby punkt związany z degradacją nici lub oddzielaniem się ząbków, radykalnie zwiększając trwałość.'}
                </p>
              </div>
            </div>
            <Link
              href={locale === 'en' ? '/nylon-zipper-chain-size-chart/' : '/pl/nylon-zipper-chain-size-chart/'}
              className="inline-flex items-center gap-2 text-sm font-[Jost] text-gray-600 hover:text-black border border-gray-300 hover:border-gray-600 px-5 py-3 transition-colors"
            >
              {locale === 'en' ? 'View Nylon Zipper Chain Size Chart →' : 'Zobacz tabelę rozmiarów taśm nylonowych →'}
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#f5f3ef]">
        <FaqAccordion items={isEn ? FAQ_EN : FAQ_PL} locale={locale} />
      </section>
    </>
  );
}
