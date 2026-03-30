import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const WP = 'https://trimsandfasteners.com/wp-content/uploads/2025/10/';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'en'
      ? 'Zipper Size Chart: Complete Guide to Nylon Zipper Sizes | TAF'
      : 'Rozmiary Zamków: Kompletna Tabela i Przewodnik | TAF',
    description: locale === 'en'
      ? 'Complete nylon zipper size chart and guide. Learn what zipper numbers mean (#3, #5, #8, #10), how to measure zipper sizes, and choose the right size for your application.'
      : 'Kompletna tabela rozmiarów zamków nylonowych. Dowiedz się co oznaczają numery (#3, #5, #8, #10), jak mierzyć zamki i wybrać odpowiedni rozmiar do zastosowania.',
    alternates: {
      canonical: locale === 'en' ? 'https://trimsandfasteners.com/nylon-zipper-chain-size-chart/' : 'https://trimsandfasteners.com/pl/tasmy-spiralne-zestawienie-rozmiarow/',
      languages: {
        en: 'https://trimsandfasteners.com/nylon-zipper-chain-size-chart/',
        pl: 'https://trimsandfasteners.com/pl/tasmy-spiralne-zestawienie-rozmiarow/',
      },
    },
  };
}

const SIZES = [
  { label: 'N10', img: `${WP}Projekt-bez-nazwy-84.png` },
  { label: 'N9',  img: `${WP}Projekt-bez-nazwy-86.png` },
  { label: 'N8',  img: `${WP}Projekt-bez-nazwy-85.png` },
  { label: 'N10 Reverse', img: `${WP}tasmyzestawienie12.png` },
  { label: 'N9 Reverse',  img: `${WP}tasmyzestawienie-1.png` },
  { label: 'N8 Reverse',  img: `${WP}tasmyzestawienia12.png` },
  { label: 'N7', img: `${WP}n7.png` },
  { label: 'N6', img: `${WP}n6.png` },
  { label: 'N4', img: `${WP}n4.png` },
  { label: 'N7 Reverse', img: `${WP}n7rewers.png` },
  { label: 'N6 Reverse', img: `${WP}n6rewers.png` },
  { label: 'N4 Reverse', img: `${WP}n4rewers.png` },
  { label: 'N3 Reverse', img: `${WP}n3rewers.png` },
];

