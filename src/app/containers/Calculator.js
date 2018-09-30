import React, { Component } from 'react';
import Display from '../components/Display';
import Basics from '../components/Basics';
import Advanced from '../components/Advanced'
import Numbers from '../components/Numbers';
import TopKeys from '../components/TopKeys';
import Dpad from '../components/Dpad';
export default class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      size: {
        height: 90
      }
    };
    this.handleClick = this.handleClick.bind(this);
  };
  componentDidMount() {
    console.log('component mounted!');
    // console.log(typeof Button);
  }
  componentDidUpdate() {
    console.log('component updated!');
  }
  handleClick(e) {
    // console.log(e.target.parentNode.id)
    console.log(`clicked ${e.target.parentNode.id}`)
  }
  render() {
    return (
      <svg id="calculator" xmlns = "http://www.w3.org/2000/svg" viewBox = "0 0 633.89 1303.5" 
    height={this.state.size.height+'vh'}>
      <g id="body">
        <path className="body-main" d="M317,1303.5c-103.52-.32-199.34-17.35-243.54-31-27.56-8.51-48.8-20.26-58-31-6-7-9-60.44-12-155-2.12-67.49-5.26-147-2-238,2.75-76.67,11.11-160.79,7-260-9-217,3-485,4-527s7-40,45-49S228,0,317,0,538.48,3.5,576.48,12.5s44,7,45,49,13,310,4,527q-.4,10-.66,19.76c-2.35,90.7,5.1,168.71,7.66,240.24,3.27,91,.13,170.51-2,238-3,94.56-6,148-12,155-5.37,6.27-14.85,12.89-27.29,19a211.73,211.73,0,0,1-30.71,12C516.28,1286.15,420.47,1303.18,317,1303.5Z" />
        <path className="body-side" d="M591.19,1260.5c12.44-6.11,21.92-12.73,27.29-19,6-7,9-60.44,12-155,2.13-67.49,5.27-147,2-238-2.14-59.84-7.7-124.21-8.09-196.75h0S614.59,850,591.19,1260.5Z" />
        <path className="body-side" d="M42.71,1260.5c-12.45-6.11-21.93-12.73-27.3-19-6-7-9-60.44-12-155-2.12-67.49-5.26-147-2-238C3.55,788.66,9.12,724.29,9.5,651.75h0S19.31,850,42.71,1260.5Z" />
        <circle id="outer-ring" className="btn-top" cx="316.98" cy="544" r="75" />
        <circle id="inner-ring" className="inner-ring" cx="316.98" cy="544" r="48" />
        <path id="Recess" className="display-recess" d="M313.61,424.79c-122.25,0-180.94-6.8-208.18-15.42s-60-15.42-60-45.21V187.23a8.73,8.73,0,0,1,8.73-8.73H582.76a8.72,8.72,0,0,1,8.72,8.73V364.16c0,29.79-32.69,36.6-59.94,45.21s-95.69,15.42-217.93,15.42" />
        <rect id="Cell" className="solar-cell" x="287.98" y="50.5" width="265" height="86.5" rx="7.97" ry="7.97" />
      </g>
      <Display handleClick={this.handleClick}/>
      <Basics handleClick={this.handleClick}/>
      <Advanced handleClick={this.handleClick}/>
      <Numbers handleClick={this.handleClick}/>
      <TopKeys handleClick={this.handleClick}/>
      <Dpad handleClick={this.handleClick}/>
    </svg>
    )
  }
};

