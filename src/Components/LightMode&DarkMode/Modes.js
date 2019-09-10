import React, { Component } from 'react';
import './Modes.css';
class RootSaga extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false,
      theme: localStorage.getItem("theme")
    };
  }
  toggleChange = () => {
    const { checked } = this.state;
    if (checked === false) {
      localStorage.setItem("theme", "#222");
      this.setState({
        checked: true, theme: localStorage.getItem("theme")
      });
    }
    else {
      localStorage.setItem("theme", "white");
      this.setState({
        checked: false, theme: localStorage.getItem("theme")
      });
    }
  }

  render() {
    return (
      <div style={{ backgroundColor: this.state.theme, height: '100%' }}>
        <header className="header"   >
          <p className="text-primary">Click the switch to toggle themes</p>
          <label className="switch">
            <input type="checkbox" defaultChecked={this.state.checked} onClick={() => this.toggleChange()} className="ml-2" />
            <span className="slider round" />
          </label>
        </header>
      </div>
    )
  }
}
export default RootSaga;