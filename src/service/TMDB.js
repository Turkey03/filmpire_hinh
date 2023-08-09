import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbkey = process.env.REACT_APP_TMDB_KEY;

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  endpoints: (builder) => ({
    getGenres: builder.query({
      query: () => `genre/movie/list?api_key=${tmdbkey}`,
    }),
    getMoviePopular: builder.query({
      // get movies by name
      query: ({ genreIdOrCategoryName, page, searchQuery }) => {
        // get movies by search
        if (searchQuery) {
          return `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbkey}`;
        }
        if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string') {
          return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbkey}`;
        }
        // get movies by id
        if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number') {
          return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbkey}`;
        }
        return `movie/popular?page=${page}&api_key=${tmdbkey}`;
      },
    }),
    getMovie: builder.query({
      query: (id) => `/movie/${id}?append_to_response=videos,credits&api_key=${tmdbkey}`,
    }),
    //* get recommendation movies
    getRecommenmovies: builder.query({
      query: ({ movie_id }) => `/movie/${movie_id}/recommendations?api_key=${tmdbkey}`,
    }),
  }),
});

export const { useGetGenresQuery, useGetMoviePopularQuery, useGetMovieQuery, useGetRecommenmoviesQuery } = tmdbApi;
