import { apiSlice } from "@/redux/slices/apiSlice";
import { Movies, RootObject, Result } from "@/interface/Movies";
import { RootObjectDetail } from "@/interface/DetailMovie";
import { RootObjectCollection } from "@/interface/DetailCollections";
import { RootObjectReview } from "@/interface/ReviewMovie";

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

    // Get All Movie
    getMovies: builder.query<RootObject, any>({
      query: ({ page, url }) => ({
        url: `/movie/${url}?api_key=${tmdbKey}&language=vi-VN&page=${page}`,
        method: "GET",
      }),
    }),

    // Get a Movie
    getMovie: builder.query<RootObject, any>({
      query: ({id }) => ({
        url: `/movie/${id}?api_key=${tmdbKey}&language=vi-VN`,
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

     // Get All Movie
     getMovieDetail: builder.query<RootObjectDetail, any>({
      query: ({ id }) => ({
        url: `/movie/${id}?append_to_response=videos,credits&api_key=${tmdbKey}&language=vi-VN`,
        method: "GET",
      }),
    }),

     // Get Detail Collection
     getDetailCollection: builder.query<RootObjectCollection, any>({
      query: ({ id }) => ({
        url: `/collection/${id}?api_key=${tmdbKey}&language=vi-VN`,
        method: "GET",
      }),
    }),

    // Get Review Movie
    getReview: builder.query<RootObjectReview, any>({
      query: ({ id, page }) => ({
        url: `/movie/${id}/reviews?api_key=${tmdbKey}&page=${page}&language=en-US`,
        method: "GET",
      }),
    }),

    // Post Rating Moview
    postRating: builder.mutation<any, any>({
      query: ({id,value, guest_session_id}) => ({
        url: `/movie/${id}/rating?guest_session_id=${guest_session_id}&api_key=${tmdbKey}`,
        method: "POST",
        body:JSON.stringify(value)
      }),
    }),

    // Create Request Token
    createRequestToken: builder.query<any, any>({
      query: () => ({
        url: `/authentication/token/new?api_key=${tmdbKey}`,
        method: "GET",
      }),
    }),

     // Create Request Token
     createSession: builder.mutation<any, any>({
      query: (tokenReq) => ({
        url: `/authentication/session/new?api_key=${tmdbKey}`,
        method: "POST",
        body:tokenReq
      }),
    }),

    // Create Guest Session
    createGuestSession: builder.query<any, any>({
      query: () => ({
        url: `/authentication/guest_session/new?api_key=${tmdbKey}`,
        method: "GET"
      }),
    }),
  }),
});

export const {
  useGetBannerQuery,
  useGetTrendingQuery,
  useGetTvQuery,
  useGetMoviesQuery,
  useGetMovieDetailQuery,
  useGetListMoviesWithSearchQuery,
  useGetDetailCollectionQuery,
  useGetReviewQuery,
  usePostRatingMutation,
  useCreateRequestTokenQuery,
  useCreateSessionMutation,
  useCreateGuestSessionQuery,
  useGetMovieQuery
} = movieApiSlice;
