import type { ReactNode } from 'react';
import { Footer, Header } from '@/components';

export const BaseTemplate = (props: {
  children: ReactNode;
}) => {
  return (
    <>
      <Header />
      <main className="flex-grow">{props.children}</main>
      <Footer />
    </>
  );
};
