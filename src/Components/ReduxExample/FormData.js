import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../ReduxExample/Post';
import EditComponent from '../ReduxExample/EditComponent';
class FormData extends Component {
  render() {
    return (
      <div>
        {
          this.props.data.map((post, id) => (
            <div className="text-primary" key={id}>
              {post.editing ? <EditComponent post={post} /> : <Post post={post} />}
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
