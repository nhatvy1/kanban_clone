'use client'

import auth from '@/apiRequest/auth'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

const ButtonLogout = () => {
  const router = useRouter()
  const handleLogout = async () => {
    try {
      await auth.logoutNextClientToNextServer()
      toast.success('Logout successfully')
    } catch (e: any) {
      toast.error(e?.message)
    } finally {
      // localStorage.removeItem('accessToken')
      router.refresh()
    }
  }

  return <button onClick={handleLogout}>Logout</button>
}

export default ButtonLogout