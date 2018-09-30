export const RENDER = "RENDER";
export const ADD_TO_ARRAY = 'ADD_TO_ARRAY';
export const EVAL = 'EVAL';
export const AC = 'AC';
export const DEL = 'DEL';

export const stringRender = (whichDisplay) => ({
  type: RENDER,
  display: whichDisplay
})

export const addToArray = (key) => ({
  type: ADD_TO_ARRAY,
  payload: key
})

export const evaluateProblem = () => ({
  type: EVAL
})

export const clearAll = () => ({
  type: AC
})

export const deleteLast = () => ({
  type: DEL
})

export const thunkButtonInput = (payload) => (dispatch) => {
  if (payload == '=') {
    dispatch(evaluateProblem());
    dispatch(stringRender('answer'));
  }
  else if (payload == 'ac') {
    dispatch(clearAll());
  }
  else if (payload == 'del') {
    dispatch(deleteLast());
    // dispatch(stringRender('answer'));
    dispatch(stringRender('problem'));
  }
  else {
    dispatch(addToArray(payload));
    dispatch(stringRender('problem'));
  }
};