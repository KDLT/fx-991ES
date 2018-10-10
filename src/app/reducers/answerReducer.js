import {
  EVAL,
  ZERO_ANS,
} from '../actions/answerActions';

let initialState = {
  str: '0',
  arr: ['0']
}

export default (state=initialState, action) => {
  switch (action.type) {

    case EVAL: // integrated the rendering of answer string
      let result = eval(action.payload).toString();
      let resArr = [];
      for (let numStr of result) resArr.push(numStr);
      return {...state,
        arr: resArr,
        str: resArr.join('')
      };
    
    case ZERO_ANS:
      return {...state,
        str: '0'
      }

    default:
      return state;
  }
};