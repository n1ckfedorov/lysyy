import { getNews } from '@/services/news/news.services';
import News from './components/News';

export default async function NewsPage() {
  const news = await getNews();

  return (
    <News news={news} />
  );
}
