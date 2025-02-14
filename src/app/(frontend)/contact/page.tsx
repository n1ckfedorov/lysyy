import { PhotoBanner } from '@/components';
import { Contact } from './components/Contact';

const contactImage = {
  image: '/assets/images/contact.jpg',
  alt: 'Contact',
};

export default async function ContactPage() {
  return (
    <>
      <PhotoBanner {...contactImage} className="h-[50dvh]" title="Contact with Sergiy Lysyy" />
      <Contact />
    </>
  );
}
