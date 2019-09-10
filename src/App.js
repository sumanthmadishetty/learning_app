import React, { Component, lazy, Suspense } from 'react';
import './App.css';
import { Nav, NavItem } from 'reactstrap';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
const useState = lazy(() => import('./Components/UseState.js'))
const UseEffect = lazy(() => import('./Components/useEffect.js'))
const Main = lazy(() => import('./Components/HackerNews/Main.js'))
const Calculator = lazy(() => import('./Components/Calculator/Calculator'))
const Quotes = lazy(() => import('./Components/Quotes.js'))
const datePickers = lazy(() => import('./Components/datePickers.js'))
const ContextExample = lazy(() => import('./Components/Context/ContextExample.js'))
const UseContext = lazy(() => import('./Components/UseContext/UseContext'))
const UseReducer = lazy(() => import('./Components/UseReducer'))
const FunctionExpressions = lazy(() => import('./Components/FunctionalExpressions/FunctionExpressions'))
const Card = lazy(() => import('./Components/Cards/Card'))
const ReduxExample = lazy(() => import('./Components/ReduxExample/ReduxExample.js'))
const Counter = lazy(() => import('./Components/Counter/Counter'))
const RootSaga = lazy(() => import('./Components/SagaExample/RootSaga'))
const RootMode = lazy(() => import('./Components/LightMode&DarkMode/RootMode'))
const Root = lazy(() => import('./Components/LifecycleMethods/Root'))
const ReduxDatePicker = lazy(() => import('./Components/ReduxDatePicker/ReduxDatePicker'))
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'sai', checked: false,
      theme: localStorage.getItem("theme")
    }
  }

  toggleChange = () => {
    const { checked } = this.state;
    if (checked === false) {
      localStorage.setItem("theme", "#222");
      this.setState({
        checked: true, theme: localStorage.getItem("theme")
      });
    }
    else {
      localStorage.setItem("theme", "white");
      this.setState({
        checked: false, theme: localStorage.getItem("theme")
      });
    }
  }

  render() {
    return (
      <div style={{ backgroundColor: this.state.theme }}>
        <header className="header">
          <Suspense fallback={<div>Loading...</div>}>
            <nav> <Router>
              <Nav>
                <NavItem>
                  <Link to="/Calculator">Calculator</Link>&nbsp;&nbsp;
              </NavItem>
                <NavItem>
                  <Link to="/datePickers">DatePicker</Link>&nbsp;&nbsp;
              </NavItem>
                <NavItem>
                  <Link to="/Main">HackerNews</Link>&nbsp;&nbsp;
              </NavItem>
                <NavItem>
                  <Link to="/useState">useStateHook</Link>&nbsp;&nbsp;
              </NavItem>
                <NavItem>
                  <Link to="/UseEffect">UseEffectHook</Link>&nbsp;&nbsp;
              </NavItem>
                <NavItem>
                  <Link to="/ContextExample">Context</Link>&nbsp;&nbsp;
              </NavItem>
                <NavItem>
                  <Link to="/UseContext">UseContextHook</Link>&nbsp;&nbsp;
              </NavItem>

                <NavItem>
                  <Link to="/UseReducer">UseReducerHook</Link>&nbsp;&nbsp;
              </NavItem>
                <NavItem>
                  <Link to="/FunctionExpressions">FunctionExpressions</Link>&nbsp;&nbsp;
              </NavItem>
                <NavItem>
                  <Link to="/Card">Cards</Link >&nbsp;&nbsp;
              </NavItem>
                <NavItem>
                  <Link to="/ReduxExample">Redux CurdOparetions</Link>&nbsp;&nbsp;
              </NavItem>
                <NavItem>
                  <Link to="/Counter">Counter</Link>&nbsp;&nbsp;
              </NavItem>
                <NavItem>
                  <Link to="/RootSaga">Saga</Link>&nbsp;&nbsp;
              </NavItem>
                <NavItem>
                  <Link to="/RootMode"> LightMode&DarkMode </Link>&nbsp;&nbsp;
              </NavItem>
                <NavItem>
                  <Link to="/Root"> LifeCycleMethod </Link>&nbsp;&nbsp;
              </NavItem>
                <NavItem>
                  <Link to="/ReduxDatePicker"> ReduxDatePicker </Link>&nbsp;&nbsp;
              </NavItem>
              </Nav>
              <label className="switch">
                <input type="checkbox" defaultChecked={this.state.checked} onClick={() => this.toggleChange()} className="ml-2" />
                <span className="slider round" />
              </label>
              <Switch>
                <Route path="/" component={Quotes} />
                <Route path="/datePickers" component={datePickers} />
                <Route path="/Main" component={Main} />
                <Route path="/UseEffect" component={UseEffect} />
                <Route path="/useState" component={useState} />
                <Route path="/ContextExample" component={ContextExample} />
                <Route path="/UseContext" component={UseContext} />
                <Route path="/UseReducer" component={UseReducer} />
                <Route path="/FunctionExpressions" component={FunctionExpressions} />
                <Route path="/Card" component={Card} />
                <Route path="/ReduxExample" component={ReduxExample} />
                <Route path="/FormData" component={FormData} />
                <Route path="/Counter" component={Counter} />
                <Route path="/RootSaga" component={RootSaga} />
                <Route path="/RootMode" component={RootMode} />
                <Route path="/Calculator" component={Calculator} />
                <Route path="/Root" component={Root} />
                <Route path="/ReduxDatePicker" component={ReduxDatePicker} />
              </Switch>
            </Router>
            </nav>
          </Suspense >
        </header>
      </div>

    )
  }
}
export default App;
