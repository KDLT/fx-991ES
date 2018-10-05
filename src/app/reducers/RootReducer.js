import answerReducer from './answerReducer';
import problemReducer from './problemReducer';

import { combineReducers } from 'redux';

export default combineReducers({
  answer: answerReducer,
  problem: problemReducer,
})