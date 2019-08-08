import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Quotes from './Quotes';
// import { Link, Router } from "@reach/router";
// import Calculator from './Calculator.js';
// import DatePicker from './DatePicker.js';
// import Main from './Main.js';
// import News from './News.js';
// import Job from './Job.js';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
ReactDOM.render(
  <div>
    <App />,
    {/* <Router>
      <DatePicker path="/DatePicker" />
      <Quotes path="/" />
      <Calculator path="/Calculator" />
      <Main path="Main" >
        <News path="/News" />
        <Job path="/Job" />
      </Main>

    </Router> */}
  </div>,
  document.getElementById('root')
);
