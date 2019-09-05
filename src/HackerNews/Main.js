import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import News from '../HackerNews/News.js';
import Job from '../HackerNews/Job.js';
import '../HackerNews/index.css';
var item1 = {
  gridRow: '1 / span 2'
}
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { bgColor1: 'slategrey', bgColor2: 'slategrey' }
  }
  newsBgColor() {
    this.setState({
      bgColor1: 'darkcyan'
    })
  }
  jobBgColor() {
    this.setState({
      bgColor2: 'cornflowerblue'
    })
  }
  render() {
    return (
      <div style={{ backgroundColor: 'linen', height: '1000px' }}>
        <Router>
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-5" style={{ display: 'grid', gridTemplateColumns: 'auto auto', textAlign: 'center', backgroundColor: this.state.bgColor1, padding: '10px', height: '60px', border: '2px solid black ' }} >
              <Link to="/News" onClick={() => { this.newsBgColor() }}><div style={item1} className="text-light"> News </div></Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto auto', textAlign: 'center', backgroundColor: this.state.bgColor2, padding: '10px', height: '60px', border: '2px solid black ' }} className="col-sm-5" >
              <Link to="/Job" onClick={() => { this.jobBgColor() }}><div style={item1} className="text-light">Job</div></Link>
            </div>
            <div className="col-sm-1"></div>
          </div>
          <div className="row">
            <div className="col-sm-10 offset-sm-1">
              <Switch>
                <News path="/News" />
                <Job path="/Job" />
              </Switch>
            </div>
          </div>
        </Router>
      </div >
    )
  }

} 