'use client';
import { useState } from 'react';
import Image from 'next/image';

const WP = 'https://wp.trimsandfasteners.com/wp-content/uploads/';

interface Props {
  locale: string;
}

const FAQ_EN = [
  {
    q: 'What personalization methods are available for zipper pullers?',
    a: 'We offer three main personalization methods for zipper pullers: laser engraving, logo printing, and molding technology. Laser engraving is a fast and economical method that doesn\'t require mold creation. Logo printing provides exceptional durability with UV-LED ink curing technology that\'s resistant to washing and scratches. Molding technology is the most popular branding method, creating raised or recessed logos directly in the puller material.',
  },
  {
    q: 'What are the advantages of laser engraving for logo application?',
    a: 'Laser engraving offers several compelling advantages: it\'s fast and economical because it doesn\'t require mold creation. One of the biggest benefits is the ability to work on almost any type of material and puller finish while offering a wide range of visual effects. By modifying laser parameters such as power, speed, and frequency, completely different results can be achieved on the same material.',
  },
  {
    q: 'How durable is printed logo on zipper pullers?',
    a: 'Our logo printing technology ensures exceptional durability. The UV-LED ink curing process creates a hard, smooth, and dense polymer layer that acts as a protective shield for the graphic. The print remains visible after many washing cycles and is scratch-resistant against fingernails, keys, and abrasion from other metal elements.',
  },
  {
    q: 'Why is molding technology the most popular branding method?',
    a: 'Molding technology creates a permanent, integral part of the puller itself rather than an applied surface treatment. The logo is formed directly during the manufacturing process, making it extremely durable. This method works beautifully on both metal and plastic pullers used in sportswear and various applications.',
  },
  {
    q: 'Do you provide design assistance and prototyping for custom logos?',
    a: 'Yes! We offer comprehensive assistance in preparing the design and prototyping before final production to ensure that every project is tailored to your expectations. We help optimize your logo design for the selected personalization method, considering factors like size, detail level, and visual impact.',
  },
];

const FAQ_PL = [
  {
    q: 'Jakie metody personalizacji uchwytów zamków są dostępne?',
    a: 'Oferujemy trzy główne metody personalizacji uchwytów zamków: grawerowanie laserowe, nadruk logotypu oraz przygotowanie formy z logo klienta. Grawerowanie laserowe to szybki i ekonomiczny sposób, który nie wymaga otwierania formy. Nadruk logotypu zapewnia wyjątkową trwałość dzięki technologii UV-LED. Przygotowanie formy to najpopularniejsza metoda brandowania pullerów.',
  },
  {
    q: 'Jakie efekty wizualne można osiągnąć dzięki grawerowaniu laserowemu?',
    a: 'Grawerowanie laserowe oferuje wyjątkową wszechstronność. Poprzez modyfikację parametrów lasera, takich jak moc, prędkość i częstotliwość, można osiągnąć zupełnie odmienne rezultaty na tym samym materiale — od subtelnego znakowania po głęboki, kontrastowy grawer.',
  },
  {
    q: 'Czy nadruk na uchwycie jest odporny na pranie i codzienne użytkowanie?',
    a: 'Technologia nadruku, którą oferujemy, zapewnia wyjątkową trwałość. Proces utwardzania tuszów UV-LED tworzy twardą, gładką warstwę polimeru. Nadruk jest odporny na zarysowania paznokciami, kontakt z kluczami i otarcia o inne metalowe elementy. Logo nie odpryskuje ani nie ściera się w newralgicznych punktach.',
  },
  {
    q: 'Jak przebiega proces przygotowania formy z logo?',
    a: 'Proces rozpoczyna się od konsultacji projektu, podczas której oferujemy pomoc w przygotowaniu optymalnego designu. Przed produkcją formy wykonujemy prototypowanie, dzięki czemu możesz zobaczyć i ocenić finalny efekt. Logo może być przygotowane zarówno na uchwytach metalowych, jak i tworzywowych.',
  },
  {
    q: 'Która metoda personalizacji jest najlepsza dla mojego projektu?',
    a: 'Wybór zależy od budżetu, harmonogramu i wielkości produkcji. Grawerowanie laserowe jest idealne dla małych serii i szybkiej realizacji. Nadruk logotypu sprawdza się gdy priorytetem jest trwałość w trudnych warunkach. Przygotowanie formy to najlepszy wybór dla dużych produkcji i projektów długoterminowych.',
  },
];

