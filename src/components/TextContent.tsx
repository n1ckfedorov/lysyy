/* eslint-disable react-dom/no-dangerously-set-innerhtml */
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type TextContentProps = {
  className?: string;
  texts: string;
  title: string;
  subtitle: string;
};

export const TextContent: FC<TextContentProps> = ({ className, texts, title, subtitle }) => {
  return (

    <div className={cn(' mx-auto px-6 py-16 max-w-full overflow-x-hidden', className)}>
      <div className="container">

        <h1 className="text-4xl font-bold">{title}</h1>
        <span className="text-gray-500 text-sm mt-2 flex">
          {subtitle}
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <div dangerouslySetInnerHTML={{ __html: texts }} className="mt-10 rich-text" />

          </div>
          <div className="flex flex-col gap-20 lg:items-end h-full items-center">
            <Image src="https://watercolorsjanmin.com/wp-content/themes/yootheme/cache/32/Boats-in-the-mist-38-x-56-cm-scaled-321470c4.webp" alt="Sergiy Lysyy" width={500} height={500} className="lg:-mr-40" />

            <Image src="https://watercolorsjanmin.com/wp-content/themes/yootheme/cache/8a/Abandoned-38-x-56-cm-de-droom-van-een-verlaten-wrak-.-Silver-Award-Mondial-Art-Academy-2019-aangepast-scaled-8a89e8bb.webp" alt="Sergiy Lysyy" width={400} height={500} />
          </div>
        </div>
      </div>
    </div>

  );
};
