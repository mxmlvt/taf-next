import Image from 'next/image';
import FaqAccordion from './FaqAccordion';

const WP = 'https://trimsandfasteners.com/wp-content/uploads/';

interface Props { locale: string; position: 'above' | 'below'; }

const ACCESSORIES = [
  { heading: 'Sew-on tactical buckles', headingPl: 'Klamry szyte taktyczne', img: `${WP}2025/09/surfacemountbuckle.png` },
  { heading: 'Buckles for workwear', headingPl: 'Klamry do odzieży roboczej', img: `${WP}2025/09/workwearbuckles.jpg` },
  { heading: 'Snap hook', headingPl: 'Karabińczyk', img: `${WP}2025/09/snaphook.jpg` },
  { heading: 'Cord stopper / Cord lock', headingPl: 'Stoper sznurka / Zamek sznurka', img: `${WP}2025/09/cordstopper.jpg` },
  { heading: 'Quick-attach loop', headingPl: 'Pętla szybkiego mocowania', img: `${WP}2025/09/quickattachmentloop.jpg` },
  { heading: 'Strap adjuster', headingPl: 'Regulator pasa', img: `${WP}2025/09/strapadjuster.jpg` },
  { heading: 'Standard side-release buckles', headingPl: 'Standardowe klamry boczne', img: `${WP}2025/09/standard-side-release-buckles.png` },
  { heading: 'High-strength buckles', headingPl: 'Klamry wysokiej wytrzymałości', img: `${WP}2025/09/heavy-duty-buckles.jpg` },
  { heading: 'Three-step adjusters', headingPl: 'Regulatory trójstopniowe', img: `${WP}2025/09/tribar-adjuster.png` },
];

const FAQ_EN = [
  {
    question: 'What types of buckles and plastic hardware do you offer?',
    answer:
      "We offer a comprehensive range of buckles and plastic hardware components for various applications, from delicate children's products to durable tactical gear. Our selection includes side-release buckles (standard and high-strength), magnetic buckles with intuitive closure, belt buckles with dual adjusters, quick-release buckles for vests, self-locking adjustment buckles with cam mechanisms, surface mount buckles, cord stoppers and locks, strap adjusters, snap hooks, quick-attach loops, D-rings, strap holders, clips, and specialized tactical buckles. All components are available in various materials including standard POM, reinforced T-POM, flame-retardant versions meeting UL-94 V0 standards, and NIR-reduced variants for military applications.",
  },
  {
    question: 'What makes YKK LB-WG/WGD buckles ideal for military applications?',
    answer:
      "The YKK LB-WG/WGD buckle is one of the best buckles for military applications, injection-molded from a special grade of POM called T-POM (toughened POM). This material makes it extremely durable and resistant to impacts or accidental damage. The buckle is exceptionally easy to operate with gloves and with one hand, which is crucial for tactical situations. T-POM is extremely resistant to low temperatures as well as temperature changes, ensuring reliable performance in harsh environments. The hardened acetal construction makes it one of the strongest buckles on the market, if not the strongest, providing dependable performance where failure is not an option.",
  },
  {
    question: 'How do magnetic buckles work and what are their advantages?',
    answer:
      "Magnetic buckles offer convenient, intuitive operation that can be performed with one hand, even while wearing gloves. The 40mm magnetic buckle features a magnetic closure used in personal protective equipment and military applications, making fastening and unfastening quick and effortless. The HP-M 50 belt buckle includes a central, hidden release mechanism with swivel function and tactical matte finish, ideal for tactical belts. Our quick-release vest system uses neodymium magnets in each buckle to enable easy fastening, combined with a central mechanical release that disconnects all four buckles simultaneously. The magnetic feature provides intuitive operation while maintaining secure hold during use.",
  },
  {
    question: 'What materials are buckles made from and what special versions are available?',
    answer:
      "Standard buckles are made from POM plastic (acetal), a universal material often modified by manufacturers for specific requirements. For demanding applications, we offer T-POM (toughened POM), which provides exceptional impact resistance and durability, particularly for tactical and military uses. When special applications require it, we supply buckles in flame-retardant versions meeting UL-94 standard, class V0 requirements, essential for workwear and protective equipment. We also offer buckles with reduced Near-Infrared (NIR) signature for military applications where tactical concealment is critical. Each material variant is selected based on the specific performance requirements, environmental conditions, and safety standards of your application.",
  },
  {
    question: 'What specialized buckle systems do you offer for tactical vests?',
    answer:
      "We offer several specialized buckle systems designed specifically for tactical vests and plate carriers. The quick-release buckle for 40mm webbing allows rapid release by pulling a cord, with special reinforced material ensuring excellent durability and high resistance to weather conditions including UV, water, snow, and ice. Our quick-release vest system features a central release mechanism that disconnects all four buckles simultaneously through mechanical cable disengagement, with neodymium magnets enabling easy fastening. The LB25WGD YKK belt buckle in T-POM offers exceptional impact resistance, easy operation with gloves, and compatibility with most webbing. These systems are used in professional applications including the new model vests for the Polish Police, demonstrating their proven reliability in demanding field conditions.",
  },
];

