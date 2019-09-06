import React, { useState } from "react";
export default function Button() {
  const [buttonText, setButtonText] = useState("Click me please");
  function handleClick() {

    return setButtonText("Clicked!");
  }
  return <div><br /> <button onClick={handleClick}>{buttonText}</button></div>
}