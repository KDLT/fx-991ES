import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';

import Calculator from './containers/Calculator';
import store from './store';
import "../styles/main.scss"

import {
  thunkButtonInput,
} from './actions/keyActions';

import {
  handleFormChange,
  goRight,
  goLeft
} from './actions/formActions';

//import all actions used by components
const mapStateToProps = (state) => ({
  keys: state.keys,
  forms: state.forms,
})
const mapDispatchToProps = (dispatch) => ({
  thunkButtonInput: (payload) => dispatch(thunkButtonInput(payload)),
  handleFormChange: (payload) => dispatch(handleFormChange(payload)),
  goLeft: () => dispatch(goLeft()),
  goRight: () => dispatch(goRight()),
})

const CalculatorContainer = 
  connect(mapStateToProps, mapDispatchToProps)(Calculator);

render(
  <Provider store={store}>
    <CalculatorContainer /> 
  </Provider>,
  document.getElementById('root')
);