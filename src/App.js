import React, { Component, lazy, Suspense } from 'react';
import './App.css';
// import LifeCycleMethod from './LifeCycleMethod';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
const useState = lazy(() => import('./UseState.js'))
const UseEffect = lazy(() => import('./useEffect.js'))
const Main = lazy(() => import('./Main.js'))
const Calculator = lazy(() => import('./Calculator.js'))
const Quotes = lazy(() => import('./Quotes.js'))
const DatePicker = lazy(() => import('./DatePicker.js'))
const ContextExample = lazy(() => import('./ContextExample.js'))
const UseContext = lazy(() => import('./UseContext'))
const UseRef = lazy(() => import('./UseRef'))
const UseReducer = lazy(() => import('./UseReducer'))
const FunctionExpressions = lazy(() => import('./FunctionExpressions'))
const Card = lazy(() => import('./Card'))
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'sai' }
  }
  click() {
    this.setState({
      name: 'welcome'
    })
  }
  render() {
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <nav> <Router>
            <Link to="/Calculator">Calculator</Link>&nbsp;
            <Link to="/DatePicker">DatePicker</Link> &nbsp;&nbsp;
            <Link to="/Main">Hacker News</Link> &nbsp;&nbsp;
            <Link to="/useState">useState Hook</Link>&nbsp;&nbsp;
            <Link to="/UseEffect">UseEffect Hook</Link>&nbsp;&nbsp;
            <Link to="/ContextExample">Context</Link>&nbsp;&nbsp;
            <Link to="/UseContext">UseContext Hook</Link>&nbsp;&nbsp;
            <Link to="/UseRef">UseRef Hook</Link>&nbsp;&nbsp;
            <Link to="/UseReducer">UseReducer Hook</Link>&nbsp;&nbsp;
            <Link to="/FunctionExpressions">FunctionExpressions</Link>&nbsp;&nbsp;
            <Link to="/Card">Cards</Link>&nbsp;&nbsp;
            <Switch>
              <Route exact path="/" component={Quotes} />
              <Route exact path="/Calculator" component={Calculator} />
              <Route path="/DatePicker" component={DatePicker} />
              <Route path="/Main" component={Main} />
              <Route path="/UseEffect" component={UseEffect} />
              <Route path="/useState" component={useState} />
              <Route path="/ContextExample" component={ContextExample} />
              <Route path="/UseContext" component={UseContext} />
              <Route path="/UseRef" component={UseRef} />
              <Route path="/UseReducer" component={UseReducer} />
              <Route path="/FunctionExpressions" component={FunctionExpressions} />
              <Route path="/Card" component={Card} />
            </Switch>
          </Router>
          </nav>
        </Suspense >
        {/* <LifeCycleMethod name={this.state.name} />
        <button onClick={() => this.click()}>click</button> */}
      </div>
    )
  }
}
export default App;