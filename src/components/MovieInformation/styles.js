import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  containerMovieInformation: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '10px 0',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      flexWrap: 'wrap',
    },
  },
  imgMovie: {
    width: '80%',
    boxShadow: '0.5em 1em 1em rgb(64, 64, 70)',
    borderRadius: '20px',
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
      width: '100%',
      height: '350px',
      marginBottom: '30px',
    },
    [theme.breakpoints.down('md')]: {
      margin: '0 auto',
      width: '50%',
      height: '350px',
    },
  },
  genresContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '10px 0 !important',
  },
  links: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgActor: {
    width: '100%',
    maxWidth: '8em',
    height: '9em',
    objectFit: 'cover',
    borderRadius: '20px',
  },
  containerButton: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
}));
