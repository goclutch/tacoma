import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import createSagaMiddleware from 'redux-saga';
import Reactotron from 'reactotron-react-js';
import { routerMiddleware } from 'react-router-redux';
import reducer from '../../state';
import rootSaga from '../../sagas';
import { authTypes } from '../../state/auth';
export default function configureStore(initialState, history) {
  const routerMW = routerMiddleware(history);

  const sagaMiddleware = createSagaMiddleware({});

  const rootReducer = (state, action) => {
    if (action.type === authTypes.UNAUTHENTICATED) {
      state = undefined;
    }
    return reducer(state, action);
  };
  const store = Reactotron.createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware, routerMW))
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
