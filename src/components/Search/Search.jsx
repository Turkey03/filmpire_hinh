import React, { useEffect, useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { searchMovie } from '../../features/currentGenreOrCategory';
import useStyles from './styles';

function Search() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [query, setQuery] = useState('');
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      console.log('Hello');
      dispatch(searchMovie(query));
    }
  };
  return (
    <div className={classes.searchContainer}>
      <TextField
        value={query}
        onKeyPress={handleKeyPress}
        onChange={(e) => setQuery(e.target.value)}
        variant="standard"
        InputProps={{
          className: classes.input,
          startAdornment: (
            <InputAdornment position="start"><SearchIcon /></InputAdornment>
          ),
        }}
      />
    </div>
  );
}

export default Search;
