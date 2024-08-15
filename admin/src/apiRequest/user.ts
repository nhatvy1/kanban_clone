import http from '@/lib/http'
import IResponseListUser from '@/types/user.type'

const user = {
  getListUser: async ({
    accessToken = '',
    queryParam = ''
  }: {
    accessToken: string | undefined
    queryParam?: string
  }) => {
    const res = await http.get<IResponseListUser>(`user?${queryParam}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
      next: { tags: ['list-users'] }
    })
    return res
  },
  getRolePermission: async ({
    accessToken = ''
  }: {
    accessToken: string | undefined
  }) => {
    const res = await http.get<any>(`user/get/role-permission`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    return res
  }
}

export default user
