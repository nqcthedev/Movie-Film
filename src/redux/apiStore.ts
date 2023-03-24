
import { apiSlice } from "@/redux/slices/apiSlice";
import { Movies, RootObject, Result } from "@/interface/Movies";

const tmdbKey = import.meta.env.VITE_REACT_APP_TMDB_KEY;
export const movieApiSlice: any = apiSlice.injectEndpoints({
  // endpoints: (builder: {
  //   query: (arg0: {
  //     query: () => { url: string; method: string };
  //     transformResponse: (response: any) => any;
  //   }) => any;
  // }) => ({
  //   getGenres: builder.query({
  //     query: () => ({
  //       url: `/genre/movie/list?api_key=${tmdbKey}&language=vi-VN`,
  //       method: "GET",
  //     }),
  //     transformResponse: (response: { results: any }) => response.results,
  //   }),

  //   // getMovies

  //     //Get Banner Movie
  //     // getBanner:builder.query({
  //     //   query: () => ({
  //     //     url: `/trending/movie/week?api_key=${tmdbKey}&language=vi-VN`,
  //     //     method: "GET",
  //     //   }),
  //     //   transformResponse: (response: { results: any }) => response.results,
  //     // })
  //     getMovies:builder.query({
  //             query:({genreIdOrCategoryName, page, searchQuery}) => {
  //                  // Get Movies by Search
  //               if (searchQuery) {
  //                 return `/search/movie?query=${searchQuery}&page=${page}&api_key=${API_KEY}`;
  //               }

  //               // Get Movies by Category
  //               if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string') {
  //                 return `/movie/${genreIdOrCategoryName}?page=${page}&api_key=${API_KEY}`;
  //               }

  //               // Get Movies by Genre
  //               if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number') {
  //                 return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${API_KEY}`;
  //               }

  //               // Get popular movies by default
  //               return `/movie/popular?page=${page}&api_key=${API_KEY}`;
  //             },
  //           }),
  // }),

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
  useGetUpComingQuery
} = movieApiSlice;

// export const movieApi: any = createApi({
//   reducerPath:'movieApi',
//   baseQuery:fetchBaseQuery({
//     baseUrl:BASE_URL
//   }),
//   endpoints:(builder) => ({
//     // Get Genders
//     getGenders:builder.query({
//       query:() => `/genre/movie/list?api_key=${API_KEY}`,
//     }),

//     //Get Movies by [TYPE]
//     getMovies:builder.query<any, Movies>({
//       query:({genreIdOrCategoryName, page, searchQuery}) => {
//            // Get Movies by Search
//         if (searchQuery) {
//           return `/search/movie?query=${searchQuery}&page=${page}&api_key=${API_KEY}`;
//         }

//         // Get Movies by Category
//         if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string') {
//           return `/movie/${genreIdOrCategoryName}?page=${page}&api_key=${API_KEY}`;
//         }

//         // Get Movies by Genre
//         if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number') {
//           return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${API_KEY}`;
//         }

//         // Get popular movies by default
//         return `/movie/popular?page=${page}&api_key=${API_KEY}`;
//       },
//     }),
//       // Get Movie
//       getMovie: builder.query<any, Movie>({
//         query: (id) => `/movie/${id}?append_to_response=videos,credits&api_key=${API_KEY}`,
//       }),

//         // Get Recommendations
//     getRecommendations: builder.query({
//       query: ({ movie_id, list }) => `/movie/${movie_id}/${list}?api_key=${API_KEY}`,
//     }),
//     // Get Actor
//     getActor: builder.query({
//       query: (id) => `person/${id}?api_key=${API_KEY}`,
//     }),

//     // Get Movies by Actor
//     getMoviesByActorId: builder.query({
//       query: ({ id, page }) => `/discover/movie?with_cast=${id}&page=${page}&api_key=${API_KEY}`,
//     }),

//     // Get User Specific Lists
//     getList: builder.query({
//       query: ({ listName, accountId, sessionId, page }) => `/account/${accountId}/${listName}?api_key=${API_KEY}&session_id=${sessionId}&page=${page}`,
//     }),

//     //Get Banner Movie
//     getBanner:builder.query({
//       query:() => `/trending/movie/week?api_key=${API_KEY}&`
//     })
//   })
// })
