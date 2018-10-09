import {
  ADD_TO_ARRAY,
  RENDER_PROBLEM,
  AC,
  DEL,
  INDEX_RIGHT,
  INDEX_LEFT
} from '../actions/problemActions';

const initialState = {
  string: '',
  renderedString: '',
  array: [],
  caretIndex: 0,
}

const regexCalc = /\d|\-|\+|\/|\*|\(|\)|\./; // note that this can't have a g flag



export default (state = initialState, action) => {
  let concatThis = '';
  let newArray = [];
  let newString = '';
  let oldCaretIndex = state.caretIndex;
  let newCaretIndex = 0;

  switch (action.type) {

    case ADD_TO_ARRAY: // also creates a string version of the problem
      // console.log('ADD_TO_ARRAY payload: ', action.payload);
      // check if payload is valid
      regexCalc.test(action.payload) ? concatThis = action.payload : concatThis;
      // console.log('concatThis after regex check: ', concatThis);
      // kung may laman ang concatThis:
      if (concatThis) {
        newArray = state.array.slice(0, state.caretIndex)
                        .concat(concatThis)
                        .concat(state.array.slice(state.caretIndex));
        // console.log('concatenating', concatThis);
      } else { // kung blanko ang concatThis:
        newArray = state.array; 
      };
      return {...state,
        array: newArray,
        string: newArray.join('')
      };
    
    case RENDER_PROBLEM:
      newString = state.array.join('');
      if (newString.length >= 18) {
        newString = newString.slice(newString.length - 17);
        console.log('sliced String: ', newString)
      }
      return {...state,
        renderedString: newString
      }
    case INDEX_LEFT:
      if (oldCaretIndex - action.payload < 0) {
        newCaretIndex = oldCaretIndex;
      } else newCaretIndex = oldCaretIndex - action.payload
      return {...state,
        caretIndex: newCaretIndex
      }

    case INDEX_RIGHT:
      if (oldCaretIndex + action.payload > state.array.length) {
        newCaretIndex = oldCaretIndex;
      } else newCaretIndex = oldCaretIndex + action.payload;
      return {...state,
        caretIndex: newCaretIndex
      }

    case AC:
      console.log('clearing all..')
      return {...state,
        string: '',
        array: [],
        caretIndex: 0,
      };

    case DEL: // currently limited to deleting the most recent input
      // console.log('DEL triggered')
      newArray = state.array.slice(0, state.caretIndex - 1)
                            .concat(state.array.slice(state.caretIndex));
      return { ...state,
        array: newArray,
        string: newArray.join('')
      };

    default:
      return state
  }
}
