'use client';
import { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

interface Product {
  id: number | string;
  name: string;
  thumbnailUrl?: string;
}

interface ProductInquiryFormProps {
  products: Product[];
  locale: 'en' | 'pl';
}

const VOLUME_OPTIONS_EN = ['0-100 pcs', '100-1000 pcs', '1000+ pcs'];
const VOLUME_OPTIONS_PL = ['0-100 szt.', '100-1000 szt.', '1000+ szt.'];

export default function ProductInquiryForm({ products, locale }: ProductInquiryFormProps) {
  const isEn = locale === 'en';
  const volumeOptions = isEn ? VOLUME_OPTIONS_EN : VOLUME_OPTIONS_PL;

  const [selectedIds, setSelectedIds] = useState<Set<number | string>>(new Set());
  const [search, setSearch] = useState('');
  const [form, setForm] = useState({
    company: '',
    nip: '',
    email: '',
    volume: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  // Listen for custom event from ZipperModal / FireProtectionContent
  const handleInquirySelect = useCallback((e: Event) => {
    const detail = (e as CustomEvent<{ productId: number | string }>).detail;
    if (detail?.productId != null) {
      setSelectedIds((prev) => {
        const next = new Set(prev);
        next.add(detail.productId);
        return next;
      });
      // Smooth scroll to form
      const el = document.getElementById('product-inquiry');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('taf-inquiry-select', handleInquirySelect);
    return () => window.removeEventListener('taf-inquiry-select', handleInquirySelect);
  }, [handleInquirySelect]);

  const toggleProduct = (id: number | string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Filter and sort: selected float to top, then filter by search
  const filteredProducts = useMemo(() => {
    const lowerSearch = search.toLowerCase();
    const filtered = products.filter((p) =>
      p.name.toLowerCase().includes(lowerSearch)
    );
    // Sort: selected first
    return filtered.sort((a, b) => {
      const aSelected = selectedIds.has(a.id) ? 0 : 1;
      const bSelected = selectedIds.has(b.id) ? 0 : 1;
      return aSelected - bSelected;
    });
  }, [products, search, selectedIds]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const selectedProducts = products
      .filter((p) => selectedIds.has(p.id))
      .map((p) => ({ id: p.id, name: p.name }));

    try {
      const res = await fetch('/api/product-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          products: selectedProducts,
          company: form.company,
          nip: form.nip,
          email: form.email,
          volume: form.volume,
          message: form.message,
          locale,
        }),
      });

      if (res.ok) {
        setStatus('success');
        if (window.gtag) {
          window.gtag('event', 'conversion', {
            send_to: 'AW-18178687838/la4NCLLn-rccEN6Go9xD',
          });
        }
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (products.length === 0) return null;

  return (
    <section id="product-inquiry" className="bg-[#f5f3ef] py-16" style={{ scrollMarginTop: '80px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-[Jost] text-2xl sm:text-3xl font-light mb-3 text-[#111]">
          {isEn ? 'Inquire about products' : 'Zapytaj o produkty'}
        </h2>
        <p className="font-[Jost] text-sm text-gray-400 mb-8">
          {isEn
            ? 'Select the products you are interested in and fill out the form below.'
            : 'Wybierz interesujące Cię produkty i wypełnij poniższy formularz.'}
        </p>

        {status === 'success' ? (
          <div className="flex items-center justify-center py-16">
            <div className="text-center max-w-md">
              <div className="w-12 h-12 bg-green-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="font-[Jost] text-gray-700 mb-6">
                {isEn
                  ? 'Thank you! Your inquiry has been sent. We will get back to you shortly.'
                  : 'Dziękujemy! Twoje zapytanie zostało wysłane. Skontaktujemy się wkrótce.'}
              </p>
              <p className="font-[Jost] text-sm text-gray-500 mb-3">
                {isEn
                  ? 'You can also reach us directly:'
                  : 'Możesz też skontaktować się z nami bezpośrednio:'}
              </p>
              <div className="flex flex-col items-center gap-2">
                <a href="tel:+48221101101" className="font-[Jost] text-sm text-[#111] hover:underline transition-colors">
                  +48 22 1101101
                </a>
                <a href="tel:+48723331331" className="font-[Jost] text-sm text-[#111] hover:underline transition-colors">
                  +48 723 331 331
                </a>
                <a href="mailto:contact@trimsandfasteners.com" className="font-[Jost] text-sm text-gray-400 hover:text-[#111] transition-colors">
                  contact@trimsandfasteners.com
                </a>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Product selector */}
            <div>
              <label className="block text-xs font-medium text-gray-600 font-[Jost] mb-2">
                {isEn ? 'Select products' : 'Wybierz produkty'}
                {selectedIds.size > 0 && (
                  <span className="ml-2 text-gray-400">
                    ({selectedIds.size} {isEn ? 'selected' : 'wybranych'})
                  </span>
                )}
              </label>
              {/* Search/filter */}
              <input
                type="text"
                placeholder={isEn ? 'Search products...' : 'Szukaj produktów...'}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border border-gray-300 px-4 py-2.5 text-sm font-[Jost] focus:outline-none focus:border-black transition-colors bg-white mb-4"
              />
              {/* Product grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
                {filteredProducts.map((product) => {
                  const isSelected = selectedIds.has(product.id);
                  return (
                    <button
                      key={product.id}
                      type="button"
                      onClick={() => toggleProduct(product.id)}
                      className={`cursor-pointer relative flex flex-col items-center p-2 border transition-colors text-center ${
                        isSelected
                          ? 'border-[#111] bg-white'
                          : 'border-gray-200 bg-white hover:border-gray-400'
                      }`}
                    >
                      {/* Checkbox indicator */}
                      <div
                        className={`absolute top-1.5 right-1.5 w-4 h-4 border flex items-center justify-center flex-shrink-0 ${
                          isSelected ? 'bg-[#111] border-[#111]' : 'border-gray-300 bg-white'
                        }`}
                      >
                        {isSelected && (
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      {/* Thumbnail or placeholder */}
                      <div className="w-full aspect-square mb-1.5 flex items-center justify-center overflow-hidden bg-gray-50">
                        {product.thumbnailUrl ? (
                          <Image
                            src={product.thumbnailUrl}
                            alt={product.name}
                            width={100}
                            height={100}
                            unoptimized
                            className="w-full h-full object-contain"
                            sizes="100px"
                          />
                        ) : (
                          <span className="font-[Jost] text-xs text-gray-300 px-1 text-center">
                            {product.name}
                          </span>
                        )}
                      </div>
                      <span className="font-[Jost] text-xs text-gray-600 leading-tight line-clamp-2">
                        {product.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Form fields */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-600 font-[Jost] mb-1">
                    {isEn ? 'Company name' : 'Nazwa firmy'} *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.company}
                    onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                    className="w-full border border-gray-300 px-4 py-3 text-sm font-[Jost] focus:outline-none focus:border-black transition-colors bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 font-[Jost] mb-1">
                    {isEn ? 'Tax ID' : 'NIP'} *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.nip}
                    onChange={(e) => setForm((f) => ({ ...f, nip: e.target.value }))}
                    className="w-full border border-gray-300 px-4 py-3 text-sm font-[Jost] focus:outline-none focus:border-black transition-colors bg-white"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-600 font-[Jost] mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className="w-full border border-gray-300 px-4 py-3 text-sm font-[Jost] focus:outline-none focus:border-black transition-colors bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 font-[Jost] mb-1">
                    {isEn ? 'Expected product demand (pcs)' : 'Przewidywane zapotrzebowanie produktu w sztukach'} *
                  </label>
                  <select
                    required
                    value={form.volume}
                    onChange={(e) => setForm((f) => ({ ...f, volume: e.target.value }))}
                    className="w-full border border-gray-300 px-4 py-3 text-sm font-[Jost] focus:outline-none focus:border-black transition-colors bg-white cursor-pointer appearance-none"
                  >
                    <option value="">{isEn ? '-- Select --' : '-- Wybierz --'}</option>
                    {volumeOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 font-[Jost] mb-1">
                  {isEn ? 'Message (optional)' : 'Wiadomość (opcjonalna)'}
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="w-full border border-gray-300 px-4 py-3 text-sm font-[Jost] focus:outline-none focus:border-black transition-colors resize-none bg-white"
                />
              </div>
            </div>

            {status === 'error' && (
              <p className="text-red-500 text-sm font-[Jost]">
                {isEn
                  ? 'Something went wrong. Please try again.'
                  : 'Coś poszło nie tak. Spróbuj ponownie.'}
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-[#111111] text-white font-[Jost] font-normal text-sm py-3 hover:bg-black transition-colors disabled:opacity-60 cursor-pointer"
            >
              {status === 'sending'
                ? (isEn ? 'Sending...' : 'Wysyłanie...')
                : (isEn ? 'Send inquiry' : 'Wyślij zapytanie')}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
