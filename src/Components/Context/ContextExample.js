import React, { Component } from 'react';
import Context1 from './Context1.js'
export const UserContext = React.createContext()
class ContextExample extends Component {
  render() {
    return (
      <UserContext.Provider value={'Hello'}>
        <Context1 />
      </UserContext.Provider>
    );
  }
}

export default ContextExample;