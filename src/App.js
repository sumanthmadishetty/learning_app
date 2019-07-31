import React, { Component } from 'react';
import './App.css';
import Quotes from './Quotes';
import { Link, Router } from "@reach/router";
import Calculator from './Calculator.js';
class App extends Component {
  render() {
    return (
      <nav>
        <Link to="/Calculator">Calculator</Link>{" "}
        <Router>
          <Quotes path="/" />
          <Calculator path="/Calculator" />
        </Router>
      </nav>
    )
  }
}
export default App;
