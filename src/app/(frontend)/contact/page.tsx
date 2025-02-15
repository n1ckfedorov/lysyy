import { PhotoBanner } from '@/components';
import { GoogleCaptchaWrapper } from '@/components/GoogleCaptchaWrapper';
import { Contact } from './components/Contact';

const contactImage = {
  image: '/assets/images/contact.jpg',
  alt: 'Contact',
};

export default function ContactPage() {
  return (
    <>
      <PhotoBanner {...contactImage} className="h-[50dvh]" title="Contact with Sergiy Lysyy" />
      <GoogleCaptchaWrapper>
        <Contact />
      </GoogleCaptchaWrapper>
    </>
  );
}
