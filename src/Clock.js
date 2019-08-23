import React from "react";
export default class Clock extends React.Component {
  constructor(props) {
    console.log("Clock", "constructor");
    super(props);
    this.state = {
      date: new Date()
    };
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  componentDidMount() {
    console.log("Clock", "componentDidMount");
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    console.log("Clock", "componentWillUnmount");
    clearInterval(this.timerID);
  }
  render() {
    return (
      <div>It is {this.state.date.toLocaleTimeString()}.</div>
    );
  }
}