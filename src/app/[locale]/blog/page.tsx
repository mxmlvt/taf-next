import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getBlogPosts } from '@/lib/wordpress';
import type { Locale } from '@/lib/types';
import { formatDate, stripHtml } from '@/lib/utils';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'en'
      ? 'Zipper Guides & Tutorials | TAF Blog'
      : 'Poradniki i aktualności o Zamkach Błyskawicznych | Blog TAF',
    description: locale === 'en'
      ? 'Expert guides on choosing, installing, and maintaining zippers. Industry insights, how-to tutorials, and zipper technology trends. Free resources for manufacturers and designers.'
      : 'Eksperckie poradniki doboru, montażu i konserwacji zamków. Informacje branżowe, tutoriale i trendy w technologii zamków. Bezpłatne zasoby dla producentów.',
    alternates: {
      canonical: locale === 'en' ? 'https://trimsandfasteners.com/blog/' : 'https://trimsandfasteners.com/pl/blog/',
      languages: {
        en: 'https://trimsandfasteners.com/blog/',
        pl: 'https://trimsandfasteners.com/pl/blog/',
      },
    },
  };
}

// EN posts were bulk-imported with wrong dates; these match the original PL publication dates
const EN_DATE_FIX: Record<string, string> = {
  'zippers-for-bags-and-backpacks': '2025-07-02T22:47:44',
  'zippers-in-the-furniture-industry': '2025-07-02T22:30:38',
  'where-to-buy-zippers-wholesale': '2025-06-27T14:49:29',
  'coil-zippers-characteristics-and-subtypes': '2025-06-27T14:06:42',
  'zippers-comparison-metal-plastic-and-nylon': '2025-06-20T10:03:16',
  'how-to-fix-zipper-problems': '2025-05-23T15:27:39',
  'how-to-recognize-a-high-quality-zipper': '2025-05-14T15:49:31',
};

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  const { posts } = await getBlogPosts(locale as Locale);

  return (
    <div>
      <div className="subpage-hero relative min-h-[50vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://trimsandfasteners.com/wp-content/uploads/2025/06/ykkmetal-scaled.jpg"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/65" />
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="font-[Jost] text-3xl sm:text-5xl font-light text-white">Blog</h1>
          <p className="font-[Jost] text-white/70 mt-4 text-base max-w-xl leading-relaxed">
            {locale === 'en'
              ? 'News, guides and insights about zippers and fasteners.'
              : 'Aktualności, poradniki i informacje o zamkach błyskawicznych.'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {posts.length === 0 ? (
          <p className="font-[Jost] text-gray-400 text-center py-20">
            {locale === 'en' ? 'No posts yet.' : 'Brak wpisów.'}
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => {
              const featuredImage = post._embedded?.['wp:featuredmedia']?.[0];
              const href = locale === 'en' ? `/blog/${post.slug}/` : `/pl/blog/${post.slug}/`;
              return (
                <article key={post.id} className="group">
                  <Link href={href}>
                    <div className="overflow-hidden rounded-xl aspect-video bg-gray-100 mb-4">
                      {featuredImage ? (
                        <Image
                          src={featuredImage.source_url}
                          alt={featuredImage.alt_text || post.title.rendered}
                          width={600}
                          height={338}
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-400 text-sm font-[Jost]">TAF</span>
                        </div>
                      )}
                    </div>
                    <time className="text-xs text-gray-400 font-[Jost]">{formatDate(locale === 'en' ? (EN_DATE_FIX[post.slug] || post.date) : post.date, locale as Locale)}</time>
                    <h2
                      className="font-[Jost] font-medium text-lg mt-1 mb-2 group-hover:text-gray-600 transition-colors line-clamp-2"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                    <p className="font-[Jost] text-sm text-gray-500 line-clamp-3">
                      {stripHtml(post.excerpt.rendered)}
                    </p>
                  </Link>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
