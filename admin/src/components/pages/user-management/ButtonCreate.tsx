'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const ButtonCreate = () => {
  const router = useRouter()

  return (
    <div>
      <Button onClick={() => router.push('/user-management/@modal/create')}>
        Create a user
      </Button>
    </div>
  )
}


export default ButtonCreate