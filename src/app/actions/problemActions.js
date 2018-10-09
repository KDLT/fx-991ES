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
} from './displayActions';

export const problemArrayBuilder = (payload) => (dispatch, getState) => {
  dispatch(addToProblemArray(payload));
  if (getState().display.overFlowLeftVisible) {
    dispatch(moveIndexRight(payload.length));
  } else dispatch(goRight(payload.length));
}

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
  dispatch(deleteLeftOfCaret());
  dispatch(moveIndexLeft(1));
  if (getState().problem.array.length < 18) {
    // this is ONLY IF there is NO OVERFLOW
    dispatch(moveCaretLeft(1));
  }

}

export const useLastAns = () => (dispatch, getState) => {
  let lastAns = getState().answer.arr;
  dispatch(addToProblemArray(lastAns))
}

export const goRight = (steps) => (dispatch, getState) => {
  let problemLength = getState().problem.array.length;
  let caretPos = getState().problem.caretIndex;
  if (caretPos + steps > problemLength) {
    // do nothing, it's already at the tip
  } else {
    dispatch(moveIndexRight(steps));
    dispatch(moveCaretRight(steps));
  }
}

export const goLeft = (steps) => (dispatch, getState) => {
  if (getState().problem.caretIndex <= 0) {
    // do nothing, already at starting position
    console.log(getState().problem.caretIndex);
  } else {
    dispatch(moveCaretLeft(steps));
    dispatch(moveIndexLeft(steps));
  } 
}

export const moveIndexRight = (steps) => ({
  type: INDEX_RIGHT,
  payload: steps
})

export const moveIndexLeft = (steps) => ({
  type: INDEX_LEFT,
  payload: steps
})