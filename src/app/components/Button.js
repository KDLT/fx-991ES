import React from 'react';

export default (props) => (
  <svg height={props.h} width={props.w}>
    <path className="btn" d="M13.84,0H76.16A13.84,13.84,0,0,1,90,13.84V38.18A26.82,26.82,0,0,1,63.18,65H26.82A26.82,26.82,0,0,1,0,38.18V13.84A13.84,13.84,0,0,1,13.84,0Z" />
    <text className="btn-text" transform="translate(0 0)">{props.num}</text>  
  </svg>
);
  