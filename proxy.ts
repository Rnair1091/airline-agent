import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Updated function name from 'middleware' to 'proxy' for Next.js 16 compliance
export function proxy(request: NextRequest) {
  const isAuthenticated = request.cookies.get('agent_authenticated')?.value;

  // 1. Secure backend admin dashboard routes
  if (request.nextUrl.pathname.startsWith('/admin') && isAuthenticated !== 'true') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // 2. Clear out client cache headers to secure admin view states
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