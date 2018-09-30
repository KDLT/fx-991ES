import {
  RENDER,
  ADD_TO_ARRAY,
  EVAL,
  AC,
  DEL
} from '../actions/keyActions';

let initialState = {
  problem: {
    str: '',
    arrToRender: [],
    arrToCalculate: [] // different because of the minus and plus signs
  },
  answer: {
    str: '0',
    arr: ['0']
  }
}

const operatorConverter = {
  '\u00f7': '/',
  '\u00d7': '*'
}

export default (state=initialState, action) => {
  switch (action.type) {
    case RENDER:
      if (action.display == 'problem') {
        return { ...state,
          problem: {
            ...state.problem,
            str: state.problem.arrToRender.join('')
          }
        };
      } else {
        return {...state,
          answer: {
            ...state.answer,
            str: state.answer.arr.join('') // no commas yet
          }        
        };
      };
      
    case ADD_TO_ARRAY:
      let concatThis = '';
      if (operatorConverter.hasOwnProperty(action.payload)) {
        concatThis = operatorConverter[action.payload];
      } else concatThis = action.payload
      console.log('concatThis: ', concatThis);
      return {...state,
        problem: {
          ...state.problem,
          arrToRender: state.problem.arrToRender.concat(action.payload),
          arrToCalculate: state.problem.arrToCalculate.concat(concatThis)
        }
      };

    case EVAL:
      let result = eval(state.problem.arrToCalculate.join('')).toString();
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

    case AC:
      console.log('clearing all..')
      return {...state,
        problem: { str: '', arrToRender: [], arrToCalculate: []},
        answer: { ...state.answer, str: '0' }
        // ac would not delete the array version of the answer
      };

    case DEL:
      return {...state,
        problem: {
          ...state.problem,
          arrToRender: state.problem.arrToRender.slice(0, state.problem.arrToRender.length - 1),
          arrToCalculate: state.problem.arrToCalculate.slice(0, state.problem.arrToCalculate.length - 1)
        }
      };

    default:
      return state;
  }
};