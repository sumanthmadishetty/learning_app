import React, { Component } from 'react';
import UnMount from '../Components/UnMount';
// import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
// import { Router, navigate, __esModule } from "@reach/router";
// import Main from './Main';
class LifeCycleMethod extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'hi', names: '', mounted: true, jsonQuotesData: [], author: '' };
    console.log("constructor")
  }
  componentDidMount() {
    console.log("componentDidMount")
    this.setState({
      name: 'hello',
    })
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
    console.log("componentWillUnmount")
  }



  render() {
    console.log("Render")
    return (
      <div>{this.state.names},{this.state.author}
        {/* if()
        {
         return null;
     } */}
        return <UnMount />
      </div>
    )
  }
}


export default LifeCycleMethod;