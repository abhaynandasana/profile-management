import { createApi } from '@reduxjs/toolkit/query/react'
import { apiBaseQuery } from 'helpers/baseQuery'
import { SearchResult } from 'store/search/types'

type SearchParams = {
  name?: string
  status?: string
  gender?: string
  page?: number
}

export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: apiBaseQuery,
  endpoints: (builder) => ({
      search: builder.query<SearchResult, SearchParams>({
        query: (params) => {
        return {
          url: '/character',
          params
        }
      },
    })
  })
})

export const { useSearchQuery } = searchApi
