import { cn } from '@/lib/utils';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { ChevronDown } from 'lucide-react';

import * as React from 'react';

const NavigationMenuViewport = ({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport> & { ref?: React.RefObject<React.ElementRef<typeof NavigationMenuPrimitive.Viewport>> }) => (
  <div className={cn('absolute left-0 top-full flex justify-center')}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        'origin-top-center relative  h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md shadow-xl data-[state=open]:animate-in  data-[state=open]:zoom-in-80 md:w-[var(--radix-navigation-menu-viewport-width)] border border-slate-300 bg-white transition-all duration-300',
        className,
      )}
      ref={ref}
      {...props}
    />
  </div>
);

NavigationMenuViewport.displayName
  = NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenu = ({ ref, className, children, ...props }: React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root> & { ref?: React.RefObject<React.ElementRef<typeof NavigationMenuPrimitive.Root>> }) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      'relative z-10 flex max-w-max flex-1 items-center justify-center',
      className,
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
);
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = ({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List> & { ref?: React.RefObject<React.ElementRef<typeof NavigationMenuPrimitive.List>> }) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      'group flex flex-1 list-none items-center justify-center space-x-1',
      className,
    )}
    {...props}
  />
);
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const NavigationMenuTrigger = ({ ref, className, children, ...props }: React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger> & { ref?: React.RefObject<React.ElementRef<typeof NavigationMenuPrimitive.Trigger>> }) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn('group cursor-pointer', className)}
    {...props}
  >
    {children}
    {' '}
    <ChevronDown
      className="relative top-[1px] ml-1 size-4 transition duration-200 group-data-[state=open]:rotate-180 cursor-pointer"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
);
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = ({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content> & { ref?: React.RefObject<React.ElementRef<typeof NavigationMenuPrimitive.Content>> }) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      'left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto  ',
      className,
    )}
    {...props}
  />
);
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuIndicator = ({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator> & { ref?: React.RefObject<React.ElementRef<typeof NavigationMenuPrimitive.Indicator>> }) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in cursor-pointer',
      className,
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
);
NavigationMenuIndicator.displayName
  = NavigationMenuPrimitive.Indicator.displayName;

export {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
};
