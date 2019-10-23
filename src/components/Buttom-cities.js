import React, { Component } from 'react';
import circledright from '../image/circled-right-2.png';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="d-flex flex-column w-100 align-items-center">
        <h4 className="font-weight-bolder mb-3 " >Start browsing</h4>
        <a><img src={circledright} className="wh-40 mb-4" alt=""></img></a>
      </div>
    );
  }
}

export default App;
