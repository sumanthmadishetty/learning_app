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
class paidStudentsToEnroll extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id: [], paid: [], data: [], notpaid: [], data1: []
    }
  }
  paidStudentsToEnroll() {
    var res = studentRecords.filter(id => currentEnrollment.includes(id.id));
    var paid = this.state.id.concat(res)
    var data = studentRecords.filter(paid => (paid.paid === true));
    data = [...new Set([...paid, ...data])];
    data.sort(function (a, b) {
      console.log("aaaaaa", a)
      console.log("bbbbbb", b)
      var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
      if (nameA < nameB)
        return -1
      if (nameA > nameB)
        return 1
      return 0
    })
    this.setState({
      data: data
    })
  }
  data() {
    return (
      this.state.data.map((e, i) => {
        return (
          <div key={i} className="text-primary">
            {e.name}({e.id})
          </div>
        )
      }))
  }
  render() {
    return (
      <div>
        <button className="text-primary" onClick={() => this.paidStudentsToEnroll()}>paidStudentsToEnroll</button>
        {this.data()}
      </div>
    );
  }
}

export default paidStudentsToEnroll;