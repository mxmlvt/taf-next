import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'trimsandfasteners.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },

  // Rewrites: Polish translated URLs served natively (URL stays Polish – this IS the canonical)
  async rewrites() {
    return [
      { source: '/pl/zastosowanie-zamkow/:slug*', destination: '/pl/use-of-zippers/:slug*' },
      { source: '/pl/zastosowanie-zamkow',        destination: '/pl/use-of-zippers' },
      { source: '/pl/rodzaje-zamkow/:slug*',       destination: '/pl/type-of-zippers/:slug*' },
      { source: '/pl/rodzaje-zamkow',             destination: '/pl/type-of-zippers' },
      { source: '/pl/kontakt',                    destination: '/pl/contact' },
      { source: '/pl/o-nas',                      destination: '/pl/about-us' },
      { source: '/pl/personalizacja',             destination: '/pl/personalization' },
      { source: '/pl/polityka-prywatnosci',       destination: '/pl/privacy-policy' },
      { source: '/pl/tasmy-spiralne-zestawienie-rozmiarow', destination: '/pl/nylon-zipper-chain-size-chart' },
    ];
  },

  // Redirects: English-slug Polish URLs → proper Polish translated URLs (301)
  async redirects() {
    return [
      // use-of-zippers – redirect EN slugs to PL slugs
      { source: '/pl/use-of-zippers/fashion',                  destination: '/pl/zastosowanie-zamkow/moda',                        permanent: true },
      { source: '/pl/use-of-zippers/cycling-sportswear',       destination: '/pl/zastosowanie-zamkow/odziez-sportowa',             permanent: true },
      { source: '/pl/use-of-zippers/baby',                     destination: '/pl/zastosowanie-zamkow/dzieci',                      permanent: true },
      { source: '/pl/use-of-zippers/military',                 destination: '/pl/zastosowanie-zamkow/wojsko',                      permanent: true },
      { source: '/pl/use-of-zippers/furniture',                destination: '/pl/zastosowanie-zamkow/meble',                       permanent: true },
      { source: '/pl/use-of-zippers/fire-protection',          destination: '/pl/zastosowanie-zamkow/odziez-ognioodporna',         permanent: true },
      { source: '/pl/use-of-zippers/buckles-plastic-hardware', destination: '/pl/zastosowanie-zamkow/zapiecia-elementy-plastikowe', permanent: true },
      { source: '/pl/use-of-zippers',                          destination: '/pl/zastosowanie-zamkow',                             permanent: true },
      { source: '/pl/use-of-zippers/',                         destination: '/pl/zastosowanie-zamkow/',                            permanent: true },
      // type-of-zippers
      { source: '/pl/type-of-zippers',  destination: '/pl/rodzaje-zamkow',  permanent: true },
      { source: '/pl/type-of-zippers/', destination: '/pl/rodzaje-zamkow/', permanent: true },
      // other pages
      { source: '/pl/contact',          destination: '/pl/kontakt',           permanent: true },
      { source: '/pl/contact/',         destination: '/pl/kontakt/',          permanent: true },
      { source: '/pl/about-us',         destination: '/pl/o-nas',             permanent: true },
      { source: '/pl/about-us/',        destination: '/pl/o-nas/',            permanent: true },
      { source: '/pl/personalization',  destination: '/pl/personalizacja',    permanent: true },
      { source: '/pl/personalization/', destination: '/pl/personalizacja/',   permanent: true },
      { source: '/pl/privacy-policy',   destination: '/pl/polityka-prywatnosci',  permanent: true },
      { source: '/pl/privacy-policy/',  destination: '/pl/polityka-prywatnosci/', permanent: true },
      { source: '/pl/nylon-zipper-chain-size-chart',  destination: '/pl/tasmy-spiralne-zestawienie-rozmiarow',  permanent: true },
      { source: '/pl/nylon-zipper-chain-size-chart/', destination: '/pl/tasmy-spiralne-zestawienie-rozmiarow/', permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
