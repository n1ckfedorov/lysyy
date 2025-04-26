'use client';

import type { Product } from '@/payload-types';

import { Button, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components';
import { Lens } from '@/components/ui/lens';
import { useImage } from '@/hooks/useImage';
import { Masonry } from '@mui/lab';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const ProductCard = ({ product }: { product: Product }) => {
  const image = useImage(product.image);
  return (
    <Link
      href={`/shop/${product.slug}`}
      key={product.id}
      className="cursor-pointer relative overflow-hidden shadow-xl "
    >

      <Lens className="max-h-[500px]">
        <Image
          src={image?.url ?? ''}
          alt={product.title ?? ''}
          height={image?.height ?? 300}
          width={image?.width ?? 300}
          objectFit="cover"
          className="mx-auto object-center"
        />
      </Lens>

      <div className="flex flex-col bg-white text-gray-900 p-6 gap-4 rounded-b-xl shadow-md hover:shadow-lg">
        <h2 className="font-semibold text-lg">{product.title}</h2>
        <p className="text-sm text-gray-500 line-clamp-2">{product.shortDescription}</p>
        <span className="text-lg text-gray-900 font-bold">
          Price:
          {' '}
          {product.price}
          {' '}
          €
        </span>
        <Button variant="primary" className="mt-3 w-full py-2 text-white bg-primary hover:bg-primary-dark transition duration-200">
          Details
        </Button>
        {product.isSold && (
          <span className="flex text-sm z-30 px-2 py-1 absolute top-0 right-0 bg-primary text-white shadow-2xl">Sold Out</span>
        )}
      </div>
    </Link>
  );
};

const ShopSection = ({ products }: { products: Product[] }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const [filter, setFilter] = useState('all');

  const filteredProducts = products.filter((product) => {
    if (filter === 'all') {
      return true;
    }
    if (filter === 'sold') {
      return product.isSold;
    }
    if (filter === 'in-stock') {
      return !product.isSold;
    }
    return false;
  });

  const handleFilterChange = (value: string) => {
    setFilter(value);
  };

  return (

    <section className="container py-10">
      <div className="flex items-start justify-between mb-4 md:mb-10 gap-2 md:flex-col">
        <h1 className="text-5xl font-bold  text-secondary">Shop</h1>
        {products.length > 0 && (
          <div className="flex justify-end ml-auto">
            <Select onValueChange={handleFilterChange}>
              <SelectTrigger className="w-auto min-w-[100px]">
                <SelectValue placeholder="Show all" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="sold">Sold</SelectItem>
                <SelectItem value="in-stock">In Stock</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
      </div>

      {isLoading && (
        <div className="flex justify-center items-center h-full min-h-[500px]">
          <Loader2 className="w-10 h-10 animate-spin" />
        </div>
      )}

      {!isLoading && (
        <Masonry
          className="!m-0"
          columns={{
            xs: 1,
            sm: 2,
            md: 3,
          }}
          spacing={4}
        >
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}

        </Masonry>
      )}

    </section>
  );
};

export default ShopSection;
