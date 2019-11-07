import React,{ Component  } from "react";
import Header from "./Header"
import { connect } from "react-redux";
import { getJson } from "./../../actions/citiesActions";
import "./Cities.css"
import 'bootstrap/dist/css/bootstrap.css';


class Cities extends Component{
  componentDidMount(){
    this.props.dispatch(getJson())
  }

  render(){
    var city=()=>{
      var datos=[]
        if(this.props.cities!= null)
        for(var i=0;i<this.props.cities.length;i++){
          datos.push(<div className="imgbox mt-2 mb-2"><img key={i} src={'/image/image-city/' + this.props.cities[i].image}></img><span className="city-text">{this.props.cities[i].name }</span></div>)
        }
        console.log(datos)
        console.log(this.props.cities)
        return datos;
    }
    return(
      <div className="d-flex flex-column">
        <Header></Header>
        <div className="overflow-auto div-city d-flex flex-column align-items-center">
          
            {city()}
          
        </div>
        <div className="d-flex align-items-center flex-column">
          <img className="homeimg " src="/image/home.png"></img>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) =>({
  cities:state.cities.cities
});

export default connect(mapStateToProps)(Cities);