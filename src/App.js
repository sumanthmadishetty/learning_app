import React, { Component, lazy, Suspense } from 'react';
import './App.css';
// import LifeCycleMethod from './LifeCycleMethod';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
const useState = lazy(() => import('./UseState.js'))
const UseEffect = lazy(() => import('./useEffect.js'))
const Main = lazy(() => import('./HackerNews/Main.js'))
const Calculator = lazy(() => import('./Calculator/Calculator'))
const Quotes = lazy(() => import('./Quotes.js'))
const datePickers = lazy(() => import('./ReduxExample/datePickers.js'))
const ContextExample = lazy(() => import('./Context/ContextExample.js'))
const UseContext = lazy(() => import('./UseContext/UseContext'))
const UseRef = lazy(() => import('./UseRef'))
const UseReducer = lazy(() => import('./UseReducer'))
const FunctionExpressions = lazy(() => import('./FunctionalExpressions/FunctionExpressions'))
const Card = lazy(() => import('./Card'))
const ReduxExample = lazy(() => import('./ReduxExample/ReduxExample.js'))
const Counter = lazy(() => import('./Counter/Counter'))
const RootSaga = lazy(() => import('./SagaExample/RootSaga'))
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
      <div >
        <Suspense fallback={<div>Loading...</div>}>
          <nav> <Router>
            <Link to="/Calculator/Calculator">Calculator</Link>&nbsp;
            <Link to="/ReduxExample/datePickers">DatePicker</Link> &nbsp;&nbsp;
            <Link to="/HackerNews/Main">Hacker News</Link> &nbsp;&nbsp;
            <Link to="/useState">useState Hook</Link>&nbsp;&nbsp;
            <Link to="/UseEffect">UseEffect Hook</Link>&nbsp;&nbsp;
            <Link to="/Context/ContextExample">Context</Link>&nbsp;&nbsp;
            <Link to="/UseContext/UseContext">UseContext Hook</Link>&nbsp;&nbsp;
            <Link to="/UseRef">UseRef Hook</Link>&nbsp;&nbsp;
            <Link to="/UseReducer">UseReducer Hook</Link>&nbsp;&nbsp;
            <Link to="/FunctionalExpressions/FunctionExpressions">FunctionExpressions</Link>&nbsp;&nbsp;
            <Link to="/Card">Cards</Link>&nbsp;&nbsp;
            <Link to="/ReduxExample/ReduxExample">Redux Curd Oparetions</Link>&nbsp;&nbsp;
            <Link to="/Counter/Counter">Counter</Link>&nbsp;&nbsp;
            <Link to="/SagaExample/RootSaga">Saga</Link>&nbsp;&nbsp;
            <Switch>
              <Route exact path="/" component={Quotes} />
              <Route exact path="/Calculator/Calculator" component={Calculator} />
              <Route path="/ReduxExample/datePickers" component={datePickers} />
              <Route path="/HackerNews/Main" component={Main} />
              <Route path="/UseEffect" component={UseEffect} />
              <Route path="/useState" component={useState} />
              <Route path="/Context/ContextExample" component={ContextExample} />
              <Route path="/UseContext/UseContext" component={UseContext} />
              <Route path="/UseRef" component={UseRef} />
              <Route path="/UseReducer" component={UseReducer} />
              <Route path="/FunctionalExpressions/FunctionExpressions" component={FunctionExpressions} />
              <Route path="/Card" component={Card} />
              <Route path="/ReduxExample/ReduxExample" component={ReduxExample} />
              <Route path="/ReduxExample/FormData" component={FormData} />
              <Route path="/Counter/Counter" component={Counter} />
              <Route path="/SagaExample/RootSaga" component={RootSaga} />
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
