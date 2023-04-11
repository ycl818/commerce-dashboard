import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GetKpisResponse } from './types'


export const api = createApi({
  reducerPath: "main",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  tagTypes:["Kpis"],
  endpoints: (build) => ({
      getKpis: build.query<Array<GetKpisResponse>, void>({
        providesTags:["Kpis"],
        query:() => "kpi/kpis/",

      })
  }),
})

export const { useGetKpisQuery } = api