import type { News } from '@/payload-types';
import { getNews, getNewsBySlug } from '@/services/news/news.services';
import { notFound } from 'next/navigation';
import { NewsArticle } from './components/NewsArticle';

export async function generateStaticParams() {
  const news: News[] = await getNews();
  return news.map(news => ({
    newsSlug: news.slug,
  }));
}

export default async function NewsPage({ params }: { params: Promise<{ newsSlug: string }> }) {
  const { newsSlug } = await params;

  if (!newsSlug) {
    notFound();
  }

  const news = await getNewsBySlug(newsSlug);
  const allNews = await getNews();

  if (!news) {
    notFound();
  }

  return (
    <NewsArticle
      {...news}
      allNews={allNews}
    />
  );
}
