import React, { Component } from 'react';
class NewQuote extends Component {
    render() {
        return (
            <button className="btn myButton text-light" style={{ backgroundColor: this.props.bgColor }} onClick={() => { this.props.quotesDataInfo(); this.props.colorData(); }}>New-Quote</button>
        );
    }
}

export default NewQuote;
