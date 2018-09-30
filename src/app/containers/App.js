import React, { Component } from 'react';
import Calculator from './Calculator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  };
  render() {
    return (
      <div id="app-container">
        <h1> calculatoe </h1>
        <Calculator height={this.state.btnSize.height}/>
      </div>
    );
  };
};

export default App