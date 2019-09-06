import React, { Component } from 'react';
import { connect } from 'react-redux'
class NewsItem extends Component {
  render() {
    return (
      this.props.article ?
        this.props.article.map((articles, id) => {
          return (
            <div className="row col-sm-6 offset-sm-3" key={id}>
              <div >
                {/* <h5>{articles.quote}</h5>*/}
                <h6>{articles.author}</h6>
                <h2>{articles.title}</h2>
                <img src={articles.urlToImage} alt="" />
                <h4>{articles.description}</h4>
                <a href={articles.url} >READ MORE</a>
              </div>
            </div>
          )
        }) : null
    );
  }
}
const mapStateToProps = (state) => ({
  article: state.Reducer.newsData,
})
export default connect(mapStateToProps, null)(NewsItem);