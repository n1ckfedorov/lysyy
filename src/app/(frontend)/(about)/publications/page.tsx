import type { Metadata } from 'next';
import { GalleryBanner, TextContent } from '@/components';

const bannerSlides = [
  {
    id: 2,
    image: 'https://watercolorsjanmin.com/wp-content/themes/yootheme/cache/f5/whatsapp-image-2022-05-11-at-3.23.10-pm-f52fe088.webp',
  },
  {
    id: 3,
    image: 'https://watercolorsjanmin.com/wp-content/themes/yootheme/cache/32/Boats-in-the-mist-38-x-56-cm-scaled-321470c4.webp',
  },
];

export const metadata: Metadata = {
  title: 'Publications',
  description: 'Publications of Sergiy Lysyy',
};

export default async function Publications() {
  return (
    <>
      <GalleryBanner slides={bannerSlides} className="md:!mx-10 h-[calc(90dvh-76px)]" />
      <TextContent
        title="Publications"
        subtitle="Publications in magazines etc. in the last years"
      />
    </>
  );
}
