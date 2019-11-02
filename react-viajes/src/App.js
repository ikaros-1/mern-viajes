import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './css/App.css';
import Home from './components/Home/Home';
import Cities from './components/Cities/Cities';
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/login">
          
            </Route>
            <Route exact path="/register">
            </Route>
            <Route exact path="/cities">
              <Cities></Cities>
            </Route>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
