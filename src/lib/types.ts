export type Locale = 'en' | 'pl';

export interface WPPage {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  featured_media: number;
  yoast_head_json: YoastHeadJson;
  acf?: Record<string, unknown>;
  polylang_translations?: Record<string, number>;
  link: string;
  modified: string;
}

export interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  featured_media: number;
  date: string;
  modified: string;
  yoast_head_json: YoastHeadJson;
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string; alt_text: string }>;
    'wp:term'?: Array<Array<{ id: number; name: string; slug: string }>>;
  };
}

export interface YoastHeadJson {
  title?: string;
  description?: string;
  robots?: { index?: string; follow?: string };
  canonical?: string;
  og_title?: string;
  og_description?: string;
  og_image?: Array<{ url: string; width: number; height: number }>;
  og_locale?: string;
  og_type?: string;
  og_url?: string;
  twitter_card?: string;
  schema?: Record<string, unknown>;
}

export interface ZipperCard {
  id: number;
  name: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
}

export interface ZipperApplicationIcon {
  url: string;
  label: string;
}

export interface ZipperDetails extends ZipperCard {
  description: string;
  specs: ZipperSpec[];
  features?: string[];
  additionalImages?: string[];
  applicationIcons?: ZipperApplicationIcon[];
  translations: Record<string, number>;
}

export interface ZipperSpec {
  label: string;
  value: string;
}

export interface MenuItem {
  id: number;
  title: string;
  url: string;
  slug: string;
  children?: MenuItem[];
}

export interface WPProduct {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  featured_media: number;
  yoast_head_json: YoastHeadJson;
  link: string;
  modified: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string; alt_text: string }>;
    'wp:term'?: Array<Array<{ id: number; name: string; slug: string }>>;
  };
}

export interface WPMedia {
  id: number;
  source_url: string;
  alt_text: string;
  media_details: {
    width: number;
    height: number;
    sizes?: Record<string, { source_url: string; width: number; height: number }>;
  };
}
