import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flex: 1,
    textAlign: 'left'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
});

class MenuAppBar extends React.Component {
  state = {};

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { auth, openDrawer, classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            {auth && (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={openDrawer}
                  className={classes.navIconHide}
                >
                  <MenuIcon />
                </IconButton>
              )}
            <div className={classes.title} >
              <Link className={classes.link} to="/">
                <Typography
                  variant="title"
                  color="inherit"
                  className={classes.title}
                >
                  clutch
                </Typography>
              </Link>
            </div>
            {!auth && (
              <div className={classes.flexEnd}>
                <Link className={classes.link} to="/signin">
                  <Button color="inherit">Sign In</Button>
                </Link>
                <Link className={classes.link} to="/signup">
                  <Button color="inherit">Sign Up</Button>
                </Link>
              </div>
            )}
            {auth && (
              <div className={classes.flexEnd}>
                <Link className={classes.link} to="/signout">
                  <Button color="inherit">Sign Out</Button>
                </Link>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuAppBar);
