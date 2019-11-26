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
    var hash = (hashtags)=>{
      return hashtags.map((tag,index)=>
      <div className="text">{tag}</div>
      )
    }
    var itinerary = () => {
      if (this.props.city != undefined){
      const datos = this.props.city.itineraries.map((itineraries,i)=>
          <div key={i} className="w-100 mt-1 mb-1 row flex-wrap box pt-2 pb-2">
            <div className="w-100 d-flex m-0">
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
                  {hash(itineraries.hashtags)}
                </div>
              </div>
            </div>
            <div className="w-100 d-flex expand">
              <span className="h5 link w-100 text-center ">v View All v</span>
            </div>
          </div>);
        return datos;
      }
    }
    return (
      <div className="d-flex flex-column">
        <Header></Header>
        <div className="imgbox ">
          <img src={this.props.city === undefined ? "" : this.props.city.image}></img>
          <span className="city-text">{this.props.city === undefined ? "" : this.props.city.name}</span>
        </div>
        <h3>Avaliable MYtineraries</h3>
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
          <img className="homeimg" src="/image/arrow-back.png" onClick={this.props.history.goBack}></img>
          <Link className="homeimg" to="/"><img className="w-100" src="/image/home.png" ></img></Link>
          <Link className="homeimg" ><img className="w-100"></img></Link>
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