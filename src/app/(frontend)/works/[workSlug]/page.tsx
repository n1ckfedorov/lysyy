import { getWorkBySlug, getWorks } from '@/services';

import { notFound } from 'next/navigation';
import { WorkDetails } from './components/Work';

export default async function WorkPage({ params }: { params: Promise<{ workSlug: string }> }) {
  const { workSlug } = await params;

  if (!workSlug) {
    notFound();
  }

  const totalWorks = await getWorks();
  const work = await getWorkBySlug(workSlug);
  const allWorks = await getWorks();

  if (!work) {
    notFound();
  }

  return (
    <WorkDetails
      {...work}
      totalWorks={totalWorks.length}
      allWorks={allWorks}
    />
  );
}
