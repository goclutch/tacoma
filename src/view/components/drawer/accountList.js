import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import AccountBox from '@material-ui/icons/AccountBox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Users from '@material-ui/icons/PeopleOutline';
import Settings from '@material-ui/icons/Settings';
import Identity from '@material-ui/icons/PermIdentity';
// Internal
import DrawerItem from './drawerItem';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  }
});

class AccountList extends React.Component {
  state = { open: false };

  handleClick = () => {
    this.props.toggleDrawerList('account');
  };

  render() {
    const { classes, drawerLists } = this.props;
    const open = drawerLists['account'];
    return (
      <div className={classes.root}>
        <List
          component="nav"
          // subheader={<ListSubheader component="div">Nested List Items</ListSubheader>}
        >
          <ListItem button onClick={this.handleClick}>
            <ListItemIcon>
              <AccountBox />
            </ListItemIcon>
            <ListItemText inset primary="Account" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <DrawerItem
                linkTo="/account-user"
                Icon={Identity}
                text="User Account"
              />
              <DrawerItem
                linkTo="/account-settings"
                Icon={Settings}
                text="Settings"
              />
              <DrawerItem
                linkTo="/account-manage"
                Icon={Users}
                text="Manage Users"
              />
            </List>
          </Collapse>
        </List>
      </div>
    );
  }
}

AccountList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AccountList);
