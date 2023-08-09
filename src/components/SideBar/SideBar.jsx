import React from 'react';
import { List, ListItem, ListSubheader, Divider, Box, CircularProgress, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useGetGenresQuery } from '../../service/TMDB';
import useStyle from './styles';
import { selectedGenreOrCategory } from '../../features/currentGenreOrCategory';

function SideBar() {
  const logoLight = 'https://camo.githubusercontent.com/b3ebc786292384670e624f22df6b49ae8f432e6595515921cc2186aaa43f8c48/68747470733a2f2f692e696d6775722e636f6d2f51666c736941642e706e67';
  const classes = useStyle();
  const { data, isFetching } = useGetGenresQuery();
  const dispatch = useDispatch();
  const { genreIdOrCategoryName } = useSelector((state) => state.currentGenreOrCategory);
  const categories = [
    { label: 'Popular', value: 'popular' },
    { label: 'Top Rated', value: 'top_rated' },
    { label: 'Upcoming', value: 'upcoming' },
  ];
  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          src={logoLight}
          alt="Logo Film"
          className={classes.image}
        />
      </Link>
      <Divider />
      <ListSubheader>Categories</ListSubheader>
      <List>
        {categories.map(({ label, value }) => (
          <Link key={value} to="/" className={classes.links}>
            <ListItem onClick={() => { dispatch(selectedGenreOrCategory(value)); }} button>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <ListSubheader>Genres</ListSubheader>
      <List>
        {isFetching ? (
          <Box>
            <CircularProgress />
          </Box>
        ) : data.genres.map(({ name, id }) => (
          <Link key={name} to="/" className={classes.links}>
            <ListItem onClick={() => { dispatch(selectedGenreOrCategory(id)); }} button>
              <ListItemText primary={name} textAlign="center" />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
}

export default SideBar;
