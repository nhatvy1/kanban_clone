'use client'

import Image from "next/image"

const ErrorProfilePage = () => {
  return (
    <div className='md:mt-10 flex flex- items-center justify-center'>
      <div>
        <div className='max-w-[600px]'>
          <Image
            src='/error/error.svg'
            alt='loi anh'
            width={300}
            height={200}
            className='w-full'
          />
        </div>
        <p className='text-center text-3xl font-medium'>
          Whoops! That page doesn’t exist.
        </p>
      </div>
    </div>
  )
}

export default ErrorProfilePage
