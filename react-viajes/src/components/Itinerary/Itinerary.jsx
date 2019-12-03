import React, { Component } from "react";
import Header from "./Header"
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import "./Itinerary.css"
import 'bootstrap/dist/css/bootstrap.css';
import ItemItinerary from "./ItemItinerary"
import { getCity } from "./../../actions/itinerariesActions"

class Itinerary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expand: false,
      id:null
    }
  }

  componentDidMount() {

    this.props.dispatch(getCity(this.props.match.params.name))
  }

  expandItinerary=(id)=>{
    //this.setState({id:id})
    this.setState({expand:true,id:id})
  }
  expandClose=()=>{
    this.setState({expand:false})
  }

  itinerary(){
  if (this.props.city !== undefined) {
    
    var datos = this.props.city.itineraries.map((itineraries, i) =>
      <div key={i} className="w-100 mt-1 mb-1 row flex-wrap box pt-2 pb-2">
        <div className="w-100 d-flex m-0">
          <div className="w-25 d-flex flex-column flex-wrap align-items-center">
            <img className="round" src={"http://localhost:8080/image/profilePic/" + itineraries.profilePic + ".png"} alt=""></img>
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
        <div className="w-100 d-flex expand"  onClick={this.expandItinerary.bind(this,i)}>
          <span className="h5 link w-100 text-center ">v View All v</span>
        </div>
      </div>)
      
    return datos
  }
}

 hash(hashtags) {
  return hashtags.map((tag, index) =>
    <div key={index} className="text">{tag}</div>
  )
}

  setItinerary(){
    if(!this.state.expand)
      return  <div className="overflow-auto div-itineraries d-flex flex-column align-items-center">
              {this.itinerary()}
              </div>
    else
      return <ItemItinerary itinerary={this.props.city.itineraries[this.state.id]} close={this.expandClose.bind(this)}></ItemItinerary>
  }

render() {

  return (
    <div className="d-flex flex-column">
      <Header></Header>
      <div className="tittlebox ">
        <img src={this.props.city === undefined ? "" : this.props.city.image} alt=""></img>
        <span className="city-text">{this.props.city === undefined ? "" : this.props.city.name}</span>
      </div>
      <h4>Avaliable MYtineraries</h4>
      {this.setItinerary()}
      <div className="d-flex justify-content-around foot flex-row mb-1">
        <img className="homeimg" src="/image/arrow-back.png" onClick={this.props.history.goBack} alt=""></img>
        <Link className="homeimg" to="/"><img className="w-100" src="/image/home.png" alt=""></img></Link>
        <img className="homeimg" alt=""></img>
      </div>
    </div>
  )
}
}

const mapStateToProps = (state) => ({
  city: state.itineraries.city,
  itinerary: state.itineraries.itinerary
});

export default connect(mapStateToProps)(Itinerary);