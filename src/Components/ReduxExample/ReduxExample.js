import Form from '../ReduxExample/Form';
import FormData from '../ReduxExample/FormData';
import React, { Component } from 'react';
// import DatePickerInput from '../ReduxExample/DatePickerInput';
// import DatePickerData from '../ReduxExample/DatePickerData';
class ReduxExample extends Component {
  render() {
    return (
      <div>
        <Form />
        <FormData />
        {/* <DatePickerData />
        <DatePickerInput /> */}
      </div>
    );
  }
}
export default ReduxExample 