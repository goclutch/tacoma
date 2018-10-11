import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Dashboard from '@material-ui/icons/Dashboard';
import List from '@material-ui/core/List';
import Hidden from '@material-ui/core/Hidden';
// Internal
import ReportList from './reportList';
import AccountList from './accountList';
import DrawerItem from './drawerItem';

const drawerWidth = '250px';

const styles = theme => ({
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative'
    }
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0 // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar
});
const drawer = (toggleDrawerList, drawerLists, userAccess) => (
  <div>
    <List component="div" disablePadding>
      <DrawerItem linkTo="/dashboard" Icon={Dashboard} text="Dashboard" />
    </List>
    <Divider />
    <ReportList
      toggleDrawerList={toggleDrawerList}
      drawerLists={drawerLists}
      userAccess={userAccess}
    />
    <Divider />
    <AccountList
      toggleDrawerList={toggleDrawerList}
      drawerLists={drawerLists}
      userAccess={userAccess}
    />
    <Divider />
  </div>
);
class AppDrawer extends React.Component {
  render() {
    const {
      classes,
      closeDrawer,
      mobileOpen,
      toggleDrawerList,
      drawerLists,
      userAccess
    } = this.props;
    return (
      <div>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={closeDrawer}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
            userAccess={userAccess}
          >
            {drawer(toggleDrawerList, drawerLists, userAccess)}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper
            }}
            userAccess={userAccess}
          >
            {drawer(toggleDrawerList, drawerLists, userAccess)}
          </Drawer>
        </Hidden>
      </div>
    );
  }
}
AppDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppDrawer);
