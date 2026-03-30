'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import type { Locale } from '@/lib/types';
import HeroAnimator from '@/components/ui/HeroAnimator';

interface HeroProps {
  slides: string[];
  title?: string;
  subtitle?: string;
  description?: string;
  ctaUrl?: string;
}

const DEFAULT_SLIDES = [
  'https://trimsandfasteners.com/wp-content/uploads/2025/06/ykkmetal-scaled.jpg',
  'https://trimsandfasteners.com/wp-content/uploads/2025/06/metalslider2-scaled.jpg',
];

export default function Hero({ slides = DEFAULT_SLIDES, title, subtitle, description, ctaUrl }: HeroProps) {
  const t = useTranslations('hero');
  const locale = useLocale() as Locale;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(c => (c + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const contactUrl = locale === 'en' ? '/contact/' : '/pl/contact/';

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Slideshow */}
      {slides.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image
            src={src}
            alt=""
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Dark overlay — strong near-black matching WP */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content — left-aligned */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          <span className="hero-animate block font-[Jost] text-white/70 text-sm sm:text-base font-light mb-4 tracking-widest uppercase">
            {title || t('brand')}
          </span>
          <h1 className="hero-animate font-[Jost] text-4xl sm:text-6xl font-light text-white leading-tight mb-5">
            {subtitle || t('tagline')}
          </h1>
          <p className="hero-animate font-[Jost] text-white/70 text-base font-light mb-8 max-w-lg leading-relaxed">
            {description || t('description')}
          </p>
          <div className="hero-animate flex flex-col sm:flex-row gap-3 items-start">
            <a
              href={ctaUrl || '#homepage-content'}
              className="inline-block bg-white text-black font-[Jost] font-medium text-sm px-7 py-3 hover:bg-gray-100 transition-colors cursor-pointer"
              onClick={ctaUrl ? undefined : (e) => {
                e.preventDefault();
                document.getElementById('homepage-content')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('cta')}
            </a>
          </div>
        </div>
      </div>

      <HeroAnimator />

      {/* Mouse scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5">
        <div className="w-5 h-8 rounded-full border-2 border-white/50 flex justify-center pt-1.5">
          <div className="w-0.5 h-2 bg-white/70 rounded-full animate-scroll-dot" />
        </div>
      </div>

      {/* Slide dots */}
      {slides.length > 1 && (
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all ${i === current ? 'bg-white w-8' : 'bg-white/40 w-4'}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
