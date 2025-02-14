import { getPayloadInstance } from '../payload';

export const getWorkshop = async () => {
  const payload = await getPayloadInstance();
  const workShop = await payload.find({
    collection: 'workshop',
  });

  return workShop.docs;
};
