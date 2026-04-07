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
      {
        protocol: 'https',
        hostname: 'wp.trimsandfasteners.com',
        pathname: '/wp-content/**',
      },
    ],
  },

  // Rewrites: Polish translated URLs served natively (URL stays Polish – this IS the canonical)
  async rewrites() {
    return [
      // Proxy WordPress assets/API so old trimsandfasteners.com image URLs still resolve
      { source: '/wp-content/:path*', destination: 'https://wp.trimsandfasteners.com/wp-content/:path*' },
      { source: '/wp-json/:path*',    destination: 'https://wp.trimsandfasteners.com/wp-json/:path*' },
      { source: '/wp-admin/:path*',   destination: 'https://wp.trimsandfasteners.com/wp-admin/:path*' },
      { source: '/wp-login.php',      destination: 'https://wp.trimsandfasteners.com/wp-login.php' },

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
      // Blog posts: old WP had no /blog/ prefix, new site uses /blog/slug
      { source: '/zippers-comparison-metal-plastic-and-nylon',  destination: '/blog/zippers-comparison-metal-plastic-and-nylon',  permanent: true },
      { source: '/zippers-comparison-metal-plastic-and-nylon/', destination: '/blog/zippers-comparison-metal-plastic-and-nylon/', permanent: true },
      { source: '/coil-zippers-characteristics-and-subtypes',   destination: '/blog/coil-zippers-characteristics-and-subtypes',   permanent: true },
      { source: '/coil-zippers-characteristics-and-subtypes/',  destination: '/blog/coil-zippers-characteristics-and-subtypes/',  permanent: true },
      { source: '/where-to-buy-zippers-wholesale',              destination: '/blog/where-to-buy-zippers-wholesale',              permanent: true },
      { source: '/where-to-buy-zippers-wholesale/',             destination: '/blog/where-to-buy-zippers-wholesale/',             permanent: true },
      { source: '/zippers-for-bags-and-backpacks',              destination: '/blog/zippers-for-bags-and-backpacks',              permanent: true },
      { source: '/zippers-for-bags-and-backpacks/',             destination: '/blog/zippers-for-bags-and-backpacks/',             permanent: true },
      { source: '/zippers-in-the-furniture-industry',           destination: '/',  permanent: true },
      { source: '/zippers-in-the-furniture-industry/',          destination: '/',  permanent: true },
      { source: '/blog/zippers-in-the-furniture-industry',      destination: '/',  permanent: true },
      { source: '/blog/zippers-in-the-furniture-industry/',     destination: '/',  permanent: true },
      { source: '/pl/blog/zamki-blyskawiczne-w-branzy-meblarskiej',  destination: '/pl/', permanent: true },
      { source: '/pl/blog/zamki-blyskawiczne-w-branzy-meblarskiej/', destination: '/pl/', permanent: true },
      { source: '/how-to-fix-zipper-problems',                  destination: '/blog/how-to-fix-zipper-problems',                  permanent: true },
      { source: '/how-to-fix-zipper-problems/',                 destination: '/blog/how-to-fix-zipper-problems/',                 permanent: true },
      { source: '/how-to-recognize-a-high-quality-zipper',      destination: '/blog/how-to-recognize-a-high-quality-zipper',      permanent: true },
      { source: '/how-to-recognize-a-high-quality-zipper/',     destination: '/blog/how-to-recognize-a-high-quality-zipper/',     permanent: true },

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
