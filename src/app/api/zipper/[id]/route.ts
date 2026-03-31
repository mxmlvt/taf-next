import { NextRequest, NextResponse } from 'next/server';
import { cleanZipperName } from '@/lib/utils';

const WP_API = 'https://wp.trimsandfasteners.com/wp-json';

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const numId = parseInt(id);
  if (isNaN(numId)) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  try {
    const res = await fetch(
      `${WP_API}/taf/v1/zipper/${numId}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    const data = await res.json();
    // Clean eng/en suffix from EN popup post titles
    data.name = cleanZipperName(data.name);
    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}
