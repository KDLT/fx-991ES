import React from 'react';
import SpriteRender from '../helper/SpriteRender'

export default (props) => {
  let charWidth = props.display.charWidth;
  let caretPosition = props.display.caretPosition;
  let maxCaretPosition = charWidth*props.maxCharDisplayed;
  let problemTextStart = 90;
  let ansTextStart = problemTextStart + charWidth * (21 - props.answer.length);
  // console.log('overflowleftvisible? ', props.display.overFlowLeftVisible);
  if (props.display.overFlowLeftVisible) {
    problemTextStart = problemTextStart + charWidth;
    if (caretPosition > maxCaretPosition) caretPosition = maxCaretPosition;
  };
  return (
    <g id="display">
      <rect id="screen" className="display-screen" x="73" y="189" width="490" height="195" rx="9" ry="9" />
      {props.display.overFlowLeftVisible ? SpriteRender.leftOverflowArrow() : ''}
      {SpriteRender.caret(caretPosition)}
      {/* {SpriteRender.rightOverflowArrow()} */}
      
      <g clipPath="url(#clipper)">
        <text id="problem-text" x={`${problemTextStart}`} y="250">
          {props.display.problemString}
        </text>
      </g>
      <text id="answer-text" x={ansTextStart} y="370">
        {props.answer}
      </text>
      <clipPath id="clipper">
        <rect id="clip-rect" x="90" y="217" height="33" width="455.96"></rect>
      </clipPath>
    </g>
  )
}