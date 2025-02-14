import type { CollectionConfig } from 'payload';

export const Works: CollectionConfig = {
  slug: 'works',
  labels: {
    plural: 'Works 🖼️',
    singular: 'Work',
  },
  admin: {
    useAsTitle: 'title',
    description: 'Artworks created by Sergiy Lysyy',
    livePreview: {
      url: ({ data }) => {
        return `${process.env.NEXT_PUBLIC_APP_URL}/works/${data.slug}`;
      },
    },
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
      admin: {
        position: 'sidebar',
      },
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
  versions: {
    drafts: {
      autosave: {
        interval: Number(process.env.PAYLOAD_AUTOSAVE_INTERVAL),
      },
    },
  },
};
