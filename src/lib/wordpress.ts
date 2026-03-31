import type { Locale, WPPage, WPPost, WPProduct, ZipperCard, ZipperDetails, MenuItem, WPMedia } from './types';
import { cleanZipperName } from './utils';

const WP_API = 'https://wp.trimsandfasteners.com/wp-json';

// Lang param: Polylang uses 'en' | 'pl'
function langParam(locale: Locale) {
  return `lang=${locale}`;
}

// ─── Pages ───────────────────────────────────────────────────────────────────

export async function getPageBySlug(slug: string, locale: Locale): Promise<WPPage | null> {
  try {
    const res = await fetch(
      `${WP_API}/wp/v2/pages?slug=${slug}&${langParam(locale)}&_embed`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const pages: WPPage[] = await res.json();
    return pages[0] ?? null;
  } catch {
    return null;
  }
}

export async function getAllPages(locale: Locale): Promise<WPPage[]> {
  try {
    const res = await fetch(
      `${WP_API}/wp/v2/pages?${langParam(locale)}&per_page=100&status=publish`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

// ─── Posts / Blog ─────────────────────────────────────────────────────────────

export async function getBlogPosts(locale: Locale, page = 1, perPage = 12): Promise<{
  posts: WPPost[];
  totalPages: number;
  total: number;
}> {
  try {
    const res = await fetch(
      `${WP_API}/wp/v2/posts?${langParam(locale)}&per_page=${perPage}&page=${page}&_embed&status=publish`,
      { next: { revalidate: 1800 } }
    );
    if (!res.ok) return { posts: [], totalPages: 0, total: 0 };
    const posts: WPPost[] = await res.json();
    const totalPages = parseInt(res.headers.get('X-WP-TotalPages') || '1');
    const total = parseInt(res.headers.get('X-WP-Total') || '0');
    return { posts, totalPages, total };
  } catch {
    return { posts: [], totalPages: 0, total: 0 };
  }
}

export async function getPostBySlug(slug: string, locale: Locale): Promise<WPPost | null> {
  try {
    const res = await fetch(
      `${WP_API}/wp/v2/posts?slug=${slug}&${langParam(locale)}&_embed`,
      { next: { revalidate: 1800 } }
    );
    if (!res.ok) return null;
    const posts: WPPost[] = await res.json();
    return posts[0] ?? null;
  } catch {
    return null;
  }
}

export async function getAllPostSlugs(locale: Locale): Promise<string[]> {
  try {
    const res = await fetch(
      `${WP_API}/wp/v2/posts?${langParam(locale)}&per_page=100&status=publish&_fields=slug`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const posts: { slug: string }[] = await res.json();
    return posts.map(p => p.slug);
  } catch {
    return [];
  }
}

// ─── Zippers (popups → custom REST endpoint) ──────────────────────────────────

// Returns only card data (thumbnail + name) — used at build time for category pages
export async function getZipperCards(category: string, locale: Locale): Promise<ZipperCard[]> {
  try {
    const res = await fetch(
      `${WP_API}/taf/v1/zippers?category=${category}&lang=${locale}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

// Returns zippers in exact ID order — for category carousels with known popup IDs
export async function getZippersByIds(ids: number[], locale: Locale): Promise<ZipperCard[]> {
  if (!ids.length) return [];
  try {
    const res = await fetch(
      `${WP_API}/taf/v1/zippers-by-ids?ids=${ids.join(',')}&lang=${locale}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const data: ZipperCard[] = await res.json();
    return data.map(z => ({ ...z, name: cleanZipperName(z.name) }));
  } catch {
    return [];
  }
}

// Full popup details — called client-side on card click (lazy)
export async function getZipperDetails(id: number): Promise<ZipperDetails | null> {
  try {
    const res = await fetch(
      `${WP_API}/taf/v1/zipper/${id}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

// ─── Navigation Menus ──────────────────────────────────────────────────────────

export async function getMenuItems(menuSlug: string, locale: Locale): Promise<MenuItem[]> {
  try {
    // Try WP REST API menus (requires WP REST API Menus plugin or built-in WP 5.9+)
    const res = await fetch(
      `${WP_API}/wp/v2/menu-items?menus=${menuSlug}&${langParam(locale)}&per_page=100`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return getHardcodedMenu(locale);
    const items = await res.json();
    return buildMenuTree(items);
  } catch {
    return getHardcodedMenu(locale);
  }
}

function buildMenuTree(items: Array<{
  id: number;
  title: { rendered: string };
  url: string;
  slug: string;
  parent: number;
}>): MenuItem[] {
  const map = new Map<number, MenuItem>();
  const roots: MenuItem[] = [];

  items.forEach(item => {
    map.set(item.id, {
      id: item.id,
      title: item.title.rendered,
      url: item.url,
      slug: item.slug,
      children: [],
    });
  });

  items.forEach(item => {
    const node = map.get(item.id)!;
    if (item.parent === 0) {
      roots.push(node);
    } else {
      const parent = map.get(item.parent);
      if (parent) parent.children = [...(parent.children || []), node];
    }
  });

  return roots;
}

// Fallback hardcoded menu (mirrors WP nav exactly)
function getHardcodedMenu(locale: Locale): MenuItem[] {
  const base = locale === 'en' ? '' : '/pl';
  if (locale === 'en') {
    return [
      { id: 1, title: 'Home', url: '/', slug: 'home' },
      {
        id: 2, title: 'Type of Zippers', url: `${base}/type-of-zippers/`, slug: 'type-of-zippers',
        children: [
          { id: 21, title: 'Nylon Zippers', url: `${base}/type-of-zippers/nylon-zippers/`, slug: 'nylon-zippers' },
          { id: 22, title: 'Plastic Zippers', url: `${base}/type-of-zippers/plastic-zippers/`, slug: 'plastic-zippers' },
          { id: 23, title: 'Metal Zippers', url: `${base}/type-of-zippers/metal-zippers/`, slug: 'metal-zippers' },
        ],
      },
      {
        id: 3, title: 'Use of Zippers', url: `${base}/use-of-zippers/`, slug: 'use-of-zippers',
        children: [
          { id: 31, title: 'Fashion', url: `${base}/use-of-zippers/fashion/`, slug: 'fashion' },
          { id: 32, title: 'Cycling & Sportswear', url: `${base}/use-of-zippers/cycling-sportswear/`, slug: 'cycling-sportswear' },
          { id: 33, title: 'Baby', url: `${base}/use-of-zippers/baby/`, slug: 'baby' },
          { id: 34, title: 'Military', url: `${base}/use-of-zippers/military/`, slug: 'military' },
          { id: 35, title: 'Furniture', url: `${base}/use-of-zippers/furniture/`, slug: 'furniture' },
          { id: 36, title: 'Fire-Resistant Clothing', url: `${base}/use-of-zippers/fire-protection/`, slug: 'fire-protection' },
          { id: 37, title: 'Buckles & Plastic Hardware', url: `${base}/use-of-zippers/buckles-plastic-hardware/`, slug: 'buckles-plastic-hardware' },
        ],
      },
      { id: 4, title: 'Personalization', url: `${base}/personalization/`, slug: 'personalization' },
      { id: 5, title: 'About Us', url: `${base}/about-us/`, slug: 'about-us' },
      { id: 6, title: 'Contact', url: `${base}/contact/`, slug: 'contact' },
    ];
  }
  return [
    { id: 1, title: 'Start', url: '/pl/', slug: 'start' },
    {
      id: 2, title: 'Rodzaje zamków', url: '/pl/rodzaje-zamkow/', slug: 'rodzaje-zamkow',
      children: [
        { id: 21, title: 'Zamki nylonowe', url: '/pl/rodzaje-zamkow/zamki-nylonowe/', slug: 'zamki-nylonowe' },
        { id: 22, title: 'Zamki plastikowe', url: '/pl/rodzaje-zamkow/zamki-plastikowe/', slug: 'zamki-plastikowe' },
        { id: 23, title: 'Zamki metalowe', url: '/pl/rodzaje-zamkow/zamki-metalowe/', slug: 'zamki-metalowe' },
      ],
    },
    {
      id: 3, title: 'Zastosowanie zamków', url: '/pl/zastosowanie-zamkow/', slug: 'zastosowanie-zamkow',
      children: [
        { id: 31, title: 'Zamki dla mody', url: '/pl/zastosowanie-zamkow/moda/', slug: 'moda' },
        { id: 32, title: 'Kolarstwo & odzież sportowa', url: '/pl/zastosowanie-zamkow/odziez-sportowa/', slug: 'odziez-sportowa' },
        { id: 33, title: 'Odzież dziecięca', url: '/pl/zastosowanie-zamkow/dzieci/', slug: 'dzieci' },
        { id: 34, title: 'Wojsko', url: '/pl/zastosowanie-zamkow/wojsko/', slug: 'wojsko' },
        { id: 35, title: 'Meble', url: '/pl/zastosowanie-zamkow/meble/', slug: 'meble' },
        { id: 36, title: 'Odzież ognioodporna', url: '/pl/zastosowanie-zamkow/odziez-ognioodporna/', slug: 'odziez-ognioodporna' },
        { id: 37, title: 'Zapięcia & elementy plastikowe', url: '/pl/zapiecia-elementy-plastikowe/', slug: 'zapiecia-elementy-plastikowe' },
      ],
    },
    { id: 4, title: 'Personalizacja', url: '/pl/personalizacja/', slug: 'personalizacja' },
    { id: 5, title: 'O nas', url: '/pl/o-nas/', slug: 'o-nas' },
    { id: 6, title: 'Kontakt', url: '/pl/kontakt/', slug: 'kontakt' },
  ];
}

// ─── Media ────────────────────────────────────────────────────────────────────

export async function getMedia(id: number): Promise<WPMedia | null> {
  if (!id) return null;
  try {
    const res = await fetch(`${WP_API}/wp/v2/media/${id}`, { next: { revalidate: 86400 } });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

// ─── Polylang translations ────────────────────────────────────────────────────

export async function getPageTranslations(pageId: number): Promise<Record<string, string>> {
  try {
    const res = await fetch(
      `${WP_API}/taf/v1/translations/${pageId}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return {};
    return res.json();
  } catch {
    return {};
  }
}

// ─── WooCommerce Products ─────────────────────────────────────────────────────

export async function getAllProductSlugs(locale: Locale): Promise<string[]> {
  try {
    const res = await fetch(
      `${WP_API}/wp/v2/product?${langParam(locale)}&per_page=100&status=publish&_fields=slug`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const products: { slug: string }[] = await res.json();
    return products.map(p => p.slug);
  } catch {
    return [];
  }
}

export async function getProductBySlug(slug: string, locale: Locale): Promise<WPProduct | null> {
  try {
    const res = await fetch(
      `${WP_API}/wp/v2/product?slug=${slug}&${langParam(locale)}&_embed`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const products: WPProduct[] = await res.json();
    return products[0] ?? null;
  } catch {
    return null;
  }
}

export async function getRelatedProducts(
  excludeId: number,
  categoryId: number,
  locale: Locale
): Promise<WPProduct[]> {
  try {
    const res = await fetch(
      `${WP_API}/wp/v2/product?product_cat=${categoryId}&${langParam(locale)}&per_page=5&_embed&status=publish`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const products: WPProduct[] = await res.json();
    return products.filter(p => p.id !== excludeId).slice(0, 4);
  } catch {
    return [];
  }
}

// ─── Recent Posts (for blog sidebar) ─────────────────────────────────────────

export async function getRecentPosts(locale: Locale, count = 4): Promise<WPPost[]> {
  try {
    const res = await fetch(
      `${WP_API}/wp/v2/posts?${langParam(locale)}&per_page=${count}&page=1&_embed&status=publish&orderby=date&order=desc`,
      { next: { revalidate: 1800 } }
    );
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

// ─── Yoast SEO ────────────────────────────────────────────────────────────────

export function extractYoastMeta(page: WPPage | WPPost | null) {
  if (!page?.yoast_head_json) return {};
  const y = page.yoast_head_json;
  return {
    title: y.title,
    description: y.description,
    canonical: y.canonical,
    ogTitle: y.og_title,
    ogDescription: y.og_description,
    ogImage: y.og_image?.[0]?.url,
    robots: y.robots,
  };
}
