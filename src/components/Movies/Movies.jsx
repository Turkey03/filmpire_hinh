import React, { useState } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import { useGetMoviePopularQuery } from '../../service/TMDB';
import { MovieList, Pagination } from '..';

function Movies() {
  const currentPage = 1;
  const [page, setPage] = useState(currentPage);
  const { genreIdOrCategoryName, searchQuery } = useSelector((state) => state.currentGenreOrCategory);
  const { data, isFetching, error } = useGetMoviePopularQuery({ genreIdOrCategoryName, page, searchQuery });
  console.log(data);
  if (isFetching) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    );
  }
  if (!data.results.length) {
    return (
      <Box>
        <Typography>Lỗi rồi</Typography>
      </Box>
    );
  }
  if (error) return console.log(error);

  return (
    <div>
      <MovieList movies={data} currentPage={page} />
      <Pagination currentPage={page} setPage={setPage} totalPages={data.total_pages} />
    </div>
  );
}
export default Movies;
