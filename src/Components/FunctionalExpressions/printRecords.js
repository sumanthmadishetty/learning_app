import React, { Component } from 'react';
var currentEnrollment = [410, 105, 664, 375];
var studentRecords = [
  { id: 313, name: "Frank", paid: true, },
  { id: 410, name: "Suzy", paid: true, },
  { id: 709, name: "Brian", paid: false, },
  { id: 105, name: "Henry", paid: false, },
  { id: 502, name: "Mary", paid: true, },
  { id: 664, name: "Bob", paid: false, },
  { id: 250, name: "Peter", paid: true, },
  { id: 375, name: "Sarah", paid: true, },
  { id: 867, name: "Greg", paid: false, },
];
class printRecords extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id: []
    }
  }
  printRecords() {
    var res = studentRecords.filter(id => currentEnrollment.includes(id.id));
    res.sort(function (a, b) {
      var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
      if (nameA < nameB)
        return -1
      if (nameA > nameB)
        return 1
      return 0
    })
    this.setState({
      id: res
    })
  }
  id() {
    return (
      this.state.id.map((e, i) => {
        return (
          <div key={i}>
            {e.name}({e.id})
          </div>
        )
      }))
  }
  render() {
    return (
      <div>
        <button onClick={() => this.printRecords()}>printRecords</button>
        {this.id()}
      </div>
    );
  }
}

export default printRecords;