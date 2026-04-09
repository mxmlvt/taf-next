'use client';

/**
 * Custom Next.js image loader using wsrv.nl — free, no account needed.
 * Handles resizing, WebP conversion, and quality compression.
 * Bypasses Vercel Image Optimization quota entirely.
 */
export default function wsrvLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  // Already an absolute URL — pass as-is to wsrv
  const url = src.startsWith('http') ? src : `https://wp.trimsandfasteners.com${src}`;
  const q = quality ?? 75;
  return `https://wsrv.nl/?url=${encodeURIComponent(url)}&w=${width}&q=${q}&output=webp&maxage=30d`;
}
