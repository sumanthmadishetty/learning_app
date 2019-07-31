import React, { Component } from 'react';
var style = { backgroundColor: 'lightgrey', width: '480px', height: '60px', border: '2px solid black ' };
class Result extends Component {
  render() {
    return (
      <div className="row ">
        <div className="col">
          <div style={style}>{this.props.inputData}</div>
          <div style={style}>{this.props.result}</div>
        </div>
      </div>
    );
  }
}

export default Result;