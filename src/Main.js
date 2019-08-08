import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import News from './News.js';
import Job from './Job.js';
import './index.css';
var gridContainer = {
  display: 'grid', gridGap: '10px', gridTemplateColumns: 'auto auto', textAlign: 'center', backgroundColor: 'slategrey', padding: '10px', height: '60px', border: '2px solid black '
}
var item1 = {
  gridRow: '1 / span 2'
}
export default class Main extends Component {
  render() {
    return (
      <div style={{ backgroundColor: 'linen', height: '1000px' }}>
        <div className="row">
          <div className="col-sm-10 offset-sm-1">
            <Router>
              <div style={gridContainer} className="col">
                <Link to="/News"><div style={item1} className="text-light"> News </div></Link>
                <Link to="/Job"><div style={item1} className="text-light">Job</div></Link>
              </div>

              <Switch>
                <News path="/News" />
                <Job path="/Job" />
              </Switch>
            </Router>
          </div >
        </div>
      </div>
    )
  }
}// import React, { Component } from 'react';
// import News from './News.js';
// import Job from './Job.js';
// import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
// import './index.css';
// var gridContainer = {
//   display: 'grid', gridGap: '10px', gridTemplateColumns: 'auto auto', textAlign: 'center', backgroundColor: 'slategrey', padding: '10px', height: '60px', border: '2px solid black '
// }
// var item1 = {
//   gridRow: '1 / span 2'
// }
// export default class Main extends Component {

//   render() {
//     return (
//       <div style={{ backgroundColor: 'linen', height: '1000px' }}>
//         <div className="row">
//           <div className="col-sm-10 offset-sm-1">
//             <div style={gridContainer} className="col">
//               <Router>
//                 <Link to="/News"><div style={item1} className="text-light"> News </div></Link>
//                 <Link to="/Job"><div style={item1} className="text-light">Job</div></Link>
//                 <Switch>
//                   <Route exact path="/News" component={News} />
//                   <Route exact path="/Job" component={Job} />
//                 </Switch>
//               </Router>
//             </div>
//           </div>
//         </div>
//       </div>


//     )
//   }
// }