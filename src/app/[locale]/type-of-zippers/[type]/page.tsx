import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getZippersByIds } from '@/lib/wordpress';
import { CATEGORY_POPUP_IDS } from '@/lib/popup-ids';
import type { Locale } from '@/lib/types';
import ZipperGrid from '@/components/zipper/ZipperGrid';
import PlasticZippersContent from '@/components/sections/PlasticZippersContent';
import NylonZippersContent from '@/components/sections/NylonZippersContent';
import MetalZippersContent from '@/components/sections/MetalZippersContent';
import HeroAnimator from '@/components/ui/HeroAnimator';
import SmoothAnchor from '@/components/ui/SmoothAnchor';

const TYPE_SLUGS: Record<string, { wpSlugEn: string; wpSlugPl: string; labelEn: string; labelPl: string; heroImg: string; subtitleEn: string; subtitlePl: string; seoTitleEn: string; seoDescEn: string; seoTitlePl: string; seoDescPl: string }> = {
  'nylon-zippers': {
    wpSlugEn: 'nylon-zippers', wpSlugPl: 'zamki-nylonowe', labelEn: 'Nylon Zippers', labelPl: 'Zamki nylonowe',
    heroImg: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/nylonzippers6.jpg',
    subtitleEn: 'Flexible and durable', subtitlePl: 'Elastyczne i trwałe',
    seoTitleEn: 'Nylon Coil Zippers | Water-Resistant & Concealed Zippers | TAF',
    seoDescEn: 'High-quality nylon coil zippers for sportswear, cycling apparel, and outdoor gear. Water-resistant, concealed, and invisible zipper options. Maximum flexibility and durability.',
    seoTitlePl: 'Zamki Nylonowe Spiralne | Wodoodporne i Ukryte | TAF',
    seoDescPl: 'Profesjonalne zamki nylonowe spiralne do odzieży sportowej, kolarskiej i outdoor. Wodoodporne, ukryte i niewidoczne. Maksymalna elastyczność i trwałość. YKK.',
  },
  'plastic-zippers': {
    wpSlugEn: 'plastic-zippers', wpSlugPl: 'zamki-plastikowe', labelEn: 'Plastic Zippers', labelPl: 'Zamki plastikowe',
    heroImg: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/plastikowyzielony-1.jpg',
    subtitleEn: 'Tailored to your needs', subtitlePl: 'Dopasowane do Twoich potrzeb',
    seoTitleEn: 'Plastic Zippers | Waterproof & Flame Retardant | TAF',
    seoDescEn: 'Premium plastic molded zippers (Delrin) for outdoor, military, and children\'s clothing. Waterproof, flame-retardant, glow-in-the-dark options. UV-resistant for marine use.',
    seoTitlePl: 'Zamki Plastikowe (Kostkowe) | Wodoodporne i Trudnopalne | TAF',
    seoDescPl: 'Wysokiej jakości zamki plastikowe (delrinowe) do odzieży outdoor, wojskowej i dziecięcej. Wodoodporne, trudnopalne, świecące w ciemności. Odporne na UV. YKK.',
  },
  'metal-zippers': {
    wpSlugEn: 'metal-zippers', wpSlugPl: 'zamki-metalowe', labelEn: 'Metal Zippers', labelPl: 'Zamki metalowe',
    heroImg: 'https://trimsandfasteners.com/wp-content/uploads/2025/06/metalslider34-scaled.jpg',
    subtitleEn: 'Highest quality, durability, and aesthetics', subtitlePl: 'Najwyższa jakość, trwałość i estetyka',
    seoTitleEn: 'Metal Zippers | Brass, Aluminum & Stainless Steel | TAF',
    seoDescEn: 'Premium metal zippers: brass, aluminum, and stainless steel teeth. Polished and antique finishes for fashion, workwear, and footwear. Industrial-grade durability.',
    seoTitlePl: 'Zamki Metalowe | Mosiądz, Aluminium i Stal Nierdzewna | TAF',
    seoDescPl: 'Wysokiej jakości zamki metalowe: mosiężne, aluminiowe i ze stali nierdzewnej. Wykończenia polerowane i antyczne. Do mody, odzieży roboczej i obuwia.',
  },
};

const PL_TO_EN: Record<string, string> = {
  'zamki-nylonowe': 'nylon-zippers',
  'zamki-plastikowe': 'plastic-zippers',
  'zamki-metalowe': 'metal-zippers',
};

type Props = { params: Promise<{ locale: string; type: string }> };

export async function generateStaticParams() {
  return [
    ...Object.keys(TYPE_SLUGS).map(slug => ({ locale: 'en', type: slug })),
    ...Object.keys(TYPE_SLUGS).map(slug => ({ locale: 'pl', type: slug })),
    ...Object.values(TYPE_SLUGS).map(v => ({ locale: 'pl', type: v.wpSlugPl })),
  ];
}

