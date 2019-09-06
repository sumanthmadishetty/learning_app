import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getQuotes } from '../Actions/QuotesAction'
class Button extends Component {
  // getNews() {
  //   this.props.dispatch({
  //     type: 'GETQUOTES',
  //   });
  // }
  render() {
    return (
      <button onClick={this.props.getQuotes}>Click</button>
    )
  }
}
const mapDispatchToProps = {
  getQuotes: getQuotes,
};
export default connect(null, mapDispatchToProps)(Button);
