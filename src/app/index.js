import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';

import Calculator from './containers/Calculator';
import store from './store';
import "../styles/main.scss"

import {
  thunkCommandInput,
} from './actions/answerActions';

import {
  goRight,
  goLeft
} from './actions/problemActions';

//import all actions used by components
const mapStateToProps = (state) => ({
  answer: state.answer,
  problem: state.problem,
})
const mapDispatchToProps = (dispatch) => ({
  thunkCommandInput: (payload) => dispatch(thunkCommandInput(payload)),
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