import DatePicker from "react-datepicker";
import React, { Component } from 'react';
import './index.css';
import getDay from "date-fns/getDay";
// import addDays from "date-fns/addDays";
// import subDays from "date-fns/subDays";
import "react-datepicker/dist/react-datepicker.css";
require('react-datepicker/dist/react-datepicker.css');
var disabledDays = ["2019-07-28", "2019-08-01", "2019-08-02", "2019-08-7", "2019-08-12", "2019-08-15", "2019-08-30"];
class datePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  disableDates(date) {
    // const day = getDay(date);
    // return day !== 0 && day !== 6
    // console.log(new Date(date).toDateString())
    var disableDates = disabledDays.map((date) => new Date(date).toDateString())
    return !disableDates.includes(date.toDateString())
  };

  render() {
    var a = new Date();
    var b = new Date();
    var c = new Date();
    var d = new Date();
    a.setDate(a.getDate() - 1)
    b.setDate(d.getDate() + 1)
    c.setDate(d.getDate() + 2)
    d.setDate(d.getDate() + 3)
    return (
      <DatePicker selected={this.state.startDate} onChange={this.handleChange} onSelect={this.handleSelect} filterDate={this.disableDates} highlightDates={[{ high1: [a] }, { high2: [b] }, { high1: [c] }, { high2: [d] }]} />);
  }
}
export default datePicker