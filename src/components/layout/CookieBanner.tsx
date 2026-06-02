'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import type { Locale } from '@/lib/types';

const STORAGE_KEY = 'taf_cookie_consent_v2';
export const GA_ID = 'G-1WQEEEEQ4B';

type ConsentPrefs = {
  analytics: boolean;
  marketing: boolean;
};

type View = 'banner' | 'settings' | 'hidden';

function pushConsent(prefs: ConsentPrefs) {
  if (typeof window === 'undefined') return;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const win = window as any;
  win.dataLayer = win.dataLayer || [];
  function gtag(...args: unknown[]) { win.dataLayer.push(args); }
  gtag('consent', 'update', {
    analytics_storage:   prefs.analytics  ? 'granted' : 'denied',
    ad_storage:          prefs.marketing  ? 'granted' : 'denied',
    ad_user_data:        prefs.marketing  ? 'granted' : 'denied',
    ad_personalization:  prefs.marketing  ? 'granted' : 'denied',
  });
}

function savePrefs(prefs: ConsentPrefs) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  pushConsent(prefs);
}

function loadPrefs(): ConsentPrefs | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as ConsentPrefs;
  } catch { return null; }
}

// Toggle component
function Toggle({ enabled, onChange }: { enabled: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={enabled}
      onClick={() => onChange(!enabled)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none flex-shrink-0 ${
        enabled ? 'bg-[#111]' : 'bg-gray-300'
      }`}
    >
      <span
        className={`inline-block h-4 w-4 rounded-full bg-white shadow transition-transform ${
          enabled ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );
}

export default function CookieBanner() {
  const locale = useLocale() as Locale;
  const isEn = locale === 'en';
  const [view, setView] = useState<View>('hidden');
  const [prefs, setPrefs] = useState<ConsentPrefs>({ analytics: false, marketing: false });
  const privacyHref = isEn ? '/privacy-policy/' : '/pl/privacy-policy/';

  // Open settings externally (e.g. from footer)
  const handleOpenSettings = useCallback(() => {
    const saved = loadPrefs();
    if (saved) setPrefs(saved);
    setView('settings');
  }, []);

  useEffect(() => {
    const saved = loadPrefs();
    if (!saved) {
      setView('banner');
    } else {
      pushConsent(saved);
    }
    window.addEventListener('taf-open-cookie-settings', handleOpenSettings);
    return () => window.removeEventListener('taf-open-cookie-settings', handleOpenSettings);
  }, [handleOpenSettings]);

  const acceptAll = () => {
    const all: ConsentPrefs = { analytics: true, marketing: true };
    savePrefs(all);
    setView('hidden');
  };

  const rejectAll = () => {
    const none: ConsentPrefs = { analytics: false, marketing: false };
    savePrefs(none);
    setView('hidden');
  };

  const saveCustom = () => {
    savePrefs(prefs);
    setView('hidden');
  };

  if (view === 'hidden') return null;

  /* ─── SETTINGS PANEL ─── */
  if (view === 'settings') return (
    <div className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={() => setView('hidden')} />

      <div className="relative z-10 w-full sm:max-w-lg bg-white shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="font-[Jost] text-base font-normal text-[#111]">
            {isEn ? 'Cookie Settings' : 'Ustawienia plików cookie'}
          </h2>
          <button onClick={() => setView('hidden')} className="text-gray-400 hover:text-gray-700 transition-colors p-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Intro */}
        <div className="px-6 py-4 border-b border-gray-100">
          <p className="font-[Jost] text-sm text-gray-500 leading-relaxed">
            {isEn
              ? 'We use cookies to improve your browsing experience and analyse traffic. You can choose which categories of cookies to allow below.'
              : 'Używamy plików cookie, aby poprawić komfort przeglądania i analizować ruch. Poniżej możesz wybrać, które kategorie chcesz włączyć.'}
            {' '}
            <Link href={privacyHref} className="underline text-gray-400 hover:text-gray-600 transition-colors">
              {isEn ? 'Privacy Policy' : 'Polityka prywatności'}
            </Link>
          </p>
        </div>

        {/* Category: Necessary */}
        <div className="px-6 py-5 border-b border-gray-100">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-base">🔒</span>
                <span className="font-[Jost] text-sm font-normal text-[#111]">
                  {isEn ? 'Necessary' : 'Niezbędne'}
                </span>
              </div>
              <p className="font-[Jost] text-xs text-gray-400 leading-relaxed">
                {isEn
                  ? 'Required for the website to function correctly. Cannot be disabled.'
                  : 'Wymagane do prawidłowego działania strony. Nie można ich wyłączyć.'}
              </p>
            </div>
            <span className="font-[Jost] text-xs text-gray-400 flex-shrink-0 mt-0.5">
              {isEn ? 'Always active' : 'Zawsze aktywne'}
            </span>
          </div>
        </div>

        {/* Category: Analytics */}
        <div className="px-6 py-5 border-b border-gray-100">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-base">📊</span>
                <span className="font-[Jost] text-sm font-normal text-[#111]">
                  {isEn ? 'Analytics' : 'Analityczne'}
                </span>
              </div>
              <p className="font-[Jost] text-xs text-gray-400 leading-relaxed">
                {isEn
                  ? 'Help us understand how visitors use our website (Google Analytics). Data is anonymised.'
                  : 'Pomagają nam zrozumieć, jak odwiedzający korzystają z witryny (Google Analytics). Dane są anonimizowane.'}
              </p>
            </div>
            <Toggle
              enabled={prefs.analytics}
              onChange={(v) => setPrefs(p => ({ ...p, analytics: v }))}
            />
          </div>
        </div>

        {/* Category: Marketing */}
        <div className="px-6 py-5 border-b border-gray-100">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-base">📣</span>
                <span className="font-[Jost] text-sm font-normal text-[#111]">
                  {isEn ? 'Marketing' : 'Marketingowe'}
                </span>
              </div>
              <p className="font-[Jost] text-xs text-gray-400 leading-relaxed">
                {isEn
                  ? 'Used to display personalised advertisements (Google Ads). May track you across websites.'
                  : 'Służą do wyświetlania spersonalizowanych reklam (Google Ads). Mogą śledzić Cię między stronami.'}
              </p>
            </div>
            <Toggle
              enabled={prefs.marketing}
              onChange={(v) => setPrefs(p => ({ ...p, marketing: v }))}
            />
          </div>
        </div>

        {/* Action buttons */}
        <div className="px-6 py-4 flex flex-col sm:flex-row gap-2 sm:gap-3">
          <button
            onClick={rejectAll}
            className="font-[Jost] text-sm border border-gray-200 text-gray-500 px-4 py-2.5 hover:border-gray-400 hover:text-gray-700 transition-colors"
          >
            {isEn ? 'Reject all' : 'Odrzuć wszystkie'}
          </button>
          <button
            onClick={saveCustom}
            className="font-[Jost] text-sm border border-[#111] text-[#111] px-4 py-2.5 hover:bg-gray-50 transition-colors flex-1"
          >
            {isEn ? 'Save preferences' : 'Zapisz ustawienia'}
          </button>
          <button
            onClick={acceptAll}
            className="font-[Jost] text-sm bg-[#111] text-white px-4 py-2.5 hover:bg-gray-800 transition-colors flex-1"
          >
            {isEn ? 'Accept all' : 'Akceptuj wszystkie'}
          </button>
        </div>
      </div>
    </div>
  );

  /* ─── MAIN BANNER — centered popup ─── */
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 w-full max-w-md bg-white shadow-2xl">
        <div className="px-8 pt-8 pb-6">
          <h2 className="font-[Jost] text-lg font-normal text-[#111] mb-3">
            {isEn ? 'We value your privacy' : 'Szanujemy Twoją prywatność'}
          </h2>
          <p className="font-[Jost] text-sm text-gray-500 leading-relaxed">
            {isEn
              ? <>We use cookies to improve your experience and measure the effectiveness of our advertising. You can manage your preferences at any time. <Link href={privacyHref} className="underline text-gray-400 hover:text-gray-600 transition-colors">Privacy Policy</Link></>
              : <>Używamy plików cookie, aby poprawić komfort przeglądania i mierzyć skuteczność reklam. Możesz zarządzać preferencjami w każdej chwili. <Link href={privacyHref} className="underline text-gray-400 hover:text-gray-600 transition-colors">Polityka prywatności</Link></>
            }
          </p>
        </div>

        <div className="px-8 pb-8 flex flex-col gap-2">
          <button
            onClick={acceptAll}
            className="w-full font-[Jost] text-sm bg-[#111] text-white px-6 py-3 hover:bg-black transition-colors"
          >
            {isEn ? 'Accept all' : 'Akceptuj wszystkie'}
          </button>
          <div className="flex gap-2">
            <button
              onClick={() => { setPrefs(loadPrefs() ?? { analytics: false, marketing: false }); setView('settings'); }}
              className="flex-1 font-[Jost] text-sm border border-gray-200 text-[#111] px-4 py-2.5 hover:border-[#111] transition-colors"
            >
              {isEn ? 'Settings' : 'Ustawienia'}
            </button>
            <button
              onClick={rejectAll}
              className="flex-1 font-[Jost] text-sm border border-gray-200 text-gray-400 px-4 py-2.5 hover:border-gray-400 hover:text-gray-600 transition-colors"
            >
              {isEn ? 'Reject all' : 'Odrzuć wszystkie'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
