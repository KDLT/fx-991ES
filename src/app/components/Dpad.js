import React from 'react'

export default (props) => {
  return (
    <g id="dpad" onClick = {props.handleClick}>
        <g id="inner-circle">
          <circle className="btn btn-top" cx="316.75" cy="543.59" r="47" />
          <path className="btn btn-directions-backing" d="M316.75,497.59a46,46,0,1,1-46,46,46.06,46.06,0,0,1,46-46m0-2a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
        </g>
        <path id="up-backing" data-key={'ArrowUp'} data-payload={'up'}
          className="btn btn-directions-backing" 
          d="M263.71,491l19.1,19.1a48,48,0,0,1,67.88,0L369.78,491A75,75,0,0,0,263.71,491Z" />
        <path id="left-backing" data-key={'ArrowLeft'} data-payload={'left'}
          className="btn btn-directions-backing" 
          d="M263.75,597,282.84,578a48,48,0,0,1,0-67.89L263.75,491A75,75,0,0,0,263.75,597Z" />
        <path id="down-backing" data-key={'ArrowDown'} data-payload={'down'}
          className="btn btn-directions-backing" 
          d="M369.78,597l-19.09-19.09a48,48,0,0,1-67.88,0L263.71,597A75,75,0,0,0,369.78,597Z" />
        <path id="right-backing" data-key={'ArrowRight'} data-payload={'right'}
          className="btn btn-directions-backing" 
          d="M369.75,491l-19.09,19.09a48,48,0,0,1,0,67.89L369.75,597A75,75,0,0,0,369.75,491Z" />
        <path id="up" data-key={'ArrowUp'} data-payload={'up'}
          className="btn btn-directions" 
          d="M263.71,490.59l19.1,19.09a48,48,0,0,1,67.88,0l19.09-19.09A75,75,0,0,0,263.71,490.59Zm44.42-2.5,8.94-13.32L326,488.09Z" />
        <path id="left" data-key={'ArrowLeft'} data-payload={'left'}
          className="btn btn-directions" 
          d="M263.75,596.62l19.09-19.09a48,48,0,0,1,0-67.88l-19.09-19.09A75,75,0,0,0,263.75,596.62Zm-2.5-44.42-13.32-8.93,13.32-8.93Z" />
        <path id="down" data-key={'ArrowDown'} data-payload={'down'}
          className="btn btn-directions" 
          d="M369.78,596.59,350.69,577.5a48,48,0,0,1-67.88,0l-19.1,19.09A75,75,0,0,0,369.78,596.59Zm-44.42,2.5-8.93,13.32-8.93-13.32Z" />
        <path id="right" data-key={'ArrowRight'} data-payload={'right'}
          className="btn btn-directions" 
          d="M369.75,490.65l-19.09,19.09a48,48,0,0,1,0,67.89l19.09,19.09A75,75,0,0,0,369.75,490.65Zm2.5,44.42L385.57,544l-13.32,8.94Z" />
      </g>
  )
}
