import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiBaseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_BASE_URL,
  prepareHeaders: async (headers) => {
    return headers
  }
})

export { apiBaseQuery }
