import {
  BLINK_ON,
  BLINK_OFF
} from '../actions/displayActions';

const initialState = {
  caretBlink: true,
}

export default (state = initialState, action) => {
  switch (action.type) {

  case BLINK_ON:
    return {...state,
      caretBlink: true
    };
  case BLINK_OFF:
    return {... state,
      caretBlink: false 
    };
  default:
    return state;
  }
}
