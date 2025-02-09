'use client';

import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

import { useInView, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useRef } from 'react';

type NumberTickerProps = {
  value: number;
  direction?: 'up' | 'down';
  delay?: number; // delay in s
  decimalPlaces?: number;
} & ComponentPropsWithoutRef<'span'>;

export function NumberTicker({
  value,
  direction = 'up',
  delay = 0,
  className,
  decimalPlaces = 0,
  ...props
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === 'down' ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: '0px' });

  useEffect(() => {
    if (!isInView) {
      return;
    }

    const timeoutId = setTimeout(() => {
      motionValue.set(direction === 'down' ? 0 : value);
    }, delay * 1000);

    return () => clearTimeout(timeoutId);
  }, [motionValue, isInView, delay, value, direction]);

  useEffect(
    () =>
      springValue.on('change', (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat('en-US', {
            minimumFractionDigits: decimalPlaces,
            maximumFractionDigits: decimalPlaces,
          }).format(Number(latest.toFixed(decimalPlaces)));
        }
      }),
    [springValue, decimalPlaces],
  );

  return (
    <span
      ref={ref}
      className={cn(
        'inline-block tabular-nums tracking-wider text-black ',
        className,
      )}
      {...props}
    />
  );
}
