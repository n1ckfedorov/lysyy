import type { Work } from '@/payload-types';

import { getWorkBySlug, getWorks } from '@/services';
import { notFound } from 'next/navigation';
import { WorkDetails } from './components/Work';

export async function generateStaticParams() {
  const works: Work[] = await getWorks();
  return works.map(work => ({
    workSlug: work.slug,
  }));
}

export default async function WorkPage({ params }: { params: Promise<{ workSlug: string }> }) {
  const { workSlug } = await params;

  if (!workSlug) {
    notFound();
  }

  const work = await getWorkBySlug(workSlug);
  const allWorks = await getWorks();

  if (!work) {
    notFound();
  }

  return (
    <WorkDetails
      {...work}
      allWorks={allWorks}
    />
  );
}
