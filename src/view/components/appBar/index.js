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
import gql from 'graphql-tag';
import { ApolloConsumer } from 'react-apollo';
import { AUTH_TOKEN } from '../../../utility/constants';

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

const SIGN_OUT = gql`
  mutation {
    signOut {
      token
    }
  }
`;
class MenuAppBar extends React.Component {
  async fetchSignOut(client, event) {
    event.preventDefault();
    await client
      .mutate({ mutation: SIGN_OUT })
      .then(({ data }) => {
        localStorage.removeItem(AUTH_TOKEN);
        client.resetStore();
      })
      .catch(({ graphQLErrors }) => {
        //This variable returns an array of errors
        console.log('Error: ', graphQLErrors[0].message);
        const errors = graphQLErrors.map(graphQLError => graphQLError.message);
        this.setState({ errors, password: '' });
      });
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    const { data, openDrawer, classes } = this.props;
    const token = data && data.currentUser && data.currentUser.token;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            {token && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={openDrawer}
                className={classes.navIconHide}
              >
                <MenuIcon />
              </IconButton>
            )}
            <div className={classes.title}>
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
            {!token && (
              <div className={classes.flexEnd}>
                <Link className={classes.link} to="/signin">
                  <Button color="inherit">Sign In</Button>
                </Link>
                <Link className={classes.link} to="/signup">
                  <Button color="inherit">Sign Up</Button>
                </Link>
              </div>
            )}
            {token && (
              <ApolloConsumer>
                {client => (
                  <div className={classes.flexEnd}>
                    <Link className={classes.link} to="/">
                      <Button
                        color="inherit"
                        onClick={this.fetchSignOut.bind(this, client)}
                      >
                        Sign Out
                      </Button>
                    </Link>
                  </div>
                )}
              </ApolloConsumer>
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
