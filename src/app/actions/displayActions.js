export const BLINK_ON = 'BLINK_ON';
export const BLINK_OFF = 'BLINK_OFF';

export const caretBlinkOn = () => ({
  type: BLINK_ON,
})

export const caretBlinkOff = () => ({
  type: BLINK_OFF,
})

// export const caretBlinkToggle = () => (dispatch, getState) => {
//   if (getState().)
// }