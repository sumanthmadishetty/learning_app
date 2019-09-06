import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import RemindUnpaid from '../FunctionalExpressions/remindUnpaid.js';
import PaidStudentsToEnroll from '../FunctionalExpressions/paidStudentsToEnroll.js';
import PrintRecords from '../FunctionalExpressions/printRecords.js';
class FunctionExpressions extends Component {
  render() {
    return (
      <nav>
        <Router>
          <Link to="/FunctionalExpressions/printRecords">printRecords</Link>&nbsp;
          <Link to="/FunctionalExpressions/paidStudentsToEnroll">paidStudentsToEnroll</Link> &nbsp;&nbsp;
          <Link to="/FunctionalExpressions/remindUnpaid">remindUnpaid</Link> &nbsp;&nbsp;
          <Switch>
            <PrintRecords path="/FunctionalExpressions/printRecords" />
            <PaidStudentsToEnroll path="/FunctionalExpressions/paidStudentsToEnroll" />
            <RemindUnpaid path="/FunctionalExpressions/remindUnpaid" />
          </Switch>
        </Router>
      </nav>
    );
  }
}
export default FunctionExpressions;
