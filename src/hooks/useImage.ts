import type { Media } from '@/payload-types';

export const useImage = (image: number | Media) => {
  if (typeof image === 'number') {
    return null;
  }
  return image;
};

export const useImages = (images: (number | Media)[]) => {
  if (!images) {
    return [];
  }

  for (const image of images) {
    if (typeof image === 'number') {
      return null;
    }
  }

  return images.map(useImage);
};
