/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * Supported timezones in IANA format.
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "supportedTimezones".
 */
export type SupportedTimezones =
  | 'Pacific/Midway'
  | 'Pacific/Niue'
  | 'Pacific/Honolulu'
  | 'Pacific/Rarotonga'
  | 'America/Anchorage'
  | 'Pacific/Gambier'
  | 'America/Los_Angeles'
  | 'America/Tijuana'
  | 'America/Denver'
  | 'America/Phoenix'
  | 'America/Chicago'
  | 'America/Guatemala'
  | 'America/New_York'
  | 'America/Bogota'
  | 'America/Caracas'
  | 'America/Santiago'
  | 'America/Buenos_Aires'
  | 'America/Sao_Paulo'
  | 'Atlantic/South_Georgia'
  | 'Atlantic/Azores'
  | 'Atlantic/Cape_Verde'
  | 'Europe/London'
  | 'Europe/Berlin'
  | 'Africa/Lagos'
  | 'Europe/Athens'
  | 'Africa/Cairo'
  | 'Europe/Moscow'
  | 'Asia/Riyadh'
  | 'Asia/Dubai'
  | 'Asia/Baku'
  | 'Asia/Karachi'
  | 'Asia/Tashkent'
  | 'Asia/Calcutta'
  | 'Asia/Dhaka'
  | 'Asia/Almaty'
  | 'Asia/Jakarta'
  | 'Asia/Bangkok'
  | 'Asia/Shanghai'
  | 'Asia/Singapore'
  | 'Asia/Tokyo'
  | 'Asia/Seoul'
  | 'Australia/Sydney'
  | 'Pacific/Guam'
  | 'Pacific/Noumea'
  | 'Pacific/Auckland'
  | 'Pacific/Fiji';

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    pages: Page;
    works: Work;
    products: Product;
    media: Media;
    workshop: Workshop;
    news: News;
    users: User;
    'work-orders': WorkOrder;
    'product-orders': ProductOrder;
    'contact-form': ContactForm;
    'payload-jobs': PayloadJob;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    pages: PagesSelect<false> | PagesSelect<true>;
    works: WorksSelect<false> | WorksSelect<true>;
    products: ProductsSelect<false> | ProductsSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    workshop: WorkshopSelect<false> | WorkshopSelect<true>;
    news: NewsSelect<false> | NewsSelect<true>;
    users: UsersSelect<false> | UsersSelect<true>;
    'work-orders': WorkOrdersSelect<false> | WorkOrdersSelect<true>;
    'product-orders': ProductOrdersSelect<false> | ProductOrdersSelect<true>;
    'contact-form': ContactFormSelect<false> | ContactFormSelect<true>;
    'payload-jobs': PayloadJobsSelect<false> | PayloadJobsSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: number;
  };
  globals: {};
  globalsSelect: {};
  locale: null;
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: {
      schedulePublish: TaskSchedulePublish;
      inline: {
        input: unknown;
        output: unknown;
      };
    };
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * Pages are the main content of the website.
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: number;
  title: string;
  description?: string | null;
  mainImages?: (number | Media)[] | null;
  slug: string;
  content?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    /**
     * Maximum upload file size: 12MB. Recommended file size for images is <500KB.
     */
    image?: (number | null) | Media;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * Artworks created by Sergiy Lysyy
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "works".
 */
