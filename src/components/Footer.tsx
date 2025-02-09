import { AppConfig } from '@/utils/AppConfig';
import Link from 'next/link';
import { Icon } from './Sprite';

const socialLinks = [
  {
    label: 'Facebook',
    href: '',
    icon: 'facebook',
  },
  {
    label: 'Telegram',
    href: '',
    icon: 'telegram',
  },
  {
    label: 'Instagram',
    href: '',
    icon: 'instagram',
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-gray-300 py-8 text-center flex flex-col items-center gap-4">
      <div className="flex justify-center gap-4">
        {socialLinks.map(link => (
          <Link href={link.href} key={link.label} className="text-gray-500 hover:text-gray-700">
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
