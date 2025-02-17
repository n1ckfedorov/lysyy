import { cn } from '@/lib/utils';

import React from 'react';

export type SvgProps = {
  name: 'close' | 'facebook' | 'instagram' | 'yt';
  size?: string | number;
  className?: string;
  strokeWidth?: string | number;
  absoluteStrokeWidth?: boolean;
};

const Icon = (
  { ref, name, size = 16, strokeWidth = 2, absoluteStrokeWidth, className }: SvgProps & { ref?: React.RefObject<SVGSVGElement> },
) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    className={cn('', className)}
    strokeWidth={
      absoluteStrokeWidth
        ? (Number(strokeWidth) * 24) / Number(size)
        : strokeWidth
    }
    name={`#icon-${name}`}
  >
    <use xlinkHref={`#icon-${name}`} />
  </svg>
);

Icon.displayName = 'Icon';
export { Icon };
