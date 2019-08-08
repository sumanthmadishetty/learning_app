import React, { Component } from 'react';
import { jsonNewsData } from './http.js';
export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = { jsonNewsData: [], data: [], idData: [], value: '', searchingData: [] }
    this.searchData = this.searchData.bind(this);
  }

  componentDidMount() {
    jsonNewsData().then(jsonNewsData => {
      let requests = jsonNewsData.map(id => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`));
      Promise.all(requests)
        .then(responses => Promise.all(responses.map(r => r.json())))
        .then(response => {
          this.setState({
            response: response, searchingData: response
          })
        });
    })
  }

  searchData(event) {
    this.setState({ value: event.target.value });
    let searchingData = this.state.response.map(function (a) { return a });
    let searchData = searchingData.filter(function (title) {
      return title.title.toLowerCase().includes(event.target.value.toLowerCase());
    });
    this.setState({
      searchingData: searchData,
    })
  }

  searchInfo() {
    return (
      <div className="row " >
        <div className="col-sm-6"></div>
        <div className="col-sm-5 mt-5">
          <div className="from-group">
            <div className="input-group input-group-lg">
              <span className="input-group-addon bg-secondary text-light p-1">
                &nbsp;<i className="fa fa-search fa-2x"></i>
              </span>
              <input type="text" className="form-control bg-light text-dark" placeholder="Search Here" value={this.state.value} onChange={this.searchData} />
            </div>
          </div>
        </div>
      </div>
    )
  }

  newsInfo() {
    return (
      this.state.searchingData.map((id, i) => {
        return (
          <div key={i}>
            <div>{i + 1}.&nbsp;&nbsp;<a href={id.url} target="blanck">{id.title}</a></div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Score:{id.score} , {new Date(id.time).toDateString()} </div>
          </div>
        )
      })
    )
  }

  render() {
    return (
      <div>
        {this.searchInfo()}
        {this.newsInfo()}
      </div>
    )
  }
}


