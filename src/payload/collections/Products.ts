import type { CollectionConfig } from 'payload';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { populatePublishedAt, revalidateDelete, revalidatePage } from '../hooks';
import { generatePreviewPath } from '../utils/generatePreviewPath';

export const Products: CollectionConfig = {
  slug: 'products',
  labels: {
    plural: 'Products 🛍️',
    singular: 'Product',
  },
  admin: {
    useAsTitle: 'title',
    description: 'Products created by Sergiy Lysyy',
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'products',
          req,
        });

        return path;
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
      name: 'shortDescription',
      type: 'text',
    },
    {
      name: 'description',
      type: 'richText',
      editor: lexicalEditor({}),
    },
    {
      name: 'price',
      type: 'number',
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
