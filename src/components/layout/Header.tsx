'use client';
import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { Menu, X, ChevronDown, Search, Phone } from 'lucide-react';
import type { MenuItem } from '@/lib/types';
import type { Locale } from '@/lib/types';

interface HeaderProps {
  menu: MenuItem[];
  translations: Record<string, string>;
}

// Use-of-zippers mega menu categories with hover images
const USE_CATS_EN = [
  {
    label: 'Zippers for fire-resistant clothing',
    href: '/use-of-zippers/fire-protection/',
    img: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/04/NZIP-HEADER-9.png',
  },
  {
    label: 'Zippers for Military',
    href: '/use-of-zippers/military/',
    img: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/04/NZIP-HEADER-8.png',
  },
  {
    label: 'Zippers for cycling & sportswear',
    href: '/use-of-zippers/cycling-sportswear/',
    img: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/zamki-dla-odziezy-sportowej.png',
  },
  {
    label: 'Zippers for babies',
    href: '/use-of-zippers/baby/',
    img: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/Projekt-bez-nazwy-42.png',
  },
  {
    label: 'Zippers for fashion',
    href: '/use-of-zippers/fashion/',
    img: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/Projekt-bez-nazwy-43.png',
  },
  {
    label: 'Buckles & plastic hardware',
    href: '/use-of-zippers/buckles-plastic-hardware/',
    img: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/09/Projekt-bez-nazwy-79.png',
  },
];

const USE_CATS_PL = [
  {
    label: 'Zamki do odzieży ognioodpornej',
    href: '/pl/use-of-zippers/fire-protection/',
    img: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/04/NZIP-HEADER-9.png',
  },
  {
    label: 'Zamki dla wojska',
    href: '/pl/use-of-zippers/military/',
    img: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/04/NZIP-HEADER-8.png',
  },
  {
    label: 'Zamki dla kolarstwa i sportu',
    href: '/pl/use-of-zippers/cycling-sportswear/',
    img: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/zamki-dla-odziezy-sportowej.png',
  },
  {
    label: 'Zamki do odzieży dziecięcej',
    href: '/pl/use-of-zippers/baby/',
    img: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/Projekt-bez-nazwy-42.png',
  },
  {
    label: 'Zamki dla mody',
    href: '/pl/use-of-zippers/fashion/',
    img: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/Projekt-bez-nazwy-43.png',
  },
  {
    label: 'Zapięcia i elementy plastikowe',
    href: '/pl/use-of-zippers/buckles-plastic-hardware/',
    img: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/09/Projekt-bez-nazwy-79.png',
  },
];

interface SearchResult {
  id: number;
  title: { rendered: string };
  slug: string;
  link: string;
  type: string;
}

