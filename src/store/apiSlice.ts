import {FetchArgs, createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

import { RootState } from "./store";

const baseQuery = fetchBaseQuery({
  baseUrl:import.meta.env.VITE_BASE_URL_TMDB,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.user;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
})




export const apiSlice = createApi({
  baseQuery: baseQuery,
  endpoints:builder => ({})
})
