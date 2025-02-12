import config from '@payload-config';
import { getPayload } from 'payload';

export const getPayloadInstance = async () => {
  return await getPayload({ config });
};
