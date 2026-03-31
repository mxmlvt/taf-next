import Image from 'next/image';
import { ImageToggle, SideBySideImages, type ToggleItem, type SideBySideItem } from '../BlogWidgets';

interface Props { locale: string }

const TOGGLE_EN: ToggleItem[] = [
  {
    label: 'Standard zipper',
    src: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/nylonzippers8-1024x1024.jpg',
    description: 'In a standard coil zipper, the teeth are visible on the tape. This is a classic, functional solution that often requires a fabric flap for covering or is intentionally exposed as a design element.',
  },
  {
    label: 'Concealed zipper',
    src: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/nylonzippers11-1024x1024.jpg',
    description: 'In a concealed zipper, the teeth are completely hidden behind the tape, making it look like a regular seam when sewn. It\'s ideal when aesthetics require an invisible closure.',
  },
];

const TOGGLE_PL: ToggleItem[] = [
  {
    label: 'Zamek standardowy',
    src: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/nylonzippers8-1024x1024.jpg',
    description: 'W standardowym zamku spiralnym ząbki są widoczne na taśmie. Jest to klasyczne, funkcjonalne rozwiązanie, które często wymaga zakrycia klapą materiału lub jest celowo eksponowane jako element designu.',
  },
  {
    label: 'Zamek kryty',
    src: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/nylonzippers11-1024x1024.jpg',
    description: 'W zamku krytym ząbki są całkowicie ukryte za taśmą, sprawiając, że po wszyciu wygląda on jak zwykły szew. Idealny, gdy estetyka wymaga niewidocznego zapięcia.',
  },
];

const COMPARISON_EN: SideBySideItem[] = [
  {
    label: 'Standard Sewn Coil',
    src: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/nylonzippers8-1024x1024.jpg',
    description: 'The teeth are sewn onto the tape with polyester thread. The threads can degrade from UV exposure, and the teeth may separate from the tape—a potential weak point.',
  },
  {
    label: 'Woven S-Type Tape Zipper',
    src: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/porownanie-spirali-S80-WOVENIN-I-standardowej-80S-sewon-type-1024x718.jpeg',
    description: 'In this advanced construction, the tooth elements are integrally woven into the tape\'s structure. This eliminates the weak point of thread degradation and radically increases durability.',
  },
];

const COMPARISON_PL: SideBySideItem[] = [
  {
    label: 'Standardowa spirala szyta',
    src: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/nylonzippers8-1024x1024.jpg',
    description: 'Ząbki są przyszywane do taśmy nicią poliestrową. W momencie przerwania nici – najczęściej przez przetarcie przez obce przedmioty (np. ziarnka piasku) – żyłka zaczyna się odpruwać od materiału, przez co zamek przestaje spełniać swoją funkcję.',
  },
  {
    label: 'Zamek na taśmie S tkanej',
    src: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/porownanie-spirali-S80-WOVENIN-I-standardowej-80S-sewon-type-1024x718.jpeg',
    description: 'W tej zaawansowanej konstrukcji elementy ząbkowe są integralnie wplecione w strukturę taśmy. Eliminuje to potencjalny słaby punkt związany z degradacją nici lub oddzielaniem się ząbków, radykalnie zwiększając wytrzymałość.',
  },
];

