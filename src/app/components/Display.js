import React from 'react';
import SpriteRender from '../helper/SpriteRender'

export default (props) => {
  let charWidth = 22;
  let caretPosition = props.caretPos; //22 units ang laktaw ng cursor per character
  let maxCaretPosition = charWidth*18;
  let problemTextStart = 90;
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
          {props.problemRender}
        </text>
      </g>
      <text id="answer-text" x={90+charWidth*(21-props.answer.length)} y="370">
        {props.answer}
      </text>
      <clipPath id="clipper">
        <rect id="clip-rect" x="90" y="217" height="33" width="455.96"></rect>
      </clipPath>
    </g>
  )
}