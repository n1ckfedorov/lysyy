import type { WorkProps } from '../components/Works';
import { notFound } from 'next/navigation';

import { Work } from './components/Work';

const workMock: WorkProps = {
  title: 'de Wadden',
  description: 'watercolor',
  image: 'https://cdn.artgalleria.com/55850/artworks/1978473/ababa45b-4a59-433d-bc94-2a1105152ee4-l.JPG',
  width: 100,
  height: 500,
  isSold: false,
};

export default async function WorkPage({ params }: { params: Promise<{ workId: string }> }) {
  const { workId } = await params;

  if (!workId) {
    notFound();
  }

  return (
    <Work
      {...workMock}
      id={Number(workId)}
      totalWorks={4}
    />
  );
}
