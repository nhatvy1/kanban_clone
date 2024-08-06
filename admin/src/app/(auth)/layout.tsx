import { Cat } from 'lucide-react'
import Link from 'next/link'
import { ReactNode } from 'react'

const LayoutAuth = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <header className='h-headerLogin shadow-headerLogin px-8 flex items-center justify-between fixed top-0 left-0 right-0 bg-white'>
        <Link href='/' className='flex items-center gap-x-2'>
          <Cat size={32} className='text-blue-light' />
          <p className='text-2xl text-blue-light tracking-tighter font-semibold'>
            Hello world!
          </p>
        </Link>
        <p>
          <span className='text-gray-bold text-sm max-sm:hidden'>
            {`Don't have account?`}{' '}
          </span>
          <Link href='/register' className='pl-2 text-blue-light underline'>
            Sign Up
          </Link>
        </p>
      </header>
      {children}
    </>
  )
}

export default LayoutAuth
