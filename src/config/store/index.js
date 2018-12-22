import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import Reactotron from 'reactotron-react-js';
import { routerMiddleware } from 'react-router-redux';

export default function configureStore(initialState, history) {
  const routerMW = routerMiddleware(history);
  const rootReducer = (state, action) => {
    return reducer(state, action);
  };
  const store = Reactotron.createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(routerMW))
  );
  return store;
}
