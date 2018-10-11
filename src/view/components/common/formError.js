// External Imports
import React, { PureComponent } from 'react';
import Button from '@material-ui/core/Button';
import Error from '@material-ui/icons/Error';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  container: {
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '75%'
  }
});

class formError extends PureComponent {
  render() {
    const { errorText, classes } = this.props;
    return (
      <div className={classes.container}>
        <Button variant="contained" disabled={true} className={classes.button}>
          <Error className={classes.leftIcon} />
          {errorText}
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(formError);
