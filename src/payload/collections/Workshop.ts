import type { CollectionConfig } from 'payload';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { populatePublishedAt, revalidateDelete, revalidatePage } from '../hooks';
import { generatePreviewPath } from '../utils/generatePreviewPath';

export const Workshop: CollectionConfig = {
  slug: 'workshop',
  labels: {
    plural: 'Workshop 🔧',
    singular: 'Workshop',
  },
  admin: {
    useAsTitle: 'year',
    livePreview: {
      url: ({ req }) => {
        const path = generatePreviewPath({
          slug: '',
          collection: 'workshop',
          req,
        });

        return path;
      },
    },
  },

  fields: [
    {
      name: 'year',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
    },
    {
      name: 'description',
      type: 'richText',
      editor: lexicalEditor({}),
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
            if (data?.year && !data?.slug) {
              data.slug = data.year
                .replace(/[^\w\s-]/g, '')
                .replace(/\s+/g, '-')
                .toLowerCase();
            }
          },
        ],
      },
    },
    {
      name: 'images',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
    },
  ],
  hooks: {
    afterChange: [revalidatePage],
    beforeChange: [populatePublishedAt],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: Number(process.env.PAYLOAD_AUTOSAVE_INTERVAL),
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
};
