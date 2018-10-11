import types from '../types';

const initialState = {
  variant: null,
  message: null,
  open: false
};

const SnackBar = (state = initialState, action) => {
  switch (action.type) {
    case types.OPEN:
      return {
        ...state,
        variant: action.payload.variant,
        message: action.payload.message,
        open: true
      };
    case types.CLOSE:
      return initialState;
    default:
      return state;
  }
};
export default SnackBar;
