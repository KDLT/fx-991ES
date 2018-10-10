export const BLINK_TOGGLE = 'BLINK_TOGGLE';
export const ARROW_LEFT_TOGGLE = 'ARROW_LEFT_TOGGLE';
export const ARROW_RIGHT_TOGGLE = 'ARROW_RIGHT_TOGGLE';
export const REFRESH_DISPLAY = 'REFRESH_DISPLAY'
export const CARET_RIGHT = 'CARET_RIGHT';
export const CARET_LEFT = 'CARET_LEFT';
export const RENDER_PROBLEM = 'RENDER_PROBLEM';
export const PROBLEM_STATES = 'PROBLEM_STATES';
export const SHIFT_RENDERED_PROBLEM = 'SHIFT_RENDERED_PROBLEM';

export const renderProblemString = (string) => ({
  type: RENDER_PROBLEM,
  payload: string
});

export const subscribeToProblemStates = (problemState) => ({
  type: PROBLEM_STATES,
  payload: problemState
});

export const renderDisplayThunk = (problemState) => (dispatch) => {
  dispatch(subscribeToProblemStates(problemState));
  dispatch(renderProblemString(problemState.string))
};

export const moveCaretRight = (steps) => ({
  type: CARET_RIGHT,
  payload: steps
});

export const moveCaretLeft = (steps) => ({
  type: CARET_LEFT,
  payload: steps
});

export const arrowLeftToggle = () => ({
  type: ARROW_LEFT_TOGGLE
});

export const arrowRightToggle = () => ({
  type: ARROW_RIGHT_TOGGLE
});

export const refreshDisplayState = () => ({
  type: REFRESH_DISPLAY
});

export const changeMaxCharAllowed = (max) => ({
  type: CHANGE_MAX,
  payload: max
});

export const leftOverFlowCheck = () => (dispatch, getState) => {
  // let maxCaretPosition = getState().display.maxCharsLeftOfCaret * getState().display.charWidth;
  let actualCaretPosition = getState().display.caretPosition;
  let supposedCaretPosition = getState().problem.caretIndex * getState().display.charWidth;
  console.log({supposedCaretPosition, actualCaretPosition});
  if (supposedCaretPosition > actualCaretPosition) { 
    // hindi na tugma ang caretIndex sa caretPosition dahil pumreno sa 19th character
    // sumobra ang index sa dapat na position so natulak pakaliwa 'yung problem
    if (!getState().display.overFlowLeftVisible) dispatch(arrowLeftToggle());
  }
  else if (supposedCaretPosition == actualCaretPosition) {
    if (getState().display.overFlowLeftVisible) dispatch(arrowLeftToggle());
  }
};

export const rightOverFlowCheck = () => (dispatch, getState) => {
  
};

export const overFlowArrowCheck = () => (dispatch) => {
  dispatch(leftOverFlowCheck());
};

// export const caretBlinkToggle = () => (dispatch, getState) => {
//   if (getState().)
// }

// export const updateMaxCharAllowed = () => (dispatch, getState) => {
//   let leftOverFlowVisible = getState().display.overFlowLeftVisible;
//   let rightOverFlowVisible = getState().display.overFlowRightVisible;
//   let caretIndex = getState().problem.caretIndex;
//   let problemLength = getState().problem.array.length;
//   let oldMaxCharAllowed = getState().display.maxCharsLeftOfCaret;
//   let newMaxCharAllowed = 0;
//   if (leftOverFlowVisible && caretIndex == problemLength) {
//     newMaxCharAllowed = 19;
//   } else if (leftOverFlowVisible && caretIndex == problemLength - 1) {
//     newMaxCharAllowed = 20;
//   } else if (leftOverFlowVisible && caretIndex == problemLength - 2) {
//     newMaxCharAllowed = 21; // sagad na ito
//   } else if (leftOverFlowVisible && rightOverFlowVisible) {
//     newMaxCharAllowed = 20;
//   } else newMaxCharAllowed = oldMaxCharAllowed;

//   if (oldMaxCharAllowed !== newMaxCharAllowed) {
//     dispatch(changeMaxCharAllowed(newMaxCharAllowed));
//   }
// }