export const ANS_RENDER = "ANS_RENDER";
export const EVAL = 'EVAL';
export const ZERO_ANS = 'ZERO_ANS';

// import { addToString } from './formActions'; // pweds mag-import ng actions across action creators
import {
  clearAll,
  deleteLeftOfCaret,
  addToProblemArray,
  useLastAns,
  goRight,
  goLeft,
} from './problemActions';

export const ansStringRender = () => ({
  type: ANS_RENDER
})

export const evaluateProblem = (problemStr) => ({
  type: EVAL,
  payload: problemStr
})

export const zeroAns = () => ({ // makes ans zero, DOES NOT change the array, only the rendered string
  type: ZERO_ANS
})

export const thunkCommandInput = (payload) => (dispatch, getState) => {
  switch (payload) {
    case '=':
      dispatch(evaluateProblem(getState().problem.string));
      dispatch(ansStringRender());
      break;
    case 'ac':
      dispatch(clearAll());
      dispatch(zeroAns());
      break;
    case 'del':
      dispatch(deleteLeftOfCaret());
      dispatch(goLeft());
      break;
    case 'ans':
      dispatch(useLastAns());
      break;
    case 'right':
      dispatch(goRight());
      break;
    case 'left':
      dispatch(goLeft());
      break;
    default:
      dispatch(addToProblemArray(payload));
      // dispatch(addToProblemString(payload));
      break;
  }
};

  