import Image from 'next/image';
import FaqAccordion from './FaqAccordion';

const WP = 'https://wp.trimsandfasteners.com/wp-content/uploads/';

interface Props { locale: string; position: 'above' | 'below'; }

const FAQ_EN = [
  {
    question: "What safety standards must zippers for children's clothing meet?",
    answer:
      "Zippers for children's clothing must meet rigorous safety, quality, and functionality requirements specific to the children's apparel industry. Crucially, compliance with norms regarding the detachment of small parts is vital, as these can pose a choking hazard for young children. Only accessories from trusted manufacturers who meet these standards and have quality departments aware of such requirements should be used. All zippers we produce for children's apparel manufacturers are soft, operate smoothly without snagging, have smooth teeth, and meet all quality standards. We work exclusively with manufacturers that understand and comply with health and environmental standards for children's products.",
  },
  {
    question: "What design options are available for children's zippers?",
    answer:
      "The world of children's fashion is primarily about joyful colors, and zippers offer unlimited design possibilities. With basic zippers, simply changing the tooth color to contrast with the tape creates a great effect. For coil zippers, we can change the color of the thread used to sew the coil to the tape for an interesting look. Molded zippers can even have different colors on each side, offering exceptional design flexibility. Common types used in children's collections include plastic and coil zippers, available in vibrant colors and finishes. We also offer glow-in-the-dark zippers, neon logos, decorative pullers, and even licensed Disney products including zippers and snaps.",
  },
  {
    question: 'How do magnetic auto-lock zippers help children dress themselves?',
    answer:
      "An interesting zipper for preschool children's clothing is one with a magnetic auto-lock closure, which helps children develop independence in dressing themselves. From experience, we know that inserting the zipper end into the box is often the biggest challenge for kids. A zipper with a magnetic closure solves this problem by automatically guiding and securing the zipper parts together, making it much easier for small hands to manage. This feature is particularly valuable for jackets, sweatshirts, and other garments where children need to be able to dress independently, building confidence and motor skills while ensuring proper garment closure.",
  },
  {
    question: 'How do glow-in-the-dark zippers work and why do kids love them?',
    answer:
      'Glow-in-the-dark zippers use photoluminescence technology, featuring elements injected with specialized plastic enriched with photoluminescent pigments. These pigments absorb and store light energy, then slowly release it as visible greenish or bluish light. The process is extremely simple and safe: just illuminate the zipper for a moment with a flashlight, lamp, or sunlight, and the teeth will glow beautifully in the dark. The longer and more intense the light exposure, the brighter and longer-lasting the effect. Kids absolutely love this interactive element – they can "charge" their own clothes and enjoy the magical glow after lights go out, making bedtime routines more fun and exciting!',
  },
  {
    question: "What types of zippers are best for different children's products?",
    answer:
      "Different children's products require specific zipper types for optimal performance and safety. For everyday clothing like jackets and sweatshirts, we recommend coil zippers (N3, N4, N5) or molded plastic zippers (D3, D5) that are soft, smooth, and safe for delicate skin. For sleeping bags, we offer specialized separating zippers with smooth operation for easy access. Stroller covers benefit from durable, weather-resistant options. All our zippers feature smooth teeth that won't snag or pinch, operate quietly and reliably, and are available in vibrant colors and fun designs. We also provide elastic tape options for stretch garments and anti-puckering designs to maintain proper garment fit throughout active play.",
  },
];

