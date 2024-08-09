import http from '@/lib/http'
import IResponseListUser from '@/types/user.type'

const user = {
  getListUser: async ({
    accessToken = ''
  }: {
    accessToken: string | undefined
  }) => {
    const res = await http.get<IResponseListUser>('user', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
      next: { tags: ['list-users'] }
    })
    return res
  }
}

export default user
