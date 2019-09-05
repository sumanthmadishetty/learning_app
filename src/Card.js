import React, { Component } from 'react';
import './index.css';
import { Card,CardText, CardBody, CardTitle, Button } from 'reactstrap';
var style = { paddingTop: '3%' }
var cardData = [{ className: "text-light", color: "primary", btn: "btn" }]

class Cards extends Component {
  cardsFields() {
    return (
      cardData.map(({ className, color, btn }, i) => {
        return (
          <div style={style}>
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
     <div className="grid" style={style}>
     <div className="row" style={style}>
  <div className="col-md-10 offset-1">
    <div className="row">
     <div className="col-md-6">
        <Card className="cards1">
          {this.cardsFields()}
        </Card>
      </div>
     <div className="col-md-6">
      <div className="row">
         <div className="col-md-6">
            <Card className="cards2">
             {this.cardsFields()}
            </Card>
         </div>
          <div className="col-md-6">
           <Card className="cards3">
             {this.cardsFields()}
           </Card>
         </div>
       </div>
        <div className="row mt-4">
          <div className="col-md-12">
           <Card className="cards4">
             {this.cardsFields()}
           </Card>
          </div>
       </div>
      </div>
    </div>
 </div>
  </div>
        {/* <img alt=""/>
       <img src="http://172.16.0.52:2020/static/media/box1.953e034e.png" alt=""/>  
        <img src="http://172.16.0.52:2020/static/media/box1.953e034e.png" alt=""/>
        <img src="http://172.16.0.52:2020/static/media/box1.953e034e.png" alt=""/>
        <img src="http://172.16.0.52:2020/static/media/box1.953e034e.png" alt=""/>  
        <img alt=""/> */}
        {/* <card></card>
        <card className="card2">{this.cardsFields()}</card>
        <card className="card3">{this.cardsFields()}</card>
        <card className="card4">{this.cardsFields()}</card>
        <card className="card5">{this.cardsFields()}</card>
        <card></card> */}
        </div>
    );
  }
}

export default Cards;






// <div className="row" style={style}>
// <div className="col-md-10 offset-1">
//   <div className="row">
//     <div className="col-md-6">
//       <Card className="card1">
//         {this.cardsFields()}
//       </Card>
//     </div>
//     <div className="col-md-6">
//       <div className="row">
//         <div className="col-md-6">
//           <Card className="card2">
//             {this.cardsFields()}
//           </Card>
//         </div>
//         <div className="col-md-6">
//           <Card className="card3">
//             {this.cardsFields()}
//           </Card>
//         </div>
//       </div>
//       <div className="row mt-4">
//         <div className="col-md-12">
//           <Card className="card4">
//             {this.cardsFields()}
//           </Card>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// </div>