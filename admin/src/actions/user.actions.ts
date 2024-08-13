'use server'

import http from '@/lib/http'
import { revalidateTag } from 'next/cache'
import { cookies } from 'next/headers'

export const updateUser = async (
  userId: number | undefined,
  dataUpdate: any
) => {
  const cookieStore = cookies()
  const accessToken = cookieStore.get('accessToken')?.value

  const res = await http.put(`user/${userId}`, dataUpdate, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
  revalidateTag('list-users')
  return res
}

export const createUser = async(data: any)=> {
  const cookieStore = cookies()
  const accessToken = cookieStore.get('accessToken')?.value

  const res = await http.post(`user`, data, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
  revalidateTag('list-users')
  return res
}