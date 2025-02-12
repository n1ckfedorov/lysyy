import { GalleryBanner } from '@/components';

import { About } from './components/About';
import { Counter } from './components/Counter';
import { Privilege } from './components/Privilege';

const bannerSlides = [
  {
    id: 1,
    image: '/assets/images/main-banner/1.jpg',
  },
  {
    id: 2,
    image: '/assets/images/main-banner/2.jpg',
  },
  {
    id: 3,
    image: '/assets/images/main-banner/3.jpg',
  },
];

export default async function Home() {
  return (
    <>
      <GalleryBanner slides={bannerSlides} hasLens />
      <About />
      <Counter />
      <Privilege />
    </>

  );
}
