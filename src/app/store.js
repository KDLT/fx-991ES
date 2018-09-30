import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import RootReducer from './reducers/RootReducer';

export default createStore(
  RootReducer,
  applyMiddleware(thunk, logger)
);