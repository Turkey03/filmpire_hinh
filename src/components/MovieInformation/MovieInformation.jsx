import React from 'react';
import { Typography, Rating, Button, ButtonGroup, Grid, Box, CircularProgress } from '@mui/material';
import { Movie as MovieIcon, Theaters, Language, Remove, ArrowBack, Favorite, FavoriteBorderOutlined } from '@mui/icons-material';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectedGenreOrCategory } from '../../features/currentGenreOrCategory';
import useStyles from './styles';
import { useGetMovieQuery, useGetRecommenmoviesQuery } from '../../service/TMDB';
import { MovieList } from '..';

function MovieInformation() {
  const classes = useStyles();
  const { id } = useParams();
  const { data, isFetching, error } = useGetMovieQuery(id);
  const dispatch = useDispatch();
  const isAddToFavorite = true;
  const isAddToWatchlist = true;
  const { data: recommendations, isFetching: isRemcomendationsFetching } = useGetRecommenmoviesQuery({ movie_id: id });
  console.log(recommendations);
  if (isRemcomendationsFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="6rem" />
      </Box>
    );
  }
  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="6rem" />
      </Box>
    );
  }
  if (error) {
    return (
      <Box>
        <Link to="/">Không ổn rồi đại vương ơi</Link>
      </Box>
    );
  }
  const addToFavorite = () => {
  };
  const addToWatchlist = () => {

  };

  return (
    <Grid container className={classes.containerMovieInformation}>
      <Grid item sm={12} lg={4}>
        <img
          src={data?.poster_path ? `https://image.tmdb.org/t/p/w500/${data?.poster_path}` : 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/06/thay-giao-ba-bay-kenh-sau-tro-dua-tai-hai-cua-viewer.jpg'}
          alt={data?.title}
          className={classes.imgMovie}
        />
      </Grid>
      <Grid item container direction="column" lg={7}>
        <Typography variant="h3" gutterBottom align="center">{data?.title}</Typography>
        <Typography variant="h3" gutterBottom align="center">({data?.release_date.split('-')[0]})</Typography>
        <Typography variant="h5" gutterBottom align="center"> {data?.tagline}</Typography>
        <Grid item className={classes.containerMovieInformation}>
          <Box display="flex" align="center">
            <Rating readOnly value={(data.vote_average) / 2} />
            <Typography variant="subtitle1" gutterBottom style={{ marginLeft: '10px' }}>{data.vote_average}/10</Typography>
          </Box>
          <Typography variant="h5" gutterBottom>{data.runtime}min/{data?.release_date}/{data?.spoken_languages.length > 0 ? data?.spoken_languages[0].name : 'Tiếng chó'}
          </Typography>
        </Grid>
        <Grid item className={classes.genresContainer}>
          {data?.genres.map((genre) => (
            <Link className={classes.links} key={genre.name} to="/" onClick={() => { dispatch(selectedGenreOrCategory(genre.id)); }}>
              <Typography variant="subtitle1" color="textPrimary">
                {genre.name}
              </Typography>
            </Link>
          ))}
        </Grid>
        <Typography variant="h5" gutterBottom style={{ marginTop: '10px' }}>
          Overview
        </Typography>
        <Typography style={{ marginBottom: '2rem' }}>
          {data?.overview}
        </Typography>
        <Typography gutterBottom variant="h5">Top Cast</Typography>
        <Grid item container spacing={2}>
          {data.credits?.cast.map((character, i) => (
            <Grid key={i} item component={Link} to={`/actor/:${character.id}`} xs={4} md={2}>
              <img
                src={`https://image.tmdb.org/t/p/w500${character?.profile_path}`}
                className={classes.imgActor}
              />
              <Typography color="textPrimary">{character?.name}</Typography>
              <Typography color="secondPrimary">{character?.character.split('/')[0]}</Typography>
            </Grid>
          )).splice(0, 6)}
        </Grid>
        <Grid container item style={{ marginTop: '2rem' }}>
          <div className={classes.containerButton}>
            <Grid item sx={12} sm={6} className={classes.containerButton}>
              <ButtonGroup size="small" variant="outlined">
                <Button target="_blank" noopener noreferrer href={data?.homepage} endIcon={<Language />}>Website</Button>
                <Button target="_blank" noopener noreferrer href={`https://www.imdb.com/title/${data?.imdb_id}`} endIcon={<MovieIcon />}>IMDB</Button>
                <Button onClick={() => {}} href="#" endIcon={<Theaters />}>Trailer</Button>
              </ButtonGroup>
            </Grid>
            <Grid item sx={12} sm={6} className={classes.containerButton}>
              <ButtonGroup size="small" variant="outlined">
                <Button onClick={addToFavorite} endIcon={isAddToFavorite ? <FavoriteBorderOutlined /> : <Favorite />}> {isAddToFavorite ? 'Unfavorite' : 'Favorite'}</Button>
                <Button onClick={addToWatchlist} endIcon={isAddToWatchlist ? <Remove /> : <ArrowBack />}>Watchlist</Button>
                <Button component={Link} to="/" endIcon={<ArrowBack />}>Back</Button>
              </ButtonGroup>
            </Grid>
          </div>
        </Grid>
      </Grid>
      <Box marginTop="5rem" width="100%">
        <Typography variant="h3" align="center">

          Duy Anh Bảo Phải Xem Phim Dưới Đây
        </Typography>
        {recommendations ? <MovieList movies={recommendations} numberMovies={12} /> : <Box>Dm duy anh</Box>}
      </Box>
    </Grid>
  );
}

export default MovieInformation;
