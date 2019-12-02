import React,{ Component  } from "react";
import Header from "./Header"
import {Link} from "react-router-dom"
import { connect } from "react-redux";
import { getJson } from "./../../actions/citiesActions";
import "./Cities.css"
import 'bootstrap/dist/css/bootstrap.css';


class Cities extends Component{
  constructor(){
    super();
    this.state={
      CitiesFiltered:[]
    }
  }
  
  componentDidMount(){
    this.props.dispatch(getJson())
    setTimeout(()=>this.setState({CitiesFiltered:this.props.cities}),200
    )
  }

  filterCity(event){
    if(event.target.value === "")
      this.setState({CitiesFiltered:this.props.cities})
    else{
      let cities=this.props.cities.filter((city)=>{return city.name.toLowerCase().indexOf(event.target.value.toLowerCase())>-1 || city.country.toLowerCase().indexOf(event.target.value.toLowerCase())>-1 })
      this.setState({CitiesFiltered:cities})
    }
  }

  render(){
    var city=()=>{
      var datos=[]
        if(this.state.CitiesFiltered!= null)
        for(var i=0;i<this.state.CitiesFiltered.length;i++){
          datos.push(<Link to={"/cities/"+this.state.CitiesFiltered[i].name} key={i} className="imgbox mt-2 mb-2"><img  src={this.state.CitiesFiltered[i].image} alt=""></img><span className="city-text">{this.state.CitiesFiltered[i].name }</span></Link>)
        }
        return datos;
    }
    return(
      <div className="d-flex flex-column">
        <Header></Header>
        <div className="mr-4 pl-3 pb-2 ml-4 pr-5">
          <h4>Find our cities</h4>
          <input className="w-100 pr-4" type="text" onChange={this.filterCity.bind(this)}></input>
        </div>
        <div className="overflow-auto div-city d-flex flex-column align-items-center">
            {city()}
        </div>
        <Link className="mt-1" to="/">
        <div className="d-flex align-items-center flex-column">
          <img className="homeimg" src="/image/home.png" alt=""></img>
        </div></Link>
      </div>
    )
  }
}

const mapStateToProps = (state) =>({
  cities:state.cities.cities
});

export default connect(mapStateToProps)(Cities);