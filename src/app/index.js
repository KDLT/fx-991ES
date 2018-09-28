import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import App from './containers/App';
import "../styles/main.scss"


//import all actions used by components
//mapStateToProps(state) => ({})
//mapDispatchToProps(dispatch) => ({})
//const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

render(
  <App />,
  document.getElementById('root')
);