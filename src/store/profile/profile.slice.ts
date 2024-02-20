import { createApi } from '@reduxjs/toolkit/query/react'
import { apiBaseQuery } from 'helpers/baseQuery'
import {Character} from 'globalTypes/character'


export const profileApi = createApi({
  reducerPath: 'profile',
  baseQuery: apiBaseQuery,
  endpoints: (builder) => ({
    profile: builder.query<Character, string | undefined>({
      query: (id) => `/character/${id}`,
    })
  })
})

export const { useProfileQuery } = profileApi
