import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import { navigate, __esModule } from "@reach/router";
import Calculator from '../Components/Calculator/Calculator';
class LifeCycleMethod extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'hi', names: '', mounted: true, jsonQuotesData: [], author: '' };
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
    // const { navigate } = this.props.navigation;
    if (this.state.mounted) {
      return (
        <div>
          {this.state.names}
          <br />
          <Router>
            <Link to="/Calculator">Calculator</Link>
          </Router>
          {/* <nav>
            <Router>
              <button onClick={this.closeMenu}> <Link to="/Components/Calculator/Calculator">Calculator</Link></button> &nbsp;
            <Switch>
                <Route exact path="/Components/Calculator/Calculator" component={Calculator} />
              </Switch>
            </Router>
          </nav> */}
          {/* <button onClick={this.closeMenu}>
            <a
              href="https://reactjs.org/docs/react-component.html#forceupdate"
              className="closebtn"
            >
              UnMount
            </a>
          </button> */}
        </div>
      );
    } else {
      return null;
    }
  }
}


export default LifeCycleMethod;