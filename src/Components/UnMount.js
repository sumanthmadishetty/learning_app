import React, { Component } from 'react';
class UnMount extends Component {

  // componentWillUnmount() {
  //   console.log("ComponentUnMount")
  // }
  // render() {
  //   return (
  //    <div></div>  
  //   );
  // }

  constructor(props) {
    super(props);
    this.state = {};
    this.closeMenu = this.closeMenu.bind(this);
  }

  componentDidMount() {
    document.addEventListener("click", this.closeMenu);
  }

  // componentWillUnmount() {
  //   console.log("ComponentWillUnMount")
  //   document.removeEventListener("click", this.closeMenu);
  // }

  closeMenu() {
  }

  render() {
    return (
      <div>
        <a href="https://stackoverflow.com/questions/40760308/how-to-properly-use-componentwillunmount-in-reactjs" className="closebtn" onClick={this.closeMenu}>fffff</a>
      </div>
    );
  }
}


export default UnMount;
