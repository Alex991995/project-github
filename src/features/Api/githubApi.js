import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const githubApi = createApi({ 
  reducerPath: 'githubApi',
  tagTypes: ['github'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
  refetchOnMountOrArgChange: true,
  endpoints: (build) => ({ 
    getUser: build.query({ 
      query: (name) => ({
        url: `search/users`,
        params: {
          q: `${name}`,
        }
      }),
      transformResponse: (response) => response.items
    }),
  })
})

export const { useGetUserQuery} = githubApi