export default function Header({ menu, translations }: HeaderProps) {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [hoveredUseCat, setHoveredUseCat] = useState(0);
  const [hoveredTypeCat, setHoveredTypeCat] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const useCats = locale === 'en' ? USE_CATS_EN : USE_CATS_PL;

  // AJAX search
  const doSearch = useCallback(async (q: string) => {
    if (q.trim().length < 2) { setSearchResults([]); return; }
    setSearchLoading(true);
    try {
      const lang = locale === 'pl' ? '&lang=pl' : '';
      const res = await fetch(
        `https://wp.trimsandfasteners.com/wp-json/wp/v2/pages?search=${encodeURIComponent(q)}&per_page=6&_fields=id,title,slug,link,type${lang}`
      );
      const pages: SearchResult[] = await res.json();
      // Also search posts
      const res2 = await fetch(
        `https://wp.trimsandfasteners.com/wp-json/wp/v2/posts?search=${encodeURIComponent(q)}&per_page=4&_fields=id,title,slug,link,type${lang}`
      );
      const posts: SearchResult[] = await res2.json();
      setSearchResults([...pages, ...posts].slice(0, 8));
    } catch { setSearchResults([]); }
    setSearchLoading(false);
  }, [locale]);

  const handleSearchInput = (q: string) => {
    setSearchQuery(q);
    if (searchDebounceRef.current) clearTimeout(searchDebounceRef.current);
    searchDebounceRef.current = setTimeout(() => doSearch(q), 300);
  };

  const openSearch = () => {
    setSearchOpen(true);
    setOpenDropdown(null);
    setTimeout(() => searchInputRef.current?.focus(), 50);
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery('');
    setSearchResults([]);
  };

  // Convert WP link to Next.js path
  const wpLinkToPath = (link: string) => {
    try {
      const url = new URL(link);
      return url.pathname;
    } catch { return '/'; }
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const otherLocale = locale === 'en' ? 'pl' : 'en';
  const otherUrl = translations[otherLocale] || (otherLocale === 'pl' ? '/pl/' : '/');

  // Type of Zippers items with hover images
  const typeItems = locale === 'en'
    ? [
        { label: 'Plastic zippers', href: '/type-of-zippers/plastic-zippers/', img: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/ffwefw-scaled.jpeg' },
        { label: 'Nylon zippers', href: '/type-of-zippers/nylon-zippers/', img: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/nylonzipper1-scaled.jpg', sub: { label: 'Nylon zipper chain size chart', href: '/nylon-zipper-chain-size-chart/' } },
        { label: 'Metal zippers', href: '/type-of-zippers/metal-zippers/', img: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/ykkmetal-scaled.jpg' },
        { label: 'Personalization', href: '/personalization/', img: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/logobymoulding-scaled.png' },
      ]
    : [
        { label: 'Zamki plastikowe', href: '/pl/type-of-zippers/plastic-zippers/', img: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/ffwefw-scaled.jpeg' },
        { label: 'Zamki nylonowe', href: '/pl/type-of-zippers/nylon-zippers/', img: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/nylonzipper1-scaled.jpg', sub: { label: 'Tabela rozmiarów taśm nylonowych', href: '/pl/nylon-zipper-chain-size-chart/' } },
        { label: 'Zamki metalowe', href: '/pl/type-of-zippers/metal-zippers/', img: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/ykkmetal-scaled.jpg' },
        { label: 'Personalizacja', href: '/pl/personalization/', img: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/logobymoulding-scaled.png' },
      ];

  // Simple nav items (non-dropdown)
  const simpleItems = locale === 'en'
    ? [
        { label: 'About Us', href: '/about-us/' },
        { label: 'Blog', href: '/blog/' },
        { label: 'Contact', href: '/contact/' },
      ]
    : [
        { label: 'O nas', href: '/pl/about-us/' },
        { label: 'Blog', href: '/pl/blog/' },
        { label: 'Kontakt', href: '/pl/contact/' },
      ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm" ref={headerRef}>
      {/* Top bar: phones + email */}
      <div className="hidden lg:block border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-9 text-xs font-[Jost] text-gray-500">
            <div className="flex items-center gap-5">
              <a href="tel:+48221101101" className="flex items-center gap-1.5 hover:text-black transition-colors">
                <Phone size={11} />
                +48 22 1101101
              </a>
              <a href="tel:+48723331331" className="flex items-center gap-1.5 hover:text-black transition-colors">
                <Phone size={11} />
                +48 723 331 331
              </a>
            </div>
            <a href="mailto:contact@trimsandfasteners.com" className="hover:text-black transition-colors">
              contact@trimsandfasteners.com
            </a>
          </div>
        </div>
      </div>

      {/* Main nav row — relative wrapper so mega menus are positioned from here */}
      <div className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={locale === 'en' ? '/' : '/pl/'} className="flex items-center flex-shrink-0">
            <Image
              src="https://wp.trimsandfasteners.com/wp-content/uploads/2025/08/Projekt-bez-nazwy-75.png"
              alt="TAF - Trims and Fasteners"
              width={100}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {/* Start */}
            <Link
              href={locale === 'en' ? '/' : '/pl/'}
              className="px-3 py-2 text-sm font-normal text-gray-700 hover:text-black transition-colors font-[Jost]"
            >
              {locale === 'en' ? 'Start' : 'Start'}
            </Link>

            {/* Type of Zippers — link navigates, hover shows mega menu */}
            <Link
              href={locale === 'en' ? '/type-of-zippers/' : '/pl/type-of-zippers/'}
              className="flex items-center gap-1 px-3 py-2 text-sm font-normal text-gray-700 hover:text-black transition-colors font-[Jost]"
              onMouseEnter={() => setOpenDropdown('type')}
            >
              {locale === 'en' ? 'Type of zippers' : 'Rodzaje zamków'}
              <ChevronDown size={13} className={`transition-transform ${openDropdown === 'type' ? 'rotate-180' : ''}`} />
            </Link>

            {/* Use of Zippers — link navigates, hover shows mega menu */}
            <Link
              href={locale === 'en' ? '/use-of-zippers/' : '/pl/use-of-zippers/'}
              className="flex items-center gap-1 px-3 py-2 text-sm font-normal text-gray-700 hover:text-black transition-colors font-[Jost]"
              onMouseEnter={() => setOpenDropdown('use')}
            >
              {locale === 'en' ? 'Use of zippers' : 'Zastosowanie zamków'}
              <ChevronDown size={13} className={`transition-transform ${openDropdown === 'use' ? 'rotate-180' : ''}`} />
            </Link>

            {/* Simple items */}
            {simpleItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-normal text-gray-700 hover:text-black transition-colors font-[Jost]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right: search icon + lang flags + mobile toggle */}
          <div className="flex items-center gap-2">
            {/* Search icon button */}
            <button
              className="flex items-center justify-center w-8 h-8 bg-black text-white hover:bg-gray-800 transition-colors"
              aria-label="Search"
              onClick={openSearch}
            >
              <Search size={14} />
            </button>

            {/* Language switcher with flag-style buttons */}
            <div className="hidden lg:flex items-center gap-0">
              <a
                href={locale === 'en' ? '#' : '/'}
                className={`text-xs font-[Jost] font-medium px-2 py-1 transition-colors ${locale === 'en' ? 'text-black' : 'text-gray-400 hover:text-black'}`}
              >
                EN
              </a>
              <span className="text-gray-300 text-xs">|</span>
              <a
                href={locale === 'pl' ? '#' : '/pl/'}
                className={`text-xs font-[Jost] font-medium px-2 py-1 transition-colors ${locale === 'pl' ? 'text-black' : 'text-gray-400 hover:text-black'}`}
              >
                PL
              </a>
            </div>

            <button
              className="lg:hidden p-2 text-gray-700"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mega menu: Type of Zippers — centered horizontally */}
      {openDropdown === 'type' && (
        <div
          className="absolute top-full z-50 flex bg-white"
          style={{ left: '50%', transform: 'translateX(-50%)', boxShadow: '0 8px 30px rgba(0,0,0,0.12)', width: '1300px' }}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <div className="py-10 flex-1">
            {typeItems.map((item, i) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className={`block px-6 py-6 text-sm font-[Jost] transition-colors ${
                    hoveredTypeCat === i ? 'text-black bg-gray-50' : 'text-gray-600 hover:text-black hover:bg-gray-50'
                  }`}
                  onMouseEnter={() => setHoveredTypeCat(i)}
                  onClick={() => setOpenDropdown(null)}
                >
                  {item.label}
                </Link>
                {item.sub && (
                  <Link
                    href={item.sub.href}
                    className="block pl-10 pr-6 py-3 text-xs text-gray-400 hover:text-black hover:bg-gray-50 font-[Jost] transition-colors"
                    onMouseEnter={() => setHoveredTypeCat(i)}
                    onClick={() => setOpenDropdown(null)}
                  >
                    {item.sub.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="flex-shrink-0 relative overflow-hidden bg-gray-100 self-stretch" style={{ width: '800px' }}>
            <Image
              src={typeItems[hoveredTypeCat]?.img || typeItems[0].img}
              alt={typeItems[hoveredTypeCat]?.label || ''}
              fill
              quality={90}
              className="object-cover transition-all duration-300"
              sizes="800px"
            />
          </div>
        </div>
      )}

      {/* Mega menu: Use of Zippers — centered horizontally */}
      {openDropdown === 'use' && (
        <div
          className="absolute top-full z-50 flex bg-white"
          style={{ left: '50%', transform: 'translateX(-50%)', boxShadow: '0 8px 30px rgba(0,0,0,0.12)', width: '1300px' }}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <div className="py-5 flex-1">
            {useCats.map((cat, i) => (
              <Link
                key={cat.href}
                href={cat.href}
                className={`block px-6 py-4 text-sm font-[Jost] transition-colors ${
                  hoveredUseCat === i ? 'text-black bg-gray-50' : 'text-gray-600 hover:text-black hover:bg-gray-50'
                }`}
                onMouseEnter={() => setHoveredUseCat(i)}
                onClick={() => setOpenDropdown(null)}
              >
                {cat.label}
              </Link>
            ))}
          </div>
          <div className="flex-shrink-0 relative overflow-hidden bg-gray-100 self-stretch" style={{ width: '800px' }}>
            <Image
              src={useCats[hoveredUseCat]?.img || useCats[0].img}
              alt={useCats[hoveredUseCat]?.label || ''}
              fill
              quality={90}
              className="object-cover transition-all duration-300"
              sizes="800px"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white text-sm font-[Jost] font-light leading-tight">
                {useCats[hoveredUseCat]?.label}
              </p>
            </div>
          </div>
        </div>
      )}

      </div>{/* end relative nav wrapper */}

      {/* AJAX Search overlay */}
      {searchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-2xl z-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-3">
              <Search size={18} className="text-gray-400 flex-shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={e => handleSearchInput(e.target.value)}
                placeholder={locale === 'en' ? 'Search pages and articles...' : 'Szukaj stron i artykułów...'}
                className="flex-1 font-[Jost] text-sm text-gray-800 outline-none placeholder:text-gray-400 bg-transparent"
                onKeyDown={e => { if (e.key === 'Escape') closeSearch(); }}
              />
              <button onClick={closeSearch} className="text-gray-400 hover:text-black transition-colors">
                <X size={18} />
              </button>
            </div>
            {searchQuery.length >= 2 && (
              <div className="mt-3 border-t border-gray-100 pt-3">
                {searchLoading ? (
                  <p className="font-[Jost] text-sm text-gray-400 py-2">{locale === 'en' ? 'Searching...' : 'Szukam...'}</p>
                ) : searchResults.length === 0 ? (
                  <p className="font-[Jost] text-sm text-gray-400 py-2">{locale === 'en' ? 'No results found.' : 'Brak wyników.'}</p>
                ) : (
                  <ul className="space-y-0.5">
                    {searchResults.map(r => (
                      <li key={r.id}>
                        <Link
                          href={wpLinkToPath(r.link)}
                          className="flex items-center gap-2 px-2 py-2.5 rounded hover:bg-gray-50 transition-colors group"
                          onClick={closeSearch}
                        >
                          <Search size={12} className="text-gray-300 flex-shrink-0" />
                          <span
                            className="font-[Jost] text-sm text-gray-700 group-hover:text-black transition-colors"
                            dangerouslySetInnerHTML={{ __html: r.title.rendered }}
                          />
                          <span className="ml-auto text-xs text-gray-300 font-[Jost]">{r.type}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile menu — always in DOM, slides in/out with max-h transition */}
      <div
        className={`lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4">
          {/* Type of Zippers mobile */}
          <div className="mb-2">
            <p className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider font-[Jost]">
              {locale === 'en' ? 'Type of Zippers' : 'Rodzaje zamków'}
            </p>
            {typeItems.map(item => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-sm text-gray-700 hover:text-black font-[Jost]"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.sub && (
                  <Link
                    href={item.sub.href}
                    className="block pl-6 py-1.5 text-xs text-gray-500 hover:text-black font-[Jost]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.sub.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Use of Zippers mobile */}
          <div className="mb-2">
            <p className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider font-[Jost]">
              {locale === 'en' ? 'Use of Zippers' : 'Zastosowanie zamków'}
            </p>
            {useCats.map(cat => (
              <Link
                key={cat.href}
                href={cat.href}
                className="block px-3 py-2 text-sm text-gray-700 hover:text-black font-[Jost]"
                onClick={() => setMobileOpen(false)}
              >
                {cat.label}
              </Link>
            ))}
          </div>

          {/* Simple items mobile */}
          {simpleItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-black font-[Jost]"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          {/* Language switcher mobile */}
          <div className="flex items-center gap-0 px-3 pt-4 mt-2 border-t border-gray-100">
            <a
              href={locale === 'en' ? '#' : '/'}
              className={`text-sm font-[Jost] font-medium px-2 py-1 transition-colors ${locale === 'en' ? 'text-black' : 'text-gray-400 hover:text-black'}`}
            >
              EN
            </a>
            <span className="text-gray-300 text-sm">|</span>
            <a
              href={locale === 'pl' ? '#' : '/pl/'}
              className={`text-sm font-[Jost] font-medium px-2 py-1 transition-colors ${locale === 'pl' ? 'text-black' : 'text-gray-400 hover:text-black'}`}
            >
              PL
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
