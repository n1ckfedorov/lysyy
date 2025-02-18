import type { MetadataRoute } from 'next';
import { getWorks } from '@/services';
import { getNews } from '@/services/news/news.services';
import { getPages } from '@/services/pages/page.services';
import { getProducts } from '@/services/products/product.services';
import { getBaseUrl } from '@/utils/Helpers';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = await getPages();
  const works = await getWorks();
  const products = await getProducts();
  const news = await getNews();

  return [
    {
      url: `${getBaseUrl()}/`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.7,
    },
    {
      url: `${getBaseUrl()}/workshop`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.7,
    },
    {
      url: `${getBaseUrl()}/works`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.7,
    },
    ...works.map(work => ({
      url: `${getBaseUrl()}/works/${work.slug}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.7,
    })),
    {
      url: `${getBaseUrl()}/shop`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.7,
    },
    ...products.map(product => ({
      url: `${getBaseUrl()}/products/${product.slug}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.7,
    })),
    {
      url: `${getBaseUrl()}/news`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.7,
    },
    ...news.map(news => ({
      url: `${getBaseUrl()}/news/${news.slug}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.7,
    })),
    ...pages.map(page => ({
      url: `${getBaseUrl()}/${page.slug}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.7,
    })),
    {
      url: `${getBaseUrl()}/contact`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.7,
    },
  ];
}
