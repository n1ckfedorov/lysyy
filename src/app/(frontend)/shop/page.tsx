import { getProducts } from '@/services/products/product.services';
import Shop from './components/Shop';

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <Shop products={products} />
  );
}
