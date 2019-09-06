import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Add } from '../Actions/FormAction'
// import { Link } from 'react-router-dom';
// import FormData from './FormData.js';
class Form extends Component {
  constructor(props) {
    super(props)
    this.state = { data: [] }
  }
  SubmitData(e) {
    const a = this.props
    console.log(a)
    e.preventDefault();
    const name = this.name.value;
    const email = this.email.value;
    const data = { id: new Date(), name, email, editing: false }
    this.props.Add(data)
    // this.props.dispatch({
    //   type: 'ADD',
    //   data
    // });
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
      </div >
    );
  }
}


const mapStateToProps = (state) => {
  return {
    data: state.FormReducer
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ Add }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);