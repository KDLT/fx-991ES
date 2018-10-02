import {
  ADD_TO_STRING,
  HANDLE_CHANGE,
  AC,
  DEL,
  GO_RIGHT,
  GO_LEFT,
} from '../actions/formActions';

let initialState = {
  string: '',
  cursorPosition: 0,
}

let regexCalc = /\d|\-|\+|\/|\*|\(|\)|\./; // note that this can't have a g flag

export default (state = initialState, action) => {

  let input = document.getElementById('problem-text-input');

  switch (action.type) {

  case ADD_TO_STRING:
    let concatThis = '';
    regexCalc.test(action.payload) ? concatThis = action.payload : concatThis;
    // console.log('ADD_TO_STRING concatThis: ', concatThis);
    return {...state,
      string: state.string.concat(concatThis),
      cursorPosition: state.string.length + 1
    };

  case HANDLE_CHANGE:
    // action.payload here is the whole content of input form
    let result = action.payload;
    let lastCharacter = action.payload[action.payload.length - 1];
    // kung number or operator ang huling input...
    regexCalc.test(lastCharacter) ? result = result : // dagdag lang 
    result = result.slice(0, result.length - 1); // kung hindi, slice ang dulo, ekis
    return { ...state,
      string: result,
      cursorPosition: state.string.length + 1
    };
  
  case AC:
    console.log('clearing all..')
    return {...state,
      string: '',
      cursorPosition: 0,
    };

  case DEL:
    console.log('DEL triggered')
    return {...state,
      string: state.string.slice(0, state.string.length - 1)
    };

  case GO_RIGHT:
    input.setSelectionRange(state.cursorPosition++, state.cursorPosition++);
    return { ...state,
      cursorPosition: state.cursorPosition++,
    };
  
  case GO_LEFT:
    input.setSelectionRange(state.cursorPosition--, state.cursorPosition--);
    return { ...state,
      cursorPosition: state.cursorPosition--,
    };

  default:
    return state
  }
}
