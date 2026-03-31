import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getPostBySlug, getAllPostSlugs, extractYoastMeta, getRecentPosts } from '@/lib/wordpress';
import type { Locale } from '@/lib/types';
import { formatDate, cleanBlogContent, splitContentAtFaq, processHeadings } from '@/lib/utils';
import CustomPostBody, { getCustomHeadings } from '@/components/blog/CustomPostBody';

type Props = { params: Promise<{ locale: string; slug: string }> };

// Temporarily removed from site per client request (patent/legal reasons); files preserved
const HIDDEN_SLUGS = new Set([
  'zippers-in-the-furniture-industry',
  'zamki-blyskawiczne-w-branzy-meblarskiej',
]);

export async function generateStaticParams() {
  const [enSlugs, plSlugs] = await Promise.all([
    getAllPostSlugs('en'),
    getAllPostSlugs('pl'),
  ]);
  return [
    ...enSlugs.filter(slug => !HIDDEN_SLUGS.has(slug)).map(slug => ({ locale: 'en', slug })),
    ...plSlugs.filter(slug => !HIDDEN_SLUGS.has(slug)).map(slug => ({ locale: 'pl', slug })),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = await getPostBySlug(slug, locale as Locale);
  if (!post) return {};
  const seo = extractYoastMeta(post);
  const canonical = locale === 'en'
    ? `https://trimsandfasteners.com/blog/${slug}/`
    : `https://trimsandfasteners.com/pl/blog/${slug}/`;
  return {
    title: seo.title || post.title.rendered,
    description: seo.description,
    alternates: { canonical: seo.canonical || canonical },
    openGraph: {
      title: seo.ogTitle,
      description: seo.ogDescription,
      images: seo.ogImage ? [seo.ogImage] : [],
      type: 'article',
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  const [post, recentPosts] = await Promise.all([
    getPostBySlug(slug, locale as Locale),
    getRecentPosts(locale as Locale, 5),
  ]);
  if (!post || HIDDEN_SLUGS.has(slug)) notFound();

  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0];
  const backHref = locale === 'en' ? '/blog/' : '/pl/blog/';
  const homeHref = locale === 'en' ? '/' : '/pl/';
  const contactHref = locale === 'en' ? '/contact/' : '/pl/contact/';
  const otherPosts = recentPosts.filter(p => p.slug !== slug).slice(0, 4);

  // Determine if we have a custom hardcoded body for this post
  const customHeadings = getCustomHeadings(slug, locale);
  const hasCustomBody = customHeadings !== null;

  // Always process WP content for FAQ section (even for custom posts)
  const cleaned = cleanBlogContent(post.content.rendered);
  const { html: withIds, headings: wpHeadings } = processHeadings(cleaned);
  const [beforeFaq, faqAndAfter] = splitContentAtFaq(withIds);

  // Use custom headings for custom posts, WP-extracted ones otherwise
  const headings = hasCustomBody ? customHeadings : wpHeadings;

  const FALLBACK_IMG = 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/06/ykkmetal-scaled.jpg';
  const heroImg = featuredImage?.source_url || FALLBACK_IMG;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title.rendered.replace(/<[^>]*>/g, ''),
    datePublished: post.date,
    dateModified: post.modified,
    image: featuredImage?.source_url,
    author: { '@type': 'Organization', name: 'TAF - Trims and Fasteners' },
    publisher: {
      '@type': 'Organization',
      name: 'TAF - Trims and Fasteners',
      logo: { '@type': 'ImageObject', url: 'https://wp.trimsandfasteners.com/wp-content/uploads/2025/08/Projekt-bez-nazwy-75.png' },
    },
    description: post.excerpt?.rendered?.replace(/<[^>]*>/g, '').trim().slice(0, 160),
  };

  const faqSchema = post.yoast_head_json?.schema;

  return (
    <article>
      {/* ── Hero: featured image + overlay ── */}
      <div className="subpage-hero relative min-h-[30vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src={heroImg} alt="" fill className="object-cover" priority sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
          <time className="text-xs text-white/40 font-[Jost] block mb-3">
            {formatDate(post.date, locale as Locale)}
          </time>
          <h1
            className="font-[Jost] text-3xl sm:text-5xl font-light leading-snug max-w-4xl text-white"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
        </div>
      </div>

      {/* ── 2-column layout ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Left: content */}
          <div className="flex-1 min-w-0">

            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-xs font-[Jost] text-gray-400 mb-6 flex-wrap">
              <Link href={homeHref} className="hover:text-gray-700 transition-colors">
                {locale === 'en' ? 'Home' : 'Strona główna'}
              </Link>
              <span>/</span>
              <Link href={backHref} className="hover:text-gray-700 transition-colors">Blog</Link>
              <span>/</span>
              <span
                className="text-gray-600 line-clamp-1"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
            </nav>

            {/* Table of Contents */}
            {headings.length >= 1 && (
              <div className="mb-10 border border-gray-200 p-5 bg-gray-50">
                <p className="font-[Jost] text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
                  {locale === 'en' ? 'Table of contents' : 'Spis treści'}
                </p>
                <ol className="space-y-1.5">
                  {headings.map((h, i) => (
                    <li key={h.id} className="flex gap-2 items-baseline">
                      <span className="text-xs text-gray-400 font-[Jost] flex-shrink-0">{i + 1}.</span>
                      <a
                        href={`#${h.id}`}
                        className="font-[Jost] text-sm text-gray-700 hover:text-black transition-colors leading-snug"
                      >
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Article body */}
            {hasCustomBody ? (
              <CustomPostBody slug={slug} locale={locale} />
            ) : (
              <div
                className="prose prose-gray max-w-none font-[Jost] prose-img:rounded-xl blog-article-content"
                dangerouslySetInnerHTML={{ __html: beforeFaq }}
              />
            )}

            {/* ── CTA ── */}
            <div className="my-12 bg-white border border-gray-100 shadow-sm p-8 sm:p-10">
              <div className="text-center mb-8">
                <h3 className="font-[Jost] text-2xl sm:text-3xl font-bold text-[#111] leading-snug mb-3">
                  {locale === 'en'
                    ? 'Need the perfect zippers? Contact us.'
                    : 'Potrzebujesz idealnych zamków? Skontaktuj się.'}
                </h3>
                <p className="font-[Jost] text-[#b05050] text-base leading-relaxed max-w-2xl mx-auto">
                  {locale === 'en'
                    ? 'Choosing the right zipper is key to the success of any project — from clothing and bags to furniture upholstery.'
                    : 'Wybór odpowiedniego zamka to klucz do sukcesu każdego projektu — od odzieży i toreb po tapicerkę meblową.'}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-8 items-start">
                <div className="flex-1">
                  <p className="font-[Jost] text-gray-600 text-sm leading-relaxed">
                    {locale === 'en'
                      ? 'At TAF, we understand the importance of quality, durability, and a precise fit. As an experienced zipper distributor, we offer a wide range of metal, plastic, and nylon zippers, available in various sizes and colors.'
                      : 'W TAF rozumiemy znaczenie jakości, trwałości i precyzyjnego dopasowania. Jako doświadczony dystrybutor zamków oferujemy szeroki asortyment zamków metalowych, plastikowych i nylonowych, dostępnych w różnych rozmiarach i kolorach.'}
                  </p>
                </div>
                <div className="sm:w-56 flex-shrink-0 space-y-3 font-[Jost] text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">📞</span>
                    <a href="tel:+48221101101" className="hover:text-black transition-colors">+48 22 1101101</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">📞</span>
                    <a href="tel:+48723331331" className="hover:text-black transition-colors">+48 723 331 331</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">✉</span>
                    <a href="mailto:contact@trimsandfasteners.com" className="hover:text-black transition-colors break-all">
                      contact@trimsandfasteners.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ (from WP HTML) */}
            {faqAndAfter && (
              <div
                className="prose prose-gray max-w-none font-[Jost] blog-article-content"
                dangerouslySetInnerHTML={{ __html: faqAndAfter }}
              />
            )}
          </div>

          {/* Right: sidebar */}
          {otherPosts.length > 0 && (
            <aside className="lg:w-72 flex-shrink-0">
              <h2 className="font-[Jost] text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6">
                {locale === 'en' ? 'Other posts' : 'Inne artykuły'}
              </h2>
              <div className="space-y-6">
                {otherPosts.map(other => {
                  const otherImg = other._embedded?.['wp:featuredmedia']?.[0];
                  const otherHref = locale === 'en' ? `/blog/${other.slug}/` : `/pl/blog/${other.slug}/`;
                  return (
                    <Link key={other.id} href={otherHref} className="group flex gap-3 items-start">
                      {otherImg && (
                        <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                          <Image
                            src={otherImg.source_url}
                            alt={otherImg.alt_text || ''}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="64px"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <p
                          className="font-[Jost] text-sm text-gray-800 group-hover:text-black line-clamp-2 leading-snug transition-colors"
                          dangerouslySetInnerHTML={{ __html: other.title.rendered }}
                        />
                        <time className="text-xs text-gray-400 font-[Jost] mt-1 block">
                          {formatDate(other.date, locale as Locale)}
                        </time>
                      </div>
                    </Link>
                  );
                })}
              </div>
              <Link href={backHref} className="mt-8 inline-block text-sm text-gray-500 hover:text-black font-[Jost] transition-colors">
                {locale === 'en' ? 'View all posts →' : 'Wszystkie artykuły →'}
              </Link>
            </aside>
          )}
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
    </article>
  );
}
