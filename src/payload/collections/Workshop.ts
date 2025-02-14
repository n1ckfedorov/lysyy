import type { CollectionConfig } from 'payload';
import { lexicalEditor } from '@payloadcms/richtext-lexical';

export const Workshop: CollectionConfig = {
  slug: 'workshop',
  labels: {
    plural: 'Workshop 🔧',
    singular: 'Workshop',
  },
  admin: {
    useAsTitle: 'year',
    livePreview: {
      url: () => {
        return `${process.env.NEXT_PUBLIC_APP_URL}/workshop`;
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
      name: 'images',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
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
