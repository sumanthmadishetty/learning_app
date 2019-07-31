import React, { Component } from 'react';
import Result from './Result';

var styles = { width: '78px', height: '60px', fontSize: '30px' };
var style = { height: '60px', width: '160px' }
var padding = { paddingTop: '17%' };

class Keypad extends Component {
  constructor(props) {
    super(props)
    this.state = { inputValues: [], result: '', total: '', data: '' }
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
      data: eval(y),
    });
  }

  clear() {
    this.setState({
      data: '', inputValues: []
    });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-4 offset-sm-4" style={padding}>
            <Result inputData={this.state.inputValues} result={this.state.data} />
            <table className="mt-1">
              <tbody>
                <tr>
                  <td><button style={styles} className="btn btn-dark btn-lg" name="1" onClick={(e) => this.submitData(e)}>1</button></td>
                  <td><button style={styles} className="btn btn-dark btn-lg" name="2" onClick={(e) => this.submitData(e)}>2</button></td>
                  <td><button style={styles} className="btn btn-dark btn-lg" name="3" onClick={(e) => this.submitData(e)}>3</button></td>
                  <td><button style={styles} className="btn btn-dark btn-lg" name="4" onClick={(e) => this.submitData(e)}>4</button></td>
                  <td><button style={styles} className="btn btn-dark btn-lg" name="+" onClick={(e) => this.submitData(e)}>+</button></td>
                  <td><button style={styles} className="btn btn-dark btn-lg" name="-" onClick={(e) => this.submitData(e)}>-</button></td>
                </tr>
                <tr>
                  <td><button style={styles} className="btn btn-dark btn-lg" name="5" onClick={(e) => this.submitData(e)}>5</button></td>
                  <td><button style={styles} className="btn btn-dark btn-lg" name="6" onClick={(e) => this.submitData(e)}>6</button></td>
                  <td><button style={styles} className="btn btn-dark btn-lg" name="7" onClick={(e) => this.submitData(e)}>7</button></td>
                  <td><button style={styles} className="btn btn-dark btn-lg" name="8" onClick={(e) => this.submitData(e)}>8</button></td>
                  <td><button style={styles} className="btn btn-dark btn-lg" name="/" onClick={(e) => this.submitData(e)}>/</button></td>
                  <td><button style={styles} className="btn btn-dark btn-lg" name="*" onClick={(e) => this.submitData(e)}>*</button></td>
                </tr>
                <tr>
                  <td><button style={styles} className="btn btn-dark btn-lg" name="9" onClick={(e) => this.submitData(e)}>9</button></td>
                  <td><button style={styles} className="btn btn-dark btn-lg" name="." onClick={(e) => this.submitData(e)}>.</button></td>
                  <td><button style={styles} className="btn btn-dark btn-lg" name="0" onClick={(e) => this.submitData(e)}>0</button></td>
                  <td><button style={styles} className="btn btn-dark btn-lg" name="=" onClick={() => this.outPut()}>=</button></td>
                  <td colSpan="2"><button style={style} className="btn btn-dark btn-lg btn-2x" name="clear" onClick={() => this.clear()}>Clear</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div >
    );
  }
}

export default Keypad;