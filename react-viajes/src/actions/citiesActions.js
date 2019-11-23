import { GET_CITIES } from "./type";
import axios from "axios";

export function getJson(dispatch){
  return dispatch=>{
    axios.get('http://localhost:8080/cities')
    .then(json=>{
      dispatch(getCities(json.data))
    })
  }
}

function getCities(json) {
  return{
    type: GET_CITIES,
    cities:json
  }
}