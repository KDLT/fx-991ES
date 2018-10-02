import React from 'react'

export default (props) => {
  return (
    <svg id="calculator" xmlns = "http://www.w3.org/2000/svg" viewBox = "0 0 633.89 1303.5" 
          >
      <rect id="display" className="display-screen" x="72.98" y="189" width="490" height="195" rx="8.73" ry="8.73" />
      <foreignObject x="72.98" y="209" width="490" height="85">
          <input id="problem-text-input" autoFocus 
          value={props.problemForm}
          onChange={props.handleChange}/>
      </foreignObject>
      <svg width="550">
          <text id="answer-text" x="90" y="370" width="490" width="490" height="195" rx="8.73" ry="8.73">
          {props.answer}
        </text>
      </svg>
    </svg>
  )
}
