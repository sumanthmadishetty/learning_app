import React, { useReducer } from 'react';
function UseReducer() {
  const [sum, setSum] = useReducer((state, action) => {
    return state + action;
  }, 0);
  return (
    <div>
      <div>sum is - {sum}</div>
      <button onClick={() => setSum(1)}>
        Add
    </button>
    </div>
  );
}
export default UseReducer