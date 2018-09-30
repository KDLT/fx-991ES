import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import Calculator from './containers/Calculator';
import "../styles/main.scss"


//import all actions used by components
//mapStateToProps(state) => ({})
//mapDispatchToProps(dispatch) => ({})
//const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

render(
  <Calculator />,
  document.getElementById('root')
);