'use client';
import { usePathname } from 'next/navigation';

// Pages whose last content section uses a dark (#111111) background.
// The copyright bar should match so there's no jarring colour change.
const DARK_LAST_SECTION_PAGES = [
  '/nylon-zipper-chain-size-chart',
  '/nylon-zipper-chain-size-chart/',
  '/pl/tasmy-spiralne-zestawienie-rozmiarow',
  '/pl/tasmy-spiralne-zestawienie-rozmiarow/',
];

export default function SubpageCopyright({ locale }: { locale: string }) {
  const pathname = usePathname();
  const isHome = pathname === '/' || pathname === '/pl' || pathname === '/pl/';
  if (isHome) return null;

  const isDark = DARK_LAST_SECTION_PAGES.some(p => pathname === p);
  const isEn = locale === 'en';

  return (
    <div className={`py-5 text-center ${isDark ? 'bg-[#111111] border-t border-white/10' : 'bg-[#f5f3ef] border-t border-gray-200'}`}>
      <p className={`font-[Jost] text-xs px-4 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
        {isEn
          ? "© All rights reserved. Copying, processing, and distribution of materials without the author's consent is prohibited."
          : '© Wszelkie prawa zastrzeżone. Kopiowanie, przetwarzanie i dystrybucja materiałów bez zgody autora jest zabroniona.'}
      </p>
    </div>
  );
}
