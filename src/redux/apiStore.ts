
import { apiSlice } from "@/redux/slices/apiSlice";
import { Movies, RootObject, Result } from "@/interface/Movies";

const tmdbKey = import.meta.env.VITE_REACT_APP_TMDB_KEY;
export const movieApiSlice: any = apiSlice.injectEndpoints({

  endpoints: (builder) => ({
    getGenres: builder.query({
      query: () => ({
        url: `/genre/movie/list?api_key=${tmdbKey}&language=vi-VN`,
        method: "GET",
      }),
      transformResponse: (response: { genres: any }) => response.genres,
    }),

    //getMovies

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
      transformResponse: (response: { results: any }) => response.results,
    }),

    // Get Popular Movie
    getPopular: builder.query<RootObject, any>({
      query: ({ page }) => ({
        url: `/movie/popular?api_key=${tmdbKey}&language=vi-VN&page=${page}`,
        method: "GET",
      }),
      transformResponse: (response: { results: any }) => response.results,
    }),

    getMovies: builder.query<RootObject, any>({
      query: ({ page, url }) => ({
        url: `/movie/${url}?api_key=${tmdbKey}&language=vi-VN&page=${page}`,
        method: "GET",
      }),
      transformResponse: (response: { results: any }) => response.results,
    }),

    // Get Top Rate Movie
    getTopRate: builder.query<RootObject, any>({
      query: ({ page }) => ({
        url: `/movie/top_rated?api_key=${tmdbKey}&language=vi-VN&page=${page}`,
        method: "GET",
      }),
      transformResponse: (response: { results: any }) => response.results,
    }),

    // Get Up Coming Movie
    getUpComing: builder.query<RootObject, any>({
      query: ({ page }) => ({
        url: `/movie/upcoming?api_key=${tmdbKey}&language=vi-VN&page=${page}`,
        method: "GET",
      }),
      transformResponse: (response: { results: any }) => response.results,
    }),

    // Get TV Airing Today
    getTv: builder.query<RootObject, any>({
      query: ({ page, url }) => ({
        url: `/tv/${url}?api_key=${tmdbKey}&language=vi-VN&page=${page}`,
        method: "GET",
      }),
      transformResponse: (response: { results: any }) => response.results,
    }),

    // Get Movies With Search
    getMoviesWithSearch: builder.query<any, Movies>({
      query: ({ page, searchQuery }) => ({
        url: `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbKey}`,
        method: "GET",
      }),
      transformResponse: (response: { results: any }) => response.results,
    }),

    // Get Movies by Category
    getMovieWithIdOrCategory: builder.query<any, Movies>({
      query: ({ genreIdOrCategoryName, page }) => ({
        url: `/movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbKey}`,
      }),
      transformResponse: (response: { results: any }) => response.results,
    }),

    // Get Movie by Genre
    getMovieByGenre: builder.query<any, Movies>({
      query: ({ genreIdOrCategoryName, page }) => ({
        url: `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbKey}`,
      }),
      transformResponse: (response: { results: any }) => response.results,
    }),
  }),
});

export const {
  useGetGenresQuery,
  useGetBannerQuery,
  useGetTrendingQuery,
  useGetPopularQuery,
  useGetTopRateQuery,
  useGetUpComingQuery,
  useGetTvQuery,
  useGetMoviesQuery
} = movieApiSlice;

