import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SubpageCopyright from '@/components/layout/SubpageCopyright'
import CookieBanner from '@/components/layout/CookieBanner'
import PageTransition from '@/components/ui/PageTransition'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!routing.locales.includes(locale as 'en' | 'pl')) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      {/* Set <html lang> client-side because root layout can't read the locale param */}
      <script
        dangerouslySetInnerHTML={{
          __html: `if(document.documentElement.lang!=="${locale}")document.documentElement.lang="${locale}";`,
        }}
      />
      <Header menu={[]} translations={{}} />
      <main><PageTransition>{children}</PageTransition></main>
      <SubpageCopyright locale={locale} />
      <Footer />
      <CookieBanner />
    </NextIntlClientProvider>
  )
}
