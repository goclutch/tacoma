// External Imports
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Reporting from './reporting';
// Internal Imports

const styles = theme => ({
  main: {
    backgroundColor: '#eeeeee',
    width: '100%',
    height: '100%'
  },

  buttonWrapper: {
    width: 200
  },
  button: {
    margin: theme.spacing.unit
  },
  buttonContent: {
    margin: theme.spacing.unit
  },
  icon: {
    fontSize: 54
  },
  title: {
    flex: 1
  }
});

class Dashboard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.main}>
        <Reporting />
      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);
