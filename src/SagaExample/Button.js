import React, { Component } from 'react';
import { connect } from 'react-redux';
class Button extends Component {
  getNews() {
    this.props.dispatch({
      type: 'GETQUOTES',
    });
  }
  render() {
    return (
      <button onClick={() => this.getNews()}>Click</button>
    )
  }
}
export default connect(null)(Button);