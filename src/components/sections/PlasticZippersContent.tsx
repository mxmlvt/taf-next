import Image from 'next/image';
import FadeIn from '@/components/ui/FadeIn';

const WP = 'https://wp.trimsandfasteners.com/wp-content/uploads/';

interface Props {
  locale: string;
  position: 'above' | 'below';
}

export default function PlasticZippersContent({ locale, position }: Props) {
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
                  {isEn ? 'Characteristics of Plastic Molded Zippers' : 'Charakterystyka zamków plastikowych formowanych'}
                </h2>
                <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed">
                  <p>
                    {isEn
                      ? 'Commonly known as Delrin or molded zippers, they are widely used in children\'s products, outdoor clothing, and marine sailing applications.'
                      : 'Zamki plastikowe formowane mają zastosowanie w produktach dla dzieci, odzieży outdoorowej i żeglarstwie. Różnią się od zamków nylonowych kształtem ząbków formowanych w procesie wtryskowym.'}
                  </p>
                  <p>
                    {isEn
                      ? 'The main difference compared to a nylon zipper is the shape of the elements, which are formed in an injection molding process. Like any zipper, they have their advantages and disadvantages, and understanding them is crucial for proper application.'
                      : 'Plastikowe zamki formowane gorzej sprawdzają się na zakrzywionych i falistych powierzchniach, powodując większe marszczenie niż nylonowe. Nie nadają się do mocno obciążonych toreb i kieszeni.'}
                  </p>
                  <p>
                    {isEn
                      ? 'Plastic molded zippers perform worse on curved and wavy surfaces, causing more puckering than nylon zippers. They are not recommended for applications with high lateral stress, such as heavily loaded bags and pockets.'
                      : 'Główną zaletą kształtu ząbków jest łatwość usuwania zabrudzeń i zanieczyszczeń, co czyni je idealnymi dla wojska i intensywnego użytku terenowego.'}
                  </p>
                  <p>
                    {isEn
                      ? 'The biggest advantage of the tooth shape is the ease of removing dirt and debris from the zipper elements, which is essential in applications requiring resistance to dirt, such as for the military or heavy outdoor use.'
                      : 'Zamki plastikowe są popularne w odzieży dziecięcej, gdyż ich elementy są miękkie i przyjemne w dotyku. Dostępne w licznych wariantach kolorystycznych oraz funkcjonalnych.'}
                  </p>
                  <p>
                    {isEn
                      ? 'Plastic zippers are popular in children\'s clothing because their elements are soft and pleasant to the touch for a child. Molded zippers allow for many color combinations and are also available in many functional variants such as water-resistance, waterproofness, and flame retardancy.'
                      : 'Oferujemy szeroki wybór zamków do profesjonalnej odzieży roboczej na wynajem. Dostępne warianty: trudnopalne, antystatyczne, w kolorach wysokiej widoczności, dwusuwakowe z łatwym wpinaniem, wodoszczelne, wodoodporne oraz odporne na promieniowanie UV.'}
                  </p>
                </div>
              </FadeIn>
              <FadeIn direction="left" delay={0.1} className="relative overflow-hidden group">
                <Image
                  src={`${WP}2025/10/Bez-nazwy.png`}
                  alt={isEn ? 'Plastic molded zippers color range' : 'Gama kolorów zamków plastikowych'}
                  width={700}
                  height={700}
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── Workwear ── */}
        <section className="py-14 bg-[#111111]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <FadeIn direction="right" className="relative overflow-hidden group">
                <Image
                  src={`${WP}2025/10/PIAS2739-1024x1024.jpg`}
                  alt={isEn ? 'Professional workwear zipper' : 'Zamek do odzieży roboczej'}
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </FadeIn>
              <FadeIn direction="left" delay={0.1}>
                <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-white">
                  {isEn ? 'Plastic Zippers for Workwear' : 'Zamki plastikowe do odzieży roboczej'}
                </h2>
                <p className="font-[Jost] text-gray-400 text-sm leading-relaxed mb-6">
                  {isEn
                    ? 'We offer a wide selection of plastic zippers for professional workwear rental, available with special finishes including:'
                    : 'Oferujemy szeroki wybór zamków do profesjonalnej odzieży roboczej na wynajem. Dostępne warianty:'}
                </p>
                <ul className="space-y-2 font-[Jost] text-gray-400 text-sm mb-8">
                  {(isEn ? [
                    'Flame retardant',
                    'Anti-static',
                    'High-visibility colors',
                    'Two-way zippers with easy-insertion functionality',
                    'And many more!',
                  ] : [
                    'Trudnopalne',
                    'Antystatyczne',
                    'Kolory wysokiej widoczności',
                    'Dwusuwakowe z łatwym wpinaniem',
                    'Wodoszczelne',
                    'Wodoodporne',
                    'Odporne na promieniowanie UV',
                  ]).map((item, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <span className="text-gray-600 mt-0.5 flex-shrink-0">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-[Jost] text-gray-400 text-sm italic">
                  {isEn
                    ? 'Just tell us what you need, and we\'ll take care of the rest!'
                    : 'Powiedz nam, czego potrzebujesz — my zajmiemy się resztą!'}
                </p>
              </FadeIn>
            </div>
          </div>
        </section>
      </>
    );
  }

  // position === 'below'
  return (
    <>
      {/* ── Matte or Shiny ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <FadeIn direction="right">
              <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111]">
                {isEn ? 'Matte or Shiny Zippers' : 'Zamki matowe lub błyszczące'}
              </h2>
              <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed">
                <p>
                  {isEn
                    ? 'Whether you prefer matte finish teeth or shiny teeth, these are incredibly trendy, especially in black. They\'re perfect for streetwear, men\'s ready-to-wear, and general apparel.'
                    : 'Ząbki z matowym lub błyszczącym wykończeniem są modne szczególnie w kolorze czarnym. Doskonale sprawdzają się w odzieży streetwearowej, męskiej i młodzieżowej.'}
                </p>
                <p>
                  {isEn
                    ? 'When paired with a high-gloss slider and puller or a fully matte finish, they create a fantastic overall look. Minimalistic and refined. These zippers also offer decent wash resistance.'
                    : 'W połączeniu z błyszczącym suwakiem lub w pełni matowym wykończeniem tworzą fantastyczny efekt. Zamki te oferują również dobrą odporność na pranie.'}
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.1} className="relative overflow-hidden group">
              <Image
                src={`${WP}2025/10/PIAS2739-1024x1024.jpg`}
                alt={isEn ? 'Matte and shiny plastic zippers' : 'Zamki plastikowe matowe i błyszczące'}
                width={600}
                height={600}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Glow-in-the-Dark ── */}
      <section className="py-16 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <FadeIn direction="right">
              <div className="grid grid-cols-2 gap-3">
                <div className="overflow-hidden group">
                  <Image
                    src={`${WP}2025/06/zamekswiecacywciemnosci-1-e1751275851765-782x1024.jpg`}
                    alt={isEn ? 'Glow-in-dark zipper' : 'Zamek świecący w ciemności'}
                    width={400}
                    height={524}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="25vw"
                  />
                </div>
                <div className="overflow-hidden group">
                  <Image
                    src={`${WP}2025/06/zamekswiecacywciemnosci2-768x1024.jpg`}
                    alt={isEn ? 'Glow effect demonstration' : 'Demonstracja efektu świecenia'}
                    width={400}
                    height={533}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="25vw"
                  />
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.1}>
              <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-white">
                {isEn ? 'Glow-in-the-Dark Zippers' : 'Zamki świecące w ciemności'}
              </h2>
              <div className="space-y-4 font-[Jost] text-sm leading-relaxed">
                <p className="text-gray-400">
                  {isEn
                    ? 'Zipper elements injection-molded from a special glow-in-the-dark material, perfect for children\'s clothing. Just shine a flashlight on the zipper for a moment, and the teeth will start to glow beautifully – kids love it!'
                    : 'Elementy zamka formowane z materiału świecącego w ciemności — idealne do odzieży dziecięcej. Wystarczy przez chwilę oświetlić zamek latarką, a zęby zaczną pięknie świecić — dzieci to uwielbiają!'}
                </p>
                <p className="text-gray-400">
                  {isEn
                    ? 'The secret to these unique zippers lies in the material: specialized plastic enriched with photoluminescent pigments. These pigments absorb and store light energy, then slowly release it as visible greenish or bluish light. The longer and more intense the exposure to light, the brighter and longer-lasting the effect.'
                    : 'Tajemnica tych wyjątkowych zamków tkwi w materiale: specjalistyczny plastik wzbogacony o pigmenty fotoluminescencyjne. Pigmenty te pochłaniają i przechowują energię świetlną, a następnie powoli uwalniają ją w postaci widzialnego, zielonkawego lub niebieskawego światła.'}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── UV-Resistant ── */}
      <section className="py-16 bg-[#f5f3ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <FadeIn direction="right">
              <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111]">
                {isEn ? 'UV-Resistant Plastic Zippers' : 'Zamki plastikowe odporne na UV'}
              </h2>
              <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed">
                <p>
                  {isEn
                    ? 'Our specially crafted zippers, featuring modified materials for both teeth and tape, deliver exceptional performance in marine and yachting applications. They achieve high UV resistance, classified as B7 class according to ISO 105 B02, and class 5 according to ISO 105 B04.'
                    : 'Specjalna modyfikacja materiału ząbków i taśmy zapewnia wydajność w zastosowaniach morskich i jachtowych. Osiągają wysoką odporność na promieniowanie UV — klasa B7 wg ISO 105 B02 i klasa 5 wg ISO 105 B04.'}
                </p>
                <p>
                  {isEn
                    ? 'UV radiation is the most destructive environmental factor for fabrics and components exposed to sunlight. Standard plastic teeth become brittle over time, leading to zipper failure. Thanks to our UV-R zippers, your zippers will last significantly longer — our exclusive element warranty is 10 years!'
                    : 'Standardowy plastik staje się kruchy pod wpływem UV, co prowadzi do uszkodzeń zamka. Dzięki naszym zamkom UV-R Twoje zamki będą działać znacznie dłużej — nasza ekskluzywna gwarancja na elementy to 10 lat!'}
                </p>
                <p>
                  {isEn
                    ? 'We offer a waterproof version of UV-R plastic zipper with DWR and optionally laminated protective film.'
                    : 'Oferujemy wodoodporną wersję zamka plastikowego UV-R z powłoką DWR i opcjonalnie laminowaną folią ochronną.'}
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.1} className="overflow-hidden group">
              <Image
                src={`${WP}2025/06/plastikodporny-1024x975.png`}
                alt={isEn ? 'UV-resistant plastic zipper' : 'Zamek plastikowy odporny na UV'}
                width={600}
                height={572}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Military ── */}
      <section className="py-16 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <FadeIn direction="right">
              <div className="grid grid-cols-3 gap-2">
                {[
                  `${WP}2025/06/militarnyzamekplastikowy1-1024x594.jpg`,
                  `${WP}2025/06/militarnyzamekplastikowy3-1024x576.jpg`,
                  `${WP}2025/06/militarntyzamekplastikowy-1024x1024.jpg`,
                ].map((src, i) => (
                  <div key={i} className="overflow-hidden group aspect-square">
                    <Image
                      src={src}
                      alt={isEn ? `Military zipper ${i + 1}` : `Zamek militarny ${i + 1}`}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="15vw"
                    />
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.1}>
              <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-white">
                {isEn ? 'Military-Grade Zippers' : 'Zamki klasy militarnej'}
              </h2>
              <div className="space-y-4 font-[Jost] text-sm leading-relaxed">
                <p className="text-gray-400">
                  {isEn
                    ? 'Zippers used in individual tactical equipment, uniforms, or personal protective gear are subjected to extremely intensive use. The functionality of the entire product, which cannot fail, depends on their reliability. Molded zippers are a frequent choice for bulletproof vests as well as for military jackets.'
                    : 'Zamki intensywnie używane w wyposażeniu taktycznym, mundurach i środkach ochrony osobistej. Zastosowanie w kamizelkach kuloodpornych i kurtkach wojskowych.'}
                </p>
                <p className="text-gray-400">
                  {isEn
                    ? 'Our experience in fulfilling deliveries for tenders is a significant asset; we know which accessories are needed to ensure the trouble-free use of the product.'
                    : 'Nasze doświadczenie w realizacji dostaw przetargowych jest znaczącym atutem — wiemy, jakie akcesoria są potrzebne do zapewnienia bezawaryjnego użytkowania produktu.'}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Waterproof Teeth ── */}
      <section className="py-16 bg-[#f5f3ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl">
              <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111]">
                {isEn ? 'Waterproof Teeth for Water-Resistant Plastic Zippers' : 'Wodoodporne zęby zamków plastikowych'}
              </h2>
              <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed mb-6">
                <p>
                  {isEn
                    ? 'The zippers feature a special tooth design that provides additional water protection in the zipper chain area. The zippers have a laminated tape and sealed teeth, providing an IPX4 water protection class.'
                    : 'Zamki posiadają specjalny kształt ząbków zapewniający dodatkową ochronę przed wodą. Laminowana taśma i uszczelnione ząbki zapewniają klasę ochrony IPX4.'}
                </p>
                <p>
                  {isEn
                    ? 'They are excellent for outdoor applications and are available in various sizes:'
                    : 'Doskonałe do zastosowań outdoorowych, dostępne w rozmiarach:'}
                </p>
              </div>
              <ul className="space-y-2 font-[Jost] text-gray-500 text-sm">
                {(isEn ? [
                  '#3 – for lightweight cycling jackets',
                  '#5 – for regular use in outdoor jackets',
                  '#8 – for military jackets',
                ] : [
                  '#3 – do lekkich kurtek rowerowych',
                  '#5 – do regularnego użytku w kurtkach outdoorowych',
                  '#8 – do kurtek wojskowych',
                ]).map((item, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <span className="text-gray-400 flex-shrink-0">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
