import { http } from '@/configs/http'
import { IResponseGetTeam } from '@/types/team.type'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Filter {
  filter: string
}

export const teamApi = createApi({
  reducerPath: 'teamApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1' }),
  endpoints: (build) => ({
    // Generic type theo thứ tự kểu response trả về và argument
    getTeams: build.query<IResponseGetTeam, Filter>({
      query: ({ filter}: Filter) => {
        return { url: `team/get?${filter}` }
      }
    })
  })
})

export const { useGetTeamsQuery } = teamApi
