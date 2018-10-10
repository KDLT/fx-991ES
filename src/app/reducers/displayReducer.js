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
  charWidth: 22,
  caretPosition: 0,
  maxCharAllowed: 19,
}

export default (state = initialState, action) => {
  let oldCaretPosition = state.caretPosition;
  let newCaretPosition = 0;
  let maxCaretPosition = state.charWidth * state.maxCharAllowed;
  switch (action.type) {

    case BLINK_TOGGLE:
      return {...state,
        caretBlink: !state.caretBlink 
      };

    case CARET_LEFT:
      newCaretPosition = oldCaretPosition - action.payload * state.charWidth;
      // if (newCaretPosition < 0) newCaretPosition = oldCaretPosition;
      return {...state,
        caretPosition: newCaretPosition
      };

    case CARET_RIGHT:
      newCaretPosition = oldCaretPosition + action.payload * state.charWidth;
      // if (newCaretPosition > )
      if (newCaretPosition > maxCaretPosition) newCaretPosition = oldCaretPosition
      return { ...state,
        caretPosition: newCaretPosition
      };
    case ARROW_LEFT_TOGGLE: 
      return {...state,
        overFlowLeftVisible: !state.overFlowLeftVisible
      };

    case ARROW_RIGHT_TOGGLE:
      return {...state,
        overFlowRightVisible: !state.overFlowRightVisible
      };

    case REFRESH_DISPLAY:
      return {...state, caretPosition: 0 };

    default:
      return state;
  }
}

