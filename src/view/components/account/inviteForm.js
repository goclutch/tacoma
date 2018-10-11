// External Imports
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
// External Components
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import QuestionIcon from '@material-ui/icons/Help';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
// Internal Imports
import FormWrapper from '../common/formWrapper';

const styles = theme => ({
  formField: {
    width: '75%'
  },
  formButtonWrapper: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  formButton: {
    margin: 20
  },
  chip: {
    margin: theme.spacing.unit / 2
  },
  button: {
    margin: theme.spacing.unit
  },
  standard: {
    width: 500
  },
  main: {
    paddingTop: theme.spacing.unit * 3
  }
});

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      role: '',
      roleDialogOpen: false
    };
  }
  handleAddInvite = () => {
    const { firstName, lastName, email, role } = this.state;
    const inviteData = { firstName, lastName, email, role };
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      role: ''
    });
    this.props.addInvite(inviteData);
  };
  handleDelete = data => () => {
    this.props.removeInvite(data);
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleClose = () => {
    this.setState({ roleDialogOpen: false });
  };
  handleOpen = () => {
    this.setState({ roleDialogOpen: true });
  };
  renderDialog = () => (
    <Dialog
      open={this.state.roleDialogOpen}
      onClose={this.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {'Questions about roles?'}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <div>
            <ul>
              <li>
                <strong>Administrators</strong> can purchase, assign, and
                complete inspections. Additionally they can invite new users and
                modify existing user's acces.
              </li>
              <li>
                <strong>Evaluators</strong> can be assigned and complete
                inspections.
              </li>
              <li>
                <strong>Logistics</strong> can assign inspections.
              </li>
            </ul>
          </div>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={this.handleClose} color="primary" autoFocus>
          Okay
        </Button>
      </DialogActions>
    </Dialog>
  );
  render() {
    const { classes, sendInvites, invites } = this.props;
    return (
      <main className={classes.main}>
        <Grid spacing={0} container alignItems="center" justify="center">
          <Grid
            spacing={0}
            className={classes['standard']}
            container
            direction="column"
          >
            <Paper className={classes.paper}>
              <div>
                {invites.length > 0 && (
                  <div>
                    <h3>Invites</h3>
                    {invites.map(data => {
                      let avatar = null;
                      return (
                        <Chip
                          key={data.key}
                          avatar={avatar}
                          label={data.label}
                          onDelete={this.handleDelete(data)}
                          className={classes.chip}
                        />
                      );
                    })}
                  </div>
                )}
                <h3>Add Invites</h3>
                {this.renderDialog()}
                <Grid
                  container
                  spacing={24}
                  alignItems="center"
                  justify="center"
                >
                  <Grid item xs={6}>
                    <TextField
                      name="firstName"
                      label="First Name"
                      placeholder="First Name"
                      className={classes.formField}
                      margin="normal"
                      value={this.state.firstName}
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      name="lastName"
                      label="Last Name"
                      placeholder="Last Name"
                      className={classes.formField}
                      margin="normal"
                      value={this.state.lastName}
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="email"
                      label="Email"
                      placeholder="Email"
                      className={classes.formField}
                      margin="normal"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <div>
                      <FormControl>
                        <InputLabel htmlFor="role-simple">Role</InputLabel>
                        <Select
                          value={this.state.role}
                          onChange={this.handleChange}
                          inputProps={{
                            name: 'role',
                            id: 'role-simple'
                          }}
                          autoWidth
                        >
                          <MenuItem value={'admin'}>Administrator</MenuItem>
                          <MenuItem value={'evaluator'}>Evaluator</MenuItem>
                          <MenuItem value={'logistics'}>Logistics</MenuItem>
                        </Select>
                      </FormControl>
                      <IconButton
                        onClick={this.handleOpen}
                        className={classes.button}
                        aria-label="Delete"
                      >
                        <QuestionIcon />
                      </IconButton>
                    </div>
                  </Grid>
                  <Button
                    className={classes.cardSaveButton}
                    onClick={this.handleAddInvite.bind(this)}
                  >
                    Add Invitee
                  </Button>
                </Grid>
                <div className={classes.formButtonWrapper}>
                  <Button
                    onClick={sendInvites}
                    disabled={invites.length < 1}
                    className={classes.formButton}
                  >
                    Send
                  </Button>
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </main>
    );
  }
}

export default withStyles(styles)(Form);
