import type { ZipperCard as ZipperCardType } from '@/lib/types';
import ZipperCard from './ZipperCard';

interface ZipperGridProps {
  zippers: ZipperCardType[];
}

export default function ZipperGrid({ zippers }: ZipperGridProps) {
  if (!zippers.length) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {zippers.map(zipper => (
        <ZipperCard key={zipper.id} zipper={zipper} />
      ))}
    </div>
  );
}
