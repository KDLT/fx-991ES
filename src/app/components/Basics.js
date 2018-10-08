import React from 'react'

export default (props) => {
  return (
    <g id="basics">
      <g id="del" data-payload={'del'} data-key={'Backspace'} onClick={props.handleClick}>
        <path className="btn btn-del-ac" d="M391.83,889h62.31A13.84,13.84,0,0,1,468,902.84v24.33A26.82,26.82,0,0,1,441.16,954H404.81A26.82,26.82,0,0,1,378,927.18V902.84A13.84,13.84,0,0,1,391.83,889Z" />
        <path className="btn btn-text" d="M394.12,906.45h6.64c7.87,0,12.31,4.42,12.31,12.74s-4.44,12.93-12.12,12.93h-6.83Zm6.37,22.48c5.58,0,8.56-3.34,8.56-9.74s-3-9.55-8.56-9.55H398v19.29Z" />
        <path className="btn btn-text" d="M418.42,906.45h15.12v3.3H422.33v7.31h9.47v3.3h-9.47v8.46h11.6v3.3H418.42Z" />
        <path className="btn btn-text" d="M439.27,906.45h3.91v22.37h10.93v3.3H439.27Z" />
      </g>
      <g id="ac" data-payload={'ac'} data-key={'Escape'} onClick={props.handleClick}>
        <path className="btn btn-del-ac" d="M496.83,889h62.31A13.84,13.84,0,0,1,573,902.84v24.33A26.82,26.82,0,0,1,546.16,954H509.81A26.82,26.82,0,0,1,483,927.18V902.84A13.84,13.84,0,0,1,496.83,889Z" />
        <path className="btn btn-text" d="M515.26,906.45h4.51l8.52,25.67h-4.14l-4.19-14c-.87-2.79-1.65-5.66-2.44-8.55h-.16c-.75,2.91-1.54,5.76-2.41,8.55l-4.23,14h-4Zm-3.77,15.19h12v3.09h-12Z" />
        <path className="btn btn-text" d="M529.88,919.34C529.88,911,535,906,541.45,906a9.89,9.89,0,0,1,7.23,3.21l-2.12,2.53a6.82,6.82,0,0,0-5-2.32c-4.52,0-7.63,3.75-7.63,9.83s2.92,9.94,7.51,9.94a7.46,7.46,0,0,0,5.71-2.76l2.11,2.46a10.08,10.08,0,0,1-8,3.72C534.83,932.59,529.88,927.75,529.88,919.34Z" />
      </g>
      <g id="decimal" data-payload={'.'} data-key={'.'} onClick={props.handleClick}>
        <path className="btn btn-regular" d="M182.33,1174.5h62.31a13.84,13.84,0,0,1,13.84,13.84v24.33a26.82,26.82,0,0,1-26.82,26.82H195.31a26.82,26.82,0,0,1-26.82-26.82v-24.33A13.84,13.84,0,0,1,182.33,1174.5Z" />
        <path className="btn btn-text" d="M209.56,1218.2a3.43,3.43,0,1,1,3.42,3.58A3.45,3.45,0,0,1,209.56,1218.2Z" />
      </g>
      <g id="ans" data-payload={'ans'} data-key={'='} onClick={props.handleClick}>
        <path className="btn btn-regular" d="M392.33,1174.5h62.31a13.84,13.84,0,0,1,13.84,13.84v24.33a26.82,26.82,0,0,1-26.82,26.82H405.31a26.82,26.82,0,0,1-26.82-26.82v-24.33A13.84,13.84,0,0,1,392.33,1174.5Z" />
        <path className="btn btn-text" d="M403,1192.44h4.21l8,24h-3.87l-3.92-13.08c-.81-2.61-1.54-5.29-2.28-8h-.15c-.7,2.72-1.43,5.38-2.25,8l-3.95,13.08H395Zm-3.52,14.19h11.16v2.89H399.46Z" />
        <path className="btn btn-text" d="M418,1198.54h3l.28,2.49h.11c1.66-1.61,3.49-2.93,5.94-2.93,3.79,0,5.48,2.51,5.48,7.05v11.27h-3.62v-10.81c0-3.13-.92-4.4-3.07-4.4-1.7,0-2.85.85-4.48,2.49v12.72H418Z" />
        <path className="btn btn-text" d="M436.36,1214.37l1.73-2.33a8,8,0,0,0,5.1,2c2.15,0,3.19-1.08,3.19-2.45,0-1.67-2-2.41-4-3.14-2.43-.9-5.18-2.19-5.18-5.19s2.4-5.21,6.34-5.21a9.36,9.36,0,0,1,5.75,2.07l-1.69,2.26a6.71,6.71,0,0,0-4-1.57c-2,0-3,1-3,2.27,0,1.55,1.87,2.14,3.85,2.88,2.5.94,5.29,2,5.29,5.41,0,3-2.37,5.44-6.74,5.44A11,11,0,0,1,436.36,1214.37Z" />
        <path className="btn btn-text" d="M403,1192.44h4.21l8,24h-3.87l-3.92-13.08c-.81-2.61-1.54-5.29-2.28-8h-.15c-.7,2.72-1.43,5.38-2.25,8l-3.95,13.08H395Zm-3.52,14.19h11.16v2.89H399.46Z" />
        <path className="btn btn-text" d="M418,1198.54h3l.28,2.49h.11c1.66-1.61,3.49-2.93,5.94-2.93,3.79,0,5.48,2.51,5.48,7.05v11.27h-3.62v-10.81c0-3.13-.92-4.4-3.07-4.4-1.7,0-2.85.85-4.48,2.49v12.72H418Z" />
        <path className="btn btn-text" d="M436.36,1214.37l1.73-2.33a8,8,0,0,0,5.1,2c2.15,0,3.19-1.08,3.19-2.45,0-1.67-2-2.41-4-3.14-2.43-.9-5.18-2.19-5.18-5.19s2.4-5.21,6.34-5.21a9.36,9.36,0,0,1,5.75,2.07l-1.69,2.26a6.71,6.71,0,0,0-4-1.57c-2,0-3,1-3,2.27,0,1.55,1.87,2.14,3.85,2.88,2.5.94,5.29,2,5.29,5.41,0,3-2.37,5.44-6.74,5.44A11,11,0,0,1,436.36,1214.37Z" />
      </g>
      <g id="equals" data-payload={'equals'} data-key={'Enter'} onClick={props.handleClick}>
        <path className="btn btn-regular" d="M497.33,1174.5h62.31a13.84,13.84,0,0,1,13.84,13.84v24.33a26.82,26.82,0,0,1-26.82,26.82H510.31a26.82,26.82,0,0,1-26.82-26.82v-24.33A13.84,13.84,0,0,1,497.33,1174.5Z" />
        <path className="btn btn-text" d="M517.49,1199.45h21V1203h-21Zm0,10.55h21v3.55h-21Z" />
      </g>
      <g id="exp" data-payload={'*10\u02E3'} data-key={'e'} onClick={props.handleClick}>
        <path className="btn btn-regular" d="M287.33,1174.5h62.31a13.84,13.84,0,0,1,13.84,13.84v24.33a26.82,26.82,0,0,1-26.82,26.82H300.31a26.82,26.82,0,0,1-26.82-26.82v-24.33A13.84,13.84,0,0,1,287.33,1174.5Z" />
        <path className="btn btn-text" d="M284.66,1213.62l6.06-6.2-6.06-6.19,1.9-1.94,6.06,6.24,6.06-6.24,1.89,1.94-6.06,6.19,6.06,6.2-1.89,1.94-6.06-6.24-6.06,6.24Z" />
        <path className="btn btn-text" d="M305.62,1217.51h5.75v-18.08h-4.62v-2.3a15.42,15.42,0,0,0,5.5-1.91H315v22.29h5.16v3H305.62Z" />
        <path className="btn btn-text" d="M324.13,1207.76c0-8.49,3.12-13,8.22-13s8.22,4.55,8.22,13-3.12,13.21-8.22,13.21S324.13,1216.25,324.13,1207.76Zm13,0c0-7.34-1.94-10.14-4.75-10.14s-4.75,2.8-4.75,10.14,1.94,10.33,4.75,10.33S337.1,1215.1,337.1,1207.76Z" />
        <path className="btn btn-text" d="M346.07,1191.35c-.12-.62-.24-1.21-.36-1.79s-.26-1.1-.39-1.6a6.67,6.67,0,0,0-.33-1,.9.9,0,0,0-.28-.32.7.7,0,0,0-.37-.08.88.88,0,0,0-.45.11,1.62,1.62,0,0,0-.43.39,8.51,8.51,0,0,0-.63.86l-.76-.51a7.61,7.61,0,0,1,1.42-1.67,2.64,2.64,0,0,1,2.26-.47,1.54,1.54,0,0,1,.49.26,1.63,1.63,0,0,1,.37.44,3.42,3.42,0,0,1,.32.73,10.27,10.27,0,0,1,.29,1.16c.09.46.17.93.24,1.43h.12c.75-1.06,1.32-1.84,1.71-2.33a9,9,0,0,1,1-1.09,2.84,2.84,0,0,1,.77-.51,2.71,2.71,0,0,1,1-.15,2.32,2.32,0,0,1,.9.15l-.47,2.13h-.82c-.05-.33-.19-.5-.41-.5a.62.62,0,0,0-.23,0,1,1,0,0,0-.29.15,4.12,4.12,0,0,0-.5.46c-.22.23-.46.5-.74.83l-.85,1-.8,1c.15.75.28,1.4.4,2s.24,1,.34,1.37.18.66.26.87a1.53,1.53,0,0,0,.24.48.85.85,0,0,0,.26.22.83.83,0,0,0,.32.06,1,1,0,0,0,.61-.24,5.83,5.83,0,0,0,.87-1.12l.76.5a7.45,7.45,0,0,1-1.48,1.73,2.62,2.62,0,0,1-1.59.5,1.91,1.91,0,0,1-.86-.18,1.63,1.63,0,0,1-.61-.59,4.32,4.32,0,0,1-.46-1.24,18.56,18.56,0,0,1-.44-2.31h-.12q-1.24,1.76-1.86,2.52a9.94,9.94,0,0,1-1,1.13,2.53,2.53,0,0,1-.76.51,2.69,2.69,0,0,1-1,.15,2.6,2.6,0,0,1-.91-.14l.47-2.13h.83c0,.33.18.49.41.49a.75.75,0,0,0,.34-.09,2.33,2.33,0,0,0,.53-.42c.23-.23.54-.58.94-1S345.31,1192.31,346.07,1191.35Z" />
        <path className="btn btn-text" d="M284.66,1213.62l6.06-6.2-6.06-6.19,1.9-1.94,6.06,6.24,6.06-6.24,1.89,1.94-6.06,6.19,6.06,6.2-1.89,1.94-6.06-6.24-6.06,6.24Z" />
        <path className="btn btn-text" d="M305.62,1217.51h5.75v-18.08h-4.62v-2.3a15.42,15.42,0,0,0,5.5-1.91H315v22.29h5.16v3H305.62Z" />
        <path className="btn btn-text" d="M324.13,1207.76c0-8.49,3.12-13,8.22-13s8.22,4.55,8.22,13-3.12,13.21-8.22,13.21S324.13,1216.25,324.13,1207.76Zm13,0c0-7.34-1.94-10.14-4.75-10.14s-4.75,2.8-4.75,10.14,1.94,10.33,4.75,10.33S337.1,1215.1,337.1,1207.76Z" />
        <path className="btn btn-text" d="M346.07,1191.35c-.12-.62-.24-1.21-.36-1.79s-.26-1.1-.39-1.6a6.67,6.67,0,0,0-.33-1,.9.9,0,0,0-.28-.32.7.7,0,0,0-.37-.08.88.88,0,0,0-.45.11,1.62,1.62,0,0,0-.43.39,8.51,8.51,0,0,0-.63.86l-.76-.51a7.61,7.61,0,0,1,1.42-1.67,2.64,2.64,0,0,1,2.26-.47,1.54,1.54,0,0,1,.49.26,1.63,1.63,0,0,1,.37.44,3.42,3.42,0,0,1,.32.73,10.27,10.27,0,0,1,.29,1.16c.09.46.17.93.24,1.43h.12c.75-1.06,1.32-1.84,1.71-2.33a9,9,0,0,1,1-1.09,2.84,2.84,0,0,1,.77-.51,2.71,2.71,0,0,1,1-.15,2.32,2.32,0,0,1,.9.15l-.47,2.13h-.82c-.05-.33-.19-.5-.41-.5a.62.62,0,0,0-.23,0,1,1,0,0,0-.29.15,4.12,4.12,0,0,0-.5.46c-.22.23-.46.5-.74.83l-.85,1-.8,1c.15.75.28,1.4.4,2s.24,1,.34,1.37.18.66.26.87a1.53,1.53,0,0,0,.24.48.85.85,0,0,0,.26.22.83.83,0,0,0,.32.06,1,1,0,0,0,.61-.24,5.83,5.83,0,0,0,.87-1.12l.76.5a7.45,7.45,0,0,1-1.48,1.73,2.62,2.62,0,0,1-1.59.5,1.91,1.91,0,0,1-.86-.18,1.63,1.63,0,0,1-.61-.59,4.32,4.32,0,0,1-.46-1.24,18.56,18.56,0,0,1-.44-2.31h-.12q-1.24,1.76-1.86,2.52a9.94,9.94,0,0,1-1,1.13,2.53,2.53,0,0,1-.76.51,2.69,2.69,0,0,1-1,.15,2.6,2.6,0,0,1-.91-.14l.47-2.13h.83c0,.33.18.49.41.49a.75.75,0,0,0,.34-.09,2.33,2.33,0,0,0,.53-.42c.23-.23.54-.58.94-1S345.31,1192.31,346.07,1191.35Z" />
      </g>
      <g id="multiply" data-payload={'*'} data-key={'*'} onClick={props.handleClick}>
        <path className="btn btn-regular" d="M392.33,984.5h62.31a13.84,13.84,0,0,1,13.84,13.84v24.33a26.82,26.82,0,0,1-26.82,26.82H405.31a26.82,26.82,0,0,1-26.82-26.82V998.34A13.84,13.84,0,0,1,392.33,984.5Z" />
        <path className="btn btn-text" d="M409.38,1026.86l10.15-10.36-10.15-10.36,3.45-3.52L423,1013.05l10.15-10.43,3.45,3.52-10.15,10.36,10.15,10.36-3.45,3.52L423,1020l-10.15,10.43Z" />
      </g>
      <g id="divide" data-payload={'/'} data-key={'/'} onClick={props.handleClick}>
        <path className="btn btn-regular" d="M497.33,984.5h62.31a13.84,13.84,0,0,1,13.84,13.84v24.33a26.82,26.82,0,0,1-26.82,26.82H510.31a26.82,26.82,0,0,1-26.82-26.82V998.34A13.84,13.84,0,0,1,497.33,984.5Z" />
        <path className="btn btn-text" d="M513.47,1014.06h29v4.81h-29Zm10.46-9.55a4.06,4.06,0,1,1,4.05,4A3.89,3.89,0,0,1,523.93,1004.51Zm0,23.91a4.06,4.06,0,1,1,4.05,4A3.89,3.89,0,0,1,523.93,1028.42Z" />
      </g>
      <g id="subtract" data-payload={'-'} data-key={'-'} onClick={props.handleClick}>
        <path className="btn btn-regular" d="M496.83,1079h62.31A13.84,13.84,0,0,1,573,1092.84v24.33A26.82,26.82,0,0,1,546.16,1144H509.81A26.82,26.82,0,0,1,483,1117.18v-24.33A13.84,13.84,0,0,1,496.83,1079Z" />
        <path className="btn btn-text" d="M513.38,1109.08h29.2v4.84h-29.2Z" />
      </g>
      <g id="add" data-payload={'+'} data-key={'+'} onClick={props.handleClick}>
        <path className="btn btn-regular" d="M391.83,1079h62.31A13.84,13.84,0,0,1,468,1092.84v24.33A26.82,26.82,0,0,1,441.16,1144H404.81A26.82,26.82,0,0,1,378,1117.18v-24.33A13.84,13.84,0,0,1,391.83,1079Z" />
        <path className="btn btn-text" d="M420.58,1113.78H409.25v-4.56h11.33v-12.09h4.81v12.09h11.32v4.56H425.39v12.09h-4.81Z" />
      </g>
    </g>
  )
}

