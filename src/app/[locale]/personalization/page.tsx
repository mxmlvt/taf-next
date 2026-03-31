import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PersonalizationContent from '@/components/sections/PersonalizationContent';
import HeroAnimator from '@/components/ui/HeroAnimator';
import SmoothAnchor from '@/components/ui/SmoothAnchor';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'en'
      ? 'Custom Logo Zippers | Personalization Zipper Branding Services | TAF'
      : 'Zamki z Logo | Personalizacja i Branding Zamków | TAF',
    description: locale === 'en'
      ? 'Custom zipper personalization with your logo or branding. Embossed, printed, or engraved options. Perfect for brand visibility in sportswear, fashion, and workwear. Low MOQ.'
      : 'Personalizacja zamków z Twoim logo. Nadruk, wytłaczanie, grawer. Niskie MOQ. Idealne dla widoczności marki w odzieży sportowej, modzie i workwear.',
    alternates: {
      canonical: locale === 'en' ? 'https://trimsandfasteners.com/personalization/' : 'https://trimsandfasteners.com/pl/personalizacja/',
      languages: {
        en: 'https://trimsandfasteners.com/personalization/',
        pl: 'https://trimsandfasteners.com/pl/personalizacja/',
      },
    },
  };
}

export default async function PersonalizationPage({ params }: Props) {
  const { locale } = await params;
  const isEn = locale === 'en';

  return (
    <div>
      {/* Dark hero */}
      <div className="subpage-hero relative bg-[#111111] text-white min-h-[90vh] flex items-center overflow-hidden">
        <Image
          src="https://wp.trimsandfasteners.com/wp-content/uploads/2025/07/logo-WR-1-scaled.png"
          alt=""
          fill
          className="object-cover opacity-40"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="hero-animate text-xs text-white/40 font-[Jost] mb-4 flex items-center justify-center gap-2">
            <Link href={isEn ? '/' : '/pl/'} className="hover:text-white transition-colors">
              {isEn ? 'Home' : 'Start'}
            </Link>
            <span>›</span>
            <span className="text-white/70">{isEn ? 'Personalization' : 'Personalizacja'}</span>
          </nav>
          <h1 className="hero-animate font-[Jost] text-4xl sm:text-6xl font-light mb-3 max-w-3xl mx-auto text-white">
            {isEn ? 'Personalization' : 'Personalizacja'}
          </h1>
          <p className="hero-animate font-[Jost] text-white/60 mb-8 max-w-xl mx-auto text-lg leading-relaxed">
            {isEn ? 'Your vision, our execution' : 'Twoja wizja, nasze wykonanie'}
          </p>
          <SmoothAnchor
            href="#products"
            className="hero-animate inline-block bg-white text-black font-[Jost] font-normal text-sm px-8 py-3 hover:bg-gray-100 transition-colors"
          >
            {isEn ? 'Explore our products' : 'Odkryj produkty'}
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

      <PersonalizationContent locale={locale} />
    </div>
  );
}
