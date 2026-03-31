import Image from 'next/image';
import FaqAccordion from './FaqAccordion';

const WP = 'https://wp.trimsandfasteners.com/wp-content/uploads/';

interface Props { locale: string; position: 'above' | 'below'; }

const FAQ_EN = [
  {
    question: 'What makes your offering a one-stop solution for fashion garment makers?',
    answer:
      "We provide a truly comprehensive one-stop solution for all garment makers in the fashion industry. We can supply all types of metal accessories used widely in ready-to-wear fashion, including zippers, snaps, buckles, and die-cast Zamak products. With a huge choice of plating finishes available, we can provide all accessories tone-in-tone, ensuring perfect color matching regardless of where your production is made globally. We also offer customization with customer logos, quick design confirmation, and readiness for bulk production. Whether you're creating women's, men's, or children's fashion, you can rely on our smooth working, durable products and comprehensive accessory range.",
  },
  {
    question: 'What customization options are available for metal accessories and zippers?',
    answer:
      'We offer extensive customization options for metal accessories and zippers to match your unique design vision. For metal accessories, we provide die-cast Zamak products available in a variety of platings and finishes, including rose gold, antique copper, antique silver, light antique brass, black oxide, and more. All metal components can be arranged with your custom logo, with quick design confirmation and readiness for bulk production. We can also create any non-standard items through zinc alloy casting. For zippers, customization includes fancy pullers, symmetrical teeth, classic antique finishes, various plating options, custom tape colors, printed designs, and logo application to create distinctive branding elements.',
  },
  {
    question: 'What are invisible (concealed) zippers and where are they best used?',
    answer:
      "Invisible zippers, also known as hidden or concealed zippers, are used widely in the fashion business, mainly in women's ready-to-wear. They feature different sizes of nylon spiral (typically #3 and #4) that determine the strength required for different applications. Fashion industry invisible zippers are made on lace or woven tape, offering a clean, seamless look. They're perfect for dresses, skirts, and garments where the zipper should be virtually undetectable. We offer European-made invisible zippers for superior quality, with options for fancy pullers, custom logo designs, special functions like open-end and heavy-duty versions, and various plating finishes. For sportswear, we provide invisible zippers with stay-down pullers designed to minimize unnecessary movement during exercise.",
  },
  {
    question: 'What types of snaps do you offer for different applications?',
    answer:
      "We provide a comprehensive range of advanced snap solutions designed for specific applications across all industries. Our selection includes metal or plastic snaps for children's clothing that meet safety standards, military-grade snaps with plastic caps compliant with NIR (Near-Infrared) requirements for tactical concealment, marine snaps resistant to UV radiation and saltwater for yachting applications, and fire-resistant plastic snaps for professional workwear that are always anti-static and waterproof. In the fashion industry, snaps are no longer just simple closing elements but key technical components that must meet rigorous requirements for functionality, safety, and durability. Each model in our range has been designed with specific application needs in mind.",
  },
  {
    question: 'What makes metal zippers ideal for fashion applications?',
    answer:
      "Metal zippers are traditional in the fashion business and used widely across all fashion segments. They're our core product, and we offer exceptional overall quality in both ready-made zippers and long chain plus sliders. Metal teeth can have different finishes and colors, with options including Y-teeth profiles, single polished teeth, symmetrical teeth, and classic antique finishes. The variety of teeth styles, slider platings, and tape types gives unique opportunities for design creativity. Metal zippers provide both functional durability and distinctive visual appeal, making them perfect for leather jackets, jeans, bags, and high-end fashion where quality and aesthetics are paramount. Whether designing women's, men's, or children's fashion, you can rely on our smooth working, durable metal zippers.",
  },
];

