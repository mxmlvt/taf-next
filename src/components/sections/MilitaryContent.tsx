import Image from 'next/image';
import FaqAccordion from './FaqAccordion';

const WP = 'https://trimsandfasteners.com/wp-content/uploads/';

interface Props {
  locale: string;
  position: 'above' | 'below';
}

const FAQ_EN = [
  {
    question: 'What makes military zippers different from standard zippers?',
    answer:
      'Military zippers are specifically engineered to meet the demanding requirements of tactical and combat applications. The key difference is the reduced Near-Infrared (NIR) signature, meaning the zipper\'s light reflection percentage is similar to the base fabric, making the wearer less visible to night vision equipment. Military-grade zippers are also designed for extreme durability to withstand harsh conditions and intensive use in specialized equipment. We supply top-quality zippers that provide extra strength for use in demanding military environments, from uniforms and personal protective equipment (PPE) to tactical gear and field equipment.',
  },
  {
    question: 'What is NIR signature and why is it important?',
    answer:
      'NIR (Near-Infrared) signature refers to how materials reflect infrared light, which is visible through night vision devices. For military applications, it\'s crucial that zippers and other finishes have a light reflection percentage similar to the base fabric to maintain tactical concealment. A zipper with improper NIR signature can create a visible contrast under night vision, compromising the wearer\'s position. We produce zippers with reduced NIR signature in various colors and can create custom colors upon request to ensure perfect matching with your specific fabric requirements and operational needs.',
  },
  {
    question: 'Can you provide custom colors and quick samples for military projects?',
    answer:
      'Absolutely! We routinely handle quick sample requests, prepare custom colors, and develop products based on client specifications. Understanding the urgency and precision required in military applications, we\'ve streamlined our processes to respond rapidly to sample requests. Whether you need standard military colors or specific custom shades to match your fabric with proper NIR characteristics, we can accommodate your requirements. Our experience in military applications means we understand the technical specifications and can work efficiently to deliver samples and production runs that meet your exact needs.',
  },
  {
    question: 'What quality standards do you maintain for military-grade zippers?',
    answer:
      'We\'re extremely selective with our zipper suppliers, working exclusively with factories that manufacture their critical zipper components in-house. This ensures complete quality control throughout the manufacturing process and guarantees consistency in performance and NIR characteristics. Our military-grade plastic zippers are specifically designed to provide extra strength for specialized equipment operating in harsh conditions. By maintaining strict supplier standards and working only with manufacturers who control their entire production process, we ensure that every zipper meets the demanding requirements of military and tactical applications.',
  },
  {
    question: 'What types of military equipment and applications do you supply zippers for?',
    answer:
      'We supply all types of zippers used in military applications, covering a comprehensive range of equipment and gear. This includes tactical uniforms, combat jackets, personal protective equipment (PPE), bulletproof vests, field packs and backpacks, tactical vests, sleeping systems, and specialized equipment bags. We offer both nylon coil zippers for flexibility and adaptability, and military-grade plastic zippers for applications requiring extra strength in harsh conditions. Whether you need water-resistant options, two-way zippers, concealed versions, or heavy-duty separating zippers, we have the experience and product range to meet your specific military application requirements.',
  },
];

const FAQ_PL = [
  {
    question: 'Co różni zamki militarne od standardowych?',
    answer:
      'Zamki militarne są specjalnie zaprojektowane z myślą o wymaganiach zastosowań taktycznych i bojowych. Kluczową różnicą jest zredukowana sygnatura w bliskiej podczerwieni (NIR) — zamek odbija światło w podobnym stopniu co baza tkaniny, co ogranicza wykrywalność żołnierza przez urządzenia noktowizyjne. Zamki klasy militarnej cechuje również wyjątkowa trwałość, umożliwiająca pracę w ekstremalnych warunkach i intensywne użytkowanie w sprzęcie specjalistycznym. Dostarczamy wysokiej jakości zamki zapewniające dodatkową wytrzymałość — od mundurów i środków ochrony indywidualnej (PPE) po sprzęt taktyczny i wyposażenie polowe.',
  },
  {
    question: 'Czym jest sygnatura NIR i dlaczego jest ważna?',
    answer:
      'Sygnatura NIR (Near-Infrared) opisuje sposób, w jaki materiały odbijają światło podczerwone widoczne przez urządzenia noktowizyjne. W zastosowaniach militarnych kluczowe jest, aby zamki i inne elementy wykończenia miały zbliżony procent odbicia światła do bazy tkaniny — tylko wtedy kamuflarz zachowuje pełną skuteczność. Zamek o nieprawidłowej sygnaturze NIR może tworzyć widoczny kontrast przez noktowizor, ujawniając pozycję żołnierza. Produkujemy zamki z zredukowaną sygnaturą NIR w różnych kolorach, a na życzenie opracowujemy dedykowane odcienie dopasowane do konkretnych tkanin i wymogów operacyjnych.',
  },
  {
    question: 'Czy oferujecie niestandardowe kolory i szybkie próbki dla projektów militarnych?',
    answer:
      'Oczywiście! Regularnie realizujemy szybkie zamówienia próbkowe, przygotowujemy niestandardowe kolory i rozwijamy produkty według specyfikacji klienta. Rozumiejąc pilność i precyzję wymaganą w zastosowaniach militarnych, usprawniliśmy nasze procesy, aby sprawnie odpowiadać na zapytania o próbki. Niezależnie od tego, czy potrzebujesz standardowych kolorów militarnych, czy specyficznych odcieni z właściwą charakterystyką NIR, jesteśmy w stanie sprostać Twoim wymaganiom. Nasze doświadczenie w realizacji zamówień militarnych oznacza, że doskonale rozumiemy specyfikacje techniczne i potrafimy efektywnie dostarczyć próbki oraz serie produkcyjne spełniające dokładnie Twoje potrzeby.',
  },
  {
    question: 'Jakie standardy jakości utrzymujecie dla zamków klasy militarnej?',
    answer:
      'Jesteśmy bardzo selektywni w wyborze dostawców zamków — współpracujemy wyłącznie z fabrykami, które wytwarzają kluczowe komponenty zamków we własnym zakresie. Gwarantuje to pełną kontrolę jakości na każdym etapie procesu produkcyjnego i zapewnia spójność parametrów użytkowych oraz właściwości NIR. Nasze plastikowe zamki klasy militarnej są specjalnie zaprojektowane z myślą o zwiększonej wytrzymałości w sprzęcie specjalistycznym pracującym w trudnych warunkach. Dzięki rygorystycznym standardom wobec dostawców i współpracy wyłącznie z producentami kontrolującymi cały proces wytwarzania, każdy zamek spełnia wymagania zastosowań militarnych i taktycznych.',
  },
  {
    question: 'Do jakiego sprzętu i zastosowań militarnych dostarczacie zamki?',
    answer:
      'Dostarczamy wszystkie typy zamków błyskawicznych stosowanych w zastosowaniach militarnych, obejmując szeroki zakres sprzętu i wyposażenia. Obejmuje to mundury taktyczne, kurtki bojowe, środki ochrony indywidualnej (PPE), kamizelki kuloodporne, plecaki i torby polowe, kamizelki taktyczne, systemy śpiące oraz specjalistyczne torby na sprzęt. Oferujemy zarówno zamki nylonowe spiralne — elastyczne i wszechstronne — jak i plastikowe zamki klasy militarnej do zastosowań wymagających dodatkowej wytrzymałości w trudnych warunkach. Niezależnie od tego, czy potrzebujesz opcji wodoodpornych, zamków dwustronnych, ukrytych czy mocnych zamków rozdzielających, dysponujemy doświadczeniem i asortymentem, by sprostać Twoim wymaganiom.',
  },
];

