// External Imports
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Badge from '@material-ui/core/Badge';
import { Link } from 'react-router-dom';
// Internal Imports

const styles = theme => ({
  main: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2
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
    flex: 1,
    marginBottom: theme.spacing.unit,
    color: 'gray'
  },
  margin: {
    margin: 0
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  }
});

const renderMetricBox = (title, count, Icon, linkTo, classes, index) => (
  <Grid key={index} className={classes.buttonWrapper} item>
    <Paper>
      <Link className={classes.link} to={linkTo}>
        <Button className={classes.button} color="primary">
          <Grid
            className={classes.buttonContent}
            container
            alignItems="center"
            justify="center"
            direction="column"
          >
            <Badge
              className={classes.margin}
              badgeContent={count}
              color="secondary"
            >
              <Icon className={classes.icon} />
            </Badge>
            {title}
          </Grid>
        </Button>
      </Link>
    </Paper>
  </Grid>
);
const renderMetricItems = (metrics, classes) =>
  metrics.map((metric, index) =>
    renderMetricBox(
      metric.title,
      metric.count,
      metric.icon,
      metric.linkTo,
      classes,
      index
    )
  );
class Reporting extends Component {
  render() {
    const { classes, title, metrics } = this.props;
    return (
      <div className={classes.main}>
        <Typography variant="title" color="inherit" className={classes.title}>
          {title}
        </Typography>
        <Grid container alignItems="center" justify="flex-start" spacing={32}>
          {renderMetricItems(metrics, classes)}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Reporting);
