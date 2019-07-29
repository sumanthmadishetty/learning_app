import React, { Component } from 'react';
import NewQuote from './New-Quote';
import TweetQuote from './Tweet-Quote';
import { Card } from 'reactstrap';

var styles = { paddingTop: '18%' };

class Quotes extends Component {
	constructor(props) {
		super(props)
		this.state = {
			jsonQuotesData: [], author: '', quote: '', quotesDataLength: [], count: 0, bgColor: '#FF8800'
		}
	}

	componentDidMount() {
		fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
			.then(response => response.json())
			.then(jsonQuotesData => {
				this.setState({
					jsonQuotesData: jsonQuotesData.quotes, quotesDataLength: jsonQuotesData.quotes.length,
					author: jsonQuotesData.quotes[0].author,
					quote: jsonQuotesData.quotes[0].quote,
				})
			})
			.catch(error => console.log(error))
	}

	quotesDataInfo = () => {
		const copyJsonQuotesData = [];
		const quotes = this.state.jsonQuotesData;
		let randomNumber = Math.floor((Math.random() * this.state.jsonQuotesData.length) + 1);
		quotes.forEach(function (data, index) {
			if (index === randomNumber) {
				copyJsonQuotesData.push(data)
			}
		})
		this.setState({
			quote: copyJsonQuotesData[0].quote,
			author: copyJsonQuotesData[0].author,
		})
	}

	colorsData = () => {
		const color = ['#385a7c', '#f97171', '#3F729B', '#d81b60', '#FF8800', '#f99192', '#b2eee6', '#007E33', '#8ad6cc', '#CC0000', '#0d47a1', '#37474F', '#4a148c'];
		let i = this.state.count;
		this.setState({
			count: this.state.count + 1,
		});
		if (i < 12) {
			this.setState({
				bgColor: color[i]
			});
		} else if (i >= 12) {
			this.setState({
				bgColor: color[i],
				count: 0,
			});
		}
	}

	Quotes() {
		return (
			<div style={{ backgroundColor: this.state.bgColor, height: '-webkit-fill-available' }}>
				<div className="container" style={styles}>

					<div className="col-sm-6 offset-sm-3">
						<Card outline color="light" style={{ width: ' 30rem' }}>
							<div className="card-body">
								<div className="card-text">
									<div className="row">
										<div className="col-sm-1">
											<i className="fa fa-quote-left " aria-hidden="true" style={{ color: this.state.bgColor }}></i>
										</div>
										<div className="col-sm">
											<h5 className="text-center" style={{ color: this.state.bgColor }}>{this.state.quote}</h5>
										</div>
									</div>
									<div className="row">
										<div className="col-sm-6">
										</div>
										<div className="col-sm-4 offset-sm-3 mt-3 ml-5">
											<h5 className="text-center" style={{ color: this.state.bgColor }}>-{this.state.author}</h5>
										</div>
									</div>
									<div className="row  mt-5">
										<div className="col-sm-4 offset-sm-1">
											<TweetQuote colorData={this.colorsData} bgColor={this.state.bgColor} quote={this.state.quote} author={this.state.author} />
										</div>
										<div className="col-sm-4  offset-sm-1">
											<NewQuote quotesDataInfo={this.quotesDataInfo} colorData={this.colorsData} bgColor={this.state.bgColor} />
										</div>
									</div>
								</div>
							</div>
						</Card>
					</div>
				</div >
			</div >
		)
	}

	render() {
		return (
			this.Quotes()
		);
	}
}

export default Quotes;



