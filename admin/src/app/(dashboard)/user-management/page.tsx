import auth from '@/apiRequest/auth'
import user from '@/apiRequest/user'
import ButtonCreateUser from '@/components/pages/user-management/ButtonCreateUser'
import UserFilter from '@/components/pages/user-management/UserFilter'
import UserTable from '@/components/pages/user-management/UserTable'
import { cookies } from 'next/headers'
import queryString from 'query-string'

const UserManagementPage = async ({
  searchParams
}: {
  searchParams: { [key: string]: string | undefined }
}) => {
  const { search, page, limit } = searchParams
  const queryParam = queryString.stringify({
    search: search,
    page: page,
    limit: limit
  })

  const cookieStore = cookies()
  const accessToken = cookieStore.get('accessToken')?.value

  const res = await user.getListUser({ accessToken, queryParam })
  const { result } = res.result

  return (
    <div>
      <div className='mb-3 flex items-center gap-x-2'>
        <UserFilter />
        <ButtonCreateUser />
      </div>
      <UserTable data={result} />
    </div>
  )
}

export default UserManagementPage
