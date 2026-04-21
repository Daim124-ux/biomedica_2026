import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if the user has an auth token
  const hasAuthToken = request.cookies.has('auth_token');

  // If trying to access login page while authenticated, redirect to home
  if (request.nextUrl.pathname.startsWith('/login') && hasAuthToken) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // If not authenticated and not already on login or api/login, redirect to login
  if (!hasAuthToken && !request.nextUrl.pathname.startsWith('/login') && !request.nextUrl.pathname.startsWith('/api/login')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes) except /api/login
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images, svg, icons or any static files in public folder
     */
    '/((?!api/login|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
