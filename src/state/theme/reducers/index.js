// import types from '../types';

const initialState = {
  palette: {
    primary: {
      light: '#33ab9f',
      main: '#009688',
      dark: '#00695f'
    },
    secondary: {
      light: '#5393ff',
      main: '#2979ff',
      dark: '#1c54b2'
    }
  }
};

const theme = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default theme;
