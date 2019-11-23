import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import itinerariesReducer from "./ItineraryReducer"

export default combineReducers({
  cities:citiesReducer,
  itineraries:itinerariesReducer
});
