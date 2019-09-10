import React, { Component } from 'react';
class LifeCycleMethod extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'hi', names: '' };
    console.log("constructor")
  }
  componentDidMount() {
    console.log("componentDidMount")
    setTimeout(() => {
      this.setState({
        name: "hello"
      });
    }, 3000);
  }

  static getDerivedStateFromProps(props, state) {
    console.log("static getDerivedStateFromProps")
    if (props.name.length !== state.name.length) {
      return {
        name: state.name
      }
    }
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate")
    if (nextProps.name !== nextState.name) {
      return true;
    }
    return false;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate")
    if (prevState.name.length > prevProps.name.length) {
      return {
        name: prevState.name
      }
    }
    else {
      return null;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate")
    const names = prevState.name.concat(prevProps.name)
    if (prevState.name !== this.state.name) {
      this.setState({
        names: names
      })
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("Render");

    return (
      <div className="text-primary">
        {this.state.names}
        <br />
      </div>
    );

  }
}


export default LifeCycleMethod;