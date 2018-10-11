import { reducer } from 'redux-form';

const form = reducer.plugin({
  Registration: (state, action) => {
    switch (action.type) {
      default:
        return state;
    }
  }
});

export default form;
