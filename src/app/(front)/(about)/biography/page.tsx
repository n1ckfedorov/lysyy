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

const texts = `
Sergiy Lysyy is a dedicated watercolorist, renowned for his landscapes, cityscapes, seascapes, and waterscapes that showcase his mastery of light and color. His watercolors exude a poetic atmosphere, drawing the viewer into the painting and allowing them to immerse themselves in its depth.

<br />
<br />

Sergiy was born on [date] in [city, country]. From an early age, he was surrounded by nature, water, and architectural landscapes, which greatly influenced his artistic vision. He developed a passion for drawing and painting at a young age, and his love for art was further nurtured by visiting art museums with his family.

<br />
<br />

Although he pursued a career in medicine and specialized in [medical specialty], his passion for art never faded. After a successful career in the medical field, he dedicated himself entirely to painting, refining his skills and developing his unique artistic style.

<br />
<br />

In [year], Sergiy embarked on formal artistic training, exploring various techniques and eventually finding his true calling in watercolor. Inspired by master artists and advanced workshops, he fully embraced this medium and has remained committed to it ever since.

<br />
<br />

Sergiy is an active member of the international watercolor community. His works have been exhibited in numerous exhibitions worldwide, earning him prestigious awards and recognition. He is also involved in art education, sharing his knowledge and passion through workshops, demonstrations, and courses.

<br />
<br />

As a respected artist, Sergiy has served as a jury member in international art competitions. His influence extends beyond his paintings, as he continues to inspire and mentor emerging artists in the world of watercolor.
`;

export const metadata: Metadata = {
  title: 'Biography',
  description: 'Biography of Sergiy Lysyy',
};

export default async function Biography() {
  return (
    <>
      <GalleryBanner slides={bannerSlides} className="md:!mx-10 h-[calc(90dvh-76px)]" />
      <TextContent texts={texts} title="Biography" subtitle="Biography of Sergiy Lysyy" />
    </>

  );
}
