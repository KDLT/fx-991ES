import {
  ANS_RENDER,
  EVAL,
  ZERO_ANS,
} from '../actions/keyActions';

let initialState = {
  answer: {
    str: '0',
    arr: ['0']
  }
}

export default (state=initialState, action) => {
  switch (action.type) {

    case ANS_RENDER:
      return {...state,
        answer: {
          ...state.answer,
          str: state.answer.arr.join('') // no commas yet
        }
      };

    case EVAL:
      let result = eval(action.payload).toString();
      let resArr = [];
      for (let numStr of result) {
        resArr.push(numStr);
      }
      return {...state,
        answer: {
          ...state.answer,
          arr: resArr
        }
      };
    
    case ZERO_ANS:
      return {...state,
        answer: {
          ...state.answer,
          str: '0'
        }
      }

    default:
      return state;
  }
};