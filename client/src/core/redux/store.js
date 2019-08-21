import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import rootSaga from './sagas'


let initState = {
};

export default function configureStore(initialState = initState) {

  const middlewares = [];

  // Create the saga middleware
  const sagaMiddleware = createSagaMiddleware();
  middlewares.push(sagaMiddleware);

  // For Redux devtools browser extension
  const composeEnhancers =
    process.env.NODE_ENV == 'development' &&
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

  const enhancers = composeEnhancers(
    applyMiddleware(...middlewares)
  );

  const store = createStore(reducers, initialState, enhancers);

  sagaMiddleware.run(rootSaga);

  return store
}