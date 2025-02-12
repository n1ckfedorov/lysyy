import type { Media } from '@/payload-types';

export const useImage = (image: number | Media) => {
  if (typeof image === 'number') {
    return null;
  }
  return image;
};
