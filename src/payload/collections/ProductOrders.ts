import type { CollectionConfig } from 'payload';

export const ProductOrders: CollectionConfig = {
  slug: 'product-orders',
  labels: {
    plural: 'Product Orders 📞',
    singular: 'Product Order',
  },
  access: {
    create: () => false,
    update: () => false,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'product', 'message', 'createdAt'],
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
      name: 'product',
      type: 'relationship',
      relationTo: 'products',
      hasMany: false,
    },
    {
      name: 'createdAt',
      type: 'date',
    },
  ],

};
