import type { Product } from '@/payload-types';
import { getProductBySlug, getProducts } from '@/services/products/product.services';
import { notFound } from 'next/navigation';

import { ProductDetails } from './components/Product';

export async function generateStaticParams() {
  const products: Product[] = await getProducts();
  return products.map(product => ({
    productSlug: product.slug,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ productSlug: string }> }) {
  const { productSlug } = await params;

  if (!productSlug) {
    notFound();
  }

  const totalProducts = await getProducts();
  const product = await getProductBySlug(productSlug);
  const allProducts = await getProducts();

  if (!product) {
    notFound();
  }

  return (
    <ProductDetails
      {...product}
      totalProducts={totalProducts.length}
      allProducts={allProducts}
    />
  );
}
