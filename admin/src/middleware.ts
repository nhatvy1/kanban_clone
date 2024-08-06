import { NextRequest, NextResponse } from 'next/server'

const privatePaths = [
  '/',
  '/project-management',
  '/team-management',
  '/user-management',
  '/profile'
]

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const accessToken = request.cookies.get('accessToken')?.value
  const isPrivatePath = privatePaths.includes(pathname)

  if (isPrivatePath && !accessToken) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (accessToken && (pathname === '/login' || pathname === '/register')) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/',
    '/project-management',
    '/team-management',
    '/user-management',
    '/login',
    '/profile'
  ]
}
