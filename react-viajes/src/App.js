import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './css/App.css';
import Home from './components/Home/Home';
import Cities from './components/Cities/Cities';
import Itinerary from './components/Itinerary/Itinerary'
import { Provider } from "react-redux";
import store from "./store";
import Login from "./components/Login/Login"
import SignUp from "./components/SignUp/SignUp"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            
            <Route exact path="/login" component={Login}>
            </Route>
            <Route exact path="/register" component={SignUp}>
            </Route>
            <Route exact path="/cities/">
              <Cities></Cities>
            </Route>            
            <Route path="/cities/:name" component={Itinerary}>
            </Route>            
            <Route path="/">
              <Home></Home>
            </Route>
            
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
