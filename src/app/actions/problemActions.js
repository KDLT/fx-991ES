export const ADD_TO_ARRAY = 'ADD_TO_ARRAY';
export const RENDER_PROBLEM = 'RENDER_PROBLEM';
export const AC = 'AC';
export const DEL = 'DEL';
export const GO_RIGHT = 'GO_RIGHT';
export const GO_LEFT = 'GO_LEFT';
export const INDEX_LEFT = 'INDEX_LEFT';
export const INDEX_RIGHT = 'INDEX_RIGHT';

import {
  moveCaretRight,
  moveCaretLeft,
  overFlowArrowCheck,
} from './displayActions';

export const problemArrayBuilder = (payload) => (dispatch) => {
  dispatch(addToProblemArray(payload));
  // handling of caret movement already integrated in goRight
  dispatch(goRight(payload.length));
};

export const addToProblemArray = (str) => ({
  type: ADD_TO_ARRAY,
  payload: str
})

export const renderProblemString = () => ({
  type: RENDER_PROBLEM
})

export const clearAll = () => ({
  type: AC
})

export const deleteLeftOfCaret = () => ({
  type: DEL
})

export const deleteHandler = () => (dispatch, getState) => {
  let problemLength = getState().problem.array.length;
  let maxCharsLeftOfCaret = getState().display.maxCharsLeftOfCaret;
  if (problemLength > 0) {
    dispatch(deleteLeftOfCaret());
    // dispatch(moveIndexLeft(1));
    console.log({problemLength, maxCharsLeftOfCaret})
    dispatch(goLeft(1));
  }
}

export const useLastAns = () => (dispatch, getState) => {
  dispatch(problemArrayBuilder(getState().answer.arr))
}

export const goRight = (steps) => (dispatch, getState) => {
  let maxCharsLeftOfCaret = getState().display.maxCharsLeftOfCaret;
  let caretIndex = getState().problem.caretIndex;
  let problemLength = getState().problem.string.length;
  console.log({newCaretIndex: caretIndex+steps, maxCharsLeftOfCaret})
  if (caretIndex == problemLength) {
    // do nothing, nasa dulo na ng problem
  } else if (caretIndex + steps > maxCharsLeftOfCaret) {
    // index lang ang magmomove dahil sagad na sa allowed ng display
    dispatch(moveIndexRight(steps));
    
  } else {
    dispatch(moveIndexRight(steps));
    dispatch(moveCaretRight(steps));
  };
  dispatch(overFlowArrowCheck());
}

export const goLeft = (steps) => (dispatch, getState) => {
  if (getState().problem.caretIndex <= 0) {
    // do nothing, already at starting position
    // console.log(getState().problem.caretIndex);
  } 
  else if (getState().display.overFlowLeftVisible) {
    // just move the index but not the caret, the problem must move right
    dispatch(moveIndexLeft(steps));
  }
  else {
    dispatch(moveCaretLeft(steps));
    dispatch(moveIndexLeft(steps));
  };
  dispatch(overFlowArrowCheck());
}

export const moveIndexRight = (steps) => ({
  type: INDEX_RIGHT,
  payload: steps
})

export const moveIndexLeft = (steps) => ({
  type: INDEX_LEFT,
  payload: steps
})