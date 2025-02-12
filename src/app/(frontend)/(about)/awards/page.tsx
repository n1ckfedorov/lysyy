import type { Metadata } from 'next';
import { PhotoBanner, TextContent } from '@/components';

export const metadata: Metadata = {
  title: 'Awards',
  description: 'Awards of Sergiy Lysyy',
};

export default async function Awards() {
  return (
    <>
      <PhotoBanner image="https://watercolorsjanmin.com/wp-content/themes/yootheme/cache/f5/whatsapp-image-2022-05-11-at-3.23.10-pm-f52fe088.webp" />
      <TextContent
        title="Awards"
        subtitle="Listing of awards Sergiy Lysyy has received"
      />

    </>

  );
}
