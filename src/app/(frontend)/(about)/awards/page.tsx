import { PhotoBanner, TextContent } from '@/components';
import { getPageBySlug } from '@/services';

export const generateMetadata = async () => {
  const page = await getPageBySlug('awards');

  return {
    title: page?.meta?.title,
    description: page?.meta?.description,
  };
};

export default async function Awards() {
  const page = await getPageBySlug('awards');

  return (
    <>
      <PhotoBanner image="https://watercolorsjanmin.com/wp-content/themes/yootheme/cache/f5/whatsapp-image-2022-05-11-at-3.23.10-pm-f52fe088.webp" />
      <TextContent
        title={page?.title ?? ''}
        subtitle={page?.description ?? ''}
        textContent={page?.content}
      />
    </>
  );
}
