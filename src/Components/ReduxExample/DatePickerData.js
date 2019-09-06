import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePickers from '../ReduxExample/datePickers.js';
const mapStateToProps = (state) => {
  return {
    date: state
  }
}
class DatePickerData extends Component {
  render() {
    return (
      <div>
        <div key={this.props.date.id}>
          <DatePickers date={this.props.date} />
        </div>
      </div>
    );
  }
}


export default connect(mapStateToProps)(DatePickerData);