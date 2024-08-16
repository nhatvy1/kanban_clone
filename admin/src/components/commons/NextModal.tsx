'use client'

import { X } from 'lucide-react'
import { memo, MouseEvent, ReactNode } from 'react'

const modalSizes = {
  xs: 'w-4/12',
  sm: 'max-w-[540px]',
  md: 'max-w-[640px]',
  lg: 'w-7/12',
  xl: 'w-8/12',
  '2xl': 'w-9/12',
  '3xl': 'w-10/12',
  '4xl': 'w-11/12',
  '5xl': 'w-12/12',
  full: 'w-full'
}

interface Props {
  open: boolean
  onClose: () => void
  children: ReactNode
  title?: string
  size?:
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | 'full'
}

const NextModal = ({ open, onClose, children, size = 'sm', title }: Props) => {
  if (!open) return null

  const handleClickOutside = (e: MouseEvent) => {
    if ((e.target as Element).id === 'wrapper') {
      onClose()
    }
  }

  return (
    <div
      className='fixed inset-0 h-screen bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center z-50 max-md:px-5'
      id='wrapper'
      onClick={handleClickOutside}
    >
      <div
        className={`relative ${modalSizes[size]} bg-white/85 rounded-md 
        p-5 `}
      >
        <div className=''>
          <div
            className='flex justify-between
          items-center'
          >
            <p>{title ? title : 'Next Modal'}</p>
            <button onClick={() => onClose()}>
              <X size={30} />
            </button>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default memo(NextModal)
