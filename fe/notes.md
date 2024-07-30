# Nextjs authentication with middleware, authentication and authorization
import { NextResponse } from 'next/server';

export function middleware(request) {
  // Get user information (e.g., from cookies, session)
  const user = getUserFromRequest(request);

  if (!user) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Make API call to check role and permission
  const response = await fetch('/api/auth/check-permissions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    },
    body: JSON.stringify({
      // Required role and permissions
      requiredRole: 'admin',
      requiredPermissions: ['create', 'edit'],
    }),
  });

  const data = await response.json();

  if (data.authorized) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL('/unauthorized', request.url));
  }
}