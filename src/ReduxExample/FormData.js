import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../ReduxExample/Post';
import EditComponent from '../ReduxExample/EditComponent';
class FormData extends Component {
  render() {
    debugger
    console.log(this.props)
    return (
      <div>
        {
          this.props.data.map((post) => (
            <div key={post.id}>
              {post.editing ? <EditComponent post={post} key={post.id} /> : <Post key={post.id} post={post} />}
            </div>
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.FormReducer
  }
}
export default connect(mapStateToProps)(FormData);
