'use client';

import type { Work } from '@/payload-types';
import { Button, IconButton } from '@/components';
import { GoogleCaptchaWrapper } from '@/components/GoogleCaptchaWrapper';

import { useImage } from '@/hooks/useImage';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { type FC, useState } from 'react';
import { OrderModal } from './OrderModal';

type WorkWithNavigationProps = {
  allWorks: Work[];
} & Work;

export const WorkDetails: FC<WorkWithNavigationProps> = ({
  title,
  image,
  isSold,
  width,
  height,
  price,
  id,
  allWorks,
  slug,
}) => {
  const router = useRouter();

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const currentIndex = allWorks.findIndex(work => work.slug === slug);
  const nextSlug = currentIndex < allWorks.length - 1
    ? allWorks[currentIndex + 1]?.slug ?? allWorks[0]?.slug
    : allWorks[0]?.slug;
  const prevSlug = currentIndex > 0
    ? allWorks[currentIndex - 1]?.slug ?? allWorks[allWorks.length - 1]?.slug
    : allWorks[allWorks.length - 1]?.slug;

  const goToNextPage = () => {
    router.push(`/works/${nextSlug}`);
  };

  const goToPreviousPage = () => {
    router.push(`/works/${prevSlug}`);
  };

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const img = useImage(image);

  return (
    <>
      <div className="container  flex justify-between lg:gap-10 items-stretch py-10 flex-col lg:flex-row gap-4">

        <div className="size-full  after:content-[''] after:pb-[70%] relative after:block ">
          <Image src={img?.url ?? ''} alt={title ?? ''} fill className="object-cover absolute inset-0 !h-full !w-auto mx-auto" />
        </div>

        <div className="shrink-0 w-full lg:w-1/3  flex flex-col gap-2 lg:border-l border-secondary/20 lg:pl-10">
          {isSold && <div className="text-red-500 lg:text-lg font-bold lg:mb-10  ml-auto lg:ml-0">Sold</div>}
          {!isSold && <div className="text-green-600 lg:text-lg font-bold lg:mb-10  ml-auto lg:ml-0">For Sale</div>}

          <span className="lg:text-xl text-lg">Sergiy Lysyy</span>
          <h1 className="lg:text-4xl text-3xl font-bold text-primary">{title}</h1>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 ">
              <span>Size:</span>
              <span>

                {width}
                x
                {height}
                {' '}
                cm
              </span>
            </div>
            {price && (
              <div className="flex items-center gap-2 mt-4">
                <span>Price:</span>
                <b className="text-primary text-lg">
                  {price}
                  {' '}
                  $
                </b>
              </div>
            )}
          </div>
          <Button variant="primary" className="lg:mt-10 mt-5" onClick={handleDialogOpen}>Enquire</Button>
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
      {isDialogOpen
      && (
        <GoogleCaptchaWrapper>
          <OrderModal isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} title={title ?? ''} workId={id} />
        </GoogleCaptchaWrapper>
      )}

    </>

  );
};
