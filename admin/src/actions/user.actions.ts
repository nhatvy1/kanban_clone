'use server'

import http from '@/lib/http'
import { IResponseCreate, IResponseUpdate } from '@/types/user.type'
import { revalidateTag } from 'next/cache'

export const updateUser = async (
  accessToken: string,
  userId: number | undefined,
  dataUpdate: any
) => {
  const res = await http.put<IResponseUpdate>(`user/${userId}`, dataUpdate, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
  revalidateTag('list-users')
  return res
}

export const createUser = async (accessToken: string, data: any) => {
  try {
    const res = await http.post<IResponseCreate>(`user`, data, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    revalidateTag('list-users')
    return res
  } catch (e: any) {
    return {
      message: e?.payload?.message,
      statusCode: e?.payload?.statusCode
    }
  }
}
