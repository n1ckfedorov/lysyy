import { getWorks } from '@/services';
import Works from './components/Works';

export const revalidate = 60;

export default async function WorksPage() {
  const works = await getWorks();

  return (
    <Works works={works} />
  );
}
