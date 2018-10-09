import {
  BLINK_TOGGLE,
  CARET_RIGHT,
  CARET_LEFT,
  ARROW_LEFT_TOGGLE,
  ARROW_RIGHT_TOGGLE,
  REFRESH_DISPLAY,
} from '../actions/displayActions';

const initialState = {
  caretBlink: true,
  overFlowLeftVisible: false,
  overFlowRightVisible: false,
  problemIsIndented: false,
  caretPosition: 0,
}

const initialCaretPosition = 0;
const charWidth = 22; // character width relative to svg viewbox
const maxCaretPosition = 18 * charWidth;

export default (state = initialState, action) => {
  let oldCaretPosition = state.caretPosition;
  let newCaretPosition = 0;
  switch (action.type) {

  case BLINK_TOGGLE:
    return {...state,
      caretBlink: !state.caretBlink 
    };
  case CARET_LEFT:
    newCaretPosition = oldCaretPosition - action.payload * charWidth;
    if (newCaretPosition < 0) newCaretPosition = oldCaretPosition;
    return {...state,
      caretPosition: newCaretPosition
    }
  case CARET_RIGHT:
    newCaretPosition = oldCaretPosition + action.payload * charWidth;
    if (newCaretPosition > maxCaretPosition) newCaretPosition = oldCaretPosition
    return { ...state,
      caretPosition: newCaretPosition
    }
  case ARROW_LEFT_TOGGLE: 
    return {...state,
      overFlowLeftVisible: !state.overFlowLeftVisible
    };
  case ARROW_RIGHT_TOGGLE:
    return {...state,
      overFlowRightVisible: !state.overFlowRightVisible
    };
  case REFRESH_DISPLAY:
    return {...state, caretPosition: initialCaretPosition }
  default:
    return state;
  }
}

