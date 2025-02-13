import { getProducts } from '@/services/products/product.services';
import Shop from './components/Shop';

export const revalidate = 60;

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <Shop products={products} />
  );
}
