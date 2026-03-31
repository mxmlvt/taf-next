import Image from 'next/image';
import FadeIn from '@/components/ui/FadeIn';
import FaqAccordion from '@/components/sections/FaqAccordion';

const WP = 'https://wp.trimsandfasteners.com/wp-content/uploads/';

interface Props {
  locale: string;
  position: 'above' | 'below';
}

const FAQ_EN = [
  {
    question: 'What makes metal zippers different from other zipper types?',
    answer: 'Metal zippers are a traditional type of zipper that requires high precision in terms of quality and offers exceptional durability for demanding applications. They are distinguished by their high resistance to atmospheric conditions and mechanical stress. The defining characteristic of quality metal zippers is the smoothness of their teeth – all metal zippers in our offer feature smooth teeth. Metal zippers provide both a functional closure and a distinctive aesthetic element, making them ideal for applications where strength, durability, and visual appeal are equally important.',
  },
  {
    question: 'What materials are used for metal zipper teeth?',
    answer: 'Metal zipper teeth are typically made from several premium materials. Brass teeth are the most common, formed from specially profiled wire in Y-type configuration or attached individually as European, Swiss, or polished teeth. We also offer zippers with teeth made of stainless steel for superior durability and corrosion resistance, as well as teeth injection-molded from zinc-aluminum alloy. Each material offers different properties in terms of strength, appearance, and resistance to environmental factors, allowing you to choose the best option for your specific application.',
  },
  {
    question: 'Why should I choose stainless steel zippers for workwear?',
    answer: 'Stainless steel zippers are a more durable alternative to brass teeth, specifically designed for industries requiring industrial laundering, such as the workwear rental industry. The stainless steel material is resistant to the harsh conditions of industrial washing processes, ensuring longevity even with frequent, intensive laundering. Additionally, steel is a fully recyclable material, making stainless steel zippers an environmentally responsible choice that allows for simple material recovery processes in workwear applications. This combination of durability and sustainability makes them ideal for professional garments.',
  },
  {
    question: 'What finishes and colors are available for metal zippers?',
    answer: 'We offer a wide range of premium finishes and colors to match your design aesthetic. Available options include polished teeth in antique copper for a warm, vintage look, antique silver with standard Y-type teeth for a classic appearance, light antique brass color for traditional styling, and black oxide finishes for modern, sleek designs. Each finish is carefully applied to ensure consistent quality and appearance. These various finishes allow metal zippers to complement different hardware such as rivets, snaps, and buckles, creating a cohesive and professional overall design.',
  },
  {
    question: 'What are the best applications for metal zippers?',
    answer: 'We specialize in metal zippers used as functional closures in workwear, footwear, and luggage where durability is paramount. Metal zippers excel in applications demanding high strength and resistance to mechanical stress, such as leather jackets, jeans, bags, and shoes. They\'re particularly suitable for products that require both a strong closure and visual impact. Their superior durability and resistance to atmospheric conditions make them the preferred choice for professional applications and products subjected to intensive use or harsh environmental conditions.',
  },
];

const FAQ_PL = [
  {
    question: 'Co odróżnia zamki metalowe od innych typów zamków?',
    answer: 'Zamki metalowe to tradycyjny typ zamków wymagający wysokiej precyzji wykonania i oferujący wyjątkową trwałość w wymagających zastosowaniach. Wyróżniają się wysoką odpornością na warunki atmosferyczne i obciążenia mechaniczne. Cechą charakterystyczną zamków metalowych wysokiej jakości jest gładkość zębów — wszystkie zamki metalowe w naszej ofercie posiadają gładkie zęby. Zamki metalowe zapewniają zarówno funkcjonalne zapięcie, jak i wyrazisty element estetyczny.',
  },
  {
    question: 'Z jakich materiałów wykonane są zęby zamków metalowych?',
    answer: 'Zęby zamków metalowych wykonuje się z kilku materiałów premium. Najczęstsze są zęby mosiężne, formowane ze specjalnie profilowanego drutu w konfiguracji Y lub mocowane indywidualnie jako zęby europejskie, szwajcarskie lub polerowane. Oferujemy również zamki z zębami ze stali nierdzewnej o wyższej trwałości i odporności na korozję, a także zęby wtryskiwane ze stopu cynku i aluminium.',
  },
  {
    question: 'Dlaczego warto wybrać zamki ze stali nierdzewnej do odzieży roboczej?',
    answer: 'Zamki ze stali nierdzewnej to trwalsza alternatywa dla mosiężnych, przeznaczona do branż wymagających prania przemysłowego, jak wynajem odzieży roboczej. Stal nierdzewna jest odporna na intensywne procesy prania, zapewniając długotrwałość nawet przy częstym użytkowaniu. Dodatkowo stal jest w pełni recyklingowalnym materiałem, co czyni te zamki środowiskowo odpowiedzialnym wyborem.',
  },
  {
    question: 'Jakie wykończenia i kolory są dostępne dla zamków metalowych?',
    answer: 'Oferujemy szeroki zakres wykończeń premium: zęby polerowane w kolorze miedzi antycznej dla ciepłego, vintage wyglądu, srebro antyczne ze standardowymi zębami Y dla klasycznego efektu, jasny mosiądz antyczny dla tradycyjnego stylu oraz wykończenia czarnym oksydem dla nowoczesnych, eleganckich projektów. Każde wykończenie jest starannie nanoszone dla zapewnienia spójnej jakości i wyglądu.',
  },
  {
    question: 'Do jakich zastosowań najlepiej nadają się zamki metalowe?',
    answer: 'Specjalizujemy się w zamkach metalowych jako funkcjonalnych zapięciach w odzieży roboczej, obuwiu i bagażach, gdzie trwałość jest najważniejsza. Zamki metalowe doskonale sprawdzają się w zastosowaniach wymagających dużej wytrzymałości i odporności na naprężenia mechaniczne, takich jak kurtki skórzane, dżinsy, torby i buty.',
  },
];

