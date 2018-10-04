import keyReducer from './keyReducer';
import problemReducer from './problemReducer';

import { combineReducers } from 'redux';

export default combineReducers({
  keys: keyReducer,
  problem: problemReducer,
})