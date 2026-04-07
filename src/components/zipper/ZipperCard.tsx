'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import type { ZipperCard as ZipperCardType } from '@/lib/types';
import ZipperModal from './ZipperModal';

// In-memory cache shared across all card instances in same session
// Keyed by "${id}-${locale}" to avoid stale translations across language switches
const detailsCache = new Map<string, import('@/lib/types').ZipperDetails>();

interface ZipperCardProps {
  zipper: ZipperCardType;
}

export default function ZipperCard({ zipper }: ZipperCardProps) {
  const t = useTranslations('zipper');
  const locale = useLocale();
  const [modalOpen, setModalOpen] = useState(false);

  const cacheKey = `${zipper.id}-${locale}`;

  const prefetch = () => {
    if (!detailsCache.has(cacheKey)) {
      fetch(`/api/zipper/${zipper.id}?lang=${locale}`)
        .then(r => r.json())
        .then(d => {
          detailsCache.set(cacheKey, d);
          // Preload product image so it's ready when modal opens
          if (d?.thumbnailUrl) {
            const img = new window.Image();
            img.src = d.thumbnailUrl;
          }
        })
        .catch(() => {});
    }
  };

  return (
    <>
      <div
        className="group cursor-pointer bg-white border border-gray-100 overflow-hidden hover:shadow-sm transition-all duration-300"
        onClick={() => setModalOpen(true)}
        onMouseEnter={prefetch}
        onFocus={prefetch}
        tabIndex={0}
        role="button"
        aria-label={`${t('viewDetails')}: ${zipper.name}`}
        onKeyDown={e => e.key === 'Enter' && setModalOpen(true)}
      >
        <div className="overflow-hidden aspect-square bg-white">
          <Image
            src={zipper.thumbnailUrl}
            alt={zipper.thumbnailAlt || zipper.name}
            width={400}
            height={400}
            unoptimized
            className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        <div className="px-3 py-2 border-t border-gray-100">
          <h3 className="font-[Jost] text-xs font-normal text-gray-700 leading-tight line-clamp-2">
            {zipper.name}
          </h3>
          <p className="font-[Jost] text-xs text-gray-400 mt-1">{t('viewDetails')} →</p>
        </div>
      </div>

      {modalOpen && (
        <ZipperModal
          id={zipper.id}
          name={zipper.name}
          cache={detailsCache}
          cacheKey={cacheKey}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}
