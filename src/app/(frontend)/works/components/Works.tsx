/* eslint-disable @next/next/no-img-element */
'use client';

import type { Work } from '@/payload-types';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components';
import { useImage } from '@/hooks/useImage';
import { Masonry } from '@mui/lab';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const WorkCard = ({ work }: { work: Work }) => {
  const image = useImage(work.image);
  return (
    <Link href={`/works/${work.slug}`} key={work.id} className="cursor-pointer relative group overflow-hidden">

      <img src={image?.url ?? ''} alt={work.title ?? ''} className="w-full h-full object-cover group-hover:scale-120 transition-all duration-700" />

      <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-col gap-2">
        <span className="text-sm ">Sergiy Lysyy</span>
        <span className="font-bold text-secondary">{work.title}</span>
      </div>
      {work.isSold && (
        <span className="flex text-sm px-2 py-1 absolute top-0 right-0 bg-primary text-white shadow-2xl">Sold Out</span>
      )}
    </Link>

  );
};

const WorksSection = ({ works }: { works: Work[] }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const [filter, setFilter] = useState('all');

  const filteredWorks = works.filter((work) => {
    if (filter === 'all') {
      return true;
    }
    if (filter === 'sold') {
      return work.isSold;
    }
    if (filter === 'in-stock') {
      return !work.isSold;
    }
    return false;
  });

  const handleFilterChange = (value: string) => {
    setFilter(value);
  };

  return (

    <section className="container py-10">
      <div className="flex items-start justify-between mb-4 md:mb-10 gap-2 md:flex-col">
        <h1 className="text-5xl font-bold  text-secondary">Works</h1>
        {works.length > 0 && (
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
          spacing={2}
        >
          {filteredWorks.map(work => (
            <WorkCard key={work.id} work={work} />
          ))}

        </Masonry>
      )}

    </section>
  );
};

export default WorksSection;
