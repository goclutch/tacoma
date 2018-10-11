import types from '../types';

const initialState = {
  stripeToken: null
};

const billing = (state = initialState, action) => {
  switch (action.type) {
    case types.PERSIST_STRIPE_TOKEN:
      return { ...state, stripeToken: action.payload.stripeToken };
    case types.DELETE_STRIPE_TOKEN:
      return initialState;
    default:
      return state;
  }
};
export default billing;
