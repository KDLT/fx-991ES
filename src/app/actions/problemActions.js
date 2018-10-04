export const ADD_TO_STRING = 'ADD_TO_STRING';
export const AC = 'AC';
export const DEL = 'DEL';
export const GO_RIGHT = 'GO_RIGHT';
export const GO_LEFT = 'GO_LEFT';

export const addToFormString = (str) => ({
  type: ADD_TO_STRING,
  payload: str
})

export const clearAll = () => ({
  type: AC
})

export const deleteLast = () => ({
  type: DEL
})

export const useLastAns = () => (dispatch, getState) => {
  let lastAns = getState().keys.answer.arr.join('');
  dispatch(addToFormString(lastAns))
}

export const goRight = () => ({
  type: GO_RIGHT
})

export const goLeft = () => ({
  type: GO_LEFT
})
