import { store } from '@/redux/store'
import { IFormLogin, IResLogin } from '../types/auth.type'
import { handleLogout } from '@/redux/slices/auth.slice'
import { toast } from 'react-toastify'
import { http } from '@/configs/http'

const auth = {
  login: async (data: IFormLogin) => {
    const res = await http.post<IFormLogin, IResLogin>('auth/login', data)
    return res
  },
  logout: ()=> {
    store.dispatch(handleLogout())
    toast.success('Logout successfully')
  }
}

export default auth
