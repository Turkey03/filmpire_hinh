import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  movieItem: {
    padding: '10px',

  },
  title: {
    color: theme.palette.text.primary,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '230px',
    textAlign: 'center',
    marginTop: '10px',
    marginBottom: '0',
  },
  links: {
    alignItems: 'center',
    fontWeight: 'bolder',
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
      flexDirection: 'column',
      textDecoration: 'none',
    },
    '&:hover': {
      cursor: 'pointer',
    },
  },
  image: {
    borderRadius: '20px',
    width: '200px',
    height: '300px',
    '&:hover': {
      transition: '1.2',
      transform: 'scale(1.05)',
    },
  },
}));
