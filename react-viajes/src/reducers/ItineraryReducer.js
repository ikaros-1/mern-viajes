import { GET_ITINERARY, GET_CITY } from "../actions/type";

const initialState = {
  city:[],
  itinerary:[]
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CITY:
            return {...state, city: action.city}
            
        case GET_ITINERARY:
            return {...state, itinerary: action.itinerary}
            
        default:
            return {
                state
            }
            
    }
}
