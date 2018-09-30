import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';

import Calculator from './containers/Calculator';
import store from './store';
import "../styles/main.scss"

import {
  thunkButtonInput,
} from './actions/keyActions';

//import all actions used by components
const mapStateToProps = (state) => ({
  keys: state.keys
})
const mapDispatchToProps = (dispatch) => ({
  // stringRender: () => dispatch(stringRender()),
  // addToArray: (key) => dispatch(addToArray(key)),
  thunkButtonInput: (payload) => dispatch(thunkButtonInput(payload))
})

const CalculatorContainer = 
  connect(mapStateToProps, mapDispatchToProps)(Calculator);

render(
  <Provider store={store}>
    <CalculatorContainer /> 
  </Provider>,
  document.getElementById('root')
);