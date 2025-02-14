/* eslint-disable react/no-array-index-key */
'use client';
import Masonry from '@mui/lab/Masonry';
import {
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { RichText } from '../RichText/RichText';

type TimelineEntry = {
  title: string;
  content: any;
  description: any;
};

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-neutral-950 font-sans md:px-10 "
      ref={containerRef}
    >
      <div className="container mx-auto py-10 md:py-20">
        <h2 className="text-2xl md:text-4xl mb-4 text-secondary max-w-4xl">
          Timeline of my journey
        </h2>

      </div>

      <div ref={ref} className="relative container mx-auto pb-20">
        <div className="relative mx-auto pb-20">
          {data.map((item, index) => (
            <div
              key={index}
              className="relative flex justify-start pt-10 md:pt-20 md:gap-10 "
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="md:size-10 size-6 absolute left-1 md:left-3 rounded-full bg-black flex items-center justify-center">
                  <div className="md:size-4 size-2 rounded-full bg-secondary  p-1" />
                </div>
                <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-secondary ">
                  {item.title}
                </h3>
              </div>

              <div className="relative pl-12 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-secondary">
                  {item.title}
                </h3>
                {item.description && (
                  <RichText content={item.description} className="mb-10 text-white w-full " />
                )}
                {item.content && (
                  <Masonry
                    columns={{
                      xs: 1,
                      sm: 2,
                    }}
                    spacing={2}
                  >
                    {item.content.map((image: any) => (
                      <Image src={image.url} alt="image" key={image.id} height={image.height} width={image.width} />
                    ))}
                  </Masonry>
                )}
              </div>
            </div>
          ))}
          <div
            style={{
              height: `${height}px`,
            }}
            className="absolute md:left-8 left-[15px] top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] max-h-full"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-primary via-secondary to-transparent from-[0%] via-[40%] rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