const FAQ_PL = [
  {
    question: 'Co sprawia, że jesteście kompleksowym dostawcą dla producentów odzieży?',
    answer:
      'Zapewniamy prawdziwie kompleksowe rozwiązanie dla wszystkich producentów odzieży w branży modowej. Możemy dostarczyć wszystkie rodzaje metalowych akcesoriów stosowanych w modzie gotowej, w tym zamki, napy, klamry i produkty odlewane z Zamaku. Dysponując ogromnym wyborem wykończeń galwanicznych, możemy dostarczyć wszystkie akcesoria ton w ton — niezależnie od tego, gdzie na świecie odbywa się produkcja. Oferujemy też personalizację z logo klienta, szybkie potwierdzenie projektu i gotowość do produkcji masowej.',
  },
  {
    question: 'Jakie opcje personalizacji oferujecie dla metalowych akcesoriów i zamków?',
    answer:
      'Oferujemy rozbudowane opcje personalizacji metalowych akcesoriów i zamków dostosowane do Twojej wizji projektowej. Produkty Zamak dostępne są w różnych wykończeniach: różowe złoto, miedź antyczna, srebro antyczne, jasny mosiądz antyczny, czarny tlenek i więcej. Wszystkie metalowe komponenty można oznaczyć logo klienta z szybkim zatwierdzeniem projektu i gotowością do produkcji masowej. Możemy też tworzyć niestandardowe elementy z odlewu cynkowego. Dla zamków: ozdobne suwaki, symetryczne ząbki, klasyczne wykończenia antyczne, różne kolory taśm i aplikacje z logo.',
  },
  {
    question: 'Czym są zamki kryte i gdzie najlepiej je stosować?',
    answer:
      'Zamki kryte, znane również jako ukryte lub niewidoczne, są szeroko stosowane w branży mody — głównie w damskiej odzieży gotowej. Dostępne w różnych rozmiarach spirali nylonowej (typowo #3 i #4) określających wytrzymałość dla różnych zastosowań. Są idealne do sukienek, spódnic i ubrań, w których zamek ma być praktycznie niewidoczny. Oferujemy zamki kryte europejskiej produkcji w doskonałej jakości, z opcjami ozdobnych suwaków, logo klienta, specjalnych funkcji (rozdzielne, heavy-duty) i różnych wykończeń. Do odzieży sportowej — zamki kryte z suwakiem stay-down minimalizującym zbędne ruchy podczas aktywności.',
  },
  {
    question: 'Jakie rodzaje napów oferujecie?',
    answer:
      'Oferujemy kompleksowy wybór zaawansowanych rozwiązań napowych dla różnych zastosowań. Nasze opcje to: napy metalowe lub plastikowe do odzieży dziecięcej spełniające normy bezpieczeństwa, napy klasy militarnej z plastikową nakładką zgodne z wymaganiami NIR, napy morskie odporne na promieniowanie UV i słoną wodę, oraz ognioodporne plastikowe napy do odzieży roboczej — zawsze antystatyczne i wodoodporne. W branży modowej napy przestały być tylko prostymi elementami zapięcia — stały się kluczowymi komponentami technicznymi spełniającymi rygorystyczne wymagania.',
  },
  {
    question: 'Co sprawia, że zamki metalowe są idealne dla branży modowej?',
    answer:
      'Zamki metalowe to tradycyjny element branży modowej stosowany we wszystkich jej segmentach. To nasz podstawowy produkt — oferujemy wyjątkową jakość zarówno gotowych zamków, jak i długich łańcuchów z suwakami. Ząbki metalowe mogą mieć różne wykończenia i kolory: ząbki Y, pojedynczo polerowane, symetryczne, klasyczne antyczne. Różnorodność stylów ząbków, powłok suwaków i typów taśm daje nieograniczone możliwości projektowe. Zamki metalowe łączą trwałość funkcjonalną z wyrazistą estetyką — idealne do skórzanych kurtek, jeansów, torebek i mody wysokiej jakości.',
  },
];

