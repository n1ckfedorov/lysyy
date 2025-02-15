import type { CollectionConfig } from 'payload';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { populatePublishedAt, revalidateDelete, revalidatePage } from '../hooks';
import { generatePreviewPath } from '../utils/generatePreviewPath';

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    plural: 'Pages 📄',
    singular: 'Page',
  },

  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'pages',
          req,
        });

        return path;
      },
    },
    useAsTitle: 'title',
    description: 'Pages are the main content of the website.',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
    },
    {
      name: 'mainImages',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
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
            if (data?.title && !data?.slug) {
              data.slug = data.title
                .replace(/[^\w\s-]/g, '')
                .replace(/\s+/g, '-')
                .toLowerCase();
            }
          },
        ],
      },
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({}),
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
