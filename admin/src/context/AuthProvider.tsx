'use client'

import { ReactNode, useState } from 'react'

const AuthProvider = ({
  children,
  initialToken = ''
}: {
  children: ReactNode
  initialToken?: string
}) => {

  return <>{children}</>
}

export default AuthProvider
