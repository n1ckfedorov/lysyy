import type { CollectionSlug, PayloadRequest } from 'payload';

const collectionPrefixMap: Partial<Record<CollectionSlug, string>> = {
  works: '/works',
  news: '/news',
  workshop: '/workshop',
  products: '/shop',
  pages: '',
};

type Props = {
  collection: keyof typeof collectionPrefixMap;
  slug: string;
  req: PayloadRequest;
};

export const generatePreviewPath = ({ collection, slug }: Props) => {
  const encodedParams = new URLSearchParams({
    slug,
    collection,
    path: `${collectionPrefixMap[collection]}/${slug}`,
    previewSecret: process.env.PREVIEW_SECRET || '',
  });

  const url = `/next/preview?${encodedParams.toString()}`;

  return url;
};
