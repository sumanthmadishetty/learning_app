
import React, { Component } from 'react';
export default class Sidemenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount")
    document.addEventListener("click", this.closeMenu);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount")
    document.removeEventListener("click", this.closeMenu);
  }

  openMenu() {
  }

  closeMenu() {
  }

  render() {
    return (
      <div>
        <a href="https://stackoverflow.com/questions/40760308/how-to-properly-use-componentwillunmount-in-reactjs/40761562#40761562"
          className="closebtn"
          onClick={this.closeMenu}> × </a>
        <div>
          Some other structure
                  </div>
      </div>
    );
  }
}