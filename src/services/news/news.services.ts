import { getPayloadInstance } from '../payload';

export const getNews = async () => {
  const payload = await getPayloadInstance();
  const news = await payload.find({
    collection: 'news',
  });

  return news.docs;
};

export const getNewsBySlug = async (slug: string) => {
  const payload = await getPayloadInstance();
  const news = await payload.find({
    collection: 'news',
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
    draft: true,
  });

  return news.docs[0];
};
