import Image from 'next/image';
import FaqAccordion from './FaqAccordion';

const WP = 'https://wp.trimsandfasteners.com/wp-content/uploads/';

interface Props {
  locale: string;
  position: 'above' | 'below';
}

const FAQ_EN = [
  {
    question: 'What makes cycling and sportswear zippers different from regular zippers?',
    answer:
      'Sportswear, especially cycling apparel, is an incredibly demanding market segment where details determine success. Zippers for these applications must meet specific performance criteria that go beyond standard requirements. Functionality, low weight, aerodynamics, and reliability are key features that must be possessed not only by the material but by every single component of the outfit, even the smallest one. These zippers are engineered to perform under intense physical activity, exposure to elements, and dynamic movement while maintaining minimal weight and optimal aerodynamics to support athletic performance.',
  },
  {
    question: 'What key features should I look for in cycling apparel zippers?',
    answer:
      'The essential features for cycling and sportswear zippers include lightweight construction to avoid adding unnecessary weight, smooth and silent operation for distraction-free performance, aerodynamic design to minimize air resistance, excellent durability to withstand repeated use and washing, and reliable functionality in various weather conditions. Additional important features include water resistance for wet conditions, flexibility to move with the body, resistance to sweat and moisture, and anti-puckering properties to maintain garment fit. Reflective options are also valuable for visibility and safety during low-light conditions.',
  },
  {
    question: 'Do you have experience working with cycling apparel manufacturers?',
    answer:
      "Yes! We have extensive experience in supplying a variety of zippers for cycling apparel manufacturers. We know this industry inside and out, understanding the unique technical requirements and performance standards that cycling apparel demands. We can offer both innovative solutions for cutting-edge designs and the best deals on standard zippers for established patterns. Our deep industry knowledge means we can anticipate your needs, recommend the right solutions, and provide expert guidance throughout your product development process, ensuring optimal zipper selection for your specific applications.",
  },
  {
    question: 'What types of zippers are available for sportswear and cycling applications?',
    answer:
      'We offer an extensive range of zippers specifically suited for sportswear and cycling applications. Our selection includes lightweight concealed coil zippers (N3, N4, N5) for aerodynamic integration, water-resistant options like YKK VISLON® AquaGuard® for weather protection, reflective zippers for enhanced visibility, two-way separating zippers for ventilation control, molded plastic zippers (D5, D8) for durability, metallized finishes for aesthetic appeal, and anti-puckering designs for perfect garment fit. We also provide options with custom logos, various tape colors, and specialized finishes to match your brand identity and technical requirements.',
  },
  {
    question: 'Can you support both professional and enthusiast cycling apparel collections?',
    answer:
      "Absolutely! Regardless of whether you're creating professional apparel for pro riders competing at the highest level or a collection for cycling enthusiasts and recreational riders, we're ready to become your trusted partner. We deliver solutions perfectly tailored to your needs, understanding that professional racing apparel requires maximum performance and minimal weight, while enthusiast collections may prioritize durability, comfort, and value. Our flexible approach means we can scale our solutions from small specialized runs for elite athletes to larger production volumes for broader market appeal, all while maintaining the quality and performance standards that define successful cycling apparel.",
  },
];

