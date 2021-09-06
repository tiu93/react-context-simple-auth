import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import useStyles from './styles';
import { useLocation } from 'react-router-dom';
import history from 'appHistory';
import useUser from 'hooks/useUser';

const Header = () => {
  const location = useLocation();
  const classes = useStyles();
  const { logout } = useUser();

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          react-context-simple-auth
        </Typography>
        {location.pathname !== '/' && (
          <>
            <nav>
              <Link
                variant="button"
                color="textPrimary"
                href="/"
                className={classes.link}
              >
                Login Page
              </Link>
            </nav>
            <Button
              href="#"
              color="primary"
              variant="outlined"
              className={classes.link}
              onClick={() => {
                logout();
                history.push('/');
              }}
            >
              Logout
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
