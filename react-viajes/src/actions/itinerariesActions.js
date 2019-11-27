import { GET_CITY,GET_ITINERARY } from "./type";
import axios from "axios";

export const getCity=(id)=>async dispatch=>{
    axios.get('http://localhost:8080/cities/'+id)
    .then(json=>{
      dispatch(City(json.data))
    })
}
export const getItinerary=(id)=>async dispatch=>{
  axios.get('http://localhost:8080/itinerary/'+id)
  .then(json=>{
    dispatch(Itinerary(json.data))
  })
}

function City(json) {
  return{
    type: GET_CITY,
    city:json
  }
}
function Itinerary(json){
    return{type:GET_ITINERARY,itinerary:json}
}