export default function PersonalizationContent({ locale }: Props) {
  const isEn = locale === 'en';
  const faqs = isEn ? FAQ_EN : FAQ_PL;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      {/* Section 1: Logo Engraving */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111]">
                {isEn ? 'Logo Engraving' : 'Grawer logotypu'}
              </h2>
              <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed">
                <p>
                  {isEn
                    ? 'Laser engraving a logo is a fast and economical way to apply a brand mark because it does not require the creation of a mold. It allows for a simple design process and quick execution.'
                    : 'Grawerowanie laserowe logo to szybki i ekonomiczny sposób na umieszczenie znaku firmowego, ponieważ nie wymaga otwierania formy. Umożliwia prosty projekt i szybką realizację.'}
                </p>
                <p>
                  {isEn
                    ? 'It can be performed on various types of puller finishes, and the resulting visual effect can also be varied. One of the biggest advantages of laser engraving is the ability to work on almost any type of material and puller finish, while offering a wide range of visual effects.'
                    : 'Można je wykonać na różnych rodzajach wykończeń uchwytów, a uzyskany efekt wizualny również może być zróżnicowany. Jedną z największych zalet grawerowania laserowego jest zdolność do pracy na niemal każdym rodzaju materiału i wykończenia uchwytu, oferując przy tym szeroką gamę efektów wizualnych.'}
                </p>
                <p>
                  {isEn
                    ? 'The final appearance of the logo depends not only on the design itself but on the precise interaction of the laser beam with the surface. By modifying the laser parameters, such as power, speed, and frequency, completely different results can be achieved on the same material.'
                    : 'Ostateczny wygląd logo nie zależy tylko od samego projektu, ale od precyzyjnej interakcji wiązki lasera z powierzchnią. Poprzez modyfikację parametrów lasera, takich jak moc, prędkość i częstotliwość, można osiągnąć zupełnie odmienne rezultaty na tym samym materiale.'}
                </p>
              </div>
            </div>
            <div className="overflow-hidden group">
              <Image
                src={`${WP}2025/06/laserowygrawerlogotypu-2048x2048.jpg`}
                alt={isEn ? 'Laser logo engraving on zipper puller' : 'Laserowy grawer logotypu na uchwycie zamka'}
                width={800}
                height={800}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Logo Printing */}
      <section className="py-20 bg-[#f5f3ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="overflow-hidden group order-2 lg:order-1 aspect-[4/3]">
              <Image
                src={`${WP}2025/09/white-Photoroom-28-1.png`}
                alt={isEn ? 'Logo printing on zipper puller' : 'Nadruk logotypu na uchwycie zamka'}
                width={800}
                height={800}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 bg-white"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111]">
                {isEn ? 'Logo Printing' : 'Nadruk logotypu'}
              </h2>
              <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed">
                <p>
                  {isEn
                    ? 'Another interesting and fast method for placing your brand or collection logo is printing on the zipper puller. The technology we offer ensures exceptional print durability. The logo remains visible after many washing cycles and is also scratch-resistant.'
                    : 'Inną interesującą i szybką metodą na umieszczenie logo Twojej marki lub kolekcji jest drukowanie na uchwycie suwaka. Technologia, którą oferujemy, zapewnia wyjątkową trwałość nadruku — logo pozostaje widoczne po wielu cyklach prania i jest odporne na zarysowania.'}
                </p>
                <p className="font-medium text-[#111]">
                  {isEn ? 'The technology we offer provides protection against daily wear and tear:' : 'Technologia zapewnia ochronę przed codziennym zużyciem:'}
                </p>
                <ul className="space-y-3 text-gray-500">
                  <li className="flex gap-2">
                    <span className="text-gray-400 flex-shrink-0">—</span>
                    <span>
                      {isEn
                        ? 'Hard and resistant coating: The UV-LED ink curing process creates a hard, smooth, and dense polymer layer that acts as a protective shield for the graphic. Paints with added hardeners work similarly, achieving high surface hardness after fully bonding.'
                        : 'Twarda i odporna powłoka: Proces utwardzania tuszów UV-LED tworzy twardą, gładką i zwartą warstwę polimeru, która działa jak tarcza ochronna dla grafiki.'}
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gray-400 flex-shrink-0">—</span>
                    <span>
                      {isEn
                        ? 'Protection against minor damage: The print is resistant to scratches from fingernails, accidental contact with keys in a handbag, or abrasion against other metal elements. The logo does not chip or wear off in critical areas, such as the edges of the puller.'
                        : 'Ochrona przed drobnymi uszkodzeniami: Nadruk jest odporny na zarysowania paznokciami, przypadkowy kontakt z kluczami w torebce czy otarcia o inne metalowe elementy.'}
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gray-400 flex-shrink-0">—</span>
                    <span>
                      {isEn
                        ? 'Lasting aesthetics: A scratched, worn, or illegible logo negatively affects the perception of the entire brand. Using a durable print guarantees that this key branding detail will remain aesthetic and legible, maintaining the impression of a premium product for a long time. It is an investment in a consistent and lasting image for your company.'
                        : 'Trwała estetyka: Porysowane, wytarte lub nieczytelne logo negatywnie wpływa na postrzeganie całej marki. Trwały nadruk to inwestycja w spójny i długotrwały wizerunek firmy.'}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Molding */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111]">
                {isEn ? 'Molding Technology' : 'Przygotowanie formy z logo klienta'}
              </h2>
              <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed mb-8">
                <p>
                  {isEn
                    ? 'Creating a logo this way is the most popular method for branding your pullers.'
                    : 'Przygotowane logo w ten sposób jest najpopularniejszym sposobem na brandowanie swoich pullerów.'}
                </p>
                <p>
                  {isEn
                    ? 'We offer assistance in preparing the design and prototyping before the mold is produced to ensure that every project is tailored to your expectations.'
                    : 'Proponujemy pomoc w przygotowaniu projektu oraz prototypowanie przed produkcją formy, tak by każdy projekt był dopasowany do Twoich oczekiwań.'}
                </p>
                <p>
                  {isEn
                    ? 'The logo can be created on metal and plastic pullers used in sportswear.'
                    : 'Logo może być przygotowane na uchwytach metalowych oraz tworzywowych używanych w odzieży sportowej.'}
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  `${WP}2025/09/Photoroom_101_20250426_081044-1024x1024.png`,
                  `${WP}2025/09/9805D375-5C0A-41E7-B1E8-4D82836ADA33-1024x1024.png`,
                  `${WP}2025/06/laserowygrawerlogotypu-2048x2048.jpg`,
                ].map((src, i) => (
                  <div key={i} className="overflow-hidden group aspect-square">
                    <Image
                      src={src}
                      alt={isEn ? `Molding example ${i + 1}` : `Przykład formowania ${i + 1}`}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="15vw"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden group">
              <Image
                src={`${WP}2025/09/PIAS2524-2048x2048.jpg`}
                alt={isEn ? 'Molded logo zipper puller' : 'Uchwyt zamka z logo w formie'}
                width={800}
                height={800}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#f5f3ef]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-10 text-[#111]">FAQ</h2>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-100">
                <button
                  className="w-full text-left px-6 py-4 font-[Jost] text-sm font-medium text-[#111] flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <span className="flex-shrink-0 text-gray-400 text-lg leading-none">
                    {openFaq === i ? '−' : '+'}
                  </span>
                </button>
                <div
                  className="overflow-hidden"
                  style={{
                    display: 'grid',
                    gridTemplateRows: openFaq === i ? '1fr' : '0fr',
                    transition: 'grid-template-rows 0.3s ease-out',
                  }}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-5 font-[Jost] text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
