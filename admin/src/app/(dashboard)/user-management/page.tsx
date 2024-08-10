import user from '@/apiRequest/user'
import ButtonCreate from '@/components/pages/user-management/ButtonCreate'
import UserFilter from '@/components/pages/user-management/UserFilter'
import UserTable from '@/components/pages/user-management/UserTable'
import { Button } from '@/components/ui/button'
import { cookies } from 'next/headers'
import Link from 'next/link'
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
        <ButtonCreate />
      </div>
      <UserTable data={result} />
    </div>
  )
}

export default UserManagementPage
