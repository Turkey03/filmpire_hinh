import { makeStyles } from '@mui/styles';

const drawerWidth = 240;
export default makeStyles((theme) => ({
  toolbar: {
    marginLeft: '240px',
    height: '90px',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      flexWrap: 'wrap',
    },
  },
  menuIcon: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    } },
  drawerPaper: {
    width: drawerWidth,
  },
}));
