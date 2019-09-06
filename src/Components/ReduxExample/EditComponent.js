import React, { Component } from 'react';
import { connect } from 'react-redux';
import { upDate } from '../Actions/FormAction';
import { bindActionCreators } from 'redux'
class EditComponent extends Component {

  upDate = (e) => {
    e.preventDefault();
    const name = this.name.value;
    const email = this.email.value;
    const id = this.props.post.id
    const data = {
      name, email, id
    }
    this.props.upDate(data)
    // this.props.dispatch({
    //   type: 'UPDATE',
    //   id: this.props.post.id,
    //   data: data
    // })
  }

  render() {
    return (
      <div>
        <div key={this.props.post.id} className="post">
          <form className="form">
            <input type="text" ref={(input) => this.name = input} defaultValue={this.props.post.name} /><br /><br />
            <input ref={(input) => this.email = input} defaultValue={this.props.post.email} /><br /><br />
            <button className="btn btn-primary" onClick={(e) => this.upDate(e)}>Update</button>
          </form>
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ upDate }, dispatch);
};
export default connect(null, mapDispatchToProps)(EditComponent);