import type { FC } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { RichText } from './RichText/RichText';

type TextContentProps = {
  className?: string;
  textContent?: any;
  title: string;
  subtitle: string;
};

export const TextContent: FC<TextContentProps> = ({ className, textContent, title, subtitle }) => {
  return (

    <div className={cn('mx-auto  py-10 md:py-16  max-w-full overflow-x-hidden', className)}>
      <div className="container">

        <h1 className="text-4xl font-bold">{title}</h1>
        <span className="text-gray-500 text-sm mt-2 flex">
          {subtitle}
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            {textContent && <RichText content={textContent} className="mt-4 md:mt-10 rich-text" />}

          </div>
          <div className="flex flex-col gap-20 lg:items-end h-full items-center">
            <Image src="/assets/images/main-banner/1.jpg" alt="Sergiy Lysyy" width={550} height={550} className="lg:-mr-40" />

            <Image src="/assets/images/main-banner/2.jpg" alt="Sergiy Lysyy" width={450} height={450} />
          </div>
        </div>
      </div>
    </div>

  );
};