export default async function SizeChartPage({ params }: Props) {
  const { locale } = await params;
  const isEn = locale === 'en';

  return (
    <div>
      {/* ── Title bar ── */}
      <div className="bg-[#111111] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-white/40 font-[Jost] mb-4 flex items-center gap-2">
            <Link href={isEn ? '/' : '/pl/'} className="hover:text-white transition-colors">
              {isEn ? 'Home' : 'Start'}
            </Link>
            <span>›</span>
            <Link href={isEn ? '/type-of-zippers/nylon-zippers/' : '/pl/type-of-zippers/nylon-zippers/'} className="hover:text-white transition-colors">
              {isEn ? 'Nylon Zippers' : 'Zamki nylonowe'}
            </Link>
            <span>›</span>
            <span className="text-white/70">{isEn ? 'Size Chart' : 'Tabela rozmiarów'}</span>
          </nav>
          <h1 className="font-[Jost] text-3xl sm:text-4xl font-light">
            {isEn ? 'Nylon Zipper Chain Size Chart' : 'Zestawienie rozmiarów taśm spiralnych'}
          </h1>
        </div>
      </div>

      {/* ── Sizes grid ── */}
      <section className="py-16 bg-[#f5f3ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-10 text-[#111]">
            {isEn ? 'Sizes of nylon zippers' : 'Rozmiary zamków nylonowych'}
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-6">
            {SIZES.map((s) => (
              <div key={s.label} className="text-center">
                <div className="overflow-hidden group bg-white p-3 mb-3">
                  <Image
                    src={s.img}
                    alt={s.label}
                    width={300}
                    height={300}
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                    sizes="20vw"
                  />
                </div>
                <p className="font-[Jost] text-sm font-medium text-[#111]">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Additional options */}
          <div className="mt-12 pt-10 border-t border-gray-200">
            <h3 className="font-[Jost] text-lg font-medium text-[#111] mb-4">
              {isEn ? 'Additional Options' : 'Dodatkowe opcje'}
            </h3>
            <div className="flex flex-wrap gap-3 mb-8">
              {(isEn ? [
                'Film Coating / Waterproof Film',
                'Water-Repellent Treatment / DWR',
                'Fire-Retardant Treatment',
                'Softening',
                'Antibacterial Treatment',
              ] : [
                'Powłoka foliowa / Folia wodoodporna',
                'Impregnacja hydrofobowa / DWR',
                'Impregnacja ognioodporna',
                'Zmiękczanie',
                'Impregnacja antybakteryjna',
              ]).map((opt) => (
                <span key={opt} className="font-[Jost] text-xs text-gray-600 border border-gray-300 px-3 py-1">
                  {opt}
                </span>
              ))}
            </div>
            <div className="overflow-hidden group max-w-2xl">
              <Image
                src={`${WP}20251003_1446_Tabela-z-tlumaczeniem_remix_01k6n1m72nedvswfc31yvnv7v9-1.png`}
                alt={isEn ? 'Slider types table' : 'Tabela typów suwaków'}
                width={900}
                height={400}
                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Slider chart ── */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden group max-w-3xl mx-auto">
            <Image
              src={`${WP}suwakizestawienie.png`}
              alt={isEn ? 'Nylon zipper slider types' : 'Typy suwaków zamków nylonowych'}
              width={900}
              height={600}
              className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </div>
        </div>
      </section>

      {/* ── YKK Woven Coil ── */}
      <section className="py-16 bg-[#f5f3ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-[#111]">
                {isEn ? 'YKK Woven Coil Zippers' : 'Zamki spiralne tkane YKK'}
              </h2>
              <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed">
                <p>
                  {isEn
                    ? 'YKK woven-in coil zippers are a revolutionary item used for a wide range of applications. Originally designed as a supertough, durable zipper for luggage — especially in heavily loaded bags where abrasion can destroy a nylon monofilament spiral.'
                    : 'Zamki spiralne tkane YKK to rewolucyjny produkt stosowany w szerokim zakresie zastosowań. Pierwotnie zaprojektowany jako bardzo wytrzymały, trwały zamek do bagażu — szczególnie w mocno obciążonych torbach, gdzie ścieranie może zniszczyć spiralę z monofilamentu nylonowego.'}
                </p>
                <p>
                  {isEn
                    ? 'The lifespan of the woven-in type EYL chain is much longer, because the tape is more resistant to rubbing of the spiral when the zipper is forcefully closed. The unique element structure makes it great for heavy loaded backpacks, waistbags, and military equipment including PPE.'
                    : 'Żywotność łańcucha EYL typu tkanego jest znacznie dłuższa, ponieważ taśma jest bardziej odporna na ścieranie spirali podczas siłowego zamykania. Unikalna struktura elementów czyni go doskonałym do mocno obciążonych plecaków, nerkowatych i sprzętu wojskowego, w tym PPE.'}
                </p>
                <p className="text-gray-400 italic">
                  {isEn ? 'All colors from the global color card.' : 'Wszystkie kolory z globalnej karty kolorów.'}
                </p>
              </div>
            </div>
            <div className="overflow-hidden group">
              <Image
                src={`${WP}zamkizestawienie1-e1759825152982.png`}
                alt={isEn ? 'YKK woven coil zipper' : 'Zamek spiralny tkany YKK'}
                width={700}
                height={500}
                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 8N WIS WRT ── */}
      <section className="py-16 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-6 text-white">
                8N WIS WRT
              </h2>
              <div className="space-y-4 font-[Jost] text-white text-sm leading-relaxed">
                <p>
                  {isEn
                    ? '8N WIS WRT is a woven-in spiral special truly waterproof zipper (not water/gas-tight). The woven-in spiral structure makes it a great option for heavy army backpacks with superb water protection — the tape does not form a gap in the middle of the zipper where water can soak in, unlike standard WR zippers.'
                    : '8N WIS WRT to zamek spiralny tkany specjalny, naprawdę wodoodporny (nie wodno/gazoszczelny). Struktura spirali tkanej sprawia, że to doskonała opcja do ciężkich plecaków wojskowych z doskonałą ochroną przed wodą — taśma nie tworzy szczeliny w środku zamka, przez którą może wnikać woda, w przeciwieństwie do standardowych zamków WR.'}
                </p>
                <p>
                  {isEn
                    ? 'Great performance on heavily loaded military products due to the flat spiral element — much more abrasion resistant, especially at the corners of heavily loaded products.'
                    : 'Doskonała wydajność w mocno obciążonych produktach wojskowych dzięki płaskiemu elementowi spiralnemu — znacznie bardziej odporny na ścieranie, szczególnie na rogach mocno obciążonych produktów.'}
                </p>
                <div className="space-y-1 mt-4">
                  <p className="font-semibold text-white">{isEn ? 'Available sizes:' : 'Dostępne rozmiary:'}</p>
                  <p className="text-gray-300">N5 – 6mm spiral</p>
                  <p className="text-gray-300">N8 – 7.8mm spiral</p>
                </div>
                <p className="text-gray-400 text-xs mt-4">
                  {isEn
                    ? 'Sliders available: non-lock, various puller styles, and standard military without puller.'
                    : 'Dostępne suwaki: nieblokujące, różne style uchwytów i standardowe militarne bez uchwytu.'}
                </p>
              </div>
            </div>
            <div className="overflow-hidden group">
              <Image
                src={`${WP}zamkizestawienie-1-e1759825199862.png`}
                alt="8N WIS WRT"
                width={700}
                height={500}
                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
