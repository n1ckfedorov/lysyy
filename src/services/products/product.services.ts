import { getPayloadInstance } from '../payload';

export const getProducts = async () => {
  const payload = await getPayloadInstance();
  const products = await payload.find({
    collection: 'products',
    where: {
      image: {
        exists: true,
      },
    },
    limit: 999,
  });

  return products.docs;
};

export const getProductBySlug = async (slug: string) => {
  const payload = await getPayloadInstance();
  const product = await payload.find({
    collection: 'products',
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

  return product.docs[0];
};
