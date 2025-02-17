import { AppConfig } from '@/utils/AppConfig';
import Link from 'next/link';
import { Icon } from './Sprite';

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/sergey.lisiy',
    icon: 'facebook',
  },
  {
    label: 'Youtube',
    href: 'https://www.youtube.com/@sergiylysyy_watercolor2431',
    icon: 'yt',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/sergiylysyy_watercolor/',
    icon: 'instagram',
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-gray-300 py-8 text-center flex flex-col items-center gap-4 mt-10">
      <div className="flex justify-center gap-6">
        {socialLinks.map(link => (

          <Link href={link.href} key={link.label} target="_blank" className="text-gray-500 hover:text-gray-700">
            <Icon name={link.icon as 'close'} size={32} className="text-gray-500 hover:text-gray-700" />
          </Link>
        ))}
      </div>
      <span className="text-gray-500 text-sm">
        {`© Copyright ${new Date().getFullYear()} | ${AppConfig.name}`}
      </span>
    </footer>

  );
};
