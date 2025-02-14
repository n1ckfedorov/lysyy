import type { FC } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type PhotoBannerProps = {
  image: string;
  className?: string;
  title?: string;
};

export const PhotoBanner: FC<PhotoBannerProps> = ({ image, className, title }) => {
  return (
    <div className={cn('md:mx-10 px-6 py-16 max-w-full overflow-x-hidden h-[70dvh] relative', className)}>
      <Image src={image} alt="Photo" fill className="object-cover size-full object-center" priority />
      {title && <h1 className="text-white md:text-5xl text-3xl font-bold absolute inset-0 flex items-center justify-center z-20 text-center">{title}</h1>}
      <div className="bg-black/50 absolute inset-0 z-10"></div>
    </div>

  );
};
