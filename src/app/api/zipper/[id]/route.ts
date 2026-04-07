import { NextRequest, NextResponse } from 'next/server';
import { cleanZipperName } from '@/lib/utils';
import { PL_OVERRIDES } from '@/lib/pl-zipper-overrides';

const WP_API = 'https://wp.trimsandfasteners.com/wp-json';
const OLD_HTTPS = 'https://trimsandfasteners.com/wp-content/';
const OLD_HTTP  = 'http://trimsandfasteners.com/wp-content/';
const NEW = 'https://wp.trimsandfasteners.com/wp-content/';

// Rewrite any leftover old-domain image URLs in API response
function rewriteUrls(obj: unknown): unknown {
  if (typeof obj === 'string') return obj.replaceAll(OLD_HTTPS, NEW).replaceAll(OLD_HTTP, NEW);
  if (Array.isArray(obj)) return obj.map(rewriteUrls);
  if (obj && typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj as Record<string, unknown>).map(([k, v]) => [k, rewriteUrls(v)])
    );
  }
  return obj;
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const lang = req.nextUrl.searchParams.get('lang') || 'en';
  const numId = parseInt(id);
  if (isNaN(numId)) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  try {
    const res = await fetch(
      `${WP_API}/taf/v1/zipper/${numId}?lang=${lang}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    const raw = await res.json();
    const data = rewriteUrls(raw) as typeof raw;
    data.name = cleanZipperName(data.name);
    // Apply Polish description overrides for products not translated in WP
    if (lang === 'pl' && PL_OVERRIDES[numId]) {
      Object.assign(data, PL_OVERRIDES[numId]);
    }
    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}
