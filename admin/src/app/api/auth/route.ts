import { jwtDecode } from 'jwt-decode'
import { NextResponse } from 'next/server'

function convertExpJwtToUTCstring(exp: number) {
  const expInMilliseconds = exp * 1000
  const expirationDate = new Date(expInMilliseconds)
  return expirationDate.toUTCString()
}

export async function POST(request: Request) {
  const body = await request.json()

  const accessToken = body.accessToken as string

  if (!accessToken) {
    return Response.json(
      { message: 'Không nhận được token' },
      {
        status: 400
      }
    )
  }

  const decodedAccessToken = jwtDecode(accessToken)
  const today = new Date()

  const accessTokenExp = decodedAccessToken?.exp

  let expiresAccessToken = ''

  if (accessTokenExp) {
    expiresAccessToken = convertExpJwtToUTCstring(accessTokenExp)
  } else {
    expiresAccessToken = new Date(
      today.getTime() + 1000 * 60 * 60 * 24
    ).toUTCString()
  }

  const response = NextResponse.json({ message: 'Cookies are set' })

  response.headers.append(
    'Set-Cookie',
    `accessToken=${accessToken}; Path=/; HttpOnly; Secure; Expires=${expiresAccessToken};`
  )

  return response
}
