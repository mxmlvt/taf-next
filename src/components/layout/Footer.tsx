'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Phone, Mail } from 'lucide-react';
import type { Locale } from '@/lib/types';

export default function Footer() {
  const locale = useLocale() as Locale;

  const typeLinks = locale === 'en'
    ? [
        { label: 'Metal zippers', href: '/type-of-zippers/metal-zippers/' },
        { label: 'Plastic zippers', href: '/type-of-zippers/plastic-zippers/' },
        { label: 'Nylon zippers', href: '/type-of-zippers/nylon-zippers/' },
      ]
    : [
        { label: 'Zamki metalowe', href: '/pl/type-of-zippers/metal-zippers/' },
        { label: 'Zamki plastikowe', href: '/pl/type-of-zippers/plastic-zippers/' },
        { label: 'Zamki nylonowe', href: '/pl/type-of-zippers/nylon-zippers/' },
      ];

  const usageLinks = locale === 'en'
    ? [
        { label: 'Zips for fire-resistant clothing', href: '/use-of-zippers/fire-protection/' },
        { label: 'Zips for Military clothing', href: '/use-of-zippers/military/' },
        { label: 'Zips for furniture', href: '/use-of-zippers/furniture/' },
        { label: 'Zips for baby clothing', href: '/use-of-zippers/baby/' },
        { label: 'Zips for Fashion', href: '/use-of-zippers/fashion/' },
        { label: 'Buckles & plastic hardware', href: '/use-of-zippers/buckles-plastic-hardware/' },
      ]
    : [
        { label: 'Zips for fire-resistant clothing', href: '/pl/use-of-zippers/fire-protection/' },
        { label: 'Zips for Military clothing', href: '/pl/use-of-zippers/military/' },
        { label: 'Zips for furniture', href: '/pl/use-of-zippers/furniture/' },
        { label: 'Zips for baby clothing', href: '/pl/use-of-zippers/baby/' },
        { label: 'Zips for Fashion', href: '/pl/use-of-zippers/fashion/' },
        { label: 'Buckles & plastic hardware', href: '/pl/use-of-zippers/buckles-plastic-hardware/' },
      ];

  return (
    <footer className="bg-[#111111] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Column 1: Contact */}
          <div>
            <h3 className="text-white font-normal mb-5 font-[Jost] text-sm uppercase tracking-wider">
              {locale === 'en' ? 'Contact' : 'Kontakt'}
            </h3>
            <address className="not-italic space-y-1 text-sm font-[Jost] text-gray-400 leading-relaxed">
              <p>EMKA Marta Kubicka</p>
              <p>ul. Grzybowska 87</p>
              <p>00-844 Warszawa</p>
              <p>NIP: 118-171-51-85</p>
              <p className="mb-3">REGON: 147429516</p>
              <a href="tel:+48221101101" className="flex items-center gap-1.5 hover:text-white transition-colors mt-3 text-sm">
                <Phone size={11} />
                +48 22 1101101
              </a>
              <a href="tel:+48723331331" className="flex items-center gap-1.5 hover:text-white transition-colors text-sm">
                <Phone size={11} />
                +48 723 331 331
              </a>
              <a href="mailto:contact@trimsandfasteners.com" className="flex items-center gap-1.5 hover:text-white transition-colors mt-1 text-sm">
                <Mail size={11} />
                contact@trimsandfasteners.com
              </a>
            </address>
          </div>

          {/* Column 2: Type of Zippers */}
          <div>
            <h3 className="text-white font-normal mb-5 font-[Jost] text-sm uppercase tracking-wider">
              {locale === 'en' ? 'Type of zippers' : 'Rodzaje zamków'}
            </h3>
            <ul className="space-y-2.5">
              {typeLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors font-[Jost]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Use of Zippers */}
          <div>
            <h3 className="text-white font-normal mb-5 font-[Jost] text-sm uppercase tracking-wider">
              {locale === 'en' ? 'Use of zippers' : 'Zastosowanie zamków'}
            </h3>
            <ul className="space-y-2.5">
              {usageLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors font-[Jost]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: QR code placeholder */}
          <div className="flex flex-col items-start">
            <div className="bg-white rounded p-2 w-28 h-28 flex items-center justify-center">
              <Image
                src="https://wp.trimsandfasteners.com/wp-content/uploads/2025/08/Projekt-bez-nazwy-75.png"
                alt="TAF QR Code"
                width={96}
                height={96}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* TAF logo centered */}
        <div className="flex justify-center py-6 border-t border-gray-800">
          <Link href={locale === 'en' ? '/' : '/pl/'}>
            <Image
              src="https://wp.trimsandfasteners.com/wp-content/uploads/2025/08/Projekt-bez-nazwy-75.png"
              alt="TAF - Trims and Fasteners"
              width={80}
              height={32}
              className="h-8 w-auto brightness-0 invert"
            />
          </Link>
        </div>

        {/* Bottom bar */}
        <div className="pt-4 border-t border-gray-800 text-center space-y-1">
          <p className="text-xs text-gray-500 font-[Jost]">
            © {new Date().getFullYear()} – Trims and fasteners – {locale === 'en' ? 'Distributor of zippers and clothing accessories' : 'Dystrybutor zamków i akcesoriów odzieżowych'} – {locale === 'en' ? 'All rights reserved' : 'Wszelkie prawa zastrzeżone'}
          </p>
          <p className="text-xs text-gray-600 font-[Jost] flex items-center justify-center gap-3 flex-wrap">
            <Link href={locale === 'en' ? '/privacy-policy/' : '/pl/privacy-policy/'} className="hover:text-white transition-colors">
              {locale === 'en' ? 'Privacy policy' : 'Polityka prywatności'}
            </Link>
            <span className="text-gray-700">·</span>
            <button
              onClick={() => window.dispatchEvent(new Event('taf-open-cookie-settings'))}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {locale === 'en' ? 'Cookie settings' : 'Ustawienia cookies'}
            </button>
          </p>
          <p className="text-xs text-gray-500 font-[Jost]">
            {locale === 'en'
              ? "All rights reserved. Copying, processing, and distribution of materials without the author's consent is prohibited."
              : 'Wszelkie prawa zastrzeżone. Kopiowanie, przetwarzanie i dystrybucja materiałów bez zgody autora jest zabroniona.'}
          </p>
        </div>
      </div>
    </footer>
  );
}
