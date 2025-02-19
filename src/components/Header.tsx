'use client';

import { useMediaQuery } from '@/hooks';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react'; // Icons for mobile toggle

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from './ui';
import { IconButton } from './ui/iconButton';

const navItems = [
  {
    label: 'About',
    subItems: [
      { label: 'Biography', href: '/biography' },
      { label: 'Exhibitions', href: '/exhibitions' },
      { label: 'Awards', href: '/awards' },
      { label: 'Publications', href: '/publications' },
    ],
  },
  { label: 'Works', href: '/works' },
  { label: 'Workshop', href: '/workshop' },
  { label: 'Shop', href: '/shop' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
];

const NavLink = ({ label, href, className, onClick }: { label: string; href: string; className?: string; onClick?: () => void }) => {
  const pathname = usePathname();
  const isActive = (pathname?.startsWith(href) && pathname !== '/workshop') || pathname === href;

  return (
    <Link href={href} className={cn('block px-4 py-2 text-lg font-medium hover:text-primary', isActive && 'text-primary', className)} onClick={onClick}>
      {label}
    </Link>
  );
};

const Overlay = ({ isVisible, onClick }: { isVisible: boolean; onClick: () => void }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          aria-hidden="true"
          onClick={onClick}
        />
      )}
    </AnimatePresence>
  );
};

export const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when switching to desktop view
  useEffect(() => {
    if (!isMobile && mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [isMobile, mobileMenuOpen]);

  // Handle scroll locking
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = 'var(--scrollbar-width)';
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [mobileMenuOpen]);

  // Calculate scrollbar width on mount to prevent layout shift
  useEffect(() => {
    // const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    // document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
  }, []);

  return (
    <>
      <Overlay isVisible={mobileMenuOpen} onClick={() => setMobileMenuOpen(false)} />
      <header
        className={cn(
          'w-full py-4 backdrop-blur-lg bg-white/50',
          mobileMenuOpen && 'bg-white rounded-none',
          'z-50',
        )}
      >
        <div className="container">

          <div className="flex items-center justify-between">

            <Link href="/" className="text-2xl  font-tertiary" onClick={() => setMobileMenuOpen(false)}>
              Sergiy Lysyy
            </Link>

            {/* Desktop Navigation */}
            {!isMobile && (
              <NavigationMenu>
                <NavigationMenuList className="flex items-center gap-1 lg:gap-4">
                  {navItems.map(item =>
                    item.subItems
                      ? (
                          <NavigationMenuItem key={item.label}>
                            <NavigationMenuTrigger className="flex items-center gap-1 text-lg font-medium hover:text-primary">
                              {item.label}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                              <NavigationMenuList className="flex flex-col py-1 text-sm">
                                {item.subItems.map(subItem => (
                                  <NavLink key={subItem.label} label={subItem.label} href={subItem.href} />
                                ))}
                              </NavigationMenuList>
                            </NavigationMenuContent>
                          </NavigationMenuItem>
                        )
                      : (
                          <NavigationMenuItem key={item.label}>
                            <NavLink label={item.label} href={item.href} onClick={() => setMobileMenuOpen(false)} />
                          </NavigationMenuItem>
                        ),
                  )}
                </NavigationMenuList>
              </NavigationMenu>
            )}

            {/* Mobile Menu Toggle */}
            {isMobile && (
              <IconButton variant="ghost" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-primary shadow-none size-10">
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </IconButton>
            )}

          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobile && mobileMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 w-full bg-white shadow-md"
            >
              <div className="p-4 container">
                {navItems.map(item =>
                  item.subItems
                    ? (
                        <div key={item.label} className="mb-4">
                          <p className="font-medium text-lg">{item.label}</p>
                          <ul className="mt-2 space-y-2 pl-4">
                            {item.subItems.map(subItem => (
                              <li key={subItem.label}>
                                <Link
                                  href={subItem.href}
                                  className="block py-1 text-gray-600 hover:text-primary"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {subItem.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    : (
                        <NavLink key={item.label} label={item.label} href={item.href} className="block py-2 text-lg px-0" onClick={() => setMobileMenuOpen(false)} />
                      ),
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
