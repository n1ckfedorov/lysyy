'use client';

import type { News } from '@/payload-types';
import { OrderModal } from '@/app/(frontend)/works/[workSlug]/components/OrderModal';
import { IconButton, RichText } from '@/components';
import { useImage } from '@/hooks/useImage';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { type FC, useState } from 'react';

type NewsWithNavigationProps = {

  allNews: News[];
} & News;

export const NewsArticle: FC<NewsWithNavigationProps> = ({
  title,
  image,
  id,
  allNews,
  slug,
  content,
}) => {
  const router = useRouter();

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const currentIndex = allNews.findIndex(news => news.slug === slug);
  const nextSlug = currentIndex < allNews.length - 1
    ? allNews[currentIndex + 1]?.slug ?? allNews[0]?.slug
    : allNews[0]?.slug;
  const prevSlug = currentIndex > 0
    ? allNews[currentIndex - 1]?.slug ?? allNews[allNews.length - 1]?.slug
    : allNews[allNews.length - 1]?.slug;

  const goToNextPage = () => {
    router.push(`/news/${nextSlug}`);
  };

  const goToPreviousPage = () => {
    router.push(`/news/${prevSlug}`);
  };

  const img = useImage(image);

  return (
    <>
      <div className="container flex justify-between lg:gap-10 items-stretch py-10 gap-4 flex-col">

        <h1 className="text-5xl font-bold text-secondary">{title}</h1>

        <div className="size-full  after:content-[''] after:pb-[40%] relative after:block ">
          <Image src={img?.url ?? ''} alt={title ?? ''} fill className="object-cover absolute inset-0 !h-full !w-auto mx-auto" />
        </div>

        <div className="shrink-0 w-full flex flex-col gap-2 ">
          <RichText content={content} />

          <div className="flex items-center gap-6 lg:border-t border-secondary/20 lg:pt-10 mt-auto justify-center pt-8">

            <IconButton
              onClick={goToPreviousPage}
              variant="secondary"

              className="flex items-center gap-2 w-auto px-4 bg-secondary/70"

            >
              <ChevronLeft className="w-4 h-4" />
              <span>Prev</span>
            </IconButton>

            <IconButton
              onClick={goToNextPage}
              variant="secondary"

              className="flex items-center gap-2 w-auto px-4 bg-secondary/70"

            >
              <ChevronRight className="w-4 h-4" />

              <span>Next</span>
            </IconButton>

          </div>

        </div>

      </div>
      {isDialogOpen && <OrderModal isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} title={title ?? ''} workId={id} />}

    </>

  );
};
