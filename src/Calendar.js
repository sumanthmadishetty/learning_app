import Calendar from 'react-calendar';
import React, { Component } from 'react';
import './index.css'
var padding = { paddingTop: '14%' };
class Calendars extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
    }
  }
  onChange = date => this.setState({ date })
  render() {
    return (
      <div className="row">
        <div className="col-sm-3 offset-sm-5" style={padding}>
          <Calendar onChange={this.onChange} value={this.state.date} date={this.date} onClickDay={this.onClickDay} />
        </div>
      </div>
    );
  }
}
export default Calendars;
