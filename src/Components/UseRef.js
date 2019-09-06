import React, { useRef } from 'react';

function UseRef() {
  const counter = useRef('sai');

  function abcd() {
    counter.current.focus()
  }

  return (
    <div>
      <h4>{`The component has been re-rendered ${JSON.stringify(counter)} times`}</h4>
      <input type="text" ref={counter}  ></input>
      <button onClick={abcd}>Click</button>
    </div>
  );

}
export default UseRef
