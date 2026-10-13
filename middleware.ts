import { NextRequest, NextResponse } from 'next/server';

// The dedicated campaign deployment exposes only the Tabuk landing page.
export function middleware(request: NextRequest) {
  if (process.env.TABUK_LANDING_ONLY !== 'true') return NextResponse.next();
  const pathname = request.nextUrl.pathname;
  if (pathname === '/') return NextResponse.rewrite(new URL('/tabuk', request.url));
  if (pathname.startsWith('/_next/') || pathname.startsWith('/images/tabuk/') || pathname === '/favicon.ico') {
    return NextResponse.next();
  }
  const destination = request.nextUrl.clone();
  destination.pathname = '/';
  return NextResponse.redirect(destination);
}

export const config = { matcher: '/:path*' };
