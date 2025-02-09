import type { SvgProps } from '@/components/Sprite';
import type { LinkProps as NextLinkProps } from 'next/link';
import { Icon } from '@/components/Sprite/Icon';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import * as React from 'react';

const iconButtonVariants = cva(
  'inline-flex items-center justify-center rounded ring-offset-white focus-visible:outline-none disabled:pointer-events-none disabled:border-transparent disabled:bg-transparent disabled:opacity-20 cursor-pointer transition-all duration-300 shadow-lg',
  {
    variants: {
      variant: {
        primary: 'border-primary bg-primary text-white hover:bg-primary/80',
        secondary:
          'bg-secondary  border-secondary hover:bg-secondary/80 text-white',
        ghost: 'bg-transparent text-secondary hover:bg-secondary/80',

      },
      size: {
        default: 'size-9',
        small: 'size-6',
        circleDefault: 'size-12 p-0',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
);

export type IconButtonProps = {
  icon?: SvgProps['name'];
  iconSize?: string;
  asChild?: boolean;
  iconClass?: string;
  href?: string;
  LinkProps?: NextLinkProps;
  target?: string;
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
VariantProps<typeof iconButtonVariants>;

const IconButton = ({
  ref,
  className,
  variant,
  size,
  icon,
  asChild = false,
  iconSize = 'size-5',
  iconClass,
  href,
  target,
  LinkProps,
  children,
  ...props
}: IconButtonProps & { ref?: React.RefObject<HTMLButtonElement | null> }) => {
  let Comp: React.ElementType;

  const isLink = !!href;

  if (asChild) {
    Comp = Slot;
  } else if (isLink) {
    Comp = Link;
  } else {
    Comp = 'button';
  }

  const linkProps = isLink ? { href, target, ...LinkProps } : {};
  const buttonProps = isLink ? {} : { ref };

  return (
    <Comp
      className={cn(
        iconButtonVariants({ size, variant, className }),
        props.disabled && 'cursor-not-allowed opacity-50',
      )}
      {...linkProps}
      {...buttonProps}
      {...props}
    >
      {icon ? <Icon className={cn(iconSize, iconClass)} name={icon} /> : children}
    </Comp>
  );
};

IconButton.displayName = 'IconButton';

export { IconButton };
