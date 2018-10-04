import {
  ADD_TO_STRING,
  AC,
  DEL,
  GO_RIGHT,
  GO_LEFT,
} from '../actions/problemActions';

let initialState = {
  string: '',
  initialCaretPosition: 90,
  caretPosition: 90,
  charWidth: 22,
}

let regexCalc = /\d|\-|\+|\/|\*|\(|\)|\./; // note that this can't have a g flag

export default (state = initialState, action) => {

  switch (action.type) {

    case GO_RIGHT:
      return { ...state };

    case GO_LEFT:
      return { ... state };

    case ADD_TO_STRING:
      let concatThis = '';
      let caretDelta = 0;
      regexCalc.test(action.payload) ? concatThis = action.payload : concatThis;
      // console.log('ADD_TO_STRING concatThis: ', concatThis);
      concatThis ? caretDelta = state.charWidth : caretDelta;
      return {...state,
        string: state.string.concat(concatThis),
        caretPosition: state.caretPosition + caretDelta
      };
    
    case AC:
      console.log('clearing all..')
      return {...state,
        string: '',
        caretPosition: state.initialCaretPosition,
      };

    case DEL:
      console.log('DEL triggered')
      return {...state,
        string: state.string.slice(0, state.string.length - 1),
        caretPosition: state.caretPosition - state.charWidth,
      };

    default:
      return state
  }
}
