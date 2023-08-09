import React from 'react';
import { Typography, Button } from '@mui/material';
import useStyles from './styles';

function Pagination({ currentPage, setPage, totalPages }) {
  const classes = useStyles();
  const handlePrev = () => {
    if (currentPage !== 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage !== totalPages) {
      setPage((nextPage) => nextPage + 1);
    }
  };
  return (
    <div className={classes.containerPagination}>
      <Button onClick={handlePrev}>Prev</Button>
      <Typography variant="h5">{currentPage}</Typography>
      <Button onClick={handleNext}>Next</Button>
    </div>
  );
}

export default Pagination;
