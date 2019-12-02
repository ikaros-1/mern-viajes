import { GET_CITY } from "./type";
import axios from "axios";

export const getCity=(id)=>async dispatch=>{
    axios.get('http://localhost:8080/cities/'+city)
    .then(json=>{
      dispatch(get_City(json.data))
    })
}


function get_City(json) {
  return{
    type: GET_CITY,
    cities:json
  }
}