'use client'

import { clientSessionToken } from '@/lib/http'
import { ReactNode, useState } from 'react'

const AuthProvider = ({
  children,
  initialToken = ''
}: {
  children: ReactNode
  initialToken?: string
}) => {
  useState(() => {
    if (typeof window !== undefined) {
      clientSessionToken.value = initialToken
    }
  })

  return <>{children}</>
}

export default AuthProvider
