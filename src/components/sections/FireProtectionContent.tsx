'use client';
import { useState } from 'react';
import Image from 'next/image';
import FaqAccordion from '@/components/sections/FaqAccordion';

const WP = 'https://wp.trimsandfasteners.com/wp-content/uploads/';

interface Props {
  locale: string;
  position: 'above' | 'below';
}

const FAQ_EN = [
  {
    question: 'What are the key requirements for fire retardant zippers in protective clothing?',
    answer: 'Fire retardant zippers must meet specific safety standards to protect workers in hazardous environments. The quality requirements are clear: the material must not continue to burn after the ignition source is removed (self-extinguishing), there should be no afterglow, and no heat accumulation. For higher classes of protection, it\'s crucial that accessories like zippers maintain their functionality, allowing them to be easily unzipped to remove the garment quickly in emergency situations. We supply accessories for all types of fire hazards, ensuring both safety and user comfort in the harshest working conditions.',
  },
  {
    question: 'What makes fire retardant metal zippers so reliable?',
    answer: 'Fire retardant metal zippers are the most popular and trusted variant in this category, based on two key elements: metal brass teeth and meta-aramid fiber tape. Brass, with its high melting point (approximately 900-940°C) and high mechanical strength, ensures structural integrity even in extreme conditions. The meta-aramid tape is a specialized synthetic fiber that doesn\'t melt, drip, or sustain combustion upon flame contact; instead, it chars, creating a protective barrier. The synergy of these components determines the zipper\'s reliability. They\'re durable, strong, and self-extinguishing, making them ideal for the most demanding applications.',
  },
  {
    question: 'What are the advantages of fire retardant plastic zippers?',
    answer: 'Fire retardant plastic zippers are an innovative equivalent to metal zippers, with elements molded from specially modified material that achieves flame-retardant parameters similar to metal zippers. Key advantages include being self-extinguishing, lightweight, easy to clean from contaminants, and not accumulating heat – a critical safety feature. The slider can be metal or made from high-performance reinforced resin that\'s also flame retardant. Combined with aramid fiber tape that won\'t melt or sustain combustion, these zippers offer a modern alternative to heavier metal zippers, particularly suitable for applications like electrician workwear where avoiding metal heat accumulation is important.',
  },
  {
    question: 'How do metal and plastic fire retardant zippers compare?',
    answer: 'Both types use aramid fiber tape as the base, but differ in their teeth construction and performance characteristics. Metal zippers offer superior transverse strength and durability, making them ideal for heavy-duty applications, but they\'re heavier and metal elements can accumulate heat, posing burn risks. Plastic fire retardant zippers are lighter, don\'t accumulate heat, and are easier to clean, making them safer for electricians and applications where heat accumulation is a concern. However, they have lower transverse strength. The choice depends on your specific application requirements, working conditions, and the level of mechanical stress the zipper will face.',
  },
  {
    question: 'What safety standards do your fire retardant zippers meet?',
    answer: 'Our fire retardant zippers meet various international safety standards depending on the application. We supply zippers compliant with ISO-EN14116 and NFPA 2112/2113 for general workwear requiring flame resistance. For firefighter turnout gear, our M8 NOMEX zippers meet ISO-EN469 and NFPA1975 standards, trusted by fire departments worldwide. Our plastic accessories meet UL94 standard, class V-0 requirements. We offer flame-retardant treated options with wash resistance of approximately 20 washes, as well as permanent aramid-based solutions. Different protection levels and industry requirements mean we can recommend the most appropriate product for your specific application.',
  },
];

