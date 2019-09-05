import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import FormData from './FormData.js';
class Form extends Component {
  SubmitData(e) {
    e.preventDefault();
    const name = this.name.value;
    const email = this.email.value;
    const data = { id: new Date(), name, email, editing: false }
    this.props.dispatch({
      type: 'ADD',
      data
    });
    this.name.value = '';
    this.email.value = '';
  }
  render() {
    return (
      <div className="mt-5">
        <h2>Form</h2>
        <form>
          <input type="text" ref={(input) => this.name = input} /><br /><br />
          <input type="text" ref={(input) => this.email = input} /><br /><br />
          <button onClick={(e) => this.SubmitData(e)} className="btn btn-primary">Add</button>
        </form>
      </div>
    );
  }
}
export default connect()(Form); 