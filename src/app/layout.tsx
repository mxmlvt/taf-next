import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

const GA_ID = 'G-1WQEEEEQ4B'
const AW_ID = 'AW-18178687838'

export const metadata: Metadata = {
  metadataBase: new URL('https://trimsandfasteners.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-config" strategy="afterInteractive">{`
          gtag('config', '${GA_ID}', { send_page_view: true });
          gtag('config', '${AW_ID}');
        `}</Script>
      </head>
      <body className="bg-white text-[#111111] antialiased">
        {children}
      </body>
    </html>
  )
}
