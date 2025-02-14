import { getWorkshop } from '@/services/workShop/workShop.services';
import { notFound } from 'next/navigation';
import { Workshop } from './components/Workshop';

export default async function WorkShopPage() {
  const workShop = await getWorkshop();

  if (!workShop) {
    notFound();
  }

  const timelineData = workShop.map(workshop => ({
    title: workshop.year,
    subtitle: workshop.subtitle,
    description: workshop.description,
    content: workshop.images,
  }));

  return (
    <Workshop data={timelineData} />
  );
}
