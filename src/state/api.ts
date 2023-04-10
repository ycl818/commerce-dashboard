import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: "main",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  tagTypes:["Kpis"],
  endpoints: (build) => ({
      getKpis: build.query<void, void>({
        providesTags:["Kpis"],
        query:() => "kpi/kpis/",

      })
  }),
})

export const { useGetKpisQuery } = api