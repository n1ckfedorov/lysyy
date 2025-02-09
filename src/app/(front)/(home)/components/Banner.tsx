'use client';

import { IconButton } from '@/components';
import { Lens } from '@/components/ui/lens';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const mockData = [
  {
    id: 1,
    title: 'Storm. Nida prieš šimtą metų.',
    image: '/assets/images/main-banner/1.jpg',
    darkText: true,

  },
  {
    id: 2,
    title: 'Winter Klaipeda. ❄️',
    image: '/assets/images/main-banner/2.jpg',
    darkText: false,
  },
  {
    id: 3,
    title: 'Klaipeda 100 years ago.',
    image: '/assets/images/main-banner/3.jpg',
    darkText: true,
  },
];

type RenderSlideProps = {
  id: number;
  title: string;
  image: string;
  darkText: boolean;
  hovering: boolean;
  setHovering: (hovering: boolean) => void;
};

const renderSlide = ({ id, title, image, darkText, hovering, setHovering }: RenderSlideProps) => {
  return (
    <SwiperSlide className="w-full h-full relative " key={id}>

      <Lens hovering={hovering} setHovering={setHovering} className="w-full h-full min-h-dvh">
        <Image src={image} alt={title} fill className="object-cover size-full object-center" priority />
      </Lens>

      <div className="absolute inset-0 z-30 flex items-center justify-center text-4xl font-bold shadow-2xl pointer-events-none">

        <h2 className={cn('p-4', `${darkText ? 'text-black shadow-black bg-white/50' : 'text-white shadow-white bg-black/50'}`)}>
          {title}
        </h2>

      </div>

    </SwiperSlide>

  );
};

export const Banner = () => {
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
      className="relative group"
      onInit={() => {
        setSwiperLoaded(true);
      }}

    >
      {mockData.map(item => renderSlide({ ...item, hovering, setHovering }))}
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

      <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />

    </Swiper>

  );
};
