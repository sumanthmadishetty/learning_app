import React, { Component } from 'react';
import './App.css';
import Quotes from './Quotes';
// import { Link, Router } from "@reach/router";
import Calculator from './Calculator.js';
import DatePicker from './DatePicker.js';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import Main from './Main.js';
import News from './News.js';
import Job from './Job.js';
var item1 = {
  gridRow: '1 / span 2'
}
var gridContainer = {
  display: 'grid', gridGap: '10px', gridTemplateColumns: 'auto auto', textAlign: 'center', backgroundColor: 'slategrey', padding: '10px', height: '60px', border: '2px solid black '
}

class App extends Component {

  render() {
    return (
      <nav> <Router>
        <Link to="/Calculator">Calculator</Link>
        <Link to="/DatePicker">DatePicker</Link>
        <Link to="/Main">Hacker News</Link>

        <Switch>
          <Route exact path="/" component={Quotes} />
          <Route exact path="/Calculator" component={Calculator} />
          <Route path="/DatePicker" component={DatePicker} />
          <Route path="/Main" component={Main} />
        </Switch>
        {/* <DatePicker path="/DatePicker" />
          <Quotes path="/" />
          <Calculator path="/Calculator" />
          <Main path="Main" >
            <News path="/News" />
            <Job path="/Job" />
          </Main> */}
      </Router>
      </nav>

    )
  }
}
export default App;
