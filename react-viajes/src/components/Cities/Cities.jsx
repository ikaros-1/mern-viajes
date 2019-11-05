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
          datos.push(<li key={i}>{this.props.cities[i].name + " " + this.props.cities[i].country }</li>)
        }
        console.log(datos)
        console.log(this.props.cities)
        return datos;
    }
    return(
      <React.Fragment className="d-flex flex-row">
        <Header></Header>
        <ol>
          {city()}
        </ol>
        <div className="d-flex align-items-center flex-column">
          <img className="homeimg " src="/image/home.png"></img>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) =>({
  cities:state.cities.cities
});

export default connect(mapStateToProps)(Cities);