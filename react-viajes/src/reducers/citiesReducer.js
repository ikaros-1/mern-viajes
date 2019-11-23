import { GET_CITIES } from "../actions/type";

const initialState={
  cities:[]
}

export default function(state=initialState,action) {
  switch (action.type) {
    case GET_CITIES:
        return Object.assign({},state,{
          cities:action.cities
        });
      
    default:
        return state;
      
  }
}
