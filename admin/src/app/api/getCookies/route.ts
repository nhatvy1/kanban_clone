import { cookies } from 'next/headers'

export async function GET() {
  const cookiesValue = cookies().get('accessToken')
    ? cookies().get('accessToken')?.value
    : ''
  return Response.json({ cookies: cookiesValue})
}
