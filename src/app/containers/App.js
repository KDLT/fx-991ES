import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };
  componentDidMount() {
    console.log('component mounted!')
  }
  componentDidUpdate() {
    console.log('component updated!');
  }
  render() {
    return (
      <div id="app-container">
        <h1> Hello INDEX ULIT </h1>
          <svg>
            <g id="three">
              <rect id="sapin" class="cls-1" x="22.76" y="7.59" width="36" height="46" />
              <path id="button" class="cls-2" d="M76.16,0H13.84A13.84,13.84,0,0,0,0,13.84V38.18A26.82,26.82,0,0,0,26.82,65H63.18A26.82,26.82,0,0,0,90,38.18V13.84A13.84,13.84,0,0,0,76.16,0ZM44.92,50.36a14.61,14.61,0,0,1-11.4-4.86l2.42-3.18a11.67,11.67,0,0,0,8.63,4c4.07,0,6.94-2.31,6.94-6,0-4-2.68-6.57-10.75-6.57V30c7.14,0,9.55-2.69,9.55-6.17,0-3.23-2.2-5.24-5.73-5.24C41.76,18.6,39.4,20,37.36,22L34.76,19c2.73-2.5,5.92-4.31,10-4.31,6.14,0,10.5,3.21,10.5,8.83,0,4.07-2.45,6.71-6.18,8.11v.22c4.13,1,7.39,4,7.39,8.7C56.48,46.67,51.31,50.36,44.92,50.36Z" />
            </g>
          </svg>
      </div>
    );
  };
};

export default App