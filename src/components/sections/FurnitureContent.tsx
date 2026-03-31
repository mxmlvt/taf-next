import Image from 'next/image';
import FaqAccordion from './FaqAccordion';

const WP = 'https://wp.trimsandfasteners.com/wp-content/uploads/';

interface Props { locale: string; position: 'above' | 'below'; }

const FAQ_EN = [
  {
    question: 'What types of concealed zippers are available for furniture applications?',
    answer:
      'We offer three specialized concealed zipper types for furniture and upholstery applications. The 45-ECH is a YKK concealed zipper with flat elements and a coil woven into the tape, offering excellent flexibility and perfect for furniture, upholstery, and automotive industries. The 5-CC is the strongest concealed zipper for heavy-duty applications, ideal for automotive seating and furniture requiring maximum durability. The 5N Flexible Tape allows sewing on curves and provides vertical flexibility, making it excellent for curved applications and constructions requiring flexibility. All types create discreet, aesthetic connections that integrate seamlessly with fabric surfaces.',
  },
  {
    question: "What's the difference between 45-ECH and 5-CC zippers?",
    answer:
      "The key difference lies in flexibility versus strength. The 45-ECH features flat elements with a coil woven into the tape, providing great flexibility and making it an excellent choice for applications requiring adaptability to different materials and shapes. It's perfect when you need more flexibility than the 5-CC offers. The 5-CC, on the other hand, is the strongest concealed zipper designed specifically for heavy-duty applications where maximum durability is paramount, such as automotive seating and heavy furniture. Both create concealed connections, but your choice depends on whether your application prioritizes flexibility (45-ECH) or maximum strength (5-CC).",
  },
  {
    question: 'When should I use flexible tape zippers (5N) for furniture?',
    answer:
      "The 5N Flexible Tape zipper is specifically designed for curved applications and situations where construction requires vertical flexibility. This makes it ideal for furniture pieces with curved surfaces, rounded edges, or contoured designs where a standard zipper would create tension or pulling. It allows for sewing along curves without compromising the zipper's functionality or the aesthetic appearance of the finished piece. This flexibility ensures the zipper works harmoniously with the furniture's shape rather than fighting against it, resulting in a professional finish that maintains the integrity of the design while providing reliable closure functionality.",
  },
  {
    question: 'What purchasing options are available for furniture zippers?',
    answer:
      'We offer flexible purchasing options to suit different production needs and workflows. All our furniture zippers are available as non-separating (closed-end) zippers, which come ready to install at specific lengths. We also offer zipper chain tape and sliders sold separately, giving you the flexibility to cut zippers to custom lengths as needed during production. This option is particularly valuable for manufacturers who need to accommodate various furniture sizes or prefer to maintain inventory of components rather than pre-made zippers. Both options ensure you have the right solution for your specific production requirements and inventory management preferences.',
  },
  {
    question: 'What industries and applications benefit most from concealed furniture zippers?',
    answer:
      "Concealed furniture zippers excel in multiple industries where aesthetics and functionality are equally important. In the furniture industry, they're used extensively in upholstered furniture including covers, seats, backrests, headrests, and modular components requiring easy assembly and disassembly. The automotive industry utilizes these zippers in seating, interior panels, and upholstery where durability and clean aesthetics are essential. The upholstery industry benefits from their ability to create durable but discreet fabric connections without interfering with design aesthetics. Thanks to their flat design, uniform colors, and precise guidance, these zippers integrate perfectly with fabric surfaces, contributing to modern interiors while maintaining structural integrity and ease of maintenance.",
  },
];

const FAQ_PL = [
  {
    question: 'Jakie typy zamków krytych są dostępne do zastosowań meblowych?',
    answer:
      'Oferujemy trzy specjalistyczne typy zamków krytych do meblarstwa i tapicerstwa. 45-ECH to zamek kryty YKK z płaskimi elementami i spiralą wtkaną w taśmę — doskonała elastyczność, idealny do meblarstwa, tapicerstwa i motoryzacji. 5-CC to najmocniejszy zamek kryty do wysoko obciążonych zastosowań, idealny do siedzeń samochodowych i mebli wymagających maksymalnej trwałości. Taśma elastyczna 5N umożliwia wszywanie po łuku i zapewnia elastyczność pionową. Wszystkie typy tworzą dyskretne połączenia integrujące się z powierzchnią tkaniny.',
  },
  {
    question: 'Czym różni się zamek 45-ECH od 5-CC?',
    answer:
      'Kluczowa różnica to elastyczność kontra wytrzymałość. 45-ECH ma płaskie elementy z spiralą wtkaną w taśmę, zapewniając dużą elastyczność — idealny gdy potrzebna jest większa adaptacyjność do różnych materiałów i kształtów. 5-CC to z kolei najmocniejszy zamek kryty zaprojektowany do wysoko obciążonych zastosowań wymagających maksymalnej trwałości, jak siedzenia samochodowe czy ciężkie meble. Oba tworzą kryte połączenia, ale wybór zależy od tego, czy aplikacja wymaga elastyczności (45-ECH) czy maksymalnej wytrzymałości (5-CC).',
  },
  {
    question: 'Kiedy stosować zamki na taśmie elastycznej (5N) w meblach?',
    answer:
      'Taśma elastyczna 5N jest przeznaczona do zakrzywionych aplikacji i sytuacji wymagających elastyczności pionowej. Idealna do mebli z zakrzywionymi powierzchniami, zaokrąglonymi krawędziami lub konturowymi wzorami. Umożliwia wszywanie wzdłuż krzywizn bez kompromisów dla funkcjonalności zamka ani estetyki gotowego produktu. Elastyczność sprawia, że zamek harmonijnie współpracuje z kształtem mebla, zapewniając profesjonalne wykończenie.',
  },
  {
    question: 'Jakie opcje zakupu są dostępne dla zamków meblowych?',
    answer:
      'Oferujemy elastyczne opcje zakupu dopasowane do różnych potrzeb produkcyjnych. Wszystkie zamki meblowe dostępne są jako zamki nierozdzielne (zamknięte), gotowe do montażu w określonych długościach. Oferujemy też taśmy zamkowe i suwaki sprzedawane oddzielnie, co umożliwia przycinanie zamków do niestandardowych długości podczas produkcji. Opcja ta jest szczególnie cenna dla producentów obsługujących różne rozmiary mebli lub preferujących utrzymywanie zapasów komponentów.',
  },
  {
    question: 'Jakie branże i zastosowania czerpią największe korzyści z krytych zamków meblowych?',
    answer:
      'Kryte zamki meblowe sprawdzają się doskonale wszędzie tam, gdzie estetyka i funkcjonalność są równie ważne. W meblarstwie stosuje się je w meblach tapicerowanych: pokrowcach, siedzeniach, oparciach, zagłówkach i komponentach modułowych. Motoryzacja wykorzystuje je w siedzeniach, panelach wnętrz i tapicerce. Branża tapicerska korzysta z ich zdolności do tworzenia trwałych, dyskretnych połączeń. Dzięki płaskiemu profilowi zamki te doskonale integrują się z powierzchniami tkanin.',
  },
];

