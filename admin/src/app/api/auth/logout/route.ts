import { NextResponse } from "next/server"

export async function POST() {
  const response = NextResponse.json({ message: 'Logout successfully' })
  response.cookies.delete('accessToken')

  return response
}