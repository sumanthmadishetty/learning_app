import React, { useContext } from 'react';
import { UserContext } from './UseContext.js';
function UseContext2() {
  const user = useContext(UserContext)
  return (
    <div>
      {user}
    </div>
  );
}

export default UseContext2;