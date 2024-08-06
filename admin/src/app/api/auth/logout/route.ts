import { NextResponse } from "next/server"

export async function POST() {
  const response = NextResponse.json({ message: 'Logout successfully' })
  response.cookies.delete('accessToken')
  response.cookies.delete('refreshToken')

  return response
}