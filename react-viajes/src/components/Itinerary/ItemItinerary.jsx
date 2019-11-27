import React, { Component } from "react";
//import { connect } from "react-redux";
import "./Itinerary.css"
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel'

class ItemItinerary extends Component {
constructor(props){
  super(props);
}
hash(hashtags) {
  return hashtags.map((tag, index) =>
    <div key={index} className="text">{tag}</div>
  )
}

render() {
  var itineraries=this.props.itinerary;
  if(itineraries!=undefined)
  return (
    <div className="div-itinerary d-flex flex-column m-1">
      <div className="w-100 d-flex mt-3 mb-3">
          <div className="w-25 d-flex flex-column flex-wrap align-items-center">
            <img className="round" src={"http://localhost:8080/image/profilePic/" + itineraries.profilePic + ".png"}></img>
            <span className="text w-80 text-center"> {itineraries.profilePic} </span>
          </div>
          <div className="w-75 d-flex flex-column align-items-center">
            <h4 className="w-100">{itineraries.title}</h4>
            <div className="d-flex flex-row justify-content-around w-100">
              <span className=""> Likes: {itineraries.rating}</span>
              <span className=""> {itineraries.duration} Hours</span>
              <span className=""> $$</span>
            </div>
            <div className="w-100 d-flex flex-row justify-content-around">
              {this.hash(itineraries.hashtags)}
            </div>
          </div>
        </div>
        <div className="w-100">
          <h5>Activities</h5>
          <Carousel>
            {itineraries.Activite.length>0 &&
              itineraries.Activite.map((activite)=>
                <Carousel.Item>
                  
                </Carousel.Item>           
              ) 
            }
          </Carousel>
        </div>
        <div className="w-100 d-flex expand" >
          <span className="h5 link w-100 text-center" onClick={this.props.close}>Close</span>
        </div>
    </div>
  )
  else
  return(
    <div></div>
  )
}
}

export default ItemItinerary;