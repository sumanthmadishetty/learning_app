import React, { Component, lazy, Suspense } from 'react';
import './App.css';
// import LifeCycleMethod from './Components/LifeCycleMethod';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
const useState = lazy(() => import('./Components/UseState.js'))
const UseEffect = lazy(() => import('./Components/useEffect.js'))
const Main = lazy(() => import('./Components/HackerNews/Main.js'))
const Calculator = lazy(() => import('./Components/Calculator/Calculator'))
const Quotes = lazy(() => import('./Components/Quotes.js'))
const datePickers = lazy(() => import('./Components/ReduxExample/datePickers.js'))
const ContextExample = lazy(() => import('./Components/Context/ContextExample.js'))
const UseContext = lazy(() => import('./Components/UseContext/UseContext'))
const UseRef = lazy(() => import('./Components/UseRef'))
const UseReducer = lazy(() => import('./Components/UseReducer'))
const FunctionExpressions = lazy(() => import('./Components/FunctionalExpressions/FunctionExpressions'))
const Card = lazy(() => import('./Components/Cards/Card'))
const ReduxExample = lazy(() => import('./Components/ReduxExample/ReduxExample.js'))
const Counter = lazy(() => import('./Components/Counter/Counter'))
const RootSaga = lazy(() => import('./Components/SagaExample/RootSaga'))
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
            <Link to="/Components/Calculator/Calculator">Calculator</Link>&nbsp;
            <Link to="/Components/ReduxExample/datePickers">DatePicker</Link> &nbsp;&nbsp;
            <Link to="/Components/HackerNews/Main">Hacker News</Link> &nbsp;&nbsp;
            <Link to="/Components/useState">useState Hook</Link>&nbsp;&nbsp;
            <Link to="/Components/UseEffect">UseEffect Hook</Link>&nbsp;&nbsp;
            <Link to="/Components/Context/ContextExample">Context</Link>&nbsp;&nbsp;
            <Link to="/Components/UseContext/UseContext">UseContext Hook</Link>&nbsp;&nbsp;
            <Link to="/Components/UseRef">UseRef Hook</Link>&nbsp;&nbsp;
            <Link to="/Components/UseReducer">UseReducer Hook</Link>&nbsp;&nbsp;
            <Link to="/Components/FunctionalExpressions/FunctionExpressions">FunctionExpressions</Link>&nbsp;&nbsp;
            <Link to="/Components/Cards/Card">Cards</Link>&nbsp;&nbsp;
            <Link to="/Components/ReduxExample/ReduxExample">Redux Curd Oparetions</Link>&nbsp;&nbsp;
            <Link to="/Components/Counter/Counter">Counter</Link>&nbsp;&nbsp;
            <Link to="/Components/SagaExample/RootSaga">Saga</Link>&nbsp;&nbsp;
            <Switch>
              <Route exact path="/" component={Quotes} />
              <Route exact path="/Components/Calculator/Calculator" component={Calculator} />
              <Route path="/Components/ReduxExample/datePickers" component={datePickers} />
              <Route path="/Components/HackerNews/Main" component={Main} />
              <Route path="/Components/UseEffect" component={UseEffect} />
              <Route path="/Components/useState" component={useState} />
              <Route path="/Components/Context/ContextExample" component={ContextExample} />
              <Route path="/Components/UseContext/UseContext" component={UseContext} />
              <Route path="/Components/UseRef" component={UseRef} />
              <Route path="/Components/UseReducer" component={UseReducer} />
              <Route path="/Components/FunctionalExpressions/FunctionExpressions" component={FunctionExpressions} />
              <Route path="/Components/Cards/Card" component={Card} />
              <Route path="/Components/ReduxExample/ReduxExample" component={ReduxExample} />
              <Route path="/Components/ReduxExample/FormData" component={FormData} />
              <Route path="/Components/Counter/Counter" component={Counter} />
              <Route path="/Components/SagaExample/RootSaga" component={RootSaga} />
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
