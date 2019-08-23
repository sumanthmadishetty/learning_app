import React, { Component } from 'react';
import { UserContext } from './ContextExample.js';
class Context3 extends Component {
  render() {
    return (
      <div>
        <UserContext.Consumer>
          {
            user => {
              return <div>Context value is-{user}</div>
            }
          }
        </UserContext.Consumer>
      </div>
    );
  }
}

export default Context3;