import React, { Component } from "react";
//import { connect } from "react-redux";
import "./Itinerary.css"
import 'bootstrap/dist/css/bootstrap.css';
import Slider from "react-slick";

class ItemItinerary extends Component {
constructor(props){
  super(props);
  this.state={
    menssage:"",
    numAct:0
  }
}
hash(hashtags) {
  return hashtags.map((tag, index) =>
    <div key={index} className="text">{tag}</div>
  )
}
sendCommit(){

}
setCommit(id){
  this.setState({numAct:id})
}

render() {
  var setting={
    numAct:0,
    dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows:false
  }
  var itineraries=this.props.itinerary;
  var items=itineraries.activities.map((act,i)=>
    <div onClick={this.setCommit.bind(this,i)}>
      <img src={"https://localhost:8080/image/activities/"+act.Img}  alt=""></img>
      <div className="centered">{act.Tittle}</div>
    </div>
    )

  if(itineraries!==undefined)
  return (
    <div className="div-itinerary d-flex flex-column ml-1">
      <div className="w-100 d-flex mt-3 mb-3">
          <div className="w-25 d-flex flex-column flex-wrap align-items-center">
            <img className="round" src={"http://localhost:8080/image/profilePic/" + itineraries.profilePic + ".png"  } alt=""></img>
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
          <Slider className="slider-activity" {...setting}>
            {items
            }
          </Slider>
        </div>
        <div className="slider-activity ">
          <div className="d-flex flex-row">
            <input type="text" value={this.state.menssage}  />
            <div onClick={this.sendCommit()}>Send</div>
          </div>
          <div className="d-flex align-items-left flex-column" >
            {itineraries.activities[this.state.numAct].Comments.map((coment)=>
              <div>{coment} </div>
            )}
          </div>
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