export default function FurnitureContent({ locale, position }: Props) {
  const isEn = locale === 'en';

  if (position === 'below') {
    return (
      <section className="bg-[#f5f3ef]">
        <FaqAccordion items={isEn ? FAQ_EN : FAQ_PL} locale={locale} />
      </section>
    );
  }

  return (
    <>
      {/* ── 45-ECH ── */}
      <section className="py-16 bg-[#f5f3ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111]">45-ECH</h2>
              <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed">
                <p>
                  {isEn
                    ? 'A concealed zipper by YKK with flat elements and a coil woven into the tape.'
                    : 'Zamek kryty produkcji YKK o płaskich elementach oraz spirali wtkanej w taśmę.'}
                </p>
                <p>
                  {isEn
                    ? 'An excellent choice for applications requiring more flexibility than the 5-CC zipper offers. This zipper performs perfectly in concealed applications within the furniture, upholstery, and automotive industries.'
                    : 'Doskonały wybór do aplikacji wymagających większej elastyczności niż oferowana przez zamek 5-CC. Świetnie sprawdza się w krytych aplikacjach w branży meblowej, tapicerskiej i automotive.'}
                </p>
                <p>
                  {isEn
                    ? 'It provides great flexibility and an excellent concealed connection for a wide variety of materials. We offer this zipper in a non-separating (closed-end) version, as well as chain tape and sliders sold separately.'
                    : 'Doskonała elastyczność i świetne kryte połączenie dla wielu różnych materiałów. Oferujemy ten zamek w wersji nierozdzielnej jak również jako taśma zamkowa i suwaki sprzedawane oddzielnie.'}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[`${WP}2025/09/45ech1.png`, `${WP}2025/09/45ech2.png`].map((src, i) => (
                <div key={i} className="overflow-hidden group bg-white h-72 flex items-center justify-center p-3">
                  <Image
                    src={src}
                    alt={`45-ECH zipper ${i + 1}`}
                    width={300}
                    height={280}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    sizes="25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5-CC ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div className="overflow-hidden group bg-[#f5f3ef] h-72 flex items-center justify-center p-4">
              <Image
                src={`${WP}2025/09/5-CC-LONG1.png`}
                alt={isEn ? '5-CC heavy duty zipper' : 'Zamek 5-CC ciężki'}
                width={600}
                height={280}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111]">5-CC</h2>
              <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed">
                <p>
                  {isEn
                    ? 'The strongest concealed zipper for heavy-duty applications.'
                    : 'Najmocniejszy kryty zamek do wysoko obciążonych aplikacji.'}
                </p>
                <p>
                  {isEn
                    ? 'Used in automotive seating and furniture.'
                    : 'Zastosowanie w siedzeniach samochodowych oraz w meblarstwie.'}
                </p>
                <p>
                  {isEn
                    ? 'We offer the zipper as a non-separating (closed-end) zipper, or as zipper chain and sliders.'
                    : 'Oferujemy zamek w postaci zamka nierozdzielnego lub taśmy zamkowej i suwaków.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5N Flexible Tape ── */}
      <section className="py-16 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-white">
                {isEn ? '5N Flexible Tape' : '5N Taśma elastyczna'}
              </h2>
              <div className="space-y-4 font-[Jost] text-white text-sm leading-relaxed">
                <p>
                  {isEn
                    ? 'Zipper chain that allows for sewing on a curve, excellent for curved applications as well as in places where the construction requires vertical flexibility.'
                    : 'Taśma zamkowa umożliwiająca wszywanie po łuku, doskonała do zakrzywionych aplikacji jak również w miejscach wymagających elastyczności pionowej.'}
                </p>
                <p>
                  {isEn
                    ? 'We offer it as chain tape and sliders sold separately.'
                    : 'Oferujemy jako taśmę i suwaki sprzedawane oddzielnie.'}
                </p>
              </div>
            </div>
            <div className="overflow-hidden group bg-white/5 h-72 flex items-center justify-center p-4">
              <Image
                src={`${WP}2025/09/5nflexibletape.png`}
                alt={isEn ? '5N flexible tape zipper' : 'Zamek 5N taśma elastyczna'}
                width={600}
                height={280}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