export default function MilitaryContent({ locale, position }: Props) {
  const isEn = locale === 'en';

  if (position === 'above') {
    return (
      <>
        {/* ── Nylon / NIR ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              <div>
                <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111]">
                  {isEn
                    ? 'Nylon Zippers for Military and PPE'
                    : 'Zamki nylonowe dla wojska i PPE'}
                </h2>
                <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed">
                  <p>
                    {isEn
                      ? 'We supply all military-grade zipper types with emphasis on reduced Near-Infrared (NIR) signature capabilities. NIR-compliant zippers match the light reflection properties of the surrounding fabric — critical for camouflage effectiveness in the field.'
                      : 'Dostarczamy wszystkie typy zamków błyskawicznych używanych w zastosowaniach wojskowych. Zamki błyskawiczne dla wojska muszą charakteryzować się zmniejszoną sygnaturą w bliskiej podczerwieni (NIR), tzn. zamek musi odbijać światło w podobny sposób jak baza tkaniny.'}
                  </p>
                  <p>
                    {isEn
                      ? 'We develop custom colors based on fabric swatches and NATO specification requirements. Our extensive experience in fulfilling military tenders means we understand exactly what documentation, testing, and compliance is required.'
                      : 'Wytwarzamy produkty w różnych kolorach, z możliwością opracowania dedykowanych odcieni według próbek klienta. Nasze doświadczenie w realizacji przetargów wojskowych oznacza, że doskonale rozumiemy wymaganą dokumentację, testy i wymogi zgodności.'}
                  </p>
                </div>
              </div>
              <div className="overflow-hidden group">
                <Image
                  src={`${WP}2025/06/nylonzippers5-scaled.png`}
                  alt={isEn ? 'Military nylon zippers NIR' : 'Zamki nylonowe militarne NIR'}
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Military-Grade Plastic ── */}
        <section className="py-16 bg-[#f5f3ef]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              <div className="overflow-hidden group">
                <Image
                  src={`${WP}2025/06/militarntyzamekplastikowy-1024x1024.jpg`}
                  alt={isEn ? 'Military zippers on camo fabric' : 'Zamki militarne na tkaninie moro'}
                  width={800}
                  height={800}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111]">
                  {isEn ? 'Military-Grade Plastic Zippers' : 'Plastikowe zamki klasy militarnej'}
                </h2>
                <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed mb-8">
                  <p>
                    {isEn
                      ? 'We supply top quality zippers to provide extra strength for zippers used in specialized equipment and harsh conditions. We\'re extremely selective with our zipper suppliers, working exclusively with factories that manufacture their critical zipper components in-house.'
                      : 'Dostarczamy zamki najwyższej jakości zapewniające dodatkową wytrzymałość w sprzęcie specjalistycznym pracującym w trudnych warunkach. Jesteśmy bardzo selektywni w wyborze dostawców — współpracujemy wyłącznie z fabrykami wytwarzającymi kluczowe komponenty zamków we własnym zakresie.'}
                  </p>
                </div>
                <div className="overflow-hidden group max-w-[70%]">
                  <Image
                    src={`${WP}2025/06/militarnyzamekplastikowy3-1024x576.jpg`}
                    alt={isEn ? 'Military plastic zipper close-up' : 'Zamek plastikowy militarny zbliżenie'}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 70vw, 35vw"
                  />
                </div>
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
