'use client';
import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import type { Locale } from '@/lib/types';

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '';

export default function ContactForm({ locale }: { locale: Locale }) {
  const t = useTranslations('contact');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  // Honeypot – invisible to humans, bots fill it in
  const [honeypot, setHoneypot] = useState('');
  const recaptchaLoaded = useRef(false);

  useEffect(() => {
    if (!RECAPTCHA_SITE_KEY || recaptchaLoaded.current) return;
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    document.head.appendChild(script);
    recaptchaLoaded.current = true;
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Honeypot check – if filled, silently drop
    if (honeypot) {
      setStatus('success');
      return;
    }
    setStatus('sending');
    try {
      let recaptchaToken = '';
      if (RECAPTCHA_SITE_KEY && window.grecaptcha) {
        recaptchaToken = await new Promise<string>((resolve) => {
          window.grecaptcha!.ready(async () => {
            const token = await window.grecaptcha!.execute(RECAPTCHA_SITE_KEY, { action: 'contact' });
            resolve(token);
          });
        });
      }
      const res = await fetch('https://trimsandfasteners.com/wp-json/contact-form-7/v1/contact-forms/1647/feedback', {
        method: 'POST',
        body: new URLSearchParams({
          'your-name': form.name,
          'your-email': form.email,
          'your-company': form.company,
          'your-message': form.message,
          '_wpcf7_locale': locale,
          ...(recaptchaToken ? { '_recaptcha_response': recaptchaToken } : {}),
        }),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex items-center justify-center py-16">
        <div className="text-center">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="font-[Jost] text-gray-700">{t('success')}</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot field – hidden from real users */}
      <div style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
        <label htmlFor="website_url">Website</label>
        <input
          id="website_url"
          type="text"
          name="website_url"
          value={honeypot}
          onChange={e => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-600 font-[Jost] mb-1">{t('name')} *</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            className="w-full border border-gray-300 px-4 py-3 text-sm font-[Jost] focus:outline-none focus:border-black transition-colors bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 font-[Jost] mb-1">{t('email')} *</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            className="w-full border border-gray-300 px-4 py-3 text-sm font-[Jost] focus:outline-none focus:border-black transition-colors bg-white"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-600 font-[Jost] mb-1">{t('company')}</label>
        <input
          type="text"
          value={form.company}
          onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
          className="w-full border border-gray-200 px-4 py-3 text-sm font-[Jost] focus:outline-none focus:border-black transition-colors"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-600 font-[Jost] mb-1">{t('message')} *</label>
        <textarea
          required
          rows={6}
          value={form.message}
          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
          className="w-full border border-gray-300 px-4 py-3 text-sm font-[Jost] focus:outline-none focus:border-black transition-colors resize-none bg-white"
        />
      </div>
      {status === 'error' && (
        <p className="text-red-500 text-sm font-[Jost]">{t('error')}</p>
      )}
      {RECAPTCHA_SITE_KEY && (
        <p className="font-[Jost] text-xs text-gray-400">
          {locale === 'en'
            ? 'This site is protected by reCAPTCHA.'
            : 'Ta strona jest chroniona przez reCAPTCHA.'}
        </p>
      )}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-[#111111] text-white font-[Jost] font-normal text-sm py-3 hover:bg-black transition-colors disabled:opacity-60"
      >
        {status === 'sending' ? t('sending') : t('send')}
      </button>
    </form>
  );
}
