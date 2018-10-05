import {
  ANS_RENDER,
  EVAL,
  ZERO_ANS,
} from '../actions/answerActions';

let initialState = {
  str: '0',
  arr: ['0']
}

export default (state=initialState, action) => {
  switch (action.type) {

    case ANS_RENDER:
      return {...state,
        str: state.arr.join('') // no commas yet
      };

    case EVAL:
      let result = eval(action.payload).toString();
      let resArr = [];
      for (let numStr of result) {
        resArr.push(numStr);
      }
      return {...state,
        arr: resArr
      };
    
    case ZERO_ANS:
      return {...state,
        str: '0'
      }

    default:
      return state;
  }
};