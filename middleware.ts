import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if the secure login cookie exists
  const isAuthenticated = request.cookies.get('agent_authenticated')?.value;

  // If someone tries to go to /admin but is NOT authenticated, boot them to the homepage
  if (request.nextUrl.pathname.startsWith('/admin') && isAuthenticated !== 'true') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

// Protect all paths starting with /admin
export const config = {
  matcher: ['/admin/:path*'],
};