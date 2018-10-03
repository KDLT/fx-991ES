import React from 'react';

export default (props) => {
  return (
    <svg id="calculator" xmlns = "http://www.w3.org/2000/svg" viewBox = "0 0 633.89 1303.5">
      <svg x='0' y='0' viewBox='0 0 100 100'>
          <g id='svg-caret'><rect id="display" className="display-screen" x="72.98" y="189" width="490" height="195" rx="8.73" ry="8.73" />
            <rect class="caret-square" width="1" height="1" />
            <rect class="caret-square" y="1.3" width="1" height="1" />
            <rect class="caret-square" y="2.61" width="1" height="1" />
            <rect class="caret-square" y="3.91" width="1" height="1" />
            <rect class="caret-square" y="5.22" width="1" height="1" />
            <rect class="caret-square" y="6.52" width="1" height="1" />
            <rect class="caret-square" y="7.83" width="1" height="1" />
            <rect class="caret-square" y="9.13" width="1" height="1" />
            <rect class="caret-square" y="10.44" width="1" height="1" />
          </g>
      </svg>
      <rect id="display" className="display-screen" x="72.98" y="189" width="490" height="195" rx="8.73" ry="8.73" />
      <svg width="550">
        <text id="problem-text" x="90" y="250" width="490" width="490" height="195" rx="8.73" ry="8.73">
          {props.problemForm}
        </text>
        <text id="answer-text" x="90" y="370" width="490" width="490" height="195" rx="8.73" ry="8.73">
          {props.answer}
        </text>
      </svg>
    </svg>
  )
}
// x='94' y='217'