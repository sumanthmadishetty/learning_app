import React, { Component, lazy, Suspense } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom'
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
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
const Root = lazy(() => import('./Components/LifecycleMethods/Root'))
const ReduxDatePicker = lazy(() => import('./Components/ReduxDatePicker/ReduxDatePicker'))
const LineBasedGrid = lazy(() => import('./Components/Grid/LineBasedGrid'))
const pagination = lazy(() => import('./Components/Pagination'))
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      theme: 'white'
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
              <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to='/Calculator'>Calculator</Nav.Link>
                    <Nav.Link as={NavLink} to="/datePickers">DatePicker</Nav.Link>
                    <Nav.Link as={NavLink} to="/Main">HackerNews</Nav.Link>
                    <Nav.Link as={NavLink} to="/FunctionExpressions">FunctionExpressions</Nav.Link>
                    <Nav.Link as={NavLink} to="/Card">Cards</Nav.Link>
                    <Nav.Link as={NavLink} to="/ReduxExample">ReduxCurdOparetions</Nav.Link>
                    <Nav.Link as={NavLink} to="/RootSaga">Saga</Nav.Link>
                    <Nav.Link as={NavLink} to="/Counter">Counter</Nav.Link>
                    <Nav.Link as={NavLink} to="/Root">LifeCycleMethods</Nav.Link>
                    <Nav.Link as={NavLink} to="/ReduxDatePicker">ReduxDatePicker</Nav.Link>
                    <Nav.Link as={NavLink} to="/LineBasedGrid">Grid</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown" className="text-primary">
                      <Nav.Link as={NavLink} to="/UseReducer" className="text-primary">UseReducerHook</Nav.Link>
                      <Nav.Link as={NavLink} to="/useState" className="text-primary">useStateHook</Nav.Link>
                      <Nav.Link as={NavLink} to="/UseEffect" className="text-primary" >UseEffectHook</Nav.Link>
                      <Nav.Link as={NavLink} to="/ContextExample" className="text-primary" >Context</Nav.Link>
                      <Nav.Link as={NavLink} to="/UseContext" className="text-primary">UseContextHook</Nav.Link>
                      <Nav.Link as={NavLink} to="/Pagination" className="text-primary">Pagination</Nav.Link>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              {/* <Link to="/datePickers">DatePicker</Link>&nbsp;&nbsp;
               
                  <Link to="/Main">HackerNews</Link>&nbsp;&nbsp;
              
                  <Link to="/useState">useStateHook</Link>&nbsp;&nbsp;
              
                  <Link to="/UseEffect">UseEffectHook</Link>&nbsp;&nbsp;
             
                  <Link to="/ContextExample">Context</Link>&nbsp;&nbsp;
               
                  <Link to="/UseContext">UseContextHook</Link>&nbsp;&nbsp;
               
                  <Link to="/UseReducer">UseReducerHook</Link>&nbsp;&nbsp;
              
                  <Link to="/FunctionExpressions">FunctionExpressions</Link>&nbsp;&nbsp;
             
                  <Link to="/Card">Cards</Link >&nbsp;&nbsp;
              
                  <Link to="/ReduxExample">Redux CurdOparetions</Link>&nbsp;&nbsp;
              
                  <Link to="/Counter">Counter</Link>&nbsp;&nbsp;
             
                  <Link to="/RootSaga">Saga</Link>&nbsp;&nbsp;
              
                  <Link to="/RootMode"> LightMode&DarkMode </Link>&nbsp;&nbsp;
              
                  <Link to="/Root"> LifeCycleMethod </Link>&nbsp;&nbsp;
             
                  <Link to="/ReduxDatePicker"> ReduxDatePicker </Link>&nbsp;&nbsp; */}
              <label className="switch">
                <input type="checkbox" defaultChecked={this.state.checked} onClick={() => this.toggleChange()} className="ml-2" />
                <span className="slider round" />
              </label>
              <Switch>
                <Route exact path="/" component={Quotes} />
                <Route exact path="/datePickers" component={datePickers} />
                <Route exact path="/Main" component={Main} />
                <Route exact path="/UseEffect" component={UseEffect} />
                <Route exact path="/useState" component={useState} />
                <Route exact path="/ContextExample" component={ContextExample} />
                <Route exact path="/UseContext" component={UseContext} />
                <Route exact path="/UseReducer" component={UseReducer} />
                <Route exact path="/FunctionExpressions" component={FunctionExpressions} />
                <Route exact path="/Card" component={Card} />
                <Route exact path="/ReduxExample" component={ReduxExample} />
                <Route exact path="/FormData" component={FormData} />
                <Route exact path="/Counter" component={Counter} />
                <Route exact path="/RootSaga" component={RootSaga} />
                <Route exact path="/Calculator" component={Calculator} />
                <Route exact path="/Root" component={Root} />
                <Route exact path="/ReduxDatePicker" component={ReduxDatePicker} />
                <Route exact path="/LineBasedGrid" component={LineBasedGrid} />
                <Route exact path="/Pagination" component={pagination} />
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
