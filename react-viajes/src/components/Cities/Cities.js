import React,{Component} from "react";




export default class Cities extends Component{
  constructor(){
    super();
    this.state = {
      cities:[]
    }
  }
  
  componentDidMount(){
    fetch("http://localhost:8080/cities")
      .then(data=>data.json())
      .then(function(json){
        this.setState({cities:json})
      }.bind(this))
  }
 
  render(){
    var city=()=>{
      var datos=[]
        for(var i=0;i<this.state.cities.length;i++){
          datos.push(<li key={i}>{this.state.cities[i].name + " " + this.state.cities[i].country }</li>)
        }
        return datos;
    }
    return(
      <div>
        <h2>Lista de ciudades</h2>
        <ul>
          {city()}
        </ul>
      </div>
    )
  }




}