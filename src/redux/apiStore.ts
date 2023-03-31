import { apiSlice } from "@/redux/slices/apiSlice";
import { Movies, RootObject, Result } from "@/interface/Movies";

const tmdbKey = import.meta.env.VITE_REACT_APP_TMDB_KEY;
export const movieApiSlice: any = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    //Get Banner Movie
    getBanner: builder.query<Result, string>({
      query: () => ({
        url: `/movie/now_playing?api_key=${tmdbKey}&language=vi-VN`,
        method: "GET",
      }),
      transformResponse: (response: { results: Result }) => response.results,
    }),

    // Get Trending Movie
    getTrending: builder.query<RootObject, any>({
      query: ({ page }) => ({
        url: `/trending/movie/week?api_key=${tmdbKey}&language=vi-VN&page=${page}`,
        method: "GET",
      }),
    }),


    getMovies: builder.query<RootObject, any>({
      query: ({ page, url }) => ({
        url: `/movie/${url}?api_key=${tmdbKey}&language=vi-VN&page=${page}`,
        method: "GET",
      }),
    }),

    // Get TV Airing Today
    getTv: builder.query<RootObject, any>({
      query: ({ page, url }) => ({
        url: `/tv/${url}?api_key=${tmdbKey}&language=vi-VN&page=${page}`,
        method: "GET",
      }),
    }),

    // Get Movies With Search
    getMoviesWithSearch: builder.query<any, Movies>({
      query: ({ page, searchQuery }) => ({
        url: `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbKey}`,
        method: "GET",
      }),
      transformResponse: (response: { results: any }) => response.results,
    }),

    // Get Movie With Search
    getListMoviesWithSearch: builder.query<any, any>({
      query: ({ searchMovies }) => ({
        url: `search/multi?&api_key=${tmdbKey}&query=${searchMovies}`,
      }),
      transformResponse: (response: { results: any }) => response.results,
    }),
  }),
});

export const {
  useGetBannerQuery,
  useGetTrendingQuery,
  useGetTvQuery,
  useGetMoviesQuery,
  useGetListMoviesWithSearchQuery,
} = movieApiSlice;
