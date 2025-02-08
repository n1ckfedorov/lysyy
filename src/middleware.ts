import { NextResponse } from 'next/server';

export default function middleware() {
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!_next|_vercel|.*\\..*).*)',

    // ?
    '/(api|trpc)(.*)',
  ],
};
