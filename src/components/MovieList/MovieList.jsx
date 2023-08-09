import React from 'react';
import { Grid } from '@mui/material';
import useStyles from './styles';
import { Movie } from '..';

function MovieList({ movies, numberMovies }) {
  const classes = useStyles();
  return (
    <Grid container className={classes.moviesContainer}>
      {movies.results.slice(0, numberMovies).map((movie, i) => (
        <Movie movie={movie} key={i} i={i} />
      ))}
    </Grid>
  );
}

export default MovieList;