function resolveEnSlug(type: string): string | null {
  return TYPE_SLUGS[type] ? type : (PL_TO_EN[type] || null);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, type } = await params;
  const enSlug = resolveEnSlug(type);
  if (!enSlug) return {};
  const meta = TYPE_SLUGS[enSlug];
  return {
    title: locale === 'en' ? meta.seoTitleEn : meta.seoTitlePl,
    description: locale === 'en' ? meta.seoDescEn : meta.seoDescPl,
    alternates: {
      canonical: locale === 'en'
        ? `https://trimsandfasteners.com/type-of-zippers/${enSlug}/`
        : `https://trimsandfasteners.com/pl/rodzaje-zamkow/${meta.wpSlugPl}/`,
      languages: {
        en: `https://trimsandfasteners.com/type-of-zippers/${enSlug}/`,
        pl: `https://trimsandfasteners.com/pl/rodzaje-zamkow/${meta.wpSlugPl}/`,
      },
    },
  };
}

export default async function TypePage({ params }: Props) {
  const { locale, type } = await params;
  const enSlug = resolveEnSlug(type);
  if (!enSlug) notFound();

  const meta = TYPE_SLUGS[enSlug!];

  const lang = locale as Locale;
  const popupKey = lang === 'en' ? enSlug! : meta.wpSlugPl;
  const popupIds = CATEGORY_POPUP_IDS[lang]?.[popupKey] ?? [];

  const zippers = await getZippersByIds(popupIds, lang);

  const title = locale === 'en' ? meta.labelEn : meta.labelPl;

  return (
    <div>
      {/* Dark hero with background image */}
      <div className="subpage-hero relative bg-[#111111] text-white min-h-[90vh] flex items-center overflow-hidden">
        {meta.heroImg && (
          <>
            <Image
              src={meta.heroImg}
              alt=""
              fill
              className="object-cover opacity-40"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/50" />
          </>
        )}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="hero-animate text-xs text-white/40 font-[Jost] mb-4 flex items-center justify-center gap-2">
            <Link href={locale === 'en' ? '/' : '/pl/'} className="hover:text-white transition-colors">
              {locale === 'en' ? 'Home' : 'Start'}
            </Link>
            <span>›</span>
            <Link
              href={locale === 'en' ? '/type-of-zippers/' : '/pl/type-of-zippers/'}
              className="hover:text-white transition-colors"
            >
              {locale === 'en' ? 'Type of Zippers' : 'Rodzaje zamków'}
            </Link>
            <span>›</span>
            <span className="text-white/70">{locale === 'en' ? meta.labelEn : meta.labelPl}</span>
          </nav>

          <h1
            className="hero-animate font-[Jost] text-4xl sm:text-6xl font-light mb-3 max-w-3xl mx-auto text-white"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p className="hero-animate font-[Jost] text-white/60 mb-8 max-w-xl mx-auto text-lg leading-relaxed">
            {locale === 'en' ? meta.subtitleEn : meta.subtitlePl}
          </p>

          <SmoothAnchor
            href="#products"
            className="hero-animate inline-block bg-white text-black font-[Jost] font-normal text-sm px-8 py-3 hover:bg-gray-100 transition-colors"
          >
            {locale === 'en' ? 'Explore our products' : 'Odkryj produkty'}
          </SmoothAnchor>
        </div>

        {/* Mouse scroll indicator */}
        <SmoothAnchor href="#products" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5">
          <div className="w-5 h-8 rounded-full border-2 border-white/50 flex justify-center pt-1.5">
            <div className="w-0.5 h-2 bg-white/70 rounded-full animate-scroll-dot" />
          </div>
        </SmoothAnchor>
        <HeroAnimator />
      </div>
      <div id="products" style={{ scrollMarginTop: '80px' }} />

      {/* Hardcoded content sections (above product grid) */}
      {enSlug === 'plastic-zippers' && <PlasticZippersContent locale={locale} position="above" />}
      {enSlug === 'nylon-zippers' && <NylonZippersContent locale={locale} position="above" />}
      {enSlug === 'metal-zippers' && <MetalZippersContent locale={locale} position="above" />}

      {/* Product grid — split into sections of 12 */}
      {zippers.length > 0 && Array.from({ length: Math.ceil(zippers.length / 12) }, (_, i) => (
        <section key={i} className="bg-[#f5f3ef] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-3 text-[#111]">
              {locale === 'en' ? 'Our products' : 'Nasze produkty'}
            </h2>
            <p className="font-[Jost] text-sm text-gray-400 mb-8">
              {zippers.length} {locale === 'en' ? 'products' : 'produktów'}
            </p>
            <ZipperGrid zippers={zippers.slice(i * 12, i * 12 + 12)} />
          </div>
        </section>
      ))}

      {/* Hardcoded content sections (below product grid) */}
      {enSlug === 'plastic-zippers' && <PlasticZippersContent locale={locale} position="below" />}
      {enSlug === 'nylon-zippers' && <NylonZippersContent locale={locale} position="below" />}
      {enSlug === 'metal-zippers' && <MetalZippersContent locale={locale} position="below" />}

    </div>
  );
}
