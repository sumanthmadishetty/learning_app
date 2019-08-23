import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import RemindUnpaid from './remindUnpaid.js';
import PaidStudentsToEnroll from './paidStudentsToEnroll.js';
import PrintRecords from './printRecords.js';
class FunctionExpressions extends Component {
  render() {
    return (
      <nav>
        <Router>
          <Link to="/printRecords">printRecords</Link>&nbsp;
          <Link to="/paidStudentsToEnroll">paidStudentsToEnroll</Link> &nbsp;&nbsp;
          <Link to="/remindUnpaid">remindUnpaid</Link> &nbsp;&nbsp;
          <Switch>
            <PrintRecords path="/printRecords" />
            <PaidStudentsToEnroll path="/paidStudentsToEnroll" />
            <RemindUnpaid path="/remindUnpaid" />
          </Switch>
        </Router>
      </nav>
    );
  }
}
export default FunctionExpressions;