import keyReducer from './keyReducer';

import { combineReducers } from 'redux';

export default combineReducers({
  keys: keyReducer
})