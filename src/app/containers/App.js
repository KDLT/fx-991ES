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
        
      </div>
    );
  };
};

export default App