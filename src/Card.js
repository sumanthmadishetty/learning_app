import React, { Component } from 'react';
import './index.css';
import { Card, CardText, CardBody, CardTitle, Button } from 'reactstrap';
var style = { paddingTop: '6%' }
var cardData = [{ className: "text-light", color: "primary", btn: "btn" }]

class Cards extends Component {
  cardsFields() {
    return (
      cardData.map(({ className, color, btn }, i) => {
        return (
          <div>
            <CardBody key={i}>
              <CardTitle className={className} ><h4> Lorem ipsum dolor sit amet, adipis consectetur elit,</h4></CardTitle>
              <CardText className={className}><h6>Some quick example text to build on the card title and make up the bulk of the card's content.</h6></CardText>
              <Button color={color} className={btn}>Book Now</Button>
            </CardBody>
          </div>
        )
      }))
  }

  render() {
    return (
      <div >
        <div className="row" style={style}>
          <div className="col-sm-10 offset-sm-1">
            <div className="row">
              <div className="col-sm-6">
                <Card className="card1">
                  {this.cardsFields()}
                </Card>
              </div>
              <div className="col-sm-6">
                <div className="row">
                  <div className="col-sm-6">
                    <Card className="card2">
                      {this.cardsFields()}
                    </Card>
                  </div>
                  <div className="col-sm-6">
                    <Card className="card3">
                      {this.cardsFields()}
                    </Card>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-sm-12">
                    <Card className="card4">
                      {this.cardsFields()}
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default Cards;