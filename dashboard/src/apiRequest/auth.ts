import { store } from '@/redux/store'
import instanceNonAuth from '../configs/axios.non.auth'
import { IFormLogin, IResLogin } from '../types/auth.type'
import { handleLogout } from '@/redux/slices/auth.slice'
import { toast } from 'react-toastify'

const auth = {
  login: async (data: IFormLogin) => {
    const res = await instanceNonAuth.post<IResLogin>('auth/login', data)
    return res.data
  },
  logout: ()=> {
    store.dispatch(handleLogout())
    toast.success('Logout successfully')
  }
}

export default auth
