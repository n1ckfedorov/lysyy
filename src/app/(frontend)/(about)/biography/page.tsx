import { PageRender } from '@/components';
import { getPageBySlug } from '@/services';

export const generateMetadata = async () => {
  const page = await getPageBySlug('biography');

  return {
    title: page?.meta?.title,
    description: page?.meta?.description,
  };
};

export default async function Biography() {
  const page = await getPageBySlug('biography');

  if (!page) {
    return <div>Page not found</div>;
  }

  return <PageRender page={page} />;
}
