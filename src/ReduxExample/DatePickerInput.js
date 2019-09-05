import React, { Component } from 'react';
import { connect } from 'react-redux';

class DatePickerInput extends Component {
  SubmitData(e) {
    e.preventDefault();
    const dates = this.date.value;
    this.props.dispatch({
      type: 'DATE',
      date: dates
    })

    this.date.value = '';
  }
  render() {
    return (
      <div className="mt-5">
        <h2>Form</h2>
        <form>
          <input required type="text" ref={(input) => this.date = input} /><br /><br />
          <button onClick={(e) => this.SubmitData(e)} className="btn btn-primary" ref={(input) => this.resetdate = input}>Submit</button>
        </form >
      </div>
    );
  }
}
export default connect()(DatePickerInput); 