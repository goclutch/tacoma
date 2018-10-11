import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  formWrapper: {
    margin: 25
  },
  standard: {
    width: 300
  },
  large: {
    width: 500
  },
  largeMax: {
    maxWidth: 1000
  },
  paper: {
    paddingBottom: theme.spacing.unit * 2
  }
});

class FormWrapper extends Component {
  render() {
    const { classes, children, size } = this.props;

    return (
      <div className={classes.formWrapper}>
        <Grid spacing={0} container alignItems="center" justify="center">
          <Grid
            spacing={0}
            className={classes[size]}
            container
            direction="column"
          >
            <Paper className={classes.paper}>{children}</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(FormWrapper);
