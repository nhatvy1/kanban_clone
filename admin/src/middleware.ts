import { NextRequest, NextResponse } from 'next/server'

const privatePaths = [
  '/',
  '/project-management',
  '/team-management',
  '/user-management',
]

const authPaths = ['/login', '/register']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const sessionToken = request.cookies.get('sessionToken')?.value
  const isPrivatePath = privatePaths.includes(pathname)

  if(sessionToken && (pathname === '/login' || pathname === '/register')) {
    return NextResponse.redirect(new URL('/', request.url))
  } else if (!sessionToken && isPrivatePath) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/login', ...privatePaths]
}