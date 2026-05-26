import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Locale } from '@/lib/types';
import previewArticles from '@/data/preview-articles.json';

type Article = {
  nr: number;
  title: string;
  slug: string;
  metaDescription: string;
  contentHtml: string;
  headings: { id: string; text: string }[];
  status: string;
  hasCaseStudy: boolean;
};

const articles = previewArticles as Article[];

function getArticle(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug);
}

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  const locales = ['en', 'pl'];
  return locales.flatMap(locale =>
    articles.map(a => ({ locale, slug: a.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `[PREVIEW] ${article.title}`,
    description: article.metaDescription,
    robots: {
      index: false,
      follow: false,
      googleBot: { index: false, follow: false },
    },
  };
}

export default async function PreviewPage({ params }: Props) {
  const { locale, slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const backHref = locale === 'en' ? '/blog/' : '/pl/blog/';
  const homeHref = locale === 'en' ? '/' : '/pl/';
  const contactHref = locale === 'en' ? '/contact/' : '/pl/contact/';

  return (
    <article>
      {/* ── Preview banner ── */}
      <div className="bg-amber-400 text-amber-900 text-center py-2.5 px-4 text-sm font-[Jost] font-semibold tracking-wide">
        ⚠ DRAFT PREVIEW — noindex, nofollow — not visible to search engines
        {article.hasCaseStudy && (
          <span className="ml-3 bg-amber-700 text-amber-50 text-xs px-2 py-0.5 rounded font-semibold">
            + case study
          </span>
        )}
      </div>

      {/* ── Hero placeholder (no WP image) ── */}
      <div className="subpage-hero relative min-h-[30vh] flex flex-col justify-end overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-xs text-white/40 font-[Jost] block mb-3">
            Nr {article.nr} · {article.status}
          </div>
          <h1 className="font-[Jost] text-3xl sm:text-5xl font-light leading-snug max-w-4xl text-white">
            {article.title}
          </h1>
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
              <span className="text-gray-400 italic">preview</span>
              <span>/</span>
              <span className="text-gray-600 line-clamp-1">{article.title}</span>
            </nav>

            {/* Meta description preview */}
            <div className="mb-8 text-xs text-gray-400 font-[Jost] border-l-2 border-amber-400 pl-3 italic">
              <span className="font-semibold not-italic text-gray-500">Meta: </span>
              {article.metaDescription}
            </div>

            {/* Table of Contents */}
            {article.headings.length >= 1 && (
              <div className="mb-10 border border-gray-200 p-5 bg-gray-50">
                <p className="font-[Jost] text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
                  {locale === 'en' ? 'Table of contents' : 'Spis treści'}
                </p>
                <ol className="space-y-1.5">
                  {article.headings.map((h, i) => (
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
            <div
              className="prose prose-gray max-w-none font-[Jost] prose-img:rounded-xl blog-article-content"
              dangerouslySetInnerHTML={{ __html: article.contentHtml }}
            />

            {/* ── CTA (mirrors blog template) ── */}
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

          </div>

          {/* Right: article index sidebar */}
          <aside className="lg:w-72 flex-shrink-0">
            <h2 className="font-[Jost] text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6">
              {locale === 'en' ? 'All preview articles' : 'Wszystkie podglądy'}
            </h2>
            <div className="space-y-3">
              {articles.map(a => (
                <Link
                  key={a.slug}
                  href={locale === 'en' ? `/preview/${a.slug}/` : `/pl/preview/${a.slug}/`}
                  className={`block font-[Jost] text-sm leading-snug transition-colors ${
                    a.slug === slug
                      ? 'text-black font-semibold'
                      : 'text-gray-500 hover:text-black'
                  }`}
                >
                  <span className="text-gray-300 mr-1.5">{String(a.nr).padStart(2, '0')}.</span>
                  {a.title}
                  {a.hasCaseStudy && (
                    <span className="ml-1.5 text-xs text-amber-600 font-semibold">★</span>
                  )}
                </Link>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-gray-100">
              <Link href={backHref} className="text-sm text-gray-400 hover:text-black font-[Jost] transition-colors block">
                {locale === 'en' ? '← Back to blog' : '← Powrót do bloga'}
              </Link>
            </div>
          </aside>

        </div>
      </div>
    </article>
  );
}
