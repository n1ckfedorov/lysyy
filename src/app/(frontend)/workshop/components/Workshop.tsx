'use client';

import { Timeline } from '@/components';
import { Loader2 } from 'lucide-react';
import { type FC, useEffect, useState } from 'react';

type WorkshopProps = {
  data: any;
};

export const Workshop: FC<WorkshopProps> = ({ data }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-neutral-950">
        <Loader2 className="w-10 h-10 animate-spin text-secondary" />
      </div>
    );
  }

  return <Timeline data={data} />;
};
