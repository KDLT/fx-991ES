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

import {
  overFlowArrowCheck,
  problemIndentToggle,
} from './actions/displayActions';

//import all actions used by components
const mapStateToProps = (state) => ({
  answer: state.answer,
  problem: state.problem,
  display: state.display,
})
const mapDispatchToProps = (dispatch) => ({
  thunkCommandInput: (payload) => dispatch(thunkCommandInput(payload)),
  goLeft: (steps) => dispatch(goLeft(steps)),
  goRight: (steps) => dispatch(goRight(steps)),
})

const CalculatorContainer = 
  connect(mapStateToProps, mapDispatchToProps)(Calculator);

render(
  <Provider store={store}>
    <CalculatorContainer /> 
  </Provider>,
  document.getElementById('root')
);

// maxCharAllowed:
//  19 kung isa lang ang overflow (left) at nasa dulo ang caret
//  20 kung isa lang overflow (left) at nasa second to the last character ang caret
//  21 (true max) if caretIndex == getState().problem.arr.length - 2
//  20 again if both overflows are visible:
//    both overflows are visible if caretIndex < getState().problem.arr.length - 2