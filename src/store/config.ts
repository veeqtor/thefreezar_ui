/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import logger from 'redux-logger';

import rootReducer from './reducers/index';
import rootSaga from './sagas';

export const history = createBrowserHistory();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

export default function configureStore(env: string | undefined) {
  const store =
    env !== 'production'
      ? createStore(
          rootReducer(history),
          composeEnhancers(applyMiddleware(logger, routerMiddleware(history), sagaMiddleware)),
        )
      : createStore(rootReducer(history), compose(applyMiddleware(routerMiddleware(history), sagaMiddleware)));
  sagaMiddleware.run(rootSaga);
  return store;
}