const FAQ_PL = [
  {
    question: 'Jakie normy bezpieczeństwa muszą spełniać zamki do odzieży dziecięcej?',
    answer:
      'Zamki do odzieży dziecięcej muszą spełniać rygorystyczne wymagania dotyczące bezpieczeństwa, jakości i funkcjonalności. Kluczowe znaczenie ma zgodność z normami dotyczącymi odrywania się małych elementów — mogą one stanowić zagrożenie zadławienia dla małych dzieci. Wszystkie zamki przeznaczone dla producentów odzieży dziecięcej są miękkie, działają płynnie bez zaczepiania, mają gładkie ząbki i spełniają wszystkie standardy jakości. Współpracujemy wyłącznie z producentami rozumiejącymi i przestrzegającymi norm zdrowotnych i ekologicznych dla produktów dziecięcych.',
  },
  {
    question: 'Jakie opcje projektowe są dostępne dla zamków dziecięcych?',
    answer:
      'Świat mody dziecięcej to przede wszystkim radosne kolory, a zamki dają nieograniczone możliwości projektowe. W przypadku zamków podstawowych samo zmienienie koloru ząbków w kontraście do taśmy daje świetny efekt. W zamkach spiralnych możemy zmienić kolor nici przyszywającej spiralę do taśmy. Zamki formowane mogą mieć nawet inny kolor po każdej stronie, co daje wyjątkową elastyczność projektową. Oferujemy też zamki świecące w ciemności, neony z logo, ozdobne suwaki, a nawet licencjonowane produkty Disney, w tym zamki i napy.',
  },
  {
    question: 'Jak zamki magnetyczne pomagają dzieciom w samodzielnym ubieraniu?',
    answer:
      'Zamek z magnetycznym zamknięciem auto-lock to świetne rozwiązanie dla odzieży dzieci przedszkolnych, pomagające im rozwijać samodzielność w ubieraniu. Z doświadczenia wiemy, że włożenie końcówki zamka do pudełka jest często największym wyzwaniem dla małych dzieci. Zamek z magnetycznym zamknięciem rozwiązuje ten problem, automatycznie naprowadzając i łącząc elementy zamka, co znacznie ułatwia jego obsługę małymi rączkami. Ta funkcja jest szczególnie cenna w kurtkach, bluzach i innych ubraniach, gdzie dzieci muszą się samodzielnie ubierać.',
  },
  {
    question: 'Jak działają zamki świecące w ciemności i dlaczego dzieci je uwielbiają?',
    answer:
      'Zamki świecące w ciemności wykorzystują technologię fotoluminescencji — ich elementy są wtryskiwane ze specjalistycznego tworzywa wzbogaconego w pigmenty fotoluminescencyjne. Pigmenty te absorbują i magazynują energię świetlną, a następnie powoli uwalniają ją w postaci widocznego, zielonkawego lub niebieskiego światła. Wystarczy na chwilę oświetlić zamek latarką, lampką lub słońcem, a ząbki zaczną pięknie świecić w ciemności. Im dłuższa i intensywniejsza ekspozycja na światło, tym jaśniejszy i dłużej trwający efekt. Dzieci uwielbiają ten interaktywny element — mogą "ładować" swoje ubrania i cieszyć się magicznym blaskiem po zgaszeniu świateł!',
  },
  {
    question: 'Jakie typy zamków sprawdzają się najlepiej w różnych produktach dla dzieci?',
    answer:
      'Różne produkty dziecięce wymagają określonych typów zamków. Do codziennej odzieży, jak kurtki i bluzy, polecamy zamki spiralne (N3, N4, N5) lub plastikowe formowane (D3, D5), które są miękkie, gładkie i bezpieczne dla delikatnej skóry. Do śpiworów oferujemy specjalistyczne zamki rozdzielne z płynnym działaniem. Pokrywy wózków korzystają z opcji trwałych i odpornych na warunki atmosferyczne. Wszystkie nasze zamki mają gładkie ząbki, działają cicho i niezawodnie oraz są dostępne w żywych kolorach i zabawnych wzorach.',
  },
];

