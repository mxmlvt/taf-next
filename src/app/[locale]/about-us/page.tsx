import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SmoothAnchor from '@/components/ui/SmoothAnchor';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'en'
      ? 'About TAF | Premium Zipper Supplier & YKK Distributor'
      : 'O TAF | Dystrybutor YKK i Dostawca Zamków | Warszawa, Polska',
    description: locale === 'en'
      ? 'TAF - authorized YKK distributor in Warsaw, Poland. Premium zippers and fasteners across Europe. Custom solutions specialist.'
      : 'TAF (Trims and Fasteners) - autoryzowany dystrybutor YKK z Warszawy. Dostarczamy wysokiej jakości zamki i akcesoria. Działamy w Polsce i międzynarodowo.',
    alternates: {
      canonical: locale === 'en' ? 'https://trimsandfasteners.com/about-us/' : 'https://trimsandfasteners.com/pl/o-nas/',
      languages: { en: 'https://trimsandfasteners.com/about-us/', pl: 'https://trimsandfasteners.com/pl/o-nas/' },
    },
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;


  return (
    <div className="bg-[#f5f3ef] min-h-screen">
      {/* Dark hero */}
      <div className="subpage-hero relative bg-[#111111] text-white min-h-[90vh] flex items-center overflow-hidden">
        <Image
          src="https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/ykkmetal-scaled.jpg"
          alt=""
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-white/40 font-[Jost] mb-4 flex items-center gap-2">
            <Link href={locale === 'en' ? '/' : '/pl/'} className="hover:text-white transition-colors">
              {locale === 'en' ? 'Home' : 'Start'}
            </Link>
            <span>›</span>
            <span className="text-white/70">{locale === 'en' ? 'About Us' : 'O nas'}</span>
          </nav>
          <h1 className="font-[Jost] text-3xl sm:text-5xl font-light mb-5 max-w-3xl text-white">
            {locale === 'en' ? 'About TAF' : 'O nas'}
          </h1>
          <p className="font-[Jost] text-white/60 mb-8 max-w-2xl text-sm leading-relaxed">
            {locale === 'en'
              ? 'Professional distributor of YKK zippers and fasteners serving European manufacturers.'
              : 'Profesjonalny dystrybutor zamków YKK obsługujący europejskich producentów.'}
          </p>
          <SmoothAnchor
            href="#about-content"
            className="inline-block bg-white text-black font-[Jost] font-normal text-sm px-8 py-3 hover:bg-gray-100 transition-colors"
          >
            {locale === 'en' ? 'Read more' : 'Czytaj więcej'}
          </SmoothAnchor>
        </div>
      </div>

      {/* Main content — hardcoded from WP, two-column with TAF watermark */}
      <section id="about-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-[Jost] text-xs font-normal text-gray-500 uppercase tracking-widest mb-4">
              {locale === 'en' ? 'Trims and Fasteners Company' : 'Firma Trims and Fasteners'}
            </p>
            <h2 className="font-[Jost] text-4xl sm:text-5xl font-light text-[#111] leading-tight mb-8">
              {locale === 'en' ? 'Proven supplier of zip fasteners' : 'Sprawdzony dostawca zamków błyskawicznych'}
            </h2>
            <div className="space-y-4 font-[Jost] text-gray-500 text-sm leading-relaxed">
              <p>
                {locale === 'en'
                  ? 'TAF – nearly two decades of experience in the global zip fastener market, we are able to offer complete solutions for all industries related to sewing. We always approach our work with passion and creativity, striving to provide solutions for all branches of the sewing industry.'
                  : 'TAF – prawie dwie dekady doświadczenia na globalnym rynku zamków błyskawicznych. Oferujemy kompleksowe rozwiązania dla wszystkich gałęzi przemysłu związanych z szyciem. Zawsze podchodzimy do pracy z pasją i kreatywnością.'}
              </p>
              <p>
                {locale === 'en'
                  ? 'We specialise in harsh environments, such as military and uniformed services, firefighter suits and specialized workwear, PPE/EOD, automotive, furniture, outdoor/cycling apparel, but we also supply products for mid-range and high-end fashion brands. We offer a comprehensive range of services and work with the best globally recognised brand — the Japanese company YKK.'
                  : 'Specjalizujemy się w trudnych środowiskach: wojsko, służby mundurowe, kombinezony strażackie, odzież BHP, PPE/EOD, motoryzacja, meble, odzież outdoorowa i rowerowa. Dostarczamy również produkty dla marek modowych. Współpracujemy z YKK — uznanym globalnie japońskim producentem.'}
              </p>
              <p>
                {locale === 'en'
                  ? 'TAF zippers are always reliable, and our product and logistics expertise can easily simplify your supply chain. Excellent product knowledge, quick stats, and excellent customer service – that\'s what you can expect from our company.'
                  : 'Zamki TAF są zawsze niezawodne, a nasza wiedza produktowa i logistyczna może z łatwością uprościć Twój łańcuch dostaw. Doskonała znajomość produktu, szybkie statystyki i znakomita obsługa — tego możesz oczekiwać od naszej firmy.'}
              </p>
              <p className="italic text-gray-400">
                {locale === 'en'
                  ? 'Passion, commitment, dedication, honesty and innovation – these are the values we hold dear. Tell us what you need, and we will take care of the rest!'
                  : 'Pasja, zaangażowanie, poświęcenie, uczciwość i innowacja — to wartości, które cenimy. Powiedz nam, czego potrzebujesz — my zajmiemy się resztą!'}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative">
              <div className="text-[12rem] sm:text-[16rem] font-[Jost] font-bold text-[#111]/8 leading-none select-none pointer-events-none">
                TAF
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="https://wp.trimsandfasteners.com/wp-content/uploads/2025/08/Projekt-bez-nazwy-75.png"
                  alt="TAF - Trims and Fasteners"
                  width={200}
                  height={80}
                  className="w-40 sm:w-52 h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
