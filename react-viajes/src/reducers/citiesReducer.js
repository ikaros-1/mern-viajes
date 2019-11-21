import { GET_CITIES,GET_CITY,GET_ACTIVITIES,GET_COMMITS } from "../actions/type";

const initialState={
  cities:[]
}

export default function(state=initialState,action) {
  switch (action.type) {
    case GET_CITIES:
        return Object.assign({},state,{
          cities:action.cities
        })
      break;
    default:
        return{
          state
        }
      break;
  }
}
