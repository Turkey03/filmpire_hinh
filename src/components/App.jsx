import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Actors, MovieInformation, Profile, NavBar, Movies } from '.';
import useStyles from './styles';

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route exact path="/" element={<Movies />} />
          <Route exact path="/profile/:id" element={<Profile />} />
          <Route exact path="/actor/:id" element={<Actors />} />
          <Route exact path="/movie/:id" element={<MovieInformation />} />

        </Routes>
      </main>
    </div>
  );
}

export default App;
