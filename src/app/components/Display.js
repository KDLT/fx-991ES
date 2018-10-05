import React from 'react';

export default (props) => {
  let charWidth = 22;
  let caretPosition = props.caretPos; //22 units ang laktaw ng cursor per number

  return (
    <g id="display">
      <rect id="screen" className="display-screen" x="72.98" y="189" width="490" height="195" rx="8.73" ry="8.73" />
      {caretPosition > 19*charWidth ? renderLeftOverflowArrow() : ''}
      {renderCaret(caretPosition)}
      {/* {renderRightOverflowArrow()} */}
      <clipPath id="clipper">
        <rect id="clip-rect" x="90" y="217" height="33" width="455.96"></rect>
      </clipPath>
      <g clipPath="url(#clipper)">
        <text id="problem-text" x="90" y="250">
          {props.problemForm}
        </text>
      </g>
      {/* <text id="problem-text" x="90" y="250">
        {props.problemForm}
      </text> */}
      <text id="answer-text" x={90+charWidth*(21-props.answer.length)} y="370">
        {props.answer}
      </text>
    </g>
  )
}
// x='94' y='217'

const renderCaret = (caretPosition) => (
  <svg id="svg-caret" xmlns="http://www.w3.org/2000/svg" x="90" y="217">
    <title>caret</title>
    <rect x={caretPosition} width="3" height="3"/>
    <rect x={caretPosition} y="3.75" width="3" height="3"/>
    <rect x={caretPosition} y="7.5" width="3" height="3"/>
    <rect x={caretPosition} y="11.25" width="3" height="3"/>
    <rect x={caretPosition} y="15" width="3" height="3"/>
    <rect x={caretPosition} y="18.75" width="3" height="3"/>
    <rect x={caretPosition} y="22.5" width="3" height="3"/>
    <rect x={caretPosition} y="26.25" width="3" height="3"/>
    <rect x={caretPosition} y="30" width="3" height="3"/>
    <rect x={caretPosition+3.75} width="3" height="3"/>
    <rect x={caretPosition+3.75} y="3.75" width="3" height="3"/>
    <rect x={caretPosition+3.75} y="7.5" width="3" height="3"/>
    <rect x={caretPosition+3.75} y="11.25" width="3" height="3"/>
    <rect x={caretPosition+3.75} y="15" width="3" height="3"/>
    <rect x={caretPosition+3.75} y="18.75" width="3" height="3"/>
    <rect x={caretPosition+3.75} y="22.5" width="3" height="3"/>
    <rect x={caretPosition+3.75} y="26.25" width="3" height="3"/>
    <rect x={caretPosition+3.75} y="30" width="3" height="3"/>
  </svg>
);

const renderLeftOverflowArrow = () => (
  <svg id="left" xmlns="http://www.w3.org/2000/svg" x="98" y="220.75">
    <title>left</title>
    <rect x="11.25" width="3" height="3"/>
    <rect x="11.25" y="3.75" width="3" height="3"/>
    <rect x="11.25" y="7.5" width="3" height="3"/>
    <rect x="11.25" y="11.25" width="3" height="3"/>
    <rect x="11.25" y="15" width="3" height="3"/>
    <rect x="11.25" y="18.75" width="3" height="3"/>
    <rect x="7.5" y="3.75" width="3" height="3"/>
    <rect x="7.5" y="7.5" width="3" height="3"/>
    <rect x="7.5" y="11.25" width="3" height="3"/>
    <rect x="7.5" y="15" width="3" height="3"/>
    <rect x="7.5" y="18.75" width="3" height="3"/>
    <rect x="3.75" y="7.5" width="3" height="3"/>
    <rect x="3.75" y="11.25" width="3" height="3"/>
    <rect x="3.75" y="15" width="3" height="3"/>
    <rect y="11.25" width="3" height="3"/>
    <rect x="11.25" y="22.5" width="3" height="3"/>
  </svg>
);

const renderRightOverflowArrow = () => (
  <svg id="right" xmlns="http://www.w3.org/2000/svg" x="530" y="220.75">
    <title>right</title>
    <rect width="3" height="3"/>
    <rect y="3.75" width="3" height="3"/>
    <rect y="7.5" width="3" height="3"/>
    <rect y="11.25" width="3" height="3"/>
    <rect y="15" width="3" height="3"/>
    <rect y="18.75" width="3" height="3"/>
    <rect x="3.75" y="3.75" width="3" height="3"/>
    <rect x="3.75" y="7.5" width="3" height="3"/>
    <rect x="3.75" y="11.25" width="3" height="3"/>
    <rect x="3.75" y="15" width="3" height="3"/>
    <rect x="3.75" y="18.75" width="3" height="3"/>
    <rect x="7.5" y="7.5" width="3" height="3"/>
    <rect x="7.5" y="11.25" width="3" height="3"/>
    <rect x="7.5" y="15" width="3" height="3"/>
    <rect x="11.25" y="11.25" width="3" height="3"/>
    <rect y="22.5" width="3" height="3"/>
  </svg>
);