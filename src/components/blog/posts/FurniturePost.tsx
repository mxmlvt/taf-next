import Image from 'next/image';

interface Props { locale: string }

interface ZipperSpec {
  id: string;
  title: string;
  img: string;
  description: string;
  applicationsLabel: string;
  applications: string[];
}

const SPECS_EN: ZipperSpec[] = [
  {
    id: '5cc-zipper',
    title: '5CC (5mm) Zipper',
    img: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/07/zamek5cc.png',
    description: 'The teeth are about 5 mm wide, and the tape is approximately 1.25 inches. This is a medium-weight zipper that offers high durability.',
    applicationsLabel: 'Typical applications:',
    applications: [
      'Most pants and jeans, handbags, backpacks, and luggage.',
      'Jackets, parkas, zip-up hoodies, and vests.',
      'Heavier upholstery cushions.',
    ],
  },
  {
    id: '45ech-zipper',
    title: '45ECH (4.5mm) Zipper',
    img: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/07/zamek4ech.jpg',
    description: 'The teeth are approximately 4.5 mm wide, and the tape is also about 1.25 inches. It is considered slightly lighter and finer than a #5 zipper.',
    applicationsLabel: 'Typical applications:',
    applications: [
      'Small interior decor projects, decorative pillows.',
      'Duvet covers, lighter handbags.',
      'Clothing made from more delicate fabrics.',
    ],
  },
];

const SPECS_PL: ZipperSpec[] = [
  {
    id: '5cc-zipper',
    title: 'Zamek YKK 5CC',
    img: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/07/zamek5cc.png',
    description: 'Jest to zamek z grubą spiralą, oferujący największą wytrzymałość wśród zamków krytych oraz największą siłę zapięcia. Używany w meblach tapicerowanych.',
    applicationsLabel: 'Typowe zastosowania:',
    applications: [
      'Meble tapicerowane.',
      'Zapięcie siedzeń samochodowych.',
      'Krzesła tapicerowane.',
    ],
  },
  {
    id: '45ech-zipper',
    title: 'Zamek YKK 45ECH',
    img: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/07/zamek4ech.jpg',
    description: 'Zamek kryty 45ECH różni się od zamka 5CC większą elastycznością. Płaski profil spirali pozwala na pracę w miejscach, gdzie zastosowanie 5CC nie byłoby możliwe.',
    applicationsLabel: 'Typowe zastosowania:',
    applications: [
      'Meble tapicerowane.',
      'Tapicerka jachtowa.',
      'Krzesła tapicerowane.',
    ],
  },
];

