export const ADD_TO_ARRAY = 'ADD_TO_ARRAY';
export const AC = 'AC';
export const DEL = 'DEL';
export const GO_RIGHT = 'GO_RIGHT';
export const GO_LEFT = 'GO_LEFT';

export const addToProblemArray = (str) => ({
  type: ADD_TO_ARRAY,
  payload: str
})

export const clearAll = () => ({
  type: AC
})

export const deleteLast = () => ({
  type: DEL
})

export const useLastAns = () => (dispatch, getState) => {
  let lastAns = getState().answer.arr;
  dispatch(addToProblemArray(lastAns))
}

export const goRight = () => ({
  type: GO_RIGHT
})

export const goLeft = () => ({
  type: GO_LEFT
})
