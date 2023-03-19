import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"



const baseQuery = fetchBaseQuery({
  baseUrl:import.meta.env.VITE_BASE_URL_TMDB,
})


export const apiSlice = createApi({
  baseQuery: baseQuery,
  endpoints:builder => ({})
})
