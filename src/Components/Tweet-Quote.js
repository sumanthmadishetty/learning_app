import React, { Component } from 'react';
class TweetQuote extends Component {
    constructor(props) {
        super(props)
        this.quotes = this.quotes.bind(this);
        this.authors = this.authors.bind(this);
    }
    quotes() {
        alert(this.props.quote);
    }
    authors() {
        alert(this.props.author);
    }
    render() {
        return (
            <div >
                <button className="btn myButton text-light" style={{ backgroundColor: this.props.bgColor }} onClick={this.quotes}><i className="fa fa-twitter" aria-hidden="true"></i></button>&nbsp;&nbsp;
                <button className="btn myButton text-light" style={{ backgroundColor: this.props.bgColor }} onClick={this.authors}><i className="fa"> &nbsp;t&nbsp;</i></button>
            </div >
        );
    }
}

export default TweetQuote;