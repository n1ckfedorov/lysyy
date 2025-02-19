import { getPayloadInstance } from '../payload';

export const getWorkshop = async () => {
  const payload = await getPayloadInstance();
  const workShop = await payload.find({
    collection: 'workshop',
    limit: 999,
  });

  return workShop.docs;
};