const FAQ_PL = [
  {
    question: 'Jakie rodzaje klamer i plastikowego hardware oferujecie?',
    answer:
      'Oferujemy kompleksowy asortyment klamer i plastikowych elementów do różnych zastosowań — od delikatnych produktów dziecięcych po trwały sprzęt taktyczny. Nasza oferta obejmuje: klamry boczne (standardowe i wysokiej wytrzymałości), klamry magnetyczne, klamry pasów z podwójnym regulatorem, klamry szybkiego otwierania do kamizelek, klamry z samozaciskową regulacją, klamry montowane powierzchniowo, stopery i zamki sznurka, regulatory pasów, karabińczyki, pętle szybkiego mocowania, D-ringi i specjalistyczne klamry taktyczne. Wszystkie komponenty dostępne w POM, T-POM, wersjach trudnopalnych UL-94 V0 oraz z obniżoną sygnaturą NIR.',
  },
  {
    question: 'Co sprawia, że klamry YKK LB-WG/WGD są idealne do zastosowań militarnych?',
    answer:
      'Klamra YKK LB-WG/WGD to jedna z najlepszych klamer do zastosowań wojskowych, wtryskiwana ze specjalnej odmiany POM — T-POM (utwardzonego POM), co czyni ją niezwykle trwałą i odporną na uderzenia. Klamra jest wyjątkowo łatwa w obsłudze w rękawicach i jedną ręką — kluczowe w sytuacjach taktycznych. T-POM jest wyjątkowo odporny na niskie temperatury i zmiany temperatur, zapewniając niezawodność w trudnych warunkach. Utwardzona konstrukcja acetal czyni ją jedną z najsilniejszych klamer na rynku.',
  },
  {
    question: 'Jak działają klamry magnetyczne i jakie mają zalety?',
    answer:
      'Klamry magnetyczne oferują wygodną, intuicyjną obsługę jedną ręką, nawet w rękawiczkach. Klamra magnetyczna 40mm stosowana jest w środkach ochrony indywidualnej i zastosowaniach militarnych. Klamra pasa HP-M 50 ma centralny, ukryty mechanizm zwalniający z funkcją obrotową i taktycznym matowym wykończeniem. Nasz system szybkiego odpinania kamizelek używa magnesów neodymowych do łatwego zapinania w połączeniu z centralnym mechanicznym zwolnieniem, które odłącza wszystkie cztery klamry jednocześnie.',
  },
  {
    question: 'Z jakich materiałów wykonane są klamry i jakie specjalne wersje są dostępne?',
    answer:
      'Standardowe klamry wykonane są z tworzywa POM (acetal), modyfikowanego przez producentów do konkretnych wymagań. Do wymagających zastosowań oferujemy T-POM (utwardzony POM) zapewniający wyjątkową odporność na uderzenia. Gdy wymagają tego szczególne zastosowania, dostarczamy klamry w wersjach trudnopalnych spełniających normę UL-94, klasa V0. Oferujemy też klamry z obniżoną sygnaturą NIR do zastosowań militarnych. Każdy wariant materiałowy jest dobierany na podstawie wymagań wydajnościowych, warunków środowiskowych i norm bezpieczeństwa.',
  },
  {
    question: 'Jakie specjalistyczne systemy klamer oferujecie do kamizelek taktycznych?',
    answer:
      'Oferujemy kilka specjalistycznych systemów klamer zaprojektowanych dla kamizelek taktycznych i nosidełek płyt. Klamra szybkiego otwierania na taśmy 40mm umożliwia szybkie odpięcie przez pociągnięcie sznurka z wysoką odpornością na UV, wodę, śnieg i lód. Nasz system szybkiego odpinania kamizelek ma centralny mechanizm odłączający wszystkie cztery klamry jednocześnie, z magnesami neodymowymi do łatwego zapinania. Klamra YKK LB25WGD T-POM oferuje wyjątkową odporność na uderzenia i łatwą obsługę w rękawiczkach. Systemy te stosowane są w profesjonalnych zastosowaniach, w tym w nowych modelach kamizelek dla Polskiej Policji.',
  },
];

