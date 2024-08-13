'use client'

import dynamic from 'next/dynamic'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
const CreateUser = dynamic(() => import('./CreateUser'), { ssr: false })

const ButtonCreateUser = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleCloseEditUser = () => {
    setIsOpen(false)
  }

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Create User</Button>
      <CreateUser open={isOpen} onClose={handleCloseEditUser} />
    </>
  )
}

export default ButtonCreateUser
