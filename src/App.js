import React, { Component, lazy, Suspense } from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
const Main = lazy(() => import('./Main.js'))
const Calculator = lazy(() => import('./Calculator.js'))
const Quotes = lazy(() => import('./Quotes.js'))
const DatePicker = lazy(() => import('./DatePicker.js'))
class App extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
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
          </Router>
          </nav>
        </Suspense >
      </div>
    )
  }
}
export default App;
