import React from 'react';

export default (props) => {
  let initialCaretPosition = 90;
  let caretPosition = props.caretPos; //22 units ang laktaw ng cursor per number
  return (
    <g id="display">
      <rect id="screen" className="display-screen" x="72.98" y="189" width="490" height="195" rx="8.73" ry="8.73" />
      <g id='svg-caret'>
        {/* <rect className="caret-square" x={caretPosition} y="217" width="3" height="33" /> */}
        <rect x={caretPosition} y='217' width="3" height="3" />
        <rect x={caretPosition} y="220.75" width="3" height="3" />
        <rect x={caretPosition} y="224.5" width="3" height="3" />
        <rect x={caretPosition} y="228.25" width="3" height="3" />
        <rect x={caretPosition} y="232" width="3" height="3" />
        <rect x={caretPosition} y="235.75" width="3" height="3" />
        <rect x={caretPosition} y="239.5" width="3" height="3" />
        <rect x={caretPosition} y="243.25" width="3" height="3" />
        <rect x={caretPosition} y="247" width="3" height="3" />

        <rect x={caretPosition+3.75} y='217' width="3" height="3" />
        <rect x={caretPosition+3.75} y="220.75" width="3" height="3" />
        <rect x={caretPosition+3.75} y="224.5" width="3" height="3" />
        <rect x={caretPosition+3.75} y="228.25" width="3" height="3" />
        <rect x={caretPosition+3.75} y="232" width="3" height="3" />
        <rect x={caretPosition+3.75} y="235.75" width="3" height="3" />
        <rect x={caretPosition+3.75} y="239.5" width="3" height="3" />
        <rect x={caretPosition+3.75} y="243.25" width="3" height="3" />
        <rect x={caretPosition+3.75} y="247" width="3" height="3" />
      </g>
      <text id="problem-text" x="90" y="250" width="490" width="490" height="195" rx="8.73" ry="8.73">
        {props.problemForm}
      </text>
      <text id="answer-text" x="90" y="370" width="490" width="490" height="195" rx="8.73" ry="8.73">
        {props.answer}
      </text>
    </g>
  )
}
// x='94' y='217'