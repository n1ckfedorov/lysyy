'use client';

import type { News } from '@/payload-types';
import { Button } from '@/components';
import { Lens } from '@/components/ui/lens';
import { useImage } from '@/hooks/useImage';
import Image from 'next/image';
import Link from 'next/link';

const NewsCard = ({ news }: { news: News }) => {
  const image = useImage(news.image);
  return (
    <Link href={`/news/${news.slug}`} key={news.id} className="cursor-pointer relative overflow-hidden shadow-xl ">
      <Lens className="max-h-[500px]">
        <Image
          src={image?.url ?? ''}
          alt={news.title ?? ''}
          height={image?.height ?? 300}
          width={image?.width ?? 300}
          objectFit="cover"
          className="mx-auto object-center"
        />
      </Lens>
      <div className="flex flex-col bg-white text-gray-900 p-6 gap-4 rounded-b-xl shadow-md hover:shadow-lg">
        <h2 className="font-semibold text-lg">{news.title}</h2>
        <Button>Read More</Button>
      </div>
    </Link>

  );
};

const NewsSection = ({ news }: { news: News[] }) => {
  return (

    <section className="container py-10">
      <div className="flex items-start justify-between mb-4 md:mb-10 gap-2 md:flex-col">
        <h1 className="text-5xl font-bold  text-secondary">News</h1>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {news.map(news => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>

    </section>
  );
};

export default NewsSection;
