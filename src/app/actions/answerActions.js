export const ANS_RENDER = "ANS_RENDER";
export const EVAL = 'EVAL';
export const ZERO_ANS = 'ZERO_ANS';

// import { addToString } from './formActions'; // pweds mag-import ng actions across action creators
import {
  clearAll,
  deleteHandler,
  problemArrayBuilder,
  useLastAns,
  goRight,
  goLeft,
} from './problemActions';

import {
  refreshDisplayState,
  renderDisplayThunk,
} from './displayActions';

export const evaluateProblem = (problemStr) => ({
  type: EVAL,
  payload: problemStr
})

export const zeroAns = () => ({ // makes ans zero, DOES NOT change the array, only the rendered string
  type: ZERO_ANS
})

export const thunkCommandInput = (payload) => (dispatch, getState) => {
  let goRightTriggered = false;
  let goLeftTriggered = false;
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
      goRightTriggered = true;
      break;
    case 'left':
      dispatch(goLeft(1));
      goLeftTriggered = true;
      break;
    default:
      dispatch(problemArrayBuilder(payload));
      break;
  }
  // if (goRightTriggered || goLeftTriggered) {
  //  // do not trigger the renderer, they have their own rule
  // } else 
  dispatch(renderDisplayThunk(getState().problem));
};

  
