import React, { } from 'react';
import UseContext2 from '../UseContext/UseContext2'
export const UserContext = React.createContext()
function UseContext() {
  return (
    <UserContext.Provider value={'welcome'}>
      <UseContext2 />
    </UserContext.Provider>
  );
}

export default UseContext;