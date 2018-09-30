import React from 'react'

export default (props) => {
  return (
    <svg id="calculator" xmlns = "http://www.w3.org/2000/svg" viewBox = "0 0 633.89 1303.5" 
          >
      <rect id="Display" className="display-screen" x="72.98" y="189" width="490" height="195" rx="8.73" ry="8.73" />
      <svg width="550">
        <text id="problem-text" x="90" y="250" width="490" width="490" height="195" rx="8.73" ry="8.73">
          {props.problem}
        </text>
          <text id="answer-text" x="90" y="370" width="490" width="490" height="195" rx="8.73" ry="8.73">
          {props.answer}
        </text>
      </svg>
    </svg>
  )
}
