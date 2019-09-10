import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Delete, edit } from '../Actions/FormAction';
import { bindActionCreators } from 'redux'
class Post extends Component {
  // edit() {
  //   this.props.dispatch({
  //     type: 'EDIT',
  //     id: this.props.post.id
  //   })
  // }
  // delete() {
  //   this.props.dispatch({
  //     type: 'DELETE',
  //     id: this.props.post.id
  //   })
  // }

  delete() {
    const id = this.props.post.id
    console.log(id)
    this.props.Delete(id)
  }
  edit() {
    const id = this.props.post.id
    this.props.edit(id)
  }
  render() {
    return (
      <div>
        <h2 className="text-primary">{this.props.post.name}</h2>
        <p className="text-primary">{this.props.post.email}</p>
        <button onClick={() => this.delete()} className="btn btn-primary" >Delete</button> &nbsp;&nbsp;
        <button onClick={() => this.edit()} className="btn btn-primary">Edit</button>
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
  return bindActionCreators({ Delete, edit, }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);