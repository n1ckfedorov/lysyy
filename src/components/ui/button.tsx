import type { LinkProps as NextLinkProps } from 'next/link';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import * as React from 'react';

const buttonVariants = cva(
  'group inline-flex items-center justify-center whitespace-nowrap rounded-full font-semibold ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer transition-all duration-300 shadow-lg font-secondary',
  {
    variants: {
      variant: {
        primary: 'border-primary bg-primary hover:bg-primary/80 text-white',
        secondary: 'border-secondary bg-secondary hover:bg-secondary/80 text-white',
      },
      size: {
        default: 'h-12 px-6',
        small: 'h-[34px] px-4 text-sm',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
);

export type ButtonProps = {
  asChild?: boolean;
  textColor?: string;
  href?: any;
  LinkProps?: NextLinkProps;
  target?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
VariantProps<typeof buttonVariants>;

const Button = ({
  ref,
  className,
  variant,
  size,
  textColor,
  asChild = false,
  href,
  target,
  type = 'button',
  LinkProps,
  ...props
}: ButtonProps & { ref?: React.RefObject<HTMLButtonElement> }) => {
  const isLink = !!href;
  let Comp: React.ElementType;

  if (asChild) {
    Comp = Slot;
  } else if (isLink) {
    Comp = Link;
  } else {
    Comp = 'button';
  }

  const linkProps = isLink ? { href, target, ...LinkProps } : {};
  const buttonProps = isLink ? {} : { ref, type };

  return (
    <Comp
      className={cn(
        buttonVariants({ size, variant, className }),
        props.disabled && 'cursor-not-allowed opacity-50',
        textColor,
      )}
      {...linkProps}
      {...buttonProps}
      {...props}
    >
      {props.children}
    </Comp>
  );
};

Button.displayName = 'Button';

export { Button };
