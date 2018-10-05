import {
  ADD_TO_STRING,
  ADD_TO_ARRAY,
  AC,
  DEL,
  GO_RIGHT,
  GO_LEFT,
} from '../actions/problemActions';

const initialState = {
  string: '',
  array: [],
  caretIndex: 0,
  caretPosition: 0,
}
const initialCaretPosition = 0;
const regexCalc = /\d|\-|\+|\/|\*|\(|\)|\./; // note that this can't have a g flag
const charWidth = 22; // character width relative to svg viewbox

export default (state = initialState, action) => {
  let concatThis = '';
  let caretDelta = 0;
  let newArray = [];
  let newCaretIndex = state.caretIndex;
  let newCaretPosition = state.caretPosition;

  switch (action.type) {

    case ADD_TO_ARRAY: // also renders the string upon updating problem array
      // console.log('ADD_TO_ARRAY payload: ', action.payload);
      // check if payload is valid
      regexCalc.test(action.payload) ? concatThis = action.payload : concatThis;
      // console.log('concatThis after regex check: ', concatThis);
      // kung may laman ang concatThis:
      if (concatThis) {
        caretDelta = charWidth * concatThis.length;
        newCaretIndex = state.caretIndex + concatThis.length;
        newArray = state.array.slice(0, state.caretIndex)
                        .concat(concatThis)
                        .concat(state.array.slice(state.caretIndex));
      } else { // kung blanko ang concatThis:
        caretDelta; // 0 delta
        newCaretIndex; // newCaretIndex same as old one
        newArray = state.array; 
      }
      // console.log({newArray, caretDelta});
      return {...state,
        array: newArray,
        string: newArray.join(''),
        caretPosition: state.caretPosition + caretDelta,
        caretIndex: newCaretIndex,
      };

    case GO_RIGHT:
      if (state.caretIndex < state.array.length) {
        newCaretIndex += 1;
        newCaretPosition += charWidth;
      };
      return { ...state,
        caretIndex: newCaretIndex,
        caretPosition: newCaretPosition,
      };

    case GO_LEFT:
      if (state.caretIndex > 0) {
        newCaretIndex -= 1;
        newCaretPosition -= charWidth;
      };
      return { ... state, 
        caretIndex: newCaretIndex,
        caretPosition: newCaretPosition,
      };

    case AC:
      console.log('clearing all..')
      return {...state,
        string: '',
        array: [],
        caretPosition: initialCaretPosition,
        caretIndex: 0,
      };

    case DEL: // currently limited to deleting the most recent input
      // console.log('DEL triggered')
      newArray = state.array.slice(0, state.caretIndex - 1)
                            .concat(state.array.slice(state.caretIndex));
      return { ...state,
        array: newArray,
        string: newArray.join(''),
        // caretPosition: state.caretPosition - charWidth,
        // caretIndex: state.caretIndex - 1,
      };

    default:
      return state
  }
}
