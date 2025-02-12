import type { CollectionConfig } from 'payload';

export const WorkOrders: CollectionConfig = {
  slug: 'work-orders',
  labels: {
    plural: 'Work Orders 📞',
    singular: 'Work Order',
  },
  access: {
    create: () => false,
    update: () => false,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'work', 'message', 'createdAt'],
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
      name: 'work',
      type: 'relationship',
      relationTo: 'works',
      hasMany: false,
    },
    {
      name: 'createdAt',
      type: 'date',
    },
  ],

};
