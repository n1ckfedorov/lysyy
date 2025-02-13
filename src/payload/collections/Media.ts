import type { CollectionConfig } from 'payload';

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    useAsTitle: 'filename',
    // hidden: true,
  },
  labels: {
    plural: 'Media 🎨',
    singular: 'Media',
  },
  access: {
    read: () => true,
  },
  fields: [],
  upload: true,
};