export default function BabyContent({ locale, position }: Props) {
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
      {/* ── The World of Children's Fashion ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111]">
                {isEn ? "The World of Children's Fashion" : 'Świat mody dziecięcej'}
              </h2>
              <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed">
                <p>
                  {isEn
                    ? "The children's apparel industry demands the highest standards in quality, safety, and functionality. Comfort, material durability, and compliance with health and environmental standards are non-negotiable."
                    : 'Branża odzieży dziecięcej obejmuje projektowanie, produkcję i sprzedaż ubrań przeznaczonych dla niemowląt, dzieci i młodzieży. Charakteryzuje się dużą dynamiką oraz wysokimi wymaganiami dotyczącymi jakości, bezpieczeństwa i funkcjonalności produktów. Kluczowe znaczenie mają wygoda, trwałość materiałów oraz zgodność z normami zdrowotnymi i ekologicznymi.'}
                </p>
                <p>
                  {isEn
                    ? 'Crucially, compliance with norms regarding the detachment of small parts is vital, as these can pose a choking hazard for young children. All zipper components must be securely attached and tested accordingly.'
                    : 'Bardzo ważną rzeczą jest zgodność z normami dotyczącymi odrywania się małych przedmiotów, gdyż stanowi to niebezpieczeństwo dla małych dzieci.'}
                </p>
                <p>
                  {isEn
                    ? "Children's fashion prioritizes joyful colors. With molded zippers, changing tooth color creates beautiful contrasts. Molded zippers can even have a different color on each side — offering unlimited possibilities for unique designs."
                    : 'Moda dziecięca stawia na radosne kolory. Zamki formowane mogą mieć nawet inny kolor po każdej stronie, co daje nieograniczone możliwości tworzenia unikalnych wzorów.'}
                </p>
                <p>
                  {isEn
                    ? 'Plastic and coil zippers are the most commonly used types. We also offer zippers specifically designed for sleeping bags and strollers. Magnetic auto-lock closures help preschool children dress independently — solving the challenge of inserting zipper ends into the box.'
                    : 'Zamki plastikowe i spiralne to najczęściej stosowane typy. Posiadamy w ofercie również zamki do śpiworów oraz wózków. Magnetyczne zamknięcia auto-lock pomagają dzieciom przedszkolnym samodzielnie się ubierać.'}
                </p>
              </div>
            </div>
            <div className="overflow-hidden group">
              <Image
                src={`${WP}2025/03/Projekt-bez-nazwy-2025-03-04T132235.388.png`}
                alt={isEn ? "Children's clothing zipper" : 'Zamek do odzieży dziecięcej'}
                width={700}
                height={700}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Glow-in-the-Dark ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111]">
                {isEn ? 'Glow-in-the-Dark Zippers' : 'Zamki świecące w ciemności'}
              </h2>
              <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed">
                <p>
                  {isEn
                    ? "Zipper elements injected with a special glow-in-the-dark material, perfect for children's clothing. Just shine a flashlight on the zipper for a moment, and the teeth will start to glow beautifully \u2013 kids love it!"
                    : 'Elementy zamka wtryskiwane ze specjalnego materiału świecącego w ciemnościach, idealne do odzieży dziecięcej. Wystarczy na chwilę oświetlić zamek latarką, a ząbki zaczną ładnie świecić \u2013 dzieci to uwielbiają!'}
                </p>
                <h3 className="font-[Jost] text-base font-medium text-[#111] mt-4">
                  {isEn
                    ? 'How does the magic work? The technology of photoluminescence.'
                    : 'Jak działa magia? Technologia fotoluminescencji.'}
                </h3>
                <p>
                  {isEn
                    ? 'The secret of these unique zippers lies in the material used to form their elements, such as the teeth and the slider. It is a specialized plastic enriched with photoluminescent pigments. These pigments have the ability to absorb and store light energy, and then slowly release it in the form of visible, greenish or bluish light.'
                    : 'Sekret tych wyjątkowych zamków tkwi w materiale, z którego formowane są ich elementy, takie jak ząbki i suwak. Jest to specjalistyczne tworzywo sztuczne, wzbogacone o pigmenty fotoluminescencyjne. Pigmenty te mają zdolność do absorbowania i magazynowania energii świetlnej, a następnie powolnego jej uwalniania w postaci widzialnego, zielonkawego lub niebieskiego światła.'}
                </p>
                <p>
                  {isEn
                    ? 'The process is extremely simple and safe: just illuminate the zipper for a moment with a flashlight, a lamp, or simply expose it to sunlight, and the teeth will start to glow nicely in the dark. The longer and more intense the exposure to light, the brighter and longer-lasting the effect. It is this interactive element that makes kids love it \u2013 they can \u201ccharge\u201d their own clothes and enjoy their glow after the lights go out.'
                    : 'Proces jest niezwykle prosty i bezpieczny: wystarczy na chwilę oświetlić zamek latarką, lampką lub wystawić na działanie słońca, a ząbki zaczną ładnie świecić w ciemności. Im dłuższa i bardziej intensywna ekspozycja na światło, tym jaśniejszy i dłużej trwający efekt. To właśnie ten interaktywny element sprawia, że dzieci go uwielbiają \u2013 mogą \u201eładować\u201d własne ubrania i cieszyć się ich blaskiem po zgaszeniu świateł.'}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                `${WP}2025/06/zamekswiecacywciemnosci-1-e1751275851765-782x1024.jpg`,
                `${WP}2025/06/zamekswiecacywciemnosci2-768x1024.jpg`,
              ].map((src, i) => (
                <div key={i} className="overflow-hidden group">
                  <Image
                    src={src}
                    alt={isEn ? `Glow zipper ${i + 1}` : `Zamek świecący ${i + 1}`}
                    width={400}
                    height={533}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
