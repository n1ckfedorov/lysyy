import type { CollectionConfig } from 'payload';

export const ContactForm: CollectionConfig = {
  slug: 'contact-form',
  labels: {
    plural: 'Contact Form 📞',
    singular: 'Contact Form',
  },
  access: {
    create: () => false,
    update: () => false,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'message'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'email',
      type: 'text',
    },
    {
      name: 'message',
      type: 'textarea',
    },
    {
      name: 'createdAt',
      type: 'date',
    },
  ],

};
