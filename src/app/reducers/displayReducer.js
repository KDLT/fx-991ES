import {
  BLINK_TOGGLE,
  CARET_RIGHT,
  CARET_LEFT,
  ARROW_LEFT_TOGGLE,
  ARROW_RIGHT_TOGGLE,
  REFRESH_DISPLAY,
  RENDER_PROBLEM,
  SHIFT_RENDERED_PROBLEM,
  CARET_INDEX,
  PROBLEM_LENGTH,
  PROBLEM_STATES,
} from '../actions/displayActions';

const initialState = {
  caretBlink: true,
  overFlowLeftVisible: false,
  overFlowRightVisible: false,
  charWidth: 22,
  caretPosition: 0,
  caretIndex: 0,
  problemLength: 0,
  maxCharsLeftOfCaret: 18,
  isRenderShifted: false,
  renderedString: '',
}

export default (state = initialState, action) => {
  let oldCaretPosition = state.caretPosition;
  let newCaretPosition = 0;
  let maxCaretPosition = state.charWidth * state.maxCharsLeftOfCaret;
  let newString = '';
  let caretIndex = state.caretIndex; // now always updated
  let problemLength = state.problemLength;
  let caretGapFromEnd = problemLength - caretIndex;
  let direction = '';
  let sliceSubtract = state.maxCharsLeftOfCaret - 1;
  switch (action.type) {

    case RENDER_PROBLEM:
      newString = action.payload;
      if (state.overFlowLeftVisible) {
        // additional checksss on top of a visible left overflow
        if (caretIndex == problemLength) {
          newString = newString.slice(
            newString.length - sliceSubtract
            );
        }
        else if (caretIndex < problemLength) {
          newString = newString.slice(
            newString.length - (sliceSubtract + caretGapFromEnd)
            );
        }
      }
      return { ...state,
        problemString: newString
      };

    case PROBLEM_STATES:
      return {...state,
        caretIndex: action.payload.caretIndex,
        problemLength: action.payload.string.length
      }
    
    case SHIFT_RENDERED_PROBLEM:
      direction = action.payload;
      if (state.overFlowLeftVisible && direction == 'left') {
        // additional checksss on top of a visible left overflow
        if (state.caretPosition == maxCaretPosition) {
          newString = newString.slice(newString.length - 18)
        }
        else if (caretIndex) {
          
        }
      }
      return {...state,
        renderedString: newString
      }

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
      // if (newCaretPosition > maxCaretPosition) newCaretPosition = oldCaretPosition
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
      return initialState;

    default:
      return state;
  }
}

