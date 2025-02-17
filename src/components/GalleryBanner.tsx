'use client';

import { IconButton } from '@/components';
import { Lens } from '@/components/ui/lens';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

type RenderSlideProps = {
  id: number;
  image: string;
  hovering: boolean;
  setHovering: (hovering: boolean) => void;
  hasLens: boolean;
};

const renderSlide = ({ id, image, hovering, setHovering, hasLens }: RenderSlideProps) => {
  return (
    <SwiperSlide className="w-full h-full relative " key={id}>
      {hasLens && (
        <Lens hovering={hovering} setHovering={setHovering} className="w-full h-full ">
          <Image src={image} alt="Artwork" fill className="object-cover size-full object-center" priority />
        </Lens>
      )}
      {!hasLens && (
        <div className="w-full h-full">
          <Image src={image} alt="Artwork" fill className="object-cover size-full object-center" priority />
        </div>
      )}
    </SwiperSlide>

  );
};

export const GalleryBanner = ({ slides, hasLens = false, className }: { slides: { id: number; image: string }[]; hasLens?: boolean; className?: string }) => {
  const [hovering, setHovering] = useState(false);

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const [swiperLoaded, setSwiperLoaded] = useState(false);

  const initializeSwiperNavigation = useCallback(() => {
    if (prevRef.current && nextRef.current) {
      const swiperEl = document.querySelector(
        '.swiper-container',
      ) as unknown as { swiper: any };
      if (swiperEl && swiperEl.swiper) {
        const navigation = {
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        };
        swiperEl.swiper.params.navigation = navigation;
        swiperEl.swiper.navigation.init();
        swiperEl.swiper.navigation.update();
      }
    }
  }, []);

  useEffect(() => {
    if (swiperLoaded) {
      initializeSwiperNavigation();
    }
  }, [swiperLoaded, initializeSwiperNavigation]);

  return (

    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      modules={[EffectFade, Autoplay, Navigation, Pagination]}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop
      speed={700}
      effect="fade"
      className={cn('relative group h-[calc(100dvh-76px)]', className)}
      onInit={() => {
        setSwiperLoaded(true);
      }}

    >
      {slides.map(item => renderSlide({ ...item, hovering, setHovering, hasLens }))}
      {slides.length > 1 && (
        <div className="hidden md:flex">
          <IconButton
            variant="primary"
            ref={prevRef}
            className="z-40  absolute top-1/2 left-10 -translate-y-1/2 opacity-0 group-hover:opacity-100 "
          >

            <ChevronLeft className="size-5" />
          </IconButton>
          <IconButton
            variant="primary"
            ref={nextRef}
            className="z-40 absolute  top-1/2 right-10 -translate-y-1/2 opacity-0 group-hover:opacity-100 "

          >

            <ChevronRight className="size-5" />
          </IconButton>
        </div>
      )}

      <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />

    </Swiper>

  );
};
