import { Footer, Header } from '@/components';

export const BaseTemplate = (props: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <Header />

      <main className="flex-grow">{props.children}</main>

      <Footer />
    </>
  );
};
