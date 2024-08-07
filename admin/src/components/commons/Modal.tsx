'use client'

import { ReactNode } from 'react'
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '../ui/dialog'

const Modal = ({
  children,
  open,
  setIsOpenModal
}: {
  children: ReactNode
  open: boolean
  setIsOpenModal: any
}) => {
  const handleOpenChange = () => {
    console.log('ds')
  }

  const onOpenChange = ()=> {
    console.log('dsas')
  }

  return (
    <Dialog open={open} onOpenChange={setIsOpenModal}>
      <DialogContent className='p-6' aria-describedby={undefined}>
        <DialogTitle className='text-lg font-bold'>dasdsa</DialogTitle>
        <div className='mt-4'>{children}</div>
      </DialogContent>
    </Dialog>
  )
}

export default Modal
