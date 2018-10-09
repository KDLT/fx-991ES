import React from 'react'

export default (props) => {
  return (
    <g id="dpad" onClick = {props.handleClick}>
      < polygon 
        id = "down" data-key={'ArrowDown'} data-payload={'down'}
        className = "btn btn-directions"
        points = "316.98 614 324.98 599 308.98 599 316.98 614" />
      < polygon
        id = "up" data-key={'ArrowUp'} data-payload={'up'}
        className = "btn btn-directions"
        points = "316.98 474 324.98 489 308.98 489 316.98 474" />
      < polygon
        id = "left" data-key={'ArrowLeft'} data-payload={'left'}
        className = "btn btn-directions"
        points = "246.98 543.82 261.98 535.82 261.98 551.82 246.98 543.82" />
      < polygon
        id = "right" data-key={'ArrowRight'} data-payload={'right'}
        className = "btn btn-directions"
        points = "386.98 543.82 371.98 535.82 371.98 551.82 386.98 543.82" />
    </g>
  )
}
