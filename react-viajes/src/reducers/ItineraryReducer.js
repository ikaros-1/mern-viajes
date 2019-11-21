import { GET_ITINERARY, GET_CITY } from "../actions/type";

const initialState = {
    cities: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CITY:
            return {...state, city: action.city}
            break;
        case GET_ITINERARY:
            return {...state, itinerary: action.itinerary}
            break;
        default:
            return {
                state
            }
            break;
    }
}
