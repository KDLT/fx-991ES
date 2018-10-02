import keyReducer from './keyReducer';
import formReducer from './formReducer';

import { combineReducers } from 'redux';

export default combineReducers({
  keys: keyReducer,
  forms: formReducer,
})