export default function FashionContent({ locale, position }: Props) {
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
      {/* ── Metal Accessories ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111]">
                {isEn ? 'Metal Accessories for the Fashion Industry' : 'Metalowe akcesoria dla branży mody'}
              </h2>
              <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed">
                <p>
                  {isEn
                    ? 'We offer a wide range of die-cast Zamak products for the fashion industry, available in a variety of platings and finishes.'
                    : 'Oferujemy szeroki asortyment produktów odlewanych ciśnieniowo ze stopu Zamak dla branży modowej, dostępnych w różnych wariantach powłok i wykończeń.'}
                </p>
                <p>
                  {isEn
                    ? 'Truly one stop solution provided for all garment makers, we can supply all types of metal accessories used widely in a ready to wear branch, having in range huge choice of plating finish we can give You all accessories tone-in-tone, no matter where Your production is made globally.'
                    : 'Prawdziwie kompleksowe rozwiązanie dla wszystkich producentów odzieży — dostarczamy wszystkie rodzaje metalowych akcesoriów stosowanych w modzie gotowej. Dysponując ogromnym wyborem wykończeń galwanicznych, możemy dostarczyć wszystkie akcesoria ton w ton, niezależnie od miejsca Twojej produkcji na świecie.'}
                </p>
                <p>
                  {isEn
                    ? 'We make all metal components available to arrange with a customer logo, with a quick design confirmation and ready for bulk production. As well as can arrange any non-standard item made by zinc alloy casting.'
                    : 'Wszystkie metalowe komponenty możemy oznaczyć logo klienta — z szybkim zatwierdzeniem projektu i gotowością do produkcji masowej. Możemy również wykonać dowolny niestandardowy element z odlewu ze stopu cynku.'}
                </p>
              </div>
            </div>
            <div>
              <div className="overflow-hidden group">
                <Image
                  src={`${WP}2025/06/metaloweakcesoriadlamody-scaled-e1751275748542.png`}
                  alt={isEn ? 'Metal fashion accessories' : 'Metalowe akcesoria modowe'}
                  width={800} height={600}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <p className="font-[Jost] text-xs text-gray-400 mt-2">
                {isEn ? 'Metal accessories in rose gold, plastic zipper' : 'Metalowe akcesoria w różowym złocie, zamek plastikowy'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Snaps ── image LEFT / text RIGHT */}
      <section className="py-16 bg-[#f5f3ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div className="overflow-hidden group">
              <Image
                src={`${WP}2025/07/snapfastening-1024x673.png`}
                alt={isEn ? 'Snap fastening' : 'Zapięcie napowe'}
                width={700} height={460}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111]">
                {isEn ? 'Snaps' : 'Napy'}
              </h2>
              <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed">
                <p>
                  {isEn
                    ? "In a world where detail determines the functionality, safety, and durability of a product, snaps are no longer just simple closing elements. They become a key technical component that must meet rigorous industry requirements. That's why our offer is a comprehensive overview of advanced solutions, where each model has been designed with a specific application in mind."
                    : 'W świecie, gdzie detal decyduje o funkcjonalności, bezpieczeństwie i trwałości produktu, napy przestały być prostymi elementami zapięcia. Stają się kluczowym komponentem technicznym, który musi spełniać rygorystyczne wymagania branżowe. Dlatego nasza oferta to kompleksowy przegląd zaawansowanych rozwiązań, gdzie każdy model został zaprojektowany z myślą o konkretnym zastosowaniu.'}
                </p>
                <p>
                  {isEn
                    ? "We provide a wide selection of snaps for all industries \u2013 from metal or plastic snaps for children's clothing to military-grade snaps with a plastic cap compliant with NIR (Near-Infrared) requirements. Our offer also includes snaps for marine applications that are resistant to UV radiation and saltwater, as well as fire-resistant plastic snaps for professional workwear, which are always anti-static and waterproof."
                    : 'Oferujemy szeroki wybór napów dla wszystkich branż \u2013 od metalowych lub plastikowych napów do odzieży dziecięcej po napy klasy militarnej z plastikową nakładką zgodną z wymaganiami NIR. W ofercie mamy też napy do zastosowań morskich odporne na promieniowanie UV i słoną wodę, a także ognioodporne plastikowe napy do profesjonalnej odzieży roboczej, które są zawsze antystatyczne i wodoodporne.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Invisible Zippers – Fashion ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start mb-12">
            <div>
              <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111]">
                {isEn ? 'Invisible Zippers (hidden, concealed)' : 'Zamki kryte (ukryte, niewidoczne)'}
              </h2>
              <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed">
                <p>
                  {isEn
                    ? "Used widely in a fashion business, mainly woman ready-to-wear."
                    : 'Szeroko stosowane w branży modowej, głównie w damskiej odzieży gotowej.'}
                </p>
                <p>
                  {isEn
                    ? 'Have different sizes of nylon spiral that determines the strength required for a different application. Invisible zippers for a fashion industry are made on a lace or woven tape.'
                    : 'Dostępne w różnych rozmiarach spirali nylonowej określających wytrzymałość dla różnych zastosowań. Zamki kryte dla branży modowej wykonane są na taśmie koronkowej lub tkanej.'}
                </p>
                <p>
                  {isEn
                    ? 'The fancy pullers can be applied to an invisible zipper, or if it\u2019s not an important part of design then can be used standard teardrop shape puller painted in tone-in-tone to a tape color. If you want to make a design more fancy you can use different plating that brings shine to every invisible zipper.'
                    : 'Do zamka krytego można zastosować ozdobny suwak lub, jeśli nie jest ważnym elementem projektu, użyć standardowego suwaka w kształcie łzy, pomalowanego ton w ton do koloru taśmy. Aby dodać projektowi elegancji, można zastosować różne galwanizacje, które nadają blasku każdemu zamkowi krytemu.'}
                </p>
                <p>
                  {isEn
                    ? 'We offer European made invisible zipper for #3 AND #4 sizes, that are always great quality, and we can make a wide range of design pullers as well as Your design logo.'
                    : 'Oferujemy zamki kryte europejskiej produkcji w rozmiarach #3 i #4, zawsze najwyższej jakości. Możemy wykonać szeroką gamę ozdobnych suwaków oraz suwaki z logo klienta.'}
                </p>
                <p>
                  {isEn
                    ? 'Also offer all special function invisible zipper like: open end, heavy duty, and all types of customization.'
                    : 'Oferujemy też zamki kryte o specjalnych funkcjach: rozdzielne, heavy duty i wszelkie rodzaje personalizacji.'}
                </p>
              </div>
            </div>
            <div>
              <div className="overflow-hidden group">
                <Image
                  src={`${WP}2025/10/b7ddec0b-13e8-42ad-9234-9f1dbc6d018a.png`}
                  alt={isEn ? 'Fancy pullers for invisible zippers' : 'Ozdobne suwaki do zamków krytych'}
                  width={600} height={700}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <p className="font-[Jost] text-xs text-gray-400 mt-2">
                {isEn ? 'Fancy pullers' : 'Ozdobne suwaki'}
              </p>
            </div>
          </div>
          {/* 3 small images below – equal height with aspect ratio */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                src: `${WP}2025/10/f547073d-2ad0-437f-82c4-a61638e7c53e-967x1024.png`,
                label: isEn ? 'Heavy \u2013 duty' : 'Heavy \u2013 duty',
              },
              {
                src: `${WP}2025/10/0accc8aa-6dc3-4572-a90a-2f75cbcaadbc.png`,
                label: isEn ? 'Special function' : 'Specjalna funkcja',
              },
              {
                src: `${WP}2025/10/4f59d9ed-4b74-4d00-841c-b05e949a9422.jpg`,
                label: isEn ? 'Customization' : 'Personalizacja',
              },
            ].map((item, i) => (
              <div key={i}>
                <div className="aspect-[4/3] overflow-hidden group mb-2">
                  <Image
                    src={item.src}
                    alt={item.label}
                    width={400} height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <p className="font-[Jost] text-xs text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Invisible Zippers – Sport ── 3-col: stacked images | large image | text */}
      <section className="py-16 bg-[#f5f3ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Col 1: 2 stacked small images with captions */}
            <div className="flex flex-col gap-4">
              <div>
                <div className="overflow-hidden group mb-2">
                  <Image
                    src={`${WP}2025/10/d9c8a4fa-e94f-43b7-8c8b-81e3bb3de3d0.png`}
                    alt={isEn ? 'Sport cam-lock puller – autolock' : 'Suwak sport cam-lock – autolock'}
                    width={300} height={400}
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500 bg-white"
                    sizes="25vw"
                  />
                </div>
                <p className="font-[Jost] text-xs text-gray-400">
                  {isEn ? 'Sport cam-lock pullers – autolock' : 'Suwaki sport cam-lock – autolock'}
                </p>
              </div>
              <div>
                <div className="overflow-hidden group mb-2">
                  <Image
                    src={`${WP}2025/10/9f2d421f-9de0-4ae9-a9c2-81667fa4ffd6.png`}
                    alt={isEn ? 'Sport cam-lock puller – non autolock' : 'Suwak sport cam-lock – non autolock'}
                    width={300} height={400}
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500 bg-white"
                    sizes="25vw"
                  />
                </div>
                <p className="font-[Jost] text-xs text-gray-400">
                  {isEn ? 'Sport cam-lock pullers – non autolock' : 'Suwaki sport cam-lock – non autolock'}
                </p>
              </div>
            </div>
            {/* Col 2: large center image */}
            <div className="overflow-hidden group">
              <Image
                src={`${WP}2025/10/5b15d6a3-0776-40d8-91b4-f842e2f7f0a4.png`}
                alt={isEn ? 'Invisible sport zipper' : 'Zamek kryty sportowy'}
                width={400} height={600}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="33vw"
              />
            </div>
            {/* Col 3: title + text */}
            <div>
              <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111]">
                {isEn ? 'Invisible Zippers (hidden, concealed)' : 'Zamki kryte (ukryte, niewidoczne)'}
              </h2>
              <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed">
                <p>
                  {isEn
                    ? 'Sport use of zippers is a combination of unique function and design according to trends, always functional and never fails when used in performance sportswear. Invisible zippers are very convenient to use in sportswear, especially cycling wear where the design usually is compact and minimalistic.'
                    : 'Zastosowanie zamków w sporcie to połączenie unikalnej funkcji i designu zgodnego z trendami \u2014 zawsze funkcjonalne i niezawodne w odzieży sportowej. Zamki kryte są bardzo wygodne w odzieży sportowej, szczególnie kolarskiej, gdzie projekt jest zazwyczaj kompaktowy i minimalistyczny.'}
                </p>
                <p>
                  {isEn
                    ? 'Great function and invisibility and stay-down pullers designed to minimize movement of the puller that is not necessary during exercises.'
                    : 'Doskonała funkcja i niewidoczność oraz suwaki stay-down zaprojektowane w celu minimalizowania ruchu suwaka niepotrzebnego podczas ćwiczeń.'}
                </p>
                <p>
                  {isEn
                    ? 'Invisible zippers with staydown puller \u2013 autolock / nonlock'
                    : 'Zamki kryte z suwakiem staydown \u2013 autolock / nonlock'}
                </p>
                <p>
                  {isEn
                    ? 'Invisible zippers for a sportswear with special unique function \u2013 like open end or waterproof with lamination'
                    : 'Zamki kryte do odzieży sportowej ze specjalną unikalną funkcją \u2013 np. rozdzielne lub wodoodporne z laminacją'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Metal Zippers ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start mb-12">
            <div>
              <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111]">
                {isEn ? 'Metal Zippers (Y teeth, single polished)' : 'Zamki metalowe (ząbki Y, polerowane)'}
              </h2>
              <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed">
                <p>
                  {isEn
                    ? 'Traditional in a fashion business, used widely in all fashion.'
                    : 'Tradycyjny element branży modowej, szeroko stosowany we wszystkich jej segmentach.'}
                </p>
                <p>
                  {isEn
                    ? 'Metal teeth can have different finish and color of teeth. Variety of teeth, slider plating, tape type gives a unique opportunity for design.'
                    : 'Ząbki metalowe mogą mieć różne wykończenia i kolory. Różnorodność ząbków, powłok suwaków i typów taśm daje wyjątkowe możliwości projektowe.'}
                </p>
                <p>
                  {isEn
                    ? "Metal zippers are our core product and we offer great overall quality of ready made zippers as well as long chain plus sliders. No matter if You design woman, men's, children fashion You can always rely on our smooth working, durable metal zippers."
                    : 'Zamki metalowe to nasz podstawowy produkt \u2014 oferujemy doskonałą jakość gotowych zamków oraz długich łańcuchów z suwakami. Niezależnie od tego, czy projektujesz modę damską, męską czy dziecięcą, możesz zawsze polegać na naszych płynnie działających, trwałych zamkach metalowych.'}
                </p>
              </div>
            </div>
            <div className="h-96 overflow-hidden group">
              <Image
                src={`${WP}2025/10/99e556cb-cbb5-4b3b-8ffb-62a669f6142d.jpg`}
                alt={isEn ? 'Metal zipper Y teeth' : 'Zamek metalowy ząbki Y'}
                width={700} height={600}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          {/* 3 small images below – equal height with aspect ratio */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                src: `${WP}2025/10/95981608-02e9-41ea-a53f-69cd290f7fd9.png`,
                label: isEn ? 'Customization' : 'Personalizacja',
              },
              {
                src: `${WP}2025/10/33d7c796-e7e7-43ea-8678-6f9d1520ec61.png`,
                label: isEn ? 'Symmetrical teeth' : 'Ząbki symetryczne',
              },
              {
                src: `${WP}2025/10/5dae5067-07db-4732-b372-1cb71d205875.png`,
                label: isEn ? 'Classic antique finishes' : 'Klasyczne wykończenia antyczne',
              },
            ].map((item, i) => (
              <div key={i}>
                <div className="aspect-[4/3] overflow-hidden group mb-2">
                  <Image
                    src={item.src}
                    alt={item.label}
                    width={400} height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <p className="font-[Jost] text-xs text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
