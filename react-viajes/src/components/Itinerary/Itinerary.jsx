import React, { Component } from "react";
import Header from "./Header"
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import "./Itinerary.css"
import 'bootstrap/dist/css/bootstrap.css';
import ItemItinerary from "./ItemItinerary"
import { getCity } from "./../../actions/itinerariesActions"

class Itinerary extends Component {
  
  componentDidMount() {
    
    this.props.dispatch(getCity(this.props.match.params.name))
  }

  render() {
    var itinerary = () => {
      var datos = []
      if (this.props.city != undefined)
        for (var i = 0; i < this.props.city.itineraries.length; i++) {
          datos.push(<div key={i} className="imgbox mt-2 mb-2">
            <div><img></img><span></span></div>
            <div></div>
            <div></div>
          </div>)
        }
      return datos;
    }
    return (
      <div className="d-flex flex-column">
        <Header></Header>
        <div className="imgbox ">
          <img src={this.props.city===undefined? "" : this.props.city.image}></img>
          <span className="city-text">{this.props.city===undefined? "" : this.props.city.name}</span>
        </div>
        {!this.expand ?

          <div className="overflow-auto div-city d-flex flex-column align-items-center">
            {itinerary()}
          </div>
          :
          <div>
            <ItemItinerary></ItemItinerary>
          </div>
        }
        
          <div className="d-flex justify-content-around foot flex-row mb-1">
          <Link className="homeimg" to="/"><img className="w-100" src="/image/home.png" ></img></Link>
          <Link className="homeimg" to="/"><img className="w-100" src="/image/home.png" ></img></Link>
          <Link className="homeimg" to="/"><img className="w-100" src="/image/home.png" ></img></Link>
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