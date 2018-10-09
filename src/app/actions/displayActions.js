export const BLINK_TOGGLE = 'BLINK_TOGGLE';
export const ARROW_LEFT_TOGGLE = 'ARROW_LEFT_TOGGLE';
export const ARROW_RIGHT_TOGGLE = 'ARROW_RIGHT_TOGGLE';
export const REFRESH_DISPLAY = 'REFRESH_DISPLAY'
export const CARET_RIGHT = 'CARET_RIGHT';
export const CARET_LEFT = 'CARET_LEFT';

export const caretBlinkToggle = () => ({
  type: BLINK_TOGGLE
})

export const moveCaretRight = (steps) => ({
  type: CARET_RIGHT,
  payload: steps
})

export const moveCaretLeft = (steps) => ({
  type: CARET_LEFT,
  payload: steps
})

export const arrowLeftToggle = () => ({
  type: ARROW_LEFT_TOGGLE
})

export const arrowRightToggle = () => ({
  type: ARROW_RIGHT_TOGGLE
})

export const refreshDisplayState = () => ({
  type: REFRESH_DISPLAY
})

export const leftOverFlowCheck = () => (dispatch, getState) => {
  let visible = getState().display.overFlowLeftVisible;
  let arrayLength = getState().problem.array.length;
  if (arrayLength >= 18 && !visible) {
    // displays arrow left when problem is longer than 18 characters and overflow left is not displayed
    dispatch(arrowLeftToggle());
  } 
  else if (arrayLength < 18 && visible) {
    dispatch(arrowLeftToggle());
  }
}

export const rightOverFlowCheck = () => (dispatch, getState) => {
  
}

export const overFlowArrowCheck = () => (dispatch) => {
  dispatch(leftOverFlowCheck());
}

// export const caretBlinkToggle = () => (dispatch, getState) => {
//   if (getState().)
// }