'use client';

import type { Product } from '@/payload-types';
import { Button, IconButton, RichText } from '@/components';
import { useImage } from '@/hooks/useImage';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { type FC, useState } from 'react';
import { OrderModal } from './OrderModal';

type ProductWithNavigationProps = {
  totalProducts: number;
  allProducts: Product[];
} & Product;

export const ProductDetails: FC<ProductWithNavigationProps> = ({
  title,
  image,
  isSold,
  price,
  id,
  totalProducts,
  allProducts,
  slug,
  description,
}) => {
  const router = useRouter();
  const currentId = Number(id);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const currentIndex = allProducts.findIndex(product => product.slug === slug);
  const nextSlug = currentIndex < totalProducts - 1
    ? allProducts[currentIndex + 1]?.slug ?? allProducts[0]?.slug
    : allProducts[0]?.slug;
  const prevSlug = currentIndex > 0
    ? allProducts[currentIndex - 1]?.slug ?? allProducts[totalProducts - 1]?.slug
    : allProducts[totalProducts - 1]?.slug;

  const goToNextPage = () => {
    router.push(`/shop/${nextSlug}`);
  };

  const goToPreviousPage = () => {
    router.push(`/shop/${prevSlug}`);
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

        <div className="shrink-0 w-full lg:w-1/2 flex flex-col gap-2 lg:border-l border-secondary/20 lg:pl-10">
          {isSold && <div className="text-red-500 lg:text-lg font-bold lg:mb-10  ml-auto lg:ml-0">Sold</div>}
          {!isSold && <div className="text-green-600 lg:text-lg font-bold lg:mb-10  ml-auto lg:ml-0">For Sale</div>}

          <span className="text-sm">Sergiy Lysyy</span>
          <h1 className="text-3xl font-bold text-primary mb-4">{title}</h1>
          <RichText content={description} />
          <div className="flex flex-col gap-1 border-t border-secondary/20 pt-4">
            <div className="flex items-center gap-2 ">
              <span className="font-semibold text-lg">Price:</span>
              <span className="font-bold text-primary text-xl">

                {price}
                {' '}
                $
              </span>
            </div>
          </div>
          <Button variant="primary" className="lg:mt-10 mt-5" onClick={handleDialogOpen}>Enquire</Button>
          <div className="flex items-center gap-6 lg:border-t border-secondary/20 lg:pt-10 mt-auto justify-center pt-8">

            <IconButton
              onClick={goToPreviousPage}
              variant="secondary"
              disabled={currentId <= 1}
              className="flex items-center gap-2 w-auto px-4 bg-secondary/70"

            >
              <ChevronLeft className="w-4 h-4" />
              <span>Prev</span>
            </IconButton>

            <IconButton
              onClick={goToNextPage}
              variant="secondary"
              disabled={currentId >= totalProducts}
              className="flex items-center gap-2 w-auto px-4 bg-secondary/70"

            >
              <ChevronRight className="w-4 h-4" />

              <span>Next</span>
            </IconButton>

          </div>

        </div>

      </div>
      {isDialogOpen && <OrderModal isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} title={title ?? ''} productId={id} />}

    </>

  );
};
