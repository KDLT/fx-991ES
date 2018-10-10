export const BLINK_TOGGLE = 'BLINK_TOGGLE';
export const ARROW_LEFT_TOGGLE = 'ARROW_LEFT_TOGGLE';
export const ARROW_RIGHT_TOGGLE = 'ARROW_RIGHT_TOGGLE';
export const REFRESH_DISPLAY = 'REFRESH_DISPLAY'
export const CARET_RIGHT = 'CARET_RIGHT';
export const CARET_LEFT = 'CARET_LEFT';
export const RENDER_PROBLEM = 'RENDER_PROBLEM';
export const CHANGE_MAX = 'CHANGE_MAX';

export const renderProblemDisplay = (array) => ({
  type: RENDER_PROBLEM,
  payload: array
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

export const changeMaxCharAllowed = (max) => ({
  type: CHANGE_MAX,
  payload: max
})

export const updateMaxCharAllowed = () => (dispatch, getState) => {
  let leftOverFlowVisible = getState().display.overFlowLeftVisible;
  let rightOverFlowVisible = getState().display.overFlowRightVisible;
  let caretIndex = getState().problem.caretIndex;
  let problemLength = getState().problem.array.length;
  let oldMaxCharAllowed = getState().display.maxCharAllowed;
  let newMaxCharAllowed = 0;
  if (leftOverFlowVisible && caretIndex == problemLength) {
    newMaxCharAllowed = 19;
  }
  else if (leftOverFlowVisible && caretIndex == problemLength - 1) {
    newMaxCharAllowed = 20;
  }
  else if (leftOverFlowVisible && caretIndex == problemLength - 2) {
    newMaxCharAllowed = 21; // sagad na ito
  }
  else if (leftOverFlowVisible && rightOverFlowVisible) {
    newMaxCharAllowed = 20;
  } else newMaxCharAllowed = oldMaxCharAllowed;

  if (oldMaxCharAllowed !== newMaxCharAllowed) {
    dispatch(changeMaxCharAllowed(newMaxCharAllowed));
  }
}

export const leftOverFlowCheck = () => (dispatch, getState) => {
  let visible = getState().display.overFlowLeftVisible;
  let arrayLength = getState().problem.array.length;
  let maxProblemLength = getState().display.maxCharAllowed
  if (arrayLength >= maxProblemLength && !visible) {
    // displays arrow left when problem is longer than
    // max allowed display characters and overflow left is not displayed
    dispatch(arrowLeftToggle());
  } 
  else if (arrayLength < maxProblemLength && visible) {
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