import type { FC } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type PhotoBannerProps = {
  image: string;
  className?: string;
};

export const PhotoBanner: FC<PhotoBannerProps> = ({ image, className }) => {
  return (

    <div className={cn('md:mx-10 px-6 py-16 max-w-full overflow-x-hidden h-[70dvh] relative', className)}>

      <Image src={image} alt="Photo" fill className="object-cover size-full object-center" priority />

    </div>

  );
};
