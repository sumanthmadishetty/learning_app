import React, { Component } from "react";
import "../AgentPortal/Agentportal.css";
import { dropdownData } from "../AgentPortal/Dropdown";
let padding = { paddingTop: "19%" };
export default class pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      dropdown1: "",
      dropdown2: ""
    };
  }
  searchInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  reset() {
    this.setState({ search: "", dropdown1: "", dropdown2: "" });
  }

  render() {
    return (
      <div className="row" style={padding}>
        <div className="col-sm-6 offset-sm-3">
          <input
            type="text"
            placeholder="Search"
            className="input ml-5"
            name="search"
            value={this.state.search}
            onChange={event => this.searchInput(event)}
          />
          <i id="filtersearch" className="fa fa-search"></i>
          <input
            type="text"
            className="ml-3 heighttext"
            list="browsers"
            name="dropdown1"
            value={this.state.dropdown1}
            onChange={event => this.searchInput(event)}
          />
          <input
            type="text"
            className="ml-3 heighttext"
            list="browsers"
            name="dropdown2"
            value={this.state.dropdown2}
            onChange={event => this.searchInput(event)}
          />
          {dropdownData()}
          <button
            type="reset"
            className="button ml-3"
            onClick={() => {
              this.reset();
            }}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}
