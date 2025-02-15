import type { Page } from '@/payload-types';
import { useImages } from '@/hooks/useImage';
import { GalleryBanner } from './GalleryBanner';
import { TextContent } from './TextContent';

export const PageRender = ({ page }: { page: Page }) => {
  const images = useImages(page.mainImages ?? []);
  const filteredImages = images?.filter(image => image !== null).map(image => ({
    id: image.id,
    image: image.url ?? '',
  }));
  return (
    <>
      <GalleryBanner
        slides={filteredImages ?? []}
        className="md:!mx-10 h-[70dvh]"
      />
      <TextContent textContent={page?.content} title={page?.title ?? ''} subtitle={page?.description ?? ''} />
    </>
  );
};
