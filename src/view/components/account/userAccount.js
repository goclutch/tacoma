import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ProfileForm from './profileForm';
import ChangePassword from './changePassword';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

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

class CenteredTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  renderPending = () => (
    <Paper className={this.props.classes.statusContainer}>
      <Typography
        variant="title"
        color="inherit"
        className={this.props.classes.title}
      >
        Retrieving Invite Data
      </Typography>
      <CircularProgress className={this.props.classes.progress} size={50} />
    </Paper>
  );
  profileForm = () => {
    const {
      updateUserData,
      getUserData,
      clearUserData,
      profileData
    } = this.props;
    return (
      <ProfileForm
        handleSubmit={updateUserData}
        getUserData={getUserData}
        clearUserData={clearUserData}
        initialValues={profileData}
      />
    );
  };
  changePasswordForm = () => {
    const { updatePassword } = this.props;
    return <ChangePassword handleSubmit={updatePassword} />;
  };
  renderContent = () => {
    switch (this.state.value) {
      case 0:
        return this.profileForm();
      case 1:
        return this.changePasswordForm();
      default:
        return this.invites();
    }
  };
  componentDidMount = () => {
    this.props.getUserData();
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
            <Tab label="Profile" />
            <Tab label="Change Password" />
          </Tabs>
        </Paper>
        {this.renderContent()}
      </main>
    );
  }
}

CenteredTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredTabs);
