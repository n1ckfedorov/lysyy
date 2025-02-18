import { getPayloadInstance } from '../payload';

export const getWorks = async () => {
  const payload = await getPayloadInstance();
  const works = await payload.find({
    collection: 'works',
    where: {
      image: {
        exists: true,
      },
    },
  });

  return works.docs;
};

export const getWorkBySlug = async (slug: string) => {
  const payload = await getPayloadInstance();
  const work = await payload.find({
    collection: 'works',
    where: {
      slug: {
        equals: slug,
      },
      image: {
        exists: true,
      },
    },
    limit: 1,
    draft: true,
  });

  return work.docs[0];
};
