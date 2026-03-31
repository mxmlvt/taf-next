'use client';
import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import type { ZipperDetails } from '@/lib/types';

interface ZipperModalProps {
  id: number;
  name: string;
  cache: Map<number, ZipperDetails>;
  onClose: () => void;
}

export default function ZipperModal({ id, name, cache, onClose }: ZipperModalProps) {
  const t = useTranslations('zipper');
  const locale = useLocale();
  const [data, setData] = useState<ZipperDetails | null>(cache.get(id) || null);
  const [loading, setLoading] = useState(!cache.has(id));

  const contactHref = locale === 'en' ? '/contact/' : '/pl/contact/';

  useEffect(() => {
    if (!cache.has(id)) {
      fetch(`/api/zipper/${id}`)
        .then(r => r.json())
        .then(d => {
          cache.set(id, d);
          setData(d);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [id, cache]);

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={name}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Panel */}
      <div className="relative bg-white shadow-2xl w-full max-w-[1075px] max-h-[92vh] overflow-hidden flex flex-col sm:flex-row">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-1.5 bg-white/90 hover:bg-gray-100 text-gray-500 hover:text-black transition-colors"
          aria-label={t('close')}
        >
          <X size={16} />
        </button>

        {loading ? (
          <div className="w-full h-80 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-gray-200 border-t-black rounded-full animate-spin" />
          </div>
        ) : data ? (
          <>
            {/* Left: image — object-contain so full product is visible */}
            <div className="sm:w-[45%] flex-shrink-0 bg-gray-50 flex items-center justify-center min-h-[390px] sm:min-h-[590px]">
              <div className="relative w-full h-full min-h-[390px] sm:min-h-[590px]">
                <Image
                  src={data.thumbnailUrl}
                  alt={data.thumbnailAlt || data.name}
                  fill
                  priority
                  className="object-contain p-4"
                  sizes="(max-width: 640px) 100vw, 45vw"
                />
              </div>
            </div>

            {/* Right: details */}
            <div className="sm:w-[55%] flex flex-col overflow-y-auto p-6 max-h-[92vh]">
              <h2 className="font-[Jost] text-xl font-normal text-black mb-3 leading-snug pr-6">
                {data.name}
              </h2>

              {/* Description */}
              {data.description && (
                <div
                  className="font-[Jost] text-sm text-gray-600 leading-relaxed mb-4 [&>div]:contents [&>p]:mb-2"
                  dangerouslySetInnerHTML={{ __html: data.description }}
                />
              )}

              {/* Feature icons / characteristics */}
              {data.features && data.features.length > 0 && (
                <div className="mb-4">
                  <h3 className="font-[Jost] text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                    {locale === 'en' ? 'Characteristics' : 'Charakterystyka'}
                  </h3>
                  <ul className="space-y-1">
                    {data.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 font-[Jost] text-sm text-gray-700">
                        <span className="mt-0.5 text-gray-400 flex-shrink-0">▸</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Application icons */}
              {data.applicationIcons && data.applicationIcons.length > 0 && (
                <div className="mb-4">
                  <h3 className="font-[Jost] text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                    {locale === 'en' ? 'Application' : 'Zastosowanie'}
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {data.applicationIcons.map((icon, i) => (
                      <div key={i} className="flex flex-col items-center gap-1.5 w-16">
                        <div className="relative w-12 h-12">
                          <Image
                            src={icon.url}
                            alt={icon.label}
                            fill
                            className="object-contain"
                            sizes="48px"
                          />
                        </div>
                        <span className="font-[Jost] text-[10px] text-gray-500 text-center leading-tight">
                          {icon.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Specs table */}
              {data.specs && data.specs.length > 0 && (
                <div className="mb-4">
                  <h3 className="font-[Jost] text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                    {t('specifications')}
                  </h3>
                  <table className="w-full text-sm border-collapse">
                    <tbody>
                      {data.specs.map((spec, i) => (
                        <tr key={i} className="border-b border-gray-100">
                          <td className="py-1.5 font-[Jost] font-medium text-gray-500 text-xs w-2/5">
                            {spec.label}
                          </td>
                          <td className="py-1.5 font-[Jost] text-gray-700 text-xs">
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Contact CTA */}
              <div className="mt-auto pt-4 border-t border-gray-100">
                <Link
                  href={contactHref}
                  onClick={onClose}
                  className="block w-full bg-[#111111] text-white font-[Jost] text-sm text-center py-3 hover:bg-black transition-colors"
                >
                  {locale === 'en' ? 'Contact us about this product' : 'Zapytaj o ten produkt'}
                </Link>
              </div>
            </div>
          </>
        ) : (
          <div className="w-full p-8 text-center">
            <p className="font-[Jost] text-gray-400">{t('close')}</p>
          </div>
        )}
      </div>
    </div>
  );
}
