// External Imports
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter as Router } from 'react-router-redux';
// Internal Imports
import { authTypes } from './state/auth';
import Routes from './routes';
import Views from './view';
import configureStore from './config/store';
import './App.css';

const history = createHistory();

let store = configureStore({}, history);

const selectTheme = state => state.theme;

// Check if a token is present
const token = localStorage.getItem('token');
if (token) {
  store.dispatch({
    type: authTypes.AUTHENTICATED,
    payload: { token }
  });
}
const listenToTheme = () => {
  const storedTheme = selectTheme(store.getState());
  return createMuiTheme(storedTheme);
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <MuiThemeProvider theme={listenToTheme()}>
            <div className="App" style={{ backgroundColor: '#eee' }}>
              <Views.AppBar />
              <Routes />
            </div>
          </MuiThemeProvider>
        </Router>
      </Provider>
    );
  }
}

export default App;