export default function CoilZippersPost({ locale }: Props) {
  const isEn = locale === 'en';
  const toggle = isEn ? TOGGLE_EN : TOGGLE_PL;
  const comparison = isEn ? COMPARISON_EN : COMPARISON_PL;

  return (
    <div className="prose prose-gray max-w-none font-[Jost]">
      <p>{isEn
        ? 'Coil zippers, widely used for their flexibility and versatility, have specific features and subtypes that affect their application.'
        : 'Zamki spiralne, powszechnie stosowane ze względu na ich elastyczność i wszechstronność, posiadają specyficzne cechy i podtypy, które wpływają na ich zastosowanie.'
      }</p>

      <h2 id="general">{isEn ? 'General characteristics of coil zippers' : 'Ogólna charakterystyka zamków spiralnych'}</h2>
      <p>{isEn
        ? 'Coil zippers, often called nylon zippers, are made with a continuous spiral of nylon or polyester filament that is sewn onto the zipper tape. This construction makes them very flexible and lightweight.'
        : 'Zamki spiralne, często nazywane nylonowymi zamkami, są wykonane z ciągłej spirali z nylonowego lub poliestrowego włókna, która jest przyszywana do taśmy zamka. Ich konstrukcja sprawia, że są bardzo elastyczne i lekkie.'
      }</p>
      <p><strong>{isEn ? 'Key features:' : 'Kluczowe cechy:'}</strong></p>
      <ul>
        <li><strong>{isEn ? 'Flexibility:' : 'Elastyczność:'}</strong> {isEn ? 'An excellent choice for projects with curves, such as knit jackets.' : 'Doskonały wybór do projektów z krzywiznami, takich jak kurtki dzianinowe.'}</li>
        <li><strong>{isEn ? 'Lightweight:' : 'Lekkość:'}</strong> {isEn ? 'Soft and comfortable to wear.' : 'Miękkie i komfortowe w noszeniu.'}</li>
        <li><strong>{isEn ? 'Versatility:' : 'Wszechstronność:'}</strong> {isEn ? 'Widely used in clothing, luggage, furniture, sports equipment, and automotive applications.' : 'Szerokie zastosowanie w odzieży damskiej (spódnice, spodnie, sukienki), a także w bagażu, meblach, sprzęcie sportowym i zastosowaniach samochodowych.'}</li>
      </ul>

      <h2 id="concealed">{isEn ? 'Concealed zipper' : 'Zamki kryte'}</h2>
      <p>{isEn
        ? 'In concealed zippers, the teeth are completely hidden behind the tape, making the zipper practically invisible once sewn in, except for the small pull tab. The zipper tape is often made of lighter fabric. Their main purpose is to provide a "polished" and uninterrupted look.'
        : 'W zamkach krytych ząbki są całkowicie ukryte za taśmą, co sprawia, że zamek jest praktycznie niewidoczny po wszyciu, z wyjątkiem małego uchwytu suwaka. Taśma zamka jest często wykonana z lżejszych tkanin. Ich głównym celem jest zapewnienie „wypolerowanego" i nieprzerwanego wyglądu.'
      }</p>
      <p><strong>{isEn ? 'Typical applications for concealed zippers:' : 'Typowe zastosowania zamków krytych:'}</strong></p>
      <ul>
        <li>{isEn ? 'Elegant outfits, evening gowns.' : 'Eleganckie kreacje, suknie wieczorowe.'}</li>
        <li>{isEn ? 'Skirts, dresses (side seams).' : 'Spódnice, sukienki (szwy boczne).'}</li>
        <li>{isEn ? 'Furniture pillows and duvet covers.' : 'Poduszki meblowe i poszewki na kołdry.'}</li>
      </ul>

      <h2 id="see-difference">{isEn ? 'See the difference' : 'Zobacz różnicę'}</h2>
      <ImageToggle items={toggle} />

      <h2 id="woven-vs-standard">{isEn ? 'Woven-in S-Tape Zippers vs. Standard Sewn Coil' : 'Zamki na taśmie S tkanej (Woven-in S-Tape) vs. standardowa spirala szyta'}</h2>
      <p>{isEn
        ? 'The evolution of coil zippers reflects the industry\'s continuous pursuit of increased durability and reliability. Key differences in construction have a huge impact on performance characteristics.'
        : 'Ewolucja zamków spiralnych odzwierciedla ciągłe dążenie branży do zwiększania trwałości i niezawodności. Kluczowe różnice w konstrukcji mają ogromny wpływ na właściwości użytkowe.'
      }</p>

      <SideBySideImages items={comparison} />

      <h2 id="advantage">{isEn ? 'The Advantage and Applications of Woven Construction' : 'Przewaga i zastosowania tkanej konstrukcji'}</h2>
      <ul>
        <li><strong>{isEn ? 'Increased Durability:' : 'Zwiększona wytrzymałość:'}</strong> {isEn ? 'Significantly enhanced resistance to stretching, abrasion, and frequent use.' : 'Znacznie zwiększona odporność na rozciąganie, ścieranie i częste użytkowanie.'}</li>
        <li><strong>{isEn ? 'Longer Lifespan:' : 'Dłuższa żywotność:'}</strong> {isEn ? 'Provides greater reliability, especially in demanding applications.' : 'Zapewnia większą niezawodność, szczególnie w wymagających zastosowaniach.'}</li>
        <li><strong>{isEn ? 'High-load Performance:' : 'Lepsze działanie w aplikacjach wysokoobciążanych:'}</strong> {isEn ? 'Ideal for high-load applications such as military backpacks, pouches, and waist bags.' : 'Lepiej radzą sobie w aplikacjach wysokoobciążanych, np. plecaki wojskowe, zasobniki, saszetki typu „nerka".'}</li>
      </ul>
      <p>{isEn
        ? 'Zippers with S-type (woven) tape are ideal for products subject to heavy loads and very frequent opening/closing: high-quality bags, tactical backpacks, outdoor gear, and workwear where reliability is a priority.'
        : 'Zamki z taśmą typu S (tkaną) są idealne dla produktów, które podlegają dużym obciążeniom i bardzo częstemu otwieraniu/zamykaniu. Przykładami mogą być wysokiej jakości torby, plecaki taktyczne, sprzęt outdoorowy oraz odzież robocza, gdzie niezawodność jest priorytetem.'
      }</p>

      <div className="not-prose my-8">
        <div className="relative w-full max-w-2xl aspect-[718/500] overflow-hidden bg-gray-100">
          <Image
            src="https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/porownanie-spirali-S80-WOVENIN-I-standardowej-80S-sewon-type-1024x718.jpeg"
            alt={isEn ? 'Woven S-Type vs Standard sewn coil comparison' : 'Porównanie spirali S-Type tkanej i standardowej szytej'}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 700px"
          />
        </div>
      </div>
    </div>
  );
}
