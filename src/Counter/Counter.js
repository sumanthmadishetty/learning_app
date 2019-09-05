import React, { Component } from 'react';
import CounterDisplay from '../Counter/CounterDisplay'
var padding = { paddingTop: '18%', paddingLeft: '40%' };
class Counter extends Component {
  render() {
    return (
      <div style={padding}>
        <CounterDisplay />
      </div>
    );
  }
}

export default Counter;

