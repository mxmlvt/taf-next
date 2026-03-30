import type { Metadata } from 'next';
import Image from 'next/image';
import type { Locale } from '@/lib/types';
import ContactForm from '@/components/sections/ContactForm';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'en'
      ? 'Contact TAF | Get a Quote for Zippers & Fasteners'
      : 'Kontakt TAF - Zamki Błyskawiczne | Wycena zamówień',
    description: locale === 'en'
      ? 'Contact TAF for zipper and fastener inquiries. Wholesale quotes, custom solutions, and technical support. Fast response within 24 hours. Serving customers worldwide'
      : 'Skontaktuj się z TAF w sprawie zamków błyskawicznych. Wyceny hurtowe, doradztwo i wsparcie klientów. Obsługa klientów w Polsce i za granicą.',
    alternates: {
      canonical: locale === 'en' ? 'https://trimsandfasteners.com/contact/' : 'https://trimsandfasteners.com/pl/kontakt/',
      languages: { en: 'https://trimsandfasteners.com/contact/', pl: 'https://trimsandfasteners.com/pl/kontakt/' },
    },
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const isEn = locale === 'en';

  return (
    <div>
      {/* Dark hero with zipper background image */}
      <div className="relative bg-[#111111] text-white py-24 overflow-hidden">
        <Image
          src="https://trimsandfasteners.com/wp-content/uploads/2025/06/ykkmetal-scaled.jpg"
          alt=""
          fill
          className="object-cover opacity-40"
          priority
          sizes="100vw"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-[Jost] text-4xl sm:text-6xl font-light text-white">
            {isEn ? 'Contact' : 'Kontakt'}
          </h1>
        </div>
      </div>

      {/* Contact Form section: label left, form right */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: "Contact Form" label */}
          <div>
            <h2 className="font-[Jost] text-2xl sm:text-3xl font-normal mb-4">
              {isEn ? 'Contact Form' : 'Formularz kontaktowy'}
            </h2>
          </div>
          {/* Right: form */}
          <div>
            <ContactForm locale={locale as Locale} />
          </div>
        </div>
      </div>

      {/* Contact details section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: about text + contact details */}
          <div>
            <h2 className="font-[Jost] text-2xl sm:text-3xl font-normal mb-6">
              {isEn ? 'Contact details' : 'Dane kontaktowe'}
            </h2>
            <div className="space-y-4 font-[Jost] text-gray-600 text-sm leading-relaxed mb-8">
              <p>
                {isEn
                  ? 'Do you ask about quality and treatment? Contact us – together we will take care of every detail of your production.'
                  : 'Pytasz o jakość i obsługę? Skontaktuj się z nami – razem zadbamy o każdy szczegół Twojej produkcji.'}
              </p>
              <p>
                {isEn
                  ? 'As an experienced distributor of zippers, we understand how important reliability and precision are at every stage of order fulfilment. Whether you run a large sewing factory, a design studio or are developing a clothing brand, we are here to support you with the right solutions. Write to us and we will compare an offer tailored to your needs and possibilities.'
                  : 'Jako doświadczony dystrybutor zamków rozumiemy, jak ważna jest niezawodność i precyzja na każdym etapie realizacji zamówienia. Napisz do nas, a przygotujemy ofertę dostosowaną do Twoich potrzeb.'}
              </p>
            </div>
          </div>

          {/* Right: TAF logo + address block */}
          <div className="flex flex-col gap-6">
            <Image
              src="https://trimsandfasteners.com/wp-content/uploads/2025/08/Projekt-bez-nazwy-75.png"
              alt="TAF - Trims and Fasteners"
              width={160}
              height={40}
              className="h-8 w-auto max-w-[160px] object-contain"
            />
            <div className="font-[Jost] text-sm text-gray-700 space-y-1">
              <p className="font-medium">EMKA Marta Kubicka</p>
              <p>ul. Grzybowska 87</p>
              <p>00-844 Warszawa</p>
              <p>NIP: 118-171-51-85</p>
              <p>REGON: 147429516</p>
            </div>
            <div className="font-[Jost] text-sm text-gray-700 space-y-2">
              <p>
                <a href="tel:+48221101101" className="hover:text-black transition-colors">
                  ☎ +48 22 1101101
                </a>
              </p>
              <p>
                <a href="tel:+48723331331" className="hover:text-black transition-colors">
                  ☎ +48 723 331 331
                </a>
              </p>
              <p>
                <a href="mailto:contact@trimsandfasteners.com" className="hover:text-black transition-colors">
                  ✉ contact@trimsandfasteners.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
