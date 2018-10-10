export const ANS_RENDER = "ANS_RENDER";
export const EVAL = 'EVAL';
export const ZERO_ANS = 'ZERO_ANS';

// import { addToString } from './formActions'; // pweds mag-import ng actions across action creators
import {
  clearAll,
  deleteHandler,
  problemArrayBuilder,
  renderProblemString,
  useLastAns,
  goRight,
  goLeft,
} from './problemActions';

import {
  refreshDisplayState,
  overFlowArrowCheck
} from './displayActions';

export const evaluateProblem = (problemStr) => ({
  type: EVAL,
  payload: problemStr
})

export const zeroAns = () => ({ // makes ans zero, DOES NOT change the array, only the rendered string
  type: ZERO_ANS
})

export const thunkCommandInput = (payload) => (dispatch, getState) => {
  switch (payload) {
    case 'equals':
      dispatch(evaluateProblem(getState().problem.string));
      break;
    case 'ac':
      dispatch(clearAll());
      dispatch(zeroAns());
      dispatch(refreshDisplayState());
      break;
    case 'del':
      dispatch(deleteHandler());
      break;
    case 'ans':
      dispatch(useLastAns());
      break;
    case 'right':
      dispatch(goRight(1));
      break;
    case 'left':
      dispatch(goLeft(1));
      break;
    default:
      dispatch(problemArrayBuilder(payload));
      break;
  }
  // check if overflow arrow/s should be rendered
  dispatch(overFlowArrowCheck());
  dispatch(renderProblemString());
};

  
