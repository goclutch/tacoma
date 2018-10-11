import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

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

class DrawerItem extends React.Component {
  render() {
    const { classes, linkTo, Icon, text } = this.props;
    return (
      <Link className={classes.link} to={linkTo}>
        <ListItem button className={classes.nested}>
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
          <ListItemText inset primary={text} />
        </ListItem>
      </Link>
    );
  }
}

DrawerItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DrawerItem);
