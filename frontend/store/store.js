import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';

import RootReducer from '../reducers/root_reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    // applyMiddleware(thunk, logger),
    composeEnhancers(applyMiddleware(thunk, logger))
  )
);

// composeWithDevTools(applyMiddleware(thunk, logger))
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(applyMiddleware(thunk, logger))

export default configureStore;
