import React, { Component } from 'react';
import { connect } from 'react-redux';
class Post extends Component {
  edit() {
    this.props.dispatch({
      type: 'EDIT',
      id: this.props.post.id
    })
  }
  delete() {
    this.props.dispatch({
      type: 'DELETE',
      id: this.props.post.id
    })
  }

  render() {
    return (
      <div>
        <h2>{this.props.post.name}</h2>
        <p>{this.props.post.email}</p>
        <button onClick={() => this.delete()} className="btn btn-primary">Delete</button>&nbsp;&nbsp;
        <button onClick={() => this.edit()} className="btn btn-primary">Edit</button>
      </div>
    );
  }
}
export default connect()(Post);