const FAQ_PL = [
  {
    question: 'Jakie są kluczowe wymagania dla zamków ognioodpornych w odzieży ochronnej?',
    answer: 'Zamki ognioodporne muszą spełniać określone normy bezpieczeństwa. Wymagania jakościowe są jasne: materiał nie może kontynuować palenia po usunięciu źródła zapłonu (samogasnący), nie może być poświata i kumulowanie ciepła. Dla wyższych klas ochrony kluczowe jest, aby zamki utrzymywały funkcjonalność, umożliwiając szybkie zdjęcie odzieży w sytuacjach awaryjnych.',
  },
  {
    question: 'Co sprawia, że metalowe zamki ognioodporne są tak niezawodne?',
    answer: 'Metalowe zamki ognioodporne opierają się na dwóch kluczowych elementach: metalowych zębach mosiężnych i taśmie z włókien meta-aramidowych. Mosiądz z temperaturą topnienia ~900-940°C i wysoką wytrzymałością mechaniczną zapewnia integralność strukturalną. Taśma meta-aramidowa nie topi się ani nie podtrzymuje palenia — ulega zwęgleniu, tworząc barierę ochronną.',
  },
  {
    question: 'Jakie są zalety plastikowych zamków ognioodpornych?',
    answer: 'Plastikowe zamki ognioodporne to innowacyjny odpowiednik metalowych, z elementami formowanymi ze specjalnie modyfikowanego materiału. Kluczowe zalety: samogasnące, lekkie, łatwe do czyszczenia i nie kumulujące ciepła. Suwak może być metalowy lub z wysokowydajnej żywicy wzmacnianej, która również jest trudnopalna. Idealnie nadają się dla elektryków.',
  },
  {
    question: 'Jak porównać metalowe i plastikowe zamki ognioodporne?',
    answer: 'Oba typy używają taśmy aramidowej, ale różnią się budową zębów. Zamki metalowe oferują wyższą wytrzymałość poprzeczną, są cięższe i mogą kumulować ciepło. Plastikowe są lżejsze, nie kumulują ciepła i łatwiejsze do czyszczenia, ale mają niższą wytrzymałość poprzeczną. Wybór zależy od wymagań aplikacji i warunków pracy.',
  },
  {
    question: 'Jakie normy bezpieczeństwa spełniają Wasze zamki ognioodporne?',
    answer: 'Nasze zamki spełniają różne międzynarodowe normy: ISO-EN14116 i NFPA 2112/2113 dla odzieży roboczej. Zamki M8 NOMEX do ubrań strażackich spełniają ISO-EN469 i NFPA1975. Akcesoria plastikowe spełniają normę UL94, klasa V-0. Oferujemy opcje z impregnacją ognioodporną z odpornością ok. 20 prań oraz trwałe rozwiązania aramidowe.',
  },
];

interface TileProps {
  title: string;
  items: string[];
  accent?: boolean;
}

