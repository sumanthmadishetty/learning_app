import React, { Component } from 'react';
import { connect } from 'react-redux';
var style = { backgroundColor: 'lightgrey', border: '2px solid black ', height: '120px', width: '120px', paddingLeft: '50px', paddingTop: '28px' }
const mapStateToProps = (state) => {
  return {
    count: state.CounterReducer
  }
}

class Count extends Component {
  render() {
    return (
      <div style={style}>
        {this.props.count}
      </div>
    );
  }
}
export default connect(mapStateToProps)(Count);