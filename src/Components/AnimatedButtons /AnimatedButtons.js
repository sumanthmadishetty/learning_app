import React, { Component } from "react";
import "/home/niveditha/q-machine/learning_app/src/Components/AnimatedButtons /AnimatedButtons.css";

class AnimatedButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onClick() {}

  render() {
    return (
      <div style={{ "text-align": "center" }}>
        <span className="img">
          <img
            src={require("/home/niveditha/q-machine/learning_app/src/Components/assets/appointment.png")}
            alt="sgs"
          ></img>
          <span>Button</span>
        </span>
        <button className="btn button text-dark" onClick={() => this.onClick()}>
          Button
        </button>
        <button
          className="btn button1 text-dark"
          onClick={() => this.onClick()}
        >
          Click
        </button>
        <input list="test-list" type="text" className="datalist" />
        <datalist id="test-list">
          <option value="1"></option>
          <option value="2"></option>
          <option value="3"></option>
        </datalist>
      </div>
    );
  }
}

export default AnimatedButtons;