function Tile({ title, items, accent = false }: TileProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="p-5 transition-all duration-200 cursor-default"
      style={{
        backgroundColor: '#e8e8e7',
        boxShadow: hovered ? '0 4px 16px rgba(0,0,0,0.12)' : 'none',
        transform: hovered ? 'translateY(-2px)' : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p
        className="font-[Jost] text-sm font-medium mb-3 flex items-center gap-1.5"
        style={{ color: accent ? '#a87c7c' : '#555' }}
      >
        <span className="text-base leading-none">{accent ? '+' : '−'}</span>
        {title}
      </p>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2 font-[Jost] text-xs text-gray-600 leading-snug">
            <span style={{ color: accent ? '#a87c7c' : '#888', flexShrink: 0 }}>›</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function FireProtectionContent({ locale, position }: Props) {
  const isEn = locale === 'en';

  if (position === 'above') {
    return (
      <>
        {/* ── Intro ── */}
        <section className="py-14 bg-[#f5f3ef]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed">
              <p>
                {isEn
                  ? 'Clothing that protects against fire-related risk factors must meet specific safety standards defined in norms. There are different levels of protection and various standards, but the goal is always the same: to protect the health and life of an employee exposed to a hazardous work environment.'
                  : 'Odzież chroniąca przed zagrożeniami ogniowymi musi spełniać określone normy bezpieczeństwa. Istnieją różne poziomy ochrony i różne standardy, ale cel jest zawsze ten sam: ochrona zdrowia i życia pracownika narażonego na niebezpieczne środowisko pracy.'}
              </p>
              <p>
                {isEn
                  ? 'The multitude of standards, depending on the industry and levels of protection, means that different products are recommended for specific applications. However, the quality requirements are very similar: the material must not continue to burn after the ignition source is removed (it must be self-extinguishing), there should be no afterglow, and no heat accumulation. For higher classes of protection, it also means maintaining the functionality of accessories like zippers, allowing them to be easily unzipped to remove the garment. We supply accessories for all types of fire hazards.'
                  : 'Wielość norm, w zależności od branży i poziomów ochrony, oznacza, że różne produkty są zalecane do konkretnych zastosowań. Wymagania jakościowe są jednak podobne: materiał nie może kontynuować palenia po usunięciu źródła zapłonu (musi być samogasnący), nie może być poświaty ani kumulowania ciepła. Dla wyższych klas ochrony ważna jest też funkcjonalność zamków, umożliwiająca szybkie zdjęcie odzieży. Dostarczamy akcesoria do wszystkich typów zagrożeń ogniowych.'}
              </p>
            </div>
          </div>
        </section>

        {/* ── Fire Retardant Metal Zippers ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              <div>
                <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111]">
                  {isEn ? 'Fire Retardant Metal Zippers' : 'Metalowe zamki ognioodporne'}
                </h2>
                <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed mb-8">
                  <p>
                    {isEn
                      ? 'The most popular and trusted variant in this category are zippers whose construction is based on two key elements: metal, brass teeth and a tape made of meta-aramid fibers. Brass, thanks to its high melting point (approx. 900-940°C) and high mechanical strength, ensures the structural integrity of the zipper even in extreme conditions.'
                      : 'Najpopularniejszy wariant to zamki z metalowymi zębami mosiężnymi i taśmą z włókien meta-aramidowych. Mosiądz dzięki wysokiej temperaturze topnienia (ok. 900-940°C) i wytrzymałości mechanicznej zapewnia integralność strukturalną zamka nawet w ekstremalnych warunkach.'}
                  </p>
                  <p>
                    {isEn
                      ? 'The meta-aramid tape, in turn, is a specialized synthetic fiber that does not melt, drip, or sustain combustion upon contact with a flame, but instead chars, creating a protective barrier. It is the synergy of these two components that determines the reliability of the entire zipper.'
                      : 'Taśma meta-aramidowa to specjalistyczne włókno syntetyczne, które nie topi się, nie kapie ani nie podtrzymuje palenia po kontakcie z ogniem, lecz ulega zwęgleniu, tworząc barierę ochronną. Synergia tych dwóch elementów decyduje o niezawodności całego zamka.'}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Tile
                    accent
                    title={isEn ? 'Advantages' : 'Zalety'}
                    items={isEn ? ['Durable', 'Strong', 'Self-extinguishing'] : ['Trwałe', 'Wytrzymałe', 'Samogasnące']}
                  />
                  <Tile
                    title={isEn ? 'Disadvantages' : 'Wady'}
                    items={isEn ? ['Heavy', 'Metal elements accumulate heat'] : ['Ciężkie', 'Metal kumuluje ciepło']}
                  />
                </div>
                <button
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent('taf-inquiry-select', { detail: { productId: 'fr-metal' } }));
                  }}
                  className="mt-6 bg-[#111] text-white font-[Jost] text-sm px-8 py-3 hover:bg-black transition-colors cursor-pointer"
                >
                  {isEn ? 'Inquire about this product' : 'Zapytaj o ten produkt'}
                </button>
              </div>
              <div className="overflow-hidden group aspect-[4/3]">
                <Image
                  src={`${WP}2025/06/metalowezamkitrudnopalne.jpg`}
                  alt={isEn ? 'Fire retardant metal zipper' : 'Metalowy zamek ognioodporny'}
                  width={700}
                  height={525}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Fire Retardant Plastic Zippers ── */}
        <section className="py-16 bg-[#f5f3ef]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              <div className="overflow-hidden group aspect-[3/4]">
                <Image
                  src={`${WP}2025/03/Photoroom_20250328_052331-768x1024.jpeg`}
                  alt={isEn ? 'Fire retardant plastic zipper' : 'Plastikowy zamek ognioodporny'}
                  width={600}
                  height={800}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111]">
                  {isEn ? 'Fire Retardant Plastic Zippers' : 'Plastikowe zamki ognioodporne'}
                </h2>
                <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed mb-8">
                  <p>
                    {isEn
                      ? 'This is an innovative equivalent to metal zippers; the plastic elements are molded from a specially modified material, which makes it possible to achieve flame-retardant parameters at a level similar to that of metal zippers.'
                      : 'Jest to innowacyjny odpowiednik zamków metalowych; elementy plastikowe są formowane ze specjalnie modyfikowanego materiału, co pozwala uzyskać parametry trudnopalności na zbliżonym do zamków metalowych poziomie.'}
                  </p>
                  <p>
                    {isEn
                      ? 'As with metal zippers, the key element remains the tape made from aramid fibers, which guarantees that the base of the zipper will not melt and will not sustain combustion. The combination of this proven tape with innovative, flame-retardant plastic elements creates a modern alternative to heavier metal zippers.'
                      : 'Podobnie jak w zamkach metalowych, kluczowym elementem pozostaje taśma z włókien aramidowych, która gwarantuje, że podstawa zamka nie stopi się i nie podtrzyma palenia. Połączenie sprawdzonej taśmy z innowacyjnymi elementami trudnopalnymi tworzy nowoczesną alternatywę dla cięższych zamków metalowych.'}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Tile
                    accent
                    title={isEn ? 'Advantages' : 'Zalety'}
                    items={isEn
                      ? ['Self-extinguishing', 'Lightweight', 'Easy to clean', "Don't accumulate heat", 'Slider: metal or FR resin']
                      : ['Samogasnące', 'Lekkie', 'Łatwe do czyszczenia', 'Nie kumulują ciepła', 'Suwak: metal lub żywica FR']}
                  />
                  <Tile
                    title={isEn ? 'Disadvantages' : 'Wady'}
                    items={isEn ? ['Lower transverse strength'] : ['Niższa wytrzymałość poprzeczna']}
                  />
                </div>
                <button
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent('taf-inquiry-select', { detail: { productId: 'fr-plastic' } }));
                  }}
                  className="mt-6 bg-[#111] text-white font-[Jost] text-sm px-8 py-3 hover:bg-black transition-colors cursor-pointer"
                >
                  {isEn ? 'Inquire about this product' : 'Zapytaj o ten produkt'}
                </button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  // position === 'below'
  return (
    <>
      {/* ── D8 FR Open-End ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="font-[Jost] text-xl sm:text-2xl font-light mb-4 text-[#111]">
                {isEn ? 'D8 Fire Retardant Open-End Molded Zipper' : 'D8 Zamek formowany ognioodporny rozdzielny'}
              </h2>
              <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed mb-6">
                <p>
                  {isEn
                    ? 'A size 8 molded zipper with teeth made of flame-retardant plastic on an aramid fiber tape. The zipper is equipped with a plastic flame-retardant slider and puller; the absence of metal parts reduces the risk associated with metal heating up and related burns. The zipper is suitable for use in clothing for electricians.'
                    : 'Zamek formowany rozmiar 8 z zębami z tworzywa trudnopalnego na taśmie aramidowej. Wyposażony w plastikowy suwak i uchwyt trudnopalny; brak metalowych części redukuje ryzyko związane z nagrzewaniem się metalu. Nadaje się do odzieży dla elektryków.'}
                </p>
              </div>
              <div className="flex gap-3">
                {[`${WP}2025/09/2.jpg`, `${WP}2025/09/9.jpg`, `${WP}2025/09/7.jpg`].map((src, i) => (
                  <div key={i} className="w-20 h-20 overflow-hidden flex-shrink-0 bg-white">
                    <Image src={src} alt={`Norm badge ${i + 1}`} width={80} height={80}
                      className="w-full h-full object-contain"
                      sizes="80px" />
                  </div>
                ))}
              </div>
              <button
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('taf-inquiry-select', { detail: { productId: 'fr-plastic' } }));
                }}
                className="mt-6 bg-[#111] text-white font-[Jost] text-sm px-8 py-3 hover:bg-black transition-colors cursor-pointer"
              >
                {isEn ? 'Inquire about this product' : 'Zapytaj o ten produkt'}
              </button>
            </div>
            <div className="overflow-hidden group aspect-[4/3]">
              <Image
                src={`${WP}2025/09/1.jpg`}
                alt={isEn ? 'D8 FR open-end zipper' : 'Zamek D8 ognioodporny rozdzielny'}
                width={700}
                height={525}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FB40FRGR Suspender Buckle ── */}
      <section className="py-16 bg-[#f5f3ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-stretch">
            <div className="overflow-hidden group aspect-[4/3]">
              <Image
                src={`${WP}2025/09/5.jpg`}
                alt={isEn ? 'FB40FRGR suspender buckle' : 'Klamra szelkowa FB40FRGR'}
                width={700}
                height={525}
                className="w-full h-full object-contain bg-white group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="font-[Jost] text-xl sm:text-2xl font-light mb-4 text-[#111]">
                FB40FRGR
              </h2>
              <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed mb-6">
                <p>
                  {isEn
                    ? 'A suspender buckle made from a plastic with flame-retardant characteristics, meeting the requirements of the UL94 standard, class V-0, which is appropriate for plastic accessories.'
                    : 'Klamra szelkowa wykonana z tworzywa o właściwościach trudnopalnych, spełniająca wymagania normy UL94, klasa V-0, odpowiednia dla plastikowych akcesoriów.'}
                </p>
                <p>
                  {isEn
                    ? 'For application in workwear that requires self-extinguishing plastic accessories that do not sustain combustion. From the material that meets the V-0 class requirements, we produce a very wide range of accessories such as adjusters, cord stoppers, cord ends, grommets, and other buckles.'
                    : 'Do zastosowania w odzieży roboczej wymagającej samogasnących akcesoriów plastikowych. Z materiału spełniającego wymagania klasy V-0 produkujemy szeroki zakres akcesoriów: regulatory, stopery, końcówki sznurka, przelotki i inne klamry.'}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-auto">
                {[`${WP}2025/09/5.jpg`, `${WP}2025/09/4.jpg`].map((src, i) => (
                  <div key={i} className="overflow-hidden group aspect-[4/3] bg-white">
                    <Image src={src} alt={`FB40FRGR ${i + 1}`} width={300} height={225}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      sizes="20vw" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── D8 FR Two-Way ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="font-[Jost] text-xl sm:text-2xl font-light mb-4 text-[#111]">
                {isEn ? 'D8 Fire Retardant Two-Way Separating Molded Zipper' : 'D8 Zamek formowany ognioodporny dwusuwakowy rozdzielny'}
              </h2>
              <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed mb-6">
                <p>
                  {isEn
                    ? 'A size 8 molded zipper with teeth made of flame-retardant plastic on an aramid fiber tape. The zipper has a metal slider and puller, and is also available in a quick-release version that opens from the top by pulling the slider.'
                    : 'Zamek formowany rozmiar 8 z zębami z tworzywa trudnopalnego na taśmie aramidowej. Wyposażony w metalowy suwak i uchwyt. Dostępny również w wersji szybkiego zwalniania, otwierającej się od góry przez pociągnięcie suwaka.'}
                </p>
              </div>
              <div className="flex gap-3">
                {[`${WP}2025/09/9.jpg`, `${WP}2025/09/7.jpg`].map((src, i) => (
                  <div key={i} className="w-20 h-20 overflow-hidden flex-shrink-0 bg-[#f5f3ef]">
                    <Image src={src} alt={`D8 two-way FR ${i + 1}`} width={80} height={80}
                      className="w-full h-full object-contain"
                      sizes="80px" />
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden group aspect-[4/3]">
              <Image
                src={`${WP}2025/09/8.jpg`}
                alt={isEn ? 'D8 FR two-way zipper' : 'Zamek D8 ognioodporny dwusuwakowy'}
                width={700}
                height={525}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── M3/M5/M8 FR Treated ── */}
      <section className="py-16 bg-[#f5f3ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div className="overflow-hidden group">
              <Image
                src={`${WP}2025/09/11-256x1024.jpg`}
                alt={isEn ? 'M-series FR metal zipper' : 'Zamek metalowy M z impregnacją FR'}
                width={256}
                height={1024}
                className="w-auto max-h-[420px] object-contain group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div>
              <h2 className="font-[Jost] text-xl sm:text-2xl font-light mb-4 text-[#111]">
                {isEn ? 'M3 / M5 / M8 Fire Retardant Treated' : 'M3 / M5 / M8 z impregnacją ognioodporną'}
              </h2>
              <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed">
                <p>
                  {isEn
                    ? 'A flame-retardant metal zipper on a flame-retardant treated polyester or cotton tape, with a wash resistance of approximately 20 washes. Used in workwear that meets safety requirements ISO-EN14116 / NFPA 2112/2113.'
                    : 'Metalowy zamek ognioodporny na taśmie poliestrowej lub bawełnianej z impregnacją trudnopalną, z odpornością na pranie ok. 20 cykli. Stosowany w odzieży roboczej spełniającej normy ISO-EN14116 / NFPA 2112/2113.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── M8 NOMEX ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="font-[Jost] text-xl sm:text-2xl font-light mb-4 text-[#111]">
                {isEn ? 'M8 NOMEX Zipper for Firefighter Turnout Gear' : 'Zamek M8 NOMEX do ubrań strażackich'}
              </h2>
              <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed">
                <p>
                  {isEn
                    ? 'A standard zipper on a meta-aramid tape, used in firefighter turnout gear by fire departments around the world. It meets the requirements of the relevant standards ISO-EN469 / NFPA1975.'
                    : 'Standardowy zamek na taśmie meta-aramidowej, stosowany w ubraniach bojowych przez straże pożarne na całym świecie. Spełnia wymagania norm ISO-EN469 / NFPA1975.'}
                </p>
              </div>
            </div>
            <div className="overflow-hidden group aspect-[4/3]">
              <Image
                src={`${WP}2025/09/12.jpg`}
                alt={isEn ? 'M8 NOMEX firefighter zipper' : 'Zamek M8 NOMEX strażacki'}
                width={700}
                height={525}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
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
