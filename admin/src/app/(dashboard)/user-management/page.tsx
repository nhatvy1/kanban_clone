import user from '@/apiRequest/user'
import UserTable from '@/components/pages/user-management/UserTable'
import { cookies } from 'next/headers'

const UserManagementPage = async () => {
  const cookieStore = cookies()
  const accessToken = cookieStore.get('accessToken')?.value
  
  const res = await user.getListUser({ accessToken })
  const { result, limit, page, totalResults } = res.result

  return (
    <div>
      <UserTable data={result}/>
    </div>
  )
}

export default UserManagementPage
