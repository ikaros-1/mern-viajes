import React,{ Component  } from "react";
import Header from "./Header"
import {Link} from "react-router-dom"
import { connect } from "react-redux";
import { getJson } from "../../actions/citiesActions";
import "./Itinerary.css"
import 'bootstrap/dist/css/bootstrap.css';
import ItemItinerary from "./ItemItinerary"


class Cities extends Component{
  constructor(){
    super();
    this.state={
      expand:false
    }
  }
  
  componentDidMount(){
    
  }

  filterCity(event){
    console.log(this.props)
    console.log(event.target.value)
    if(event.target.value == "")
      this.setState({CitiesFiltered:this.props.cities})
    else{
      let cities=this.props.cities.filter((city)=>{return city.name.toLowerCase().indexOf(event.target.value.toLowerCase())>-1||city.country.toLowerCase().indexOf(event.target.value.toLowerCase())>-1 })
      this.setState({CitiesFiltered:cities})
    }
  }

  render(){
    var itinerary=()=>{
      var datos=[]
        if(this.state.CitiesFiltered!= null)
        for(var i=0;i<this.state.CitiesFiltered.length;i++){
          datos.push(<div key={i} className="imgbox mt-2 mb-2"><img  src={'/image/image-city/' + this.state.CitiesFiltered[i].image}></img><span className="city-text">{this.state.CitiesFiltered[i].name }</span></div>)
        }
        return datos;
    }
    return(
      <div className="d-flex flex-column">
        <Header></Header>
        {!this.expand ?(
        <div className="imgbox mt-2 mb-2"> <img src={'/image/image-city/' + this.state.city}></img><span className="city-text">{this.state.city }</span></div>
        <div className="overflow-auto div-city d-flex flex-column align-items-center">
            {itinerary()}
        </div>) :
        <div>
          <ItemItinerary></ItemItinerary>
        </div>
        }
        <Link className="mt-1" to="/">
        <div className="d-flex align-items-center flex-column">
          <img className="homeimg" src="/image/home.png" ></img>
        </div></Link>
      </div>
    )
  }
}

const mapStateToProps = (state) =>({
  city:state.city
});

export default connect(mapStateToProps)(Cities);