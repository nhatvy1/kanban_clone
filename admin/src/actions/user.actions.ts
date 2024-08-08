'use server'

import http from "@/lib/http"
import { cookies } from "next/headers"

export const updateUser = async()=> {
  const  cookieStore = cookies()
  const accessToken = cookieStore.get('accessToken')?.value

  const res = await http.put('user/1', null, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
  return res
}