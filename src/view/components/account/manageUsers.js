import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ActiveUsers from './activeUsers';
import InviteForm from './inviteForm';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  main: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2
  }
});

class ManageUsers extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  activeUsers = () => {
    const { getUsers, users } = this.props;
    return <ActiveUsers data={users} getUsers={getUsers} />;
  };
  invites = () => {
    const { addInvite, removeInvite, sendInvites, invites } = this.props;

    return (
      <InviteForm
        addInvite={addInvite}
        removeInvite={removeInvite}
        sendInvites={sendInvites}
        invites={invites}
      />
    );
  };
  renderContent = () => {
    switch (this.state.value) {
      case 0:
        return this.activeUsers();
      case 1:
        return this.invites();
      default:
        return this.invites();
    }
  };
  render() {
    const { classes } = this.props;

    return (
      <main className={classes.main}>
        <Paper className={classes.root}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Users" />
            <Tab label="Send Invites" />
          </Tabs>
        </Paper>
        {this.renderContent()}
      </main>
    );
  }
}

ManageUsers.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ManageUsers);