export interface Work {
  id: number;
  title: string;
  image: number | Media;
  isSold?: boolean | null;
  width?: number | null;
  height?: number | null;
  price?: number | null;
  slug: string;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * Products created by Sergiy Lysyy
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "products".
 */
export interface Product {
  id: number;
  title: string;
  shortDescription?: string | null;
  description?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  price?: number | null;
  image: number | Media;
  isSold?: boolean | null;
  slug: string;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "workshop".
 */
export interface Workshop {
  id: number;
  year: string;
  subtitle?: string | null;
  description?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  slug: string;
  images?: (number | Media)[] | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * News articles
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "news".
 */
export interface News {
  id: number;
  title: string;
  content?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  image: number | Media;
  slug: string;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  name?: string | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "work-orders".
 */
export interface WorkOrder {
  id: number;
  name?: string | null;
  email?: string | null;
  message?: string | null;
  work?: (number | null) | Work;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "product-orders".
 */
export interface ProductOrder {
  id: number;
  name?: string | null;
  email?: string | null;
  message?: string | null;
  product?: (number | null) | Product;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "contact-form".
 */
export interface ContactForm {
  id: number;
  name?: string | null;
  email?: string | null;
  message?: string | null;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-jobs".
 */
export interface PayloadJob {
  id: number;
  /**
   * Input data provided to the job
   */
  input?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  taskStatus?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  completedAt?: string | null;
  totalTried?: number | null;
  /**
   * If hasError is true this job will not be retried
   */
  hasError?: boolean | null;
  /**
   * If hasError is true, this is the error that caused it
   */
  error?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  /**
   * Task execution log
   */
  log?:
    | {
        executedAt: string;
        completedAt: string;
        taskSlug: 'inline' | 'schedulePublish';
        taskID: string;
        input?:
          | {
              [k: string]: unknown;
            }
          | unknown[]
          | string
          | number
          | boolean
          | null;
        output?:
          | {
              [k: string]: unknown;
            }
          | unknown[]
          | string
          | number
          | boolean
          | null;
        state: 'failed' | 'succeeded';
        error?:
          | {
              [k: string]: unknown;
            }
          | unknown[]
          | string
          | number
          | boolean
          | null;
        id?: string | null;
      }[]
    | null;
  taskSlug?: ('inline' | 'schedulePublish') | null;
  queue?: string | null;
  waitUntil?: string | null;
  processing?: boolean | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: number;
  document?:
    | ({
        relationTo: 'pages';
        value: number | Page;
      } | null)
    | ({
        relationTo: 'works';
        value: number | Work;
      } | null)
    | ({
        relationTo: 'products';
        value: number | Product;
      } | null)
    | ({
        relationTo: 'media';
        value: number | Media;
      } | null)
    | ({
        relationTo: 'workshop';
        value: number | Workshop;
      } | null)
    | ({
        relationTo: 'news';
        value: number | News;
      } | null)
    | ({
        relationTo: 'users';
        value: number | User;
      } | null)
    | ({
        relationTo: 'work-orders';
        value: number | WorkOrder;
      } | null)
    | ({
        relationTo: 'product-orders';
        value: number | ProductOrder;
      } | null)
    | ({
        relationTo: 'contact-form';
        value: number | ContactForm;
      } | null)
    | ({
        relationTo: 'payload-jobs';
        value: number | PayloadJob;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages_select".
 */
export interface PagesSelect<T extends boolean = true> {
  title?: T;
  description?: T;
  mainImages?: T;
  slug?: T;
  content?: T;
  meta?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "works_select".
 */
export interface WorksSelect<T extends boolean = true> {
  title?: T;
  image?: T;
  isSold?: T;
  width?: T;
  height?: T;
  price?: T;
  slug?: T;
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "products_select".
 */
export interface ProductsSelect<T extends boolean = true> {
  title?: T;
  shortDescription?: T;
  description?: T;
  price?: T;
  image?: T;
  isSold?: T;
  slug?: T;
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "workshop_select".
 */
export interface WorkshopSelect<T extends boolean = true> {
  year?: T;
  subtitle?: T;
  description?: T;
  slug?: T;
  images?: T;
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "news_select".
 */
export interface NewsSelect<T extends boolean = true> {
  title?: T;
  content?: T;
  image?: T;
  slug?: T;
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  name?: T;
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "work-orders_select".
 */
export interface WorkOrdersSelect<T extends boolean = true> {
  name?: T;
  email?: T;
  message?: T;
  work?: T;
  createdAt?: T;
  updatedAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "product-orders_select".
 */
export interface ProductOrdersSelect<T extends boolean = true> {
  name?: T;
  email?: T;
  message?: T;
  product?: T;
  createdAt?: T;
  updatedAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "contact-form_select".
 */
export interface ContactFormSelect<T extends boolean = true> {
  name?: T;
  email?: T;
  message?: T;
  createdAt?: T;
  updatedAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-jobs_select".
 */
export interface PayloadJobsSelect<T extends boolean = true> {
  input?: T;
  taskStatus?: T;
  completedAt?: T;
  totalTried?: T;
  hasError?: T;
  error?: T;
  log?:
    | T
    | {
        executedAt?: T;
        completedAt?: T;
        taskSlug?: T;
        taskID?: T;
        input?: T;
        output?: T;
        state?: T;
        error?: T;
        id?: T;
      };
  taskSlug?: T;
  queue?: T;
  waitUntil?: T;
  processing?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "TaskSchedulePublish".
 */
export interface TaskSchedulePublish {
  input: {
    type?: ('publish' | 'unpublish') | null;
    locale?: string | null;
    doc?:
      | ({
          relationTo: 'pages';
          value: number | Page;
        } | null)
      | ({
          relationTo: 'works';
          value: number | Work;
        } | null)
      | ({
          relationTo: 'products';
          value: number | Product;
        } | null)
      | ({
          relationTo: 'workshop';
          value: number | Workshop;
        } | null)
      | ({
          relationTo: 'news';
          value: number | News;
        } | null);
    global?: string | null;
    user?: (number | null) | User;
  };
  output?: unknown;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}