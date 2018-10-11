import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Purchase from '@material-ui/icons/AddShoppingCart';
import Assign from '@material-ui/icons/AssignmentInd';
import Survey from '@material-ui/icons/RateReview';
import Review from '@material-ui/icons/AssignmentLate';
import Revision from '@material-ui/icons/AssignmentReturn';
import InProgress from '@material-ui/icons/Assignment';
import Completed from '@material-ui/icons/AssignmentTurnedIn';
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

class ReportList extends React.Component {
  state = { open: false };

  handleClick = () => {
    this.props.toggleDrawerList('report');
  };

  render() {
    const { classes, drawerLists, userAccess } = this.props;
    const open = drawerLists['report'];
    return (
      <div className={classes.root}>
        <List component="nav">
          <ListItem button onClick={this.handleClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText inset primary="Reports" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {userAccess.reportsPurchase && (
                <DrawerItem
                  linkTo="/reports-purchase"
                  Icon={Purchase}
                  text="Purchase"
                />
              )}
              {userAccess.reportsAssign && (
                <DrawerItem
                  linkTo="/reports-assign"
                  Icon={Assign}
                  text="Assign"
                />
              )}
              {userAccess.surveyReview && (
                <DrawerItem
                  linkTo="/survey-review"
                  Icon={Survey}
                  text="Survey Review"
                />
              )}
              {userAccess.reportsInProgress && (
                <DrawerItem
                  linkTo="/reports-in-progress"
                  Icon={InProgress}
                  text="In Progress"
                />
              )}
              {userAccess.reportsReview && (
                <DrawerItem
                  linkTo="/reports-review"
                  Icon={Review}
                  text="Review"
                />
              )}
              {userAccess.reportsRevise && (
                <DrawerItem
                  linkTo="/reports-revise"
                  Icon={Revision}
                  text="Revisions"
                />
              )}
              {userAccess.reportsCompleted && (
                <DrawerItem
                  linkTo="/reports-completed"
                  Icon={Completed}
                  text="Completed"
                />
              )}
            </List>
          </Collapse>
        </List>
      </div>
    );
  }
}

ReportList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ReportList);
