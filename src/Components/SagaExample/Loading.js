import React, { Component } from 'react';
import { connect } from 'react-redux'
import RingLoader from 'react-spinners/RingLoader';
var style = { paddingTop: '20%' }
class Loading extends Component {
  render() {
    return (
      this.props.loading ?
        <div style={style} className="col-sm  offset-sm-6">
          <RingLoader ></RingLoader> </div> : null
    );
  }
}
const mapStateToProps = (state) => ({
  loading: state.Reducer.loading
})

export default connect(mapStateToProps)(Loading);