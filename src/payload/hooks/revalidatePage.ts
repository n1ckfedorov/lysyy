import type { Page } from '@/payload-types';

import type { CollectionAfterChangeHook, CollectionAfterDeleteHook, SanitizedCollectionConfig } from 'payload';
import { revalidatePath, revalidateTag } from 'next/cache';

const pathToRevalidate = (doc: Page, collection?: SanitizedCollectionConfig) => {
  if (doc.slug === 'home') {
    return '/';
  }

  if (collection?.slug === 'workshop') {
    return '/workshop';
  }

  return `/${doc.slug}`;
};

export const revalidatePage: CollectionAfterChangeHook<Page> = ({
  doc,
  previousDoc,
  req: { payload, context },
  collection,
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = pathToRevalidate(doc, collection);

      payload.logger.info(`Revalidating page at path: ${path}`);

      revalidatePath(path);
      revalidateTag('pages-sitemap');
    }

    // If the page was previously published, we need to revalidate the old path
    if (previousDoc?._status === 'published' && doc._status !== 'published') {
      const oldPath = pathToRevalidate(previousDoc, collection);

      payload.logger.info(`Revalidating old page at path: ${oldPath}`);

      revalidatePath(oldPath);
      revalidateTag('pages-sitemap');
    }
  }
  return doc;
};

export const revalidateDelete: CollectionAfterDeleteHook<Page> = ({ doc, req: { context }, collection }) => {
  if (!context.disableRevalidate) {
    const path = pathToRevalidate(doc, collection);
    revalidatePath(path);
    revalidateTag('pages-sitemap');
  }

  return doc;
};
