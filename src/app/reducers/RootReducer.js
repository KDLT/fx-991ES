import answerReducer from './answerReducer';
import problemReducer from './problemReducer';
import displayReducer from './displayReducer';

import { combineReducers } from 'redux';

export default combineReducers({
  answer: answerReducer,
  problem: problemReducer,
  display: displayReducer
})