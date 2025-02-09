import type { Metadata } from 'next';

import { Sprite } from '@/components/Sprite';
import { Karla, Playfair_Display, Raleway } from 'next/font/google';
import '@/styles/global.css';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap',
});

const karla = Karla({
  subsets: ['latin'],
  variable: '--font-karla',
  display: 'swap',
});

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sergiy Lysyy',
  description: 'Sergiy Lysyy is a contemporary artist known for his unique style and innovative approach to art.',
  icons: [

    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

export default async function RootLayout(props: {
  children: React.ReactNode;

}) {
  return (
    <html lang="en" className={`${karla.variable} ${playfairDisplay.variable} ${raleway.variable}`}>
      <body suppressHydrationWarning className="min-h-dvh flex flex-col grow justify-between">
        <Sprite />
        {props.children}

      </body>

    </html>

  );
}
