import type { Metadata } from 'next';
import { PhotoBanner, TextContent } from '@/components';

export const metadata: Metadata = {
  title: 'Exhibitions',
  description: 'Exhibitions of Sergiy Lysyy',
};

export default async function Exhibitions() {
  return (
    <>
      <PhotoBanner image="https://watercolorsjanmin.com/wp-content/themes/yootheme/cache/f5/whatsapp-image-2022-05-11-at-3.23.10-pm-f52fe088.webp" />
      <TextContent
        title="Exhibitions"
        subtitle="Listing of  group exhibitions in the last years"
      />
    </>
  );
}
