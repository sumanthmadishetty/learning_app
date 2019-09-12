import React, { Component } from 'react';
import '../Grid/LineBasedGrid.css';
class LineBasedGrid extends Component {
  render() {
    return (
      <div>
        <div className="wrapper row mt-5 mb-5 ml-5">

          <div className="box a">a</div>
          <div className="box b">b</div>
          <div className="box c">c</div>
          <div className="box d">d</div>
        </div>
        <div className="grids row mt-5 mb-5 ml-5">
          <div className="box e">e</div>
          <div className="box f">f</div>
          <div className="box g">
            <div className="box l">l</div>
            <div className="box m">m</div>
            <div className="box n">n</div>
          </div>
          <div className="box h">
            <div className="box i">i</div>
            <div className="box j">j</div>
            <div className="box k">k</div>
          </div>
        </div>
        <div className="overlap row mt-5 mb-5 ml-5">
          <div className="box a1">1</div>
          <div className="b1">2</div>
          <div className="c1">3</div>
          <div className="box1 d1">4</div>
          <div className="e1">5</div>
          <div className="f1">6</div>
        </div>
        <div className="align row mt-5 mb-5 ml-5">
          <div className="aa">1</div>
          <div className="bb">2</div>
          <div className="cc">3</div>
          <div className="dd">4</div>
          <div className="ee">5</div>
        </div>
      </div>

    )
  }
}
export default LineBasedGrid