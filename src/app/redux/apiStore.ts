
import { apiSlice } from "@/store/apiSlice";
const tmdbKey = import.meta.env.VITE_REACT_APP_TMDB_KEY
console.log(tmdbKey)
export const genreApiSlice: any = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getGenres: builder.query({
      query: () => ({
        url: `/genre/movie/list?api_key=${tmdbKey}`,
        method: "GET",
      }),
      transformResponse: (response: any) => response.data,
    }),
  }),
});

export const { useGetGenresQuery} = genreApiSlice;
