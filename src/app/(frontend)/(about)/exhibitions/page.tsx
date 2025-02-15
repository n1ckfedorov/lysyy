import { PageRender } from '@/components';
import { getPageBySlug } from '@/services';

export const generateMetadata = async () => {
  const page = await getPageBySlug('exhibitions');

  return {
    title: page?.meta?.title,
    description: page?.meta?.description,
  };
};

export default async function Exhibitions() {
  const page = await getPageBySlug('exhibitions');

  if (!page) {
    return <div>Page not found</div>;
  }

  return <PageRender page={page} />;
}
