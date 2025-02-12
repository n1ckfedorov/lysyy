import { GalleryBanner } from '@/components';
import { TextContent } from '@/components/TextContent';
import { getPageBySlug } from '@/services';

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

export const generateMetadata = async () => {
  const page = await getPageBySlug('biography');

  return {
    title: page?.meta?.title,
    description: page?.meta?.description,
  };
};

export default async function Biography() {
  const page = await getPageBySlug('biography');

  if (!page) {
    throw new Error('Biography page not found');
  }

  return (
    <>
      <GalleryBanner slides={bannerSlides} className="md:!mx-10 h-[calc(90dvh-76px)]" />
      <TextContent textContent={page.content} title={page.title} subtitle={page.description ?? ''} />
    </>
  );
}