export default function MetalZippersContent({ locale, position }: Props) {
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
                  {isEn ? 'Characteristics of Metal Zippers' : 'Charakterystyka zamków metalowych'}
                </h2>
                <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed">
                  <p>
                    {isEn
                      ? 'Metal zippers are a traditional fastener requiring precision craftsmanship and offering exceptional durability. Teeth are typically made of brass (Y-type), European/Swiss style, or stainless steel.'
                      : 'Zamki metalowe to tradycyjny typ zamków, który wymaga dużej precyzji pod względem jakości, szczególnie w zastosowaniach wymagających dużej wytrzymałości.'}
                  </p>
                  <p>
                    {isEn
                      ? 'The smoothness of the teeth is a key quality indicator. High-quality metal zippers glide effortlessly and maintain their appearance even after years of intensive use — making them the preferred choice for premium fashion and heritage products.'
                      : 'Zęby wykonane są zazwyczaj z mosiądzu z specjalnie profilowanego drutu (zęby typu Y) lub przyłączane jeden po drugim – tzw. zęby europejskie/szwajcarskie lub ząbki polerowane. Oferowane są także zamki z zębami ze stali nierdzewnej.'}
                  </p>
                </div>
              </FadeIn>
              <FadeIn direction="left" delay={0.1} className="relative overflow-hidden group">
                <Image
                  src={`${WP}2025/08/PIAS2361-scaled.jpg`}
                  alt={isEn ? 'Metal zipper close-up' : 'Zamek metalowy z bliska'}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── Tooth Style Showcase ── */}
        <section className="py-14 bg-[#f5f3ef]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                {
                  img: `${WP}2025/08/white-Photoroom-9-1024x1024.png`,
                  label: isEn ? 'Polished Teeth – Antique Copper' : 'Zęby polerowane – miedź antyczna',
                },
                {
                  img: `${WP}2025/08/white-Photoroom-10-1024x1018.png`,
                  label: isEn ? 'Antique Silver – Standard Y-type' : 'Srebro antyczne – standard typ Y',
                },
                {
                  img: `${WP}2025/08/white-Photoroom-11-1024x1024.png`,
                  label: isEn ? 'Standard Teeth – Light Antique Brass' : 'Zęby standardowe – jasny mosiądz antyczny',
                },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.1} className="text-center">
                  <div className="overflow-hidden group bg-white p-4 mb-4">
                    <Image
                      src={item.img}
                      alt={item.label}
                      width={400}
                      height={400}
                      className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                      sizes="30vw"
                    />
                  </div>
                  <p className="font-[Jost] text-sm text-gray-600">{item.label}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Stainless Steel ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              <FadeIn direction="right" className="relative overflow-hidden group">
                <Image
                  src={`${WP}2025/08/white-Photoroom-12-1024x967.png`}
                  alt={isEn ? 'Stainless steel zipper' : 'Zamek ze stali nierdzewnej'}
                  width={600}
                  height={567}
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </FadeIn>
              <FadeIn direction="left" delay={0.1}>
                <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111]">
                  {isEn ? 'Stainless Steel Zipper' : 'Zamek ze stali nierdzewnej'}
                </h2>
                <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed">
                  <p>
                    {isEn
                      ? 'Stainless steel offers an alternative to brass for industrial laundering applications. Its corrosion resistance makes it ideal for the workwear rental industry where garments undergo frequent, intensive washing cycles.'
                      : 'Zamki z ząbkami ze stali nierdzewnej są bardziej wytrzymałą alternatywą dla ząbków mosiężnych do zastosowania w branżach wymagających prania przemysłowego, np. w odzieży roboczej na wynajem.'}
                  </p>
                  <p>
                    {isEn
                      ? 'Additionally, stainless steel zippers are fully recyclable, making them an environmentally conscious choice aligned with modern sustainability requirements in workwear supply chains.'
                      : 'Stal nierdzewna jest odporna na pranie przemysłowe, umożliwiając użycie w ubraniach wymagających takiego procesu. Materiał jest w pełni recyclingowalny, wspierając prosty proces odzyskiwania materiałów.'}
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </>
    );
  }

  // position === 'below' — FAQ
  return (
    <section className="bg-[#f5f3ef]">
      <FaqAccordion items={isEn ? FAQ_EN : FAQ_PL} locale={locale} />
    </section>
  );
}
