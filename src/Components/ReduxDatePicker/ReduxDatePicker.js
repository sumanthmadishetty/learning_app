import React, { Component } from 'react';
import DatePickerInput from '../ReduxDatePicker/DatePickerInput';
import DatePickerData from '../ReduxDatePicker/DatePickerData';
class ReduxExample extends Component {
  render() {
    return (
      <div>
        <DatePickerData />
        <DatePickerInput />
      </div>
    );
  }
}
export default ReduxExample 