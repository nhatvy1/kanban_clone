import { NextRequest, NextResponse } from 'next/server'
import auth from './apiRequest/auth'
import { setNewAccessToken } from './apiRequest/refresh.token'

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
  const refreshToken = request.cookies.get('refreshToken')?.value
  const isPrivatePath = privatePaths.includes(pathname)

  // if (isPrivatePath && !accessToken && !refreshToken) {
  //   return NextResponse.redirect(new URL('/login', request.url))
  // }

  // if (isPrivatePath && accessToken) {
  //   return NextResponse.next()
  // }

  if (isPrivatePath && refreshToken && !accessToken) {
    try {
      const res = await auth.setNewAccessToken({ refreshToken })
      const { access_token, refresh_token } = res.result
      await auth.authSetCookie({
        accessToken: access_token,
        refreshToken: refresh_token
      })
      return NextResponse.next({
        headers: {
          'Set-Cookies': 'ssdsds'
        }
      })
    } catch (e: any) {
      console.log(e)
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  // if (accessToken && (pathname === '/login' || pathname === '/register')) {
  //   return NextResponse.redirect(new URL('/', request.url))
  // }

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
