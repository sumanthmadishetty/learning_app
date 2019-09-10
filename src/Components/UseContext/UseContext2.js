import React, { useContext } from 'react';
import { UserContext } from '../UseContext/UseContext.js';
function UseContext2() {
  const user = useContext(UserContext)
  return (
    <div className="text-primary">
      {user}
    </div>
  );
}

export default UseContext2;