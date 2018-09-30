import React from 'react'

export default (props) => {
  return (
    <g id="topkeys" onClick={props.handleClick}>
      <ellipse id="mode" className="btn btn-top" cx="456.37" cy="509.52" rx="35.62" ry="23.41" transform="translate(-72.57 75.81) rotate(-8.8)" />
      <ellipse id="on" className="btn btn-top" cx="546.04" cy="499.17" rx="35.62" ry="23.41" transform="translate(-69.94 89.41) rotate(-8.8)" />
      <ellipse id="alpha" className="btn btn-top" cx="177.74" cy="509.51" rx="23.41" ry="35.62" transform="translate(-352.97 607.21) rotate(-81.2)" />
      <ellipse id="shift" className="btn btn-top" cx="88.07" cy="499.16" rx="23.41" ry="35.62" transform="translate(-418.69 509.83) rotate(-81.2)" />
    </g>
  )
}
