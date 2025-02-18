import { getPayloadInstance } from '../payload';

export const getPages = async () => {
  const payload = await getPayloadInstance();
  const pages = await payload.find({
    collection: 'pages',
    draft: true,
  });
  return pages.docs;
};
export const getPageBySlug = async (slug: string) => {
  const payload = await getPayloadInstance();
  const page = await payload.find({
    collection: 'pages',
    draft: true,
    limit: 1,
    where: {
      slug: {
        equals: slug,
      },
    },
  });
  return page.docs[0];
};
