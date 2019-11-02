import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    windows.__REDUX_DEVTOOLS_EXTENSION__ && windows.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
