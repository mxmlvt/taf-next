import type { Metadata } from 'next';
import type { Locale } from '@/lib/types';
import Hero from '@/components/sections/Hero';
import HomeSections from '@/components/sections/HomeSections';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'en'
      ? 'TAF - Premium Zippers & Fasteners Supplier | Trims and Fasteners'
      : 'TAF - Kompleksowy Dostawca Zamków | Dystrybutor YKK Polska',
    description: locale === 'en'
      ? 'Professional supplier of high-quality zippers, fasteners, and bag hardware. YKK distributor. Custom solutions for military, sportswear, and fashion industries.'
      : 'Profesjonalny dostawca zamków błyskawicznych YKK. Zamki plastikowe, nylonowe i metalowe. Rozwiązania dla wojska, odzieży sportowej i mody. Szybka dostawa.',
    alternates: {
      canonical: locale === 'en' ? 'https://trimsandfasteners.com/' : 'https://trimsandfasteners.com/pl/',
      languages: { en: 'https://trimsandfasteners.com/', pl: 'https://trimsandfasteners.com/pl/' },
    },
    openGraph: {
      title: locale === 'en' ? 'TAF - Premium Zippers & Fasteners Supplier' : 'TAF - Kompleksowy Dostawca Zamków',
      description: locale === 'en' ? 'Professional supplier of high-quality zippers, fasteners, and bag hardware. YKK distributor. Custom solutions for military, sportswear, and fashion industries.' : 'Profesjonalny dostawca zamków błyskawicznych YKK. Zamki plastikowe, nylonowe i metalowe. Rozwiązania dla wojska, odzieży sportowej i mody.',
      locale: locale === 'en' ? 'en_US' : 'pl_PL',
      type: 'website',
    },
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  const HERO_SLIDES = [
    'https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/ykkmetal-scaled.jpg',
    'https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/metalslider2-scaled.jpg',
  ];

  return (
    <>
      <Hero slides={HERO_SLIDES} />
      <HomeSections locale={locale as Locale} />
    </>
  );
}
