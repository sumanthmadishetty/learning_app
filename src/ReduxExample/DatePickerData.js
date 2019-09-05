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
        {this.props.date.map((date, id) => (
          <div key={id}>
            <DatePickers />
          </div>
        ))}
      </div>
    );
  }
}


export default connect(mapStateToProps)(DatePickerData);