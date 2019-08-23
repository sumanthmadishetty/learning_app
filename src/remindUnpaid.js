import React, { Component } from 'react';
var currentEnrollment = [410, 105, 664, 375];
var studentRecords = [
  { id: 313, name: "Frank", paid: true },
  { id: 410, name: "Suzy", paid: true },
  { id: 709, name: "Brian", paid: false },
  { id: 105, name: "Henry", paid: false },
  { id: 502, name: "Mary", paid: true },
  { id: 664, name: "Bob", paid: false },
  { id: 250, name: "Peter", paid: true },
  { id: 375, name: "Sarah", paid: true },
  { id: 867, name: "Greg", paid: false },
];
class remindUnpaid extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id: [], paid: [], notpaid: []

    }
  }
  remindUnpaid() {
    var res = studentRecords.filter(id => currentEnrollment.includes(id.id));
    var paid = this.state.id.concat(res)
    var data = studentRecords.filter(paid => (paid.paid === true));
    data = [...new Set([...paid, ...data])];
    var notpaid = data.filter(paid => (paid.paid === false));
    notpaid.sort(function (a, b) {
      var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
      if (nameA < nameB)
        return -1
      if (nameA > nameB)
        return 1
      return 0
    })
    this.setState({
      notpaid: notpaid
    })
    console.log(notpaid)
  }

  notpaid() {
    return (
      this.state.notpaid.map((e, i) => {
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
        <button onClick={() => this.remindUnpaid()}>remindUnpaid</button>
        {this.notpaid()}
      </div>
    );
  }
}

export default remindUnpaid;