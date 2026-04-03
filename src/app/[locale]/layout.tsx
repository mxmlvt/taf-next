import type { Metadata } from 'next';
import Script from 'next/script';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SubpageCopyright from '@/components/layout/SubpageCopyright';
import CookieBanner from '@/components/layout/CookieBanner';
import PageTransition from '@/components/ui/PageTransition';
import '../globals.css';

const GA_ID = 'G-1WQEEEEQ4B';

export const metadata: Metadata = {
  metadataBase: new URL('https://trimsandfasteners.com'),
};

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'en' | 'pl')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />

        {/* Google Consent Mode v2 — default DENIED before GA loads */}
        <Script id="consent-mode-default" strategy="beforeInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            wait_for_update: 500
          });
          gtag('js', new Date());
        `}</Script>

        {/* GA4 — loads after consent default is set */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-config" strategy="afterInteractive">{`
          gtag('config', '${GA_ID}', { send_page_view: true });
        `}</Script>
      </head>
      <body className="bg-white text-[#111111] antialiased">
        <NextIntlClientProvider messages={messages}>
          <Header menu={[]} translations={{}} />
          <main><PageTransition>{children}</PageTransition></main>
          <SubpageCopyright locale={locale} />
          <Footer />
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
