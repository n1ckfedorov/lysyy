import { GalleryBanner } from '@/components';

import { About } from './components/About';
import { Privilege } from './components/Privilege';

const bannerSlides = [
  {
    id: 1,
    image: '/assets/images/main-banner/4img.jpg',
  },
  {
    id: 2,
    image: '/assets/images/main-banner/3img.jpg',
  },
  {
    id: 3,
    image: '/assets/images/main-banner/2img.jpg',
  },
  {
    id: 4,
    image: '/assets/images/main-banner/1img.jpg',
  },
];

export default async function Home() {
  return (
    <>
      <div className="flex justify-center w-full container mx-auto px-6 lg:px-0 lg:max-w-full">
        <GalleryBanner slides={bannerSlides} hasLens className="lg:h-[calc(100dvh-76px)] md:h-[400px] sm:h-[300px] h-[250px] w-full" />
      </div>
      <About />
      <Privilege />
    </>

  );
}
