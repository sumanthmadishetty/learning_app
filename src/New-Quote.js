import React, { Component } from 'react';
class NewQuote extends Component {
    render() {
        return (
            <div>
                <button className="btn myButton text-light" style={{ backgroundColor: this.props.bgColor }} onClick={() => { this.props.quotesDataInfo(); this.props.colorData(); }}>New-Quote</button>
            </div>
        );
    }
}

export default NewQuote;