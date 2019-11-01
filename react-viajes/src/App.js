import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './css/App.css';
import Home from './components/Home/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
          
          </Route>
          <Route path="/register">
          </Route>
          <Route path="/cities">
          
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
