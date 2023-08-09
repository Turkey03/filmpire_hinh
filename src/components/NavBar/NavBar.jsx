import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Avatar, useMediaQuery, Button, Drawer } from '@mui/material';
import { Menu, AccountCircle } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useStyle from './styles';
import { SideBar, Search } from '..';
import { setUser, userSelector } from '../../features/auth';
import { fetchToken, createSessionId, moviesApi } from '../../utils';

function NavBar() {
  const { isAuthenticated, user } = useSelector(userSelector);
  console.log(user);
  const dispatch = useDispatch();
  const theme = useTheme();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const classes = useStyle();
  const isMobile = useMediaQuery('(max-width:600px)');
  const token = localStorage.getItem('request_token');
  const sessionIdFromLocalStorage = localStorage.getItem('session_id');
  useEffect(() => {
    const logInUser = async () => {
      if (token) {
        if (sessionIdFromLocalStorage) {
          const { data: userData } = await moviesApi.get(`/account?session_id=${sessionIdFromLocalStorage}`);
          dispatch(setUser(userData));
        } else {
          const sessionId = await createSessionId();
          console.log('hello1');

          const { data: userData } = await moviesApi.get(`/account?session_id=${sessionId}`);
          dispatch(setUser(userData));
        }
      }
    };
    logInUser();
  }, [token]);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {isMobile && (
          <IconButton
            className={classes.menuIcon}
            onClick={() => setIsMobileOpen((prevMobileOpen) => !prevMobileOpen)}
          >
            <Menu />
          </IconButton>
          )}

          <IconButton sx={{ ml: 1 }} onClick={() => {}} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          {!isMobile && <Search />}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={fetchToken}>
                Login &nbsp;<AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to="/profile/:id"
                onClick={() => {}}
              >
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar
                  style={{ width: '30px', height: '30px' }}
                  alt="Profile"
                  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                />
              </Button>
            )}
          </div>
          {isMobile && <Search />}
        </Toolbar>
      </AppBar>
      <div>
        <nav className={classes.drawer}>
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="right"
              open={isMobileOpen}
              onClose={() => setIsMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              classes={{ paper: classes.drawerPaper }}
            >
              <SideBar setIsMobileOpen={setIsMobileOpen} />
            </Drawer>
          ) : (
            <Drawer
              variant="permanent"
              open
              classes={{ paper: classes.drawerPaper }}
            >
              <SideBar setIsMobileOpen={setIsMobileOpen} />
            </Drawer>
          )}
        </nav>
      </div>
    </>
  );
}

export default NavBar;
