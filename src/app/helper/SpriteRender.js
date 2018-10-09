import React from 'react';
class SpriteRender {
  static caret(position) {
    return (
      <svg id="svg-caret" xmlns="http://www.w3.org/2000/svg" x="90" y="217">
        <title>caret</title>
        <rect x={position} width="3" height="3"/>
        <rect x={position} y="3.75" width="3" height="3"/>
        <rect x={position} y="7.5" width="3" height="3"/>
        <rect x={position} y="11.25" width="3" height="3"/>
        <rect x={position} y="15" width="3" height="3"/>
        <rect x={position} y="18.75" width="3" height="3"/>
        <rect x={position} y="22.5" width="3" height="3"/>
        <rect x={position} y="26.25" width="3" height="3"/>
        <rect x={position} y="30" width="3" height="3"/>
        <rect x={position+3.75} width="3" height="3"/>
        <rect x={position+3.75} y="3.75" width="3" height="3"/>
        <rect x={position+3.75} y="7.5" width="3" height="3"/>
        <rect x={position+3.75} y="11.25" width="3" height="3"/>
        <rect x={position+3.75} y="15" width="3" height="3"/>
        <rect x={position+3.75} y="18.75" width="3" height="3"/>
        <rect x={position+3.75} y="22.5" width="3" height="3"/>
        <rect x={position+3.75} y="26.25" width="3" height="3"/>
        <rect x={position+3.75} y="30" width="3" height="3"/>
      </svg>
    );
  };
  static leftOverflowArrow() {
    return (
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
  };
  static rightOverflowArrow() {
    return (
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
  };
};

export default SpriteRender;