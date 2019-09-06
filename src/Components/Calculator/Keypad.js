import React, { Component } from 'react';
import Result from '../Calculator/Result';

var styles = { width: '78px', height: '60px', fontSize: '30px' };
var equallto = { height: '60px', width: '160px' }
var padding = { paddingTop: '15%' };

const row1 = [{ name: '1' }, { name: "2" }, { name: "3" }, { name: "4" }, { name: "+" }, { name: "-" }]
const row2 = [{ name: "5" }, { name: "6" }, { name: "7" }, { name: "8" }, { name: "*" }, { name: "/" }]
const row3 = [{ name: "9" }, { name: "." }, { name: "0" }]

class Keypad extends Component {
  constructor(props) {
    super(props)
    this.state = { inputValues: [], total: '', data: '' }
    this.submitData = this.submitData.bind(this);
    this.outPut = this.outPut.bind(this);
    this.clear = this.clear.bind(this);
  }

  submitData(e) {
    const { inputValues } = this.state
    let values = e.target.name
    inputValues.push(values)
    this.setState({
      inputValues: inputValues,
    });
  }

  outPut() {
    const { inputValues } = this.state
    var y = inputValues.reduce((total, value) => total + value)

    this.setState({
      // eslint-disable-next-line
      data: eval(y)
    });
  }

  clear() {
    this.setState({
      data: '', inputValues: []
    });
  }

  rowData(row) {
    return row.map(({ name }, i) => <td ><button style={styles} className="btn btn-dark btn-lg" name={name} onClick={this.submitData}>{name}</button> </td >
    )
  }


  buttons() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-4 offset-sm-4" style={padding}>
            <Result inputData={this.state.inputValues} result={this.state.data} />
            <table className="mt-1">
              <tbody>
                <tr>
                  <td>{this.rowData(row1)}</td>
                </tr>
                <tr>
                  <td>{this.rowData(row2)}</td>
                </tr>
                <tr>
                  <td>
                    {this.rowData(row3)}
                    <td><button style={styles} className="btn btn-dark btn-lg" name="=" onClick={() => this.outPut()}>=</button></td>
                    <td colSpan="2"><button style={equallto} className="btn btn-dark btn-lg" name="clear" onClick={() => this.clear()}>Clear</button></td>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div >
    )
  }


  render() {
    return (
      <div>
        {this.buttons()}
      </div>

    );
  }
}

export default Keypad;