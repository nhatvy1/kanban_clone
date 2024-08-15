'use client'

import auth from "@/apiRequest/auth"
import Link from "next/link"
import { useEffect } from "react"

const UnauthorizationPage = () => {
  const handleLogout = async()=> {
    try {
      await auth.logoutNextClientToNextServer()
    } catch(e) {
      console.log(e)
    }
  }

  useEffect(()=> {
    handleLogout()
  }, [])

  return (
    <div className="min-h-dvh flex items-center justify-center">
      <div className='text-center'>
        <h1 className='mb-4 text-6xl font-semibold text-red-500'>404</h1>
        <p className='mb-4 text-lg text-gray-600'>
          You don't have permission to access this page!!!
        </p>
        <div className='animate-bounce'>
          <svg
            className='mx-auto h-16 w-16 text-red-500'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
            ></path>
          </svg>
        </div>
        <p className='mt-4 text-gray-600'>
          Let's get you back{' '}
          <Link href='/login' className='text-blue-500'>
            home
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default UnauthorizationPage
