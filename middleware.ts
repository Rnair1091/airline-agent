import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.get('agent_authenticated')?.value;

  // 1. If trying to access /admin and NOT logged in, kick them to the homepage
  if (request.nextUrl.pathname.startsWith('/admin') && isAuthenticated !== 'true') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // 2. If they ARE authenticated, let them through but strip out all browser caching
  const response = NextResponse.next();
  
  if (request.nextUrl.pathname.startsWith('/admin')) {
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
  }

  return response;
}

export const config = {
  matcher: ['/admin/:path*'],
};