export default function BucklesContent({ locale, position }: Props) {
  const isEn = locale === 'en';

  /* ─────────────────────────── ABOVE ─────────────────────────── */
  if (position === 'above') {
    return (
      <>
        {/* ── INTRO: Buckles & plastic hardware ── */}
        <section className="py-16 bg-[#f5f3ef]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              {/* Left: title + text + 2 small images */}
              <div>
                <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111]">
                  {isEn ? 'Buckles & plastic hardware' : 'Klamry i plastikowy hardware'}
                </h2>
                <p className="font-[Jost] text-gray-500 text-sm leading-relaxed mb-10">
                  {isEn
                    ? 'Buckles, adjusters, loops, D-rings, strap holders, clips, cord stoppers, and many, many other hardware components assist in various product applications, from delicate children\'s products to durable tactical gear for the military. We offer them all.'
                    : 'Klamry, regulatory, pętle, D-ringi, uchwyty pasów, klipsy, stopery sznurka i wiele, wiele innych komponentów hardware wspierają różne zastosowania produktowe — od delikatnych produktów dziecięcych po trwały sprzęt taktyczny dla wojska. Oferujemy je wszystkie.'}
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="overflow-hidden group mb-2">
                      <Image
                        src={`${WP}2025/08/white-Photoroom-14.png`}
                        alt={isEn ? 'YKK buckle LB20WGD back' : 'Klamra YKK LB20WGD tył'}
                        width={300} height={300}
                        className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                        sizes="20vw"
                      />
                    </div>
                    <p className="font-[Jost] text-xs text-gray-500 text-center leading-snug">
                      {isEn
                        ? 'YKK buckle for military applications, special POM LB20WGD \u2013 back'
                        : 'Klamra YKK do zastosowań militarnych, specjalne POM LB20WGD \u2013 tył'}
                    </p>
                  </div>
                  <div>
                    <div className="overflow-hidden group mb-2">
                      <Image
                        src={`${WP}2025/08/white-Photoroom-15.png`}
                        alt={isEn ? 'LB20WGD front' : 'LB20WGD przód'}
                        width={300} height={300}
                        className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                        sizes="20vw"
                      />
                    </div>
                    <p className="font-[Jost] text-xs text-gray-500 text-center leading-snug">
                      LB20WGD - front
                    </p>
                  </div>
                </div>
              </div>
              {/* Right: large image */}
              <div>
                <div className="overflow-hidden group mb-2">
                  <Image
                    src={`${WP}2025/08/white-Photoroom-13.png`}
                    alt={isEn ? 'YKK LB50WGD buckle' : 'Klamra YKK LB50WGD'}
                    width={700} height={600}
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── YKK LB-WG / WGD Buckle ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start mb-10">
              {/* Left: large image + caption */}
              <div>
                <div className="overflow-hidden group mb-3">
                  <Image
                    src={`${WP}2025/06/zamekplastikowy4-1024x1024.jpg`}
                    alt={isEn ? 'YKK LB-WG buckle' : 'Klamra YKK LB-WG'}
                    width={700} height={700}
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
              {/* Right: title + text + SHOCKONLOC */}
              <div>
                <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#7a3f4a]">
                  {isEn ? 'YKK LB-WG / WGD Buckle' : 'Klamra YKK LB-WG / WGD'}
                </h2>
                <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed">
                  <p>
                    {isEn
                      ? 'One of the best buckles for military applications is the YKK LB-WG / WGD model, which is injection-molded from a special grade of POM (T-POM) \u2013 a toughened POM, making it extremely durable and resistant to impacts or accidental damage.'
                      : 'Jedną z najlepszych klamer do zastosowań wojskowych jest model YKK LB-WG / WGD, wtryskiwany ze specjalnej gatunkowo odmiany POM (T-POM) \u2013 utwardzonego POM, co czyni go niezwykle trwałym i odpornym na uderzenia lub przypadkowe uszkodzenia.'}
                  </p>
                  <p>
                    {isEn
                      ? 'It is a reliable buckle, exceptionally easy to operate with gloves and with one hand. This type of POM is extremely resistant to low temperatures as well as temperature changes. The hardened acetal makes the buckle one of the strongest on the market, if not the strongest.'
                      : 'Niezawodna klamra, wyjątkowo łatwa w obsłudze w rękawicach i jedną ręką. Ten rodzaj POM jest wyjątkowo odporny na niskie temperatury oraz zmiany temperatur. Utwardzona forma acetalu czyni tę klamrę jedną z najmocniejszych na rynku, jeśli nie najmocniejszą.'}
                  </p>
                </div>
                <p className="font-[Jost] text-sm font-medium mt-8 text-[#a87c7c] tracking-wide">
                  <a
                    href="https://ykkeurope.com/product/shockonloc-%ef%bc%9a-lb-wg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    SHOCKONLOC® ： LB-WG | YKK
                  </a>
                </p>
              </div>
            </div>
            {/* 4 small images row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                `${WP}2025/06/zamekplastikowy-1024x1024.jpg`,
                `${WP}2025/06/zamekplastikowydwa-1024x1024.jpg`,
                `${WP}2025/06/zamekplastikowy3-1024x1024.jpg`,
                `${WP}2025/06/zamekplastikowy4-1024x1024.jpg`,
              ].map((src, i) => (
                <div key={i} className="overflow-hidden group">
                  <Image
                    src={src}
                    alt={`YKK LB-WG buckle view ${i + 1}`}
                    width={300} height={300}
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                    sizes="25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HP-M 50 BELT BUCKLE ── */}
        <section className="py-16 bg-[#f5f3ef]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              {/* Left: title + text + bullets + 2 small images */}
              <div>
                <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111] tracking-wide uppercase">
                  {isEn ? 'HP-M 50 Belt Buckle' : 'Klamra pasa HP-M 50'}
                </h2>
                <div className="space-y-3 font-[Jost] text-gray-500 text-sm leading-relaxed mb-6">
                  <p>
                    {isEn
                      ? 'A magnetic buckle with a central, hidden release mechanism. Designed for use in tactical belts.'
                      : 'Magnetyczna klamra z centralnym, ukrytym mechanizmem zwalniającym. Zaprojektowana do stosowania w pasach taktycznych.'}
                  </p>
                  <ul className="space-y-2 mt-4">
                    <li className="flex gap-2">
                      <span className="flex-shrink-0 text-gray-400">&bull;</span>
                      <span>
                        {isEn
                          ? <><strong className="text-[#111] font-medium">Easy operation</strong> \u2013 can be fastened and unfastened with one hand, even while wearing gloves.</>
                          : <><strong className="text-[#111] font-medium">Łatwa obsługa</strong> \u2013 możliwość zapięcia i rozpięcia jedną ręką, nawet w rękawiczkach.</>}
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="flex-shrink-0 text-gray-400">&bull;</span>
                      <span>
                        {isEn
                          ? <><strong className="text-[#111] font-medium">Swivel function.</strong></>
                          : <><strong className="text-[#111] font-medium">Funkcja obrotowa (swivel).</strong></>}
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="flex-shrink-0 text-gray-400">&bull;</span>
                      <span>
                        {isEn
                          ? <><strong className="text-[#111] font-medium">Attractive design</strong> with a tactical, matte finish.</>
                          : <><strong className="text-[#111] font-medium">Atrakcyjny design</strong> z taktycznym, matowym wykończeniem.</>}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6 max-w-[60%]">
                  {[
                    `${WP}2025/09/HP-M-50-BELT-BUCKLE-500x1024.png`,
                    `${WP}2025/09/HP-M-50-BELT-BUCKLE3-418x1024.png`,
                  ].map((src, i) => (
                    <div key={i} className="overflow-hidden group">
                      <Image src={src} alt={`HP-M 50 view ${i + 1}`}
                        width={180} height={300}
                        className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                        sizes="12vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
              {/* Right: large image */}
              <div className="overflow-hidden group">
                <Image
                  src={`${WP}2025/09/HP-M-50-BELT-BUCKLE1.png`}
                  alt={isEn ? 'HP-M 50 belt buckle' : 'Klamra pasa HP-M 50'}
                  width={700} height={700}
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── LB25WGD YKK BELT BUCKLE T-POM ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              {/* Left: large image */}
              <div className="overflow-hidden group bg-[#f5f3ef] p-4">
                <Image
                  src={`${WP}2025/09/LB25WGD-YKK-BELT-BUCKLE-T-POM.png`}
                  alt={isEn ? 'LB25WGD YKK belt buckle T-POM' : 'Klamra YKK LB25WGD T-POM'}
                  width={700} height={600}
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Right: title + text + bullets + 2 small images */}
              <div>
                <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#7a3f4a] tracking-wide uppercase">
                  {isEn ? 'LB25WGD YKK Belt Buckle T-POM' : 'Klamra pasa YKK LB25WGD T-POM'}
                </h2>
                <div className="space-y-3 font-[Jost] text-gray-500 text-sm leading-relaxed mb-6">
                  <p>
                    {isEn
                      ? 'A durable, heavy-duty side-release buckle, designed to withstand the toughest conditions. Its strength comes from its excellent design and the use of a special, reinforced material \u2013 high-performance POM plastic.'
                      : 'Wytrzymała klamra zatrzaskowa boczna do dużych obciążeń, zaprojektowana z myślą o najtrudniejszych warunkach. Jej wytrzymałość wynika z doskonałego projektu i zastosowania specjalnego, wzmocnionego materiału \u2013 wysokowydajnego tworzywa POM.'}
                  </p>
                  <ul className="space-y-2 mt-4">
                    {(isEn
                      ? [
                          'Exceptional impact resistance',
                          'Solid and durable',
                          'Easy to open with gloves and simple to fasten even with one hand',
                          'Compatible with most webbing available on the market',
                          'Available in tactical colors',
                        ]
                      : [
                          'Wyjątkowa odporność na uderzenia',
                          'Solidna i trwała',
                          'Łatwe otwieranie w rękawiczkach i proste zapinanie nawet jedną ręką',
                          'Kompatybilna z większością taśm dostępnych na rynku',
                          'Dostępna w kolorach taktycznych',
                        ]
                    ).map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="flex-shrink-0 text-gray-400">&bull;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6 max-w-[60%]">
                  {[
                    `${WP}2025/09/LB25WGD-YKK-BELT-BUCKLE-T-POM2.png`,
                    `${WP}2025/09/LB25WGD-YKK-BELT-BUCKLE-T-POM1-e1756985500770-576x1024.png`,
                  ].map((src, i) => (
                    <div key={i} className="overflow-hidden group">
                      <Image src={src} alt={`LB25WGD view ${i + 1}`}
                        width={180} height={240}
                        className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                        sizes="12vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3-COLUMN: Quick-Release Vest | Standard Side Release | Self-locking ── */}
        <section className="py-16 bg-[#f5f3ef]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              {/* Col 1: Quick-Release Buckle for Vest */}
              <div className="flex flex-col">
                <h3 className="font-[Jost] text-sm font-semibold mb-4 text-[#111] tracking-widest uppercase text-center">
                  {isEn ? <>Quick-Release Buckle for Vest<br />Reinforced Plastic</> : 'Klamra szybkiego otwierania do kamizelki – wzmocniony plastik'}
                </h3>
                <div className="h-72 overflow-hidden group flex items-center justify-center mb-4">
                  <Image
                    src={`${WP}2025/09/KLAMRA-SZYBKIEGO-OTWIERANIA-DO-KAMIZELKI-450x1024.png`}
                    alt={isEn ? 'Quick-release buckle for vest' : 'Klamra szybkiego otwierania do kamizelki'}
                    width={220} height={500}
                    className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                    sizes="20vw"
                  />
                </div>
                <p className="font-[Jost] text-gray-500 text-sm leading-relaxed">
                  {isEn
                    ? 'A buckle for use with 40mm wide webbing, designed for quick release by pulling a cord. Used for tactical vests / plate carriers, its special reinforced material ensures the buckle\u2019s excellent durability and high resistance to weather conditions (UV, water, snow, ice).'
                    : 'Klamra do zastosowania z taśmami o szerokości 40mm, zaprojektowana do szybkiego otwierania przez pociągnięcie sznurka. Stosowana w kamizelek taktycznych / nosidełkach płyt. Specjalny wzmocniony materiał zapewnia doskonałą trwałość i wysoką odporność na warunki atmosferyczne (UV, woda, śnieg, lód).'}
                </p>
              </div>
              {/* Col 2: Standard Side Release Buckle */}
              <div className="flex flex-col">
                <h3 className="font-[Jost] text-sm font-semibold mb-4 text-[#111] tracking-widest uppercase text-center">
                  {isEn ? 'Standard Side Release Buckle' : 'Standardowa klamra boczna'}
                </h3>
                <div className="h-72 overflow-hidden group flex items-center justify-center mb-4">
                  <Image
                    src={`${WP}2025/09/STANDARD-SIDE-RELEASE-BUCKLE.png`}
                    alt={isEn ? 'Standard side release buckle' : 'Standardowa klamra boczna'}
                    width={280} height={280}
                    className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                    sizes="25vw"
                  />
                </div>
                <p className="font-[Jost] text-gray-500 text-sm leading-relaxed">
                  {isEn
                    ? 'Standard buckles used in many applications are made from POM plastic, also known as acetal. This is a universal material that is often modified by manufacturers. Buckles made from other materials are produced when a special application is required, such as flame retardancy. We supply all plastic components in a flame-retardant version that meets the requirements of the UL-94 standard, class V0, as well as in a version with a reduced Near-Infrared (NIR) signature.'
                    : 'Standardowe klamry stosowane w wielu aplikacjach wykonane są z tworzywa POM, zwanego również acetalem. Jest to materiał uniwersalny, często modyfikowany przez producentów. Klamry z innych materiałów produkowane są wtedy, gdy wymagana jest specjalna aplikacja, jak np. trudnopalność. Dostarczamy wszystkie elementy plastikowe w wersji trudnopalnej spełniającej wymagania normy UL-94, klasa V0, a także w wersji z obniżoną sygnaturą NIR.'}
                </p>
              </div>
              {/* Col 3: Self-locking Adjustment Buckle */}
              <div className="flex flex-col">
                <h3 className="font-[Jost] text-sm font-semibold mb-4 text-[#111] tracking-wide text-center">
                  {isEn ? 'Self-locking Adjustment Buckle' : 'Klamra z samozaciskową regulacją'}
                </h3>
                <div className="h-72 overflow-hidden group flex items-center justify-center mb-4">
                  <Image
                    src={`${WP}2025/09/KLAMRA-Z-SAMOZACISKOWA-REGULACJA.png`}
                    alt={isEn ? 'Self-locking adjustment buckle' : 'Klamra z samozaciskową regulacją'}
                    width={280} height={280}
                    className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                    sizes="25vw"
                  />
                </div>
                <p className="font-[Jost] text-gray-500 text-sm leading-relaxed">
                  {isEn
                    ? 'An incredibly convenient solution, allowing for very fast adjustment of the load-bearing strap\u2019s length thanks to its self-locking (cam) adjustment mechanism. It combines strong holding force with very user-friendly operation. Available in standard and NIR variants.'
                    : 'Niezwykle wygodne rozwiązanie, umożliwiające bardzo szybką regulację długości pasa nośnego dzięki samozaciskowemu mechanizmowi krzywkowemu. Łączy dużą siłę trzymania z bardzo przyjazną obsługą. Dostępna w wersjach standardowej i NIR.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── QUICK-RELEASE SYSTEM FOR VESTS ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              <div className="overflow-hidden group bg-[#f5f3ef] p-4">
                <Image
                  src={`${WP}2025/09/systemszybkiegoodpinaniaklamer.png`}
                  alt={isEn ? 'Quick-release system for vests' : 'System szybkiego odpinania kamizelek'}
                  width={700} height={500}
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111] tracking-wide uppercase">
                  {isEn ? 'Quick-Release System for Vests' : 'System szybkiego odpinania kamizelek'}
                </h2>
                <p className="font-[Jost] text-gray-500 text-sm leading-relaxed">
                  {isEn
                    ? 'A buckle system with a central release that allows all four buckles to be disconnected at the same moment. The release occurs through the mechanical (cable) disengagement of each buckle. Easy fastening is enabled by neodymium magnets placed in each buckle.'
                    : 'System klamer z centralnym zwalniaczem umożliwiającym jednoczesne odpięcie wszystkich czterech klamer. Zwolnienie następuje przez mechaniczne (kablowe) odblokowanie każdej klamry. Łatwe zapinanie jest możliwe dzięki magnesom neodymowym umieszczonym w każdej klamrze.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 40MM MAGNETIC BUCKLE ── */}
        <section className="py-16 bg-[#f5f3ef]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              <div>
                <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111] tracking-wide uppercase">
                  {isEn ? '40mm Magnetic Buckle' : 'Klamra magnetyczna 40mm'}
                </h2>
                <p className="font-[Jost] text-gray-500 text-sm leading-relaxed">
                  {isEn
                    ? <>A convenient buckle with a magnetic closure, used in many applications, including personal protective equipment and military uses. Easy to use with intuitive one-handed unfastening and fastening thanks to the magnet. Used in the new model of vests for the Polish Police &ndash; <a href="https://milmag.pl/holsters-hpe-poland-dostarczy-do-policji-kamizelki-plate-carrier/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#7a3f4a]">Holsters HPE Poland dostarczy do Policji kamizelki plate carrier – MILMAG</a>.</>
                    : <>Wygodna klamra z magnetycznym zamknięciem, stosowana w wielu aplikacjach, w tym w środkach ochrony indywidualnej i zastosowaniach militarnych. Łatwa w obsłudze dzięki intuicyjnemu jednostronnemu odpinaniu i zapinaniu za pomocą magnesu. Zastosowana w nowym modelu kamizelek dla Polskiej Policji &ndash; <a href="https://milmag.pl/holsters-hpe-poland-dostarczy-do-policji-kamizelki-plate-carrier/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#7a3f4a]">Holsters HPE Poland dostarczy do Policji kamizelki plate carrier – MILMAG</a>.</>}
                </p>
              </div>
              <div className="overflow-hidden group flex justify-center">
                <Image
                  src={`${WP}2025/09/klamramagnetyczna40mm-e1756986571379.png`}
                  alt={isEn ? '40mm magnetic buckle' : 'Klamra magnetyczna 40mm'}
                  width={350} height={250}
                  className="h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                  sizes="25vw"
                />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  /* ─────────────────────────── BELOW ─────────────────────────── */
  return (
    <>
      {/* Hardware & Accessories grid */}
      <section className="py-16 bg-[#f5f3ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-10 text-[#111]">
            {isEn ? 'Hardware & Accessories' : 'Okucia i akcesoria'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACCESSORIES.map((acc, i) => (
              <div key={i} className="text-center">
                <div className="overflow-hidden group bg-white mb-3 aspect-square flex items-center justify-center p-3">
                  <Image
                    src={acc.img}
                    alt={isEn ? acc.heading : acc.headingPl}
                    width={250} height={250}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <p className="font-[Jost] text-xs text-gray-600 leading-snug">
                  {isEn ? acc.heading : acc.headingPl}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <FaqAccordion items={isEn ? FAQ_EN : FAQ_PL} locale={locale} />
      </section>

    </>
  );
}