const FAQ_PL = [
  {
    question: 'Co wyróżnia zamki do odzieży kolarskiej i sportowej od zwykłych zamków?',
    answer:
      'Odzież sportowa, w szczególności kolarska, to niezwykle wymagający segment rynku, gdzie każdy detal decyduje o sukcesie. Zamki do tych zastosowań muszą spełniać określone kryteria, wykraczające poza standardowe wymagania. Funkcjonalność, niska waga, aerodynamika i niezawodność to kluczowe cechy każdego elementu stroju — nawet najdrobniejszego. Zamki te są projektowane do intensywnej aktywności fizycznej, ekspozycji na czynniki atmosferyczne i dynamicznych ruchów, przy jednoczesnym zachowaniu minimalnej wagi i optymalnej aerodynamiki.',
  },
  {
    question: 'Na jakie cechy zwrócić uwagę przy wyborze zamków do odzieży kolarskiej?',
    answer:
      'Najważniejsze cechy zamków do odzieży kolarskiej i sportowej to: lekka konstrukcja, płynne i ciche działanie, aerodynamiczny profil minimalizujący opór powietrza, wytrzymałość na wielokrotne otwieranie i pranie oraz niezawodność w różnych warunkach pogodowych. Istotna jest też odporność na wodę, elastyczność dopasowująca się do ruchów ciała, odporność na pot i wilgoć oraz właściwości anti-puckering zapewniające prawidłowe leżenie odzieży. Opcje odblaskowe są szczególnie cenne dla widoczności i bezpieczeństwa w warunkach słabego oświetlenia.',
  },
  {
    question: 'Czy macie doświadczenie w pracy z producentami odzieży kolarskiej?',
    answer:
      'Tak! Mamy bogate doświadczenie w dostarczaniu zamków dla producentów odzieży kolarskiej. Doskonale znamy tę branżę od środka — rozumiemy unikalne wymagania techniczne i standardy wydajności odzieży kolarskiej. Możemy oferować zarówno innowacyjne rozwiązania do zaawansowanych projektów, jak i najlepsze oferty na standardowe zamki. Nasza głęboka wiedza branżowa pozwala nam przewidywać potrzeby klientów, rekomendować właściwe rozwiązania i zapewniać eksperckie wsparcie na każdym etapie rozwoju produktu.',
  },
  {
    question: 'Jakie typy zamków oferujecie dla odzieży sportowej i kolarskiej?',
    answer:
      'Oferujemy szeroki asortyment zamków przeznaczonych specjalnie do odzieży sportowej i kolarskiej. W naszej ofercie znajdziesz: lekkie zamki kryte spiralne (N3, N4, N5) do aerodynamicznej integracji, opcje wodoodporne do ochrony przed warunkami atmosferycznymi, zamki odblaskowe zwiększające widoczność, zamki dwustronne do regulacji wentylacji, plastikowe zamki formowane (D5, D8) zapewniające trwałość, wykończenia metalizowane oraz projekty anti-puckering dla perfekcyjnego dopasowania odzieży. Oferujemy też opcje z logo na zamówienie i różnorodne kolory taśm.',
  },
  {
    question: 'Czy obsłużycie zarówno profesjonalne, jak i amatorskie kolekcje kolarskie?',
    answer:
      'Oczywiście! Niezależnie od tego, czy tworzysz profesjonalną odzież dla zawodowców rywalizujących na najwyższym poziomie, czy kolekcję dla entuzjastów i rekreacyjnych kolarzy — jesteśmy gotowi zostać Twoim zaufanym partnerem. Dostarczamy rozwiązania idealnie dopasowane do Twoich potrzeb: profesjonalna odzież wyścigowa wymaga maksymalnej wydajności i minimalnej wagi, podczas gdy kolekcje amatorskie mogą stawiać na trwałość, komfort i wartość. Nasz elastyczny sposób pracy pozwala nam skalować rozwiązania od małych serii dla elitarnych sportowców po większe wolumeny produkcyjne.',
  },
];

export default function CyclingSportswearContent({ locale, position }: Props) {
  const isEn = locale === 'en';

  if (position === 'above') {
    return (
      <>
        {/* ── Intro ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              <div>
                <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111]">
                  {isEn
                    ? 'Nylon Zippers for Cycling & Sportswear'
                    : 'Zamki nylonowe do odzieży kolarskiej i sportowej'}
                </h2>
                <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed">
                  <p>
                    {isEn
                      ? 'We have extensive experience in supplying a variety of zippers to sportswear manufacturers. Sportswear, especially cycling apparel, is an incredibly demanding market — zippers must be lightweight, aerodynamic, durable, and reliable across thousands of open-close cycles.'
                      : 'Mamy długie doświadczenie w dostarczaniu różnego rodzaju zamków błyskawicznych dla producentów odzieży kolarskiej. Branża ubioru kolarskiego wymaga funkcjonalności, niskiej wagi, aerodynamiki i niezawodności każdego komponentu.'}
                  </p>
                  <p>
                    {isEn
                      ? 'Regardless of whether you are creating professional apparel for competitive athletes or enthusiast cycling collections, we offer both innovative solutions and the best deals on standard zippers — with full technical support at every stage.'
                      : 'Doskonale znamy tę branżę i możemy zaoferować zarówno innowacyjne rozwiązania, jak i najlepsze oferty na standardowe zamki błyskawiczne — z pełnym wsparciem technicznym na każdym etapie współpracy.'}
                  </p>
                  <p>
                    {isEn
                      ? 'Key requirements we address: smooth glide at high speed, minimal wind resistance profile, corrosion resistance from sweat exposure, and compatibility with stretch fabrics.'
                      : 'Kluczowe wymagania, które spełniamy: płynne działanie, minimalny profil oporu wiatru, odporność na korozję od potu oraz kompatybilność z tkaninami elastycznymi.'}
                  </p>
                </div>
              </div>
              <div className="overflow-hidden group">
                <Image
                  src={`${WP}2025/06/nylonsportswear.jpg`}
                  alt={isEn ? 'Cycling sportswear nylon zipper' : 'Zamek nylonowy do odzieży kolarskiej'}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  if (position === 'below') {
    return (
      <section className="bg-[#f5f3ef]">
        <FaqAccordion items={isEn ? FAQ_EN : FAQ_PL} locale={locale} />
      </section>
    );
  }

  return null;
}
