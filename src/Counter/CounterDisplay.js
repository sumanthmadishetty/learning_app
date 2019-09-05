import React, { Component } from 'react';
import { connect } from 'react-redux';
import Count from '../Counter/Count';
var reset = { height: '60px', width: '100px', marginLeft: '160px' }
var styles = { fontSize: '30px' };
var buttons = { height: '60px', width: '60px' };
class CounterDisplay extends Component {
  increment() {
    this.props.dispatch({
      type: 'INCREMENT'
    })
  }
  decrement() {
    this.props.dispatch({
      type: 'DECREMENT'
    })
  }
  oddDecrement() {
    this.props.dispatch({
      type: 'ODD-DECREMENT'
    })
  }
  evenIncrement() {
    this.props.dispatch({
      type: 'EVEN-INCREMENT'
    })
  }
  reset() {
    this.props.dispatch({
      type: 'RESET'
    })
  }
  render() {
    return (
      <div style={styles}>
        <div className="row">
          <button onClick={() => this.evenIncrement()} className="btn btn-secondary mt-4" style={buttons}>Even +</button>&nbsp;&nbsp;
          <button onClick={() => this.increment()} className="btn btn-secondary mt-4" style={buttons}>+</button>&nbsp;&nbsp;
          <Count /> &nbsp;&nbsp;
          <button onClick={() => this.decrement()} className="btn btn-secondary mt-4" style={buttons}>-</button>&nbsp;&nbsp;
          <button onClick={() => this.oddDecrement()} className="btn btn-secondary mt-4" style={buttons}>Odd -</button>
        </div>
        <div className="row">
          <button onClick={() => this.reset()} className="btn btn-secondary mt-5" style={reset}>Reset</button>
        </div>
      </div>

    );
  }
}
export default connect()(CounterDisplay);