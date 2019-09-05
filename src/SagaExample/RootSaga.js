import React, { Component } from 'react';
import Button from '../SagaExample/Button';
import NewsItem from '../SagaExample/NewsItem'
import Loading from '../SagaExample/Loading'
class RootSaga extends Component{
  render()
  {
    return(
  <div>
     <Button />
     <Loading />
     <NewsItem />
  </div>
    )
  }
}
export default RootSaga;