import type { CollectionConfig } from 'payload';
import { revalidatePage } from '../utilities/revalidatePage';

export const Works: CollectionConfig = {
  slug: 'works',
  labels: {
    plural: 'Works 🖼️',
    singular: 'Work',
  },
  admin: {
    useAsTitle: 'title',
    description: 'Artworks created by Sergiy Lysyy',
  },
  hooks: {
    afterChange: [
      ({ req: { payload }, doc }) => {
        revalidatePage({
          payload,
          collection: 'works',
          doc,
        });
      },
    ],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'isSold',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'width',
      type: 'number',
    },
    {
      name: 'height',
      type: 'number',
    },
    {
      name: 'slug',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
      required: true,
      hooks: {
        beforeChange: [
          ({ data }) => {
            if (data?.title) {
              data.slug = data.title
                .replace(/[^\w\s-]/g, '')
                .replace(/\s+/g, '-')
                .toLowerCase();
            }
          },
        ],
      },
    },
  ],
};