export default function FurniturePost({ locale }: Props) {
  const isEn = locale === 'en';
  const specs = isEn ? SPECS_EN : SPECS_PL;

  return (
    <div className="prose prose-gray max-w-none font-[Jost]">
      <p>{isEn
        ? 'In the furniture industry, zippers play a key role in the functionality and aesthetics of upholstery and covers, allowing for easy removal for cleaning or replacement.'
        : 'W branży meblarskiej zamki błyskawiczne odgrywają kluczową rolę w funkcjonalności i estetyce tapicerki oraz pokrowców, umożliwiając łatwe zdejmowanie do czyszczenia lub wymiany.'
      }</p>

      <h2 id="zippers-in-the-furniture-industry">{isEn ? 'Zippers in the Furniture Industry' : 'Zamki w branży meblarskiej'}</h2>
      <p>{isEn
        ? 'The right zipper is crucial for a piece of furniture\'s durability and functionality. Here are the most commonly used types:'
        : 'Odpowiedni dobór zamka ma kluczowe znaczenie dla trwałości i funkcjonalności mebla. Oto najczęściej stosowane typy:'
      }</p>

      <ul>
        <li>
          <strong>{isEn ? 'Nylon Coil Zippers:' : 'Zamki nylonowe spiralne:'}</strong>{' '}
          {isEn
            ? 'These are widely used in sizes #5 (medium coil) or #3 (fine coil). They are strong, flexible, and withstand horizontal stress well, making them ideal for most upholstered furniture.'
            : 'Powszechnie stosowane w rozmiarach #5 (średniospiralne) lub #3 (drobnospiralne). Są mocne, elastyczne i dobrze znoszą naprężenia poziome, idealne do większości tapicerowanych mebli.'}
        </li>
        <li>
          <strong>{isEn ? 'Molded Plastic Zippers:' : 'Zamki plastikowe formowane:'}</strong>{' '}
          {isEn
            ? 'A great choice for outdoor cushions due to their resistance to UV rays and corrosion.'
            : 'Dobry wybór do poduszek zewnętrznych ze względu na ich odporność na promieniowanie UV i warunki atmosferyczne.'}
        </li>
        <li>
          <strong>{isEn ? 'Concealed (Invisible) Zippers:' : 'Zamki kryte (niewidoczne):'}</strong>{' '}
          {isEn
            ? 'Popular for pillows and duvet covers, as they provide a subtle, hidden closure that doesn\'t disrupt the design lines.'
            : 'Popularne do poduszek i poszewek na kołdry, zapewniające subtelne, ukryte zamknięcie, które nie zakłóca linii designu.'}
        </li>
        <li>
          <strong>{isEn ? 'Metal Zippers:' : 'Metalowe zamki:'}</strong>{' '}
          {isEn
            ? 'These can be used as a decorative element, giving furniture an industrial or classic feel.'
            : 'Mogą być używane jako element dekoracyjny, nadając meblowi industrialny lub klasyczny charakter.'}
        </li>
        {isEn && (
          <li>
            <strong>For Heavier Applications:</strong>{' '}
            For very heavy cushions, sizes #7 or #8 may be required for greater strength.
          </li>
        )}
        <li>
          <strong>{isEn ? 'Continuous Zipper Chain:' : 'Ciągły łańcuch zamka:'}</strong>{' '}
          {isEn
            ? 'For custom or very long applications, such as sofas or futon covers, it\'s convenient to buy a continuous zipper chain by the meter, which allows for precise length adjustment.'
            : 'Dla niestandardowych lub bardzo długich zastosowań, takich jak sofy czy pokrowce na futony, wygodne jest kupowanie ciągłego łańcucha zamka na metry, co pozwala na precyzyjne dopasowanie długości.'}
        </li>
      </ul>

      <h2 id="differences">{isEn ? 'Differences in Zipper Application: 5CC vs. 45ECH' : 'Różnice w aplikacji zamka 5CC vs. 45ECH'}</h2>
      <p>{isEn
        ? "Choosing the correct zipper size (gauge) is crucial, as it affects durability, aesthetics, and functionality. The size is determined by the width of the teeth in millimeters when the zipper is closed."
        : 'Wybór odpowiedniego rozmiaru zamka (gauge) ma kluczowe znaczenie, ponieważ wpływa na wytrzymałość, estetykę i funkcjonalność. Rozmiar jest określany na podstawie szerokości ząbków w milimetrach po zamknięciu.'
      }</p>

      {/* Side-by-side spec cards */}
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-6 my-6">
        {specs.map((spec) => (
          <div key={spec.id} id={spec.id} className="border border-gray-200 rounded overflow-hidden">
            <div className="relative aspect-[4/3] bg-gray-100">
              <Image
                src={spec.img}
                alt={spec.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="p-5">
              <h3 className="font-[Jost] font-normal text-base text-[#111] mb-2">{spec.title}</h3>
              <p className="font-[Jost] text-sm text-gray-600 leading-relaxed mb-3">{spec.description}</p>
              <p className="font-[Jost] text-sm font-semibold text-[#111] mb-1.5">{spec.applicationsLabel}</p>
              <ul className="space-y-1">
                {spec.applications.map((app, i) => (
                  <li key={i} className="font-[Jost] text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-gray-400 mt-0.5 flex-shrink-0">•</span>
                    {app}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <h2 id="key-differences">{isEn ? 'Key differences in application' : 'Kluczowe różnice w zastosowaniu'}</h2>
      <p>{isEn
        ? 'The 5CC zipper is stiffer and its use depends on where it will be sewn. It works great on straight sections, but for applications requiring more flexibility, the 45ECH zipper is more suitable. The most important thing for achieving the right result is a proper sewing process, which will be fully explained by our experts.'
        : 'Zamek 5CC jest sztywniejszy i jego zastosowanie jest uwarunkowane miejscem, w którym zamek będzie wszywany. Przy prostych odcinkach sprawdzi się znakomicie, przy aplikacjach wymagających większej elastyczności bardziej odpowiedni będzie zamek 45ECH. Najważniejszą rzeczą dla uzyskania odpowiedniego efektu jest prawidłowy proces wszycia zamka, który zostanie w pełni objaśniony przez naszych ekspertów.'
      }</p>
    </div>
  );
}
